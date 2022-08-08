import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WellcomeComponent } from './wellcome.component';

const WellcomeRoutes: Routes = [
  { path: '', component: WellcomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(WellcomeRoutes)],
  exports: [RouterModule],
})
export class WellcomeRoutingModule {}
