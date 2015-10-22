//debug
var GogoShogiModel = require('./gogo-shogi.model.js'),
    path = require('path'),
    _ = require('lodash');
    Komachan = require('komachan');

delete(require.cache[path.resolve('komachan.js')]);

/**
  * @param {Object} option
  * player: Array must be 2
  *
  */
function GogoController () {
  var self = this;
  self.firstMove;
  self.secondMove;
  self.komachan = Komachan.komachan({debug: true});
}

GogoController.prototype.newGame = function(opt, cb) {
  var self = this;
  if (!opt) { return new Error('must be opt'); }
  if (opt.player.length !== 2) {
    return new Error('must be player is 2');
  }
  var rdm = Math.floor(Math.random()*2);
  var first = opt.player[rdm];
  var second = opt.player[1-rdm];
  self.firstMove = first;
  self.secondMove = second;
  self.model = {
    header: {
      firstMove: first,
      secondMove: second
    }
  };
  if(!cb){ return ; }
  cb(self.model);
}
GogoController.prototype.startGame = function(g, cb){
  var self = this;
  self.model = new GogoShogiModel(g);
  self.model.save(function (err, game) {
    if (err) { return cb(err); }
    return cb(null, game);
  });
}
GogoController.prototype.endGame = function(id, cb){
  var self = this;
  GogoShogiModel.findById(id, function(err, game){
    if(err){ return cb(err); }
    game.conclude = {};
    game.conclude.winner = game.moves[game.moves.length-1].color;
    game.conclude.loser = 1 - game.conclude.winner;
    game.save(function(err, fgame){
      if(err){ return cb(err); }
      return cb(null, fgame);
    });
  });
}
GogoController.prototype.moveClient = function(id,cmove,cb){
  var self = this;
  self.komachan.move(cmove, function(err, move){
    if(!cb){ return ; }
    if (err) { return cb(err); }
    GogoShogiModel.findById(id, function(err, game){
      if(err){ return cb(err);}
      if(move.lose){
        _.merge(move, cmove);
      }
      game.moves.push(move);
      game.save(function(err, game){
        if(err){ return cb(err); }
        cb(null, game.moves[game.moves.length-1]);
      })
    });
  });
}
GogoController.prototype.moveKomachan = function(id, cb){
  var self = this;
  self.komachan.search(function(err, move){
    if(!cb){ return ; }
    if (err) { return cb(err); }
    if (move.lose){
      return cb(null, move);
    }
    GogoShogiModel.findById(id, function(err, game){
      if(err){ return cb(err); }
      game.moves.push(move);
      game.save(function(err, game){
        if(err){ return cb(err); }
        cb(null, game.moves[game.moves.length-1]);
      });
    });
  });
}
GogoController.prototype.getLegalmoves = function(id, cb){
  var self = this;
  self.komachan.legal(function(err, legalmoves){
    if(!cb){ return; }
    if(err) { return cb(err); }
    cb(null, legalmoves);
  });
}
GogoController.prototype.end = function(){
  this.komachan.end();
}
module.exports = {
  game : function(){
    return new GogoController();
  }
}
