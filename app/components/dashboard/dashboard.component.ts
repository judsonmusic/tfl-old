import{ Component } from '@angular/core';
import {LoginComponent} from "../login.component";
import {UserService} from "../user.service";
import {SimpleChartComponent} from "../charts/simpleChart.component";
import {AppleChartComponent} from "../charts/appleChart.component";
import {BarChartComponent} from "../charts/barChart.component";
import {DonutChartComponent} from "../charts/donutChart.component";
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';
import {ModalDemoComponent} from "../modals/modalDemoComponent";
import {NgInitHelperComponent} from "../helpers/nginit.helper.component";


@Component({
  selector: 'dashboard',
  templateUrl: '/app/components/dashboard/dashboard.component.html',
  providers: [UserService],
  directives: [SimpleChartComponent, AppleChartComponent, BarChartComponent, DonutChartComponent, AlertComponent, ModalDemoComponent, NgInitHelperComponent]
})
export class DashboardComponent {

  public areas: any;

  constructor(){

    this.areas = [

      "Spiritual",
      "Habits",
      "Relationships",
      "Emotional",
      "Eating Habits",
      "Relaxation",
      "Exercise",
      "Medical",
      "Financial",
      "Play",
      "Work/ Life Balance",
      "Home Environment",
      "Intellectual Well-being",
      "Self Image",
      "Work Satisfaction"
    ]

  }
}
