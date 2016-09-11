/**
 * Created by jterrell on 8/23/16.
 */
import {Directive, Input, OnInit, ElementRef} from '@angular/core';
import {AssessmentService} from "../assessment/assessment.service";

@Directive({
  selector: '[onCreateView]'
})
export class OnCreateView implements OnInit{
  @Input() onCreateView:any;


  constructor(public el: ElementRef, public assessmentService: AssessmentService){

    this.el = el;
    this.assessmentService = assessmentService;

  }
  ngOnInit() {

    this.assessmentService.getHtmlForDimension(this.onCreateView).subscribe((html) =>{

      this.el.nativeElement.innerHTML = html;

    });
  }
}
