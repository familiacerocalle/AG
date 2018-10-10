import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CourseUsersPage } from './course_users';

@NgModule({
  declarations: [
    CourseUsersPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseUsersPage),
    TranslateModule.forChild()
  ],
  exports: [
    CourseUsersPage
  ]
})
export class CourseUsersPageModule { }
