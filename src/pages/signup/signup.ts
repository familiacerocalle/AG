import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {LoginPage} from "../login/login";
import {UserLogin} from "../../providers/models/UserLogin";
import {User} from "../../providers/models/User";
import {ShToast} from "../../providers/utils/ShToast";
import {ShDbStorage} from "../../providers/sh-web/sh_db";
import {ShWeb} from "../../providers/sh-web/sh_web";
import {CourceListPage} from "../cource-list/cource-list";

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
    userLogin: UserLogin = new UserLogin;
    confirmPassword: string = "";
    showPassword: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams, private shToast: ShToast, private shWeb: ShWeb, private shDb: ShDbStorage) {
        this.initializeUser();
    }

    initializeUser() {
        this.userLogin.user_login_user = new User;
        this.userLogin.user_login_user.user_country_code = '91';
        this.userLogin.user_login_user.user_gender = "MR";
    }

    clickedOnVerificationButton() {
        if (this.validation()) {
            this.signUp();
        }
    }

    signUp() {
        this.shWeb.shPostWithoutAuth("Signing Up... ", "/api/User_login/insert", this.userLogin).then((userLogin: UserLogin) => {
            this.userLogin = userLogin;
            this.shDb.shPost("auth", userLogin.user_login_auth).then(() => {
                this.shDb.shSaveInTable(this.userLogin, "userTable", userLogin.user_login_user).then(() => {
                    this.shToast.presentToast("Welcome to Gryphus!!");
                    this.navCtrl.setRoot(CourceListPage, {userLogin: userLogin});
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
        if (!this.shToast.validateNull(this.userLogin.user_login_user.user_name, "Name should not be empty!")) {
            return false;
        }
        if (!this.shToast.validateNull(this.userLogin.user_login_user.user_mobile, "Mobile number should not be empty!")) {
            return false;
        }
        if (!this.shToast.validateExactLength(this.userLogin.user_login_user.user_mobile, 10, "Mobile number should be of 10 digit!")) {
            return false;
        }
        if (!this.shToast.validateGreaterLength(this.userLogin.user_login_password, 5, "Password should be greater than 5 digit!")) {
            return false;
        }
        if (!this.shToast.validateNull(this.userLogin.user_login_password, "Password should not be empty!")) {
            return false;
        }
        if (!this.shToast.validateNull(this.confirmPassword, "Confirm Password should not be empty!")) {
            return false;
        }
        return this.shToast.validateMatch(this.confirmPassword, this.userLogin.user_login_password, "Entered confirm password doesn't match with password");
    }
}
