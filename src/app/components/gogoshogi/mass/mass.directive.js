/// <reference path='mass.ts' />
var komaclient;
(function (komaclient) {
    'use strict';
    function gogoshogiMass() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/gogoshogi/mass/mass.html',
            scope: {
                mass: '='
            },
            controller: MassController,
            controllerAs: 'vm',
            bindToController: true
        };
    }
    komaclient.gogoshogiMass = gogoshogiMass;
    var MassController = (function () {
        function MassController() {
        }
        MassController.prototype.select = function () {
            this.mass.select();
        };
        MassController.prototype.selectKoma = function () {
            this.mass.select();
        };
        MassController.prototype.reset = function () {
            this.mass.reset();
        };
        MassController.prototype.isMoval = function () {
            return this.mass.isMoval();
        };
        MassController.prototype.isSelectKoma = function () {
            return this.mass.isSelectKoma();
        };
        return MassController;
    })();
    komaclient.MassController = MassController;
})(komaclient || (komaclient = {}));
