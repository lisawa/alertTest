import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {EventTemplateData} from '../Model/EventTemplateData';

@Component({
    selector:'EventSetting',
    templateUrl: 'template/Event/EventSetting.html',
    styleUrls: ['Style/EventCss.css'],
})

export class EventSettingCpn{
    @Input() NowSettingEvent: EventTemplateData;

    ngOnInit(){
        this.NowSettingEvent= {
            TaskName: '',
            EventName: '扣留',
            CheckList: [
                {
                    AttritubeName: 'Lot',
                    AttritubeType: 'System',
                    Caption: '批號',
                    Sequence: 0,
                    CheckOperator: 'Like',
                    CheckType: 'Value',
                    CheckValue: 'CheckValue',
                }
            ],
        };
    }

    constructor(){
        
        
    }
}