import { Injectable } from '@angular/core';



@Injectable()
export class SurveyService{

  questions: any;
  subquestions: any;
  answers: any;
  assessment: any;


  constructor() {

    this.questions = [
      {id: 1, question: "Do you feel a connection to a higher source and have a sense of comfort knowing that you are part of something greater than yourself?", category: "Spiritual"},
      {id: 2, question: "Do you feel you are free of unhealthy behavior that impacts your overall well-being?", category: "Habits"},
      {id: 3, question: "Do you feel you have healthy and fulfilling relationships?", category: "Relationships"},
      {id: 4, question: "Do you feel you have a sense of purpose and that you have a positive outlook about yourself and life?", category: "Emotional Well-being"},
      {id: 5, question: "Do you feel you have a healthy diet and that you are fueling your body for optimal health? ", category: "Eating Habits "},
      {id: 6, question: "Do you feel that you get enough rest and that your stress level is healthy?", category: "Relaxation "},
      {id: 7, question: "Do you feel you get enough physical activity for optimal health?", category: "Exercise "},
      {id: 8, question: "Do you feel you practice self-care and go to the doctor regularly?", category: "Medical Maintenance"},
      {id: 9, question: "Do you feel satisfied with your income and economic stability?", category: "Financial"},
      {id: 10, question: "Do you feel you do fun things and laugh enough in your life?", category: "Play"},
      {id: 11, question: "Do you feel you have a healthy sense of balance in this area of your life?", category: "Work-life Balance"},
      {id: 12, question: "Do you feel a sense of peace and contentment  in your home? ", category: "Home Environment"},
      {id: 13, question: "Do you feel that you are challenged and growing as a person?", category: "Intellectual Wellbeing"},
      {id: 14, question: "Do you feel content with what you see when you look in the mirror?", category: "Self-image"},
      {id: 15, question: "Do you feel engaged at work and a sense of fulfillment with your job?", category: "Work Satisfaction"}

    ];

    this.subquestions = [

      {id: "1", category: "Satisfied", question: "How balanced and satisfied are you in this dimension of your life?"},
      {id: "2", category: "Importance", question: "Is it importance for your to gain greater balance and satisfaction in this dimension?"},
      {id: "3", category: "Motivation", question: "How motivated are you to improve this dimension?"},
      {id: "4", category: "Happiness", question: "How is your overall happiness affected by this dimension of your life?"},
      {id: "5", category: "Performance", question: "Is your job and/or school performance affected by this dimension of your life?"},

    ];


    this.answers = [

      {id: 1, value: "Strongly Disagree"},
      {id: 2, value: "Disagree"},
      {id: 3, value: "Somewhat Agree"},
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


}
