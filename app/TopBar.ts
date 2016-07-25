import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {InkButton} from './TestComponent/InkButton';

@Component({
    selector: 'topBar',
    templateUrl: 'template/TopBar.html',
    directives: [InkButton,],
    styles: [`.Btn{ padding-left: 10px; }`],
})

export class TopBarCpn{
    @Output() NowSelectPage = new EventEmitter();
    @Input() Geta: string;
    @Input() BtnColor: string;
    @Input() Color: string;

    OnSelectPage(value){
        this.NowSelectPage.next(value);
    }

    GetClick(){
        console.log('Get');
    }

    constructor(){
        this.Geta = 'aaaaa';
    }
}