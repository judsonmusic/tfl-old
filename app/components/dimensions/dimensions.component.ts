import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {SurveyService} from "../survey/survey.service";
import {Subscription} from 'rxjs/Subscription';
import {BarChartComponent} from "../charts/barChart.component";
import {UserService} from "../user-service/user.service";
import {OnCreateView} from "./oncreateview";
import {MyFilterPipe} from "../pipes/filter.pipe";

@Component({
  selector: 'my-hero-detail',
  templateUrl: '/app/components/dimensions/dimensions.component.html',
  directives: [BarChartComponent, OnCreateView],
  pipes: [MyFilterPipe]
})


export class DimensionsComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  private dimension: any;
  private seriesdata: any;
  private categories: any;
  private assessmentData: any;
  private answers: any;
  private answerData: any;
  private subquestions: any;
  public data:any;
  public answerConfirmed:boolean;


  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private surveyService: SurveyService) {

    this.subquestions = this.surveyService.subquestions;
    this.data = {};
    this.data.account = {};
    this.answerConfirmed = false;
    this.categories = [];
  }

  ngOnInit() {

    this.data.account = this.userService.userData || this.data.account;
    //console.log('@@@@@SURVEY INIT!', this.data.account);
    this.userService.user$.subscribe((userData) => {

      this.data.account = userData;
      //console.log('ACCOUNT INFORMATION ADDED!', this.data.account);

    });

    this.answers = this.surveyService.answers;
    //passing route param...
    this.sub = this.route.params.subscribe(params => {

      //console.log('Dimension Comp', this.userService.userData);
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

    console.log('Building data.');

    this.answerData = this.surveyService.getAnwerForQuestion(this.assessmentData, this.dimension.id)[0] || [];
    this.answerConfirmed = (this.answerData.subs.length == this.subquestions.length) && this.answerData.subs.indexOf('null') == -1 && this.answerData.subs.indexOf('') == -1;
    this.seriesdata = this.surveyService.getSubsForDimension(this.assessmentData, this.dimension.id)[0].subs || [];

    console.log('THE DIMENSION IS: ' , this.dimension.category);
    this.categories.push({id: this.dimension.id, category: this.dimension.category});



    let temp2 = [];
    //loop through sub questions and then get each map data to what they chose for each area.
    this.surveyService.subquestions.map((x, i)=> {
      //console.log('Row:', i, x);
      let visible = i == 0;
      temp2.push({name: x.category, data: [ this.assessmentData[this.dimension.id - 1].subs[i]], visible: true, color: x.color});

    });

    this.seriesdata = temp2;
    console.log('The series data is: ', this.seriesdata);

  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  save(){

    //console.log('Saving Your Data!', this.data.account);
    //we need to add the assessment data to the account so it will get stored in use data;
    this.userService.updateAccount(this.data.account).subscribe((res) => {
      //console.log('The result of the update is: ', this.data.account.assessment);
      this.buildData();
      this.answerConfirmed = true;


    }, (err) => console.log('There was an error!'));



  }
}

