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

      {id: 1, question: "I feel my diet is healthy and that I am fueling my body for optimal performance. ", category: "Nutrition", templateUrl: "/app/components/dimensions/nutrition.html"},
      {id: 2, question: "I get adequate rest, have strong coping skills and feel that my stress level is healthy.", category: "Stress",  templateUrl: "/app/components/dimensions/relaxation.html"},
      {id: 3, question: "I get enough exercise and movement throughout the day for optimal health.", category: "Activity",  templateUrl: "/app/components/dimensions/activity.html"},
      {id: 4, question: "I have a sense of self-worth, a positive attitude and I am free of current and/or past self-doubt and struggles.", category: "Emotional",  templateUrl: "/app/components/dimensions/emotional.html"},
      {id: 5, question: "I feel a connection to a higher source and have a sense of comfort knowing that I am part of something greater than myself.", category: "Spiritual", templateUrl: "/app/components/dimensions/spiritual.html"},
      {id: 6, question: "I am free of unhealthy behavior that impacts my overall wellbeing.", category: "Habits",  templateUrl: "/app/components/dimensions/habits.html"},
      {id: 7, question: "I have a supportive social network and feel my relationships are healthy and fulfilling.", category: "Relationships",  templateUrl: "/app/components/dimensions/relationships.html"},
      {id: 8, question: "I routinely go to my doctor(s), follow medical recommendations and practice self-care.", category: "Health",  templateUrl: "/app/components/dimensions/health.html"},
      {id: 9, question: "I am satisfied with my economic position.", category: "Financial",  templateUrl: "/app/components/dimensions/financial.html"},
      {id: 10, question: "I engage in fun activities, hobbies and laugh often.", category: "Play",  templateUrl: "/app/components/dimensions/play.html"},
      {id: 11, question: "I feel a sense of fulfillment with the way I spend my time.", category: "Life Balance",  templateUrl: "/app/components/dimensions/life-balance.html"},
      {id: 12, question: "I feel a sense of peace and contentment in my home.", category: "Home",  templateUrl: "/app/components/dimensions/home.html"},
      {id: 13, question: "I feel that I am challenged and growing as a person.", category: "Intellectual",  templateUrl: "/app/components/dimensions/intellectual.html"},
      {id: 14, question: "I am content with what I see when I look in the mirror.", category: "Self-Image",  templateUrl: "/app/components/dimensions/self-image.html"},
      {id: 15, question: "I feel engaged, valued and have a sense of purpose.", category: "Occupation",  templateUrl: "/app/components/dimensions/occupation.html"}

    ];

    /*

     .swatch.swatch-blue {
     background: #04319e;
     }

     .swatch.swatch-light-blue {
     background: #3082e1;
     }

     .swatch.swatch-black {

     background: #333338;
     }

     .swatch.swatch-green {

     background: #089b6f;
     }

     .swatch.swatch-orange {

     background: #fe7d00;
     }

     .swatch.swatch-purple {

     background: #4600bd;

     }

     .swatch.swatch-yellow {

     background: #e5e300;

     }

     .swatch.swatch-red {

     background: #d10016;

     }




     */

    this.subquestions = [

      {id: "1", category: "Importance", question: "This dimension of my life is important to me.", color: "#04319e"},
      {id: "2", category: "Happiness", question: "This dimension positively impacts my happiness.",  color: "#d10016"},
      {id: "3", category: "Performance", question: "This dimension positively effects my performance.",  color: "#089b6f"},
      {id: "4", category: "Satisfaction", question: "I am satisfied with this dimension of my life.",  color: "#e5e300"},
      {id: "5", category: "Action", question: "I am actively working to improve and/or maintain this dimension of my life.",  color: "#fe7d00"},
      {id: "6", category: "Motivation", question: "I am motivated to improve and/or maintain this area of my life.",  color: "#3082e1"}

    ];


    this.answers = [

      {id: 1, value: "Strongly Disagree"},
      {id: 2, value: "Disagree"},
      {id: 3, value: "Neutral"},
      {id: 4, value: "Agree"},
      {id: 5, value: "Strongly Agree"}

    ];

    this.assessment = [

      {id: 1, answer: "", subs: []},
      {id: 2, answer: "", subs: []},
      {id: 3, answer: "", subs: []},
      {id: 4, answer: "", subs: []},
      {id: 5, answer: "", subs: []},
      {id: 6, answer: "", subs: []},
      {id: 7, answer: "", subs: []},
      {id: 8, answer: "", subs: []},
      {id: 9, answer: "", subs: []},
      {id: 10, answer: "", subs: []},
      {id: 11, answer: "", subs: []},
      {id: 12, answer: "", subs: []},
      {id: 13, answer: "", subs: []},
      {id: 14, answer: "", subs: []},
      {id: 15, answer: "", subs: []}

    ];


  }

  getDimension(id){

      return this.questions.filter(
        (item:any) => item.id === id)[0];

  }

  getSubsForDimension(assessment, id){
    //console.log('ASSESSMENT FOR FILTER', id, assessment);
    return assessment.filter(
      (item:any) => item.id == id);

  }

  getAnwerForQuestion(assessment, id){

    return assessment.filter(
      (item:any) => item.id == id);


  }

  getHtmlForDimension(templateUrl){

    return this.http.get(templateUrl).map((response) => {

      return response['_body'];

    });

  }

}
