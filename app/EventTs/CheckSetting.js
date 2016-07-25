System.register(['angular2/core', '../Model/CheckGroupData'], function(exports_1, context_1) {
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
    var core_1, CheckGroupData_1;
    var CheckSettingCpn;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (CheckGroupData_1_1) {
                CheckGroupData_1 = CheckGroupData_1_1;
            }],
        execute: function() {
            CheckSettingCpn = (function () {
                function CheckSettingCpn() {
                }
                CheckSettingCpn.prototype.ngOnInit = function () {
                    this.CheckGroup = {
                        AttritubeName: 'Lot',
                        AttritubeType: 'System',
                        Caption: '批號',
                        Sequence: 0,
                        CheckOperator: 'Like',
                        CheckType: 'Value',
                        CheckValue: '',
                    };
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', CheckGroupData_1.CheckGroupData)
                ], CheckSettingCpn.prototype, "CheckGroup", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], CheckSettingCpn.prototype, "testS", void 0);
                CheckSettingCpn = __decorate([
                    core_1.Component({
                        selector: 'CheckSetting',
                        templateUrl: 'template/Event/CheckSetting.html',
                        styleUrls: ['Style/EventCss.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], CheckSettingCpn);
                return CheckSettingCpn;
            }());
            exports_1("CheckSettingCpn", CheckSettingCpn);
        }
    }
});
//# sourceMappingURL=CheckSetting.js.map