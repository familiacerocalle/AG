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
import {HttpModule} from "@angular/http";
import {IonicStorageModule} from "@ionic/storage";
import {HttpClientModule} from "@angular/common/http";
import {ShDbStorage} from "../providers/sh-web/sh_db";
import {ProfilePage} from "../pages/profile/profile";
import {AttachmentComponentPage} from "../pages/attachment-component/attachment-component";
import {AttachmentPopoverPage} from "../pages/attachment-popover/attachment-popover";
import {Camera} from '@ionic-native/camera';
import {PdfViewerModule} from "ng2-pdf-viewer";
import {ComplaintEditPage} from "../pages/complaint-edit/complaint-edit";
import {ComplaintFileEditPage} from "../pages/complaint-file-edit/complaint-file-edit";

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
        SignupPage,
        ProfilePage,
        AttachmentComponentPage,
        AttachmentPopoverPage,
        ComplaintEditPage,
        ComplaintFileEditPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        PdfViewerModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot({
            name: 'gryphus',
            driverOrder: ['sqlite', 'indexeddb', 'websql']
        })
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
        SignupPage,
        ProfilePage,
        AttachmentComponentPage,
        AttachmentPopoverPage,
        ComplaintEditPage,
        ComplaintFileEditPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        ShWeb,
        Camera,
        ShDbStorage,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
