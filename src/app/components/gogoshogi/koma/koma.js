var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var komaclient;
(function (komaclient) {
    'use strict';
    var GogoshogiKomaModel = (function () {
        function GogoshogiKomaModel() {
        }
        GogoshogiKomaModel.prototype.move = function (x, y) {
            this.x = x;
            this.y = y;
        };
        GogoshogiKomaModel.prototype.changeOwner = function () {
            this.enemy = !this.enemy;
        };
        GogoshogiKomaModel.prototype.promote = function () {
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
        };
        GogoshogiKomaModel.prototype.unPromote = function () {
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
        };
        return GogoshogiKomaModel;
    })();
    komaclient.GogoshogiKomaModel = GogoshogiKomaModel;
    var GogoshogiKomaOu = (function (_super) {
        __extends(GogoshogiKomaOu, _super);
        function GogoshogiKomaOu(enemy) {
            _super.call(this);
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
        return GogoshogiKomaOu;
    })(GogoshogiKomaModel);
    komaclient.GogoshogiKomaOu = GogoshogiKomaOu;
    var GogoshogiKomaKi = (function (_super) {
        __extends(GogoshogiKomaKi, _super);
        function GogoshogiKomaKi(enemy) {
            _super.call(this);
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
        return GogoshogiKomaKi;
    })(GogoshogiKomaModel);
    komaclient.GogoshogiKomaKi = GogoshogiKomaKi;
    var GogoshogiKomaGi = (function (_super) {
        __extends(GogoshogiKomaGi, _super);
        function GogoshogiKomaGi(enemy) {
            _super.call(this);
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
        return GogoshogiKomaGi;
    })(GogoshogiKomaModel);
    komaclient.GogoshogiKomaGi = GogoshogiKomaGi;
    var GogoshogiKomaKa = (function (_super) {
        __extends(GogoshogiKomaKa, _super);
        function GogoshogiKomaKa(enemy) {
            _super.call(this);
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
        return GogoshogiKomaKa;
    })(GogoshogiKomaModel);
    komaclient.GogoshogiKomaKa = GogoshogiKomaKa;
    var GogoshogiKomaHi = (function (_super) {
        __extends(GogoshogiKomaHi, _super);
        function GogoshogiKomaHi(enemy) {
            _super.call(this);
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
        return GogoshogiKomaHi;
    })(GogoshogiKomaModel);
    komaclient.GogoshogiKomaHi = GogoshogiKomaHi;
    var GogoshogiKomaFu = (function (_super) {
        __extends(GogoshogiKomaFu, _super);
        function GogoshogiKomaFu(enemy) {
            _super.call(this);
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
        return GogoshogiKomaFu;
    })(GogoshogiKomaModel);
    komaclient.GogoshogiKomaFu = GogoshogiKomaFu;
})(komaclient || (komaclient = {}));
