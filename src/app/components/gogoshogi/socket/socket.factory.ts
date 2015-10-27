import io from 'socket.io-client';
import { Injectable } from 'angular2/angular2';
export interface ISocketFactory { (opt: any) };

export interface IGogoshogiSocket { () };

@Injectable()
export class gogoshogiSocket {
  socket : ISocketFactory;
  constructor(socketFactory: ISocketFactory) {
    this.socket = io.connect('localhost:3000/');
  }
}
