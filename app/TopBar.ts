import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'topBar',
    templateUrl: 'template/TopBar.html',
})

export class TopBarCpn{
    @Output() NowSelectPage = new EventEmitter();

    OnSelectPage(value){
        this.NowSelectPage.next(value);
    }

    constructor(){

    }
}