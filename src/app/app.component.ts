import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { JwtService } from 'src/service/jwt/jwt.service';
import { LanguageTranslateService } from 'src/service/languageTranslate/language-translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  private jwtService:JwtService;

  constructor(languageTranslateService: LanguageTranslateService,jwtService: JwtService) {
    languageTranslateService.setInitState();
    this.jwtService = jwtService;
    this.jwtService.tokenType="ap";
  }
}
