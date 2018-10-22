import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {User} from "../../providers/models/User";
import {ShWeb} from "../../providers/sh-web/sh_web";
import {ShDbStorage} from "../../providers/sh-web/sh_db";
import {LoginPage} from "../login/login";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
    providers: [ShWeb, ShDbStorage]
})
export class ProfilePage {
    user: User = new User;

    constructor(public navCtrl: NavController, public navParams: NavParams, private shWeb: ShWeb, private shDb: ShDbStorage) {
        this.user = this.navParams.get("user");

    }

    logout() {
        this.shDb.shPost("auth", null).then(() => {
            this.navCtrl.setRoot(LoginPage);
        });
    }

}
