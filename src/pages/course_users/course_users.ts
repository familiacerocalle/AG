import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-course_users',
  templateUrl: 'course_users.html'
})
export class CourseUsersPage {
  usuarioActual: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuarioActual = navParams.get("user");
  }

  getDisponibles() {
    this.navCtrl.push("CourseUsersDispPage", {user: this.usuarioActual});
  }

  getActuales() {
    this.navCtrl.push("CourseUsersActPage", {user: this.usuarioActual});
  }

  getHistorial() {
    this.navCtrl.push("CourseUsersHistPage", {user: this.usuarioActual});
  }

}
