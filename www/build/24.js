webpackJsonp([24],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintUsersDelPageModule", function() { return ComplaintUsersDelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complaint_usersdel__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComplaintUsersDelPageModule = /** @class */ (function () {
    function ComplaintUsersDelPageModule() {
    }
    ComplaintUsersDelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__complaint_usersdel__["a" /* ComplaintUsersDelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__complaint_usersdel__["a" /* ComplaintUsersDelPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__complaint_usersdel__["a" /* ComplaintUsersDelPage */]
            ]
        })
    ], ComplaintUsersDelPageModule);
    return ComplaintUsersDelPageModule;
}());

//# sourceMappingURL=complaint_usersdel.module.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintUsersDelPage; });
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



var ComplaintUsersDelPage = /** @class */ (function () {
    function ComplaintUsersDelPage(navCtrl, navParams, ComplaintUsers) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ComplaintUsers = ComplaintUsers;
        this.quejas = [];
        this.queja = {};
        //this.usuarioActual = navParams.get("user")
        this.idQuejaActual = navParams.get("id");
    }
    ComplaintUsersDelPage_1 = ComplaintUsersDelPage;
    ComplaintUsersDelPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //    this.ComplaintUsers.deleteQueja({id: this.idQuejaActual, withCredentials: true})
        this.ComplaintUsers.deleteQueja({ id: this.idQuejaActual })
            .subscribe(function (data) {
            _this.quejas = data['quejas'];
            //console.log(this.usuarioActual.id);
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(ComplaintUsersDelPage_1);
            console.error(err);
        });
    };
    ComplaintUsersDelPage = ComplaintUsersDelPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-complaint_usersdel',template:/*ion-inline-start:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\complaint_usersdel\complaint_usersdel.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Información de borrado de Queja    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!--p>Detalles_____Prueba de lectura de campo: {{this.usuarioActual.id}} / {{this.usuarioActual.email}} / {{this.usuarioActual.token}}</p-->\n  <p>Se ha borrado la queja</p>\n</ion-content>\n'/*ion-inline-end:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\complaint_usersdel\complaint_usersdel.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* ComplaintUsers */]])
    ], ComplaintUsersDelPage);
    return ComplaintUsersDelPage;
    var ComplaintUsersDelPage_1;
}());

//# sourceMappingURL=complaint_usersdel.js.map

/***/ })

});
//# sourceMappingURL=24.js.map