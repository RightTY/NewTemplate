import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './content/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./content/content.module').then(
        (m) => m.ContentModule
      )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
