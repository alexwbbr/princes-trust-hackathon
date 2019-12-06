import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ForumPostComponent} from './forum-post.component';


const routes: Routes = [
  {
    path: '',
    component: ForumPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumPostRoutingModule { }
