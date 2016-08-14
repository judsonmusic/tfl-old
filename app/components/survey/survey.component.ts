import{Component, OnInit} from '@angular/core';
import {MyFilterPipe} from "../pipes/filter.pipe";
import {Router} from '@angular/router';

@Component({
  templateUrl: '/app/components/survey/survey.component.html',
  pipes: [MyFilterPipe]
})
export class SurveyComponent {

  public data:any;
  public count = 0;
  public answers: any;

  constructor(private router:Router) {

    //array of answers they can select for main question.
    this.answers = ["Strongly Disagree", "Disagree", "Somewhat Agree", "Agree", "Strongly Agree"];

    this.data = {

      account: {id: 123, name: "Judson Terrell"},
      assessment: [
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
        {id: 15, question: "Do you feel engaged at work and a sense of fulfillment with your job?", category: "Work Satisfaction", subs: []}]
    };

    console.log(this.data['account'], this.data['assessment']);
  }

  start() {

    this.count = 1;
  }

  counterUp() {

    if (this.count < this.data.assessment.length) {

      this.count++;

    } else {

      this.count = 1;
    }

  }//end counter

  counterDown() {

    if (this.count > 1 && this.count < this.data.assessment.length) {

      this.count--;

    } else {

      this.count = 1;
    }

  }//end counter

  finish(ev) {

    ev.preventDefault();
    ev.stopPropagation();
    this.router.navigate(['dashboard']);

  }


}
