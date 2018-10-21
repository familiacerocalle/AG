import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {UserLogin} from "../../providers/models/UserLogin";
import {ShDbStorage} from "../../providers/sh-web/sh_db";
import {User} from "../../providers/models/User";
import {ShToast} from "../../providers/utils/ShToast";
import {ShWeb} from "../../providers/sh-web/sh_web";
import {SignupPage} from "../signup/signup";
import {of} from "rxjs/observable/of";
import {Observable} from "../../../node_modules/rxjs";
import {StaticConstantsService} from "../../providers/sh-web/StaticConstants";
import {catchError} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CourceListPage} from "../cource-list/cource-list";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [ShDbStorage, ShToast, ShWeb]
})
export class LoginPage {
    userLogin: UserLogin = new UserLogin;

    constructor(private httpClient: HttpClient, public navCtrl: NavController, public navParams: NavParams, private shDb: ShDbStorage, private shWeb: ShWeb) {
        this.userLogin.user_login_user = new User;
        this.getDbLogin();
    }

    getDbLogin() {
        this.shDb.shGet("userLogin").then((userLoginDb: UserLogin) => {
            if (userLoginDb != null) {
                this.userLogin = userLoginDb;
            }
        });
    }

    signUpPage() {
        this.navCtrl.setRoot(SignupPage);
    }

    // onlineLogin() {
    // this.shWeb.clientPost("/users/signin", this.userLogin.user_login_user).then((data: any) => {
    //     console.log("data : " + JSON.stringify(data));
    // });
    // this.shWeb.post("/users/signin", {
    //     email: 'nikhil.sharma.it@gmail.com',
    //     password: '12345678'
    // }).subscribe((data: any) => {
    //     console.log("data : " + JSON.stringify(data));
    // });
    // }
    onlineLogin() {
        // this.webCall().subscribe((data: any) => {
        //     console.log("data: " + JSON.stringify(data));
        // });

        this.navCtrl.setRoot(CourceListPage, {userLogin: this.userLogin});
    }

    webCall(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Token token=' + StaticConstantsService.auth
            })
        };
        return this.httpClient.post("https://gryphus-web-dev.herokuapp.com/api/v1/users/signin", "{email: 'nikhil.sharma.it@gmail.com', password: '12345678'}", httpOptions).pipe(
            catchError(this.handleError('get', []))
        );
    }

    goToForgotPassword() {
        // this.navCtrl.push(ForgotPasswordPage);
    }


    // onlineLogin() {
    //     this.shWeb.shPostWithoutAuth("Logging in... ", "/users/signin", this.userLogin).then((userLogin: UserLogin) => {
    //         this.shDb.shPost("userLogin", userLogin).then(() => {
    //             this.shDb.shPost("auth", userLogin.user_login_auth).then(() => {
    //                 this.shDb.shSaveInTable(this.userLogin, "userTable", userLogin.user_login_user).then(() => {
    //                     this.navCtrl.setRoot(CourceListPage, {userLogin: userLogin});
    //                 });
    //             });
    //         });
    //     });
    // }

    private handleError<T>(operation = 'get', result?: T) {
        return (error: any): Observable<T> => {


            console.error(error); // log to console instead


            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
