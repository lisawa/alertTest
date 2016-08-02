import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {TaskEventActionData} from '../Model/TaskEventActionData'
@Component({
    selector: 'TaskEventAction',
    templateUrl: 'template/WipCtrl/TaskEventAction.html'
})

export class TaskEventActionComp {

    taskEventActionData: TaskEventActionData = {
        TaskName: "01_HoldLotCheck",
        EventList: [
            "HoldLotEvent1",
            "HoldLotEvent"
        ],
        ActionList: [
            "HoldWeChatSender"
        ]
    };
    constructor() {

    }
}