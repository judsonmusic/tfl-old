import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {Subject} from "../../../node_modules/rxjs/src/Subject";
import {Observable} from "../../../node_modules/rxjs/src/Observable";



@Injectable()
export class SurveyService{

  questions: any;
  answers: any;
  assessment: any;
  survey: any;


  constructor(public http: Http) {

    this.http = http;

    this.questions = [

      {id: 1, question: "I am glad I took the TFL Assessment and feel it was a valuable exercise. "},
      {id: 2, question: "The TFL Assessment reflects my life accurately."},
      {id: 3, question: "I am going to take action in some of the dimensions I explored through this assessment."},
      {id: 4, question: "I would value “one” session to design a TFL Action Plan based on the dimensions that interest me."},
      {id: 5, question: "I would be interested in ongoing TFL Coaching and believe it would help me in certain dimensions of my life."},
      {id: 6, question: "I would recommend taking the TFL assessment to others."},
      {id: 7, question: "TFL Action Plan information shared under each dimension was helpful."},
      {id: 8, question: "I would be interested in additional TFL services, assessments, workshops and programs."},
      {id: 9, question: "I found the assessment and site content thorough, helpful and encouraging."},
      {id: 10, question: "I found the TFL assessment and site content easy to understand and navigate. "},
      {id: 11, question: "I liked the TFL reporting and it was easy to understand."},
      {id: 12, question: "I liked the pictures and graphics that were used on the site. "}

    ];

    this.answers = [

      {id: 1, value: "Strongly Disagree"},
      {id: 2, value: "Disagree"},
      {id: 3, value: "Neutral"},
      {id: 4, value: "Agree"},
      {id: 5, value: "Strongly Agree"}

    ];

    this.survey = [

      {id: 1, answer: ""},
      {id: 2, answer: ""},
      {id: 3, answer: ""},
      {id: 4, answer: ""},
      {id: 5, answer: ""},
      {id: 6, answer: ""},
      {id: 7, answer: ""},
      {id: 8, answer: ""},
      {id: 9, answer: ""},
      {id: 10, answer: ""},
      {id: 11, answer: ""},
      {id: 12, answer: ""},
      {id: 13, answer: ""},
      {id: 14, answer: ""},
      {id: 15, answer: ""},
      {id: 16, answer: ""},
      {id: 17, answer: ""},
      {id: 18, answer: ""},
      {id: 19, answer: ""}

    ];
  }

}
