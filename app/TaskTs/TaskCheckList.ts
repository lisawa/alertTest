import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {TaskCheckData} from '../Model/TaskCheckData';

@Component({
    selector:'TaskCheckList',
    templateUrl:'template/Task/TaskCheckList.html',
    styleUrls:['Style/TaskCss.css'],
})

export class TaskCheckListCpn{
    @Input() TaskCheckList: TaskCheckData[];
    @Output() SelectedCheck = new EventEmitter();

    OnSelectCheck(check: TaskCheckData){
        this.SelectedCheck.next(check);
    }

    constructor(){

    }
}