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
import {AssessmentService} from "../assessment/assessment.service";
import {OnCreate} from "../directives/oncreate.directive";
import {UserService} from "../user-service/user.service";
import {ModalHelpComponent} from "../modals/modalHelpComponent";
import {ModalHelpAppleComponent} from "../modals/modalHelpAppleComponent";


@Component({
  selector: 'action',
  templateUrl: '/app/components/tfl-guide/tfl-guide.component.html',
  providers: [BS_VIEW_PROVIDERS],
  directives: [SimpleChartComponent, AppleChartComponent, BarChartComponent, DonutChartComponent, AlertComponent, ModalDemoComponent, ModalHelpComponent, ModalHelpAppleComponent, NgInitHelperComponent, ModalDirective, OnCreate]
})
export class TflGuideComponent implements OnInit {

  public areas:any;
  public assessmentData: any[];
  public categories: any;

  constructor(public router: Router, public assessmentService: AssessmentService, public userService: UserService) {

    this.router = router;
    this.assessmentService = assessmentService;
    this.areas = this.assessmentService.questions;
    this.assessmentData = [];
    this.userService = userService;
  }


  ngOnInit() {




  }

}
