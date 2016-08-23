/**
 * Created by jterrell on 8/23/16.
 */
import {Directive, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[onCreateView]'
})
export class OnCreateView implements OnInit{
  @Input() onCreateView:Function;
  ngOnInit() {
    console.log('Directive Initialized. The value is: ', this.onCreateView);
  }
}
