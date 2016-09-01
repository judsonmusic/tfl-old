import {Component, ViewChild, AfterViewInit, Input} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

// todo: change to ng2-bootstrap
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';


@Component({
  selector: 'modal-results',
  directives: [MODAL_DIRECTIVES, CORE_DIRECTIVES],
  viewProviders: [BS_VIEW_PROVIDERS],
  templateUrl: '/app/components/modals/modalYourResults.component.html',
  exportAs: 'child3'

})
export class ModalYourResultsComponent implements AfterViewInit {

  @ViewChild('childModal') public childModal:ModalDirective;
  @ViewChild('lgModal') public lgModal:ModalDirective;

  public show(){
    this.lgModal.show();
  }

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }

  ngAfterViewInit() {
    //this.lgModal2.show();
  }


}
