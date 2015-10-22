var komaclient;
(function (komaclient) {
    'use strict';
    ;
    ;
    /** @ngInject */
    function gogoshogiSocket(socketFactory) {
        var socket = io.connect('/');
        return socketFactory({
            ioSocket: socket
        });
    }
    komaclient.gogoshogiSocket = gogoshogiSocket;
})(komaclient || (komaclient = {}));
