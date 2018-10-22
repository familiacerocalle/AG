import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ActionSheetController, NavController, NavParams} from 'ionic-angular';
import {ShUtils} from "../../providers/utils/ShUtils";
import {AttachmentPopoverPage} from "../attachment-popover/attachment-popover";
import {Camera} from "@ionic-native/camera";
import {ShDateUtil} from "../../providers/utils/ShDateUtil";
import {Attachment} from "../../providers/models/Attachment";
import {ShDbStorage} from "../../providers/sh-web/sh_db";
import {User} from "../../providers/models/User";
import {StaticConstantsService} from "../../providers/sh-web/StaticConstants";
import {ShWeb} from "../../providers/sh-web/sh_web";
import {AttachmentFile} from "../../providers/models/AttachmentFile";

/**
 * Generated class for the AttachmentComponentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-attachment-component',
    templateUrl: 'attachment-component.html',
    providers: [ShWeb]
})
export class AttachmentComponentPage {
    shUtils: ShUtils = new ShUtils();
    @Input() attachmentList: Attachment[] = [];
    @Input() loggedInPost: User;
    @Input() ref_id: string;
    @Input() ref_type: string;
    @Input() editAllowed: boolean;
    @Output()
    change: EventEmitter<Attachment> = new EventEmitter<Attachment>();

    @ViewChild('input_file_id') fileElement: ElementRef;
    attachmentType: string = "";

    constructor(public navCtrl: NavController, public navParams: NavParams, private shDb: ShDbStorage, private actionSheetCtrl: ActionSheetController, private camera: Camera, private shWeb: ShWeb) {
    }

    addAttachment() {
        const actionSheet = this.actionSheetCtrl.create({
            title: 'Choose type of attachment',
            buttons: [
                {
                    text: 'Image Gallery',
                    icon: 'images',
                    handler: () => {
                        this.attachmentType = "image";
                        if (StaticConstantsService.buildType == 'ANDROID') {
                            this.takeCameraImage(this.camera.MediaType.PICTURE, this.camera.PictureSourceType.PHOTOLIBRARY, "png");
                        } else {
                            this.fileElement.nativeElement.accept = ".png, .jpg, .jpeg, .gif";
                            this.fileElement.nativeElement.click();
                        }
                    }
                }, {
                    text: 'Camera',
                    icon: 'camera',
                    handler: () => {
                        this.attachmentType = "camera";
                        this.takeCameraImage(this.camera.MediaType.PICTURE, this.camera.PictureSourceType.CAMERA, "png");
                    }
                }, {
                    text: 'Audio',
                    icon: 'md-musical-notes',
                    handler: () => {
                        this.attachmentType = "audio";
                        if (StaticConstantsService.buildType == 'ANDROID') {
                            this.takeCameraImage(this.camera.MediaType.ALLMEDIA, this.camera.PictureSourceType.PHOTOLIBRARY, "mp3");
                        } else {
                            this.fileElement.nativeElement.accept = ".mp3, .wav";
                            this.fileElement.nativeElement.click();
                        }
                    }
                }, {
                    text: 'Video',
                    icon: 'videocam',
                    handler: () => {
                        this.attachmentType = "video";

                        if (StaticConstantsService.buildType == 'ANDROID') {
                            this.takeCameraImage(this.camera.MediaType.VIDEO, this.camera.PictureSourceType.PHOTOLIBRARY, "mp4");
                        } else {
                            this.fileElement.nativeElement.accept = ".mp4, .ogg, .mpeg";
                            this.fileElement.nativeElement.click();
                        }
                    }
                }, {
                    text: 'Pdf',
                    icon: 'paper',
                    handler: () => {
                        this.attachmentType = "pdf";

                        if (StaticConstantsService.buildType == 'ANDROID') {
                            this.takeCameraImage(this.camera.MediaType.ALLMEDIA, this.camera.PictureSourceType.PHOTOLIBRARY, "pdf");
                        } else {
                            this.fileElement.nativeElement.accept = ".pdf";
                            this.fileElement.nativeElement.click();
                        }
                    }
                }, {
                    text: 'Document',
                    icon: 'document',
                    handler: () => {
                        this.attachmentType = "other";

                        if (StaticConstantsService.buildType == 'ANDROID') {
                            this.takeCameraImage(this.camera.MediaType.ALLMEDIA, this.camera.PictureSourceType.PHOTOLIBRARY, "txt");
                        } else {
                            this.fileElement.nativeElement.accept = null;
                            this.fileElement.nativeElement.click();
                        }
                    }
                }, {
                    text: 'Cancel',
                    icon: 'close',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
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
                    this.saveAttachment(fileSh.name, loadEvent.target.result);
                });
                myReader.readAsDataURL(fileSh);
            }
        }
    }


    takeCameraImage(mediaType: any, sourceType: any, extension: string) {
        let options = {
            quality: 80,
            destinationType: this.camera.DestinationType.FILE_URI,
            allowEdit: true,
            encodingType: this.camera.EncodingType.PNG,
            sourceType: sourceType,
            mediaType: mediaType,
            correctOrientation: true,
            saveToPhotoAlbum: true,
        };
        this.imageOption(options, extension);
    }

    imageOption(options: any, extension: string) {
        this.camera.getPicture(options).then((imageData) => {
            let base64Image: string;
            switch (this.attachmentType) {
                case "image":
                case "camera":
                    base64Image = 'data:image/png;base64,' + imageData;
                    break;
                case "video":
                    base64Image = 'data:video/mp4;base64,' + imageData;
                    break;
                case "audio":
                    base64Image = 'data:audio/mp3;base64,' + imageData;
                    break;
                case "pdf":
                    base64Image = 'data:application/pdf;base64,' + imageData;
                    break;
                case "other":
                    base64Image = 'data:text/plain;base64,' + imageData;
                    break;
            }
            this.saveAttachment(this.attachmentType + "_" + ShDateUtil.convertDisplayToDb(new Date()) + "." + extension, base64Image);
        }, (err) => {
            alert("Problem in getting image : " + err.toString());
        });
    }

    saveAttachment(fileName: string, url: string) {
        let newAttachment: Attachment = new Attachment();
        newAttachment.type = this.attachmentType;
        newAttachment.entity_id = this.ref_id;
        newAttachment.file_name = fileName;
        newAttachment.file = new AttachmentFile();
        newAttachment.file.url = url;
        newAttachment.entity_type = this.ref_type;
        this.attachmentList.push(newAttachment);
        this.change.emit(newAttachment);
    }


    openAttachment(attachment: Attachment) {
        this.navCtrl.push(AttachmentPopoverPage, {attachment: attachment, attachmentList: this.attachmentList});
    }
}
