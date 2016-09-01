import{ Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {SimpleChartComponent} from "../charts/simpleChart.component";
import {AppleChartComponent} from "../charts/appleChart.component";
import {BarChartComponent} from "../charts/barChart.component";
import {DonutChartComponent} from "../charts/donutChart.component";
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {ModalDemoComponent} from "../modals/modalDemoComponent";
import {NgInitHelperComponent} from "../helpers/nginit.helper.component";
import {ModalDirective} from "ng2-bootstrap/ng2-bootstrap";
import {BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {SurveyService} from "../survey/survey.service";
import {OnCreate} from "../directives/oncreate.directive";
import {UserService} from "../user-service/user.service";
import {ModalHelpComponent} from "../modals/modalHelpComponent";
import {ModalHelpAppleComponent} from "../modals/modalHelpAppleComponent";


@Component({
  selector: 'action',
  templateUrl: '/app/components/action/action.component.html',
  providers: [BS_VIEW_PROVIDERS],
  directives: [SimpleChartComponent, AppleChartComponent, BarChartComponent, DonutChartComponent, AlertComponent, ModalDemoComponent, ModalHelpComponent, ModalHelpAppleComponent, NgInitHelperComponent, ModalDirective, OnCreate]
})
export class ActionComponent implements OnInit {

  public areas:any;
  public assessmentData: any[];
  public categories: any;
  public seriesdata: any;

  constructor(public router: Router, public surveyService: SurveyService, public userService: UserService) {

    this.router = router;
    this.surveyService = surveyService;
    this.areas = this.surveyService.questions;
    this.assessmentData = [];
    this.userService = userService;
  }

  makeSubs(){

    let temp = [];
    this.surveyService.questions.map((x)=> {

      temp.push(x.category);

    });
    this.categories = temp;
    //console.log('Categories: ', temp);

    let colors = [
      "#002494",
      "#bc0015",
      "#039f71",
      "#e5d500",
      "#eb6b00",
      "#3082e1"
    ];


    let temp2 = [];
    //loop through sub questions and then get each map data to what they chose for each area.
    this.surveyService.subquestions.map((x, i)=> {
      console.log('Row:', i, x);
      let visible = i == 0;
      temp2.push({name: x.category, data:[], visible: visible, color: x.color});

    });


    this.assessmentData.map((x, y) =>{
      //for each area on the series, we need to set what they selected from each area. 5 total. For example spiriitual.
      temp2.map((z, index)=>{
        //in each of the 5 things, get the values by index.
        //console.log('The index of data we are pushing to:', index);
        z.data.push(x.subs[index]);
      });

    });


    this.seriesdata = temp2;
    //console.log('Series Data: ', temp2);



  }
  ngOnInit() {



    if(this.userService.userData) {

      this.assessmentData = this.userService.userData.assessment || [];
      this.makeSubs();

    }else{

      this.userService.user$.subscribe((userData) =>{

        this.assessmentData = userData.assessment || [];
        this.makeSubs();

      });


    }
   // console.log('ACTION: ', this.assessmentData);




  }


  goToDimension(id){

      this.router.navigate(['/dimensions', id]);

  }
}
