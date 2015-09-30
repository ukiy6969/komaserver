/// <reference path='../koma/koma.ts' />
/// <reference path='../mass/mass.ts' />
var komaclient;
(function (komaclient) {
    'use strict';
    function gogoshogiGame() {
        return {
            templateUrl: 'app/components/gogoshogi/game/game.html',
            restrict: 'E',
            controller: GogoshogiGameController,
            controllerAs: 'game',
            bindToController: true
        };
    }
    komaclient.gogoshogiGame = gogoshogiGame;
    var GogoshogiGameController = (function () {
        /** @ngInject */
        function GogoshogiGameController(gogoshogiSocket) {
            console.log(this);
            this.komas = [];
            this.komas.push(new komaclient.GogoshogiKomaOu(false));
            this.komas.push(new komaclient.GogoshogiKomaOu(true));
            this.komas.push(new komaclient.GogoshogiKomaKi(false));
            this.komas.push(new komaclient.GogoshogiKomaKi(true));
            this.komas.push(new komaclient.GogoshogiKomaGi(false));
            this.komas.push(new komaclient.GogoshogiKomaGi(true));
            this.komas.push(new komaclient.GogoshogiKomaKa(false));
            this.komas.push(new komaclient.GogoshogiKomaKa(true));
            this.komas.push(new komaclient.GogoshogiKomaHi(false));
            this.komas.push(new komaclient.GogoshogiKomaHi(true));
            this.komas.push(new komaclient.GogoshogiKomaFu(false));
            this.komas.push(new komaclient.GogoshogiKomaFu(true));
            this.masses = [];
            this.legalMoves = [];
            for (var j = 0; j <= 6; j++) {
                for (var i = 5; i >= 1; i--) {
                    if (j === 0) {
                        this.masses.push(new komaclient.MassModel({
                            x: i, y: j, moval: false, isKoma: false, isHave: true
                        }));
                        continue;
                    }
                    if (j === 6) {
                        this.masses.push(new komaclient.MassModel({
                            x: i, y: j, moval: false, isKoma: false, isHave: true
                        }));
                        continue;
                    }
                    this.masses.push(new komaclient.MassModel({
                        x: i, y: j, moval: false, isKoma: false, isHave: false
                    }));
                }
            }
            this.socket = gogoshogiSocket;
            this.isStart = false;
            this.promoteMove = null;
            this.isEnd = false;
        }
        GogoshogiGameController.prototype.startGame = function () {
            var _this = this;
            this.isStart = true;
            this.socket.emit('new-game', {});
            this.socket.on('confirm', function (newGame) {
                console.log(newGame);
                _this.socket.emit('agree', newGame);
            });
            this.socket.on('start', function (game) {
                if (game.header.firstMove === 'client') {
                    _this.color = 0;
                }
                else {
                    _this.color = 1;
                }
                console.log(_this.color);
            });
            this.socket.on('moved', function (move) {
                _this.moved(move);
            });
            this.socket.on('legal', function (lmoves) {
                lmoves.forEach(function (lmove) {
                    if (_this.color === 1) {
                        _this.reverseMove(lmove);
                    }
                });
                console.log(lmoves);
                _this.legalMoves = lmoves;
            });
            this.socket.on('err', function (err) {
                console.log('err', err);
            });
            this.socket.on('lose', function (lose) {
                _this.endGame(lose);
            });
        };
        GogoshogiGameController.prototype.endGame = function (message) {
            this.isEnd = true;
            this.message = message.message;
        };
        GogoshogiGameController.prototype.getLegalKoma = function (x, y) {
            return _.filter(this.legalMoves, { from: { x: x, y: y } });
        };
        GogoshogiGameController.prototype.getLegalKomaHave = function (piece, enemy) {
            return _.filter(this.legalMoves, { piece: piece, from: { x: 0, y: 0 } });
        };
        GogoshogiGameController.prototype.select = function (x, y) {
            if (x < 1 || 5 < x || y < 1 || 5 < y) {
                return;
            }
            _.find(this.masses, { x: x, y: y })
                .select();
        };
        GogoshogiGameController.prototype.selectLegal = function () {
            var _this = this;
            this.legalMoves.forEach(function (move) {
                _this.select(move.to.x, move.to.y);
            });
        };
        GogoshogiGameController.prototype.selectKoma = function (x, y) {
            return _.find(this.masses, { x: x, y: y })
                .selectKoma();
        };
        GogoshogiGameController.prototype.selectKomaHave = function (piece, enemy) {
        };
        GogoshogiGameController.prototype.reset = function () {
            this.masses.forEach(function (mass) {
                mass.reset();
            });
        };
        GogoshogiGameController.prototype.getKoma = function (x, y) {
            return _.find(this.komas, { x: x, y: y });
        };
        GogoshogiGameController.prototype.getKomaDetail = function (x, y, piece, enemy) {
            return _.find(this.komas, { x: x, y: y, piece: piece, enemy: enemy });
        };
        GogoshogiGameController.prototype.getKomaHave = function (piece, enemy) {
            return _.find(this.komas, { x: 0, y: 0, piece: piece, enemy: enemy });
        };
        GogoshogiGameController.prototype.moval = function (x, y) {
            return _.find(this.masses, { x: x, y: y }).isMoval();
        };
        GogoshogiGameController.prototype.reverseMove = function (move) {
            move.to.x = 6 - move.to.x;
            move.to.y = 6 - move.to.y;
            if (move.from.x === 0 && move.from.y === 0) {
                return;
            }
            move.from.x = 6 - move.from.x;
            move.from.y = 6 - move.from.y;
        };
        GogoshogiGameController.prototype.selectFrom = function (x, y) {
            var _this = this;
            var lmoves = this.getLegalKoma(x, y);
            if (!lmoves.length) {
                this.reset();
                return;
            }
            lmoves.forEach(function (lmove) {
                _this.select(lmove.to.x, lmove.to.y);
            });
            this.selectKoma(x, y);
            this.isSelect = this.getKoma(x, y);
        };
        GogoshogiGameController.prototype.selectHaveFrom = function (piece, enemy) {
            var _this = this;
            var lmoves = this.getLegalKomaHave(piece, enemy);
            if (!lmoves.length) {
                this.reset();
                return;
            }
            lmoves.forEach(function (lmove) {
                _this.select(lmove.to.x, lmove.to.y);
            });
            this.selectKomaHave(piece, enemy);
            this.isSelect = this.getKomaHave(piece, enemy);
            console.log(this.isSelect);
        };
        GogoshogiGameController.prototype.moveTo = function (x, y) {
            var move;
            if (!this.moval(x, y)) {
                this.isSelect = null;
                this.reset();
                return;
            }
            move = {
                color: this.color,
                from: {
                    x: this.isSelect.x,
                    y: this.isSelect.y
                },
                to: {
                    x: x,
                    y: y
                },
                piece: this.isSelect.piece,
                promote: false
            };
            if (y === 1 && (!this.isSelect.isPromote)) {
                this.promoteMove = move;
                return;
            }
            this.sendMove(move);
            this.isSelect = null;
            this.reset();
        };
        GogoshogiGameController.prototype.isPromote = function (promote) {
            if (promote) {
                this.promoteMove.piece = this.isSelect.promotePiece;
            }
            this.sendMove(this.promoteMove);
            this.promoteMove = null;
            this.isSelect = null;
            this.reset();
        };
        GogoshogiGameController.prototype.sendMove = function (move) {
            if (this.color === 1) {
                this.reverseMove(move);
            }
            this.socket.emit('move', move);
            this.legalMoves = null;
        };
        GogoshogiGameController.prototype.moved = function (move) {
            if (this.color === 1) {
                this.reverseMove(move);
            }
            console.log(move);
            var enemy;
            if (this.color === move.color) {
                enemy = false;
            }
            else {
                enemy = true;
            }
            var moveKoma = this.getKomaDetail(move.from.x, move.from.y, move.piece, enemy);
            if (move.capture) {
                var capKoma = this.getKoma(move.to.x, move.to.y);
                capKoma.move(0, 0);
                capKoma.changeOwner();
                capKoma.unPromote();
            }
            if (move.promote) {
                moveKoma.promote();
            }
            moveKoma.move(move.to.x, move.to.y);
        };
        GogoshogiGameController.prototype.click = function (x, y) {
            if (!this.legalMoves) {
                return;
            }
            if (!this.isSelect) {
                this.selectFrom(x, y);
                return;
            }
            this.moveTo(x, y);
        };
        GogoshogiGameController.prototype.clickHave = function (piece, enemy) {
            if (!this.legalMoves) {
                return;
            }
            if (!this.isSelect) {
                this.selectHaveFrom(piece, enemy);
                return;
            }
        };
        return GogoshogiGameController;
    })();
    komaclient.GogoshogiGameController = GogoshogiGameController;
})(komaclient || (komaclient = {}));
