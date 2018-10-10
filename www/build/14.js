webpackJsonp([14],{

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseUsersActPageModule", function() { return CourseUsersActPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__course_usersact__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CourseUsersActPageModule = /** @class */ (function () {
    function CourseUsersActPageModule() {
    }
    CourseUsersActPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__course_usersact__["a" /* CourseUsersActPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__course_usersact__["a" /* CourseUsersActPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__course_usersact__["a" /* CourseUsersActPage */]
            ]
        })
    ], CourseUsersActPageModule);
    return CourseUsersActPageModule;
}());

//# sourceMappingURL=course_usersact.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseUsersActPage; });
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



var CourseUsersActPage = /** @class */ (function () {
    function CourseUsersActPage(navCtrl, navParams, CourseUsers) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.CourseUsers = CourseUsers;
        this.cursos = [];
        this.usuarioActual = navParams.get("user");
    }
    CourseUsersActPage_1 = CourseUsersActPage;
    CourseUsersActPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.CourseUsers.getAct({ userid: this.usuarioActual.id })
            .subscribe(function (data) {
            _this.cursos = data['cursos'];
            //console.log(this.usuarioActual.id);
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(CourseUsersActPage_1);
            console.error(err);
        });
    };
    CourseUsersActPage.prototype.dopostFinCurso = function (id) {
        var _this = this;
        //this.CourseUsers.postFinCurso({courseid: courseid, userid: this.usuarioActual.id})
        this.CourseUsers.postFinCurso({ id: id })
            .subscribe(function (data) {
            _this.cursos = data['cursos'];
            //console.log(this.usuarioActual.id);
        }, function (err) {
            //this.navCtrl.push(MainPage);
            _this.navCtrl.push(CourseUsersActPage_1);
            console.error(err);
        });
    };
    CourseUsersActPage = CourseUsersActPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-course_usersact',template:/*ion-inline-start:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\course_usersact\course_usersact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Cursos Actuales    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>Actuales_____Prueba de lectura de campo: {{this.usuarioActual.id}} / {{this.usuarioActual.email}} / {{this.usuarioActual.token}}</p>\n\n  <ion-list>\n    <ion-item *ngFor="let curso of cursos">\n      <p>IdRegistro: {{curso.id}}, IDCurso: {{curso.course_id}}, NombreCurso: {{curso.course.nombre}}, FechaInicio: {{curso.fechainicio}}, FechaFin: {{curso.fechafin}}</p>\n      <button ion-button (click)="dopostFinCurso(curso.id)" class="button">FinalizarCurso</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\DocFam\Proyectos\Consulens\Proyectos\Fedesoft\FullStack\007-GryphusApp\GryphusApp\src\pages\course_usersact\course_usersact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers__["e" /* CourseUsers */]])
    ], CourseUsersActPage);
    return CourseUsersActPage;
    var CourseUsersActPage_1;
}());

//# sourceMappingURL=course_usersact.js.map

/***/ })

});
//# sourceMappingURL=14.js.map