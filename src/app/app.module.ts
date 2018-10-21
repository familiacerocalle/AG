import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {ComplaintDetailsPage} from "../pages/complaint-details/complaint-details";
import {ComplaintListPage} from "../pages/complaint-list/complaint-list";
import {CourseDetailsPage} from "../pages/course-details/course-details";
import {CourceListPage} from "../pages/cource-list/cource-list";
import {ChallengeDetailsPage} from "../pages/challenge-details/challenge-details";
import {ChallengeListPage} from "../pages/challenge-list/challenge-list";
import {LoginPage} from "../pages/login/login";
import {SignupPage} from "../pages/signup/signup";
import {ShWeb} from "../providers/sh-web/sh_web";

@NgModule({
    declarations: [
        MyApp,
        ComplaintDetailsPage,
        ComplaintListPage,
        CourseDetailsPage,
        CourceListPage,
        ChallengeDetailsPage,
        ChallengeListPage,
        LoginPage,
        SignupPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ComplaintDetailsPage,
        ComplaintListPage,
        CourseDetailsPage,
        CourceListPage,
        ChallengeDetailsPage,
        ChallengeListPage,
        LoginPage,
        SignupPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        ShWeb,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
