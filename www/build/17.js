webpackJsonp([17],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintFilesNewPageModule", function() { return ComplaintFilesNewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complaintfilesnew__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComplaintFilesNewPageModule = /** @class */ (function () {
    function ComplaintFilesNewPageModule() {
    }
    ComplaintFilesNewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__complaintfilesnew__["a" /* ComplaintFilesNewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__complaintfilesnew__["a" /* ComplaintFilesNewPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__complaintfilesnew__["a" /* ComplaintFilesNewPage */]
            ]
        })
    ], ComplaintFilesNewPageModule);
    return ComplaintFilesNewPageModule;
}());

//# sourceMappingURL=complaintfilesnew.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintFilesNewPage; });
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



var ComplaintFilesNewPage = /** @class */ (function () {
    function ComplaintFilesNewPage(navCtrl, navParams, ComplaintFiles) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ComplaintFiles = ComplaintFiles;
        //quejas: any[] = [];
        this.archivo = {};
        this.usuarioActual = navParams.get("user");
        this.queja = navParams.get("queja");
    }
    ComplaintFilesNewPage_1 = ComplaintFilesNewPage;
    ComplaintFilesNewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ComplaintFiles.getNew()
            .subscribe(function (data) {
            //this.quejas = data['quejas'];
            _this.archivo = data['archivos'];
            //console.log(this.usuarioActual.id);
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(ComplaintFilesNewPage_1);
            console.error(err);
        });
    };
    //
    ComplaintFilesNewPage.prototype.dopostArchivo = function () {
        var _this = this;
        this.ComplaintFiles.postArchivo({ complaint_user_id: this.queja.id, descripcion: this.archivo.descripcion, archivo: this.archivo.archivo }).subscribe(function (resp) {
            //this.navCtrl.push(MainPage);
            //this.navCtrl.push(ComplaintUsersDispPage, {user: resp});
            _this.navCtrl.push("ComplaintFilesPage", { queja: _this.queja });
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(ComplaintFilesNewPage_1);
            console.error(err);
        });
    };
    ComplaintFilesNewPage = ComplaintFilesNewPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-complaintfilesnew',template:/*ion-inline-start:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\complaintfilesnew\complaintfilesnew.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Nuevo Archivo de Queja    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--p>Detalles_____Prueba de lectura de campo: {{this.usuarioActual.id}} / {{this.usuarioActual.email}} / {{this.usuarioActual.token}}</p-->\n  <!--p>Detalles_____Prueba de lectura de campo: {{this.quejas.id}} / {{this.quejas.complaint_id}} / {{this.quejas.user_id}} / {{this.quejas.direccion}} / {{this.quejas.comentarios}}</p-->\n  <!--p>NuevaQueja_____Prueba de lectura de campo: {{this.queja.id}} / {{this.queja.complaint_id}} / {{this.queja.user_id}} / {{this.queja.direccion}} / {{this.queja.comentarios}}</p-->\n\n  <form (submit)="dopostArchivo()">\n    <ion-list>\n      <!--\n      <ion-item>\n        <ion-label fixed>{{ \'COMPLAINTID\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="this.queja.complaint_id" name="complaint_id" ></ion-input>\n      </ion-item>\n      -->\n\n      <ion-item>\n        <ion-label fixed>{{ \'DESCRIPCION\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="this.archivo.descripcion" name="descripcion" ></ion-input>\n      </ion-item>\n      <!--\n      <ion-item>\n        <ion-label fixed>{{ \'ARCHIVO\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="this.archivo.archivo" name="archivo" ></ion-input>\n      </ion-item>\n    -->\n      <div padding>\n        <button ion-button color="primary" block>{{ \'GUARDAR\' | translate }}</button>\n      </div>\n    </ion-list>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\complaintfilesnew\complaintfilesnew.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* ComplaintFiles */]])
    ], ComplaintFilesNewPage);
    return ComplaintFilesNewPage;
    var ComplaintFilesNewPage_1;
}());

//# sourceMappingURL=complaintfilesnew.js.map

/***/ })

});
//# sourceMappingURL=17.js.map