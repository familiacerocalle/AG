import {Component, ViewChild} from '@angular/core';
import {AlertController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Storage} from "@ionic/storage";
import {User} from "../providers/models/User";
import {StaticConstantsService} from "../providers/sh-web/StaticConstants";
import {CourceListPage} from "../pages/cource-list/cource-list";
import {ComplaintListPage} from "../pages/complaint-list/complaint-list";
import {ChallengeListPage} from "../pages/challenge-list/challenge-list";
import {ProfilePage} from "../pages/profile/profile";
import {SignupPage} from "../pages/signup/signup";
import {LoginPage} from "../pages/login/login";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    user: User;
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
            this.storage.get("user").then((user: User) => {
                if (user != null) {
                    this.user = user;
                    this.storage.get("auth").then((auth) => {
                        if (auth == null) {
                            this.nav.setRoot(LoginPage, {user: this.user});
                        } else {
                            StaticConstantsService.auth = auth;
                            this.nav.setRoot(ComplaintListPage, {
                                user: this.user
                            });
                        }
                    });
                }
                else {
                    this.nav.setRoot(SignupPage, {user: this.user});
                }
            }).catch(() => {
                this.nav.setRoot(SignupPage, {user: this.user});
            });
        });
    }

    setRoot(pageName: string) {
        switch (pageName) {
            case 'Course':
                this.nav.setRoot(CourceListPage, {
                    user: this.user,
                });
                break;
            case 'Complaint':
                this.nav.setRoot(ComplaintListPage, {
                    user: this.user,
                });
                break;
            case 'Challenge':
                this.nav.setRoot(ChallengeListPage, {
                    user: this.user,
                });
                break;

            case 'Profile':
                this.nav.setRoot(ProfilePage, {
                    user: this.user,
                });
                break;
        }
    }
}
