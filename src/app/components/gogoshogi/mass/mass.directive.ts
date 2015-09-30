/// <reference path='mass.ts' />
module komaclient {
  'use strict';

  export function gogoshogiMass(): ng.IDirective {
    return {
      restrict: 'E',
      templateUrl: 'app/components/gogoshogi/mass/mass.html',
      scope: {
        mass: '='
      },
      controller: MassController,
      controllerAs: 'vm',
      bindToController: true
    };
  }


  export class MassController {

    private mass: MassModel;

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
}
