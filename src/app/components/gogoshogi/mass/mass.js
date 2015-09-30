var komaclient;
(function (komaclient) {
    'use strict';
    var MassModel = (function () {
        function MassModel(option) {
            this.x = option.x;
            this.y = option.y;
            this.moval = option.moval;
            this.isKoma = option.isKoma;
            this.isHave = option.isHave;
        }
        MassModel.prototype.select = function () {
            this.moval = true;
        };
        MassModel.prototype.selectKoma = function () {
            this.isKoma = true;
        };
        MassModel.prototype.reset = function () {
            this.moval = false;
            this.isKoma = false;
        };
        MassModel.prototype.isMoval = function () {
            return this.moval;
        };
        MassModel.prototype.isSelectKoma = function () {
            return this.isKoma;
        };
        return MassModel;
    })();
    komaclient.MassModel = MassModel;
})(komaclient || (komaclient = {}));
