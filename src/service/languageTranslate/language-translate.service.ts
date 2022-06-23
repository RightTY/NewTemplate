import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageTranslateService {
  language$ = new ReplaySubject<LangChangeEvent>(1);
  translate = this.translateService;
  constructor(private translateService: TranslateService) {}

  setInitState() {
    // this.translateService.addLangs(['zh-cn', 'zh-tw']);
    // 根據使用者的瀏覽器語言設定，如果是中文就顯示中文，否則都顯示英文
    // 繁體/簡體中文代碼都是zh
    // const browserLang = (this.translate.getBrowserLang()!.includes('zh')) ? 'zh-tw' : 'zh-cn'  ;
    this.setLang('zh-cn');
  }

  setLang(lang: string) {
    // this.translateService.onLangChange.pipe(take(1)).subscribe(result => {
    //   this.language$.next(result);
    // });
    this.translateService.use(lang);
  }

  // SyncGet(key:string):string{
  //   let result:string='';
  //   this.translateService.onLangChange.subscribe((res:string)=>{
  //     result = this.translate.instant(key);
  //   })
  //   return result;
  // }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// export function HeaderTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/header', '.json');
// }
