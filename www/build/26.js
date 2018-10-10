webpackJsonp([26],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintUsersPageModule", function() { return ComplaintUsersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complaint_users__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComplaintUsersPageModule = /** @class */ (function () {
    function ComplaintUsersPageModule() {
    }
    ComplaintUsersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__complaint_users__["a" /* ComplaintUsersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__complaint_users__["a" /* ComplaintUsersPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__complaint_users__["a" /* ComplaintUsersPage */]
            ]
        })
    ], ComplaintUsersPageModule);
    return ComplaintUsersPageModule;
}());

//# sourceMappingURL=complaint_users.module.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintUsersPage; });
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



var ComplaintUsersPage = /** @class */ (function () {
    function ComplaintUsersPage(navCtrl, navParams, ComplaintUsers) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ComplaintUsers = ComplaintUsers;
        this.quejas = [];
        this.usuarioActual = navParams.get("user");
    }
    ComplaintUsersPage_1 = ComplaintUsersPage;
    /*  getHistorial() {
        this.navCtrl.push("ComplaintUsersHistPage", {user: this.usuarioActual});
      }
    */
    ComplaintUsersPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ComplaintUsers.getIndex({ userid: this.usuarioActual.id })
            .subscribe(function (data) {
            _this.quejas = data['quejas'];
            //console.log(this.usuarioActual.id);
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(ComplaintUsersPage_1);
            console.error(err);
        });
    };
    ComplaintUsersPage.prototype.dogetShow = function (id) {
        this.navCtrl.push("ComplaintUsersDispPage", { id: id });
    };
    ComplaintUsersPage.prototype.dodeleteQueja = function (id) {
        this.navCtrl.push("ComplaintUsersDelPage", { id: id });
    };
    /*
    dopostQueja(id) {
      this.navCtrl.push("ComplaintUsersNewPage", {userid: this.usuarioActual.id});
    }
    */
    ComplaintUsersPage.prototype.dogetNewQueja = function () {
        this.navCtrl.push("ComplaintUsersNewPage", { user: this.usuarioActual });
    };
    ComplaintUsersPage = ComplaintUsersPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-complaint_users',template:/*ion-inline-start:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\complaint_users\complaint_users.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Mis Quejas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!--ion-content padding>\n\n  <button ion-button (click)="getHistorial()" class="button">Historial</button>\n\n</ion-content-->\n\n<ion-content padding>\n  <p>Historial_____Prueba de lectura de campo: {{this.usuarioActual.id}} / {{this.usuarioActual.email}} / {{this.usuarioActual.token}}</p>\n\n  <ion-list>\n    <ion-item *ngFor="let queja of quejas">\n      <p>IdRegistro: {{queja.id}}, IDQueja: {{queja.complaint_id}}, NombreQueja: {{queja.complaint.descripcion}}, FechaCreación: {{queja.created_at}}</p>\n      <button ion-button (click)="dogetShow(queja.id)" class="button">Editar</button>\n      <!--button ion-button (click)="dopatchQueja(queja.id)" class="button">Editar</button-->\n      <button ion-button (click)="dodeleteQueja(queja.id)" class="button">Eliminar</button>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button (click)="dogetNewQueja()" class="button">NuevaQueja</button>\n</ion-content>\n\n<!--button ion-button (click)="dopostNuevaQueja(this.usuarioActual.id)" class="button">NuevaQueja</button-->\n'/*ion-inline-end:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\complaint_users\complaint_users.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["d" /* ComplaintUsers */]])
    ], ComplaintUsersPage);
    return ComplaintUsersPage;
    var ComplaintUsersPage_1;
}());

//# sourceMappingURL=complaint_users.js.map

/***/ })

});
//# sourceMappingURL=26.js.map