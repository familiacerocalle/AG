import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {User} from "../../providers/models/User";
import {Course} from "../../providers/models/Course";
import {CourseUser} from "../../providers/models/CourseUser";
import {ShWeb} from "../../providers/sh-web/sh_web";
import {CourceListPage} from "../cource-list/cource-list";

/**
 * Generated class for the CourseDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'page-course-details',
    templateUrl: 'course-details.html',
    providers: [ShWeb]
})
export class CourseDetailsPage {

    id: number;
    courseStatus: string;
    course: Course = new Course();
    user: User;
    courseUser: CourseUser = new CourseUser();

    constructor(public navCtrl: NavController, public navParams: NavParams, private shWeb: ShWeb) {
        this.id = this.navParams.get("id");
        this.courseStatus = this.navParams.get("courseStatus");
        this.user = this.navParams.get("user");
        this.courseUser = this.navParams.get("courseUser");

        this.getObject();
    }

    getObject() {
        this.shWeb.get("course_users/show?id=" + this.id).then((data: Course) => {
            console.log("Course : " + JSON.stringify(data));
            this.course = data;
        });
    }

    register(course: Course) {
        let courseUser: any = {};
        courseUser.courseid = course.id;
        courseUser.userid = this.user.id;
        this.shWeb.post("course_users/inscribircurso", courseUser).then((data: CourseUser) => {
            this.navCtrl.setRoot(CourceListPage, {currentSelection: "Registered", user: this.user});
        });
    }


    complete(courseUserId: number) {
        let courseUser: any = {};
        courseUser.id = courseUserId;
        this.shWeb.post("course_users/finalizarcurso", courseUser).then((data: CourseUser) => {
            this.navCtrl.setRoot(CourceListPage, {currentSelection: "Completed", user: this.user});
        });
    }

}
