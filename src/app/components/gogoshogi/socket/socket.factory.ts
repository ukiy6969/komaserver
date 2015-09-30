module komaclient {
  'use strict';

  /** @ngInject */
  export function gogoshogiSocket(socketFactory) {
    var socket = io.connect('localhost:3000');
    return socketFactory({
      ioSocket: socket
    });
  }
}
