import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalPhraseComponent } from './personal-phrase.component';
import { PhraseListTemplateModule } from '../phrase-list-template/phrase-list-template.module';


@NgModule({
  declarations: [PersonalPhraseComponent],
  imports: [CommonModule,PhraseListTemplateModule],
})
export class PersonalPhraseModule {}
