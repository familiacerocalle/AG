import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ShWeb} from "../../providers/sh-web/sh_web";
import {ComplaintFile} from "../../providers/models/ComplaintFile";
import {Complaint} from "../../providers/models/Complaint";

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

    constructor(public navCtrl: NavController, public navParams: NavParams, private shWeb: ShWeb) {
        this.complaint = this.navParams.get("complaint");
        if (this.navParams.get("complaintFile") != null) {
            this.complaintFile = this.navParams.get("complaintFile");
        }
    }

}
