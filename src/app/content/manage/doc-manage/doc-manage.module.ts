import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocManageComponent } from './doc-manage.component';
import { DocManageRoutingModule } from './doc-manage-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TreeSelectModule } from 'primeng/treeselect';
import { DocManageService } from 'src/service/docManage/doc-manage.service';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';


@NgModule({
  declarations: [DocManageComponent],
  imports: [
    CommonModule,
    DocManageRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    TreeSelectModule,
    CheckboxModule,
    ButtonModule,
    SplitButtonModule,
    TableModule,
    ConfirmDialogModule
  ],
  providers: [DocManageService,ConfirmationService],
})
export class DocManageModule {}
