import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DefaultService implements Iuser{

  constructor() { }

  public Login = function ():string {
    return "string";
  }
}
