import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ComplaintFilesPage } from './complaintfiles';

@NgModule({
  declarations: [
    ComplaintFilesPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintFilesPage),
    TranslateModule.forChild()
  ],
  exports: [
    ComplaintFilesPage
  ]
})
export class ComplaintFilesPageModule { }
