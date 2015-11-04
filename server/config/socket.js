var socketIo = require('socket.io');
var gogoShogi = require('../models/gogo-shogi/gogo-shogi');
var co = require('co');
module.exports = function(app) {
  var io = socketIo(app);
  var komachanSocket = null;

  io.on('connection', function(socket) {
    socket.on('new-game', function(data) {
      var gogo = gogoShogi.game();
      var id;
      var game = gogo.newGame({player: ['client', 'koma']})
      socket.emit('confirm', game);
      socket.once('agree', function(data){
        gogo.startGame(data)
        .then(function(game){
          id = game._id;
          socket.join(id);
          socket.emit('start', game);
          return game;
        })
        .then(function(game){
          if( gogo.firstMove === 'koma' ) {
            gogo.moveKomachan(id)
            .then(function(move){
              console.log('moved', move);
              socket.emit('moved', move);
              return gogo.getLegalmoves(id);
            })
            .then(function(legalmoves){
              socket.emit('legal', legalmoves);
              console.log('legal', legalmoves);
            });
          } else {
            gogo.getLegalmoves(id)
            .then(function(legalmoves){
              socket.emit('legal', legalmoves);
              console.log('legal', legalmoves);
            })
          }
        })
      });
      socket.on('move', function(data){
        var id = socket.rooms[socket.rooms.length-1];
        gogo.moveClient(id, data)
        .then(function(move){
          if (move.love) {
            gogo.endGame(id)
            .then(function(lgame){
              socket.emit('lose', move);
              if(gogo) {
                gogo = null;
              }
            });
          }
          socket.emit('moved', move);
          console.log('moved', move);
          return gogo.moveKomachan(id);
        })
        .then(function(kmove){
          if (kmove.lose) {
            gogo.endGame(id)
            .then(function(wgame){
              socket.emit('win', {message: 'YOU WIN (>ω<)', game: wgame});
              if (gogo) {
                gogo = null;
              }
            });
            return;
          }
          socket.emit('moved', kmove);
          console.log('mmoved', kmove);
          return gogo.getLegalmoves(id);
        })
        .then(function(legalMoves) {
          if ( !legalMoves.length) {
            gogo.endGame(id)
            .then(function(lgame){
              socket.emit('lose', {message: 'YOU LOSE >_<', game: lgame});
              if(gogo) {
                gogo = null;
              }
            });
            return;
          }
          socket.emit('legal', legalMoves);
          console.log('legal', legalMoves);
        })
        .catch(function(err){
          console.log('err', err);
          socket.emit('err', err);
          if(gogo) {
            gogo = null;
          }
          socket.disconnect();
        });
      });
      socket.on('disconnect', function(data){
        if(gogo) {
          gogo = null;
        }
      });
    });
  });
}
