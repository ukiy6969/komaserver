
import { Component, Input, NgClass} from 'angular2/angular2';
import { GogoshogiKomaModel } from './koma';
import { _ } from 'lodash';

@Component({
  selector: 'gogoshogi-koma',
  templateUrl: './app/components/gogoshogi/koma/koma.html',
  directives: [NgClass]
})
export class Koma {

  @Input() koma: GogoshogiKomaModel;
  private pieces: Array<String>;

  constructor() {
    this.pieces = ['KI', 'GI', 'HI', 'KA', 'FU'];
  }

  isEnemy(): String {
    if (this.koma.enemy) {
      return 'reverse';
    }
    return '';
  }


  getX(): number {
    return this.koma.x;
  }

  getY(): number {
    return this.koma.y;
  }

  getPosition(): String {
    var idx: number;
    if (this.koma.x === 0 && this.koma.y === 0 && this.koma.enemy) {
      idx = _.findIndex(this.pieces, (p: String) => {
        return this.koma.piece === p;
      });
      return 'position-' + (idx + 1) + '-0';
    }
    if (this.koma.x === 0 && this.koma.y === 0 && (!this.koma.enemy)) {
      idx = _.findIndex(this.pieces, (p: String) => {
        return this.koma.piece === p;
      });
      return 'position-' + (5 - idx) + '-6';
    }
    return 'position-' + this.koma.x + '-' + this.koma.y;
  }
}
