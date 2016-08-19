import{Component, OnInit} from '@angular/core';
import {MyFilterPipe} from "../pipes/filter.pipe";
import {Router} from '@angular/router';
import {UserService} from "../user-service/user.service";
import {AuthService} from "../auth/auth.service";
import {SurveyService} from "./survey.service";

@Component({
  templateUrl: '/app/components/survey/survey.component.html',
  pipes: [MyFilterPipe]
})
export class SurveyComponent implements OnInit {

  public data:any;
  public count = 0;
  public answers:any;
  public questions:any;
  public subquestions:any;
  public user: any[];

  ngOnInit(){
    console.log(this.userService.userData, this.data.account);
    this.data.account = this.userService.userData || this.data.account;
    console.log('@@@@@SURVEY INIT!', this.data.account);
    this.userService.user$.subscribe((userData) => {

      this.data.account = userData;
      console.log('ACCOUNT INFORMATION ADDED!', this.data.account);

    });
  }

  constructor(private router:Router, public userService: UserService, public authService: AuthService, public surveyService: SurveyService) {


    this.authService.redirectUrl = '/survey';


    console.log('the survey componet loaded.');
    //array of answers they can select for main question.

    this.data = {};
    this.data.account = {};
    this.data.account.assessment = this.surveyService.assessment;
    this.questions = this.surveyService.questions;
    this.subquestions = this.surveyService.subquestions;
    this.answers = this.surveyService.answers;

  }

  start() {

    this.count = 1;
  }
  save(){

    console.log('Saving Your Data!');
    //we need to add the assessment data to the account so it will get stored in use data;
    this.userService.updateAccount(this.data.account).subscribe((res) => {

      console.log('Data saved. Going to next slide.');
      this.counterUp();

    }, (err) => console.log('There was an error!'));



  }
  counterUp() {

    if (this.count < this.questions.length) {

      this.count++;

    } else {

      this.count = 1;
    }

  }//end counter

  counterDown() {

    if (this.count > 1 && this.count < this.questions.length) {

      this.count--;

    } else {

      this.count = 1;
    }

  }//end counter

  finish(ev) {

    this.save();

    ev.preventDefault();
    ev.stopPropagation();
    this.router.navigate(['dashboard']);

  }


}
