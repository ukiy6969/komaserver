/// <reference path="../../../typings/tsd.d.ts"/>
import { Component, bootstrap, NgFor, NgIf} from 'angular2/angular2';

@Component({
  selector: 'navbar',
  templateUrl: './app/components/navbar/navbar.html',
  directives: [NgFor, NgIf]
})
export class Navbar {
  public relativeDate: string;

  constructor() {
    var self = this;
  }
}
