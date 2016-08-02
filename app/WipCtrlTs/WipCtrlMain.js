System.register(['angular2/core', './RuleTaskList', './TaskEventAction'], function(exports_1, context_1) {
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
    var core_1, RuleTaskList_1, TaskEventAction_1;
    var WipCtrlMainCpn;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (RuleTaskList_1_1) {
                RuleTaskList_1 = RuleTaskList_1_1;
            },
            function (TaskEventAction_1_1) {
                TaskEventAction_1 = TaskEventAction_1_1;
            }],
        execute: function() {
            WipCtrlMainCpn = (function () {
                function WipCtrlMainCpn() {
                    this.users = [];
                    this.selectedUsers = [];
                    for (var i = 1; i <= 5; i++) {
                        this.users.push({
                            value: i,
                            name: ("athlete-" + i),
                            id: ("id-" + i),
                            selected: false
                        });
                    }
                }
                WipCtrlMainCpn.prototype.GetSelectedTask = function (t) {
                    alert('Main' + t.TaskName);
                };
                WipCtrlMainCpn.prototype.toggleMultiSelect = function (event, val) {
                    event.preventDefault();
                    if (this.selectedUsers.indexOf(val) == -1) {
                        this.selectedUsers = this.selectedUsers.concat([val]);
                        val.selected = true;
                    }
                    else {
                        this.selectedUsers = this.selectedUsers.filter(function (elem) {
                            return elem != val;
                        });
                        val.selected = false;
                    }
                };
                WipCtrlMainCpn = __decorate([
                    core_1.Component({
                        selector: 'WipCtrlMain',
                        templateUrl: 'template/WipCtrl/WipCtrlMain.html',
                        directives: [RuleTaskList_1.RuleTaskListComp, TaskEventAction_1.TaskEventActionComp],
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