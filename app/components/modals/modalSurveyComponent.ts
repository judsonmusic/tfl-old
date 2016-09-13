import {Component, ViewChild, AfterViewInit, Input} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';

// todo: change to ng2-bootstrap
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';
import {UserService} from "../user-service/user.service";
import {SurveyService} from "../survey/survey.service";


@Component({
  selector: 'modal-survey',
  directives: [MODAL_DIRECTIVES, CORE_DIRECTIVES],
  viewProviders: [BS_VIEW_PROVIDERS],
  templateUrl: '/app/components/modals/modalSurvey.component.html',
  exportAs: 'child6'
})
export class ModalSurveyComponent implements AfterViewInit {

  @ViewChild('childModal') public childModal:ModalDirective;
  @ViewChild('lgModal') public lgModal:ModalDirective;

  public survey_questions;

  constructor(public userService: UserService, public surveyService: SurveyService){

    console.log('Modal Survey Loaded');
    this.userService = UserService;
    this.surveyService = SurveyService;
    this.survey_questions = surveyService.questions;
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
