import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {TaskData} from '../Model/TaskData';
import {TaskEventData} from '../Model/TaskEventData'; 

@Component({
    selector: 'TaskEventList',
    templateUrl: 'template/Task/TaskEventList.html', 
    styleUrls: ['Style/TaskCss.css'],   
})

export class TaskEventListCpn{
    @Input() TaskList: TaskData[];
    @Output() OnSelectCheckGroup = new EventEmitter(); 

    ChangeDisplay(task:TaskData){
        task.Display = !task.Display;
    }

    SelectedEvent(e: TaskEventData){
        this.OnSelectCheckGroup.next(e.CheckGroupList);
    }

    constructor(){

    }
}