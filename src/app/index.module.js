/// <reference path="../../.tmp/typings/tsd.d.ts" />
/// <reference path="index.route.ts" />
/// <reference path="index.config.ts" />
/// <reference path="index.run.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="../app/components/navbar/navbar.directive.ts" />
/// <reference path="../app/components/gogoshogi/mass/mass.directive.ts" />
/// <reference path="./components/gogoshogi/socket/socket.factory.ts"/>
var komaclient;
(function (komaclient) {
    'use strict';
    angular.module('komaclient', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'btford.socket-io'])
        .constant('toastr', toastr)
        .constant('moment', moment)
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
