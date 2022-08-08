import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sha256 } from 'js-sha256';
import {
  CreateApTokenRequest,
  CreateApTokenResponse,
  IUser,
  LoginModel,
} from 'src/interface/IUser';
import { DeviceModel } from 'src/model/DeviceModel';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService implements IUser {
  constructor(private http: HttpClient, private httpService: HttpService) {}

  Login(
    loginModel: LoginModel,
    langType: string
  ): Observable<CreateApTokenResponse> {
    let loginTimeStamp = Math.floor(new Date().getTime() / 1000).toString();
    let hashStringArr: string[] = [
      loginModel.corpNo,
      loginModel.bizType,
      loginModel.account,
      loginTimeStamp,
      loginModel.password,
    ];

    let hash = sha256(this.hashStringJoin(hashStringArr));
    let expire = new Date();
    expire.setSeconds(expire.getSeconds() + 43200);
    let browser = new DeviceModel();
    let createApTokenRequest: CreateApTokenRequest = new CreateApTokenRequest(
      loginModel.corpNo,
      loginModel.bizType,
      loginModel.account,
      loginModel.password,
      loginTimeStamp,
      browser.IsWeb,
      '43200'
    );

    let headers = new HttpHeaders({
      'Accept-Language': langType,
      Authorization: 'basic ' + hash,
    });

    return this.http
      .post<CreateApTokenResponse>(
        '/api/public/Token/create_ap_token',
        createApTokenRequest,
        {
          headers: headers,
          observe: 'body',
        }
      )
      .pipe(catchError(this.httpService.HandleError<CreateApTokenResponse>()));
  }

  hashStringJoin(arr: string[]): string {
    return arr.join(':');
  }
}
