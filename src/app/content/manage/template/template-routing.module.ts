import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template.component';

const TemplateRoutes: Routes = [
  { path: '', component: TemplateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(TemplateRoutes)],
  exports: [RouterModule],
})
export class TemplateRoutingModule {}
