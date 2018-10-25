import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Attachment} from "../../providers/models/Attachment";
import {ShToast} from "../../providers/utils/ShToast";

/**
 * Generated class for the AttachmentPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-attachment-popover',
    templateUrl: 'attachment-popover.html',
    providers: [ShToast]
})
export class AttachmentPopoverPage {
    attachment: Attachment = new Attachment();
    attachmentList: Attachment[];

    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private shToast: ShToast) {
        this.attachment = this.navParams.get("attachment");
        this.attachmentList = this.navParams.get("attachmentList");
    }

    deleteAttachment() {
        const confirm = this.alertCtrl.create({
            title: 'Delete attachment?',
            message: 'Are you sure you want to delete attachment?',
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
                        this.attachment.active = 0;
                        this.shToast.presentToast("Can't delete now");
                    }
                }
            ]
        });
        confirm.present();
    }

    closePopover() {
        this.navCtrl.pop();
    }
}
