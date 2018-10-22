import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Complaint} from "../../providers/models/Complaint";
import {User} from "../../providers/models/User";
import {ComplaintType} from "../../providers/models/ComplaintType";
import {ShWeb} from "../../providers/sh-web/sh_web";

/**
 * Generated class for the ComplaintDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'page-complaint-details',
    templateUrl: 'complaint-details.html',
    providers: [ShWeb]
})
export class ComplaintDetailsPage {
    user: User;
    complaint: Complaint = new Complaint();
    complaintList: Complaint[] = [];
    complaintTypeList: ComplaintType[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private shWeb: ShWeb) {
        this.user = this.navParams.get("user");
        this.complaintList = this.navParams.get("complaintList");
        this.complaintTypeList = this.navParams.get("complaintTypeList");

        if (this.navParams.get("complaint") != null) {
            this.complaint = this.navParams.get("complaint");
        }

    }

    saveComplaint() {
        this.complaint.user_id = this.user.id;
        if (this.complaint.id == null) {
            let request: any = {};
            request.complaint = this.complaint;
            this.shWeb.post("complaints", request).then((complaint: Complaint) => {
                this.complaintList.unshift(complaint);
                this.navCtrl.pop();
            });
        } else {
            this.shWeb.put("complaints/" + this.complaint.id, this.complaint).then((complaint: Complaint) => {
                this.navCtrl.pop();
            });
        }
    }

}
