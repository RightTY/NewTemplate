import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { IHeaderBar } from 'src/interface/IHeaderBar';
import { MenuItemModel } from 'src/model/MenuItemModel';
import { LanguageTranslateService } from '../languageTranslate/language-translate.service';

@Injectable({
  providedIn: 'root',
})

export class HeaderBarService implements IHeaderBar{
  private headerBarItems: Subject<MenuItemModel[]> = new Subject<MenuItemModel[]>();
  public headerBarItems$: Observable<MenuItemModel[]> = this.headerBarItems.asObservable();
  private translate: TranslateService;

  constructor(languageTranslateService: LanguageTranslateService) {
    this.translate = languageTranslateService.translate;
  }
 
  public SetHeaderBarItems() {
    this.headerBarItems.next([
      new MenuItemModel(this.translate.instant('enterpriseRegister')),
      new MenuItemModel(this.translate.instant('userRegister'))
    ]);
  }

  public SetManageHeaderBarItems(){
    this.headerBarItems.next([
    ]);
  }
}
