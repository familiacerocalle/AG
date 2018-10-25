import {Injectable} from "@angular/core";
import {ToastController} from "ionic-angular";

/**
 * Created by nikhilsharma on 13/05/17.
 */
@Injectable()
export class ShToast {

    constructor(public toastCtrl: ToastController) {
    }

    public presentToastTiming(message: string, timing: number) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: timing
        });
        toast.present();
    }

    public presentToast(message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    }

    public validateNull(name: any, message: string) {
        if (name == null) {
            let toast = this.toastCtrl.create({
                message: message,
                duration: 2000,
            });
            toast.present();
            return false;
        } else {
            name = (name + "").trim();
            if (name.length < 1) {
                let toast = this.toastCtrl.create({
                    message: message,
                    duration: 2000,
                });
                toast.present();
                return false;
            }
        }
        return true;
    }

    public validateMatch(name: any, matchingName: string, message: string): boolean {
        if (name != matchingName) {
            let toast = this.toastCtrl.create({
                message: message,
                duration: 2000,
            });
            toast.present();
            return false;
        }
        return true;
    }


    public validateExactLength(name: any, length: number, message: string): boolean {
        if (name.length != length) {
            let toast = this.toastCtrl.create({
                message: message,
                duration: 2000,
            });
            toast.present();
            return false;
        }
        return true;
    }

    public validateNotNull0(countValue: number, message: string): boolean {
        if (countValue == null || countValue == 0) {
            let toast = this.toastCtrl.create({
                message: message,
                duration: 2000,
            });
            toast.present();
            return false;
        }
        return true;
    }

    public validateGreaterLength(name: any, length: number, message: string): boolean {
        if (name.length <= length) {
            let toast = this.toastCtrl.create({
                message: message,
                duration: 2000,
            });
            toast.present();
            return false;
        }
        return true;
    }

    public validateLessLength(name: any, length: number, message: string): boolean {
        if (name.length >= length) {
            let toast = this.toastCtrl.create({
                message: message,
                duration: 2000,
            });
            toast.present();
            return false;
        }
        return true;
    }
}
