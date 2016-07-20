import {Component, Input, Output, EventEmitter} from 'angular2/core';

import {EventCheckListCpn} from './EventCheckList';
import {EventTemplateListCpn} from './EventTemplateList';

@Component({
    selector: 'EventMain',
    templateUrl: 'template/Event/EventMain.html',
    directives: [EventCheckListCpn, EventTemplateListCpn],
})

export class EventMainCpn{
}