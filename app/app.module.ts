import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { AboutComponent }  from './components/about.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    AboutComponent
  ],
  providers: [
    //HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
