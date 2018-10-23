import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ShWeb} from "../../providers/sh-web/sh_web";
import {ComplaintFile} from "../../providers/models/ComplaintFile";
import {Complaint} from "../../providers/models/Complaint";
import {ShUtils} from "../../providers/utils/ShUtils";
import {User} from "../../providers/models/User";

/**
 * Generated class for the ComplaintFileEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-complaint-file-edit',
    templateUrl: 'complaint-file-edit.html',
    providers: [ShWeb]
})
export class ComplaintFileEditPage {

    complaintFile: ComplaintFile = new ComplaintFile();
    complaint: Complaint;
    user: User;

    constructor(public navCtrl: NavController, public navParams: NavParams, private shWeb: ShWeb) {
        this.complaint = this.navParams.get("complaint");
        this.user = this.navParams.get("user");
        if (this.navParams.get("complaintFile") != null) {
            this.complaintFile = this.navParams.get("complaintFile");
        }
    }

    saveEdit() {
        if (this.complaintFile.id == null) {
            this.shWeb.post("complaintfiles", this.complaintFile).then((data: ComplaintFile) => {
                ShUtils.saveUnique(this.complaint.complaintfiles, data);
            });
        } else {
            this.shWeb.put("complaintfiles/" + this.complaintFile.id, this.complaintFile).then((data: ComplaintFile) => {
                ShUtils.saveUnique(this.complaint.complaintfiles, data);
            });
        }
    }

}
