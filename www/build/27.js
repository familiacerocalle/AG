webpackJsonp([27],{

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeUsersHistPageModule", function() { return ChallengeUsersHistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__challenge_usershist__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChallengeUsersHistPageModule = /** @class */ (function () {
    function ChallengeUsersHistPageModule() {
    }
    ChallengeUsersHistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__challenge_usershist__["a" /* ChallengeUsersHistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__challenge_usershist__["a" /* ChallengeUsersHistPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__challenge_usershist__["a" /* ChallengeUsersHistPage */]
            ]
        })
    ], ChallengeUsersHistPageModule);
    return ChallengeUsersHistPageModule;
}());

//# sourceMappingURL=challenge_usershist.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallengeUsersHistPage; });
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



var ChallengeUsersHistPage = /** @class */ (function () {
    function ChallengeUsersHistPage(navCtrl, navParams, ChallengeUsers) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ChallengeUsers = ChallengeUsers;
        this.retos = [];
        this.usuarioActual = navParams.get("user");
    }
    ChallengeUsersHistPage_1 = ChallengeUsersHistPage;
    ChallengeUsersHistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ChallengeUsers.getHist({ userid: this.usuarioActual.id })
            .subscribe(function (data) {
            _this.retos = data['retos'];
            //console.log(this.usuarioActual.id);
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(ChallengeUsersHistPage_1);
            console.error(err);
        });
    };
    ChallengeUsersHistPage = ChallengeUsersHistPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-challenge_usershist',template:/*ion-inline-start:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\challenge_usershist\challenge_usershist.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Historial de Retos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Historial_____Prueba de lectura de campo: {{this.usuarioActual.id}} / {{this.usuarioActual.email}} / {{this.usuarioActual.token}}</p>\n\n  <ion-list>\n    <ion-item *ngFor="let reto of retos">\n      <p>IdRegistro: {{reto.id}}, IDReto: {{reto.challenge.id}}, NombreReto: {{reto.challenge.descripcion}}, FechaInicio: {{reto.fechainicio}}, FechaFin: {{reto.fechafin}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\challenge_usershist\challenge_usershist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* ChallengeUsers */]])
    ], ChallengeUsersHistPage);
    return ChallengeUsersHistPage;
    var ChallengeUsersHistPage_1;
}());

//# sourceMappingURL=challenge_usershist.js.map

/***/ })

});
//# sourceMappingURL=27.js.map