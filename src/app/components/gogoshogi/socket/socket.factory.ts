module komaclient {
  'use strict';

  export interface ISocketFactory {(opt: any)}

  export interface IGogoshogiSocket {()}
  /** @ngInject */
  export function gogoshogiSocket(socketFactory: ISocketFactory) {
    var socket = io.connect('localhost:3000');
    return socketFactory({
      ioSocket: socket
    });
  }
}
