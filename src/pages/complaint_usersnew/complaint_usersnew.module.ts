import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ComplaintUsersNewPage } from './complaint_usersnew';

@NgModule({
  declarations: [
    ComplaintUsersNewPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintUsersNewPage),
    TranslateModule.forChild()
  ],
  exports: [
    ComplaintUsersNewPage
  ]
})
export class ComplaintUsersNewPageModule { }
