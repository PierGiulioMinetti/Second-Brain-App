import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Renderer2RoutingModule } from './renderer2-routing.module';
import { Renderer2ComponentComponent } from './renderer2-component/renderer2-component.component';


@NgModule({
  declarations: [
    Renderer2ComponentComponent
  ],
  imports: [
    CommonModule,
    Renderer2RoutingModule
  ]
})
export class Renderer2Module { }
