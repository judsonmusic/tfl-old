import {Component, ViewChild, AfterViewInit, Input} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

// todo: change to ng2-bootstrap
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';
import {SurveyService} from "../survey/survey.service";


@Component({
  selector: 'modal-survey',
  directives: [MODAL_DIRECTIVES, CORE_DIRECTIVES],
  viewProviders: [BS_VIEW_PROVIDERS],
  templateUrl: '/app/components/modals/modalSurvey.component.html',
  exportAs: 'child-survey'

})
export class ModalSurveyComponent implements AfterViewInit {

  @ViewChild('childModal') public childModal:ModalDirective;
  @ViewChild('lgModal') public lgModal:ModalDirective;

  public answers: any;
  public questions: any;
  public survey_answers: any;

  constructor(public surveyService: SurveyService){

    this.questions = this.surveyService.questions;
    this.answers = this.surveyService.answers;
    this.survey_answers = [];
  }

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
