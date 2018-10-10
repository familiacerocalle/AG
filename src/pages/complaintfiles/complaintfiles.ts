import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComplaintFiles } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-complaintfiles',
  templateUrl: 'complaintfiles.html'
})
export class ComplaintFilesPage {
  usuarioActual: any;
  quejaActual: any;
  archivos: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ComplaintFiles: ComplaintFiles) {
    //this.usuarioActual = navParams.get("user");
    this.quejaActual = navParams.get("queja");

  }

  ionViewDidLoad() {
    this.ComplaintFiles.getIndex({idqueja: this.quejaActual.id})
    .subscribe(
      (data) => {
        this.archivos = data['archivos'];
        //console.log(this.usuarioActual.id);
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(ComplaintFilesPage);
        console.error(err);
    });

  }

  dogetEdit(id) {
    this.navCtrl.push("ComplaintFilesEditPage", {id: id, queja: this.quejaActual});
  }

  dodeleteArchivo(id) {
    this.navCtrl.push("ComplaintFilesDelPage", {id: id, queja: this.quejaActual});
    //this.navCtrl.push("ComplaintFilesDelPage", {id: id});
  }

  /*
  dopostArchivo(id) {
    this.navCtrl.push("ComplaintFilesNewPage", {userid: this.usuarioActual.id});
  }
  */

  dogetNewArchivo() {
    this.navCtrl.push("ComplaintFilesNewPage", {queja: this.quejaActual});
  }


}
