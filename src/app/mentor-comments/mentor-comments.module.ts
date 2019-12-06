import { NgModule } from '@angular/core';
import { MentorCommentsRoutingModule } from './mentor-comments-routing.module';
import {MentorCommentsComponent} from './mentor-comments.component';
import {MaterialModule} from '../material-module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    MentorCommentsComponent
  ],
  imports: [
    MentorCommentsRoutingModule,
    MaterialModule,
    CommonModule
  ],
  providers: []
})
export class MentorCommentsModule { }
