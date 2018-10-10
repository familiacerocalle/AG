import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ComplaintFiles} from '../../providers';

@IonicPage()
@Component({
  selector: 'page-complaintfilesdel',
  templateUrl: 'complaintfilesdel.html'
})
export class ComplaintFilesDelPage {
  usuarioActual: any;
  idArchivoActual: any;
  archivos: any[] = [];
  archivo: any = {};
  queja: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ComplaintFiles: ComplaintFiles) {
    //this.usuarioActual = navParams.get("user")
    this.idArchivoActual = navParams.get("id")
    this.queja = navParams.get("queja")
  }

  ionViewDidLoad() {
//    this.ComplaintUsers.deleteQueja({id: this.idQuejaActual, withCredentials: true})
    this.ComplaintFiles.deleteArchivo({id: this.idArchivoActual})
    .subscribe(
      (data) => {
        this.archivos = data['archivos'];
        //console.log(this.usuarioActual.id);
//        this.navCtrl.push("ComplaintFilesPage", {queja: this.queja});
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(ComplaintFilesDelPage);
        console.error(err);
    });
  }
}
