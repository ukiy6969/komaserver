/// <reference path="../../.tmp/typings/tsd.d.ts" />


/// <reference path="index.route.ts" />

/// <reference path="index.config.ts" />
/// <reference path="index.run.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="../app/components/navbar/navbar.directive.ts" />
/// <reference path="../app/components/gogoshogi/mass/mass.directive.ts" />
/// <reference path="./components/gogoshogi/socket/socket.factory.ts"/>


module komaclient {
  'use strict';

  angular.module('komaclient', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'btford.socket-io'])
    .config(Config)

    .config(RouterConfig)

    .run(RunBlock)
    .factory('gogoshogiSocket', gogoshogiSocket)
    .directive('gogoshogiMass', gogoshogiMass)
    .directive('gogoshogiGame', gogoshogiGame)
    .directive('gogoshogiKoma', gogoshogiKoma)
    .controller('MainController', MainController)
    .directive('acmeNavbar', acmeNavbar);
}
