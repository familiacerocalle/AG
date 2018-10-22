import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {User} from "../../providers/models/User";
import {ShToast} from "../../providers/utils/ShToast";
import {ShWeb} from "../../providers/sh-web/sh_web";
import {SignupPage} from "../signup/signup";
import {HttpClient} from "@angular/common/http";
import {ShDbStorage} from "../../providers/sh-web/sh_db";
import {CourceListPage} from "../cource-list/cource-list";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [ShToast, ShWeb, ShDbStorage]
})
export class LoginPage {
    user: User = new User();

    constructor(private httpClient: HttpClient, public navCtrl: NavController, public navParams: NavParams, private shWeb: ShWeb, private shDb: ShDbStorage) {
        this.getDbLogin();
    }

    getDbLogin() {
        this.shDb.shGet("user").then((user: User) => {
            if (user != null) {
                this.user = user;
            }
        });
    }

    signUpPage() {
        this.navCtrl.setRoot(SignupPage);
    }


    login() {
        this.shWeb.post("users/signin", this.user).then((user: User) => {
            this.navCtrl.setRoot(CourceListPage, {user: user});
        });
    }

    goToForgotPassword() {
        // this.navCtrl.push(ForgotPasswordPage);
    }

}
