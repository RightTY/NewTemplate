import { Observable } from 'rxjs';
import { Response } from "../model/Response";

export interface IMessageService {
  ErrorMessage: (message: string) => void;
}