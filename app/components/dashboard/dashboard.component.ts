import{ Component } from '@angular/core';
import {LoginComponent} from "../login.component";
import {UserService} from "../user.service";
import {SimpleChartComponent} from "../charts/simpleChart.component";
import {AppleChartComponent} from "../charts/appleChart.component";
import {BarChartComponent} from "../charts/barChart.component";

@Component({
  selector: 'dashboard',
  templateUrl: '/app/components/dashboard/dashboard.component.html',
  providers: [UserService],
  directives: [SimpleChartComponent, AppleChartComponent, BarChartComponent]
})
export class DashboardComponent {
}
