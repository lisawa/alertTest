import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {RuleData} from '../Model/RuleData';

@Component({
    selector: 'WipCtrlMain',
    templateUrl: 'template/WipCtrl/WipCtrlMain.html',
})

export class WipCtrlMainCpn{
    @Input() RuleList: RuleData[];

    constructor(){
        this.RuleList = [
            {
                RuleName: 'Rule1',
                Display: true,
                TaskList:[
                    {
                        TaskName: '扣留警報',
                        Description: '',
                        Display:false,
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
                    }
                ],
            },
            {
                RuleName: 'Rule2',
                Display: true,
                TaskList:[],
            },
        ];
    }
}