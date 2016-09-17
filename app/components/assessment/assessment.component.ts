import{Component, OnInit, ViewChild, ElementRef, Renderer} from '@angular/core';
import {MyFilterPipe} from "../pipes/filter.pipe";
import {Router} from '@angular/router';
import {UserService} from "../user-service/user.service";
import {AuthService} from "../auth/auth.service";
import {AssessmentService} from "../assessment/assessment.service";
import {ModalGenericComponent} from "../modals/modalGenericComponent";
import {ModalDirective} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  templateUrl: '/app/components/assessment/assessment.component.html',
  pipes: [MyFilterPipe],
  directives: [ModalGenericComponent]
})
export class AssessmentComponent implements OnInit {


  @ViewChild('g') public g:ModalDirective;

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

  constructor(private router:Router, public userService: UserService, public authService: AuthService, public assessmentService: AssessmentService, private renderer: Renderer) {


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

    ev.preventDefault();
    ev.stopPropagation();

    this.g.onShow.subscribe((hidden)=> {

      //console.log('The modal us showig!');

    });


    this.g.show();

    this.g.onHide.subscribe((hidden)=>{

      //console.log('The modal us hidden!');
      this.save();
      this.router.navigate(['dashboard']);
    });
  }


}
