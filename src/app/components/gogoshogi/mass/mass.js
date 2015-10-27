export class MassModel {
    constructor(option) {
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
    isMoval() {
        return this.moval;
    }
    isSelectKoma() {
        return this.isKoma;
    }
}
//# sourceMappingURL=mass.js.map