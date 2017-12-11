import { SlideComponent } from './components/slider/slide/slide.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
		AppComponent,
		SliderComponent,
		SlideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
