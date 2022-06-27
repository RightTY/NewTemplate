import { LoginModel } from "src/model/LoginModel";

export interface Iuser {
    // label: string;
    Login: (loginModel :LoginModel)=>void;
    // Logout: ()=>String;
}