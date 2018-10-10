import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ComplaintUsersDelPage } from './complaint_usersdel';

@NgModule({
  declarations: [
    ComplaintUsersDelPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintUsersDelPage),
    TranslateModule.forChild()
  ],
  exports: [
    ComplaintUsersDelPage
  ]
})
export class ComplaintUsersDelPageModule { }
