import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewChildRoutingModule } from './view-child-routing.module';
import { ViewChildComponent } from './view-child/view-child.component';


@NgModule({
  declarations: [
    ViewChildComponent
  ],
  imports: [
    CommonModule,
    ViewChildRoutingModule
  ]
})
export class ViewChildModule { }
