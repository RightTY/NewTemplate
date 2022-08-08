import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocManageComponent } from './doc-manage.component';

const DocManageRoutes: Routes = [
  { path: '', component: DocManageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(DocManageRoutes)],
  exports: [RouterModule],
})
export class DocManageRoutingModule {}
