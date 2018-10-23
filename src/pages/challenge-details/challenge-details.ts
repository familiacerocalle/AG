import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ShWeb} from "../../providers/sh-web/sh_web";
import {Challenge} from "../../providers/models/Challenge";
import {User} from "../../providers/models/User";
import {ChallengeUser} from "../../providers/models/ChallengeUser";
import {ChallengeListPage} from "../challenge-list/challenge-list";

/**
 * Generated class for the ChallengeDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'page-challenge-details',
    templateUrl: 'challenge-details.html',
    providers: [ShWeb]
})
export class ChallengeDetailsPage {

    id: number;
    challengeStatus: string;
    challenge: Challenge = new Challenge();
    user: User;
    challengeUser: ChallengeUser = new ChallengeUser();

    constructor(public navCtrl: NavController, public navParams: NavParams, private shWeb: ShWeb) {
        this.id = this.navParams.get("id");
        this.challengeStatus = this.navParams.get("challengeStatus");
        this.user = this.navParams.get("user");
        this.challengeUser = this.navParams.get("challengeUser");

        this.getObject();
    }

    getObject() {
        this.shWeb.get("challenge_users/show?id=" + this.id).then((data: Challenge) => {
            console.log("Challenge : " + JSON.stringify(data));
            this.challenge = data;
        });
    }

    register(challenge: Challenge) {
        let challengeUser: any = {};
        challengeUser.challengeid = challenge.id;
        challengeUser.userid = this.user.id;
        this.shWeb.post("challenge_users/inscribirreto", challengeUser).then((data: ChallengeUser) => {
            this.navCtrl.setRoot(ChallengeListPage, {currentSelection: "Registered", user: this.user});
        });
    }


    complete(challengeUserId: number) {
        let challengeUser: any = {};
        challengeUser.id = challengeUserId;
        this.shWeb.post("challenge_users/finalizarreto", challengeUser).then((data: ChallengeUser) => {
            this.navCtrl.setRoot(ChallengeListPage, {currentSelection: "Completed", user: this.user});
        });
    }

}
