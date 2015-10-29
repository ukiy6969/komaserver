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
import { Component, Input } from 'angular2/angular2';
import { MassModel } from './mass';
export let Mass = class {
    select() {
        this.mass.select();
    }
    selectKoma() {
        this.mass.select();
    }
    reset() {
        this.mass.reset();
    }
    isMoval() {
        return this.mass.isMoval();
    }
    isSelectKoma() {
        return this.mass.isSelectKoma();
    }
};
__decorate([
    Input(), 
    __metadata('design:type', MassModel)
], Mass.prototype, "mass");
Mass = __decorate([
    Component({
        selector: 'gogoshogi-mass',
        templateUrl: './app/components/gogoshogi/mass/mass.html'
    }), 
    __metadata('design:paramtypes', [])
], Mass);
//# sourceMappingURL=mass.directive.js.map