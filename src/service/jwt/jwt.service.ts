import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from 'src/module/shared/shared.module';


@Injectable({
  providedIn: 'root'
})

export class JwtService {
  public tokenType!: String;
  constructor(private httpClient: HttpClient) { }
}

export function jwtOptionsFactory(jwtService :JwtService){
  return {
    tokenGetter: () => {
      switch (jwtService.tokenType) {
        case "ap":
          return  localStorage.getItem("ap_token");
        case "template":
          return  localStorage.getItem("template_token");
        default:
          return  "";
      }
    }
  }
}
