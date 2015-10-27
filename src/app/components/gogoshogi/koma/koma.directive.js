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
import { Component, Input, NgClass } from 'angular2/angular2';
import { GogoshogiKomaModel } from './koma';
import { _ } from 'lodash';
export let Koma = class {
    constructor() {
        this.pieces = ['KI', 'GI', 'HI', 'KA', 'FU'];
    }
    isEnemy() {
        if (this.koma.enemy) {
            return 'reverse';
        }
        return '';
    }
    getX() {
        return this.koma.x;
    }
    getY() {
        return this.koma.y;
    }
    getPosition() {
        var idx;
        if (this.koma.x === 0 && this.koma.y === 0 && this.koma.enemy) {
            idx = _.findIndex(this.pieces, (p) => {
                return this.koma.piece === p;
            });
            return 'position-' + (idx + 1) + '-0';
        }
        if (this.koma.x === 0 && this.koma.y === 0 && (!this.koma.enemy)) {
            idx = _.findIndex(this.pieces, (p) => {
                return this.koma.piece === p;
            });
            return 'position-' + (5 - idx) + '-6';
        }
        return 'position-' + this.koma.x + '-' + this.koma.y;
    }
};
__decorate([
    Input(), 
    __metadata('design:type', GogoshogiKomaModel)
], Koma.prototype, "koma");
Koma = __decorate([
    Component({
        selector: 'gogoshogi-koma',
        templateUrl: '/src/app/components/gogoshogi/koma/koma.html',
        directives: [NgClass]
    }), 
    __metadata('design:paramtypes', [])
], Koma);
//# sourceMappingURL=koma.directive.js.map