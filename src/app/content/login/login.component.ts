import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/model/LoginModel';
import { FormBuilder, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { sha256 } from 'js-sha256';
import { LoginService } from 'src/service/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public chooseSetting:boolean = false;
  public loginModel:LoginModel = new LoginModel();
  public loginForm = this.formBuilder.group({
    account:  new FormControl('test'),
    password: new FormControl(),
    corpNo: new FormControl('thinkcloud'),
    bizType: new FormControl('consentform')
  });

  public ttt:any;
  constructor(private formBuilder: FormBuilder,private loginService:LoginService) { 

  }

  ngOnInit(): void {
  }

  toggle() {
    console.log(this.chooseSetting)
    this.chooseSetting = !this.chooseSetting;
  }

  settingDisplay():string{
    return this.chooseSetting?'hidden':''
  }


  test(){
    this.DataCovert();
    this.loginService.Login(this.loginModel);
    console.log(   this.loginModel);
    this.ttt =  this.loginService.IsWeb();
  }

  DataCovert(){
    this.loginModel.account = this.loginForm.get('account')?.value;
    this.loginModel.password = this.loginForm.get('password')?.value;
    this.loginModel.corpNo = this.loginForm.get('corpNo')?.value;
    this.loginModel.bizType = this.loginForm.get('bizType')?.value;
  }
}
