import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ComplaintFiles} from '../../providers';

@IonicPage()
@Component({
  selector: 'page-complaintfilesnew',
  templateUrl: 'complaintfilesnew.html'
})
export class ComplaintFilesNewPage {
  usuarioActual: any;
  idQuejaActual: any;
  //quejas: any[] = [];
  archivo: any = {};
  comentarios: any;
  queja: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ComplaintFiles: ComplaintFiles) {
    this.usuarioActual = navParams.get("user")
    this.queja = navParams.get("queja")
  }

  ionViewDidLoad() {
    this.ComplaintFiles.getNew()
    .subscribe(
      (data) => {
        //this.quejas = data['quejas'];
        this.archivo = data['archivos'];
        //console.log(this.usuarioActual.id);
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(ComplaintFilesNewPage);
        console.error(err);
    });
  }

  //
  dopostArchivo() {
    this.ComplaintFiles.postArchivo({complaint_user_id: this.queja.id, descripcion: this.archivo.descripcion, archivo: this.archivo.archivo}).subscribe((resp) => {
      //this.navCtrl.push(MainPage);
      //this.navCtrl.push(ComplaintUsersDispPage, {user: resp});
      this.navCtrl.push("ComplaintFilesPage", {queja: this.queja});
    }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(ComplaintFilesNewPage);
      console.error(err);
    });

  }

}
