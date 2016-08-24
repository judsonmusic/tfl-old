import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {SurveyService} from "../survey/survey.service";
import {Subscription} from 'rxjs/Subscription';
import {BarChartComponent} from "../charts/barChart.component";
import {UserService} from "../user-service/user.service";
import {OnCreateView} from "./oncreateview";

@Component({
  selector: 'my-hero-detail',
  templateUrl: '/app/components/dimensions/dimensions.component.html',
  directives: [BarChartComponent, OnCreateView]
})


export class DimensionsComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  private dimension: any;
  private seriesdata: any;
  private categories: any;
  private assessmentData: any;


  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private surveyService: SurveyService) {
  }

  ngOnInit() {
    //passing route param...
    this.sub = this.route.params.subscribe(params => {

      console.log('Dimension Comp', this.userService.userData);
      let id = +params['id']; // (+) converts string 'id' to a number
      this.dimension = this.surveyService.getDimension(id);
      this.userService.user$.subscribe((user) =>{
        this.assessmentData = user.assessment;
        this.buildData();
      });

      if(this.userService.userData) {
        this.assessmentData = this.userService.userData.assessment || [];
        this.buildData()
      }

    });

  }


  buildData() {

    this.seriesdata = this.surveyService.getSubsForDimension(this.assessmentData, this.dimension.id)[0].subs || [];

    let temp = [];
    this.surveyService.subquestions.map((x)=> {

      temp.push(x.category);

    });
    this.categories = temp;
    console.log('The categories are:', this.categories);


    let temp2 = [];
    //loop through sub questions and then get each map data to what they chose for each area.
    this.surveyService.subquestions.map((x, i)=> {
      //console.log('Row:', i, x);
      let visible = i == 0;
      temp2.push({name: x.category, data: [ this.assessmentData[this.dimension.id - 1].subs[i]], visible: true});

    });

    this.seriesdata = temp2;
    console.log('The series data is: ', this.seriesdata);

  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

