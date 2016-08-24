/**
 * Created by jterrell on 8/23/16.
 */
import {Directive, Input, OnInit, ElementRef} from '@angular/core';
import {SurveyService} from "../survey/survey.service";

@Directive({
  selector: '[onCreateView]'
})
export class OnCreateView implements OnInit{
  @Input() onCreateView:any;


  constructor(public el: ElementRef, public surveyService: SurveyService){

    this.el = el;
    this.surveyService = surveyService;

  }
  ngOnInit() {

    this.surveyService.getHtmlForDimension(this.onCreateView).subscribe((html) =>{

      this.el.nativeElement.innerHTML = html;

    });
  }
}
