import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {TaskData} from '../Model/TaskData';
import {TaskEventData} from '../Model/TaskEventData';
import {TaskCheckData} from '../Model/TaskCheckData';

import {TaskEventListCpn} from './TaskEventList';
import {TaskCheckListCpn} from './TaskCheckList';

@Component({
    selector: 'TaskMain',
    templateUrl: 'template/Task/TaskMain.html',
    directives: [TaskEventListCpn, TaskCheckListCpn],
    styleUrls: ['Style/TaskCss.css'],   
})

export class TaskMainCpn{
    @Input() TaskList: TaskData[];
    @Input() CheckGroupOnSelect: TaskCheckData[];
    @Input() CheckDataOnSelect: TaskCheckData;
    @Input() SelectedCheckName: string;

    GetSelectedCheckGroup(c: TaskCheckData[]){
        this.CheckGroupOnSelect = c;
    }

    GetSelectCheck(c: TaskCheckData){
        this.SelectedCheckName = c.Description;
    }

    constructor(){
        this.TaskList = [
            {
                TaskName:'01_HoldLotCheck',
                Description:'扣留通知',
                EventList:[
                    {
                        EventSID:'A2016052523250144970000',
                        EventName:'HoldLotEvent',
                        EventDescription:'批號扣留',
                        CheckGroupList:[
                            {
                                CheckGroupSeq:0,
                                Description:'發生扣留',
                            }
                        ],
                    },
                    {
                        EventSID:'A2016052523250144980000',
                        EventName:'HoldLotEvent1',
                        EventDescription:'扣留次數警報',
                        CheckGroupList:[
                            {
                                CheckGroupSeq:0,
                                Description:'扣留3次以上',
                            },
                            {
                                CheckGroupSeq:1,
                                Description:'扣留2次',
                            },
                            {
                                CheckGroupSeq:2,
                                Description:'發生扣留',
                            },
                        ],
                    }
                ],
                Display:false,
            },
            {
                TaskName:'02_DefectCheck',
                Description:'報廢數量過多通知',
                EventList:[],
                Display:false,
            },
            {
                TaskName:'03_WoYieldCheck',
                Description:'工單良率過低通知',
                EventList:[],
                Display:false,
            },
        ];
    }
}