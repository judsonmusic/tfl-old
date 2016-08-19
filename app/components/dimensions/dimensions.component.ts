import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {SurveyService} from "../survey/survey.service";
import {Subscription} from 'rxjs/Subscription';
import {BarChartComponent} from "../charts/barChart.component";
import {UserService} from "../user-service/user.service";

@Component({
  selector: 'my-hero-detail',
  templateUrl: '/app/components/dimensions/dimensions.component.html',
  directives: [BarChartComponent]
})


export class DimensionsComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  private dimension: any;
  private seriesData: any;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private surveyService: SurveyService) {
  }

  ngOnInit() {



    this.userService.user$.subscribe((userData) => {

      this.seriesData = this.surveyService.getSubsForDimension(userData.assessment, this.dimension.id)[0].subs;
      //console.log('SERIES DATA::::::::::', this.seriesData);

    });


    this.sub = this.route.params.subscribe(params => {

      let id = +params['id']; // (+) converts string 'id' to a number
      this.dimension = this.surveyService.getDimension(id);
      if (this.userService.userData) {
        this.seriesData = this.surveyService.getSubsForDimension(this.userService.userData.assessment, this.dimension.id)[0].subs || null;
      }

    });




  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

