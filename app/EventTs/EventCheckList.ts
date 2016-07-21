import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {CheckGroupData} from '../Model/CheckGroupData';

@Component({
    selector: 'EventCheckList',
    templateUrl: 'template/Event/EventCheckList.html',
    styleUrls: ['Style/EventCss.css'],
})

export class EventCheckListCpn{
    @Input() CheckGroupList: CheckGroupData[];
    @Output() OnSelected = new EventEmitter();

    OnSelectedCheck(c: CheckGroupData){
        this.OnSelected.next(c);
    }

    constructor(){
        
    }
}