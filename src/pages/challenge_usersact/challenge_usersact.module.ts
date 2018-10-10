import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ChallengeUsersActPage } from './challenge_usersact';

@NgModule({
  declarations: [
    ChallengeUsersActPage,
  ],
  imports: [
    IonicPageModule.forChild(ChallengeUsersActPage),
    TranslateModule.forChild()
  ],
  exports: [
    ChallengeUsersActPage
  ]
})
export class ChallengeUsersActPageModule { }
