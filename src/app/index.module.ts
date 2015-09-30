/// <reference path="../../.tmp/typings/tsd.d.ts" />


/// <reference path="index.route.ts" />

/// <reference path="index.config.ts" />
/// <reference path="index.run.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="../app/components/navbar/navbar.directive.ts" />
/// <reference path="../app/components/malarkey/malarkey.directive.ts" />
/// <reference path="../app/components/webDevTec/webDevTec.service.ts" />
/// <reference path="../app/components/githubContributor/githubContributor.service.ts" />
/// <reference path="../app/components/gogoshogi/mass/mass.directive.ts" />
/// <reference path="./components/gogoshogi/socket/socket.factory.ts"/>

declare var malarkey: any;
declare var toastr: Toastr;
declare var moment: moment.MomentStatic;

module komaclient {
  'use strict';

  angular.module('komaclient', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'btford.socket-io'])
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .config(Config)

    .config(RouterConfig)

    .run(RunBlock)
    .service('githubContributor', GithubContributor)
    .service('webDevTec', WebDevTecService)
    .factory('gogoshogiSocket', gogoshogiSocket)
    .directive('gogoshogiMass', gogoshogiMass)
    .directive('gogoshogiGame', gogoshogiGame)
    .directive('gogoshogiKoma', gogoshogiKoma)
    .controller('MainController', MainController)
    .directive('acmeNavbar', acmeNavbar)
    .directive('acmeMalarkey', acmeMalarkey);
}
