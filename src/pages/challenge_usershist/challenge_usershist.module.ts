import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ChallengeUsersHistPage } from './challenge_usershist';

@NgModule({
  declarations: [
    ChallengeUsersHistPage,
  ],
  imports: [
    IonicPageModule.forChild(ChallengeUsersHistPage),
    TranslateModule.forChild()
  ],
  exports: [
    ChallengeUsersHistPage
  ]
})
export class ChallengeUsersHistPageModule { }
