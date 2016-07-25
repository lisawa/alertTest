import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {EventTemplateData} from '../Model/EventTemplateData';
import {CheckGroupData} from '../Model/CheckGroupData';

import {EventCheckListCpn} from './EventCheckList';
import {EventTemplateListCpn} from './EventTemplateList';
import {EventSettingCpn} from './EventSetting';
import {CheckSettingCpn} from './CheckSetting'; 

@Component({
    selector: 'EventMain',
    templateUrl: 'template/Event/EventMain.html',
    directives: [EventCheckListCpn, EventTemplateListCpn, EventSettingCpn, CheckSettingCpn],
})

export class EventMainCpn{
    @Input() EventData: EventTemplateData[];
    @Input() SelectedGroup: CheckGroupData[];
    @Input() NowSettingCheck: CheckGroupData;
    @Input() NowSelectedCheck: string;
    @Input() NowContentType: string;

    GetSelectedTemplate(value: EventTemplateData){
        this.SelectedGroup = value.CheckList;
    }

    GetSelectedCheck(value: CheckGroupData){
        this.NowSettingCheck = value;
    }

    constructor(){
        this.EventData = [
            {
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
            },
            {
                TaskName: '',
                EventName: '扣留次數',
                CheckList: [
                    {
                        AttritubeName: 'Lot',
                        AttritubeType: 'System',
                        Caption: '批號',
                        Sequence: 0,
                        CheckOperator: 'Like',
                        CheckType: 'Value',
                        CheckValue: 'CheckValue',
                    },
                    {
                        AttritubeName: 'Count',
                        AttritubeType: 'System',
                        Caption: '次數',
                        Sequence: 1,
                        CheckOperator: '<',
                        CheckType: 'Value',
                        CheckValue: 'CheckValue',
                    }
                ],
            },
        ];
    }
}