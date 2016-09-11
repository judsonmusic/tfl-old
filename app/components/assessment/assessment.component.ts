import{Component, OnInit} from '@angular/core';
import {MyFilterPipe} from "../pipes/filter.pipe";
import {Router} from '@angular/router';
import {UserService} from "../user-service/user.service";
import {AuthService} from "../auth/auth.service";
import {AssessmentService} from "../assessment/assessment.service";

@Component({
  templateUrl: '/app/components/assessment/assessment.component.html',
  pipes: [MyFilterPipe]
})
export class AssessmentComponent implements OnInit {

  public data:any;
  public count = 0;
  public answers:any;
  public questions:any;
  public subquestions:any;
  public user: any[];
  public Math: any;

  ngOnInit(){
    //console.log(this.userService.userData, this.data.account);
    this.data.account = this.userService.userData || this.data.account;
    //console.log('@@@@@SURVEY INIT!', this.data.account);
    this.userService.user$.subscribe((userData) => {

      this.data.account = userData;
      //console.log('ACCOUNT INFORMATION ADDED!', this.data.account);

    });
  }

  constructor(private router:Router, public userService: UserService, public authService: AuthService, public assessmentService: AssessmentService) {


    this.authService.redirectUrl = '/assessment';

    this.Math = Math;


    //console.log('the assessment componet loaded.');
    //array of answers they can select for main question.

    this.data = {};
    this.data.account = {};
    this.data.account.assessment = this.assessmentService.assessment;
    this.questions = this.assessmentService.questions;
    this.subquestions = this.assessmentService.subquestions;
    this.answers = this.assessmentService.answers;

  }

  start() {

    this.count = 1;
  }
  save(){

    //console.log('Saving Your Data!');
    //we need to add the assessment data to the account so it will get stored in use data;
    this.userService.updateAccount(this.data.account).subscribe((res) => {

      //console.log('Data saved. Going to next slide.');
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

    if (this.count > 1 && this.count <= this.questions.length) {

      this.count--;

    } else {

      this.count = 1;
    }

  }//end counter

  finish(ev) {

    if(confirm('Want to change any of your answers? Do it now! Once you hit the finish button all of your answered will be final.')) {

      this.save();
      ev.preventDefault();
      ev.stopPropagation();
      this.router.navigate(['dashboard']);
    }

  }




}
