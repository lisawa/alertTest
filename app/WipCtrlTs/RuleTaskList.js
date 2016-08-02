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
    var RuleTaskListComp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RuleTaskListComp = (function () {
                function RuleTaskListComp() {
                    this.OnSelectTask = new core_1.EventEmitter();
                    this.ruleList = [
                        {
                            RuleName: 'All',
                            TaskList: [
                                {
                                    TaskName: '01_HoldLotCheck',
                                    Description: '���d�q��',
                                    EventList: [],
                                    Display: true
                                },
                                {
                                    TaskName: '02_DefectCheck',
                                    Description: '���o�ƶq�L�h�q��',
                                    EventList: [],
                                    Display: true
                                }
                            ],
                            Display: false,
                        }
                    ];
                }
                RuleTaskListComp.prototype.ChangeDisplay = function (rule) {
                    rule.Display = !rule.Display;
                };
                RuleTaskListComp.prototype.SelectedEvent = function (e) {
                    //alert('inner' + e.TaskName);
                    this.OnSelectTask.next(e);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], RuleTaskListComp.prototype, "OnSelectTask", void 0);
                RuleTaskListComp = __decorate([
                    core_1.Component({
                        selector: 'RuleTaskList',
                        templateUrl: 'template/WipCtrl/RuleTaskList.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], RuleTaskListComp);
                return RuleTaskListComp;
            }());
            exports_1("RuleTaskListComp", RuleTaskListComp);
        }
    }
});
//# sourceMappingURL=RuleTaskList.js.map