webpackJsonp([18],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintFilesEditPageModule", function() { return ComplaintFilesEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complaintfilesedit__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComplaintFilesEditPageModule = /** @class */ (function () {
    function ComplaintFilesEditPageModule() {
    }
    ComplaintFilesEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__complaintfilesedit__["a" /* ComplaintFilesEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__complaintfilesedit__["a" /* ComplaintFilesEditPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__complaintfilesedit__["a" /* ComplaintFilesEditPage */]
            ]
        })
    ], ComplaintFilesEditPageModule);
    return ComplaintFilesEditPageModule;
}());

//# sourceMappingURL=complaintfilesedit.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintFilesEditPage; });
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



var ComplaintFilesEditPage = /** @class */ (function () {
    function ComplaintFilesEditPage(navCtrl, navParams, ComplaintFiles) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ComplaintFiles = ComplaintFiles;
        //quejas: any[] = [];
        this.archivo = {};
        //this.usuarioActual = navParams.get("user")
        this.idArchivoActual = navParams.get("id");
        this.quejaActual = navParams.get("queja");
    }
    ComplaintFilesEditPage_1 = ComplaintFilesEditPage;
    ComplaintFilesEditPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ComplaintFiles.getShow({ id: this.idArchivoActual })
            .subscribe(function (data) {
            //this.quejas = data['quejas'];
            _this.archivo = data['archivos'];
            //console.log(this.usuarioActual.id);
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(ComplaintFilesEditPage_1);
            console.error(err);
        });
    };
    // Attempt to login in through our User service
    ComplaintFilesEditPage.prototype.dopatchArchivo = function () {
        var _this = this;
        this.ComplaintFiles.patchArchivo({ id: this.idArchivoActual, descripcion: this.archivo.descripcion, archivo: this.archivo.archivo }).subscribe(function (resp) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push("ComplaintFilesPage", { queja: _this.quejaActual });
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(ComplaintFilesEditPage_1);
            console.error(err);
        });
    };
    ComplaintFilesEditPage = ComplaintFilesEditPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-complaintfilesedit',template:/*ion-inline-start:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\complaintfilesedit\complaintfilesedit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Detalles de Archivo    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Detalles_____Prueba de lectura de campo: {{this.archivo.id}} / {{this.archivo.complaint_user_id}} / {{this.archivo.descripcion}} / {{this.archivo.archivo}}</p>\n\n  <form (submit)="dopatchArchivo()">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>{{ \'DESCRIPCION\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="this.archivo.descripcion" name="descripcion" ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>{{ \'ARCHIVO\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="this.archivo.archivo" name="archivo" ></ion-input>\n      </ion-item>\n      <div padding>\n        <button ion-button color="primary" block>{{ \'GUARDAR\' | translate }}</button>\n      </div>\n    </ion-list>\n  </form>\n\n  <!--button ion-button (click)="irAArchivos()" class="button">Archivos</button-->\n\n</ion-content>\n'/*ion-inline-end:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\complaintfilesedit\complaintfilesedit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* ComplaintFiles */]])
    ], ComplaintFilesEditPage);
    return ComplaintFilesEditPage;
    var ComplaintFilesEditPage_1;
}());

//# sourceMappingURL=complaintfilesedit.js.map

/***/ })

});
//# sourceMappingURL=18.js.map