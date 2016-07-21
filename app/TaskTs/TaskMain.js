System.register(['angular2/core', '../Model/TaskCheckData', './TaskEventList', './TaskCheckList'], function(exports_1, context_1) {
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
    var core_1, TaskCheckData_1, TaskEventList_1, TaskCheckList_1;
    var TaskMainCpn;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (TaskCheckData_1_1) {
                TaskCheckData_1 = TaskCheckData_1_1;
            },
            function (TaskEventList_1_1) {
                TaskEventList_1 = TaskEventList_1_1;
            },
            function (TaskCheckList_1_1) {
                TaskCheckList_1 = TaskCheckList_1_1;
            }],
        execute: function() {
            TaskMainCpn = (function () {
                function TaskMainCpn() {
                    this.TaskList = [
                        {
                            TaskName: '01_HoldLotCheck',
                            Description: '扣留通知',
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
                            Display: false,
                        },
                        {
                            TaskName: '02_DefectCheck',
                            Description: '報廢數量過多通知',
                            EventList: [],
                            Display: false,
                        },
                        {
                            TaskName: '03_WoYieldCheck',
                            Description: '工單良率過低通知',
                            EventList: [],
                            Display: false,
                        },
                    ];
                }
                TaskMainCpn.prototype.GetSelectedCheckGroup = function (c) {
                    this.CheckGroupOnSelect = c;
                };
                TaskMainCpn.prototype.GetSelectCheck = function (c) {
                    this.SelectedCheckName = c.Description;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], TaskMainCpn.prototype, "TaskList", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], TaskMainCpn.prototype, "CheckGroupOnSelect", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', TaskCheckData_1.TaskCheckData)
                ], TaskMainCpn.prototype, "CheckDataOnSelect", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TaskMainCpn.prototype, "SelectedCheckName", void 0);
                TaskMainCpn = __decorate([
                    core_1.Component({
                        selector: 'TaskMain',
                        templateUrl: 'template/Task/TaskMain.html',
                        directives: [TaskEventList_1.TaskEventListCpn, TaskCheckList_1.TaskCheckListCpn],
                        styleUrls: ['Style/TaskCss.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], TaskMainCpn);
                return TaskMainCpn;
            }());
            exports_1("TaskMainCpn", TaskMainCpn);
        }
    }
});
//# sourceMappingURL=TaskMain.js.map