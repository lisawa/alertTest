import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {EventTemplateData} from '../model/EventTemplateData';

@Component({
    selector: 'EventTemplateList',
    templateUrl: 'template/Event/EventTemplateList.html',
    styleUrls: ['Style/EventCss.css'],
})

export class EventTemplateListCpn{
    @Input() TemplateList: EventTemplateData[];
    @Output() OnSelected = new EventEmitter(); 

    OnSelectedTemplate(t: EventTemplateData){
        this.OnSelected.next(t);
    }

    constructor(){
        
    }
}