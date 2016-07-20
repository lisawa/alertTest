import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ActionData} from '../Model/ActionData'

@Component({
    selector: 'ActionNavigation',
    templateUrl: 'template/Action/ActionNavigation.html',
    styleUrls: ['Style/ActionCss.css'],
}) 

export class ActionNavigationCpn{
    @Input() ActionDataList: ActionData[];
    @Output() OnSelected = new EventEmitter();

    SelectList(ac: ActionData){
        this.OnSelected.next(ac);
    }

    SelectedSetting(){
        var tmp: ActionData = {
            ActionDesc:'設定',
            ActionName:'Setting',
            ActionIcon:'svg/setting.svg',
        }
        
        this.SelectList(tmp);
    }

    constructor(){

    }
}

