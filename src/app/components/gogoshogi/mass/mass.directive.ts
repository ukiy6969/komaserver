import { Component, bootstrap, Input } from 'angular2/angular2';
import { MassModel } from './mass';

@Component({
  selector: 'gogoshogi-mass',
  templateUrl: '/src/app/components/gogoshogi/mass/mass.html'
})
export class Mass {

  @Input() mass: MassModel;

  select() {
    this.mass.select();
  }

  selectKoma() {
    this.mass.select();
  }

  reset() {
    this.mass.reset();
  }

  isMoval(): Boolean {
    return this.mass.isMoval();
  }

  isSelectKoma(): Boolean {
    return this.mass.isSelectKoma();
  }

}
