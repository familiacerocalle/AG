import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ComplaintUsersHistPage } from './complaint_usershist';

@NgModule({
  declarations: [
    ComplaintUsersHistPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintUsersHistPage),
    TranslateModule.forChild()
  ],
  exports: [
    ComplaintUsersHistPage
  ]
})
export class ComplaintUsersHistPageModule { }
