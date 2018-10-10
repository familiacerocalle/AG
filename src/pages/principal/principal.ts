import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { User } from '../../providers';



@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {
  usuarioActual: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuarioActual = navParams.get("user");
  }

  irAGym() {
    this.navCtrl.push("CourseUsersPage", {user: this.usuarioActual});
  }

  irARetos() {
    this.navCtrl.push("ChallengeUsersPage", {user: this.usuarioActual});
  }

  irAQuejas() {
    this.navCtrl.push("ComplaintUsersPage", {user: this.usuarioActual});
  }
}
