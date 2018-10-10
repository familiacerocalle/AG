import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CourseUsers} from '../../providers';

@IonicPage()
@Component({
  selector: 'page-course_usersact',
  templateUrl: 'course_usersact.html'
})
export class CourseUsersActPage {
  usuarioActual: any;
  cursos: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public CourseUsers: CourseUsers) {
    this.usuarioActual = navParams.get("user");
  }

  ionViewDidLoad() {
    this.CourseUsers.getAct({userid: this.usuarioActual.id})
    .subscribe(
      (data) => {
        this.cursos = data['cursos'];
        //console.log(this.usuarioActual.id);
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(CourseUsersActPage);
        console.error(err);
    });
  }

  dopostFinCurso(id) {
    //this.CourseUsers.postFinCurso({courseid: courseid, userid: this.usuarioActual.id})
    this.CourseUsers.postFinCurso({id: id})
    .subscribe(
      (data) => {
        this.cursos = data['cursos'];
        //console.log(this.usuarioActual.id);
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(CourseUsersActPage);
        console.error(err);
    });
  }
}
