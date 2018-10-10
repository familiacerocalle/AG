webpackJsonp([23],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintUsersDispPageModule", function() { return ComplaintUsersDispPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complaint_usersdisp__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComplaintUsersDispPageModule = /** @class */ (function () {
    function ComplaintUsersDispPageModule() {
    }
    ComplaintUsersDispPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__complaint_usersdisp__["a" /* ComplaintUsersDispPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__complaint_usersdisp__["a" /* ComplaintUsersDispPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__complaint_usersdisp__["a" /* ComplaintUsersDispPage */]
            ]
        })
    ], ComplaintUsersDispPageModule);
    return ComplaintUsersDispPageModule;
}());

//# sourceMappingURL=complaint_usersdisp.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintUsersDispPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComplaintUsersDispPage = /** @class */ (function () {
    function ComplaintUsersDispPage(navCtrl, navParams, ComplaintUsers) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ComplaintUsers = ComplaintUsers;
        //quejas: any[] = [];
        this.queja = {};
        //this.usuarioActual = navParams.get("user")
        this.idQuejaActual = navParams.get("id");
    }
    ComplaintUsersDispPage_1 = ComplaintUsersDispPage;
    ComplaintUsersDispPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ComplaintUsers.getShow({ id: this.idQuejaActual })
            .subscribe(function (data) {
            //this.quejas = data['quejas'];
            _this.queja = data['quejas'];
            //console.log(this.usuarioActual.id);
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(ComplaintUsersDispPage_1);
            console.error(err);
        });
    };
    // Attempt to login in through our User service
    ComplaintUsersDispPage.prototype.dopatchQueja = function () {
        var _this = this;
        this.ComplaintUsers.patchQueja({ id: this.idQuejaActual, direccion: this.queja.direccion, comentarios: this.queja.comentarios }).subscribe(function (resp) {
            //this.navCtrl.push(MainPage);
            //this.navCtrl.push(ComplaintUsersDispPage, {user: resp});
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(ComplaintUsersDispPage_1);
            console.error(err);
        });
    };
    ComplaintUsersDispPage.prototype.irAArchivos = function () {
        //this.navCtrl.push("ComplaintFilesPage", {user: this.usuarioActual, queja: this.queja});
        this.navCtrl.push("ComplaintFilesPage", { queja: this.queja });
    };
    ComplaintUsersDispPage = ComplaintUsersDispPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-complaint_usersdisp',template:/*ion-inline-start:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\complaint_usersdisp\complaint_usersdisp.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Detalles de Queja    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--p>Detalles_____Prueba de lectura de campo: {{this.usuarioActual.id}} / {{this.usuarioActual.email}} / {{this.usuarioActual.token}}</p-->\n  <!--p>Detalles_____Prueba de lectura de campo: {{this.quejas.id}} / {{this.quejas.complaint_id}} / {{this.quejas.user_id}} / {{this.quejas.direccion}} / {{this.quejas.comentarios}}</p-->\n  <p>Detalles_____Prueba de lectura de campo: {{this.queja.id}} / {{this.queja.complaint_id}} / {{this.queja.user_id}} / {{this.queja.direccion}} / {{this.queja.comentarios}}</p>\n\n  <form (submit)="dopatchQueja()">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>{{ \'COMENTARIOS\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="this.queja.comentarios" name="comentarios" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>{{ \'DIRECCIÓN\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="this.queja.direccion" name="direccion" ></ion-input>\n      </ion-item>\n      <div padding>\n        <button ion-button color="primary" block>{{ \'GUARDAR\' | translate }}</button>\n      </div>\n    </ion-list>\n  </form>\n\n  <button ion-button (click)="irAArchivos()" class="button">Archivos</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\complaint_usersdisp\complaint_usersdisp.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* ComplaintUsers */]])
    ], ComplaintUsersDispPage);
    return ComplaintUsersDispPage;
    var ComplaintUsersDispPage_1;
}());

//# sourceMappingURL=complaint_usersdisp.js.map

/***/ })

});
//# sourceMappingURL=23.js.map