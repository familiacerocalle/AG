import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ChallengeUsersPage } from './challenge_users';

@NgModule({
  declarations: [
    ChallengeUsersPage,
  ],
  imports: [
    IonicPageModule.forChild(ChallengeUsersPage),
    TranslateModule.forChild()
  ],
  exports: [
    ChallengeUsersPage
  ]
})
export class ChallengeUsersPageModule { }
