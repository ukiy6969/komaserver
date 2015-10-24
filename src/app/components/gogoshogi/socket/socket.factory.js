var komaclient;
(function (komaclient) {
    'use strict';
    ;
    ;
    /** @ngInject */
    function gogoshogiSocket(socketFactory) {
        var socket = io.connect('localhost:3000/');
        return socketFactory({
            ioSocket: socket
        });
    }
    komaclient.gogoshogiSocket = gogoshogiSocket;
})(komaclient || (komaclient = {}));
