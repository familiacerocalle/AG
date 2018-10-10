import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CourseUsers} from '../../providers';

@IonicPage()
@Component({
  selector: 'page-course_usershist',
  templateUrl: 'course_usershist.html'
})
export class CourseUsersHistPage {
  usuarioActual: any;
  cursos: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public CourseUsers: CourseUsers) {
    this.usuarioActual = navParams.get("user");
  }

  ionViewDidLoad() {
    this.CourseUsers.getHist({userid: this.usuarioActual.id})
    .subscribe(
      (data) => {
        this.cursos = data['cursos'];
        //console.log(this.usuarioActual.id);
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(CourseUsersHistPage);
        console.error(err);
    });
  }
}
