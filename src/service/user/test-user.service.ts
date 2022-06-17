import { Injectable } from '@angular/core';
import { DefaultService } from './default.service';

@Injectable({
  providedIn: 'root'
})
export class TestUserService extends DefaultService {

  constructor() {
    super();
  }

  public override Login= function():string {
    return "string";
  }
}
