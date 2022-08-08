import { Injectable } from '@angular/core';
import { Message, MessageService as PrimengMessageService } from 'primeng/api';
import { IMessageService } from 'src/interface/IMessageService';

@Injectable({
  providedIn: 'root',
})
export class MessageService implements IMessageService {
  constructor(private primengMessageService: PrimengMessageService) {}

  public ErrorMessage(message: string) {
    this.primengMessageService.add({
      detail: message,
      severity: 'error',
    });
  }
}
