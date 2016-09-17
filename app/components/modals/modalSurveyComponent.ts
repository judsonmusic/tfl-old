import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {Router} from "@angular/router";

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

  @ViewChild('childModal') public childModal: ModalDirective;
  @ViewChild('lgModal') public lgModal: ModalDirective;

  public survey_questions;
  public survey_answers;
  public userData;
  public surveyComplete;

  constructor(public userService: UserService, public surveyService: SurveyService, private router: Router) {


    this.userService = userService;
    this.surveyService = surveyService;
    this.survey_questions = surveyService.questions;
    this.survey_answers = surveyService.answers;
    this.userData = userService.userData;
    if(this.userData.survey.length <= 0){

      this.userData.survey = this.surveyService.survey;

    }


  }

  public checkComplete(){

    let complete = [];

    this.userData.survey.map((item, index)=> {

      if (item.id == 101 || item.id == 100 || item.answer != "") {

        complete.push(true);

      } else{

        complete.push(false);

      }

    });
    //console.log(complete);
    this.surveyComplete = complete.indexOf(false) == -1;


    if(this.surveyComplete){

      //console.log('The survey is complete. Lets update the account', this.userData);

      this.userService.updateAccount(this.userData).subscribe((user)=>{

        this.surveyService.surveyComplete = true;

        //console.log('Account updated with survey data!', user);

      })
    }
  }

  public updateSurvey(ev, id) {

    this.surveyComplete = true;

    //console.log('Attempting to update', ev, id);

    let itemExists = false;

    this.userData.survey.map((item, index)=> {

      if (item.id == id) {
        itemExists = true;
        item.answer = ev.target.value;
      }
    });

    itemExists = false;
    this.checkComplete();
  }

  getSurveyAnswer(id: number): string {
    return this.userData.survey.find(s => s.id == id).answer;
  }

  public show() {
    this.lgModal.show();
  }

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }

  ngAfterViewInit() {

    this.checkComplete();

  }

  public completeSurvey(){
    this.lgModal.hide();
    this.router.navigate(['tfl-guide']);
  }


}
