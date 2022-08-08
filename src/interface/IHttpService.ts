import { Observable } from 'rxjs';

export interface IHttpService {
  HandleError<T>():any;
  ToQueryString(data: object): string;
}