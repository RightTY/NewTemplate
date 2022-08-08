import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartPhraseComponent } from './depart-phrase.component';
import { PhraseListTemplateModule } from '../phrase-list-template/phrase-list-template.module';

@NgModule({
  declarations: [DepartPhraseComponent],
  imports: [CommonModule,PhraseListTemplateModule],
})
export class DepartPhraseModule {}
