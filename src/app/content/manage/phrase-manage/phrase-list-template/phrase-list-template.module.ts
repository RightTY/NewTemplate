import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhraseListTemplateComponent } from './phrase-list-template.component';



@NgModule({
  declarations: [PhraseListTemplateComponent],
  imports: [
    CommonModule
  ],
  exports:[PhraseListTemplateComponent]
})
export class PhraseListTemplateModule { }
