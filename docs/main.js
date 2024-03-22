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
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["st-home"]], decls: 11, vars: 0, consts: [[1, "home-main"], ["id", "welcome-text-section"], [1, "text-center-sm", "text-center-md"], [1, "explore-btn-section"], ["type", "button", 1, "btn-explore"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: [".home-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  margin-top: 20px;\n}\n\n#welcome-text-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n#welcome-text-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\n\n#welcome-text-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--secondary-color) !important;\n  font-family: var(--barlow-condensed-font);\n  font-weight: 200;\n  letter-spacing: 2px;\n}\n\n#welcome-text-section[_ngcontent-%COMP%]   .space-text[_ngcontent-%COMP%] {\n  font-size: 100px;\n  color: white;\n  font-family: var(--bellefair-font);\n  margin: 0 0 38px;\n  text-transform: uppercase;\n}\n\n#welcome-text-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n  font-weight: 200;\n  margin: 0;\n  padding: 0;\n}\n\n.explore-btn-section[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  text-align: center;\n}\n\n.btn-explore[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--black-color);\n  background-color: var(--main-font-color);\n  border: none;\n  border-radius: 50%;\n  padding: 60px 30px 55px 30px;\n  font-size: 20px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-family: var(--bellefair-font);\n  transition: 0.2s ease-out;\n}\n\n.btn-explore[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 70px rgba(255, 255, 255, 0.2);\n}\n\n@media only screen and (min-width: 767px) {\n  .home-main[_ngcontent-%COMP%] {\n    margin: 80px 130px 0 130px;\n  }\n\n  .explore-btn-section[_ngcontent-%COMP%] {\n    margin-top: 15vh;\n  }\n\n  .btn-explore[_ngcontent-%COMP%] {\n    padding: 80px 40px;\n    font-size: 1.8rem;\n  }\n}\n\n@media only screen and (min-width: 991px) {\n  .home-main[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n    margin: 150px 0 0 130px;\n    justify-content: space-between;\n    align-items: end;\n  }\n\n  #welcome-text-section[_ngcontent-%COMP%] {\n    color: white;\n    width: 31vw;\n    align-items: initial;\n  }\n  #welcome-text-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 28px;\n    font-family: var(--barlow-condensed-font);\n    font-weight: 200;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n  }\n  #welcome-text-section[_ngcontent-%COMP%]   .space-text[_ngcontent-%COMP%] {\n    color: white;\n    font-family: var(--bellefair-font);\n    margin: 0 0 38px;\n    text-transform: uppercase;\n  }\n  #welcome-text-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-family: var(--barlow-font);\n    font-weight: 200;\n    letter-spacing: 2px;\n    margin: 0;\n  }\n\n  .explore-btn-section[_ngcontent-%COMP%] {\n    width: 31vw;\n  }\n\n  .btn-explore[_ngcontent-%COMP%] {\n    padding: 100px 50px;\n    font-size: 2rem;\n  }\n\n  .btn-explore[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 0 70px rgba(255, 255, 255, 0.2);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBREY7O0FBR0U7RUFDRSxjQUFBO0FBREo7O0FBSUU7RUFDRSx3Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBSEo7O0FBTUU7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFKSjs7QUFRQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUFMRjs7QUFRQTtFQUNFLCtDQUFBO0FBTEY7O0FBUUE7RUFFRTtJQUNFLDBCQUFBO0VBTkY7O0VBU0E7SUFDRSxnQkFBQTtFQU5GOztFQVNBO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtFQU5GO0FBQ0Y7O0FBVUE7RUFFRTtJQUNFLDhCQUFBO0lBQ0EsdUJBQUE7SUFDQSw4QkFBQTtJQUNBLGdCQUFBO0VBVEY7O0VBWUE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLG9CQUFBO0VBVEY7RUFXRTtJQUNFLGVBQUE7SUFDQSx5Q0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtFQVRKO0VBWUU7SUFDRSxZQUFBO0lBQ0Esa0NBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0VBVko7RUFhRTtJQUNFLGVBQUE7SUFDQSwrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0VBWEo7O0VBZUE7SUFDRSxXQUFBO0VBWkY7O0VBZUE7SUFDRSxtQkFBQTtJQUNBLGVBQUE7RUFaRjs7RUFlQTtJQUNFLCtDQUFBO0VBWkY7QUFDRiIsImZpbGUiOiJzcmMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmhvbWUtbWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuI3dlbGNvbWUtdGV4dC1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIGgxIHtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gIH1cclxuXHJcbiAgaDQge1xyXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXJsb3ctY29uZGVuc2VkLWZvbnQpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgfVxyXG5cclxuICAuc3BhY2UtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJlbGxlZmFpci1mb250KTtcclxuICAgIG1hcmdpbjogMCAwIDM4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmV4cGxvcmUtYnRuLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLWV4cGxvcmUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiA2MHB4IDMwcHggNTVweCAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LWZhbWlseTogdmFyKC0tYmVsbGVmYWlyLWZvbnQpO1xyXG4gIHRyYW5zaXRpb246IC4ycyBlYXNlLW91dDtcclxufVxyXG5cclxuLmJ0bi1leHBsb3JlOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMCA3MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAuaG9tZS1tYWluIHtcclxuICAgIG1hcmdpbjogODBweCAxMzBweCAwIDEzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmV4cGxvcmUtYnRuLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTV2aDtcclxuICB9XHJcblxyXG4gIC5idG4tZXhwbG9yZSB7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcblxyXG4gIC5ob21lLW1haW4ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxNTBweCAwIDAgMTMwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogZW5kO1xyXG4gIH1cclxuXHJcbiAgI3dlbGNvbWUtdGV4dC1zZWN0aW9uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAzMXZ3O1xyXG4gICAgYWxpZ24taXRlbXM6IGluaXRpYWw7XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXJsb3ctY29uZGVuc2VkLWZvbnQpO1xyXG4gICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcGFjZS10ZXh0IHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LWZhbWlseTogdmFyKC0tYmVsbGVmYWlyLWZvbnQpO1xyXG4gICAgICBtYXJnaW46IDAgMCAzOHB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXJsb3ctZm9udCk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5leHBsb3JlLWJ0bi1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiAzMXZ3O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1leHBsb3JlIHtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuYnRuLWV4cGxvcmU6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgNzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.planet-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.description-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.description-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n  font-weight: lighter;\n}\n\n.planet-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  flex-direction: row;\n}\n\n.planet-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.planet-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-decoration: none;\n  font-family: var(--barlow-condensed-font);\n  font-size: 16px;\n  color: var(--secondary-color);\n  letter-spacing: 2px;\n}\n\n.planet-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: var(--main-font-color);\n}\n\n.planet-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after {\n  transform: scaleX(1);\n  transform-origin: 0;\n  opacity: 1;\n}\n\n.planet-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  display: block;\n  content: \"\";\n  padding-bottom: 5px;\n  border-bottom: 2px solid white;\n  transform: scaleX(0);\n  transition: transform 0.3s ease-in-out;\n  opacity: 0.5;\n}\n\n.planet-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after {\n  transform: scaleX(1);\n  transform-origin: 0;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  overflow: hidden;\n  margin: 30px 0;\n}\n\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60%;\n  padding: 0 20%;\n  transition: 0.2s;\n}\n\n.travel-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.travel-info-distance[_ngcontent-%COMP%], .travel-info-time[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-right: 0;\n}\n\n.travel-info-distance[_ngcontent-%COMP%]   .travel-info-title[_ngcontent-%COMP%], .travel-info-time[_ngcontent-%COMP%]   .travel-info-title[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.travel-info-distance[_ngcontent-%COMP%]   .travel-info-description[_ngcontent-%COMP%], .travel-info-time[_ngcontent-%COMP%]   .travel-info-description[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  width: 100%;\n  margin: 30px 0;\n}\n\n@media only screen and (min-width: 767px) {\n  .title-section[_ngcontent-%COMP%] {\n    align-items: flex-start !important;\n  }\n\n  .carousel[_ngcontent-%COMP%] {\n    margin: 30px 0;\n  }\n  .carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 40% !important;\n    padding: 0 30% !important;\n  }\n\n  .planet-list[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .planet-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n    margin-left: 0;\n  }\n  .planet-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-left: 30px;\n  }\n\n  .travel-info[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-evenly;\n  }\n\n  .description-section[_ngcontent-%COMP%] {\n    margin: 0 80px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .content[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n\n  .title-section-header[_ngcontent-%COMP%] {\n    margin-left: 80px;\n  }\n\n  .title-section[_ngcontent-%COMP%]    > .carousel[_ngcontent-%COMP%], .description-section[_ngcontent-%COMP%] {\n    margin-top: 80px;\n  }\n\n  .description-section[_ngcontent-%COMP%] {\n    width: 72%;\n    align-items: initial;\n    margin-right: 250px;\n  }\n\n  .planet-list[_ngcontent-%COMP%] {\n    justify-content: initial;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    text-align: justify;\n  }\n\n  .travel-info[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n\n  .travel-info-distance[_ngcontent-%COMP%], .travel-info-time[_ngcontent-%COMP%] {\n    width: 100%;\n    align-items: initial;\n  }\n\n  .carousel[_ngcontent-%COMP%] {\n    margin: 30px 0;\n  }\n  .carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60% !important;\n    padding: 0 20% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9kZXN0aW5hdGlvbi9kZXN0aW5hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQURKOztBQUtBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBSUU7RUFDRSxpQkFBQTtBQUZKOztBQUtFO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFLSTtFQUNFLDZCQUFBO0FBSE47O0FBS007RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUhSOztBQU9JO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7QUFMTjs7QUFRSTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7QUFOTjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBUkY7O0FBVUU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBUko7O0FBWUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFURjs7QUFZQTs7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFXRTs7RUFDRSxtQkFBQTtBQVJKOztBQVdFOztFQUNFLG1CQUFBO0FBUko7O0FBWUE7RUFDRSxpREFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBVEY7O0FBWUE7RUFFRTtJQUNFLGtDQUFBO0VBVkY7O0VBYUE7SUFDRSxjQUFBO0VBVkY7RUFZRTtJQUNFLHFCQUFBO0lBQ0EseUJBQUE7RUFWSjs7RUFjQTtJQUNFLHVCQUFBO0VBWEY7RUFjRTtJQUNFLGNBQUE7RUFaSjtFQWVFO0lBQ0UsaUJBQUE7RUFiSjs7RUFpQkE7SUFDRSxtQkFBQTtJQUNBLDZCQUFBO0VBZEY7O0VBaUJBO0lBQ0UsY0FBQTtFQWRGO0FBQ0Y7O0FBaUJBO0VBRUU7SUFDRSxtQkFBQTtFQWhCRjs7RUFtQkE7SUFDRSxpQkFBQTtFQWhCRjs7RUFtQkE7O0lBRUUsZ0JBQUE7RUFoQkY7O0VBb0JBO0lBQ0UsVUFBQTtJQUNBLG9CQUFBO0lBQ0EsbUJBQUE7RUFqQkY7O0VBb0JBO0lBQ0Usd0JBQUE7RUFqQkY7O0VBb0JBO0lBQ0UsbUJBQUE7RUFqQkY7O0VBb0JBO0lBQ0UsOEJBQUE7RUFqQkY7O0VBb0JBOztJQUVFLFdBQUE7SUFDQSxvQkFBQTtFQWpCRjs7RUFvQkE7SUFDRSxjQUFBO0VBakJGO0VBbUJFO0lBQ0UscUJBQUE7SUFDQSx5QkFBQTtFQWpCSjtBQUNGIiwiZmlsZSI6InNyYy9wYWdlcy9kZXN0aW5hdGlvbi9kZXN0aW5hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcclxuQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYW5ldC1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHAge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5wbGFuZXQtbGlzdCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICBsaSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXJsb3ctY29uZGVuc2VkLWZvbnQpO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XHJcblxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyOmFmdGVyIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDMwcHggMDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nOiAwIDIwJTtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICB9XHJcbn1cclxuXHJcbi50cmF2ZWwtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50cmF2ZWwtaW5mby1kaXN0YW5jZSxcclxuLnRyYXZlbC1pbmZvLXRpbWV7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxuXHJcbiAgLnRyYXZlbC1pbmZvLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxuICAudHJhdmVsLWluZm8tZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHRhYmxldC1icmVha3BvaW50KSB7XHJcblxyXG4gIC50aXRsZS1zZWN0aW9uIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwge1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nOiAwIDMwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBsYW5ldC1saXN0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuXHJcbiAgICBsaTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGxpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudHJhdmVsLWluZm8ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiAwIDgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRkZXNrdG9wLWJyZWFrcG9pbnQpIHtcclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB9XHJcblxyXG4gIC50aXRsZS1zZWN0aW9uLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICB9XHJcblxyXG4gIC50aXRsZS1zZWN0aW9uID4gLmNhcm91c2VsLFxyXG4gIC5kZXNjcmlwdGlvbi1zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmRlc2NyaXB0aW9uLXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDcyJTtcclxuICAgIGFsaWduLWl0ZW1zOiBpbml0aWFsO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNTBweDtcclxuICB9XHJcblxyXG4gIC5wbGFuZXQtbGlzdCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGluaXRpYWw7XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB9XHJcblxyXG4gIC50cmF2ZWwtaW5mbyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5cclxuICAudHJhdmVsLWluZm8tZGlzdGFuY2UsXHJcbiAgLnRyYXZlbC1pbmZvLXRpbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogaW5pdGlhbDtcclxuICB9XHJcblxyXG4gIC5jYXJvdXNlbCB7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDAgMjAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */", ".content[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  margin-top: 30px;\n}\n\n.title-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.title-section-header[_ngcontent-%COMP%] {\n  font-family: var(--barlow-condensed-font);\n  letter-spacing: 2.7px;\n}\n\n.title-section-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bolder !important;\n  color: grey;\n  margin-right: 10px;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  overflow: hidden;\n  margin: 30px 0;\n}\n\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60%;\n  padding: 0 20%;\n  transition: 0.2s;\n}\n\n.carousel-buttons[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  opacity: 0.3;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media screen and (min-width: 767px) {\n  .title-section-header[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9wYWdlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UseUNBQUE7RUFDQSxxQkFBQTtBQURGOztBQUdFO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRkY7O0FBSUU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRko7O0FBTUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFJRTtFQUlFLGlCQUFBO0FBTEo7O0FBRUk7RUFDRSxjQUFBO0FBQU47O0FBR0k7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUROOztBQUdNO0VBQ0UsWUFBQTtBQURSOztBQUlNO0VBQ0UsVUFBQTtBQUZSOztBQVFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFRQTtFQUNFO0lBQ0UsZUFBQTtFQUxGO0FBQ0YiLCJmaWxlIjoic3JjL3BhZ2VzL3BhZ2VzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdmFyaWFibGVzXCI7XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi50aXRsZS1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLXNlY3Rpb24taGVhZGVyIHtcclxuICBmb250LWZhbWlseTogdmFyKC0tYmFybG93LWNvbmRlbnNlZC1mb250KTtcclxuICBsZXR0ZXItc3BhY2luZzogMi43cHg7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlciAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDMwcHggMDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nOiAwIDIwJTtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICB9XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1idXR0b25zIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbGkge1xyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG9wYWNpdHk6IDAuMztcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkdGFibGV0LWJyZWFrcG9pbnQpe1xyXG4gIC50aXRsZS1zZWN0aW9uLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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
function CrewComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CrewComponent_li_15_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r2 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectCrewMember($event, i_r2); });
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
        this.douglas = new _model_CrewModel__WEBPACK_IMPORTED_MODULE_1__["CrewModel"]('Commander', 'Douglas Hurley', 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.');
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
CrewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CrewComponent, selectors: [["st-crew"]], decls: 24, vars: 4, consts: [[1, "content"], [1, "title-section"], [1, "title-section-header"], [1, "section-wrapper"], [1, "carousel-wrapper"], [1, "carousel"], ["id", "crew-member-0", "src", "assets/img/crew/image-douglas-hurley.webp", "alt", "Commander image"], ["id", "crew-member-1", "src", "assets/img/crew/image-mark-shuttleworth.webp", "alt", "Mission Specialist image"], ["id", "crew-member-2", "src", "assets/img/crew/image-victor-glover.webp", "alt", "Pilot image"], ["id", "crew-member-3", "src", "assets/img/crew/image-anousheh-ansari.webp", "alt", "Flight Engineer image"], [1, "description-section"], [1, "carousel-buttons"], [4, "ngFor", "ngForOf"], [1, "divider"], [1, "info"], [1, "travel-info-title", "crew-position"], [1, "travel-info-title", "crew-member-name"], [1, "description"], ["type", "button", 3, "ngClass", "click"]], template: function CrewComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CrewComponent_li_15_Template, 3, 3, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.crewMemberList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedCrewMember.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedCrewMember.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedCrewMember.description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".crew[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n\n.crew-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.crew-position[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: grey;\n}\n\n.crew-member-name[_ngcontent-%COMP%] {\n  font-size: 24px;\n  padding: 12px 0;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  align-items: baseline;\n  border-bottom: grey solid 1px;\n  margin: 20px 0 !important;\n}\n\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 0 25%;\n}\n\n.carousel-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.carousel-buttons[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 30px;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 12px;\n  height: 12px;\n  border: none;\n  border-radius: 50%;\n  opacity: 0.3;\n  background-color: white;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.description-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n@media screen and (min-width: 767px) {\n  .info[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n\n  .carousel[_ngcontent-%COMP%] {\n    border-bottom: none;\n  }\n\n  .title-section[_ngcontent-%COMP%] {\n    align-items: initial !important;\n  }\n\n  .carousel-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n\n  .section-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .carousel-buttons[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    margin-bottom: 0;\n  }\n\n  .description-section[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n    margin: 0 130px;\n  }\n}\n\n@media screen and (min-width: 992px) {\n  .title-section-header[_ngcontent-%COMP%] {\n    margin-left: 80px;\n    font-size: 28px;\n  }\n\n  .description-section[_ngcontent-%COMP%] {\n    margin: 0 80px;\n    display: flex;\n    flex-direction: column-reverse;\n    justify-content: center;\n    align-items: flex-start;\n  }\n\n  .crew-position[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n\n  .crew-member-name[_ngcontent-%COMP%] {\n    font-size: 56px;\n  }\n\n  .info[_ngcontent-%COMP%] {\n    align-items: start !important;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    font-size: 18px;\n    text-align: justify;\n  }\n\n  .carousel[_ngcontent-%COMP%] {\n    border-bottom: none;\n    margin: 0 !important;\n  }\n\n  .title-section[_ngcontent-%COMP%] {\n    align-items: initial !important;\n  }\n\n  .carousel-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n\n  .section-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n\n  .carousel-buttons[_ngcontent-%COMP%] {\n    margin-top: 80px;\n    margin-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9jcmV3L2NyZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQURGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FBRkY7O0FBSUU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQUZKOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBSUU7RUFJRSxpQkFBQTtBQUxKOztBQUVJO0VBQ0UsY0FBQTtBQUFOOztBQUdJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBRE47O0FBR007RUFDRSxZQUFBO0FBRFI7O0FBSU07RUFDRSxVQUFBO0FBRlI7O0FBUUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFFRTtJQUNFLGdCQUFBO0VBTkY7O0VBU0E7SUFDRSxtQkFBQTtFQU5GOztFQVNBO0lBQ0UsK0JBQUE7RUFORjs7RUFTQTtJQUNFLDhCQUFBO0VBTkY7O0VBU0E7SUFDRSxhQUFBO0lBQ0EsOEJBQUE7RUFORjs7RUFTQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFORjs7RUFTQTtJQUNFLGFBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQU5GO0FBQ0Y7O0FBU0E7RUFFRTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQVJGOztFQVdBO0lBQ0UsY0FBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtJQUNBLHVCQUFBO0lBQ0EsdUJBQUE7RUFSRjs7RUFXQTtJQUNFLGVBQUE7RUFSRjs7RUFXQTtJQUNFLGVBQUE7RUFSRjs7RUFXQTtJQUNFLDZCQUFBO0VBUkY7O0VBV0E7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUFSRjs7RUFXQTtJQUNFLG1CQUFBO0lBQ0Esb0JBQUE7RUFSRjs7RUFXQTtJQUNFLCtCQUFBO0VBUkY7O0VBV0E7SUFDRSw4QkFBQTtFQVJGOztFQVdBO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0VBUkY7O0VBV0E7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VBUkY7QUFDRiIsImZpbGUiOiJzcmMvcGFnZXMvY3Jldy9jcmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmNyZXcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG59XHJcblxyXG4uY3Jldy1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNyZXctcG9zaXRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLmNyZXctbWVtYmVyLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBwYWRkaW5nOiAxMnB4IDA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCB7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIGJvcmRlci1ib3R0b206IGdyZXkgc29saWQgMXB4O1xyXG4gIG1hcmdpbjogMjBweCAwICFpbXBvcnRhbnQ7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMCAyNSU7XHJcbiAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWwtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1idXR0b25zIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBsaSB7XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuc2VsZWN0ZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkdGFibGV0LWJyZWFrcG9pbnQpIHtcclxuXHJcbiAgLmluZm8ge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4gIC5jYXJvdXNlbCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlLXNlY3Rpb24ge1xyXG4gICAgYWxpZ24taXRlbXM6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jYXJvdXNlbC13cmFwcGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICB9XHJcblxyXG4gIC5jYXJvdXNlbC1idXR0b25zIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMTMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkZGVza3RvcC1icmVha3BvaW50KSB7XHJcblxyXG4gIC50aXRsZS1zZWN0aW9uLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogODBweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbi1zZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMCA4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAuY3Jldy1wb3NpdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG5cclxuICAuY3Jldy1tZW1iZXItbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDU2cHg7XHJcbiAgfVxyXG5cclxuICAuaW5mbyB7XHJcbiAgICBhbGlnbi1pdGVtczogc3RhcnQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIH1cclxuXHJcbiAgLmNhcm91c2VsIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50aXRsZS1zZWN0aW9uIHtcclxuICAgIGFsaWduLWl0ZW1zOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwtd3JhcHBlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwtYnV0dG9ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuIl19 */", ".content[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  margin-top: 30px;\n}\n\n.title-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.title-section-header[_ngcontent-%COMP%] {\n  font-family: var(--barlow-condensed-font);\n  letter-spacing: 2.7px;\n}\n\n.title-section-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bolder !important;\n  color: grey;\n  margin-right: 10px;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  overflow: hidden;\n  margin: 30px 0;\n}\n\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60%;\n  padding: 0 20%;\n  transition: 0.2s;\n}\n\n.carousel-buttons[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  opacity: 0.3;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media screen and (min-width: 767px) {\n  .title-section-header[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9wYWdlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UseUNBQUE7RUFDQSxxQkFBQTtBQURGOztBQUdFO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRkY7O0FBSUU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRko7O0FBTUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFJRTtFQUlFLGlCQUFBO0FBTEo7O0FBRUk7RUFDRSxjQUFBO0FBQU47O0FBR0k7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUROOztBQUdNO0VBQ0UsWUFBQTtBQURSOztBQUlNO0VBQ0UsVUFBQTtBQUZSOztBQVFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFRQTtFQUNFO0lBQ0UsZUFBQTtFQUxGO0FBQ0YiLCJmaWxlIjoic3JjL3BhZ2VzL3BhZ2VzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdmFyaWFibGVzXCI7XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi50aXRsZS1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLXNlY3Rpb24taGVhZGVyIHtcclxuICBmb250LWZhbWlseTogdmFyKC0tYmFybG93LWNvbmRlbnNlZC1mb250KTtcclxuICBsZXR0ZXItc3BhY2luZzogMi43cHg7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlciAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDMwcHggMDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nOiAwIDIwJTtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICB9XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1idXR0b25zIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbGkge1xyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG9wYWNpdHk6IDAuMztcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkdGFibGV0LWJyZWFrcG9pbnQpe1xyXG4gIC50aXRsZS1zZWN0aW9uLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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
function TechnologyComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TechnologyComponent_li_18_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r2 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectTechnology($event, i_r2); });
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
        this.technologyImageBaseClass = '.technology-';
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
        this.selectedTechnology = this.technologyList[index];
        const currentTarget = event.currentTarget;
        currentTarget.classList.add('selected');
        setTimeout(() => {
            document.querySelectorAll(this.technologyImageBaseClass + index).forEach((value, key) => {
                if (value.style.display !== 'none') {
                    value.scrollIntoView({
                        inline: 'start',
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }
            });
        }, 1);
    }
}
TechnologyComponent.ɵfac = function TechnologyComponent_Factory(t) { return new (t || TechnologyComponent)(); };
TechnologyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TechnologyComponent, selectors: [["st-technology"]], decls: 26, vars: 3, consts: [[1, "content", "no-padding"], [1, "title-section-header"], [1, "technology-section-wrapper"], [1, "title-section"], [1, "carousel"], ["src", "assets/img/technology/image-launch-vehicle-landscape.jpg", "alt", "Launch vehicle image", 1, "technology-0", "d-none-lg"], ["src", "assets/img/technology/image-spaceport-landscape.jpg", "alt", "Spaceport image", 1, "technology-1", "d-none-lg"], ["src", "assets/img/technology/image-space-capsule-landscape.jpg", "alt", "Space Capsule image", 1, "technology-2", "d-none-lg"], ["src", "assets/img/technology/image-launch-vehicle-portrait.jpg", "alt", "Launch vehicle image", 1, "technology-0", "d-none-md"], ["src", "assets/img/technology/image-spaceport-portrait.jpg", "alt", "Spaceport image", 1, "technology-1", "d-none-md"], ["src", "assets/img/technology/image-space-capsule-portrait.jpg", "alt", "Space Capsule image", 1, "technology-2", "d-none-md"], [1, "description-section"], [1, "divider"], [1, "info"], [1, "carousel-buttons"], [4, "ngFor", "ngForOf"], [1, "info-wrapper"], [1, "travel-info-title", "subheading-2", "secondary-color-text"], [1, "travel-info-title", "technology-name"], [1, "description"], ["type", "button", 3, "ngClass", "click"]], template: function TechnologyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Space Launch 101");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TechnologyComponent_li_18_Template, 3, 4, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "The termonology is...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.technologyList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedTechnology.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedTechnology.description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".no-padding[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.technology-name[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100% !important;\n  padding: 0 !important;\n  transition: 0.2s;\n}\n\n.d-none-md[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.carousel-buttons[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  color: var(--main-font-color);\n  background-color: transparent;\n  width: 40px;\n  height: 40px;\n  font-family: var(--bellefair-font);\n  border: 0.5px solid #45464f;\n  font-size: 1.2rem;\n  opacity: 1 !important;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--main-font-color);\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  opacity: 1;\n  background-color: var(--main-font-color);\n  color: #0B0D17 !important;\n  border: 0.5px solid var(--main-font-color);\n}\n\n.title-section-header[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  margin-top: 30px;\n}\n\n.description-section[_ngcontent-%COMP%] {\n  padding: 0 30px;\n}\n\n.info-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media only screen and (min-width: 767px) {\n  .no-margin-sm[_ngcontent-%COMP%] {\n    margin: 0 !important;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    padding: 20px 20px;\n  }\n\n  .title-section-header[_ngcontent-%COMP%] {\n    width: auto !important;\n  }\n\n  .carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto !important;\n  }\n\n  .title-section-header[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 60px;\n  }\n\n  .description-section[_ngcontent-%COMP%] {\n    padding: 0 160px !important;\n    margin-left: 50px;\n    margin-right: 50px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  .d-none-lg[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .d-none-md[_ngcontent-%COMP%] {\n    display: initial !important;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    padding: 20px 20px;\n  }\n\n  .carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto !important;\n    padding: 0 30% 0 0 !important;\n  }\n\n  .title-section-header[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 60px;\n  }\n\n  .technology-section-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse !important;\n    align-items: center;\n    height: 70vh;\n  }\n\n  .description-section[_ngcontent-%COMP%] {\n    padding: 0 80px !important;\n  }\n\n  .carousel-buttons[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n    margin: 0;\n    justify-content: space-between;\n    height: 250px;\n  }\n  .carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    margin-bottom: 10px;\n  }\n  .carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n\n  .technology-name[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    text-align: justify;\n  }\n\n  .info[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row !important;\n  }\n\n  .info-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    margin-left: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy90ZWNobm9sb2d5L3RlY2hub2xvZ3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtBQURGOztBQUlBO0VBQ0UsU0FBQTtBQURGOztBQUdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUtBO0VBQ0UsYUFBQTtBQUZGOztBQUtBO0VBQ0UsdUJBQUE7QUFGRjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFHSTtFQUNFLHdDQUFBO0FBRE47O0FBSUk7RUFDRSxVQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtFQUNBLDBDQUFBO0FBRk47O0FBT0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLGVBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFFRTtJQUNFLG9CQUFBO0VBTEY7O0VBUUE7SUFDRSxrQkFBQTtFQUxGOztFQVFBO0lBQ0Usc0JBQUE7RUFMRjs7RUFTRTtJQUNFLHVCQUFBO0VBTko7O0VBVUE7SUFDRSxXQUFBO0lBQ0EsaUJBQUE7RUFQRjs7RUFVQTtJQUNFLDJCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQVBGO0FBQ0Y7O0FBVUE7RUFDRTtJQUNFLGFBQUE7RUFSRjs7RUFXQTtJQUNFLDJCQUFBO0VBUkY7O0VBV0E7SUFDRSxrQkFBQTtFQVJGOztFQVlFO0lBQ0UsdUJBQUE7SUFDQSw2QkFBQTtFQVRKOztFQWFBO0lBQ0UsV0FBQTtJQUNBLGlCQUFBO0VBVkY7O0VBYUE7SUFDRSxhQUFBO0lBQ0Esc0NBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7RUFWRjs7RUFhQTtJQUNFLDBCQUFBO0VBVkY7O0VBYUE7SUFDRSxpQ0FBQTtJQUNBLFNBQUE7SUFDQSw4QkFBQTtJQUNBLGFBQUE7RUFWRjtFQVlFO0lBQ0UseUJBQUE7SUFDQSxtQkFBQTtFQVZKO0VBWUk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQVZOOztFQWVBO0lBQ0UsZUFBQTtFQVpGOztFQWVBO0lBQ0UsbUJBQUE7RUFaRjs7RUFlQTtJQUNFLGFBQUE7SUFDQSw4QkFBQTtFQVpGOztFQWVBO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtJQUNBLGlCQUFBO0VBWkY7QUFDRiIsImZpbGUiOiJzcmMvcGFnZXMvdGVjaG5vbG9neS90ZWNobm9sb2d5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlc1wiO1xyXG5cclxuLm5vLXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRlY2hub2xvZ3ktbmFtZSB7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCB7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgfVxyXG59XHJcblxyXG4uZC1ub25lLW1kIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtYnV0dG9ucyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iZWxsZWZhaXItZm9udCk7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICM0NTQ2NGY7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAmLnNlbGVjdGVkIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1mb250LWNvbG9yKTtcclxuICAgICAgY29sb3I6ICMwQjBEMTcgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRpdGxlLXNlY3Rpb24taGVhZGVyIHtcclxuICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDAgMzBweDtcclxufVxyXG5cclxuLmluZm8td3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHRhYmxldC1icmVha3BvaW50KSB7XHJcblxyXG4gIC5uby1tYXJnaW4tc20ge1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUtc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jYXJvdXNlbCB7XHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aXRsZS1zZWN0aW9uLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMCAxNjBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRkZXNrdG9wLWJyZWFrcG9pbnQpIHtcclxuICAuZC1ub25lLWxnIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZC1ub25lLW1kIHtcclxuICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICB9XHJcblxyXG4gIC5jYXJvdXNlbCB7XHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogMCAzMCUgMCAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGl0bGUtc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICB9XHJcblxyXG4gIC50ZWNobm9sb2d5LXNlY3Rpb24td3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaXB0aW9uLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMCA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwtYnV0dG9ucyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG5cclxuICAgIGxpIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGVjaG5vbG9neS1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIH1cclxuXHJcbiAgLmluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5pbmZvLXdyYXBwZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */", ".content[_ngcontent-%COMP%] {\n  padding: 0 30px;\n  margin-top: 30px;\n}\n\n.title-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.title-section-header[_ngcontent-%COMP%] {\n  font-family: var(--barlow-condensed-font);\n  letter-spacing: 2.7px;\n}\n\n.title-section-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bolder !important;\n  color: grey;\n  margin-right: 10px;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  overflow: hidden;\n  margin: 30px 0;\n}\n\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60%;\n  padding: 0 20%;\n  transition: 0.2s;\n}\n\n.carousel-buttons[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  opacity: 0.3;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n.carousel-buttons[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media screen and (min-width: 767px) {\n  .title-section-header[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9wYWdlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UseUNBQUE7RUFDQSxxQkFBQTtBQURGOztBQUdFO0VBQ0UsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRkY7O0FBSUU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRko7O0FBTUE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFJRTtFQUlFLGlCQUFBO0FBTEo7O0FBRUk7RUFDRSxjQUFBO0FBQU47O0FBR0k7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUROOztBQUdNO0VBQ0UsWUFBQTtBQURSOztBQUlNO0VBQ0UsVUFBQTtBQUZSOztBQVFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFRQTtFQUNFO0lBQ0UsZUFBQTtFQUxGO0FBQ0YiLCJmaWxlIjoic3JjL3BhZ2VzL3BhZ2VzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vdmFyaWFibGVzXCI7XHJcblxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi50aXRsZS1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLXNlY3Rpb24taGVhZGVyIHtcclxuICBmb250LWZhbWlseTogdmFyKC0tYmFybG93LWNvbmRlbnNlZC1mb250KTtcclxuICBsZXR0ZXItc3BhY2luZzogMi43cHg7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlciAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDMwcHggMDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nOiAwIDIwJTtcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuICB9XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1idXR0b25zIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbGkge1xyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG9wYWNpdHk6IDAuMztcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkdGFibGV0LWJyZWFrcG9pbnQpe1xyXG4gIC50aXRsZS1zZWN0aW9uLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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
        const path = paths.slice(-1)[0];
        if (path && path !== 'home') {
            this.htmlBody.classList.add(path);
        }
    }
    onKeydownEsc() {
        this.closeMenu();
    }
    closeMenu() {
        if (document.getElementById('close-menu').offsetParent !== null) {
            this.navMenu.style.display = 'none';
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
        this.closeMenu();
    }
    onClickMenu() {
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
    } }, decls: 34, vars: 10, consts: [[2, "position", "relative", "width", "110px", "height", "48px"], ["type", "button", "aria-label", "Icone voltar home", "title", "Go back home", 1, "home-icon", 3, "routerLink", "click"], [1, "linha-home-menu-wrapper"], ["id", "linha-home-menu"], ["type", "button", "aria-label", "Icone voltar home", "title", "Menu", 1, "menu-icon", 3, "click"], ["id", "nav-menu-list"], ["id", "close-menu"], ["type", "button", 3, "click"], ["href", "javascript:void(0);", "routerLinkActive", "active", 3, "routerLink", "click"], ["href", "javascript:void(0)", "routerLinkActive", "active", 3, "routerLink", "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_4_listener() { return ctx.redirect("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Home icon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_8_listener() { return ctx.onClickMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Menu icon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_12_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "close menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() { return ctx.redirect("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_20_listener() { return ctx.redirect("destination"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Destination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_25_listener() { return ctx.redirect("crew"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_30_listener() { return ctx.redirect("technology"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".home-icon[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 25px 25px 0 25px;\n}\n\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.home-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: none;\n  background-color: transparent;\n  background-image: url('logo.svg');\n  text-indent: -9999px;\n  cursor: pointer;\n}\n\n.menu-icon[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 24px;\n  border: none;\n  background-color: transparent;\n  background-image: url('icon-hamburger.svg');\n  background-repeat: no-repeat;\n  text-indent: -9999px;\n  cursor: pointer;\n}\n\n#nav-menu-list[_ngcontent-%COMP%], #linha-home-menu[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.linha-home-menu-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n\n#nav-menu-list[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100vh;\n  padding: 30px;\n  width: 200px;\n  background-color: rgba(255, 255, 255, 0.04);\n  -webkit-backdrop-filter: blur(50px);\n          backdrop-filter: blur(50px);\n  list-style-type: none;\n  z-index: 1;\n}\n\n#nav-menu-list[_ngcontent-%COMP%]   #close-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n#nav-menu-list[_ngcontent-%COMP%]   #close-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 21px;\n  border: none;\n  background-color: transparent;\n  background-image: url('icon-close.svg');\n  background-repeat: no-repeat;\n  text-indent: -9999px;\n  cursor: pointer;\n}\n\n#nav-menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n\n#nav-menu-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: var(--main-font-color);\n  font-family: var(--barlow-condensed-font);\n  font-weight: 200;\n  letter-spacing: 2px;\n  align-items: end;\n  padding: 14px 0;\n}\n\n@media only screen and (min-width: 767px) {\n  nav[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 0 0 25px;\n  }\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .menu-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #linha-home-menu[_ngcontent-%COMP%] {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n    width: 100%;\n    margin-left: 64px;\n    margin-right: -30px;\n    z-index: 1;\n  }\n\n  #nav-menu-list[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    height: auto;\n    padding: 20px 30px 0 30px;\n    width: auto;\n    -webkit-backdrop-filter: blur(200px);\n            backdrop-filter: blur(200px);\n    list-style-type: none;\n    z-index: 1;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   #close-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    position: relative;\n    display: block;\n    text-decoration: none;\n    text-transform: uppercase;\n    color: var(--main-font-color);\n    font-family: var(--barlow-condensed-font);\n    font-weight: 200;\n    letter-spacing: 2px;\n    align-items: end;\n    padding: 14px 18px 0;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after {\n    display: block;\n    content: \"\";\n    border-bottom: 2px solid var(--main-font-color);\n    padding-bottom: 30px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  #close-menu[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  #linha-home-menu[_ngcontent-%COMP%] {\n    display: initial;\n    position: absolute;\n    right: 0;\n    width: 100%;\n    z-index: 10;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n\n  #nav-menu-list[_ngcontent-%COMP%] {\n    padding: 0 4%;\n    min-width: 715px;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 0 28px;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    display: initial !important;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    text-decoration: none;\n    text-transform: uppercase;\n    color: var(--main-font-color);\n    font-family: var(--barlow-condensed-font);\n    font-weight: 200;\n    letter-spacing: 2px;\n    align-items: end;\n    padding: 28px 28px 0 0 !important;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n    display: block;\n    content: \"\";\n    padding-top: 28px;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5);\n    transform: scaleX(0);\n    transition: transform 0.3s ease-in-out;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after {\n    transform: scaleX(1);\n    transform-origin: 0;\n  }\n  #nav-menu-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after {\n    display: block;\n    content: \"\";\n    padding-top: 0;\n    border-bottom: 2px solid white;\n    transform: scaleX(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FBREY7O0FBR0U7RUFDRSxTQUFBO0FBREo7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTs7RUFFRSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFGRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUFIRjs7QUFLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBSEo7O0FBSUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFGTjs7QUFPSTtFQUNFLGdCQUFBO0FBTE47O0FBU0U7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUEo7O0FBV0E7RUFFRTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsOEJBQUE7SUFDQSxtQkFBQTtFQVRGO0VBV0U7SUFDRSxTQUFBO0VBVEo7O0VBYUE7SUFDRSxhQUFBO0VBVkY7O0VBYUE7SUFDRSxpREFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtFQVZGOztFQWFBO0lBQ0Usa0JBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0lBQ0EsV0FBQTtJQUNBLG9DQUFBO1lBQUEsNEJBQUE7SUFDQSxxQkFBQTtJQUNBLFVBQUE7RUFWRjtFQVlFO0lBQ0UsYUFBQTtFQVZKO0VBY0k7SUFDRSxhQUFBO0VBWk47RUFpQkk7SUFDRSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxxQkFBQTtJQUNBLHlCQUFBO0lBQ0EsNkJBQUE7SUFDQSx5Q0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0VBZk47RUFpQk07SUFDRSxhQUFBO0VBZlI7RUFrQk07SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLCtDQUFBO0lBQ0Esb0JBQUE7RUFoQlI7QUFDRjs7QUFzQkE7RUFFRTtJQUNFLHdCQUFBO0VBckJGOztFQXdCQTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7RUFyQkY7O0VBd0JBO0lBQ0UsZ0JBQUE7RUFyQkY7O0VBd0JBO0lBQ0UsYUFBQTtJQUNBLGdCQUFBO0VBckJGO0VBdUJFO0lBQ0UsZUFBQTtFQXJCSjtFQXNCSTtJQUNFLDJCQUFBO0VBcEJOO0VBd0JFO0lBQ0UsY0FBQTtJQUNBLHFCQUFBO0lBQ0EseUJBQUE7SUFDQSw2QkFBQTtJQUNBLHlDQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUNBQUE7RUF0Qko7RUF5QkU7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsaURBQUE7SUFDQSxvQkFBQTtJQUNBLHNDQUFBO0VBdkJKO0VBMEJFO0lBQ0Usb0JBQUE7SUFDQSxtQkFBQTtFQXhCSjtFQTJCRTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLDhCQUFBO0lBQ0Esb0JBQUE7RUF6Qko7QUFDRiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmhvbWUtaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAyNXB4IDI1cHggMCAyNXB4O1xyXG5cclxuICB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uaG9tZS1pY29uIHtcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn5zcmMvYXNzZXRzL2ltZy9pY29uL2xvZ28uc3ZnXCIpO1xyXG4gIHRleHQtaW5kZW50OiAtOTk5OXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1lbnUtaWNvbiB7XHJcbiAgd2lkdGg6IDIxcHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWcvaWNvbi9pY29uLWhhbWJ1cmdlci5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICB0ZXh0LWluZGVudDogLTk5OTlweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNuYXYtbWVudS1saXN0LFxyXG4jbGluaGEtaG9tZS1tZW51IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubGluaGEtaG9tZS1tZW51LXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbiNuYXYtbWVudS1saXN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCA0JSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDUwcHgpO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB6LWluZGV4OiAxO1xyXG5cclxuICAjY2xvc2UtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMXB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+c3JjL2Fzc2V0cy9pbWcvaWNvbi9pY29uLWNsb3NlLnN2Z1wiKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgdGV4dC1pbmRlbnQ6IC05OTk5cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxpOm50aC1jaGlsZCgyKSB7XHJcbiAgICBhIHtcclxuICAgICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmFybG93LWNvbmRlbnNlZC1mb250KTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcclxuICAgIHBhZGRpbmc6IDE0cHggMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHRhYmxldC1icmVha3BvaW50KSB7XHJcblxyXG4gIG5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAyNXB4O1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1lbnUtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgI2xpbmhhLWhvbWUtbWVudSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNjRweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTMwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgI25hdi1tZW51LWxpc3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweCAwIDMwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMDBweCk7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICNjbG9zZS1tZW51IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgICBhIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBhIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWJhcmxvdy1jb25kZW5zZWQtZm9udCk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgICAgICAgcGFkZGluZzogMTRweCAxOHB4IDA7XHJcblxyXG4gICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY3RpdmU6YWZ0ZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1tYWluLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRkZXNrdG9wLWJyZWFrcG9pbnQpIHtcclxuXHJcbiAgI2Nsb3NlLW1lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgI2xpbmhhLWhvbWUtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxuXHJcbiAgbmF2IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG5cclxuICAjbmF2LW1lbnUtbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAwIDQlO1xyXG4gICAgbWluLXdpZHRoOiA3MTVweDtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMjhweDtcclxuICAgICAgc3Ryb25nIHtcclxuICAgICAgICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgY29sb3I6IHZhcigtLW1haW4tZm9udC1jb2xvcik7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXJsb3ctY29uZGVuc2VkLWZvbnQpO1xyXG4gICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICBhbGlnbi1pdGVtczogZW5kO1xyXG4gICAgICBwYWRkaW5nOiAyOHB4IDI4cHggMCAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgYTphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcGFkZGluZy10b3A6IDI4cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDUwJSk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIGE6aG92ZXI6YWZ0ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICBhLmFjdGl2ZTphZnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
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