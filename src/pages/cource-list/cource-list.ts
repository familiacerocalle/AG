import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ShWeb} from "../../providers/sh-web/sh_web";

/**
 * Generated class for the CourceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
    selector: 'page-cource-list',
    templateUrl: 'cource-list.html',
    providers: [ShWeb]
})
export class CourceListPage {

    currentSelection: string = "Available";

    constructor(public navCtrl: NavController, public navParams: NavParams, private shWeb: ShWeb) {
    }

    changeSelection(selection: string) {
        this.currentSelection = selection;
        switch (selection) {
            case "Available":
                this.getAvailable();
                break;
            case "Registered":
                this.getRegistered();
                break;
            case "Completed":
                this.getCompleted();
                break;
        }
    }

    getAvailable() {
        this.shWeb.get("").subscribe((data: any) => {

        });
    }


    getCompleted() {

    }


    getRegistered() {

    }
}
