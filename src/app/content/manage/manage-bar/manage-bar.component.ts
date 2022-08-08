import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { MenuItemModel } from 'src/model/MenuItemModel';
import { LanguageTranslateService } from 'src/service/languageTranslate/language-translate.service';

@Component({
  selector: 'app-manage-bar',
  templateUrl: './manage-bar.component.html',
  styleUrls: ['./manage-bar.component.scss'],
})
export class ManageBarComponent implements OnInit {
  public manageBarItems: MenuItem[] = [];

  constructor(private languageTranslateService: LanguageTranslateService) {}

  ngOnInit(): void {
    this.Subscription();
    this.SetManageBarItems();
  }

  Subscription() {
    //訂閱語系更改
    this.languageTranslateService.currtentLang$.subscribe(() => {
      this.SetManageBarItems();
    });
  }

  SetManageBarItems() {
    this.manageBarItems = [];
    let phraseManageBarItems: MenuItemModel[] = [];
    phraseManageBarItems.push(
      new MenuItemModel(
        this.languageTranslateService.translate.instant('departPhrase'),
        ['phraseManage','departPhrase']
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('personalPhrase'),
        ['phraseManage','personalPhrase']
      )
    );
    this.manageBarItems.push(
      new MenuItemModel(
        this.languageTranslateService.translate.instant('manageTemp'),
        ['template']
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('createDoc'),
        ['wellcome']
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('manageDoc'),
        ['docManage']
      ),
      new MenuItemModel(
        this.languageTranslateService.translate.instant('managePhrase'),
        undefined,
        undefined,
        phraseManageBarItems
      )
    );
  }
}
