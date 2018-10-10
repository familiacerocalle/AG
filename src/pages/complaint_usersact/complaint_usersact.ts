import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ComplaintUsers} from '../../providers';

@IonicPage()
@Component({
  selector: 'page-complaint_usersact',
  templateUrl: 'complaint_usersact.html'
})
export class ComplaintUsersActPage {
  usuarioActual: any;
  quejas: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ComplaintUsers: ComplaintUsers) {
    this.usuarioActual = navParams.get("user");
  }

  ionViewDidLoad() {
    this.ComplaintUsers.getAct({userid: this.usuarioActual.id})
    .subscribe(
      (data) => {
        this.quejas = data['quejas'];
        //console.log(this.usuarioActual.id);
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(ComplaintUsersActPage);
        console.error(err);
    });
  }
}
