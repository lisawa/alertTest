import {Component, Input} from 'angular2/core';

import {TopBarCpn} from './TopBar';
import {ActionMainCpn} from './ActionTs/ActionMain';
import {EventMainCpn} from './EventTs/EventMain';
import {TaskMainCpn} from './TaskTs/TaskMain';
import {SysCtrlMainCpn} from './SysCtrlTs/SysCtrlMain';
import {WipCtrlMainCpn} from './WipCtrlTs/WipCtrlMain'; 
import {HistoryMainCpn} from './HistoryTs/HistoryMain';

@Component({
    selector: 'my-app',
    templateUrl: 'template/MainPage.html',
    directives: [
        TopBarCpn, 
        ActionMainCpn, 
        EventMainCpn,
        TaskMainCpn,
        SysCtrlMainCpn,
        WipCtrlMainCpn,
        HistoryMainCpn,
        ],
})

export class AppComponent{
    @Input() TopBarHeight: number = 80;
    @Input() ViewHeight: number = window.innerHeight - this.TopBarHeight;
    @Input() NowPage: string;

    OnPageChange(value){
        this.NowPage = value; 
    }

    constructor(){
        this.NowPage = 'Evt';
    }
}