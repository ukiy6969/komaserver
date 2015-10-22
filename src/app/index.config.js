var komaclient;
(function (komaclient) {
    'use strict';
    var Config = (function () {
        /** @ngInject */
        function Config($logProvider) {
            // enable log
            $logProvider.debugEnabled(true);
        }
        return Config;
    })();
    komaclient.Config = Config;
})(komaclient || (komaclient = {}));
