import {Component, ViewChild} from '@angular/core';
import {AlertController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Storage} from "@ionic/storage";
import {UserLogin} from "../providers/models/UserLogin";
import {StaticConstantsService} from "../providers/sh-web/StaticConstants";
import {LoginPage} from "../pages/login/login";
import {CourceListPage} from "../pages/cource-list/cource-list";
import {ComplaintListPage} from "../pages/complaint-list/complaint-list";
import {ChallengeListPage} from "../pages/challenge-list/challenge-list";
import {ProfilePage} from "../pages/profile/profile";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    // rootPage: any;
    userLogin: UserLogin;
    @ViewChild(Nav) nav: Nav;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage, private alertCtrl: AlertController) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
            this.setFirstPage();
        });
    }

    setFirstPage() {
        this.storage.ready().then(() => {
            this.storage.get("userLogin").then((userLogin: UserLogin) => {
                if (userLogin != null) {
                    this.userLogin = userLogin;
                    this.storage.get("auth").then((auth) => {
                        if (auth == null) {
                            this.nav.setRoot(LoginPage, {userLogin: this.userLogin});
                        } else {
                            StaticConstantsService.auth = auth;
                            this.nav.setRoot(CourceListPage, {
                                userLogin: this.userLogin
                            });
                        }
                    });
                }
                else {
                    this.nav.setRoot(LoginPage, {userLogin: this.userLogin});
                }
            }).catch(() => {
                this.nav.setRoot(LoginPage, {userLogin: this.userLogin});
            });
        });
    }

    setRoot(pageName: string) {
        switch (pageName) {
            case 'Course':
                this.nav.setRoot(CourceListPage, {
                    userLogin: this.userLogin,
                });
                break;
            case 'Complaint':
                this.nav.setRoot(ComplaintListPage, {
                    userLogin: this.userLogin,
                });
                break;
            case 'Challenge':
                this.nav.setRoot(ChallengeListPage, {
                    userLogin: this.userLogin,
                });
                break;

            case 'Profile':
                this.nav.setRoot(ProfilePage, {
                    userLogin: this.userLogin,
                });
                break;
        }
    }
}
