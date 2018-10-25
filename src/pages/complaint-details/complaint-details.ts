import {Component, ElementRef, ViewChild} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Complaint} from "../../providers/models/Complaint";
import {User} from "../../providers/models/User";
import {ComplaintType} from "../../providers/models/ComplaintType";
import {ShWeb} from "../../providers/sh-web/sh_web";
import {ComplaintEditPage} from "../complaint-edit/complaint-edit";
import {ComplaintFile} from "../../providers/models/ComplaintFile";
import {ComplaintFileEditPage} from "../complaint-file-edit/complaint-file-edit";

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
    @ViewChild('input_file_id') fileElement: ElementRef;

    constructor(public navCtrl: NavController, public navParams: NavParams, private shWeb: ShWeb, private alertCtrl: AlertController) {
        this.user = this.navParams.get("user");
        this.complaintList = this.navParams.get("complaintList");
        this.complaintTypeList = this.navParams.get("complaintTypeList");
        if (this.navParams.get("complaint") != null) {
            this.complaint = this.navParams.get("complaint");
            this.getObject();
        } else {
            this.editComplaint();
        }

        if (this.complaint.attachments == null) {
            this.complaint.attachments = [];
        }
        if (this.complaint.complaintfiles == null) {
            this.complaint.complaintfiles = [];
        }
    }

    getObject() {
        this.shWeb.get("complaints/" + this.complaint.id).then((data: Complaint) => {
            console.log("Course : " + JSON.stringify(data));
            this.complaint = data;
        });
    }

    saveAttachment(base64: string) {
        let request: any = {};
        request.complaint = this.complaint;
        request.files = base64;
        this.shWeb.put("complaints/" + this.complaint.id, request).then((complaint: Complaint) => {
            this.complaint = complaint;
        });
    }

    onChangeAttachment($event: any) {

        let input: any = this.fileElement.nativeElement;
        if (!input) {
            alert("File element not found");
        }
        else if (!input.files) {
            alert("Browser don't support file type");
        }
        else if (!input.files[0]) {
            alert("No file selected");
        }
        else {
            for (let fileSh of $event.target.files) {
                let myReader: FileReader = new FileReader();
                myReader.addEventListener('loadend', (loadEvent: any) => {
                    this.saveAttachment(loadEvent.target.result);
                });
                myReader.readAsDataURL(fileSh);
            }
        }
    }

    addAttachment() {
        this.fileElement.nativeElement.click();
    }

    editComplaint() {
        this.navCtrl.push(ComplaintEditPage, {
            complaint: this.complaint,
            user: this.user,
            complaintTypeList: this.complaintTypeList,
            complaintList: this.complaintList
        })
    }

    clickComplaintFile(complaintFile: ComplaintFile) {
        this.navCtrl.push(ComplaintFileEditPage, {
            complaintFile: complaintFile,
            complaint: this.complaint,
            complaintFileList: this.complaint.complaintfiles,
            user: this.user
        });
    }

    deleteComplaint() {
        const confirm = this.alertCtrl.create({
            title: 'Delete complaint?',
            message: 'Are you sure you cant to delete complaint?',
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
                        this.shWeb.delete("complaints/" + this.complaint.id).then(() => {
                            this.complaintList.splice(this.complaintList.indexOf(this.complaint), 1);
                            this.navCtrl.pop();
                        })
                    }
                }
            ]
        });
        confirm.present();

    }
}
