import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ComplaintUsers} from '../../providers';

@IonicPage()
@Component({
  selector: 'page-complaint_usersnew',
  templateUrl: 'complaint_usersnew.html'
})
export class ComplaintUsersNewPage {
  usuarioActual: any;
  idQuejaActual: any;
  //quejas: any[] = [];
  queja: any = {};
  comentarios: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ComplaintUsers: ComplaintUsers) {
    this.usuarioActual = navParams.get("user")
  }

  ionViewDidLoad() {
    this.ComplaintUsers.getNew()
    .subscribe(
      (data) => {
        //this.quejas = data['quejas'];
        this.queja = data['quejas'];
        //console.log(this.usuarioActual.id);
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(ComplaintUsersNewPage);
        console.error(err);
    });
  }

  //
  dopostQueja() {
    this.ComplaintUsers.postQueja({user_id: this.usuarioActual.id, complaint_id: this.queja.complaint_id, direccion: this.queja.direccion, comentarios: this.queja.comentarios}).subscribe((resp) => {
      //this.navCtrl.push(MainPage);
      //this.navCtrl.push(ComplaintUsersDispPage, {user: resp});
      this.navCtrl.push("ComplaintUsersPage", {user: this.usuarioActual});
    }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(ComplaintUsersNewPage);
      console.error(err);
    });

  }

}
