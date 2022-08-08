import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartPhraseComponent } from './departPhrase/depart-phrase.component';
import { PersonalPhraseComponent } from './personal-phrase/personal-phrase.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo:'personalPhrase'
  },
  {
    path: 'departPhrase',
    component: DepartPhraseComponent,
    loadChildren: () =>
      import('./departPhrase/depart-phrase.module').then(
        (m) => m.DepartPhraseModule
      ),
  },
  {
    path: 'personalPhrase',
    component: PersonalPhraseComponent,
    loadChildren: () =>
      import('./personal-phrase/personal-phrase.module').then(
        (m) => m.PersonalPhraseModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhraseManageRoutingModule {}
