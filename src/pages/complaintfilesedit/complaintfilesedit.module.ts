import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ComplaintFilesEditPage } from './complaintfilesedit';

@NgModule({
  declarations: [
    ComplaintFilesEditPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintFilesEditPage),
    TranslateModule.forChild()
  ],
  exports: [
    ComplaintFilesEditPage
  ]
})
export class ComplaintFilesEditPageModule { }
