import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {SurveyService} from "../survey/survey.service";
import { Subscription } from 'rxjs/Subscription';
import {BarChartComponent} from "../charts/barChart.component";
import {UserService} from "../user-service/user.service";

@Component({
  selector: 'my-hero-detail',
  templateUrl: '/app/components/dimensions/dimensions.component.html',
  directives: [BarChartComponent]
})


export class DimensionsComponent implements OnInit, OnDestroy  {


  private sub: Subscription;
  private dimension:any;
  private seriesData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private surveyService: SurveyService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.dimension = this.surveyService.getDimension(id);
      console.log('The assessment data loaded into the dimension comp: ' , this.userService.userData.assessment);
      this.seriesData = [1, 2, 3, 4, 5];//this.surveyService.getSubsForDimension(this.userService.userData.assessment, this.dimension.id)[0].subs;
      console.log('@@@: ', this.seriesData);
      console.log('The loaded dimension is: ', this.dimension);
    });


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

