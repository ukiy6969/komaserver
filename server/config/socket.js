var socketIo = require('socket.io');
var gogoShogi = require('../models/gogo-shogi/gogo-shogi');
module.exports = function(app) {
  var io = socketIo(app);
  var komachanSocket = null;

  io.on('connection', function(socket) {
    socket.on('new-game', function(data) {
      var gogo = gogoShogi.game();
      var id;
      gogo.newGame({player: ['client', 'koma']}, function(game){
        io.emit('confirm', game);
      });
      socket.once('agree', function(data){
        gogo.startGame(data, function(err, game){
          id = game._id;
          socket.join(id);
          socket.emit('start', game);
          if (gogo.firstMove === 'koma'){
            gogo.moveKomachan(id, function(err, move){
              if(err) { return socket.emit('err', err); }
              socket.emit('moved', move);
              gogo.getLegalmoves(id, function(err, lmoves){
                if(err) { return socket.emit('err', err); }
                socket.emit('legal', lmoves);
              });
            });
          }else {
            gogo.getLegalmoves(id, function(err, lmoves){
              if(err) { return socket.emit('err', err); }
              socket.emit('legal', lmoves);
            });
          }
        });
      });
      socket.on('move', function(data){
        var id = socket.rooms[socket.rooms.length-1];
        gogo.moveClient(id, data, function(err, move){
          if (err) { return socket.emit('err', err); }
          if (move.lose){
            socket.emit('lose', move);
            if(gogo) {
              gogo.end();
              gogo = null;
            }
            return;
          }
          socket.emit('moved', move);
          gogo.moveKomachan(id, function(err, move){
            if(err) { return socket.emit('err', err); }
            if(move.lose){
              gogo.endGame(id, function(err, fgame){
                if(err){ return socket.emit('err', err); }
                if(gogo) {
                  gogo.end();
                  gogo = null;
                }
                return socket.emit('win', {message: 'YOU WIN (>ω<)', game: fgame});
              });
              return;
            }
            socket.emit('moved', move);
            gogo.getLegalmoves(id, function(err, lmoves){
              if(err) { return socket.emit('err', err); }
              if(!lmoves.length){
                gogo.endGame(id, function(err, fgame){
                  if(err){ return socket.emit('err', err); }
                  if(gogo) {
                    gogo.end();
                    gogo = null;
                  }
                  return socket.emit('lose', {message: 'YOU LOSE >_<', game: fgame});
                });
              }
              socket.emit('legal', lmoves);
            });
          });
        });
      });
      socket.on('disconnect', function(data){
        if(gogo) {
          gogo.end();
          gogo = null;
        }
      });
    });
  });
}
