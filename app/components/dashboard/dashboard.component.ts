import{ Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {SimpleChartComponent} from "../charts/simpleChart.component";
import {AppleChartComponent} from "../charts/appleChart.component";
import {BarChartComponent} from "../charts/barChart.component";
import {DonutChartComponent} from "../charts/donutChart.component";
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {ModalDemoComponent} from "../modals/modalDemoComponent";
import {NgInitHelperComponent} from "../helpers/nginit.helper.component";
import {ModalDirective, TooltipDirective} from "ng2-bootstrap/ng2-bootstrap";
import {BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {SurveyService} from "../survey/survey.service";
import {OnCreate} from "../directives/oncreate.directive";
import {UserService} from "../user-service/user.service";
import {ModalHelpComponent} from "../modals/modalHelpComponent";
import {MyFilterPipe} from "../pipes/filter.pipe";
import {ModalYourResultsComponent} from "../modals/modalYourResultsComponent";
import {ModalDataJunkieComponent} from "../modals/modalDataJunkieComponent";
import {ModalTFLGuideComponent} from "../modals/modalTFLGuideComponent";


@Component({
  selector: 'dashboard',
  templateUrl: '/app/components/dashboard/dashboard.component.html',
  providers: [BS_VIEW_PROVIDERS],
  pipes: [MyFilterPipe],
  directives: [SimpleChartComponent, AppleChartComponent, BarChartComponent, DonutChartComponent, AlertComponent, ModalDemoComponent, ModalHelpComponent, NgInitHelperComponent, ModalDirective, OnCreate, ModalYourResultsComponent, ModalDataJunkieComponent, TooltipDirective, ModalTFLGuideComponent]
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

  ngOnInit(){

    //if I already have data from login, simply load it.
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
    //console.log(this.seriesdata);
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
