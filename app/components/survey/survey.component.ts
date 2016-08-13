import{Component} from '@angular/core';

@Component({
  templateUrl: '/app/components/survey/survey.component.html'
})
export class SurveyComponent {

  public data: any;

  constructor(){

    this.data = [

      {id:"1", question: "Do you feel a connection to a higher source and have a sense of comfort knowing that you are part of something greater than yourself?", category: "Spiritual"},
      {id:"2", question: "Do you feel you are free of unhealthy behavior that impacts your overall well-being?", category: "Habits"},
      {id:"3", question: "Do you feel you have healthy and fulfilling relationships?", category: "Relationships"},
      {id:"4", question: "Do you feel you have a sense of purpose and that you have a positive outlook about yourself and life?", category: "Emotional Wellbeing"},
      {id:"5", question: "Do you feel you have a healthy diet and that you are fueling your body for optimal health? ", category: "Eating Habits "},
      {id:"6", question: "Do you feel that you get enough rest and that your stress level is healthy?", category: "Relaxation "},
      {id:"7", question: "Do you feel you get enough physical activity for optimal health?", category: "Exercise "},
      {id:"8", question: "Do you feel you practice self-care and go to the doctor regularly?", category: "Medical Maintenance"},
      {id:"9", question: "Do you feel satisfied with your income and economic stability?", category: "Financial"},
      {id:"10", question: "Do you feel you do fun things and laugh enough in your life?", category: "Play"},
      {id:"11", question: "Do you feel you have a healthy sense of balance in this area of your life?", category: "Work-life Balance"},
      {id:"12", question: "Do you feel a sense of peace and contentment  in your home? ", category: "Home Environment"},
      {id:"13", question: "Do you feel that you are challenged and growing as a person?", category: "Intellectual Wellbeing"},
      {id:"14", question: "Do you feel content with what you see when you look in the mirror?", category: "Self-image"},
      {id:"15", question: "Do you feel engaged at work and a sense of fulfillment with your job?", category: "Work Satisfaction"}

    ]



  }


}
