import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { ContentGuard } from './content.guard';
import { LoginComponent } from './login/login.component';
import { PhraseManageComponent } from './manage/phrase-manage/phrase-manage.component';

const ContentRoutes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'manage',
    canActivate: [ContentGuard],
    component: ContentComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'wellcome',
      },
      {
        path: 'wellcome',
        loadChildren: () =>
          import('./manage/wellcome/wellcome.module').then(
            (m) => m.WellcomeModule
          ),
      },
      {
        path: 'template',
        loadChildren: () =>
          import('./manage/template/template.module').then(
            (m) => m.TemplateModule
          ),
      },
      {
        path: 'docManage',
        loadChildren: () =>
          import('./manage/doc-manage/doc-manage.module').then(
            (m) => m.DocManageModule
          ),
      },
      {
        path: 'phraseManage',
        component : PhraseManageComponent,
        loadChildren: () =>
          import('./manage/phrase-manage/phrase-manage.module').then(
            (m) => m.PhraseManageModule
          ),
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(ContentRoutes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
