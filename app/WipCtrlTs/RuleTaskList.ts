import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {RuleData} from '../Model/RuleData';
import {TaskData} from '../Model/TaskData';

@Component({
    selector: 'RuleTaskList',
    templateUrl: 'template/WipCtrl/RuleTaskList.html'
})

export class RuleTaskListComp {

    @Output() OnSelectTask = new EventEmitter();

    ruleList: RuleData[] = [
        {
            RuleName: 'All',
            TaskList: [
                {
                    TaskName: '01_HoldLotCheck',
                    Description: '���d�q��',
                    EventList: [],
                    Display : true 
                },
                {
                    TaskName: '02_DefectCheck',
                    Description: '���o�ƶq�L�h�q��',
                    EventList: [],
                    Display: true 
                }
            ],
            Display: false,
        }
    ];    

    ChangeDisplay(rule: RuleData) {
        rule.Display = !rule.Display;
    }

    SelectedEvent(e: TaskData) {
        //alert('inner' + e.TaskName);
        this.OnSelectTask.next(e);
    }

    constructor() {
        
    }
}