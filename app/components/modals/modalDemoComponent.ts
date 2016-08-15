import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

// todo: change to ng2-bootstrap
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';


@Component({
  selector: 'modal-demo',
  directives: [MODAL_DIRECTIVES, CORE_DIRECTIVES],
  viewProviders:[BS_VIEW_PROVIDERS],
  templateUrl: '/app/components/modals/modalDemo.component.html'
})
export class ModalDemoComponent implements AfterViewInit{

  @ViewChild('childModal') public childModal: ModalDirective;
  @ViewChild('lgModal') public lgModal: ModalDirective;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }


    ngAfterViewInit() {
      this.lgModal.show();
    }



}
