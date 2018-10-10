import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChallengeUsers} from '../../providers';

@IonicPage()
@Component({
  selector: 'page-challenge_usersdisp',
  templateUrl: 'challenge_usersdisp.html'
})
export class ChallengeUsersDispPage {
  usuarioActual: any;
  retos: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ChallengeUsers: ChallengeUsers) {
    this.usuarioActual = navParams.get("user");
  }

  ionViewDidLoad() {
    this.ChallengeUsers.getDisp({userid: this.usuarioActual.id})
    .subscribe(
      (data) => {
        this.retos = data['retos'];
        //console.log(this.usuarioActual.id);
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(ChallengeUsersDispPage);
        console.error(err);
    });
  }

  dopostInsReto(challengeid) {
    this.ChallengeUsers.postInsReto({challengeid: challengeid, userid: this.usuarioActual.id})
    .subscribe(
      (data) => {
        this.retos = data['retos'];
        //console.log(this.usuarioActual.id);
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(ChallengeUsersDispPage);
        console.error(err);
    });
  }
}
