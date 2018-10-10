import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CourseUsers} from '../../providers';

@IonicPage()
@Component({
  selector: 'page-course_usersdisp',
  templateUrl: 'course_usersdisp.html'
})
export class CourseUsersDispPage {
  usuarioActual: any;
  cursos: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public CourseUsers: CourseUsers) {
    this.usuarioActual = navParams.get("user")
  }

  ionViewDidLoad() {
    this.CourseUsers.getDisp({userid: this.usuarioActual.id})
    .subscribe(
      (data) => {
        this.cursos = data['cursos'];
        //console.log(this.usuarioActual.id);
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(CourseUsersDispPage);
        console.error(err);
    });
  }

  dopostInsCurso(courseid) {
    this.CourseUsers.postInsCurso({courseid: courseid, userid: this.usuarioActual.id})
    .subscribe(
      (data) => {
        this.cursos = data['cursos'];
        //console.log(this.usuarioActual.id);
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(CourseUsersDispPage);
        console.error(err);
    });
  }
}
