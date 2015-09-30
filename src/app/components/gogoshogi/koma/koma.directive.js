/// <reference path='koma.ts' />
var komaclient;
(function (komaclient) {
    'use strict';
    function gogoshogiKoma() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/gogoshogi/koma/koma.html',
            scope: {},
            controller: GogoshogiKomaController,
            controllerAs: 'vm',
            bindToController: {
                koma: '=koma'
            }
        };
    }
    komaclient.gogoshogiKoma = gogoshogiKoma;
    var GogoshogiKomaController = (function () {
        function GogoshogiKomaController() {
            this.pieces = ['KI', 'GI', 'HI', 'KA', 'FU'];
        }
        GogoshogiKomaController.prototype.isEnemy = function () {
            if (this.koma.enemy) {
                return 'reverse';
            }
            return '';
        };
        GogoshogiKomaController.prototype.getX = function () {
            return this.koma.x;
        };
        GogoshogiKomaController.prototype.getY = function () {
            return this.koma.y;
        };
        GogoshogiKomaController.prototype.getPosition = function () {
            var _this = this;
            var idx;
            if (this.koma.x === 0 && this.koma.y === 0 && this.koma.enemy) {
                idx = _.findIndex(this.pieces, function (p) {
                    return _this.koma.piece === p;
                });
                return 'position-' + (idx + 1) + '-0';
            }
            if (this.koma.x === 0 && this.koma.y === 0 && (!this.koma.enemy)) {
                idx = _.findIndex(this.pieces, function (p) {
                    return _this.koma.piece === p;
                });
                return 'position-' + (5 - idx) + '-6';
            }
            return 'position-' + this.koma.x + '-' + this.koma.y;
        };
        return GogoshogiKomaController;
    })();
})(komaclient || (komaclient = {}));
