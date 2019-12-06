import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MentorCommentsComponent} from './mentor-comments.component';


const routes: Routes = [
  {
    path: '',
    component: MentorCommentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorCommentsRoutingModule { }
