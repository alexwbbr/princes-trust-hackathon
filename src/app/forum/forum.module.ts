import { NgModule } from '@angular/core';
import { ForumRoutingModule } from './forum-routing.module';
import {MaterialModule} from '../material-module';
import {CommonModule} from '@angular/common';
import {ForumComponent} from './forum.component';

@NgModule({
  declarations: [
    ForumComponent
  ],
  imports: [
    ForumRoutingModule,
    MaterialModule,
    CommonModule
  ],
  providers: []
})
export class ForumModule { }
