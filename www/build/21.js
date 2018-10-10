webpackJsonp([21],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintUsersNewPageModule", function() { return ComplaintUsersNewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complaint_usersnew__ = __webpack_require__(375);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComplaintUsersNewPageModule = /** @class */ (function () {
    function ComplaintUsersNewPageModule() {
    }
    ComplaintUsersNewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__complaint_usersnew__["a" /* ComplaintUsersNewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__complaint_usersnew__["a" /* ComplaintUsersNewPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__complaint_usersnew__["a" /* ComplaintUsersNewPage */]
            ]
        })
    ], ComplaintUsersNewPageModule);
    return ComplaintUsersNewPageModule;
}());

//# sourceMappingURL=complaint_usersnew.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintUsersNewPage; });
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



var ComplaintUsersNewPage = /** @class */ (function () {
    function ComplaintUsersNewPage(navCtrl, navParams, ComplaintUsers) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ComplaintUsers = ComplaintUsers;
        //quejas: any[] = [];
        this.queja = {};
        this.usuarioActual = navParams.get("user");
    }
    ComplaintUsersNewPage_1 = ComplaintUsersNewPage;
    ComplaintUsersNewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ComplaintUsers.getNew()
            .subscribe(function (data) {
            //this.quejas = data['quejas'];
            _this.queja = data['quejas'];
            //console.log(this.usuarioActual.id);
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(ComplaintUsersNewPage_1);
            console.error(err);
        });
    };
    //
    ComplaintUsersNewPage.prototype.dopostQueja = function () {
        var _this = this;
        this.ComplaintUsers.postQueja({ user_id: this.usuarioActual.id, complaint_id: this.queja.complaint_id, direccion: this.queja.direccion, comentarios: this.queja.comentarios }).subscribe(function (resp) {
            //this.navCtrl.push(MainPage);
            //this.navCtrl.push(ComplaintUsersDispPage, {user: resp});
            _this.navCtrl.push("ComplaintUsersPage", { user: _this.usuarioActual });
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(ComplaintUsersNewPage_1);
            console.error(err);
        });
    };
    ComplaintUsersNewPage = ComplaintUsersNewPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-complaint_usersnew',template:/*ion-inline-start:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\complaint_usersnew\complaint_usersnew.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Nueva Queja    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--p>Detalles_____Prueba de lectura de campo: {{this.usuarioActual.id}} / {{this.usuarioActual.email}} / {{this.usuarioActual.token}}</p-->\n  <!--p>Detalles_____Prueba de lectura de campo: {{this.quejas.id}} / {{this.quejas.complaint_id}} / {{this.quejas.user_id}} / {{this.quejas.direccion}} / {{this.quejas.comentarios}}</p-->\n  <!--p>NuevaQueja_____Prueba de lectura de campo: {{this.queja.id}} / {{this.queja.complaint_id}} / {{this.queja.user_id}} / {{this.queja.direccion}} / {{this.queja.comentarios}}</p-->\n\n  <form (submit)="dopostQueja()">\n    <ion-list>\n      <!--\n      <ion-item>\n        <ion-label fixed>{{ \'COMPLAINTID\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="this.queja.complaint_id" name="complaint_id" ></ion-input>\n      </ion-item>\n      -->\n      <ion-item>\n          <ion-label fixed>{{ \'COMPLAINTID\' | translate }}</ion-label>\n          <ion-select [(ngModel)]="this.queja.complaint_id" name="complaint_id">\n              <ion-option value=1>Basuras</ion-option>\n              <ion-option value=2>Estado de las vías</ion-option>\n              <ion-option value=3>Transporte público</ion-option>\n              <ion-option value=4>Vendedores ambulantes</ion-option>\n              <ion-option value=5>Seguridad</ion-option>\n          </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>{{ \'COMENTARIOS\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="this.queja.comentarios" name="comentarios" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>{{ \'DIRECCIÓN\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="this.queja.direccion" name="direccion" ></ion-input>\n      </ion-item>\n      <div padding>\n        <button ion-button color="primary" block>{{ \'GUARDAR\' | translate }}</button>\n      </div>\n    </ion-list>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\complaint_usersnew\complaint_usersnew.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* ComplaintUsers */]])
    ], ComplaintUsersNewPage);
    return ComplaintUsersNewPage;
    var ComplaintUsersNewPage_1;
}());

//# sourceMappingURL=complaint_usersnew.js.map

/***/ })

});
//# sourceMappingURL=21.js.map