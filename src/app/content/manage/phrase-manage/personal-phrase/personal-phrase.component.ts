import { Compiler, Component, NgModuleFactory, OnInit } from '@angular/core';
import { PhraseListTemplateComponent } from '../phrase-list-template/phrase-list-template.component';
import { PhraseListTemplateModule } from '../phrase-list-template/phrase-list-template.module';

@Component({
  selector: 'app-personal-phrase',
  templateUrl: './personal-phrase.component.html',
  styleUrls: ['./personal-phrase.component.scss']
})
export class PersonalPhraseComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    
  }
}
