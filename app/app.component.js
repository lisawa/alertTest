System.register(['angular2/core', './TopBar', './ActionTs/ActionMain', './EventTs/EventMain', './TaskTs/TaskMain', './SysCtrlTs/SysCtrlMain', './WipCtrlTs/WipCtrlMain', './HistoryTs/HistoryMain'], function(exports_1, context_1) {
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
    var core_1, TopBar_1, ActionMain_1, EventMain_1, TaskMain_1, SysCtrlMain_1, WipCtrlMain_1, HistoryMain_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (TopBar_1_1) {
                TopBar_1 = TopBar_1_1;
            },
            function (ActionMain_1_1) {
                ActionMain_1 = ActionMain_1_1;
            },
            function (EventMain_1_1) {
                EventMain_1 = EventMain_1_1;
            },
            function (TaskMain_1_1) {
                TaskMain_1 = TaskMain_1_1;
            },
            function (SysCtrlMain_1_1) {
                SysCtrlMain_1 = SysCtrlMain_1_1;
            },
            function (WipCtrlMain_1_1) {
                WipCtrlMain_1 = WipCtrlMain_1_1;
            },
            function (HistoryMain_1_1) {
                HistoryMain_1 = HistoryMain_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.TopBarHeight = 80;
                    this.ViewHeight = window.innerHeight - this.TopBarHeight;
                    this.NowPage = 'His';
                }
                AppComponent.prototype.OnPageChange = function (value) {
                    this.NowPage = value;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], AppComponent.prototype, "TopBarHeight", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], AppComponent.prototype, "ViewHeight", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], AppComponent.prototype, "NowPage", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'template/MainPage.html',
                        directives: [
                            TopBar_1.TopBarCpn,
                            ActionMain_1.ActionMainCpn,
                            EventMain_1.EventMainCpn,
                            TaskMain_1.TaskMainCpn,
                            SysCtrlMain_1.SysCtrlMainCpn,
                            WipCtrlMain_1.WipCtrlMainCpn,
                            HistoryMain_1.HistoryMainCpn,
                        ],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map