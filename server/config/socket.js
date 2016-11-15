var socketIo = require('socket.io');
var gogoShogi = require('../models/gogo-shogi/gogo-shogi');
var co = require('co');
module.exports = function(app) {
  var io = socketIo(app);
  io.set('heartbeat timeout',500000);
  io.set('heartbeat interval',5000);
  var komachanSocket = null;
  var gogos = {};

  io.on('connection', function(socket) {
    console.log('connected');
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
          if( game.header.firstMove === 'koma' ) {
            gogo.moveKomachan(id)
            .then(function(move){
              //console.log('moved', move);
              socket.emit('moved', move);
              return gogo.getLegalmoves(id);
            })
            .then(function(legalmoves){
              socket.emit('legal', legalmoves);
              //console.log('legal', legalmoves);
            });
          } else {
            gogo.getLegalmoves(id)
            .then(function(legalmoves){
              socket.emit('legal', legalmoves);
              //console.log('legal', legalmoves);
            })
          }
        })
      });
      socket.on('move', function(data){
        gogo.moveClient(id, data)
        .then(function(move){
          if (move.lose) {
            gogo.endGame(id)
            .then(function(lgame){
              socket.emit('lose', {message: 'YOU LOSE >_<', game: lgame});
              if(gogo) {
                gogo = null;
              }
            });
            return;
          }
          socket.emit('moved', move);
          //console.log('moved', move);
          return gogo.moveKomachan(id);
        })
        .then(function(kmove){
          if (!kmove) {
            return;
          }
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
          //console.log('mmoved', kmove);
          return gogo.getLegalmoves(id);
        })
        .then(function(legalMoves) {
          if ( !legalMoves) {
            return;
          }
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
          //console.log('legal', legalMoves);
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
        console.log('disconnect');
        if(gogo) {
          gogo = null;
        }
      });
    });
    socket.on('ping', function(data){
      //console.log('ping', data);
    });
  });
}
