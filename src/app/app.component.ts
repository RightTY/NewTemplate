import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { JwtService } from 'src/service/jwt/jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  private translate:TranslateService;
  private jwtService:JwtService;
  constructor(translate: TranslateService,jwtService: JwtService) {
    this.translate = translate;
    this.jwtService = jwtService;
    this.jwtService.tokenType="ap";
  }
  ngOnInit(): void {
    this.translate.use("zh-cn");
  }
}
