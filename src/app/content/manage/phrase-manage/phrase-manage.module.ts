import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhraseManageRoutingModule } from './phrase-manage-routing.module';
import { PhraseManageComponent } from './phrase-manage.component';
import { PhraseListTemplateModule } from './phrase-list-template/phrase-list-template.module';


@NgModule({
  declarations: [
    PhraseManageComponent
  ],
  imports: [
    CommonModule,
    PhraseManageRoutingModule
  ]
})
export class PhraseManageModule { }
