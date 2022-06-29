import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sha256 } from 'js-sha256';
import { Iuser } from 'src/interface/Iuser';
import { DeviceModel } from 'src/model/DeviceModel';
import { LoginModel } from 'src/model/LoginModel';
import { lastValueFrom, Observable, of, tap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class LoginService implements Iuser {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  Login(
    loginModel: LoginModel,
    langType: string
  ) : Observable<CreateApTokenResponse>{
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
    let createApTokenRequest: CreateApTokenRequest = {
      corpno: loginModel.corpNo,
      biztype: loginModel.bizType,
      userid: loginModel.account,
      password: loginModel.password,
      logintime: loginTimeStamp,
      isweb: browser.IsWeb,
      expire: '43200',
    };

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
          observe: 'body'
        }
      )
      .pipe(
        catchError(this.handleError<CreateApTokenResponse>('test'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      this.log(`${operation} failed: ${error.error.desc}`);
      return of(error.error as T);
    };
  }

  private log(message: string) {
    this.messageService.add({
      detail: message,
      severity: 'error',
    });
  }

  hashStringJoin(arr: string[]): string {
    return arr.join(':');
  }
}

class CreateApTokenRequest {
  public corpno: string = '';
  public biztype: string = '';
  public userid: string = '';
  public password: string = '';
  public logintime: string = '';
  public isweb: boolean = false;
  public expire: string = '';
}

export class CreateApTokenResponse {
  public result: boolean = false;
  public message: string = '';
  public desc: string = '';
  public code: number = 400;
  public token: TokenData = new TokenData();
}

class TokenData {
  public Access: string = '';
  public AccessExpires: string = '';
}
function reruen(arg0: HttpResponse<CreateApTokenResponse>) {
  throw new Error('Function not implemented.');
}

