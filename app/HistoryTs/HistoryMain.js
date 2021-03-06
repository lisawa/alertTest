System.register(['angular2/core', '../TestComponent/InkButton'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, InkButton_1;
    var HistoryMainCpn;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (InkButton_1_1) {
                InkButton_1 = InkButton_1_1;
            }],
        execute: function() {
            HistoryMainCpn = (function () {
                function HistoryMainCpn() {
                }
                HistoryMainCpn.prototype.OnSelectPage = function (value) {
                    this.NowSelectPage.next(value);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], HistoryMainCpn.prototype, "Geta", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], HistoryMainCpn.prototype, "BtnColor", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], HistoryMainCpn.prototype, "Color", void 0);
                HistoryMainCpn = __decorate([
                    core_1.Component({
                        selector: 'HistoryMain',
                        directives: [InkButton_1.InkButton,],
                        templateUrl: 'template/History/HistoryMain.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], HistoryMainCpn);
                return HistoryMainCpn;
            }());
            exports_1("HistoryMainCpn", HistoryMainCpn);
        }
    }
});
//# sourceMappingURL=HistoryMain.js.map