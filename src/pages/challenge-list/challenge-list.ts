import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ShWeb} from "../../providers/sh-web/sh_web";
import {User} from "../../providers/models/User";
import {Challenge} from "../../providers/models/Challenge";
import {ChallengeUser} from "../../providers/models/ChallengeUser";

/**
 * Generated class for the ChallengeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'page-challenge-list',
    templateUrl: 'challenge-list.html',
    providers: [ShWeb]
})
export class ChallengeListPage {

    challengeList: Challenge[] = [];
    currentSelection: string = "Available";
    challengeUserList: ChallengeUser[] = [];
    user: User;

    constructor(public navCtrl: NavController, public navParams: NavParams, private shWeb: ShWeb) {
        this.user = this.navParams.get("user");
        console.log("userLogin : " + JSON.stringify(this.user));
        this.changeSelection("Available")
    }

    changeSelection(selection: string) {
        this.currentSelection = selection;
        switch (selection) {
            case "Available":
                this.getAvailable();
                break;
            case "Registered":
                this.getRegistered();
                break;
            case "Completed":
                this.getCompleted();
                break;
        }
    }

    getAvailable() {
        this.shWeb.get("challenge_users/show_disp").then((data: Challenge[]) => {
            console.log("data : " + JSON.stringify(data));
            this.challengeList = data;
        });
    }

    getCompleted() {
        this.shWeb.get("challenge_users/show_hist?id=" + this.user.id).then((data: ChallengeUser[]) => {
            this.challengeUserList = data;

        });
    }

    getRegistered() {
        this.shWeb.get("challenge_users/show_act?id=" + this.user.id).then((data: ChallengeUser[]) => {
            this.challengeUserList = data;
        });
    }


    register(challengeId: number) {
        let challengeUser: ChallengeUser = new ChallengeUser();
        challengeUser.challenge_id = challengeId;
        challengeUser.user_id = this.user.id;
        this.shWeb.post("challenge_users/inscribircurso", challengeUser).then((data: ChallengeUser[]) => {
            this.challengeUserList = data;
        });
    }


    complete(challengeId: number) {
        let challengeUser: ChallengeUser = new ChallengeUser();
        challengeUser.challenge_id = challengeId;
        challengeUser.user_id = this.user.id;
        this.shWeb.post("challenge_users/inscribircurso", challengeUser).then((data: ChallengeUser[]) => {
            this.challengeUserList = data;
        });
    }

}
