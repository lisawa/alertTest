import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {InkButton} from '../TestComponent/InkButton';


@Component({
    selector: 'HistoryMain',
    directives: [InkButton,],
    templateUrl: 'template/History/HistoryMain.html',
})

export class HistoryMainCpn{
    
}