import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ComplaintFilesDelPage } from './complaintfilesdel';

@NgModule({
  declarations: [
    ComplaintFilesDelPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintFilesDelPage),
    TranslateModule.forChild()
  ],
  exports: [
    ComplaintFilesDelPage
  ]
})
export class ComplaintFilesDelPageModule { }
