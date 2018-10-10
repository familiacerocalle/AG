import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ComplaintFiles} from '../../providers';

@IonicPage()
@Component({
  selector: 'page-complaintfilesedit',
  templateUrl: 'complaintfilesedit.html'
})
export class ComplaintFilesEditPage {
  usuarioActual: any;
  idArchivoActual: any;
  //quejas: any[] = [];
  archivo: any = {};
  comentarios: any;
  quejaActual: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ComplaintFiles: ComplaintFiles) {
    //this.usuarioActual = navParams.get("user")
    this.idArchivoActual = navParams.get("id")
    this.quejaActual = navParams.get("queja");
}

  ionViewDidLoad() {
    this.ComplaintFiles.getShow({id: this.idArchivoActual})
    .subscribe(
      (data) => {
        //this.quejas = data['quejas'];
        this.archivo = data['archivos'];
        //console.log(this.usuarioActual.id);
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(ComplaintFilesEditPage);
        console.error(err);
    });
  }

  // Attempt to login in through our User service
  dopatchArchivo() {
    this.ComplaintFiles.patchArchivo({id: this.idArchivoActual, descripcion: this.archivo.descripcion, archivo: this.archivo.archivo}).subscribe((resp) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push("ComplaintFilesPage", {queja: this.quejaActual});
    }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(ComplaintFilesEditPage);
      console.error(err);
    });
  }
}
