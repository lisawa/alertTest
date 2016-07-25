System.register(['angular2/core', './TestComponent/InkButton'], function(exports_1, context_1) {
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
    var TopBarCpn;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (InkButton_1_1) {
                InkButton_1 = InkButton_1_1;
            }],
        execute: function() {
            TopBarCpn = (function () {
                function TopBarCpn() {
                    this.NowSelectPage = new core_1.EventEmitter();
                    this.Geta = 'aaaaa';
                }
                TopBarCpn.prototype.OnSelectPage = function (value) {
                    this.NowSelectPage.next(value);
                };
                TopBarCpn.prototype.GetClick = function () {
                    console.log('Get');
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TopBarCpn.prototype, "NowSelectPage", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TopBarCpn.prototype, "Geta", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TopBarCpn.prototype, "BtnColor", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TopBarCpn.prototype, "Color", void 0);
                TopBarCpn = __decorate([
                    core_1.Component({
                        selector: 'topBar',
                        templateUrl: 'template/TopBar.html',
                        directives: [InkButton_1.InkButton,],
                        styles: [".Btn{ padding-left: 10px; }"],
                    }), 
                    __metadata('design:paramtypes', [])
                ], TopBarCpn);
                return TopBarCpn;
            }());
            exports_1("TopBarCpn", TopBarCpn);
        }
    }
});
//# sourceMappingURL=TopBar.js.map