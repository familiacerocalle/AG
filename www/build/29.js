webpackJsonp([29],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeUsersActPageModule", function() { return ChallengeUsersActPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__challenge_usersact__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChallengeUsersActPageModule = /** @class */ (function () {
    function ChallengeUsersActPageModule() {
    }
    ChallengeUsersActPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__challenge_usersact__["a" /* ChallengeUsersActPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__challenge_usersact__["a" /* ChallengeUsersActPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__challenge_usersact__["a" /* ChallengeUsersActPage */]
            ]
        })
    ], ChallengeUsersActPageModule);
    return ChallengeUsersActPageModule;
}());

//# sourceMappingURL=challenge_usersact.module.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChallengeUsersActPage; });
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



var ChallengeUsersActPage = /** @class */ (function () {
    function ChallengeUsersActPage(navCtrl, navParams, ChallengeUsers) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ChallengeUsers = ChallengeUsers;
        this.retos = [];
        this.usuarioActual = navParams.get("user");
    }
    ChallengeUsersActPage_1 = ChallengeUsersActPage;
    ChallengeUsersActPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ChallengeUsers.getAct({ userid: this.usuarioActual.id })
            .subscribe(function (data) {
            _this.retos = data['retos'];
            //console.log(this.usuarioActual.id);
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(ChallengeUsersActPage_1);
            console.error(err);
        });
    };
    ChallengeUsersActPage.prototype.dopostFinReto = function (id) {
        var _this = this;
        this.ChallengeUsers.postFinReto({ id: id })
            .subscribe(function (data) {
            _this.retos = data['retos'];
            //console.log(this.usuarioActual.id);
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(ChallengeUsersActPage_1);
            console.error(err);
        });
    };
    ChallengeUsersActPage = ChallengeUsersActPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-challenge_usersact',template:/*ion-inline-start:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\challenge_usersact\challenge_usersact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Retos Actuales    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Actuales_____Prueba de lectura de campo: {{this.usuarioActual.id}} / {{this.usuarioActual.email}} / {{this.usuarioActual.token}}</p>\n\n  <ion-list>\n    <ion-item *ngFor="let reto of retos">\n      <p>IdRegistro: {{reto.id}}, IDReto: {{reto.challenge.id}}, NombreReto: {{reto.challenge.descripcion}}, FechaInicio: {{reto.fechainicio}}, FechaFin: {{reto.fechafin}}</p>\n      <button ion-button (click)="dopostFinReto(reto.id)" class="button">FinalizarRetos</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\challenge_usersact\challenge_usersact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* ChallengeUsers */]])
    ], ChallengeUsersActPage);
    return ChallengeUsersActPage;
    var ChallengeUsersActPage_1;
}());

//# sourceMappingURL=challenge_usersact.js.map

/***/ })

});
//# sourceMappingURL=29.js.map