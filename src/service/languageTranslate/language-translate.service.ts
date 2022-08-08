import { HttpClient, HttpEventType } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ReplaySubject, Subject } from 'rxjs';
import { lastValueFrom, Observable, tap } from 'rxjs';
import { TS } from 'typescript-linq';

@Injectable({
  providedIn: 'root',
})
export class LanguageTranslateService {
  public LangList: string[] = ['zh-tw', 'zh-cn'];

  private currtentLang: Subject<string> = new Subject<string>();
  public currtentLang$: Observable<string> = this.currtentLang.asObservable();

  public language$ = new ReplaySubject<LangChangeEvent>(1);
  public translate = this.translateService;
  constructor(
    private translateService: TranslateService
  ) {}

  setLang(lang: string) {
    this.translate.use(lang).subscribe(() => {
      this.currtentLang.next(lang);
    });
  }
}


// export function HeaderTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/header', '.json');
// }
