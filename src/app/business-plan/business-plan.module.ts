import { NgModule } from '@angular/core';
import { BusinessPlanRoutingModule } from './business-plan-routing.module';
import {BusinessPlanComponent} from './business-plan.component';
import {MaterialModule} from '../material-module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    BusinessPlanComponent
  ],
  imports: [
    BusinessPlanRoutingModule,
    MaterialModule,
    CommonModule
  ],
  providers: []
})
export class BusinessPlanModule { }
