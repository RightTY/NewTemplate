import { AfterContentInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { headerBarItem } from 'src/model/headerBar';
import { LanguageTranslateService } from 'src/service/languageTranslate/language-translate.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public items: MenuItem[] = [];

  private translate:TranslateService;
  constructor(private languageTranslateService:LanguageTranslateService) {
    this.translate=languageTranslateService.translate;    
  }

  
  ngOnInit(): void {
    let test:string = "";

    this.translate.get('enterpriseRegister').subscribe((res: string) => {
      console.log(res);
      this.items.push(
        new headerBarItem(res)
      )
      console.log(this.items);
    });
    console.log(this.items);
    console.log(this.translate.currentLang);
    console.log(1)
  }
}

