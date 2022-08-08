import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from 'src/app/header/header.module';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentModule } from './content/content.module';
import { ContentRoutingModule } from './content/content-routing.module';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HeaderBarService } from 'src/service/headerBar/header-bar.service';
import { FooterModule } from './footer/footer.module';
import { ToastModule } from 'primeng/toast';
import { HttpService } from 'src/service/http/http.service';
import { MessageService } from 'src/service/message/message.service';
import { MessageService as PrimengMessageService } from 'primeng/api';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ContentRoutingModule,
    ToastModule,
    AppRoutingModule,
    HeaderModule,
    ContentModule,
    FooterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      },
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService],
      multi: true,
    },
    PrimengMessageService,
    MessageService,
    HttpService,
    HeaderBarService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function appInitializerFactory(translate: TranslateService) {
  return () => {
    return translate.use('zh-tw');
  };
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

export function jwtOptionsFactory(request: Request) {
  return {
    tokenGetter: (request: Request) => {
    if (request.url.includes('api')) {
        return sessionStorage.getItem('AP_Token');
      } else {
        return sessionStorage.getItem('Template_Token');
      }
    },
    allowedDomains: [''],
    disallowedRoutes: [
      '/assets/i18n/zh-tw.json',
      '/assets/i18n/zh-cn.json',
      '/api/public/Token/create_ap_token',
    ],
    authScheme: 'bearer ',
    throwNoTokenError: true,
  };
}
