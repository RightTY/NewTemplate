import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { jwtOptionsFactory, JwtService } from 'src/service/jwt/jwt.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
       jwtOptionsProvider:{
         provide:JWT_OPTIONS,
         useFactory:jwtOptionsFactory,
         deps:[JwtService]
       }
     })
  ],
  exports:[
    TranslateModule,
    JwtModule
  ]
})
export class SharedModule { }