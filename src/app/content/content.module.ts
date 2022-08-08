import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/module/shared/shared.module';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { MessageService } from 'primeng/api';
import { TranslateModule } from '@ngx-translate/core';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { ManageBarModule } from './manage/manage-bar/manage-bar.module';
import { HeaderModule } from '../header/header.module';
import { UserService } from 'src/service/user/user.service';

@NgModule({
  declarations: [LoginComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    CardModule,
    FormsModule,
    PasswordModule,
    ButtonModule,
    AccordionModule,
    ReactiveFormsModule,
    TranslateModule,
    ContentRoutingModule,
    ManageBarModule,
    HeaderModule
  ],
  providers: [
    { provide: UserService, useClass: UserService }, //更換不同登入方式 ， 需繼承Iuser
  ]
})
export class ContentModule {}
