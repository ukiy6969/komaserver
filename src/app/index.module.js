var komaclient;
(function (komaclient) {
    'use strict';
    angular.module('komaclient', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'btford.socket-io'])
        .config(komaclient.Config)
        .config(komaclient.RouterConfig)
        .run(komaclient.RunBlock)
        .factory('gogoshogiSocket', komaclient.gogoshogiSocket)
        .directive('gogoshogiMass', komaclient.gogoshogiMass)
        .directive('gogoshogiGame', komaclient.gogoshogiGame)
        .directive('gogoshogiKoma', komaclient.gogoshogiKoma)
        .controller('MainController', komaclient.MainController)
        .directive('acmeNavbar', komaclient.acmeNavbar);
})(komaclient || (komaclient = {}));
