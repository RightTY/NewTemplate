import { Injectable } from '@angular/core';
import { sha256 } from 'js-sha256';
import { Iuser } from 'src/interface/Iuser';
import { LoginModel } from 'src/model/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements Iuser {

  constructor() { }
  Login(loginModel :LoginModel){
    let loginTimeStamp = Math.floor(new Date().getTime()/1000).toString();
    let hashStringArr:string[] =[
      loginModel.corpNo,loginModel.bizType,loginModel.account,loginTimeStamp,loginModel.password
    ] 
    let hash = sha256(this.hashStringJoin(hashStringArr));
    console.log(this.hashStringJoin(hashStringArr));
		let expire = new Date();
		expire.setSeconds(expire.getSeconds() + 43200);
    console.log(navigator)
  }


  hashStringJoin(arr : string[]):string{
    return arr.join(":"); 
  }

  IsWeb(){
    var browser={
			versions:function(){ 
				var u = navigator.userAgent;
				return {//移動終端瀏覽器版本信息
					//trident: u.indexOf('Trident') > -1, //IE內核
					presto: u.indexOf('Presto') > -1, //opera內核
					webKit: u.indexOf('AppleWebKit') > -1, //蘋果、谷歌內核
					gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐內核
					mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否為移動終端
					ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios終端
					android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android終端或者uc瀏覽器
					iPhone: u.indexOf('iPhone') > -1 , //是否為iPhone或者QQHD瀏覽器
					iPad: u.indexOf('iPad') > -1, //是否iPad
					webApp: u.indexOf('Safari') == -1, //是否web應該進程，沒有頭部與底部
					weixin: u.indexOf('MicroMessenger') > -1, //是否微信
					qq: u.match(/\sQQ/i)?.toString() == " qq" //是否QQ
				};
			}(),
			// language:(navigator.browserLanguage || navigator.language).toLowerCase()
		};
    return browser;
  }
}
