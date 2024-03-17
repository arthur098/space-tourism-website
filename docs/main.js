(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+yH8":
/*!**********************************!*\
  !*** ./src/model/PlanetModel.ts ***!
  \**********************************/
/*! exports provided: PlanetModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetModel", function() { return PlanetModel; });
class PlanetModel {
    constructor(name, description, distance, travelTime) {
        this.name = name;
        this.description = description;
        this.distance = distance;
        this.travelTime = travelTime;
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! B:\Workspace\FrontEndMentor\SpaceTourism\space-tourism-website\src\main.ts */"zUnb");


/***/ }),

/***/ "0Fnt":
/*!******************************************!*\
  !*** ./src/pages/home/home.component.ts ***!
  \******************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["st-home"]], decls: 11, vars: 0, consts: [[1, "home-main"], ["id", "welcome-text-section"], [1, "text-center"], [1, "explore-btn-section"], ["type", "button", 1, "btn-explore"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "So, you want to travel to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Explore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".home-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  margin-top: 20px;\n}\n\n#welcome-text-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n#welcome-text-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\n\n#welcome-text-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n  font-family: var(--barlow-condensed-font);\n  font-weight: 200;\n  letter-spacing: 2px;\n}\n\n#welcome-text-section[_ngcontent-%COMP%]   .space-text[_ngcontent-%COMP%] {\n  font-size: 100px;\n  color: white;\n  font-family: var(--bellefair-font);\n  margin: 0 0 38px;\n  text-transform: uppercase;\n}\n\n#welcome-text-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n  font-weight: 200;\n  margin: 0;\n  padding: 0;\n}\n\n.explore-btn-section[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  text-align: center;\n}\n\n.btn-explore[_ngcontent-%COMP%] {\n  color: var(--black-color);\n  background-color: var(--main-font-color);\n  border: none;\n  border-radius: 50%;\n  padding: 60px 30px 55px 30px;\n  font-size: 20px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-family: var(--bellefair-font);\n  transition: 0.2s ease-out;\n}\n\n.btn-explore[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 70px rgba(255, 255, 255, 0.2);\n}\n\n@media only screen and (min-width: 767px) {\n  .home-main[_ngcontent-%COMP%] {\n    margin: 80px 130px 0 130px;\n  }\n\n  .explore-btn-section[_ngcontent-%COMP%] {\n    margin-top: 15vh;\n  }\n\n  .btn-explore[_ngcontent-%COMP%] {\n    border-radius: 50%;\n    padding: 80px 40px;\n    font-size: 1.8rem;\n  }\n}\n\n@media only screen and (min-width: 1025px) {\n  #welcome-text-section[_ngcontent-%COMP%] {\n    float: left;\n    color: white;\n    margin-top: 30vh;\n    margin-left: 9vw;\n    width: 31vw;\n  }\n\n  #welcome-text-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 28px;\n    color: white;\n    font-family: var(--barlow-condensed-font);\n    font-weight: 200;\n    letter-spacing: 2px;\n    margin: 0 0 24px;\n    text-transform: uppercase;\n  }\n\n  #welcome-text-section[_ngcontent-%COMP%]   .space-text[_ngcontent-%COMP%] {\n    font-size: 150px;\n    color: white;\n    font-family: var(--bellefair-font);\n    margin: 0 0 38px;\n    text-transform: uppercase;\n  }\n\n  #welcome-text-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: white;\n    font-family: var(--barlow-font);\n    font-weight: 200;\n    letter-spacing: 2px;\n    margin: 0;\n  }\n\n  .explore-btn-section[_ngcontent-%COMP%] {\n    float: right;\n    width: 31vw;\n    margin-top: 55vh;\n  }\n\n  .btn-explore[_ngcontent-%COMP%] {\n    color: var(--black-color);\n    background-color: var(--main-font-color);\n    border-radius: 50%;\n    padding: 100px 50px;\n    font-size: 2rem;\n    text-decoration: none;\n    text-transform: uppercase;\n    font-family: var(--bellefair-font);\n    transition: 0.2s ease-out;\n  }\n\n  .btn-explore[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 0 70px rgba(255, 255, 255, 0.2);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSw2QkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUU7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFGSjs7QUFNQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsK0NBQUE7QUFIRjs7QUFNQTtFQUVFO0lBQ0UsMEJBQUE7RUFKRjs7RUFPQTtJQUNFLGdCQUFBO0VBSkY7O0VBT0E7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUFKRjtBQUNGOztBQU9BO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0VBTEY7O0VBUUE7SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLHlDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EseUJBQUE7RUFMRjs7RUFRQTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGtDQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtFQUxGOztFQVFBO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSwrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0VBTEY7O0VBUUE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VBTEY7O0VBUUE7SUFDRSx5QkFBQTtJQUNBLHdDQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtJQUNBLHlCQUFBO0lBQ0Esa0NBQUE7SUFDQSx5QkFBQTtFQUxGOztFQVFBO0lBQ0UsK0NBQUE7RUFMRjtBQUNGIiwiZmlsZSI6InNyYy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1tYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4jd2VsY29tZS10ZXh0LXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgaDEge1xyXG4gICAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXJsb3ctY29uZGVuc2VkLWZvbnQpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgfVxyXG5cclxuICAuc3BhY2UtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJlbGxlZmFpci1mb250KTtcclxuICAgIG1hcmdpbjogMCAwIDM4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmV4cGxvcmUtYnRuLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLWV4cGxvcmUge1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBhZGRpbmc6IDYwcHggMzBweCA1NXB4IDMwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWxsZWZhaXItZm9udCk7XHJcbiAgdHJhbnNpdGlvbjogLjJzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uYnRuLWV4cGxvcmU6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDcwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XHJcblxyXG4gIC5ob21lLW1haW4ge1xyXG4gICAgbWFyZ2luOiA4MHB4IDEzMHB4IDAgMTMwcHg7XHJcbiAgfVxyXG5cclxuICAuZXhwbG9yZS1idG4tc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXZoO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1leHBsb3JlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDgwcHggNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI1cHgpIHtcclxuICAjd2VsY29tZS10ZXh0LXNlY3Rpb24ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHZoO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDl2dztcclxuICAgIHdpZHRoOiAzMXZ3O1xyXG4gIH1cclxuXHJcbiAgI3dlbGNvbWUtdGV4dC1zZWN0aW9uIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXJsb3ctY29uZGVuc2VkLWZvbnQpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBtYXJnaW46IDAgMCAyNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcblxyXG4gICN3ZWxjb21lLXRleHQtc2VjdGlvbiAuc3BhY2UtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJlbGxlZmFpci1mb250KTtcclxuICAgIG1hcmdpbjogMCAwIDM4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuXHJcbiAgI3dlbGNvbWUtdGV4dC1zZWN0aW9uIHAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhcmxvdy1mb250KTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmV4cGxvcmUtYnRuLXNlY3Rpb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDMxdnc7XHJcbiAgICBtYXJnaW4tdG9wOiA1NXZoO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1leHBsb3JlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogMTAwcHggNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmVsbGVmYWlyLWZvbnQpO1xyXG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1leHBsb3JlOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDcwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'st-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "2d4d":
/*!********************************************************!*\
  !*** ./src/pages/destination/destination.component.ts ***!
  \********************************************************/
/*! exports provided: DestinationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationComponent", function() { return DestinationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_PlanetModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/PlanetModel */ "+yH8");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "active": a0 }; };
function DestinationComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DestinationComponent_li_13_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r2 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onClick(i_r2, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const planet_r1 = ctx.$implicit;
    const isFirst_r3 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, isFirst_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-image", "#" + planet_r1.name.toLowerCase() + "-img");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](planet_r1.name);
} }
class DestinationComponent {
    ngOnInit() {
        this.moon = new _model_PlanetModel__WEBPACK_IMPORTED_MODULE_1__["PlanetModel"]('Moon', 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.', '384,400', '3 days');
        this.mars = new _model_PlanetModel__WEBPACK_IMPORTED_MODULE_1__["PlanetModel"]('Mars', 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!', '225 mil.', '9 Months');
        this.europa = new _model_PlanetModel__WEBPACK_IMPORTED_MODULE_1__["PlanetModel"]('Europa', 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.', '628 mil. ', '3 years');
        this.titan = new _model_PlanetModel__WEBPACK_IMPORTED_MODULE_1__["PlanetModel"]('TITAN', 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.', '1.6 Bil.', '7 years');
        this.selectedPlanet = this.moon;
        this.planets = [this.moon,
            this.mars,
            this.europa,
            this.titan];
    }
    onClick(index, event) {
        const planetAnchors = document.getElementsByClassName('planet-anchor');
        const currentTarget = event.currentTarget;
        this.selectedPlanet = this.planets[index];
        for (const planetAnchor of Array.from(planetAnchors)) {
            planetAnchor.classList.remove('active');
        }
        currentTarget.classList.add('active');
        document.querySelector(currentTarget.dataset.image).scrollIntoView({
            inline: 'start',
            behavior: 'smooth',
            block: 'nearest'
        });
    }
}
DestinationComponent.ɵfac = function DestinationComponent_Factory(t) { return new (t || DestinationComponent)(); };
DestinationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DestinationComponent, selectors: [["st-destination"]], decls: 26, vars: 5, consts: [[1, "content"], [1, "title-section"], [1, "title-section-header"], [1, "carousel"], ["id", "moon-img", "src", "assets/img/destination/image-moon.png", "alt", "Moon Image"], ["id", "mars-img", "src", "assets/img/destination/image-mars.png", "alt", "Mars Image"], ["id", "europa-img", "src", "assets/img/destination/image-europa.png", "alt", "Europa Image"], ["id", "titan-img", "src", "assets/img/destination/image-titan.png", "alt", "Titan Image"], [1, "description-section"], [1, "planet-list"], [4, "ngFor", "ngForOf"], [3, "innerText"], [1, "description", 3, "innerText"], [1, "divider"], [1, "travel-info"], [1, "travel-info-distance"], [1, "travel-info-title", "subheading-2", "secondary-color-text"], [1, "travel-info-description", 3, "innerText"], [1, "travel-info-time"], ["href", "javascript:void(0);", 1, "planet-anchor", 3, "ngClass", "click"]], template: function DestinationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Pick your Destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DestinationComponent_li_13_Template, 3, 5, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Avg. Distance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Est. Travel Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.planets);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx.selectedPlanet.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx.selectedPlanet.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx.selectedPlanet.distance + " KM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", ctx.selectedPlanet.travelTime);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.planet-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.description-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.description-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  font-weight: lighter;\n}\n\n.planet-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  flex-direction: row;\n}\n\n.planet-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.planet-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-decoration: none;\n  font-family: var(--barlow-condensed-font);\n  font-size: 16px;\n  color: var(--secondary-color);\n  letter-spacing: 2px;\n}\n\n.planet-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--main-font-color);\n}\n\n.planet-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after {\n  transform: scaleX(1);\n  transform-origin: 0;\n  opacity: 1;\n}\n\n.planet-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  display: block;\n  content: \"\";\n  padding-bottom: 5px;\n  border-bottom: 2px solid white;\n  transform: scaleX(0);\n  transition: transform 0.3s ease-in-out;\n  opacity: 0.5;\n}\n\n.planet-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after {\n  transform: scaleX(1);\n  transform-origin: 0;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  overflow: hidden;\n  margin: 30px 0;\n}\n\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60%;\n  padding: 0 20%;\n  transition: 0.2s;\n}\n\n.travel-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.travel-info-distance[_ngcontent-%COMP%], .travel-info-time[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-right: 0;\n}\n\n.travel-info-distance[_ngcontent-%COMP%]   .travel-info-title[_ngcontent-%COMP%], .travel-info-time[_ngcontent-%COMP%]   .travel-info-title[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.travel-info-distance[_ngcontent-%COMP%]   .travel-info-description[_ngcontent-%COMP%], .travel-info-time[_ngcontent-%COMP%]   .travel-info-description[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  width: 100%;\n  margin: 30px 0;\n}\n\n@media only screen and (min-width: 767px) {\n  .title-section[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n  }\n\n  .carousel[_ngcontent-%COMP%] {\n    margin: 30px 0;\n  }\n  .carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40% !important;\n    padding: 0 30% !important;\n  }\n\n  .planet-list[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .planet-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    margin-left: 0;\n  }\n  .planet-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-left: 30px;\n  }\n\n  .travel-info[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-evenly;\n  }\n\n  .description-section[_ngcontent-%COMP%] {\n    margin: 0 80px;\n  }\n}\n\n@media only screen and (min-width: 1025px) {\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n  }\n\n  .content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    margin-top: 5vh;\n    width: 50vw;\n  }\n\n  .planet-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0 0 5vw 10vw;\n  }\n\n  .description-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-family: var(--bellefair-font);\n    font-size: 100px;\n    letter-spacing: 2px;\n    font-weight: lighter;\n    text-transform: uppercase;\n    margin: 0 0 5px 0;\n  }\n\n  .description-section[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-family: var(--barlow-font);\n    font-size: 18px;\n    letter-spacing: 2px;\n    color: var(--main-font-color);\n    font-weight: lighter;\n    width: 50%;\n  }\n\n  .destination-planet-header[_ngcontent-%COMP%] {\n    font-family: var(--barlow-condensed-font);\n    font-size: 28px;\n    text-transform: uppercase;\n    font-weight: lighter;\n    letter-spacing: 2px;\n  }\n\n  .destination-planet-header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    font-weight: bolder !important;\n    color: grey;\n  }\n\n  .planet-list[_ngcontent-%COMP%] {\n    list-style-type: none;\n    padding: 0;\n    display: flex;\n    flex-direction: row;\n    margin-top: 15vh;\n  }\n  .planet-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding-left: 5px;\n  }\n  .planet-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    text-decoration: none;\n    font-family: var(--barlow-condensed-font);\n    font-size: 16px;\n    color: var(--main-font-color);\n    letter-spacing: 2px;\n  }\n  .planet-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after {\n    transform: scaleX(1);\n    transform-origin: 0;\n  }\n  .planet-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n    display: block;\n    content: \"\";\n    padding-bottom: 5px;\n    border-bottom: 2px solid white;\n    transform: scaleX(0);\n    transition: transform 0.3s ease-in-out;\n  }\n  .planet-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after {\n    transform: scaleX(1);\n    transform-origin: 0;\n  }\n\n  .planets[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    max-width: 100vw;\n    overflow: hidden;\n  }\n  .planets[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50%;\n    padding: 0 25%;\n    transition: 0.2s;\n  }\n\n  .travel-info[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n  }\n\n  .travel-info-distance[_ngcontent-%COMP%] {\n    padding-right: 100px;\n  }\n\n  .travel-info-title[_ngcontent-%COMP%] {\n    font-family: var(--barlow-condensed-font) !important;\n    color: var(--main-font-color);\n    font-size: 14px !important;\n    text-transform: uppercase;\n    letter-spacing: 3px;\n    font-weight: lighter;\n    width: 100%;\n  }\n\n  .travel-info-value[_ngcontent-%COMP%] {\n    font-family: var(--bellefair-font) !important;\n    font-size: 28px !important;\n    color: var(--main-font-color);\n    text-transform: uppercase;\n    width: 100%;\n  }\n\n  .divider[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9kZXN0aW5hdGlvbi9kZXN0aW5hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUVFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBR0U7RUFDRSxpQkFBQTtBQURKOztBQUlFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFJSTtFQUNFLDZCQUFBO0FBRk47O0FBSU07RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUZSOztBQU1JO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7QUFKTjs7QUFPSTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7QUFMTjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBUEY7O0FBU0U7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBUEo7O0FBV0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFSRjs7QUFXQTs7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFVRTs7RUFDRSxtQkFBQTtBQVBKOztBQVVFOztFQUNFLG1CQUFBO0FBUEo7O0FBV0E7RUFDRSxpREFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBUkY7O0FBV0E7RUFFRTtJQUNFLGtDQUFBO0VBVEY7O0VBWUE7SUFDRSxjQUFBO0VBVEY7RUFXRTtJQUNFLHFCQUFBO0lBQ0EseUJBQUE7RUFUSjs7RUFhQTtJQUNFLHVCQUFBO0VBVkY7RUFhRTtJQUNFLGNBQUE7RUFYSjtFQWNFO0lBQ0UsaUJBQUE7RUFaSjs7RUFnQkE7SUFDRSxtQkFBQTtJQUNBLDZCQUFBO0VBYkY7O0VBZ0JBO0lBQ0UsY0FBQTtFQWJGO0FBQ0Y7O0FBZ0JBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFQWRGOztFQWlCQTtJQUNFLGVBQUE7SUFDQSxXQUFBO0VBZEY7O0VBaUJBO0lBQ0Usb0JBQUE7RUFkRjs7RUFpQkE7SUFDRSxrQ0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtJQUNBLHlCQUFBO0lBQ0EsaUJBQUE7RUFkRjs7RUFpQkE7SUFDRSwrQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0lBQ0Esb0JBQUE7SUFDQSxVQUFBO0VBZEY7O0VBaUJBO0lBQ0UseUNBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7SUFDQSxvQkFBQTtJQUNBLG1CQUFBO0VBZEY7O0VBaUJBO0lBQ0UsOEJBQUE7SUFDQSxXQUFBO0VBZEY7O0VBaUJBO0lBQ0UscUJBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUFkRjtFQWdCRTtJQUNFLGlCQUFBO0VBZEo7RUFpQkU7SUFDRSx5QkFBQTtJQUNBLHFCQUFBO0lBQ0EseUNBQUE7SUFDQSxlQUFBO0lBQ0EsNkJBQUE7SUFDQSxtQkFBQTtFQWZKO0VBa0JFO0lBQ0Usb0JBQUE7SUFDQSxtQkFBQTtFQWhCSjtFQW1CRTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLG9CQUFBO0lBQ0Esc0NBQUE7RUFqQko7RUFvQkU7SUFDRSxvQkFBQTtJQUNBLG1CQUFBO0VBbEJKOztFQXNCQTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDJCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQW5CRjtFQXFCRTtJQUNFLFVBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUFuQko7O0VBdUJBO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUFwQkY7O0VBd0JBO0lBQ0Usb0JBQUE7RUFyQkY7O0VBd0JBO0lBQ0Usb0RBQUE7SUFDQSw2QkFBQTtJQUNBLDBCQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0lBQ0EsV0FBQTtFQXJCRjs7RUF3QkE7SUFDRSw2Q0FBQTtJQUNBLDBCQUFBO0lBQ0EsNkJBQUE7SUFDQSx5QkFBQTtJQUNBLFdBQUE7RUFyQkY7O0VBd0JBO0lBQ0UsaURBQUE7SUFDQSxVQUFBO0VBckJGO0FBQ0YiLCJmaWxlIjoic3JjL3BhZ2VzL2Rlc3RpbmF0aW9uL2Rlc3RpbmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYW5ldC1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHAge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5wbGFuZXQtbGlzdCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICBsaSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXJsb3ctY29uZGVuc2VkLWZvbnQpO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XHJcblxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyOmFmdGVyIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDMwcHggMDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nOiAwIDIwJTtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICB9XHJcbn1cclxuXHJcbi50cmF2ZWwtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50cmF2ZWwtaW5mby1kaXN0YW5jZSxcclxuLnRyYXZlbC1pbmZvLXRpbWV7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuXHJcbiAgLnRyYXZlbC1pbmZvLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAudHJhdmVsLWluZm8tZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcclxuXHJcbiAgLnRpdGxlLXNlY3Rpb24ge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jYXJvdXNlbCB7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDAgMzAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGxhbmV0LWxpc3Qge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG5cclxuICAgIGxpOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50cmF2ZWwtaW5mbyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpcHRpb24tc2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDAgODBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNXB4KSB7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogNXZoO1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgfVxyXG5cclxuICAucGxhbmV0LXNlY3Rpb24gaDEge1xyXG4gICAgbWFyZ2luOiAwIDAgNXZ3IDEwdnc7XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpcHRpb24tc2VjdGlvbiBoMSB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmVsbGVmYWlyLWZvbnQpO1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW46IDAgMCA1cHggMDtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbi1zZWN0aW9uID4gcCB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmFybG93LWZvbnQpO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmRlc3RpbmF0aW9uLXBsYW5ldC1oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhcmxvdy1jb25kZW5zZWQtZm9udCk7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIH1cclxuXHJcbiAgLmRlc3RpbmF0aW9uLXBsYW5ldC1oZWFkZXIgPiBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXIgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxuXHJcbiAgLnBsYW5ldC1saXN0IHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIG1hcmdpbi10b3A6IDE1dmg7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBmb250LWZhbWlseTogdmFyKC0tYmFybG93LWNvbmRlbnNlZC1mb250KTtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIH1cclxuXHJcbiAgICBhLmFjdGl2ZTphZnRlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGE6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuXHJcbiAgICBhOmhvdmVyOmFmdGVyIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGxhbmV0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMjUlO1xyXG4gICAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudHJhdmVsLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICB9XHJcblxyXG4gIC50cmF2ZWwtaW5mby1kaXN0YW5jZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcclxuICB9XHJcblxyXG4gIC50cmF2ZWwtaW5mby10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmFybG93LWNvbmRlbnNlZC1mb250KSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC50cmF2ZWwtaW5mby12YWx1ZSB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmVsbGVmYWlyLWZvbnQpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmRpdmlkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuIl19 */", ".content[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  margin-top: 30px;\n}\n\n.title-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.title-section-header[_ngcontent-%COMP%] {\n  font-family: var(--barlow-condensed-font);\n  letter-spacing: 2.7px;\n}\n\n.title-section-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bolder !important;\n  color: grey;\n  margin-right: 10px;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  overflow: hidden;\n  margin: 30px 0;\n}\n\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60%;\n  padding: 0 20%;\n  transition: 0.2s;\n}\n\n.carousel-buttons[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  opacity: 0.3;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media screen and (min-width: 767px) {\n  .title-section-header[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9wYWdlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UseUNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUNFO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUY7O0FBRUU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFFRTtFQUlFLGlCQUFBO0FBSEo7O0FBQUk7RUFDRSxjQUFBO0FBRU47O0FBQ0k7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUNOOztBQUNNO0VBQ0UsWUFBQTtBQUNSOztBQUVNO0VBQ0UsVUFBQTtBQUFSOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFO0lBQ0UsZUFBQTtFQUhGO0FBQ0YiLCJmaWxlIjoic3JjL3BhZ2VzL3BhZ2VzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi50aXRsZS1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLXNlY3Rpb24taGVhZGVyIHtcclxuICBmb250LWZhbWlseTogdmFyKC0tYmFybG93LWNvbmRlbnNlZC1mb250KTtcclxuICBsZXR0ZXItc3BhY2luZzogMi43cHg7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlciAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDMwcHggMDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nOiAwIDIwJTtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICB9XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1idXR0b25zIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbGkge1xyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG9wYWNpdHk6IDAuMztcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCl7XHJcbiAgLnRpdGxlLXNlY3Rpb24taGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DestinationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'st-destination',
                templateUrl: './destination.component.html',
                styleUrls: ['./destination.component.scss', '../pages.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BeF3":
/*!******************************************!*\
  !*** ./src/pages/crew/crew.component.ts ***!
  \******************************************/
/*! exports provided: CrewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewComponent", function() { return CrewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_CrewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/CrewModel */ "eVHK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "selected": a0 }; };
function CrewComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CrewComponent_li_14_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r2 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectCrewMember($event, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const isFirst_r3 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, isFirst_r3));
} }
class CrewComponent {
    constructor() {
        this.crewMemberImageBaseId = '#crew-member-';
    }
    ngOnInit() {
        this.douglas = new _model_CrewModel__WEBPACK_IMPORTED_MODULE_1__["CrewModel"]('Commander', 'Douglar Hurley', 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.');
        this.mark = new _model_CrewModel__WEBPACK_IMPORTED_MODULE_1__["CrewModel"]('Mission Specialist', 'Mark Shuttleworth', 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.');
        this.victor = new _model_CrewModel__WEBPACK_IMPORTED_MODULE_1__["CrewModel"]('Pilot', 'Victor Glover', 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ');
        this.anousheh = new _model_CrewModel__WEBPACK_IMPORTED_MODULE_1__["CrewModel"]('Flight engineer', 'Anousheh Ansari', 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ');
        this.selectedCrewMember = this.douglas;
        this.crewMemberList = [this.douglas, this.mark, this.victor, this.anousheh];
    }
    selectCrewMember(event, index) {
        document.querySelectorAll('.carousel-buttons li button').forEach(node => {
            node.classList.remove('selected');
        });
        document.querySelector(this.crewMemberImageBaseId + index).scrollIntoView({
            inline: 'start',
            behavior: 'smooth',
            block: 'nearest'
        });
        this.selectedCrewMember = this.crewMemberList[index];
        const currentTarget = event.currentTarget;
        currentTarget.classList.add('selected');
    }
}
CrewComponent.ɵfac = function CrewComponent_Factory(t) { return new (t || CrewComponent)(); };
CrewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CrewComponent, selectors: [["st-crew"]], decls: 24, vars: 4, consts: [[1, "content"], [1, "title-section"], [1, "title-section-header"], [1, "section-wrapper"], [1, "carousel-wrapper"], [1, "carousel"], ["id", "crew-member-0", "src", "assets/img/crew/image-douglas-hurley.webp", "alt", "Commander image"], ["id", "crew-member-1", "src", "assets/img/crew/image-mark-shuttleworth.webp", "alt", "Mission Specialist image"], ["id", "crew-member-2", "src", "assets/img/crew/image-victor-glover.webp", "alt", "Pilot image"], ["id", "crew-member-3", "src", "assets/img/crew/image-anousheh-ansari.webp", "alt", "Flight Engineer image"], [1, "carousel-buttons"], [4, "ngFor", "ngForOf"], [1, "description-section"], [1, "divider"], [1, "info"], [1, "travel-info-title", "crew-position"], [1, "travel-info-title", "crew-member-name"], [1, "description"], ["type", "button", 3, "ngClass", "click"]], template: function CrewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Meet your crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CrewComponent_li_14_Template, 3, 3, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.crewMemberList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedCrewMember.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedCrewMember.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedCrewMember.description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".crew[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n\n.crew-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.crew-position[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: grey;\n}\n\n.crew-member-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  padding: 12px 0;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  align-items: baseline;\n  border-bottom: grey solid 1px;\n  margin: 20px 0 !important;\n}\n\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 0 25%;\n}\n\n.carousel-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.carousel-buttons[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 30px;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 12px;\n  height: 12px;\n  border: none;\n  border-radius: 50%;\n  opacity: 0.3;\n  background-color: white;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.description-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n@media screen and (min-width: 767px) {\n  .info[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n\n  .carousel[_ngcontent-%COMP%] {\n    border-bottom: none;\n  }\n\n  .title-section[_ngcontent-%COMP%] {\n    align-items: initial !important;\n  }\n\n  .carousel-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n\n  .section-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .description-section[_ngcontent-%COMP%] {\n    margin: 0 130px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9jcmV3L2NyZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBRUU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBRUU7RUFJRSxpQkFBQTtBQUhKOztBQUFJO0VBQ0UsY0FBQTtBQUVOOztBQUNJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBQ047O0FBQ007RUFDRSxZQUFBO0FBQ1I7O0FBRU07RUFDRSxVQUFBO0FBQVI7O0FBTUE7RUFDRSxtQkFBQTtBQUhGOztBQU1BO0VBRUU7SUFDRSxnQkFBQTtFQUpGOztFQU9BO0lBQ0UsbUJBQUE7RUFKRjs7RUFPQTtJQUNFLCtCQUFBO0VBSkY7O0VBT0E7SUFDRSw4QkFBQTtFQUpGOztFQU9BO0lBQ0UsYUFBQTtJQUNBLDhCQUFBO0VBSkY7O0VBT0E7SUFDRSxlQUFBO0VBSkY7QUFDRiIsImZpbGUiOiJzcmMvcGFnZXMvY3Jldy9jcmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZXcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG59XHJcblxyXG4uY3Jldy1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNyZXctcG9zaXRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLmNyZXctbWVtYmVyLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBwYWRkaW5nOiAxMnB4IDA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCB7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIGJvcmRlci1ib3R0b206IGdyZXkgc29saWQgMXB4O1xyXG4gIG1hcmdpbjogMjBweCAwICFpbXBvcnRhbnQ7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMCAyNSU7XHJcbiAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWwtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1idXR0b25zIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBsaSB7XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAuaW5mbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcm91c2VsIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG5cclxuICAudGl0bGUtc2VjdGlvbiB7XHJcbiAgICBhbGlnbi1pdGVtczogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNhcm91c2VsLXdyYXBwZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24td3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiAwIDEzMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */", ".content[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  margin-top: 30px;\n}\n\n.title-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.title-section-header[_ngcontent-%COMP%] {\n  font-family: var(--barlow-condensed-font);\n  letter-spacing: 2.7px;\n}\n\n.title-section-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bolder !important;\n  color: grey;\n  margin-right: 10px;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  overflow: hidden;\n  margin: 30px 0;\n}\n\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60%;\n  padding: 0 20%;\n  transition: 0.2s;\n}\n\n.carousel-buttons[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  opacity: 0.3;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media screen and (min-width: 767px) {\n  .title-section-header[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9wYWdlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UseUNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUNFO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUY7O0FBRUU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFFRTtFQUlFLGlCQUFBO0FBSEo7O0FBQUk7RUFDRSxjQUFBO0FBRU47O0FBQ0k7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUNOOztBQUNNO0VBQ0UsWUFBQTtBQUNSOztBQUVNO0VBQ0UsVUFBQTtBQUFSOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFO0lBQ0UsZUFBQTtFQUhGO0FBQ0YiLCJmaWxlIjoic3JjL3BhZ2VzL3BhZ2VzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi50aXRsZS1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLXNlY3Rpb24taGVhZGVyIHtcclxuICBmb250LWZhbWlseTogdmFyKC0tYmFybG93LWNvbmRlbnNlZC1mb250KTtcclxuICBsZXR0ZXItc3BhY2luZzogMi43cHg7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlciAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDMwcHggMDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nOiAwIDIwJTtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICB9XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1idXR0b25zIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbGkge1xyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG9wYWNpdHk6IDAuMztcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCl7XHJcbiAgLnRpdGxlLXNlY3Rpb24taGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'st-crew',
                templateUrl: './crew.component.html',
                styleUrls: ['./crew.component.scss', '../pages.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "EDKa":
/*!***************************************************!*\
  !*** ./src/pages/technology/technology.module.ts ***!
  \***************************************************/
/*! exports provided: TechnologyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyModule", function() { return TechnologyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _technology_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./technology.component */ "X2zS");
/* harmony import */ var _technology_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./technology-routing.module */ "kQPX");





class TechnologyModule {
}
TechnologyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TechnologyModule });
TechnologyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TechnologyModule_Factory(t) { return new (t || TechnologyModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _technology_routing_module__WEBPACK_IMPORTED_MODULE_3__["TechnologyRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TechnologyModule, { declarations: [_technology_component__WEBPACK_IMPORTED_MODULE_2__["TechnologyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _technology_routing_module__WEBPACK_IMPORTED_MODULE_3__["TechnologyRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TechnologyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_technology_component__WEBPACK_IMPORTED_MODULE_2__["TechnologyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _technology_routing_module__WEBPACK_IMPORTED_MODULE_3__["TechnologyRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "GNEs":
/*!***************************************!*\
  !*** ./src/pages/home/home.module.ts ***!
  \***************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "0Fnt");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "W0bq");





class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "PJCJ":
/*!*****************************************************!*\
  !*** ./src/pages/destination/destination.module.ts ***!
  \*****************************************************/
/*! exports provided: DestinationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationModule", function() { return DestinationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _destination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./destination.component */ "2d4d");
/* harmony import */ var _destination_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./destination-routing.module */ "rGEs");





class DestinationModule {
}
DestinationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DestinationModule });
DestinationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DestinationModule_Factory(t) { return new (t || DestinationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _destination_routing_module__WEBPACK_IMPORTED_MODULE_3__["DestinationRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DestinationModule, { declarations: [_destination_component__WEBPACK_IMPORTED_MODULE_2__["DestinationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _destination_routing_module__WEBPACK_IMPORTED_MODULE_3__["DestinationRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DestinationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_destination_component__WEBPACK_IMPORTED_MODULE_2__["DestinationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _destination_routing_module__WEBPACK_IMPORTED_MODULE_3__["DestinationRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "PUDU":
/*!************************************************!*\
  !*** ./src/components/header/header.module.ts ***!
  \************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "jA7Z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class HeaderModule {
}
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HeaderModule_Factory(t) { return new (t || HeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
                exports: [
                    _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header.component */ "jA7Z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'space-tourism';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["st-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "st-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'st-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "W0bq":
/*!***********************************************!*\
  !*** ./src/pages/home/home-routing.module.ts ***!
  \***********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "0Fnt");





const routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "X2zS":
/*!******************************************************!*\
  !*** ./src/pages/technology/technology.component.ts ***!
  \******************************************************/
/*! exports provided: TechnologyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyComponent", function() { return TechnologyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_TechnologyModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/TechnologyModel */ "t5o1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "selected": a0 }; };
function TechnologyComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechnologyComponent_li_11_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r2 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectTechnology($event, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const isFirst_r3 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, isFirst_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
} }
class TechnologyComponent {
    constructor() {
        this.technologyImageBaseId = '#technology-';
    }
    ngOnInit() {
        this.launchVehicle = new _model_TechnologyModel__WEBPACK_IMPORTED_MODULE_1__["TechnologyModel"]('LAUNCH VEHICLE', 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!');
        this.spacePort = new _model_TechnologyModel__WEBPACK_IMPORTED_MODULE_1__["TechnologyModel"]('SPACEPORT', 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.');
        this.spaceCapsule = new _model_TechnologyModel__WEBPACK_IMPORTED_MODULE_1__["TechnologyModel"]('SPACE CAPSULE', 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.');
        this.selectedTechnology = this.launchVehicle;
        this.technologyList = [this.launchVehicle, this.spacePort, this.spaceCapsule];
    }
    selectTechnology(event, index) {
        document.querySelectorAll('.carousel-buttons li button').forEach(node => {
            node.classList.remove('selected');
        });
        document.querySelector(this.technologyImageBaseId + index).scrollIntoView({
            inline: 'start',
            behavior: 'smooth',
            block: 'nearest'
        });
        this.selectedTechnology = this.technologyList[index];
        const currentTarget = event.currentTarget;
        currentTarget.classList.add('selected');
    }
}
TechnologyComponent.ɵfac = function TechnologyComponent_Factory(t) { return new (t || TechnologyComponent)(); };
TechnologyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TechnologyComponent, selectors: [["st-technology"]], decls: 21, vars: 3, consts: [[1, "content", "no-padding"], [1, "title-section"], [1, "title-section-header"], [1, "carousel"], ["id", "technology-0", "src", "assets/img/technology/image-launch-vehicle-landscape.jpg", "alt", "Launch vehicle image"], ["id", "technology-1", "src", "assets/img/technology/image-spaceport-landscape.jpg", "alt", "Spaceport image"], ["id", "technology-2", "src", "assets/img/technology/image-space-capsule-landscape.jpg", "alt", "Space Capsule image"], [1, "carousel-buttons"], [4, "ngFor", "ngForOf"], [1, "description-section", "content"], [1, "divider"], [1, "info"], [1, "travel-info-title", "subheading-2", "secondary-color-text"], [1, "travel-info-title", "technology-name"], [1, "description"], ["type", "button", 3, "ngClass", "click"]], template: function TechnologyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Space Launch 101");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TechnologyComponent_li_11_Template, 3, 4, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The termonology is...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.technologyList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedTechnology.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedTechnology.description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".no-padding[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.technology-name[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100% !important;\n  padding: 0 !important;\n  transition: 0.2s;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  color: var(--main-font-color);\n  background-color: transparent;\n  width: 40px;\n  height: 40px;\n  font-family: var(--bellefair-font);\n  border: 0.5px solid #45464f;\n  font-size: 1.2rem;\n  opacity: 1 !important;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--main-font-color);\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  opacity: 1;\n  background-color: var(--main-font-color);\n  color: #0B0D17 !important;\n  border: 0.5px solid var(--main-font-color);\n}\n\n@media only screen and (min-width: 767px) {\n  .content[_ngcontent-%COMP%] {\n    padding: 20px 20px;\n  }\n\n  .carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto !important;\n  }\n\n  .title-section-header[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 60px;\n  }\n\n  .description-section[_ngcontent-%COMP%] {\n    padding: 0 160px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy90ZWNobm9sb2d5L3RlY2hub2xvZ3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtBQUFGOztBQUVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUtJO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUZOOztBQUlNO0VBQ0Usd0NBQUE7QUFGUjs7QUFLTTtFQUNFLFVBQUE7RUFDQSx3Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsMENBQUE7QUFIUjs7QUFTQTtFQUVFO0lBQ0Usa0JBQUE7RUFQRjs7RUFXRTtJQUNFLHVCQUFBO0VBUko7O0VBWUE7SUFDRSxXQUFBO0lBQ0EsaUJBQUE7RUFURjs7RUFZQTtJQUNFLDJCQUFBO0VBVEY7QUFDRiIsImZpbGUiOiJzcmMvcGFnZXMvdGVjaG5vbG9neS90ZWNobm9sb2d5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uby1wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZWNobm9sb2d5LW5hbWUge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gIH1cclxufVxyXG4uY2Fyb3VzZWwtYnV0dG9ucyB7XHJcbiAgbGkge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBjb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWxsZWZhaXItZm9udCk7XHJcbiAgICAgIGJvcmRlcjogMC41cHggc29saWQgIzQ1NDY0ZjtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tZm9udC1jb2xvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcclxuICAgICAgICBjb2xvcjogIzBCMEQxNyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwge1xyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGl0bGUtc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbi1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDAgMTYwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */", ".content[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  margin-top: 30px;\n}\n\n.title-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.title-section-header[_ngcontent-%COMP%] {\n  font-family: var(--barlow-condensed-font);\n  letter-spacing: 2.7px;\n}\n\n.title-section-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bolder !important;\n  color: grey;\n  margin-right: 10px;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  overflow: hidden;\n  margin: 30px 0;\n}\n\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60%;\n  padding: 0 20%;\n  transition: 0.2s;\n}\n\n.carousel-buttons[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  opacity: 0.3;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media screen and (min-width: 767px) {\n  .title-section-header[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9wYWdlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UseUNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUNFO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUY7O0FBRUU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFFRTtFQUlFLGlCQUFBO0FBSEo7O0FBQUk7RUFDRSxjQUFBO0FBRU47O0FBQ0k7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUNOOztBQUNNO0VBQ0UsWUFBQTtBQUNSOztBQUVNO0VBQ0UsVUFBQTtBQUFSOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFO0lBQ0UsZUFBQTtFQUhGO0FBQ0YiLCJmaWxlIjoic3JjL3BhZ2VzL3BhZ2VzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi50aXRsZS1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLXNlY3Rpb24taGVhZGVyIHtcclxuICBmb250LWZhbWlseTogdmFyKC0tYmFybG93LWNvbmRlbnNlZC1mb250KTtcclxuICBsZXR0ZXItc3BhY2luZzogMi43cHg7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlciAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDMwcHggMDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nOiAwIDIwJTtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICB9XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1idXR0b25zIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbGkge1xyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG9wYWNpdHk6IDAuMztcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCl7XHJcbiAgLnRpdGxlLXNlY3Rpb24taGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TechnologyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'st-technology',
                templateUrl: './technology.component.html',
                styleUrls: ['./technology.component.scss', '../pages.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header/header.module */ "PUDU");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "eVHK":
/*!********************************!*\
  !*** ./src/model/CrewModel.ts ***!
  \********************************/
/*! exports provided: CrewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewModel", function() { return CrewModel; });
class CrewModel {
    constructor(role, name, description) {
        this.role = role;
        this.name = name;
        this.description = description;
    }
}


/***/ }),

/***/ "gyQ/":
/*!***********************************************!*\
  !*** ./src/pages/crew/crew-routing.module.ts ***!
  \***********************************************/
/*! exports provided: CrewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewRoutingModule", function() { return CrewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _crew_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crew.component */ "BeF3");





const routes = [
    { path: '', component: _crew_component__WEBPACK_IMPORTED_MODULE_2__["CrewComponent"] }
];
class CrewRoutingModule {
}
CrewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CrewRoutingModule });
CrewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CrewRoutingModule_Factory(t) { return new (t || CrewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CrewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jA7Z":
/*!***************************************************!*\
  !*** ./src/components/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/destination"]; };
const _c2 = function () { return ["/crew"]; };
const _c3 = function () { return ["/technology"]; };
class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.navMenu = document.querySelector('#nav-menu-list');
        this.htmlBody = document.body;
        const paths = window.location.pathname.split('/');
        const firstPath = paths.splice(1, 2)[0];
        if (firstPath !== 'home') {
            this.htmlBody.classList.add(firstPath);
        }
    }
    onKeydownEsc() {
        this.closeMenu();
    }
    closeMenu() {
        if (document.getElementById('#close-menu').style.display !== 'none') {
            this.navMenu.style.display = 'none';
            // this.navMenu.style.width = '0';
            // this.navMenu.style.padding = '0';
            this.htmlBody.style.overflow = '';
        }
    }
    redirect(redirectTo) {
        if (redirectTo !== 'home') {
            this.htmlBody.removeAttribute('class');
            this.htmlBody.classList.add(redirectTo);
        }
        else {
            this.htmlBody.removeAttribute('class');
        }
        // this.closeMenu();
    }
    onClickMenu() {
        // this.navMenu.style.width = '200px';
        // this.navMenu.style.padding = '30px';
        if (this.navMenu.style.display === 'block') {
            this.htmlBody.style.overflow = '';
            this.navMenu.style.display = 'none';
        }
        else {
            this.navMenu.style.display = 'block';
            this.htmlBody.style.overflow = 'hidden';
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["st-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function HeaderComponent_keydown_escape_HostBindingHandler() { return ctx.onKeydownEsc(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 32, vars: 10, consts: [["type", "button", "aria-label", "Icone voltar home", "title", "Go back home", 1, "home-icon", 3, "routerLink", "click"], ["id", "linha-home-menu"], ["type", "button", "aria-label", "Icone voltar home", "title", "Menu", 1, "menu-icon", 3, "click"], ["id", "nav-menu-list"], ["id", "close-menu"], ["type", "button", 3, "click"], ["href", "javascript:void(0);", "routerLinkActive", "active", 3, "routerLink", "click"], ["href", "javascript:void(0)", "routerLinkActive", "active", 3, "routerLink", "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() { return ctx.redirect("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Home icon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_6_listener() { return ctx.onClickMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Menu icon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_10_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "close menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_13_listener() { return ctx.redirect("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_18_listener() { return ctx.redirect("destination"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_23_listener() { return ctx.redirect("crew"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_28_listener() { return ctx.redirect("technology"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 25px 25px 0 25px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.home-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: none;\n  background-color: transparent;\n  background-image: url('logo.svg');\n  text-indent: -9999px;\n  cursor: pointer;\n}\n.menu-icon[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 24px;\n  border: none;\n  background-color: transparent;\n  background-image: url('icon-hamburger.svg');\n  background-repeat: no-repeat;\n  text-indent: -9999px;\n  cursor: pointer;\n}\n#nav-menu-list[_ngcontent-%COMP%], #linha-home-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n#nav-menu-list[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100vh;\n  padding: 30px;\n  width: 200px;\n  background-color: rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(50px);\n          backdrop-filter: blur(50px);\n  list-style-type: none;\n  z-index: 1;\n}\n#nav-menu-list[_ngcontent-%COMP%]   #close-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n#nav-menu-list[_ngcontent-%COMP%]   #close-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 21px;\n  border: none;\n  background-color: transparent;\n  background-image: url('icon-close.svg');\n  background-repeat: no-repeat;\n  text-indent: -9999px;\n  cursor: pointer;\n}\n#nav-menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n#nav-menu-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: var(--main-font-color);\n  font-family: var(--barlow-condensed-font);\n  font-weight: 200;\n  letter-spacing: 2px;\n  align-items: end;\n  padding: 14px 0;\n}\n@media only screen and (min-width: 767px) {\n  nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 0 0 25px;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .menu-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #linha-home-menu[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n    width: 100%;\n    margin-left: 64px;\n    margin-right: -30px;\n    z-index: 1;\n  }\n\n  #nav-menu-list[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    height: auto;\n    padding: 20px 30px 0 30px;\n    width: auto;\n    -webkit-backdrop-filter: blur(200px);\n            backdrop-filter: blur(200px);\n    list-style-type: none;\n    z-index: 1;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   #close-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    position: relative;\n    display: block;\n    text-decoration: none;\n    text-transform: uppercase;\n    color: var(--main-font-color);\n    font-family: var(--barlow-condensed-font);\n    font-weight: 200;\n    letter-spacing: 2px;\n    align-items: end;\n    padding: 14px 18px 0;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after {\n    display: block;\n    content: \"\";\n    border-bottom: 2px solid var(--main-font-color);\n    padding-bottom: 30px;\n  }\n}\n@media only screen and (min-width: 1025px) {\n  #linha-home-menu[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n    width: 100%;\n    margin-left: 64px;\n    margin-right: -30px;\n    z-index: 1;\n  }\n\n  #nav-menu-list[_ngcontent-%COMP%] {\n    float: right;\n    -webkit-backdrop-filter: blur(200px);\n            backdrop-filter: blur(200px);\n    list-style-type: none;\n    display: flex;\n    color: var(--main-font-color);\n    padding: 0 4%;\n    width: 150vw;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 0 28px;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    text-decoration: none;\n    text-transform: uppercase;\n    color: var(--main-font-color);\n    font-family: var(--barlow-condensed-font);\n    font-weight: 200;\n    letter-spacing: 2px;\n    align-items: end;\n    padding: 28px 0 0 0;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n    display: block;\n    content: \"\";\n    padding-top: 28px;\n    border-bottom: 2px solid white;\n    transform: scaleX(0);\n    transition: transform 0.3s ease-in-out;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after {\n    transform: scaleX(1);\n    transform-origin: 0;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after {\n    display: block;\n    content: \"\";\n    padding-top: 28px;\n    border-bottom: 2px solid white;\n    transform: scaleX(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNFO0VBQ0UsU0FBQTtBQUNKO0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsMkNBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUFGO0FBR0E7O0VBRUUsYUFBQTtBQUFGO0FBSUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBREo7QUFFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUFOO0FBS0k7RUFDRSxnQkFBQTtBQUhOO0FBT0U7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBTEo7QUFTQTtFQUVFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0VBUEY7RUFTRTtJQUNFLFNBQUE7RUFQSjs7RUFXQTtJQUNFLGFBQUE7RUFSRjs7RUFXQTtJQUNFLGlEQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0VBUkY7O0VBV0E7SUFDRSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxXQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtJQUNBLHFCQUFBO0lBQ0EsVUFBQTtFQVJGO0VBVUU7SUFDRSxhQUFBO0VBUko7RUFZSTtJQUNFLGFBQUE7RUFWTjtFQWVJO0lBQ0Usa0JBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSx5QkFBQTtJQUNBLDZCQUFBO0lBQ0EseUNBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtFQWJOO0VBZU07SUFDRSxhQUFBO0VBYlI7RUFnQk07SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLCtDQUFBO0lBQ0Esb0JBQUE7RUFkUjtBQUNGO0FBb0JBO0VBRUU7SUFDRSxpREFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtFQW5CRjs7RUFzQkE7SUFDRSxZQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtJQUNBLHFCQUFBO0lBQ0EsYUFBQTtJQUNBLDZCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7RUFuQkY7RUFxQkU7SUFDRSxlQUFBO0VBbkJKO0VBc0JFO0lBQ0UsY0FBQTtJQUNBLHFCQUFBO0lBQ0EseUJBQUE7SUFDQSw2QkFBQTtJQUNBLHlDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7RUFwQko7RUF1QkU7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsOEJBQUE7SUFDQSxvQkFBQTtJQUNBLHNDQUFBO0VBckJKO0VBd0JFO0lBQ0Usb0JBQUE7SUFDQSxtQkFBQTtFQXRCSjtFQXlCRTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7SUFDQSw4QkFBQTtJQUNBLG9CQUFBO0VBdkJKO0FBQ0YiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDI1cHggMjVweCAwIDI1cHg7XHJcblxyXG4gIHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi5ob21lLWljb24ge1xyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvaW1nL2ljb24vbG9nby5zdmdcIik7XHJcbiAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWVudS1pY29uIHtcclxuICB3aWR0aDogMjFweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn5zcmMvYXNzZXRzL2ltZy9pY29uL2ljb24taGFtYnVyZ2VyLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHRleHQtaW5kZW50OiAtOTk5OXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI25hdi1tZW51LWxpc3QsXHJcbiNsaW5oYS1ob21lLW1lbnUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4jbmF2LW1lbnUtbGlzdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgNCUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1MHB4KTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgei1pbmRleDogMTtcclxuXHJcbiAgI2Nsb3NlLW1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvaW1nL2ljb24vaWNvbi1jbG9zZS5zdmdcIik7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIHRleHQtaW5kZW50OiAtOTk5OXB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgYSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhcmxvdy1jb25kZW5zZWQtZm9udCk7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XHJcblxyXG4gIG5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAyNXB4O1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1lbnUtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgI2xpbmhhLWhvbWUtbWVudSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNjRweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTMwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgI25hdi1tZW51LWxpc3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweCAwIDMwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMDBweCk7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICNjbG9zZS1tZW51IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgICBhIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBhIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJhcmxvdy1jb25kZW5zZWQtZm9udCk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgICAgICAgcGFkZGluZzogMTRweCAxOHB4IDA7XHJcblxyXG4gICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjVweCkge1xyXG5cclxuICAjbGluaGEtaG9tZS1tZW51IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2NHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMzBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuICAjbmF2LW1lbnUtbGlzdCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjAwcHgpO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogMCA0JTtcclxuICAgIHdpZHRoOiAxNTB2dztcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMjhweDtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXJsb3ctY29uZGVuc2VkLWZvbnQpO1xyXG4gICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICBhbGlnbi1pdGVtczogZW5kO1xyXG4gICAgICBwYWRkaW5nOiAyOHB4IDAgMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGE6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyOHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIGE6aG92ZXI6YWZ0ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICBhLmFjdGl2ZTphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcGFkZGluZy10b3A6IDI4cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'st-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { onKeydownEsc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:keydown.escape']
        }] }); })();


/***/ }),

/***/ "kQPX":
/*!***********************************************************!*\
  !*** ./src/pages/technology/technology-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TechnologyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyRoutingModule", function() { return TechnologyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _technology_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./technology.component */ "X2zS");





const routes = [
    { path: '', component: _technology_component__WEBPACK_IMPORTED_MODULE_2__["TechnologyComponent"] }
];
class TechnologyRoutingModule {
}
TechnologyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TechnologyRoutingModule });
TechnologyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TechnologyRoutingModule_Factory(t) { return new (t || TechnologyRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TechnologyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TechnologyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "rGEs":
/*!*************************************************************!*\
  !*** ./src/pages/destination/destination-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DestinationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationRoutingModule", function() { return DestinationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _destination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./destination.component */ "2d4d");





const routes = [
    { path: '', component: _destination_component__WEBPACK_IMPORTED_MODULE_2__["DestinationComponent"] }
];
class DestinationRoutingModule {
}
DestinationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DestinationRoutingModule });
DestinationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DestinationRoutingModule_Factory(t) { return new (t || DestinationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DestinationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DestinationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "t5o1":
/*!**************************************!*\
  !*** ./src/model/TechnologyModel.ts ***!
  \**************************************/
/*! exports provided: TechnologyModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyModel", function() { return TechnologyModel; });
class TechnologyModel {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_destination_destination_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/destination/destination.module */ "PJCJ");
/* harmony import */ var _pages_home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/home/home.module */ "GNEs");
/* harmony import */ var _pages_crew_crew_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/crew/crew.module */ "zFts");
/* harmony import */ var _pages_technology_technology_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/technology/technology.module */ "EDKa");








const routes = [
    { path: '',
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: () => _pages_home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"] },
            { path: 'destination', loadChildren: () => _pages_destination_destination_module__WEBPACK_IMPORTED_MODULE_2__["DestinationModule"] },
            { path: 'crew', loadChildren: () => _pages_crew_crew_module__WEBPACK_IMPORTED_MODULE_4__["CrewModule"] },
            { path: 'technology', loadChildren: () => _pages_technology_technology_module__WEBPACK_IMPORTED_MODULE_5__["TechnologyModule"] }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zFts":
/*!***************************************!*\
  !*** ./src/pages/crew/crew.module.ts ***!
  \***************************************/
/*! exports provided: CrewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewModule", function() { return CrewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _crew_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crew.component */ "BeF3");
/* harmony import */ var _crew_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crew-routing.module */ "gyQ/");





class CrewModule {
}
CrewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CrewModule });
CrewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CrewModule_Factory(t) { return new (t || CrewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _crew_routing_module__WEBPACK_IMPORTED_MODULE_3__["CrewRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CrewModule, { declarations: [_crew_component__WEBPACK_IMPORTED_MODULE_2__["CrewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _crew_routing_module__WEBPACK_IMPORTED_MODULE_3__["CrewRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_crew_component__WEBPACK_IMPORTED_MODULE_2__["CrewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _crew_routing_module__WEBPACK_IMPORTED_MODULE_3__["CrewRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map