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
import { Component, bootstrap, View, NgIf, CORE_DIRECTIVES } from 'angular2/angular2';
import { GogoshogiGame } from './components/gogoshogi/game/game.directive';
let AppComponent = class {
    constructor() {
        this.visible = true;
    }
    click() {
        this.visible = !this.visible;
    }
    check() {
        return this.visible;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'koma-app',
        bindings: []
    }),
    View({
        template: `
  <h1 *ng-if="check()">Komachan-GogoshogiGame</h1>
  <p> status: {{ visible }} </p>
  <button (click)="click()">test </button><gogoshogi-game/>
  `,
        directives: [GogoshogiGame, NgIf, CORE_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
bootstrap(AppComponent);
//# sourceMappingURL=app.js.map