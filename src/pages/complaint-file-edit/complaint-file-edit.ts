import {Component, ElementRef, ViewChild} from '@angular/core';
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
    @ViewChild('input_file_id') fileElement: ElementRef;

    constructor(public navCtrl: NavController, public navParams: NavParams, private shWeb: ShWeb, private alertCtrl: AlertController) {
        this.complaint = this.navParams.get("complaint");
        this.complaintFileList = this.navParams.get("complaintFileList");
        this.user = this.navParams.get("user");
        if (this.navParams.get("complaintFile") != null) {
            this.complaintFile = this.navParams.get("complaintFile");
            this.getComplaintFile();
        }
        if (this.complaintFile.attachments == null) {
            this.complaintFile.attachments = [];
        }
    }

    getComplaintFile() {
        this.shWeb.get("complaintsfiles/" + this.complaintFile.id).then((data: ComplaintFile) => {
            this.complaintFile.attachments = data.attachments;
            this.complaintFile.descripcion = data.descripcion;
        });
    }

    saveEditComplaintFile() {
        this.complaintFile.complaint_id = this.complaint.id;
        this.complaintFile.user_id = this.user.id;
        if (this.complaintFile.id == null) {
            this.shWeb.post("complaintfiles", {complaintfile: this.complaintFile}).then((data: ComplaintFile) => {
                ShUtils.saveUnique(this.complaint.complaintfiles, data);
                this.complaintFile = data;
                this.navCtrl.pop();
            });
        } else {
            let request: any = {};
            request.complaintfile = this.complaintFile;
            this.shWeb.put("complaintfiles/" + this.complaintFile.id, {complaintfile: this.complaintFile}).then((data: ComplaintFile) => {
                ShUtils.saveUnique(this.complaint.complaintfiles, data);
                this.complaint.complaintfiles = data;
                for(let complaintfile of this.complaint.complaintfiles) {
                  if(complaintfile.id == data.id){
                    complaintfile.descripcion = data.descripcion;
                    complaintfile.archivo.url = data.archivo.url;
                  }
                }

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
                        this.shWeb.delete("complaintfiles/" + this.complaintFile.id).then(() => {
                            this.complaintFileList.splice(this.complaintFileList.indexOf(this.complaintFile), 1);
                            this.navCtrl.pop();
                        })
                    }
                }
            ]
        });
        confirm.present();

    }

    saveAttachment(base64: string) {
        let request: any = {};
        this.complaintFile.complaint_id = this.complaint.id;
        this.complaintFile.user_id = this.user.id;
        request.complaintfile = this.complaintFile;
        request.complaintfile.archivo = base64;
        if (this.complaintFile.id == null) {
            this.shWeb.post("complaintfiles/", request).then((data: ComplaintFile) => {
                ShUtils.saveUnique(this.complaint.complaintfiles, data);
                this.complaintFile = data;
                this.navCtrl.pop();
            });
        } else {
            this.shWeb.put("complaintfiles/" + this.complaintFile.id, request).then((data: ComplaintFile) => {
                ShUtils.saveUnique(this.complaint.complaintfiles, data);
                for(let complaintfile of this.complaint.complaintfiles) {
                  if(complaintfile.id == data.id){
                    complaintfile = data;
                  }
                }
                this.navCtrl.pop();
            });
        }
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

}
