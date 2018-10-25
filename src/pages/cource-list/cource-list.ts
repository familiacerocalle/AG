import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ShWeb} from "../../providers/sh-web/sh_web";
import {Course} from "../../providers/models/Course";
import {CourseUser} from "../../providers/models/CourseUser";
import {User} from "../../providers/models/User";
import {StaticConstantsService} from "../../providers/sh-web/StaticConstants";
import {CourseDetailsPage} from "../course-details/course-details";

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
    user: User;

    constructor(public navCtrl: NavController, public navParams: NavParams, private shWeb: ShWeb) {
        console.log("token : " + StaticConstantsService.auth);
        this.user = this.navParams.get("user");
        if (this.navParams.get("currentSelection") != null) {
            this.currentSelection = this.navParams.get("currentSelection");
        }
        this.changeSelection(this.currentSelection);
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
            console.log("completed course user : " + JSON.stringify(data));
            this.courseUserList = data;

        });
    }

    getRegistered() {
        this.shWeb.get("course_users/show_act?id=" + this.user.id).then((data: CourseUser[]) => {
            console.log("registered course user : " + JSON.stringify(data));
            this.courseUserList = data;
        });
    }


    register(course: Course) {
        let courseUser: any = {};
        courseUser.courseid = course.id;
        courseUser.userid = this.user.id;
        this.shWeb.post("course_users/inscribircurso", courseUser).then((data: CourseUser) => {
            this.changeSelection("Registered");
        });
    }


    complete(courseUserId: number, course: Course) {
        let courseUser: any = {};
        courseUser.id = courseUserId;
        this.shWeb.post("course_users/finalizarcurso", courseUser).then((data: CourseUser) => {
            this.changeSelection("Completed");
        });
    }

    clickCourse(course: Course, courseUser: CourseUser) {
        this.navCtrl.push(CourseDetailsPage, {
            courseStatus: this.currentSelection,
            id: course.id,
            user: this.user,
            courseUser: courseUser
        });
    }
}
