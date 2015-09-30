/// <reference path='../koma/koma.ts' />
/// <reference path='../mass/mass.ts' />

module komaclient {
  'use strict';

  export function gogoshogiGame(): ng.IDirective {

    return {
      templateUrl: 'app/components/gogoshogi/game/game.html',
      restrict: 'E',
      controller: GogoshogiGameController,
      controllerAs: 'game',
      bindToController: true
    };

  }

  interface IGogoshogiMoveOpt {
    color?: number;
    from: {
      x: number;
      y: number;
    };
    to: {
      x: number;
      y: number;
    };
    piece: String;
    promote?: Boolean;
    capture?: String;
    isAttack?: Boolean;
  }


  interface IGogoshogiGameOpt {
    header: {
      firstMove: String;
      secondMove: String;
    };
  }

  export class GogoshogiGameController {

    public static massX: Number;
    public static massY: Number;

    private komas: Array<GogoshogiKomaModel>;
    private masses: Array<MassModel>;
    private isSelect: GogoshogiKomaModel;
    private legalMoves: Array<IGogoshogiMoveOpt>;
    private isStart: Boolean;
    private isEnd: Boolean;
    private promoteMove: IGogoshogiMoveOpt;
    private color: number;
    private socket;
    private message;

    /** @ngInject */
    constructor(gogoshogiSocket) {
      console.log(this);
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

      this.masses = [];
      this.legalMoves = [];


      for ( var j = 0; j <= 6; j++ ) {
        for ( var i = 5; i >= 1; i-- ) {
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

      this.socket = gogoshogiSocket;

      this.isStart = false;
      this.promoteMove = null;
      this.isEnd = false;

    }

    startGame() {
      this.isStart = true;
      this.socket.emit('new-game', {});
      this.socket.on('confirm', (newGame: IGogoshogiGameOpt) => {
        console.log(newGame);
        this.socket.emit('agree', newGame);
      });
      this.socket.on('start', (game: IGogoshogiGameOpt) => {
        if (game.header.firstMove === 'client') {
          this.color = 0;
        } else {
          this.color = 1;
        }
        console.log(this.color);
      });
      this.socket.on('moved', (move: IGogoshogiMoveOpt) => {
        this.moved(move);
      });
      this.socket.on('legal', (lmoves: Array<IGogoshogiMoveOpt>) => {
        lmoves.forEach((lmove: IGogoshogiMoveOpt) => {
          if (this.color === 1) {
            this.reverseMove(lmove);
          }
        });
        console.log(lmoves);
        this.legalMoves = lmoves;
      });
      this.socket.on('err', (err) => {
        console.log('err', err);
      });
      this.socket.on('lose', (lose) => {
        this.endGame(lose);
      });
    }

    endGame(message) {
      this.isEnd = true;
      this.message = message.message;
    }

    getLegalKoma(x: Number, y: Number) {
      return _.filter(this.legalMoves, {from: { x: x, y: y } });
    }

    getLegalKomaHave(piece: String, enemy: Boolean) {
      return _.filter(this.legalMoves, {piece: piece, from: {x: 0, y: 0}} );
    }


    select(x: Number, y: Number) {
      if ( x < 1 || 5 < x || y < 1 || 5 < y ) {
        return;
      }
      _.find(this.masses, {x: x, y: y})
      .select();
    }

    selectLegal() {
      this.legalMoves.forEach((move: IGogoshogiMoveOpt) => {
        this.select(move.to.x, move.to.y);
      });
    }

    selectKoma(x: Number, y: Number) {
      return _.find(this.masses, {x: x, y: y})
      .selectKoma();
    }

    selectKomaHave(piece: String, enemy: Boolean) {
    }

    reset() {
      this.masses.forEach((mass: MassModel) => {
        mass.reset();
      });
    }

    getKoma(x: number, y: number): GogoshogiKomaModel {
      return _.find(this.komas, {x: x, y: y});
    }

    getKomaDetail(x: number, y: number, piece: String, enemy: Boolean) {
      return _.find(this.komas, {x: x, y: y, piece: piece, enemy: enemy});
    }

    getKomaHave(piece: String, enemy: Boolean): GogoshogiKomaModel {
      return _.find(this.komas, {x: 0, y: 0, piece: piece, enemy: enemy});
    }

    moval(x: Number, y: Number): Boolean {
      return _.find(this.masses, {x: x, y: y}).isMoval();
    }

    reverseMove(move: IGogoshogiMoveOpt) {
      move.to.x = 6 - move.to.x;
      move.to.y = 6 - move.to.y;
      if (move.from.x === 0 && move.from.y === 0) {
        return;
      }
      move.from.x = 6 - move.from.x;
      move.from.y = 6 - move.from.y;
    }

    selectFrom(x: number, y: number) {
      var lmoves = this.getLegalKoma(x, y);

      if ( ! lmoves.length ) {
        this.reset();
        return;
      }

      lmoves.forEach((lmove: IGogoshogiMoveOpt) => {
        this.select(lmove.to.x, lmove.to.y);
      });

      this.selectKoma(x, y);
      this.isSelect = this.getKoma(x, y);
    }

    selectHaveFrom(piece: String, enemy: Boolean) {
      var lmoves = this.getLegalKomaHave(piece, enemy);

      if ( ! lmoves.length ) {
        this.reset();
        return;
      }

      lmoves.forEach((lmove: IGogoshogiMoveOpt) => {
        this.select(lmove.to.x, lmove.to.y);
      });

      this.selectKomaHave(piece, enemy);
      this.isSelect = this.getKomaHave(piece, enemy);
      console.log(this.isSelect);
    }

    moveTo(x: number, y: number) {
      var move: IGogoshogiMoveOpt;
      if ( ! this.moval(x, y)) {
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

      if ( y === 1 && (!this.isSelect.isPromote)) {
        this.promoteMove = move;
        return;
      }

      this.sendMove(move);

      this.isSelect = null;
      this.reset();
    }


    isPromote(promote: Boolean) {
      if (promote) {
        this.promoteMove.piece = this.isSelect.promotePiece;
      }
      this.sendMove(this.promoteMove);
      this.promoteMove = null;
      this.isSelect = null;
      this.reset();
    }

    sendMove(move: IGogoshogiMoveOpt) {
      if (this.color === 1) {
        this.reverseMove(move);
      }
      this.socket.emit('move', move);
      this.legalMoves = null;
    }

    moved(move: IGogoshogiMoveOpt) {
      if (this.color === 1) {
        this.reverseMove(move);
      }
      console.log(move);
      var enemy: Boolean;
      if (this.color === move.color) {
        enemy = false;
      } else {
        enemy = true;
      }
      var moveKoma: GogoshogiKomaModel = this.getKomaDetail(move.from.x, move.from.y, move.piece, enemy);
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

    click(x: number, y: number) {
      if (! this.legalMoves) {
        return;
      }
      if (!this.isSelect) {
        this.selectFrom(x, y);
        return;
      }
      this.moveTo(x, y);
    }

    clickHave(piece: String, enemy: Boolean){
      if (! this.legalMoves) {
        return;
      }
      if (!this.isSelect) {
        this.selectHaveFrom(piece, enemy);
        return;
      }
    }

  }
}
