import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ComplaintFilesNewPage } from './complaintfilesnew';

@NgModule({
  declarations: [
    ComplaintFilesNewPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintFilesNewPage),
    TranslateModule.forChild()
  ],
  exports: [
    ComplaintFilesNewPage
  ]
})
export class ComplaintFilesNewPageModule { }
