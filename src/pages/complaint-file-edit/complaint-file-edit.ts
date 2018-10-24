import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
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
    complaintFileList: ComplaintFile[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private shWeb: ShWeb, private alertCtrl: AlertController) {
        this.complaint = this.navParams.get("complaint");
        this.complaintFileList = this.navParams.get("complaintFileList");
        this.user = this.navParams.get("user");
        if (this.navParams.get("complaintFile") != null) {
            this.complaintFile = this.navParams.get("complaintFile");
        }
        if (this.complaintFile.attachments == null) {
            this.complaintFile.attachments = [];
        }
    }

    saveEditComplaintFile() {
        this.complaintFile.complaint_id = this.complaint.id;
        this.complaintFile.user_id = this.user.id;
        if (this.complaintFile.id == null) {
            this.shWeb.post("complaintfiles", {complaintfile: this.complaintFile}).then((data: ComplaintFile) => {
                ShUtils.saveUnique(this.complaint.complaintfiles, data);
                this.navCtrl.pop();
            });
        } else {
            let request: any = {};
            request.complaintfile = this.complaintFile;
            if (this.complaintFile.attachments.length > 0) {
                request.complaintfile.archive = this.complaintFile.attachments[this.complaintFile.attachments.length - 1].file.url;
                console.log("request : " + request.complaintfile.archive.substr(0, 50));
            }
            this.shWeb.put("complaintfiles/" + this.complaintFile.id, {complaintfile: this.complaintFile}).then((data: ComplaintFile) => {
                ShUtils.saveUnique(this.complaint.complaintfiles, data);
                this.navCtrl.pop();
            });
        }
    }


    deleteComplaint() {
        const confirm = this.alertCtrl.create({
            title: 'Delete complaint file?',
            message: 'Are you sure to delete this?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        this.shWeb.delete("complaintfiles/" + this.complaint.id).then(() => {
                            this.complaintFileList.splice(this.complaintFileList.indexOf(this.complaintFile), 1);
                            this.navCtrl.pop();
                        })
                    }
                }
            ]
        });
        confirm.present();

    }
}
