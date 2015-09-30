module komaclient {
  'use strict';

  export class MainController {
    public awesomeThings: ITecThing[];
    public webDevTec: WebDevTecService;
    public classAnimation: string;

    /* @ngInject */
    constructor ($timeout: ng.ITimeoutService) {
      this.awesomeThings = new Array();
      this.classAnimation = '';

      this.activate($timeout);
    }

    activate($timeout: ng.ITimeoutService) {
      var self = this;

      $timeout(function() {
        self.classAnimation = 'rubberBand';
      }, 4000);
    }

  }
}
