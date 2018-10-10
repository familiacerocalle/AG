import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ComplaintUsers} from '../../providers';

@IonicPage()
@Component({
  selector: 'page-complaint_usersdel',
  templateUrl: 'complaint_usersdel.html'
})
export class ComplaintUsersDelPage {
  usuarioActual: any;
  idQuejaActual: any;
  quejas: any[] = [];
  queja: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public ComplaintUsers: ComplaintUsers) {
    //this.usuarioActual = navParams.get("user")
    this.idQuejaActual = navParams.get("id")
  }

  ionViewDidLoad() {
//    this.ComplaintUsers.deleteQueja({id: this.idQuejaActual, withCredentials: true})
    this.ComplaintUsers.deleteQueja({id: this.idQuejaActual})
    .subscribe(
      (data) => {
        this.quejas = data['quejas'];
        //console.log(this.usuarioActual.id);
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(ComplaintUsersDelPage);
        console.error(err);
    });
  }
}
