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


@Component({
  selector: 'dashboard',
  templateUrl: '/app/components/dashboard/dashboard.component.html',
  providers: [BS_VIEW_PROVIDERS],
  directives: [SimpleChartComponent, AppleChartComponent, BarChartComponent, DonutChartComponent, AlertComponent, ModalDemoComponent, NgInitHelperComponent, ModalDirective, OnCreate]
})
export class DashboardComponent implements OnInit {

  public areas:any;
  public assessmentData: any[];

  constructor(public router: Router, public surveyService: SurveyService, public userService: UserService) {

    this.router = router;
    this.surveyService = surveyService;
    this.areas = this.surveyService.questions;
    this.assessmentData = [];
    this.userService = userService;


  }

  ngOnInit(){

    //console.log('Dashboard Component Init!');
    // this.userService.user$.subscribe((userData) => {
    //
    //   this.assessmentData = userData.assessment;
    //   //console.log('SERIES DATA::::::::::', this.assessmentData);
    //
    // });

    this.assessmentData = this.userService.userData.assessment || [];

  }

  goToDimension(id){

      this.router.navigate(['/dimensions', id]);

  }


  getSeriesData(i){

    console.log('Getting series data', i);
    return [1,2,3,4,5];
  }
}
