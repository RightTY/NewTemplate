import { Component, OnInit } from '@angular/core';
import { HeaderBarService } from 'src/service/headerBar/header-bar.service';
import { LanguageTranslateService } from 'src/service/languageTranslate/language-translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private languageTranslateService: LanguageTranslateService,
    private headerBarService: HeaderBarService
  ) {}
  ngOnInit(): void {
  }
}
