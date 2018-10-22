import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {User} from "../../providers/models/User";
import {ShWeb} from "../../providers/sh-web/sh_web";
import {Complaint} from "../../providers/models/Complaint";
import {ComplaintDetailsPage} from "../complaint-details/complaint-details";
import {ComplaintType} from "../../providers/models/ComplaintType";
import {ComplaintEditPage} from "../complaint-edit/complaint-edit";

/**
 * Generated class for the ComplaintListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'page-complaint-list',
    templateUrl: 'complaint-list.html',
    providers: [ShWeb]
})
export class ComplaintListPage {
    user: User;
    selectedType: string = "Security";
    complaintList: Complaint[] = [];
    complaintTypeList: ComplaintType[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private shWeb: ShWeb) {
        this.user = this.navParams.get("user");
        this.getComplaintType();
    }

    getComplaintList() {
        this.shWeb.get("complaints").then((data: Complaint[]) => {
            console.log("dataa: " + JSON.stringify(data));
            this.complaintList = data;
            this.attachComplaintToType();
        })
    }

    attachComplaintToType() {
        for (let complaint of this.complaintList) {
            for (let complaintType of this.complaintTypeList) {
                if (complaint.complaint_type_id == complaintType.id) {
                    complaint.complaintType = complaintType;
                }
            }
        }
    }

    getComplaintType() {
        this.shWeb.get("complaints/complaint_types").then((data: ComplaintType[]) => {
            console.log("complaint_types: " + JSON.stringify(data));
            this.complaintTypeList = data;
            this.getComplaintList();
        })
    }


    clickComplaint(complaint: Complaint) {
        let page: any = ComplaintDetailsPage;
        if (complaint == null) {
            page = ComplaintEditPage;
        }
        this.navCtrl.push(page, {
            user: this.user,
            complaint: complaint,
            complaintList: this.complaintList,
            complaintTypeList: this.complaintTypeList
        });
    }
}
