/**
 * Created by Nikhil on 2017-05-10.
 */
import {Injectable} from "@angular/core";
import {LoadingController, NavController, ToastController} from "ionic-angular";
import {Storage} from "@ionic/storage";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {StaticConstantsService} from "./StaticConstants";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {catchError} from "rxjs/operators";
import {of} from "rxjs/observable/of";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token token=' + StaticConstantsService.auth
    })
};


@Injectable()
export class ShWeb {

    constructor(private httpClient: HttpClient, public http: Http, public nav: NavController, public toastController: ToastController, private storage: Storage, private loadingController: LoadingController) {

    }


    get(url: string) {
        return new Promise(resolve => {
            let shLoader = this.loadingController.create({
                content: "Post : " + url,
                duration: 100000
            });
            shLoader.present();
            this.get2(url).subscribe(data => {
                if (shLoader != null) {
                    shLoader.dismiss();
                    shLoader.onDidDismiss(() => {
                        resolve(data);
                    });
                } else {
                    resolve(data);
                }
            });
        });
    }

    post(url: string, body: any) {
        // body = "'" + JSON.stringify(body) + "'";
        body = JSON.stringify(body);
        return new Promise(resolve => {
            let shLoader = this.loadingController.create({
                content: "Post : " + url,
                duration: 100000
            });
            shLoader.present();
            this.post2(url, body).subscribe(data => {
                if (shLoader != null) {
                    shLoader.dismiss();
                    shLoader.onDidDismiss(() => {
                        resolve(data);
                    });
                } else {
                    resolve(data);
                }
            });
        });
    }

    private get2(url: string): Observable<any> {
        console.log("post url  : " + StaticConstantsService.getServerAddress() + url);
        console.log("token  : " + StaticConstantsService.auth);

        return this.httpClient.get(StaticConstantsService.getServerAddress() + url, httpOptions).pipe(
            catchError(this.handleError('get', []))
        );
    }

    private post2(url: string, body: any): Observable<any> {
        console.log("post url  : " + StaticConstantsService.getServerAddress() + url);
        console.log("body  : " + body);
        console.log("token  : " + StaticConstantsService.auth);

        return this.httpClient.post(StaticConstantsService.getServerAddress() + url, body, httpOptions).pipe(
            catchError(this.handleError('post', []))
        );
    }


    private handleError<T>(operation = 'operation', result ?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
