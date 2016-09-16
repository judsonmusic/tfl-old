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
import {AssessmentService} from "../assessment/assessment.service";
import {OnCreate} from "../directives/oncreate.directive";
import {UserService} from "../user-service/user.service";
import {ModalHelpComponent} from "../modals/modalHelpComponent";
import {MyFilterPipe} from "../pipes/filter.pipe";
import {ModalYourResultsComponent} from "../modals/modalYourResultsComponent";
import {ModalDataJunkieComponent} from "../modals/modalDataJunkieComponent";
import {ModalTFLGuideComponent} from "../modals/modalTFLGuideComponent";
import {ModalSurveyComponent} from "../modals/modalSurveyComponent";
import {MotivatedFilterPipe} from "../pipes/motivated.pipe";


@Component({
  selector: 'dashboard',
  templateUrl: '/app/components/dashboard/dashboard.component.html',
  providers: [BS_VIEW_PROVIDERS],
  pipes: [MyFilterPipe, MotivatedFilterPipe],
  directives: [SimpleChartComponent, AppleChartComponent, BarChartComponent, DonutChartComponent, AlertComponent, ModalDemoComponent, ModalHelpComponent, ModalSurveyComponent, NgInitHelperComponent, ModalDirective, OnCreate, ModalYourResultsComponent, ModalDataJunkieComponent, TooltipDirective, ModalTFLGuideComponent]
})
export class DashboardComponent implements OnInit {



  public areas:any;
  public assessmentData: any[];
  public categories: any;
  public seriesdata: any;
  public dataCheckPassed: boolean;
  public motivatedAreas: any;

  constructor(public router: Router, public assessmentService: AssessmentService, public userService: UserService) {

    console.log('Dashboard ts loaded.!');

    this.router = router;
    this.assessmentService = assessmentService;
    this.areas = this.assessmentService.questions;
    this.assessmentData = [];
    this.userService = userService;
    this.dataCheckPassed = false;
    this.motivatedAreas = [];

  }

  public surveyComplete = false;

  public checkComplete(){

    this.userService.userData.survey.map((item, index)=> {

      if(item.answer == ""){
        //console.log('Answer Not complete!');
        this.surveyComplete = false;

      }else{
        //console.log('Answer complete!');
        this.surveyComplete = true;
      }

    });

    if(this.surveyComplete){

      console.log('The survey is complete. Lets update the account', this.userService.userData);

      this.userService.updateAccount(this.userService.userData).subscribe((user)=>{

        console.log('Account updated with survey data!', user);

      })
    }
  }

  ngOnInit(){

    this.checkComplete();

    //if I already have data from login, simply load it.
    this.assessmentData = this.userService.userData.assessment || [];


    let temp = [];
    this.assessmentService.questions.map((x)=> {

      temp.push({id: x.id, category: x.category});

    });

    this.categories = temp;

    console.log('Categories: ', temp);

    this.buildSeries();


  }

  buildSeries(){


    let temp2 = [];
    //loop through sub questions and then get each map data to what they chose for each area.
    this.assessmentService.subquestions.map((x, i)=> {
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


    //at this point we have series data and we have categories...
    this.assessmentData.map((x, i)=> {
      //if you are not satisfied but motivated
      //console.log('Satisfied:', x.subs[3], 'Motivated', x.subs[5]);
      if(x.subs[3] < 80 && x.subs[5] > 60) {
       this.motivatedAreas.push(x)
      }
    });

    console.log('Motivated Areas', this.motivatedAreas);

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
