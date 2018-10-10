import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CourseUsersDispPage } from './course_usersdisp';

@NgModule({
  declarations: [
    CourseUsersDispPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseUsersDispPage),
    TranslateModule.forChild()
  ],
  exports: [
    CourseUsersDispPage
  ]
})
export class CourseUsersDispPageModule { }
