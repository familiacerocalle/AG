import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ChallengeUsersDispPage } from './challenge_usersdisp';

@NgModule({
  declarations: [
    ChallengeUsersDispPage,
  ],
  imports: [
    IonicPageModule.forChild(ChallengeUsersDispPage),
    TranslateModule.forChild()
  ],
  exports: [
    ChallengeUsersDispPage
  ]
})
export class ChallengeUsersDispPageModule { }
