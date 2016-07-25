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
    var InkButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InkButton = (function () {
                function InkButton() {
                    this.OnClick = new core_1.EventEmitter();
                    this.BGColor = 'gray';
                    this.Color = 'white';
                    this.pX = 0;
                    this.pY = 0;
                    this.pR = 0;
                }
                InkButton.prototype.AreaOnClick = function (event) {
                    this.pX = event.offsetX;
                    this.pY = event.offsetY;
                    this.circleEffect();
                    this.OnClick.next('');
                };
                InkButton.prototype.circleEffect = function () {
                    var _this = this;
                    if (this.pR < 30) {
                        this.pR++;
                        setTimeout(function () { _this.circleEffect(); }, 5);
                    }
                    else {
                        this.pR = 0;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], InkButton.prototype, "Text", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], InkButton.prototype, "BGColor", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], InkButton.prototype, "Color", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], InkButton.prototype, "position", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], InkButton.prototype, "pX", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], InkButton.prototype, "pY", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], InkButton.prototype, "OnClick", void 0);
                InkButton = __decorate([
                    core_1.Component({
                        selector: 'InkButton',
                        template: "\n        <div class=\"BtnBody\" (click)=\"AreaOnClick($event)\"\n        [ngStyle]=\"{ \n            'background-color': BGColor, \n            'color': Color \n        }\">\n            {{Text}}\n            <div class=\"BtnEffect\"\n                [ngStyle]=\"{ '-webkit-clip-path': 'circle(' + pR +'% at ' + pX + 'px ' +  pY + 'px)'}\">\n            </div>\n        </div>\n    ",
                        styles: [
                            ".BtnBody{\n            width: 100px;\n            height: 45px;\n            line-height: 45px;\n            overflow:hidden;\n            text-align:center;\n            position:relative;\n            border-radius:10px;\n            -webkit-box-shadow:0 0 4px 0px #aaaaaa;\n            transition:all 0.5s;\n            display:inline-block;\n            }\n\n            .BtnBody:hover{\n            -webkit-box-shadow:0 5px 5px 3px #aaaaaa;\n            }\n\n            .BtnEffect{\n                position:absolute; \n                background-color:#aaaaaa; \n                width:100px;\n                height:50px;\n                top:0px; \n                Opacity:0.3;\n        }"],
                    }), 
                    __metadata('design:paramtypes', [])
                ], InkButton);
                return InkButton;
            }());
            exports_1("InkButton", InkButton);
        }
    }
});
//# sourceMappingURL=InkButton.js.map