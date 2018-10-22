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
        'Authorization': 'Token token=0137e33939bede8bbaae6b055a850609'
    })
};

@Injectable()
export class ShWeb {

    constructor(private httpClient: HttpClient, public http: Http, public nav: NavController, public toastController: ToastController, private storage: Storage, private loadingController: LoadingController) {

    }

    get(url: string): Observable<any> {
        return this.httpClient.get(StaticConstantsService.getServerAddress() + url, httpOptions).pipe(
            catchError(this.handleError('get', []))
        );
    }


    post(url: string, body: any): Observable<any> {
        body = JSON.stringify(body);
        return this.httpClient.post(StaticConstantsService.getServerAddress() + url, body, httpOptions).pipe(
            catchError(this.handleError('post', []))
        );
    }

    shGetWithoutAuth(loadingMessage: string, getUrl: string) {
        return new Promise(resolve => {
            let shLoader = this.loadingController.create({
                content: loadingMessage,
                duration: 100000
            });
            if (loadingMessage != null) {
                shLoader.present();
            } else {
                shLoader = null;
            }

            this.http.get(StaticConstantsService.getServerAddress() + getUrl)
                .map(res => res.json())
                .subscribe(data => {
                    if (shLoader != null) {
                        shLoader.dismiss();
                        shLoader.onDidDismiss(() => {
                            resolve(data);
                        });
                    } else {
                        resolve(data);
                    }
                }, errorObject => {
                    if (shLoader != null) {
                        shLoader.dismiss();
                        shLoader.onDidDismiss(() => {
                            this.errorCallBack(errorObject);
                        });
                    } else {
                        this.errorCallBack(errorObject);
                    }
                });
        }).catch(error => {
            console.log("error in http Call : " + error + " $$ " + error.toString());
        });
    }

    shGet(loadingMessage: string, getUrl: string) {
        return new Promise(resolve => {
            let shLoader = this.loadingController.create({
                content: loadingMessage,
                duration: 100000
            });
            if (loadingMessage != null) {
                shLoader.present();
            } else {
                shLoader = null;
            }

            this.storage.ready().then(() => {
                this.storage.get('userLogin')
                    .then(userLogin => {
                        if (getUrl.indexOf('?') > -1) {
                            getUrl += '&auth=' + userLogin.user_login_auth;
                        } else {
                            getUrl += '?auth=' + userLogin.user_login_auth;
                        }
                        this.http.get(StaticConstantsService.getServerAddress() + getUrl)
                            .map(res => res.json())
                            .subscribe(data => {
                                // //console.log("&&" + getUrl + " : response : " + JSON.stringify(data));
                                if (shLoader != null) {
                                    shLoader.dismiss();
                                    shLoader.onDidDismiss(() => {
                                        resolve(data);
                                    });
                                } else {
                                    resolve(data);
                                }
                            }, errorObject => {
                                if (shLoader != null) {
                                    shLoader.dismiss();
                                    shLoader.onDidDismiss(() => {
                                        this.errorCallBack(errorObject);
                                    });
                                } else {
                                    this.errorCallBack(errorObject);
                                }
                            });

                    }).catch(error => {
                    console.log("error in http Call : " + error + " $$ " + error.toString());
                });
            });
        });
    }

    shPostWithoutAuth(loadingString: string, postUrl: string, postData: any) {
        return new Promise(resolve => {

            let shLoader = this.loadingController.create({
                content: loadingString,
                // dismissOnPageChange: true,
                duration: 150000
            });
            shLoader.present();
            postData = JSON.stringify(postData);
            console.log("shPost json request: " + postData);
            this.http.post(StaticConstantsService.getServerAddress() + postUrl, postData)
                .map(res => res.json())
                .subscribe(data => {
                    console.log("shPost json response: " + JSON.stringify(data));
                    shLoader.dismiss();
                    shLoader.onDidDismiss(() => {
                        resolve(data);
                        // this.pushInitSh(data);
                    });
                }, errorObject => {
                    shLoader.dismiss();
                    shLoader.onDidDismiss(() => {
                        this.errorCallBack(errorObject);
                    });

                });
        }).catch(error => {
            console.log("error in http Call : " + error + " $$ " + error.toString());
        });
    }

    shPost(loadingString: string, postUrl: string, postData: any) {
        let shLoader = this.loadingController.create({
            content: loadingString,
            // dismissOnPageChange: true,
            duration: 150000
        });
        shLoader.present();
        let postDataString = JSON.stringify(postData);
        // postDataString = postDataString.replace(new RegExp('&', 'g'), 'and');

        return new Promise(resolve => {
            this.storage.ready().then(() => {
                this.storage.get('userLogin')
                    .then(userLogin => {
                        postData = {
                            user_login_auth: userLogin.user_login_auth,
                            json: postDataString
                        };
                        postData = JSON.stringify(postData);
                        //console.log("shPost json request : " + postData);

                        this.http.post(StaticConstantsService.getServerAddress() + postUrl, postData)
                            .map(res => res.json())
                            .subscribe(data => {
                                console.log("shPost json response: " + JSON.stringify(data));
                                shLoader.dismiss();
                                shLoader.onDidDismiss(() => {
                                    resolve(data);

                                });
                            }, errorObject => {
                                shLoader.dismiss();
                                shLoader.onDidDismiss(() => {
                                    this.errorCallBack(errorObject);
                                });

                            });
                    }).catch(error => {
                    console.log("error in http Call : " + error + " $$ " + error.toString());
                });
            });
        });
    }

    errorCallBack(errorObject: any) {
        let serverError: string;
        //// console.log("error in sh post: " + JSON.stringify(errorObject));
        switch (errorObject.status) {
            case 400:
                serverError = "BAD_REQUEST";
                break;
            case 500:
                serverError = "INTERNAL_SERVER_ERROR";
                break;
            case 401:
                serverError = "UNAUTHORIZED";
                break;
            case 402:
                serverError = "PAYMENT_REQUIRED";
                break;
            case 404:
                serverError = "NOT_FOUND";
                break;
            case 403:
                serverError = "FORBIDDEN";
                break;
            default:
                serverError = "Internet not working";
        }
        //// console.log("error :" + errorObject._body);
        if (errorObject._body.length < 200) {
            serverError = errorObject._body;
        }
        let toast = this.toastController.create({
            message: serverError,
            duration: 2000,
        });
        toast.present();

        // new ShToast().showToast(serverError);

        if (errorObject.status == "UNAUTHORIZED") {
        }
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {


            console.error(error); // log to console instead


            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
