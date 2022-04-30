import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Renderer2ComponentComponent } from './renderer2-component/renderer2-component.component';

const routes: Routes = [
  { path: '', component: Renderer2ComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Renderer2RoutingModule { }
