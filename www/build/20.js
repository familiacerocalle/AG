webpackJsonp([20],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintFilesPageModule", function() { return ComplaintFilesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complaintfiles__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComplaintFilesPageModule = /** @class */ (function () {
    function ComplaintFilesPageModule() {
    }
    ComplaintFilesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__complaintfiles__["a" /* ComplaintFilesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__complaintfiles__["a" /* ComplaintFilesPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__complaintfiles__["a" /* ComplaintFilesPage */]
            ]
        })
    ], ComplaintFilesPageModule);
    return ComplaintFilesPageModule;
}());

//# sourceMappingURL=complaintfiles.module.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintFilesPage; });
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



var ComplaintFilesPage = /** @class */ (function () {
    function ComplaintFilesPage(navCtrl, navParams, ComplaintFiles) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ComplaintFiles = ComplaintFiles;
        this.archivos = [];
        //this.usuarioActual = navParams.get("user");
        this.quejaActual = navParams.get("queja");
    }
    ComplaintFilesPage_1 = ComplaintFilesPage;
    ComplaintFilesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ComplaintFiles.getIndex({ idqueja: this.quejaActual.id })
            .subscribe(function (data) {
            _this.archivos = data['archivos'];
            //console.log(this.usuarioActual.id);
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(ComplaintFilesPage_1);
            console.error(err);
        });
    };
    ComplaintFilesPage.prototype.dogetEdit = function (id) {
        this.navCtrl.push("ComplaintFilesEditPage", { id: id, queja: this.quejaActual });
    };
    ComplaintFilesPage.prototype.dodeleteArchivo = function (id) {
        this.navCtrl.push("ComplaintFilesDelPage", { id: id, queja: this.quejaActual });
        //this.navCtrl.push("ComplaintFilesDelPage", {id: id});
    };
    /*
    dopostArchivo(id) {
      this.navCtrl.push("ComplaintFilesNewPage", {userid: this.usuarioActual.id});
    }
    */
    ComplaintFilesPage.prototype.dogetNewArchivo = function () {
        this.navCtrl.push("ComplaintFilesNewPage", { queja: this.quejaActual });
    };
    ComplaintFilesPage = ComplaintFilesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-complaintfiles',template:/*ion-inline-start:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\complaintfiles\complaintfiles.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Archivos de Quejas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!--ion-content padding>\n\n  <button ion-button (click)="getHistorial()" class="button">Historial</button>\n\n</ion-content-->\n\n<ion-content padding>\n  <!--p>Archivos_____Prueba de lectura de campo: {{this.usuarioActual.id}} / {{this.usuarioActual.email}} / {{this.usuarioActual.token}}</p-->\n  <p>Archivos_____Prueba de lectura de campo: {{this.quejaActual.id}} / {{this.quejaActual.complaint_id}} / {{this.quejaActual.user_id}} / {{this.quejaActual.direccion}} / {{this.quejaActual.comentarios}}</p>\n\n  <ion-list>\n    <ion-item *ngFor="let archivo of archivos">\n      <p>IdRegistro: {{archivo.id}}, IDQueja/Usuario: {{archivo.complaint_user_id}}, Descripción: {{archivo.descripcion}}, Archivo: {{archivo.archivo}}, FechaCreación: {{archivo.created_at}}</p>\n      <button ion-button (click)="dogetEdit(archivo.id)" class="button">Editar</button>\n      <button ion-button (click)="dodeleteArchivo(archivo.id)" class="button">Eliminar</button>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button (click)="dogetNewArchivo()" class="button">NuevoArchivo</button>\n</ion-content>\n'/*ion-inline-end:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\complaintfiles\complaintfiles.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* ComplaintFiles */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* ComplaintFiles */]) === "function" && _c || Object])
    ], ComplaintFilesPage);
    return ComplaintFilesPage;
    var ComplaintFilesPage_1, _a, _b, _c;
}());

//# sourceMappingURL=complaintfiles.js.map

/***/ })

});
//# sourceMappingURL=20.js.map