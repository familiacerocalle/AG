import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CourseUsersHistPage } from './course_usershist';

@NgModule({
  declarations: [
    CourseUsersHistPage,
  ],
  imports: [
    IonicPageModule.forChild(CourseUsersHistPage),
    TranslateModule.forChild()
  ],
  exports: [
    CourseUsersHistPage
  ]
})
export class CourseUsersHistPageModule { }
