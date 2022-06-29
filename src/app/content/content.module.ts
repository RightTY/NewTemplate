import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/module/shared/shared.module';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { ToastModule } from 'primeng/toast';
import { LoginService } from 'src/service/login/login.service';
import { MessageService } from 'primeng/api';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    CardModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    AccordionModule,
    ToastModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  providers: [
    { provide: LoginService, useClass: LoginService }, //更換不同登入方式 ， 需繼承Iuser
    MessageService
  ],
})
export class ContentModule {}
