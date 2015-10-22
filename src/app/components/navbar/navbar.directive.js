var komaclient;
(function (komaclient) {
    'use strict';
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
    var NavbarController = (function () {
        function NavbarController() {
        }
        return NavbarController;
    })();
})(komaclient || (komaclient = {}));
