import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/model/LoginModel';
import { FormBuilder, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import {
  CreateApTokenResponse,
  LoginService,
} from 'src/service/login/login.service';
import { LanguageTranslateService } from 'src/service/languageTranslate/language-translate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public chooseSetting: boolean = false;
  public loginModel: LoginModel = new LoginModel();

  public loginForm = this.formBuilder.group({
    account: new FormControl('test'),
    password: new FormControl(),
    corpNo: new FormControl('thinkcloud'),
    bizType: new FormControl('consentform'),
  });

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private languageTranslateService: LanguageTranslateService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  toggle() {
    this.chooseSetting = !this.chooseSetting;
  }

  settingDisplay(): string {
    return this.chooseSetting ? 'hidden' : '';
  }

  test() {
    this.DataCovert();
    let test$ = this.loginService.Login(
      this.loginModel,
      this.languageTranslateService.translate.currentLang
    );

    test$.subscribe((data: CreateApTokenResponse) => {
      console.log(data);
      if (data.result) {
        localStorage.setItem('Account', this.loginModel.account);
        localStorage.setItem('AP_Token', data.token.Access);
        localStorage.setItem('AP_TokenExpire', data.token.AccessExpires);
      }
    });
  }

  DataCovert() {
    this.loginModel.account = this.loginForm.get('account')?.value;
    this.loginModel.password = this.loginForm.get('password')?.value;
    this.loginModel.corpNo = this.loginForm.get('corpNo')?.value;
    this.loginModel.bizType = this.loginForm.get('bizType')?.value;
  }
}
