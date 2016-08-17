import{Component, OnInit} from '@angular/core';
import {MyFilterPipe} from "../pipes/filter.pipe";
import {Router} from '@angular/router';
import {UserService} from "../user.service";
import {AuthService} from "../auth.service";

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
  public blah:any[];
  public testData:any[];
  public user: any[];
  public newData:any;

  ngOnInit(){


    this.data.account = this.userService.userData || this.data.account;
    console.log('@@@@@SURVEY INIT!', this.data.account);
    this.userService.user$.subscribe((userData) => {

      this.data.account = userData;
      console.log('ACCOUNT INFORMATION ADDED!', this.data.account);

    });
  }

  constructor(private router:Router, public userService: UserService, public authService: AuthService) {


    this.authService.redirectUrl = '/survey';


    console.log('the survey componet loaded.');
    //array of answers they can select for main question.

    this.data = {};
    this.data.account = {};
    this.data.account.assessment = {

      1: {id: "1", answer: "", subs: []},
      2: {id: "2", answer: "", subs: []},
      3: {id: "3", answer: "", subs: []},
      4: {id: "4", answer: "", subs: []},
      5: {id: "5", answer: "", subs: []},
      6: {id: "6", answer: "", subs: []},
      7: {id: "7", answer: "", subs: []},
      8: {id: "8", answer: "", subs: []},
      9: {id: "9", answer: "", subs: []},
      10: {id: "10", answer: "", subs: []},
      11: {id: "11", answer: "", subs: []},
      12: {id: "12", answer: "", subs: []},
      13: {id: "13", answer: "", subs: []},
      14: {id: "14", answer: "", subs: []},
      15: {id: "15", answer: "", subs: []}

    };

    //console.log("TEST", this.userService.user, this.userService.user$);

    this.questions = [
      {id: 1, question: "Do you feel a connection to a higher source and have a sense of comfort knowing that you are part of something greater than yourself?", category: "Spiritual", subs: []},
      {id: 2, question: "Do you feel you are free of unhealthy behavior that impacts your overall well-being?", category: "Habits", subs: []},
      {id: 3, question: "Do you feel you have healthy and fulfilling relationships?", category: "Relationships", subs: []},
      {id: 4, question: "Do you feel you have a sense of purpose and that you have a positive outlook about yourself and life?", category: "Emotional Well-being", subs: []},
      {id: 5, question: "Do you feel you have a healthy diet and that you are fueling your body for optimal health? ", category: "Eating Habits ", subs: []},
      {id: 6, question: "Do you feel that you get enough rest and that your stress level is healthy?", category: "Relaxation ", subs: []},
      {id: 7, question: "Do you feel you get enough physical activity for optimal health?", category: "Exercise ", subs: []},
      {id: 8, question: "Do you feel you practice self-care and go to the doctor regularly?", category: "Medical Maintenance", subs: []},
      {id: 9, question: "Do you feel satisfied with your income and economic stability?", category: "Financial", subs: []},
      {id: 10, question: "Do you feel you do fun things and laugh enough in your life?", category: "Play", subs: []},
      {id: 11, question: "Do you feel you have a healthy sense of balance in this area of your life?", category: "Work-life Balance", subs: []},
      {id: 12, question: "Do you feel a sense of peace and contentment  in your home? ", category: "Home Environment", subs: []},
      {id: 13, question: "Do you feel that you are challenged and growing as a person?", category: "Intellectual Wellbeing", subs: []},
      {id: 14, question: "Do you feel content with what you see when you look in the mirror?", category: "Self-image", subs: []},
      {id: 15, question: "Do you feel engaged at work and a sense of fulfillment with your job?", category: "Work Satisfaction", subs: []}

    ];

    this.subquestions = [

      {id: "1", question: "How balanced and satisfied are you in this dimension of your life?"},
      {id: "2", question: "Is it importance for your to gain greater balance and satisfaction in this dimension?"},
      {id: "3", question: "How motivated are you to improve this dimension?"},
      {id: "4", question: "How is your overall happiness affected by this dimension of your life?"},
      {id: "5", question: "Is your job and/or school performance affected by this dimension of your life?"},

    ];


    this.answers = [

      {id: 1, value: "Strongly Disagree"},
      {id: 2, value: "Disagree"},
      {id: 3, value: "Somewhat Agree"},
      {id: 4, value: "Agree"},
      {id: 5, value: "Strongly Agree"}

    ];


    this.testData = [
      {
        "1": {"id": "1", "answer": "3", "subs": ["1", "2", "4", "4", "2"]},
        "2": {"id": "2", "answer": "4", "subs": ["3", "2", "4", "4", "3"]},
        "3": {"id": "3", "answer": "4", "subs": ["5", "2", "4", "3", "3"]},
        "4": {"id": "4", "answer": "4", "subs": ["5", "3", "4", "4", "4"]},
        "5": {"id": "5", "answer": "4", "subs": ["5", "5", "5", "5", "5"]},
        "6": {"id": "6", "answer": "3", "subs": ["5", "3", "5", "5", "5"]},
        "7": {"id": "7", "answer": "5", "subs": ["5", "5", "5", "5", "5"]},
        "8": {"id": "8", "answer": "4", "subs": ["5", "5", "5", "5", "5"]},
        "9": {"id": "9", "answer": "5", "subs": ["5", "5", "5", "5", "5"]},
        "10": {"id": "10", "answer": "5", "subs": ["5", "2", "4", "1", "1"]},
        "11": {"id": "11", "answer": "5", "subs": ["5", "2", "5", "5", "4"]},
        "12": {"id": "12", "answer": "4", "subs": ["5", "2", "5", "2", "1"]},
        "13": {"id": "13", "answer": "5", "subs": ["5", "5", "5", "5", "4"]},
        "14": {"id": "14", "answer": "5", "subs": ["5", "5", "5", "3", "5"]},
        "15": {"id": "15", "answer": "5", "subs": ["5", "5", "5", "5", "5"]}
      }
    ];






    //console.log(this.data['account'], this.data['assessment']);
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
