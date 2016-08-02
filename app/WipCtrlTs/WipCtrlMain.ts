import {Component, Input, Output, EventEmitter, ViewContainerRef} from 'angular2/core';

import {TaskData} from '../Model/TaskData';
import {RuleTaskListComp} from './RuleTaskList';
import {TaskEventActionComp} from './TaskEventAction';

@Component({
    selector: 'WipCtrlMain',
    templateUrl: 'template/WipCtrl/WipCtrlMain.html',
    directives: [RuleTaskListComp, TaskEventActionComp],
})

export class WipCtrlMainCpn{

    public users: any[] = [];
    public selectedUsers: any[] = [];

    constructor() {        
        for (var i = 1; i <= 5; i++) {
            this.users.push({
                value: i,
                name: ("athlete-" + i),
                id: ("id-" + i),
                selected: false
            })
        }
    }

    GetSelectedTask(t: TaskData) {
        alert('Main' + t.TaskName);
    }

    toggleMultiSelect(event, val) {
        event.preventDefault();
        if (this.selectedUsers.indexOf(val) == -1) {
            this.selectedUsers = [...this.selectedUsers, val];
            val.selected = true;
        } else {
            this.selectedUsers = this.selectedUsers.filter(function (elem) {
                return elem != val;
            })
            val.selected = false;
        }
    }


}