import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Subject} from "../../../node_modules/rxjs/src/Subject";
import {Observable} from "../../../node_modules/rxjs/src/Observable";



@Injectable()
export class SurveyService{

  questions: any;
  subquestions: any;
  answers: any;
  assessment: any;


  constructor(public http: Http) {

    this.http = http;

    this.questions = [

      {id: 1, question: "I am glad I took the TFL Assessment and feel it was a valuable exercise."},
      {id: 2, question: "I feel I learned meaningful information about certain dimensions of my life."},
      {id: 3, question: "The TFL Assessment reflects my life accurately."},
      {id: 4, question: "I am going to take action in some of the dimensions I explored through this assessment."},
      {id: 5, question: "I would value “one” session to design a TFL Action Plan based on the dimensions that interest me."},
      {id: 6, question: "I would be interested in ongoing TFL Coaching and believe it would help me in certain dimensions of my life."},
      {id: 7, question: "I would recommend taking the TFL assessment to others. "},
      {id: 8, question: "TFL Action Plan information shared under each dimension was helpful."},
      {id: 9, question: "I would be interested in additional TFL services, assessments, workshops and programs."},
      {id: 10, question: "I found the assessment and site content thorough."},
      {id: 11, question: "I found the assessment and site content easy to understand."},
      {id: 12, question: "I found the assessment and site content encouraging."},
      {id: 13, question: "The assessment and site was easy to navigate."},
      {id: 14, question: "The reports were easy to understand."},
      {id: 15, question: "The pop up instruction boxes were helpful."},
      {id: 16, question: "I liked the pictures used in the assessment."},
      {id: 17, question: "I liked the graphics used on the site."},
      {id: 18, question: "I think the TFL assessment, reporting and TFL Empowerment Guide is worth:"},
      {id: 19, question: "Please feel free to provide any additional comments:"}

    ];



    this.answers = [

      {id: 1, value: "Strongly Disagree"},
      {id: 2, value: "Disagree"},
      {id: 3, value: "Neutral"},
      {id: 4, value: "Agree"},
      {id: 5, value: "Strongly Agree"}

    ];
  }

}
