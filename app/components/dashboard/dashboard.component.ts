import{ Component , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {LoginComponent} from "../login/login.component";
import {SimpleChartComponent} from "../charts/simpleChart.component";
import {AppleChartComponent} from "../charts/appleChart.component";
import {BarChartComponent} from "../charts/barChart.component";
import {DonutChartComponent} from "../charts/donutChart.component";
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {ModalDemoComponent} from "../modals/modalDemoComponent";
import {NgInitHelperComponent} from "../helpers/nginit.helper.component";
import {ModalDirective} from "ng2-bootstrap/ng2-bootstrap";
import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {UserService} from "../user-service/user.service";
import {SurveyService} from "../survey/survey.service";


@Component({
  selector: 'dashboard',
  templateUrl: '/app/components/dashboard/dashboard.component.html',
  providers: [BS_VIEW_PROVIDERS],
  directives: [SimpleChartComponent, AppleChartComponent, BarChartComponent, DonutChartComponent, AlertComponent, ModalDemoComponent, NgInitHelperComponent, ModalDirective]
})
export class DashboardComponent  {

  public areas:any;

  constructor(public router: Router, public surveyService: SurveyService) {

    this.router = router;
    this.surveyService = surveyService;
    this.areas = this.surveyService.questions;

  }

  goToDimension(id){

      this.router.navigate(['/dimensions', id]);

  }
}
