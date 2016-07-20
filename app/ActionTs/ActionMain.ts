import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {ActionNavigationCpn} from './ActionNavigation';

import {ActionData} from '../Model/ActionData';

@Component({
    selector: 'ActionMain',
    templateUrl: 'template/Action/ActionMain.html',
    directives: [ActionNavigationCpn],
    styleUrls: ['Style/ActionCss.css']
})

export class ActionMainCpn{
    @Input() ActionDataList: ActionData[];
    @Input() NowSelectedItem: string;

    GetSelected(ad: ActionData){
        this.NowSelectedItem = ad.ActionName;
    }

    constructor(){
        this.ActionDataList = [
            {
                ActionName:'Line',
                ActionDesc:'Line',
                ActionIcon:'svg/line.svg',
            },
            {
                ActionName:'WeChat',
                ActionDesc:'WeChat微信',
                ActionIcon:'svg/wechat.svg',
            },
            {
                ActionName:'Email',
                ActionDesc:'Email信件',
                ActionIcon:'svg/mail.svg',
            },
        ];

        this.NowSelectedItem = 'non Selected';
    }
}