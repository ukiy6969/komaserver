module komaclient {
  'use strict';

  export interface ISocketFactory {(opt: any)}

  export interface IGogoshogiSocket {()}
  /** @ngInject */
  export function gogoshogiSocket(socketFactory: ISocketFactory) {
    var socket = io.connect('/');
    return socketFactory({
      ioSocket: socket
    });
  }
}
