import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ComplaintUsers} from '../../providers';

@IonicPage()
@Component({
  selector: 'page-complaint_usershist',
  templateUrl: 'complaint_usershist.html'
})
export class ComplaintUsersHistPage {
  usuarioActual: any;
  quejas: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ComplaintUsers: ComplaintUsers) {
    this.usuarioActual = navParams.get("user");
  }

  ionViewDidLoad() {
    this.ComplaintUsers.getHist({userid: this.usuarioActual.id})
    .subscribe(
      (data) => {
        this.quejas = data['quejas'];
        //console.log(this.usuarioActual.id);
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(ComplaintUsersHistPage);
        console.error(err);
    });
  }
}
