import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemModel } from 'src/model/MenuItemModel';
import { TreeNodeModel } from 'src/model/TreeNodeModel';
import { HeaderBarService } from 'src/service/headerBar/header-bar.service';
import { LanguageTranslateService } from 'src/service/languageTranslate/language-translate.service';

@Component({
  selector: 'app-header',
  providers: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public headerBarItems: MenuItemModel[] = [];
  public languageTranslateItems: TreeNodeModel[] = [];

  public chooseLang: TreeNodeModel| undefined;
  constructor(
    private languageTranslateService: LanguageTranslateService,
    private headerBarService: HeaderBarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.Subscription();

    //預設headerBarItems資料
    if (sessionStorage.getItem('AP_Token') === null) {
      this.headerBarService.SetHeaderBarItems();
    }

    let languageTranslateItems = this.languageTranslateItems;
    let translate = this.languageTranslateService.translate;

    this.languageTranslateService.LangList.forEach(function (value) {
      languageTranslateItems.push(
        new TreeNodeModel(translate.instant(value), value)
      );
    });

    this.chooseLang = languageTranslateItems.filter(function (value) {
      return value.data === translate.currentLang;
    })[0];
  }

  ChangeLang(chooseLang: TreeNodeModel) {
    this.languageTranslateService.setLang(chooseLang.data);
  }

  Subscription() {
    //訂閱headerBarItems資料
    this.headerBarService.headerBarItems$.subscribe((headerBarItems) => {
      if (this.router.url.match('/manage')) {
      } else this.headerBarItems = headerBarItems;
    });
    //訂閱語系更改
    this.languageTranslateService.currtentLang$.subscribe(() => {
      this.headerBarService.SetHeaderBarItems();
    });
  }
}
