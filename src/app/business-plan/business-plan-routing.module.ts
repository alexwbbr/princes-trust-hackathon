import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusinessPlanComponent} from './business-plan.component';


const routes: Routes = [
  {
    path: '',
    component: BusinessPlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessPlanRoutingModule { }
