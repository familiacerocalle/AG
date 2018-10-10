import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ComplaintUsersActPage } from './complaint_usersact';

@NgModule({
  declarations: [
    ComplaintUsersActPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintUsersActPage),
    TranslateModule.forChild()
  ],
  exports: [
    ComplaintUsersActPage
  ]
})
export class ComplaintUsersActPageModule { }
