import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {LoginPage} from "../login/login";
import {User} from "../../providers/models/User";
import {ShToast} from "../../providers/utils/ShToast";
import {ShDbStorage} from "../../providers/sh-web/sh_db";
import {ShWeb} from "../../providers/sh-web/sh_web";
import {CourceListPage} from "../cource-list/cource-list";
import {StaticConstantsService} from "../../providers/sh-web/StaticConstants";

/**
 * Generated class for the Sign up Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
    providers: [ShDbStorage, ShToast, ShWeb]
})
export class SignupPage {
    user: User = new User;
    confirmPassword: string = "";
    showPassword: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams, private shToast: ShToast, private shWeb: ShWeb, private shDb: ShDbStorage) {
        this.initializeUser();
    }

    initializeUser() {
        this.user = new User;
    }

    clickedOnVerificationButton() {
        if (this.validation()) {
            this.signUp();
        }
    }

    signUp() {
        let request: any = {user: User};
        request.user = this.user;
        this.shWeb.post("users/signup", request).then((user: User) => {
            this.user = user;
            this.shDb.shPost("user", user).then(() => {
                this.shDb.shPost("auth", this.user.token).then(() => {
                    console.log("user : " + JSON.stringify(user));
                    StaticConstantsService.auth = this.user.token;
                    this.shToast.presentToast("Welcome to Gryphus!!");
                    this.navCtrl.setRoot(CourceListPage, {user: user});
                });
            });

        });
    }

    showPasswordClicked() {
        this.showPassword = !this.showPassword;
    }

    clickToLogin() {
        this.navCtrl.setRoot(LoginPage);
    }

    validation(): boolean {
        if (!this.shToast.validateNull(this.user.nombre, "Name should not be empty!")) {
            return false;
        }
        if (!this.shToast.validateNull(this.user.email, "email should not be empty!")) {
            return false;
        }
        if (!this.shToast.validateNull(this.user.password, "Password should not be empty!")) {
            return false;
        }
        if (!this.shToast.validateNull(this.confirmPassword, "Confirm Password should not be empty!")) {
            return false;
        }
        return this.shToast.validateMatch(this.confirmPassword, this.user.password, "Entered confirm password doesn't match with password");
    }
}
