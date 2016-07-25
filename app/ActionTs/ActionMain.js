System.register(['angular2/core', './ActionNavigation', './LineSetting', './WeChatSetting', './EMailSetting', './ActionSetting'], function(exports_1, context_1) {
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
    var core_1, ActionNavigation_1, LineSetting_1, WeChatSetting_1, EMailSetting_1, ActionSetting_1;
    var ActionMainCpn;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ActionNavigation_1_1) {
                ActionNavigation_1 = ActionNavigation_1_1;
            },
            function (LineSetting_1_1) {
                LineSetting_1 = LineSetting_1_1;
            },
            function (WeChatSetting_1_1) {
                WeChatSetting_1 = WeChatSetting_1_1;
            },
            function (EMailSetting_1_1) {
                EMailSetting_1 = EMailSetting_1_1;
            },
            function (ActionSetting_1_1) {
                ActionSetting_1 = ActionSetting_1_1;
            }],
        execute: function() {
            ActionMainCpn = (function () {
                function ActionMainCpn() {
                    this.ActionDataList = [
                        {
                            ActionName: 'Line',
                            ActionDesc: 'Line',
                            ActionIcon: 'svg/line.svg',
                        },
                        {
                            ActionName: 'WeChat',
                            ActionDesc: 'WeChat微信',
                            ActionIcon: 'svg/wechat.svg',
                        },
                        {
                            ActionName: 'Email',
                            ActionDesc: 'Email信件',
                            ActionIcon: 'svg/mail.svg',
                        },
                    ];
                    this.NowSelectedItem = 'WeChat';
                }
                ActionMainCpn.prototype.GetSelected = function (ad) {
                    this.NowSelectedItem = ad.ActionName;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], ActionMainCpn.prototype, "ActionDataList", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ActionMainCpn.prototype, "NowSelectedItem", void 0);
                ActionMainCpn = __decorate([
                    core_1.Component({
                        selector: 'ActionMain',
                        templateUrl: 'template/Action/ActionMain.html',
                        directives: [
                            ActionNavigation_1.ActionNavigationCpn,
                            LineSetting_1.LineSettingCpn,
                            WeChatSetting_1.WeChatSettingCpn,
                            EMailSetting_1.EMailSettingCpn,
                            ActionSetting_1.ActionSettingCpn,
                        ],
                        styleUrls: ['Style/ActionCss.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ActionMainCpn);
                return ActionMainCpn;
            }());
            exports_1("ActionMainCpn", ActionMainCpn);
        }
    }
});
//# sourceMappingURL=ActionMain.js.map