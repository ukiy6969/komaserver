var komaclient;
(function (komaclient) {
    'use strict';
    /** @ngInject */
    function acmeNavbar() {
        return {
            restrict: 'E',
            scope: {
                creationDate: '='
            },
            templateUrl: 'app/components/navbar/navbar.html',
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };
    }
    komaclient.acmeNavbar = acmeNavbar;
    /** @ngInject */
    class NavbarController {
        constructor() {
            var self = this;
        }
    }
})(komaclient || (komaclient = {}));
//# sourceMappingURL=navbar.directive.js.map