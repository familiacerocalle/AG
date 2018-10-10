import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChallengeUsers} from '../../providers';

@IonicPage()
@Component({
  selector: 'page-challenge_usersact',
  templateUrl: 'challenge_usersact.html'
})
export class ChallengeUsersActPage {
  usuarioActual: any;
  retos: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ChallengeUsers: ChallengeUsers) {
    this.usuarioActual = navParams.get("user");
  }

  ionViewDidLoad() {
    this.ChallengeUsers.getAct({userid: this.usuarioActual.id})
    .subscribe(
      (data) => {
        this.retos = data['retos'];
        //console.log(this.usuarioActual.id);
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(ChallengeUsersActPage);
        console.error(err);
    });
  }

  dopostFinReto(id) {
    this.ChallengeUsers.postFinReto({id: id})
    .subscribe(
      (data) => {
        this.retos = data['retos'];
        //console.log(this.usuarioActual.id);
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(ChallengeUsersActPage);
        console.error(err);
    });
  }
}
