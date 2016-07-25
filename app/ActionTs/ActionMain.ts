import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {ActionNavigationCpn} from './ActionNavigation';
import {LineSettingCpn} from './LineSetting';
import {WeChatSettingCpn} from './WeChatSetting';
import {EMailSettingCpn} from './EMailSetting';
import {ActionSettingCpn} from './ActionSetting';

import {ActionData} from '../Model/ActionData';

@Component({
    selector: 'ActionMain',
    templateUrl: 'template/Action/ActionMain.html',
    directives: [
        ActionNavigationCpn, 
        LineSettingCpn, 
        WeChatSettingCpn,
        EMailSettingCpn,
        ActionSettingCpn,
        ],
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

        this.NowSelectedItem = 'WeChat';
    }
}