import {Component, bootstrap, View, NgIf, CORE_DIRECTIVES} from 'angular2/angular2';
import { GogoshogiGame } from './components/gogoshogi/game/game.directive';
import { Navbar } from './components/navbar/navbar.directive';

@Component({
  selector: 'koma-app',
  bindings: []
})
@View({
  template: `
  <navbar></navbar>
  <h1 *ng-if="check()">Komachan-GogoshogiGame</h1>
  <p> status: {{ visible }} </p>
  <button (click)="click()">test </button><gogoshogi-game/>
  `,
  directives: [ GogoshogiGame , NgIf, CORE_DIRECTIVES , Navbar]
})
class AppComponent {
  visible : boolean;
  constructor(){
    this.visible = true;
  }
  click(){
    this.visible = ! this.visible;
  }
  check() {
    return this.visible;
  }
}

bootstrap(AppComponent);
