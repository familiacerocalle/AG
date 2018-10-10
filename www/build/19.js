webpackJsonp([19],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintFilesDelPageModule", function() { return ComplaintFilesDelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complaintfilesdel__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComplaintFilesDelPageModule = /** @class */ (function () {
    function ComplaintFilesDelPageModule() {
    }
    ComplaintFilesDelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__complaintfilesdel__["a" /* ComplaintFilesDelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__complaintfilesdel__["a" /* ComplaintFilesDelPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__complaintfilesdel__["a" /* ComplaintFilesDelPage */]
            ]
        })
    ], ComplaintFilesDelPageModule);
    return ComplaintFilesDelPageModule;
}());

//# sourceMappingURL=complaintfilesdel.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintFilesDelPage; });
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



var ComplaintFilesDelPage = /** @class */ (function () {
    function ComplaintFilesDelPage(navCtrl, navParams, ComplaintFiles) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ComplaintFiles = ComplaintFiles;
        this.archivos = [];
        this.archivo = {};
        //this.usuarioActual = navParams.get("user")
        this.idArchivoActual = navParams.get("id");
        this.queja = navParams.get("queja");
    }
    ComplaintFilesDelPage_1 = ComplaintFilesDelPage;
    ComplaintFilesDelPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //    this.ComplaintUsers.deleteQueja({id: this.idQuejaActual, withCredentials: true})
        this.ComplaintFiles.deleteArchivo({ id: this.idArchivoActual })
            .subscribe(function (data) {
            _this.archivos = data['archivos'];
            //console.log(this.usuarioActual.id);
            //        this.navCtrl.push("ComplaintFilesPage", {queja: this.queja});
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(ComplaintFilesDelPage_1);
            console.error(err);
        });
    };
    ComplaintFilesDelPage = ComplaintFilesDelPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-complaintfilesdel',template:/*ion-inline-start:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\complaintfilesdel\complaintfilesdel.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Información de borrado de Archivo    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--p>Detalles_____Prueba de lectura de campo: {{this.usuarioActual.id}} / {{this.usuarioActual.email}} / {{this.usuarioActual.token}}</p-->\n  <p>Se ha borrado el archivo</p>\n</ion-content>\n'/*ion-inline-end:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\complaintfilesdel\complaintfilesdel.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* ComplaintFiles */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers__["c" /* ComplaintFiles */]) === "function" && _c || Object])
    ], ComplaintFilesDelPage);
    return ComplaintFilesDelPage;
    var ComplaintFilesDelPage_1, _a, _b, _c;
}());

//# sourceMappingURL=complaintfilesdel.js.map

/***/ })

});
//# sourceMappingURL=19.js.map