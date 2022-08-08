import { Observable } from 'rxjs';
import { Response } from '../model/Response';

export interface IUser {
  // label: string;
  Login: (
    loginModel: LoginModel,
    langType: string
  ) => Observable<CreateApTokenResponse>;
  // Logout: ()=>String;
}

export class CreateApTokenRequest {
  public corpno: string ;
  public biztype: string ;
  public userid: string ;
  public password: string ;
  public logintime: string ;
  public isweb: boolean;
  public expire: string;
  constructor(
    corpno: string,
    biztype: string,
    userid: string,
    password: string,
    logintime: string,
    isweb: boolean,
    expire: string
  ) {
    this.corpno = corpno;
    this.biztype = biztype;
    this.userid = userid;
    this.password = password;
    this.logintime = logintime;
    this.isweb = isweb;
    this.expire = expire;
  }
}

export class CreateApTokenResponse extends Response {
  public token: TokenData = new TokenData();
}

export class TokenData {
  public Access: string = '';
  public AccessExpires: string = '';
}

// LoginModel.ts
/**
 * 登入用Class
 **/
export class LoginModel {
  /**
   * 帳號
   **/
  public account: string;
  /**
   * 密碼
   **/
  public password: string;
  /**
   * 公司代號
   **/
  public corpNo: string;
  /**
   * 業務類別
   **/
  public bizType: string;

  constructor(
    account: string,
    password: string,
    corpNo: string,
    bizType: string
  ) {
    this.account = account;
    this.password = password;
    this.corpNo = corpNo;
    this.bizType = bizType;
  }
}
