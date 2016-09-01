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
import {MyFilterPipe} from "../pipes/filter.pipe";
import {ModalYourResultsComponent} from "../modals/modalYourResultsComponent";
import {ModalDataJunkieComponent} from "../modals/modalDataJunkieComponent";


@Component({
  selector: 'dashboard',
  templateUrl: '/app/components/dashboard/dashboard.component.html',
  providers: [BS_VIEW_PROVIDERS],
  pipes: [MyFilterPipe],
  directives: [SimpleChartComponent, AppleChartComponent, BarChartComponent, DonutChartComponent, AlertComponent, ModalDemoComponent, ModalHelpComponent, NgInitHelperComponent, ModalDirective, OnCreate, ModalYourResultsComponent, ModalDataJunkieComponent]
})
export class DashboardComponent implements OnInit {

  public areas:any;
  public assessmentData: any[];
  public categories: any;
  public seriesdata: any;
  public dataCheckPassed: boolean;

  constructor(public router: Router, public surveyService: SurveyService, public userService: UserService) {

    this.router = router;
    this.surveyService = surveyService;
    this.areas = this.surveyService.questions;
    this.assessmentData = [];
    this.userService = userService;
    this.dataCheckPassed = false;
  }

  /**
   * series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
   */

  ngOnInit(){

    this.assessmentData = this.userService.userData.assessment || [];

    let temp = [];
    this.surveyService.questions.map((x)=> {

      temp.push({id: x.id, category: x.category});

    });
    this.categories = temp;
    //console.log('Categories: ', temp);

    this.buildSeries();
    //console.log('Series Data: ', temp2);

  }

  buildSeries(){


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
      //console.log('Row:', i, x);
      let visible = i == 0;
      temp2.push({name: x.category, data:[], visible: visible, color: x.color});

    });

    this.dataCheckPassed = true;
    this.assessmentData.map((x) =>{

      if(x.answer == ""){

        this.dataCheckPassed = false;

      }else {

        //for each area on the series, we need to set what they selected from each area. 5 total. For example spiriitual.
        temp2.map((z, index)=> {
          //in each of the 5 things, get the values by index.
          //console.log('The index of data we are pushing to:', z);
          z.data.push(x.subs[index]);

        });



      }


    });


    this.seriesdata = temp2;
    console.log(this.seriesdata);
  }

  goToDimension(id){

      this.router.navigate(['/dimensions', id]);

  }

  takeAction(id){

    this.router.navigate(['/action']);

  }

  checkIfAnswered(id){

    // this.assessmentData.map((item) =>{
    //
    //   console.log(item.id == id);
    //
    //
    // });


  }
}
