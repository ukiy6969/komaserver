export class GogoshogiKomaModel {
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    changeOwner() {
        this.enemy = !this.enemy;
    }
    promote() {
        if (this.isPromote) {
            return;
        }
        var tmp = this.text;
        this.text = this.promoteText;
        this.promoteText = tmp;
        tmp = this.piece;
        this.piece = this.promotePiece;
        this.promotePiece = tmp;
        this.isPromote = true;
    }
    unPromote() {
        if (!this.isPromote) {
            return;
        }
        var tmp = this.text;
        this.text = this.promoteText;
        this.promoteText = tmp;
        tmp = this.piece;
        this.piece = this.promotePiece;
        this.promotePiece = tmp;
        this.isPromote = true;
        this.isPromote = false;
    }
}
export class GogoshogiKomaOu extends GogoshogiKomaModel {
    constructor(enemy) {
        super();
        this.text = '王';
        this.promoteText = this.text;
        this.piece = 'OU';
        this.promotePiece = this.piece;
        this.enemy = enemy;
        if (enemy) {
            this.x = 1;
            this.y = 1;
            return;
        }
        this.x = 5;
        this.y = 5;
    }
}
export class GogoshogiKomaKi extends GogoshogiKomaModel {
    constructor(enemy) {
        super();
        this.text = '金';
        this.promoteText = this.text;
        this.piece = 'KI';
        this.promotePiece = this.piece;
        this.enemy = enemy;
        if (enemy) {
            this.x = 2;
            this.y = 1;
            return;
        }
        this.x = 4;
        this.y = 5;
    }
}
export class GogoshogiKomaGi extends GogoshogiKomaModel {
    constructor(enemy) {
        super();
        this.text = '銀';
        this.promoteText = '全';
        this.piece = 'GI';
        this.promotePiece = 'NG';
        this.enemy = enemy;
        if (enemy) {
            this.x = 3;
            this.y = 1;
            return;
        }
        this.x = 3;
        this.y = 5;
    }
}
export class GogoshogiKomaKa extends GogoshogiKomaModel {
    constructor(enemy) {
        super();
        this.text = '角';
        this.promoteText = '馬';
        this.piece = 'KA';
        this.promotePiece = 'UM';
        this.enemy = enemy;
        if (enemy) {
            this.x = 4;
            this.y = 1;
            return;
        }
        this.x = 2;
        this.y = 5;
    }
}
export class GogoshogiKomaHi extends GogoshogiKomaModel {
    constructor(enemy) {
        super();
        this.text = '飛';
        this.promoteText = '龍';
        this.piece = 'HI';
        this.promotePiece = 'RY';
        this.enemy = enemy;
        if (enemy) {
            this.x = 5;
            this.y = 1;
            return;
        }
        this.x = 1;
        this.y = 5;
    }
}
export class GogoshogiKomaFu extends GogoshogiKomaModel {
    constructor(enemy) {
        super();
        this.text = '歩';
        this.promoteText = 'と';
        this.piece = 'FU';
        this.promotePiece = 'TO';
        this.enemy = enemy;
        if (enemy) {
            this.x = 1;
            this.y = 2;
            return;
        }
        this.x = 5;
        this.y = 4;
    }
}
//# sourceMappingURL=koma.js.map