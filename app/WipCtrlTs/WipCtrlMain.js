System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var WipCtrlMainCpn;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WipCtrlMainCpn = (function () {
                function WipCtrlMainCpn() {
                    this.RuleList = [
                        {
                            RuleName: 'Rule1',
                            Display: true,
                            TaskList: [
                                {
                                    TaskName: '扣留警報',
                                    Description: '',
                                    Display: false,
                                    EventList: [
                                        {
                                            EventSID: 'A2016052523250144970000',
                                            EventName: 'HoldLotEvent',
                                            EventDescription: '批號扣留',
                                            CheckGroupList: [
                                                {
                                                    CheckGroupSeq: 0,
                                                    Description: '發生扣留',
                                                }
                                            ],
                                        },
                                        {
                                            EventSID: 'A2016052523250144980000',
                                            EventName: 'HoldLotEvent1',
                                            EventDescription: '扣留次數警報',
                                            CheckGroupList: [
                                                {
                                                    CheckGroupSeq: 0,
                                                    Description: '扣留3次以上',
                                                },
                                                {
                                                    CheckGroupSeq: 1,
                                                    Description: '扣留2次',
                                                },
                                                {
                                                    CheckGroupSeq: 2,
                                                    Description: '發生扣留',
                                                },
                                            ],
                                        }
                                    ],
                                }
                            ],
                        },
                        {
                            RuleName: 'Rule2',
                            Display: true,
                            TaskList: [],
                        },
                    ];
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], WipCtrlMainCpn.prototype, "RuleList", void 0);
                WipCtrlMainCpn = __decorate([
                    core_1.Component({
                        selector: 'WipCtrlMain',
                        templateUrl: 'template/WipCtrl/WipCtrlMain.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], WipCtrlMainCpn);
                return WipCtrlMainCpn;
            }());
            exports_1("WipCtrlMainCpn", WipCtrlMainCpn);
        }
    }
});
//# sourceMappingURL=WipCtrlMain.js.map