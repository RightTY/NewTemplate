import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { LanguageTranslateService } from 'src/service/languageTranslate/language-translate.service';
import { Router } from '@angular/router';
import { HeaderBarService } from 'src/service/headerBar/header-bar.service';
import { UserService } from 'src/service/user/user.service';
import { CreateApTokenResponse, LoginModel } from 'src/interface/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public chooseSetting: boolean = false;
  public loginModel!: LoginModel;

  public loginForm = this.formBuilder.group({
    account: new FormControl('test'),
    password: new FormControl(),
    corpNo: new FormControl('thinkcloud'),
    bizType: new FormControl('consentform'),
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private languageTranslateService: LanguageTranslateService,
    private router: Router,
    private headerBarService: HeaderBarService
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('AP_Token') !== null) {
      this.router.navigate(['manage', 'wellcome']);
    }
  }

  toggle() {
    this.chooseSetting = !this.chooseSetting;
  }

  settingDisplay(): string {
    return this.chooseSetting ? 'hidden' : '';
  }

  Login() {
    this.DataCovert();

    this.userService
      .Login(
        this.loginModel,
        this.languageTranslateService.translate.currentLang
      )
      .subscribe((data: CreateApTokenResponse) => {
        console.log(data);
        if (data.result) {
          sessionStorage.setItem('Account', this.loginModel.account);
          sessionStorage.setItem('AP_Token', data.token.Access);
          sessionStorage.setItem('AP_TokenExpire', data.token.AccessExpires);
          this.headerBarService.SetManageHeaderBarItems();
          this.router.navigate(['manage']);
        }
      });
  }

  DataCovert() {
    this.loginModel = new LoginModel(
      this.loginForm.get('account')?.value,
      this.loginForm.get('password')?.value,
      this.loginForm.get('corpNo')?.value,
      this.loginForm.get('bizType')?.value
    )
  }
}
