import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {InkButton} from '../TestComponent/InkButton';


@Component({
    selector: 'HistoryMain',
    directives: [InkButton,],
    templateUrl: 'template/History/HistoryMain.html',
})

export class HistoryMainCpn{
    @Input() Geta: string;
    @Input() BtnColor: string;
    @Input() Color: string;

     OnSelectPage(value){
        this.NowSelectPage.next(value);
    }

}