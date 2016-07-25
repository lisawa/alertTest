import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {CheckGroupData} from '../Model/CheckGroupData';

@Component({
    selector: 'CheckSetting',
    templateUrl: 'template/Event/CheckSetting.html',
    styleUrls:['Style/EventCss.css'],
})

export class CheckSettingCpn{
    @Input() CheckGroup: CheckGroupData;
    @Input() testS: string;
    
    ngOnInit(){
        this.CheckGroup = {
            AttritubeName: 'Lot',   
            AttritubeType: 'System',
            Caption: '批號',
            Sequence: 0,
            CheckOperator: 'Like',
            CheckType: 'Value',
            CheckValue: '',
        };
    }

    constructor(){
    }
}