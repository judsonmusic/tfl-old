import {Component, ViewChild, AfterViewInit, Input, Output, EventEmitter} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

// todo: change to ng2-bootstrap
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';


@Component({
  selector: 'modal-generic',
  directives: [MODAL_DIRECTIVES, CORE_DIRECTIVES],
  viewProviders: [BS_VIEW_PROVIDERS],
  templateUrl: '/app/components/modals/modalGeneric.component.html',
  exportAs: 'child10'

})
export class ModalGenericComponent {

  @ViewChild('lgModal') public lgModal:ModalDirective;
  @Input() public message: string;
  @Output() public onShow:EventEmitter<any> = new EventEmitter();
  @Output() public onShown:EventEmitter<any> = new EventEmitter();
  @Output() public onHide:EventEmitter<any> = new EventEmitter();
  @Output() public onHidden:EventEmitter<any> = new EventEmitter();


  constructor(){

    //console.log('Modal DataJunkie Loaded');
    this.message = this.message || "No message was provided!";

  }

  public show(){
    this.lgModal.show();
    this.onShow.next(true);
  }

  public hide(){

    this.lgModal.hide();
    this.onHide.next(true);
  }


}
