import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { IHttpService } from 'src/interface/IHttpService';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService implements IHttpService {
  constructor(private messageService: MessageService) {}

  public HandleError<T>(): any {
    return (error: any): Observable<T> => {
      if (error.name === 'HttpErrorResponse') {
        this.messageService.ErrorMessage(`Error Message: ${error.error.desc}`);
        return of(error.error as T);
      } else {
        this.messageService.ErrorMessage(`Error Message: ${error}`);
        return of(error as T);
      }
    };
  }

  public ToQueryString(data: object): string {
    let Keys: string[] = Object.keys(data);
    let KeyValue: string[] = [];
    Keys.forEach((key: string) => {
      if (this.isValidKey(key, data)) {
        KeyValue.push(`${key}=${data[key]}`);
      }
    });
    return KeyValue.join('&');
  }

  private isValidKey(
    key: string | number | symbol,
    object: object
  ): key is keyof typeof object {
    return key in object;
  }
}
