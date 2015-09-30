var komaclient;
(function (komaclient) {
    'use strict';
    var MainController = (function () {
        /* @ngInject */
        function MainController($timeout) {
            this.classAnimation = '';
            this.activate($timeout);
        }
        MainController.prototype.activate = function ($timeout) {
            var self = this;
            $timeout(function () {
                self.classAnimation = 'rubberBand';
            }, 4000);
        };
        return MainController;
    })();
    komaclient.MainController = MainController;
})(komaclient || (komaclient = {}));
