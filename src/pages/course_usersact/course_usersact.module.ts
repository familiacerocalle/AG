import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CourseUsersActPage } from './course_usersact';

@NgModule({
  declarations: [
    CourseUsersActPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseUsersActPage),
    TranslateModule.forChild()
  ],
  exports: [
    CourseUsersActPage
  ]
})
export class CourseUsersActPageModule { }
