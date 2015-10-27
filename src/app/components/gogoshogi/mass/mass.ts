export interface ImassOption {
  x: Number;
  y: Number;
  moval: Boolean;
  isKoma: Boolean;
  isHave: Boolean;
}

export class MassModel {

  private x: Number;
  private y: Number;
  private moval: Boolean;
  private isKoma: Boolean;
  private isHave: Boolean;
  private pieceList: Array<String>;

  constructor ( option: ImassOption ) {

    this.x = option.x;
    this.y = option.y;
    this.moval = option.moval;
    this.isKoma = option.isKoma;
    this.isHave = option.isHave;
    this.pieceList = ['KI', 'GI', 'HI', 'KA', 'FU'];

  }

  select() {
    this.moval = true;
  }

  selectKoma() {
    this.isKoma = true;
  }

  reset() {
    this.moval = false;
    this.isKoma = false;
  }

  isMoval(): Boolean {
    return this.moval;
  }

  isSelectKoma(): Boolean {
    return this.isKoma;
  }

}
