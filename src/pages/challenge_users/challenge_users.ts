import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-challenge_users',
  templateUrl: 'challenge_users.html'
})
export class ChallengeUsersPage {
  usuarioActual: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuarioActual = navParams.get("user");
  }

  getDisponibles() {
    this.navCtrl.push("ChallengeUsersDispPage", {user: this.usuarioActual});
  }

  getActuales() {
    this.navCtrl.push("ChallengeUsersActPage", {user: this.usuarioActual});
  }

  getHistorial() {
    this.navCtrl.push("ChallengeUsersHistPage", {user: this.usuarioActual});
  }

}
