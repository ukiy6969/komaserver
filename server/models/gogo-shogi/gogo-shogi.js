//debug
var GogoShogiModel = require('./gogo-shogi.model.js'),
    path = require('path'),
    _ = require('lodash'),
    co = require('co'),
    Komachan = require('komachan');

/**
  * @param {Object} option
  * player: Array must be 2
  *
  */
function GogoController () {
  var self = this;
  self.firstMove;
  self.secondMove;
  self.komachan = Komachan.newKomachan();
  self.komachan.start();
}

GogoController.prototype.newGame = function(opt) {
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
  return self.model;
}
GogoController.prototype.startGame = function(g){
  var self = this;
  self.model = new GogoShogiModel(g);
  return self.model.save();
}
GogoController.prototype.endGame = function(id){
  var self = this;
  return co(function* (){
    var game = yield GogoShogiModel.findById(id).exec();
    return yield game.save();
  });
}
GogoController.prototype.moveClient = function(id,cmove){
  var self = this;
  return co(function* (){
    var move = self.komachan.move(cmove);
    if (!move) {
      return ((move || {}).lose = true);
    }
    var game = yield GogoShogiModel.findById(id).exec();
    game.moves.push(move);
    yield game.save();
    return move;
  });
}
GogoController.prototype.moveKomachan = function(id){
  var self = this;
  return co(function* (){
    var move = self.komachan.search();
    if (!move) {
      return ((move || {}).lose = true);
    }
    var game = yield GogoShogiModel.findById(id).exec();
    game.moves.push(move);
    yield game.save();
    return move;
  });
}
GogoController.prototype.getLegalmoves = function(id){
  var self = this;
  return co(function* (){
    return self.komachan.legal();
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
