import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ShWeb} from "../../providers/sh-web/sh_web";
import {Course} from "../../providers/models/Course";
import {CourseUser} from "../../providers/models/CourseUser";
import {User} from "../../providers/models/User";

/**
 * Generated class for the CourceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'page-cource-list',
    templateUrl: 'cource-list.html',
    providers: [ShWeb]
})
export class CourceListPage {
    courseList: Course[] = [];
    currentSelection: string = "Available";
    courseUserList: CourseUser[] = [];
    user: User = new User;

    constructor(public navCtrl: NavController, public navParams: NavParams, private shWeb: ShWeb) {
        this.user = this.navParams.get("user");
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
        this.shWeb.get("course_users/show_disp").then((data: Course[]) => {
            console.log("data : " + JSON.stringify(data));
            this.courseList = data;
        });
    }

    getCompleted() {
        this.shWeb.get("course_users/show_hist?id=" + this.user.id).then((data: CourseUser[]) => {
            this.courseUserList = data;

        });
    }

    getRegistered() {
        this.shWeb.get("course_users/show_act?id=" + this.user.id).then((data: CourseUser[]) => {
            this.courseUserList = data;
        });
    }
}
