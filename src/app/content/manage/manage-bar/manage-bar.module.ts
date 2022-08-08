import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageBarComponent } from './manage-bar.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [ManageBarComponent],
  imports: [CommonModule, MenubarModule],
  exports: [ManageBarComponent],
})
export class ManageBarModule {}
