webpackJsonp([1],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdpSheetPageModule", function() { return MdpSheetPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdp_sheet__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MdpSheetPageModule = /** @class */ (function () {
    function MdpSheetPageModule() {
    }
    MdpSheetPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mdp_sheet__["a" /* MdpSheetPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mdp_sheet__["a" /* MdpSheetPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__mdp_sheet__["a" /* MdpSheetPage */]]
        })
    ], MdpSheetPageModule);
    return MdpSheetPageModule;
}());

//# sourceMappingURL=mdp-sheet.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdpSheetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(99);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MdpSheetPage = /** @class */ (function () {
    function MdpSheetPage(navCtrl, navParams, viewCtrl, render, elementRef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.render = render;
        this.elementRef = elementRef;
        this.showContent = true;
        this.config = {
            title: '明细',
            addHearder: false,
            contentHeight: '60%'
        };
        var datas = this.navParams.data;
        this.config = __assign({}, this.config, datas);
        console.log(this.config, datas);
    }
    MdpSheetPage.prototype.ngAfterViewInit = function () {
        this.render.setStyle(this.backdrop.nativeElement, 'height', window.innerHeight + 'px');
        this.render.setStyle(this.backdrop.nativeElement, 'width', window.innerWidth + 'px');
        this.config.addHearder && this.render.setStyle(this.hearder.nativeElement, 'height', 'calc(' + ("" + this.config.contentHeight) + ' + 4.4rem)');
        this.showAnimate = true;
    };
    MdpSheetPage.prototype.close = function (e) {
        var _this = this;
        e && e.stopPropagation();
        this.showAnimate = false;
        setTimeout(function () {
            _this.showContent = false;
            _this.viewCtrl.dismiss();
        }, 100);
    };
    //防止事件冒泡
    MdpSheetPage.prototype.stop = function (e) {
        e.stopPropagation();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('parentDiv'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MdpSheetPage.prototype, "backdrop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('hearder'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MdpSheetPage.prototype, "hearder", void 0);
    MdpSheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mdp-sheet',template:/*ion-inline-start:"/Users/wyh/Documents/workspace/gitWork/mdp-sheet/demo/src/shared/mdp-sheet/mdp-sheet.html"*/'<div #parentDiv class="backdrop" tappable (click)="close(\'\',$event)">\n  <div #hearder class="header" *ngIf="showContent&&config.addHearder" [@slideAnimation]="showAnimate" (click)="stop($event)">\n    <ion-row>\n      <ion-col text-left align-self-center>{{config.title}}</ion-col>\n      <ion-col col-1 align-self-center text-right tappable (click)="close(\'\',$event)">\n        <ion-icon name="ios-close"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class="template" *ngIf="showContent" [@slideAnimation]="showAnimate" (click)="stop($event)">\n    <ng-content></ng-content>\n  </div>\n\n</div>'/*ion-inline-end:"/Users/wyh/Documents/workspace/gitWork/mdp-sheet/demo/src/shared/mdp-sheet/mdp-sheet.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('slideAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* transition */])('* => true', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({ transform: 'translateY(100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(250)
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* transition */])('true => false', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(100),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({ transform: 'translateY(100%)' })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], MdpSheetPage);
    return MdpSheetPage;
}());

//# sourceMappingURL=mdp-sheet.js.map

/***/ })

});
//# sourceMappingURL=1.js.map