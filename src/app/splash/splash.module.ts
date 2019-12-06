import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SplashRoutingModule } from './splash-routing.module';
import {SplashComponent} from './splash.component';
import {MaterialModule} from '../material-module';

@NgModule({
  declarations: [
    SplashComponent
  ],
  imports: [
    SplashRoutingModule,
    MaterialModule
  ],
  providers: []
})
export class SplashModule { }
