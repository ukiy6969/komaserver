var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgFor, NgIf } from 'angular2/angular2';
import { GogoshogiKomaOu, GogoshogiKomaKi, GogoshogiKomaGi, GogoshogiKomaKa, GogoshogiKomaHi, GogoshogiKomaFu } from '../koma/koma';
import { MassModel } from '../mass/mass';
import * as _ from 'lodash';
import * as io from 'socket.io-client';
import { Mass } from '../mass/mass.directive';
import { Koma } from '../koma/koma.directive';
import './game.scss!';
import "bootstrap/css/bootstrap.css!";
export let GogoshogiGame = class {
    constructor() {
        this.komas = [];
        this.komas.push(new GogoshogiKomaOu(false));
        this.komas.push(new GogoshogiKomaOu(true));
        this.komas.push(new GogoshogiKomaKi(false));
        this.komas.push(new GogoshogiKomaKi(true));
        this.komas.push(new GogoshogiKomaGi(false));
        this.komas.push(new GogoshogiKomaGi(true));
        this.komas.push(new GogoshogiKomaKa(false));
        this.komas.push(new GogoshogiKomaKa(true));
        this.komas.push(new GogoshogiKomaHi(false));
        this.komas.push(new GogoshogiKomaHi(true));
        this.komas.push(new GogoshogiKomaFu(false));
        this.komas.push(new GogoshogiKomaFu(true));
        this.piecesr = ['KI', 'GI', 'HI', 'KA', 'FU'];
        this.pieces = ['FU', 'KA', 'HI', 'GI', 'KI'];
        this.masses = [];
        this.legalMoves = [];
        for (var j = 0; j <= 6; j++) {
            for (var i = 5; i >= 1; i--) {
                if (j === 0) {
                    this.masses.push(new MassModel({
                        x: i, y: j, moval: false, isKoma: false, isHave: true
                    }));
                    continue;
                }
                if (j === 6) {
                    this.masses.push(new MassModel({
                        x: i, y: j, moval: false, isKoma: false, isHave: true
                    }));
                    continue;
                }
                this.masses.push(new MassModel({
                    x: i, y: j, moval: false, isKoma: false, isHave: false
                }));
            }
        }
        this.socket = io.connect('/');
        this.isStart = false;
        this.promoteMove = null;
        this.isEnd = false;
    }
    startGame() {
        this.isStart = true;
        console.log('isStart', this.isStart);
        this.socket.emit('new-game', {});
        this.socket.on('confirm', (newGame) => {
            console.log(newGame);
            this.socket.emit('agree', newGame);
        });
        this.socket.on('start', (game) => {
            if (game.header.firstMove === 'client') {
                this.color = 0;
            }
            else {
                this.color = 1;
            }
            console.log(this.color);
        });
        this.socket.on('moved', (move) => {
            console.log(move);
            this.moved(move);
        });
        this.socket.on('legal', (lmoves) => {
            console.log(lmoves);
            lmoves.forEach((lmove) => {
                if (this.color === 1) {
                    this.reverseMove(lmove);
                }
            });
            this.legalMoves = lmoves;
        });
        this.socket.on('err', (err) => {
            console.log('err', err);
        });
        this.socket.on('win', (win) => {
            this.endGame(win);
        });
        this.socket.on('lose', (lose) => {
            this.endGame(lose);
        });
    }
    endGame(message) {
        this.isEnd = true;
        this.message = message.message;
    }
    getLegalKoma(x, y) {
        return _.filter(this.legalMoves, { from: { x: x, y: y } });
    }
    getLegalKomaHave(piece, enemy) {
        return _.filter(this.legalMoves, { piece: piece, from: { x: 0, y: 0 } });
    }
    select(x, y) {
        if (x < 1 || 5 < x || y < 1 || 5 < y) {
            return;
        }
        _.find(this.masses, { x: x, y: y })
            .select();
    }
    selectLegal() {
        this.legalMoves.forEach((move) => {
            this.select(move.to.x, move.to.y);
        });
    }
    selectKoma(x, y) {
        return _.find(this.masses, { x: x, y: y })
            .selectKoma();
    }
    selectKomaHave(piece, enemy) {
        var x;
        var y;
        if (enemy) {
            x = _.indexOf(this.piecesr, piece) + 1;
            y = 0;
        }
        else {
            x = _.indexOf(this.pieces, piece) + 1;
            y = 6;
        }
        _.find(this.masses, { x: x, y: y }).selectKoma();
    }
    reset() {
        this.masses.forEach((mass) => {
            mass.reset();
        });
    }
    getKoma(x, y) {
        return _.find(this.komas, { x: x, y: y });
    }
    getKomaDetail(x, y, enemy) {
        return _.find(this.komas, { x: x, y: y, enemy: enemy });
    }
    getKomaHave(piece, enemy) {
        return _.find(this.komas, { x: 0, y: 0, piece: piece, enemy: enemy });
    }
    moval(x, y) {
        return _.find(this.masses, { x: x, y: y }).isMoval();
    }
    reverseMove(move) {
        move.to.x = 6 - move.to.x;
        move.to.y = 6 - move.to.y;
        if (move.from.x === 0 && move.from.y === 0) {
            return;
        }
        move.from.x = 6 - move.from.x;
        move.from.y = 6 - move.from.y;
    }
    selectFrom(x, y) {
        var lmoves = this.getLegalKoma(x, y);
        if (!lmoves.length) {
            this.reset();
            return;
        }
        lmoves.forEach((lmove) => {
            this.select(lmove.to.x, lmove.to.y);
        });
        this.selectKoma(x, y);
        this.isSelect = this.getKoma(x, y);
    }
    selectHaveFrom(piece, enemy) {
        var lmoves = this.getLegalKomaHave(piece, enemy);
        if (!lmoves.length) {
            this.reset();
            return;
        }
        lmoves.forEach((lmove) => {
            this.select(lmove.to.x, lmove.to.y);
        });
        this.selectKomaHave(piece, enemy);
        this.isSelect = this.getKomaHave(piece, enemy);
    }
    moveTo(x, y) {
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
        if (y === 1 && (!this.isSelect.isPromote) && this.isSelect.canPromote()) {
            this.promoteMove = move;
            return;
        }
        this.sendMove(move);
        this.isSelect = null;
        this.reset();
    }
    isPromote(promote) {
        if (promote) {
            this.promoteMove.piece = this.isSelect.promotePiece;
        }
        this.sendMove(this.promoteMove);
        this.promoteMove = null;
        this.isSelect = null;
        this.reset();
    }
    sendMove(move) {
        if (this.color === 1) {
            this.reverseMove(move);
        }
        this.socket.emit('move', move);
        this.legalMoves = null;
    }
    moved(move) {
        if (this.color === 1) {
            this.reverseMove(move);
        }
        var enemy;
        if (this.color === move.color) {
            enemy = false;
        }
        else {
            enemy = true;
        }
        var moveKoma = this.getKomaDetail(move.from.x, move.from.y, enemy);
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
    }
    click(x, y) {
        if (!this.legalMoves) {
            return;
        }
        if (!this.isSelect) {
            this.selectFrom(x, y);
            return;
        }
        this.moveTo(x, y);
    }
    clickHave(piece, enemy) {
        if (!this.legalMoves) {
            return;
        }
        if (!this.isSelect) {
            this.selectHaveFrom(piece, enemy);
            return;
        }
    }
};
GogoshogiGame = __decorate([
    Component({
        selector: 'gogoshogi-game',
        templateUrl: './app/components/gogoshogi/game/game.html',
        directives: [NgFor, Mass, Koma, NgIf]
    }), 
    __metadata('design:paramtypes', [])
], GogoshogiGame);
//# sourceMappingURL=game.directive.js.map