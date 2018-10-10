import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComplaintUsers } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-complaint_users',
  templateUrl: 'complaint_users.html'
})
export class ComplaintUsersPage {
  usuarioActual: any;
  quejas: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ComplaintUsers: ComplaintUsers) {
    this.usuarioActual = navParams.get("user");
  }

/*  getHistorial() {
    this.navCtrl.push("ComplaintUsersHistPage", {user: this.usuarioActual});
  }
*/
ionViewDidLoad() {
  this.ComplaintUsers.getIndex({userid: this.usuarioActual.id})
  .subscribe(
    (data) => {
      this.quejas = data['quejas'];
      //console.log(this.usuarioActual.id);
    }, (err) => {
    //this.navCtrl.push(MainPage);
    this.navCtrl.push(ComplaintUsersPage);
      console.error(err);
  });
}

dogetShow(id) {
  this.navCtrl.push("ComplaintUsersDispPage", {id: id});
}

dodeleteQueja(id) {
  this.navCtrl.push("ComplaintUsersDelPage", {id: id});
}
/*
dopostQueja(id) {
  this.navCtrl.push("ComplaintUsersNewPage", {userid: this.usuarioActual.id});
}
*/
dogetNewQueja() {
  this.navCtrl.push("ComplaintUsersNewPage", {user: this.usuarioActual});
}

/*
ionViewDidLoad() {
  this.CourseUsers.getDisp({userid: this.usuarioActual.id})
  .subscribe(
    (data) => {
      this.cursos = data['cursos'];
      //console.log(this.usuarioActual.id);
    }, (err) => {
    //this.navCtrl.push(MainPage);
    this.navCtrl.push(CourseUsersDispPage);
      console.error(err);
  });
}
*/
/*  dopostQuejaIndex() {
    this.getIndex({userid: this.usuarioActual.id})
    .subscribe(
      (data) => {
        this.quejas = data['quejas'];
        //console.log(this.usuarioActual.id);
      }, (err) => {
      //this.navCtrl.push(MainPage);
      this.navCtrl.push(ComplaintUsersPage);
        console.error(err);
    });
  }
*/
/*
  getIndex(params?: any) {
    let seq = this.api.get('complaint_users/index', params).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._guardaParam(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  _guardaParam(resp) {
    this.quejas = resp;
  }
  */
}
