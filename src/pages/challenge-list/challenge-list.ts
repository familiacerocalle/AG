import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ShWeb} from "../../providers/sh-web/sh_web";
import {User} from "../../providers/models/User";
import {Challenge} from "../../providers/models/Challenge";
import {ChallengeUser} from "../../providers/models/ChallengeUser";
import {StaticConstantsService} from "../../providers/sh-web/StaticConstants";
import {ChallengeDetailsPage} from "../challenge-details/challenge-details";

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
        console.log("token : " + StaticConstantsService.auth);
        this.user = this.navParams.get("user");
        if (this.navParams.get("currentSelection") != null) {
            this.currentSelection = this.navParams.get("currentSelection");
        }
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
            console.log("completed challenge user : " + JSON.stringify(data));
            this.challengeUserList = data;

        });
    }

    getRegistered() {
        this.shWeb.get("challenge_users/show_act?id=" + this.user.id).then((data: ChallengeUser[]) => {
            console.log("registered challenge user : " + JSON.stringify(data));
            this.challengeUserList = data;
        });
    }


    register(challenge: Challenge) {
        let challengeUser: any = {};
        challengeUser.challengeid = challenge.id;
        challengeUser.userid = this.user.id;
        this.shWeb.post("challenge_users/inscribirreto", challengeUser).then((data: ChallengeUser) => {
            this.changeSelection("Registered");
        });
    }


    complete(challengeUserId: number, challenge: Challenge) {
        let challengeUser: any = {};
        challengeUser.id = challengeUserId;
        this.shWeb.post("challenge_users/finalizarreto", challengeUser).then((data: ChallengeUser) => {
            this.changeSelection("Completed");
        });
    }

    clickChallenge(challenge: Challenge, challengeUser: ChallengeUser) {
        this.navCtrl.push(ChallengeDetailsPage, {
            challengeStatus: this.currentSelection,
            id: challenge.id,
            user: this.user,
            challengeUser: challengeUser
        });
    }
}
