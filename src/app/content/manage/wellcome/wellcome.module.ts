import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WellcomeComponent } from './wellcome.component';
import { WellcomeRoutingModule } from './wellcome-routing.module';

@NgModule({
  declarations: [
    WellcomeComponent
  ],
  imports: [
    CommonModule,
    WellcomeRoutingModule
  ],
  exports:[],
  schemas:[]
})
export class WellcomeModule { }