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
import io from 'socket.io-client';
import { Injectable } from 'angular2/angular2';
;
;
export let gogoshogiSocket = class {
    constructor(socketFactory) {
        this.socket = io.connect('localhost:3000/');
    }
};
gogoshogiSocket = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [Function])
], gogoshogiSocket);
//# sourceMappingURL=socket.factory.js.map