import { NgModule } from '@angular/core';
import { ForumPostRoutingModule } from './forum-post-routing.module';
import {MaterialModule} from '../material-module';
import {CommonModule} from '@angular/common';
import {ForumPostComponent} from './forum-post.component';

@NgModule({
  declarations: [
    ForumPostComponent
  ],
  imports: [
    ForumPostRoutingModule,
    MaterialModule,
    CommonModule
  ],
  providers: []
})
export class ForumPostModule { }
