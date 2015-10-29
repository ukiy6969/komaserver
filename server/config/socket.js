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
        return co(function* (){
          var game = yield gogo.startGame(data);
          id = game._id;
          socket.join(id);
          socket.emit('start', game);
          if( gogo.firstMove === 'koma' ) {
            var move = yield gogo.moveKomachan(id);
            socket.emit('moved', move);
            var legalmoves = yield gogo.getLegalmoves(id);
            socket.emit('legal', legalmoves);
          } else {
            var legalmoves = yield gogo.getLegalmoves(id);
            socket.emit('legal', legalmoves);
          }
        }).catch(function(err){
          console.log(err);
          socket.emit('err', err);
        });
      });
      socket.on('move', function(data){
        var id = socket.rooms[socket.rooms.length-1];
        return co(function* (){
          var move = yield gogo.moveClient(id, data);
          if (move.love) {
            var lgame = yield gogo.endGame(id);
            socket.emit('lose', move);
            if(gogo) {
              gogo = null;
            }
            return;
          }
          socket.emit('moved', move);
          var kmove = yield gogo.moveKomachan(id);
          if (kmove.lose) {
            var wgame = yield gogo.endGame(id);
            socket.emit('win', {message: 'YOU WIN (>ω<)', game: wgame});
            if (gogo) {
              gogo = null;
            }
            return;
          }
          socket.emit('moved', kmove);
          var legalMoves = yield gogo.getLegalmoves(id);
          if (!legalMoves.length) {
            var lgame = yield gogo.endGame(id);
            socket.emit('lose', {message: 'YOU LOSE >_<', game: lgame});
            if(gogo) {
              gogo = null;
            }
            return;
          }
          socket.emit('legal', legalMoves);
        }).catch(function(err){
          console.log('err', err);
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
