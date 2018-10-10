import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ComplaintUsersDispPage } from './complaint_usersdisp';

@NgModule({
  declarations: [
    ComplaintUsersDispPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintUsersDispPage),
    TranslateModule.forChild()
  ],
  exports: [
    ComplaintUsersDispPage
  ]
})
export class ComplaintUsersDispPageModule { }
