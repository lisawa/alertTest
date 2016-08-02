System.register(['angular2/core', '../Model/EventTemplateData', '../Model/CheckGroupData', './EventCheckList', './EventTemplateList', './EventSetting', './CheckSetting'], function(exports_1, context_1) {
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
    var core_1, EventTemplateData_1, CheckGroupData_1, EventCheckList_1, EventTemplateList_1, EventSetting_1, CheckSetting_1;
    var EventMainCpn;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (EventTemplateData_1_1) {
                EventTemplateData_1 = EventTemplateData_1_1;
            },
            function (CheckGroupData_1_1) {
                CheckGroupData_1 = CheckGroupData_1_1;
            },
            function (EventCheckList_1_1) {
                EventCheckList_1 = EventCheckList_1_1;
            },
            function (EventTemplateList_1_1) {
                EventTemplateList_1 = EventTemplateList_1_1;
            },
            function (EventSetting_1_1) {
                EventSetting_1 = EventSetting_1_1;
            },
            function (CheckSetting_1_1) {
                CheckSetting_1 = CheckSetting_1_1;
            }],
        execute: function() {
            EventMainCpn = (function () {
                function EventMainCpn() {
                    this.NowContentType = 'Check';
                    this.EventData = [
                        {
                            TaskName: '',
                            EventName: '扣留',
                            CheckList: [
                                {
                                    AttritubeName: 'Lot',
                                    AttritubeType: 'System',
                                    Caption: '批號',
                                    Sequence: 0,
                                    CheckOperator: 'Like',
                                    CheckType: 'Value',
                                    CheckValue: 'CheckValue',
                                }
                            ],
                        },
                        {
                            TaskName: '',
                            EventName: '扣留次數',
                            CheckList: [
                                {
                                    AttritubeName: 'Lot',
                                    AttritubeType: 'System',
                                    Caption: '批號',
                                    Sequence: 0,
                                    CheckOperator: 'Like',
                                    CheckType: 'Value',
                                    CheckValue: 'CheckValue',
                                },
                                {
                                    AttritubeName: 'Count',
                                    AttritubeType: 'System',
                                    Caption: '次數',
                                    Sequence: 1,
                                    CheckOperator: '<',
                                    CheckType: 'Value',
                                    CheckValue: 'CheckValue',
                                }
                            ],
                        },
                    ];
                }
                EventMainCpn.prototype.GetSelectedTemplate = function (value) {
                    this.NowContentType = 'Event';
                    this.SelectedGroup = value.CheckList;
                    this.NowSettingEvent = value;
                };
                EventMainCpn.prototype.GetSelectedCheck = function (value) {
                    this.NowContentType = 'Check';
                    this.NowSettingCheck = value;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], EventMainCpn.prototype, "EventData", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', EventTemplateData_1.EventTemplateData)
                ], EventMainCpn.prototype, "NowSettingEvent", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], EventMainCpn.prototype, "SelectedGroup", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', CheckGroupData_1.CheckGroupData)
                ], EventMainCpn.prototype, "NowSettingCheck", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], EventMainCpn.prototype, "NowSelectedCheck", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], EventMainCpn.prototype, "NowContentType", void 0);
                EventMainCpn = __decorate([
                    core_1.Component({
                        selector: 'EventMain',
                        templateUrl: 'template/Event/EventMain.html',
                        directives: [EventCheckList_1.EventCheckListCpn, EventTemplateList_1.EventTemplateListCpn, EventSetting_1.EventSettingCpn, CheckSetting_1.CheckSettingCpn],
                    }), 
                    __metadata('design:paramtypes', [])
                ], EventMainCpn);
                return EventMainCpn;
            }());
            exports_1("EventMainCpn", EventMainCpn);
        }
    }
});
//# sourceMappingURL=EventMain.js.map