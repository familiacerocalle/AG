import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ComplaintUsers} from '../../providers';

@IonicPage()
@Component({
  selector: 'page-complaint_usersdisp',
  templateUrl: 'complaint_usersdisp.html'
})
export class ComplaintUsersDispPage {
  usuarioActual: any;
  idQuejaActual: any;
  //quejas: any[] = [];
  queja: any = {};
  comentarios: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ComplaintUsers: ComplaintUsers) {
    //this.usuarioActual = navParams.get("user")
    this.idQuejaActual = navParams.get("id")
  }

  ionViewDidLoad() {
    this.ComplaintUsers.getShow({id: this.idQuejaActual})
    .subscribe(
      (data) => {
        //this.quejas = data['quejas'];
        this.queja = data['quejas'];
        //console.log(this.usuarioActual.id);
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(ComplaintUsersDispPage);
        console.error(err);
    });
  }

  // Attempt to login in through our User service
  dopatchQueja() {
    this.ComplaintUsers.patchQueja({id: this.idQuejaActual, direccion: this.queja.direccion, comentarios: this.queja.comentarios}).subscribe((resp) => {
      //this.navCtrl.push(MainPage);
      //this.navCtrl.push(ComplaintUsersDispPage, {user: resp});
    }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(ComplaintUsersDispPage);
      console.error(err);
    });
  }

  irAArchivos() {
    //this.navCtrl.push("ComplaintFilesPage", {user: this.usuarioActual, queja: this.queja});
    this.navCtrl.push("ComplaintFilesPage", {queja: this.queja});
  }

}
