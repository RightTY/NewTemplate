import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Injectable({
  providedIn: 'root'
})
export class LanguageTranslateService {
  constructor() { }
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

