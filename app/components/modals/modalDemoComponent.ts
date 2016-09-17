import {Component, ViewChild, AfterViewInit, Input} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

// todo: change to ng2-bootstrap
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';


@Component({
  selector: 'modal-demo',
  directives: [MODAL_DIRECTIVES, CORE_DIRECTIVES],
  viewProviders: [BS_VIEW_PROVIDERS],
  templateUrl: '/app/components/modals/modalDemo.component.html',
  exportAs: 'child'
})
export class ModalDemoComponent implements AfterViewInit {

  @ViewChild('childModal') public childModal:ModalDirective;
  @ViewChild('lgModal') public lgModal:ModalDirective;

  constructor(){

    //console.log('Modal Demo Loaded');
  }

  public show(){

    //console.log('Show modal!');
    this.lgModal.show();
  }

  public hide(){
    //console.log('Hide modal!');
    sessionStorage.setItem('modal-demo', '1');
    this.lgModal.hide();

  }

  public showChildModal():void {
    //this.childModal.show();
  }

  public hideChildModal():void {
    //this.childModal.hide();
  }

  ngAfterViewInit() {

    if(!sessionStorage.getItem('modal-demo')) {
      this.lgModal.show();
    }
  }


}
