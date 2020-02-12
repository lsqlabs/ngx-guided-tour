(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height: 120vh;\">\n  <div class=\"jumbotron text-center\">\n      <h1>\n          <span class=\"demo-title\">ngx-guided-tour Demo</span>\n      </h1>\n  </div>\n\n  <div height=\"400\" class=\"center-content\">\n      <div>\n          Guided tour is a great way to introduce your users to new features or remind them how to use exisiting features. Hover your mouse over the orb above to start the tour.\n          <br/>\n          <br/>\n          Orbs are optional, If not set or set to false the tour will just start.\n      </div>\n  </div>\n\n  <br/>\n  <br/>\n\n  <div class=\"center-content\">\n      <button (click)=\"restartTour()\">\n          Restart Tour\n      </button>\n  </div>\n\n  <br/>\n  <br/>\n\n  <div class=\"center-content\">\n      <span class=\"tour-middle-content\">\n          Click restart to start the tour again.\n          <br/>\n          <br/>\n          There are multiple features to correctly position and caclulate scrolling on your tours.\n      </span>\n  </div>\n\n  <br/><br/>\n  <div class=\"center-content\">\n\n  </div>\n\n  <br/><br/>\n</div>\n\n<div class=\"center-content\">\n  <span class=\"tour-scroll\">\n      This content is on the bottom of the page so that the tour is forced to scroll to it.\n  </span>\n</div>\n\n<ngx-guided-tour></ngx-guided-tour>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./projects/ngx-guided-tour/src/lib/guided-tour.component.scss":
/*!*********************************************************************!*\
  !*** ./projects/ngx-guided-tour/src/lib/guided-tour.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ngx-guided-tour .guided-tour-user-input-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: block;\n  height: 100%;\n  width: 100%;\n  max-height: 100vh;\n  text-align: center;\n  opacity: 0; }\n\nngx-guided-tour .guided-tour-spotlight-overlay {\n  position: fixed;\n  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.7), 0 0 1.5rem rgba(0, 0, 0, 0.5); }\n\nngx-guided-tour .tour-orb {\n  position: fixed;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%; }\n\nngx-guided-tour .tour-orb .tour-orb-ring {\n    width: 35px;\n    height: 35px;\n    position: relative;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    -webkit-animation: pulse 2s linear infinite;\n            animation: pulse 2s linear infinite; }\n\nngx-guided-tour .tour-orb .tour-orb-ring:after {\n      content: '';\n      display: inline-block;\n      height: 100%;\n      width: 100%;\n      border-radius: 50%; }\n\n@-webkit-keyframes pulse {\n  from {\n    -webkit-transform: translate(-50%, -50%) scale(0.45);\n            transform: translate(-50%, -50%) scale(0.45);\n    opacity: 1.0; }\n  to {\n    -webkit-transform: translate(-50%, -50%) scale(1);\n            transform: translate(-50%, -50%) scale(1);\n    opacity: 0.0; } }\n\n@keyframes pulse {\n  from {\n    -webkit-transform: translate(-50%, -50%) scale(0.45);\n            transform: translate(-50%, -50%) scale(0.45);\n    opacity: 1.0; }\n  to {\n    -webkit-transform: translate(-50%, -50%) scale(1);\n            transform: translate(-50%, -50%) scale(1);\n    opacity: 0.0; } }\n\nngx-guided-tour .tour-step {\n  position: fixed; }\n\nngx-guided-tour .tour-step.page-tour-step {\n    max-width: 400px;\n    width: 50%;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n\nngx-guided-tour .tour-step.tour-bottom .tour-arrow::before, ngx-guided-tour .tour-step.tour-bottom-right .tour-arrow::before, ngx-guided-tour .tour-step.tour-bottom-left .tour-arrow::before {\n    position: absolute; }\n\nngx-guided-tour .tour-step.tour-bottom .tour-block, ngx-guided-tour .tour-step.tour-bottom-right .tour-block, ngx-guided-tour .tour-step.tour-bottom-left .tour-block {\n    margin-top: 10px; }\n\nngx-guided-tour .tour-step.tour-top, ngx-guided-tour .tour-step.tour-top-right, ngx-guided-tour .tour-step.tour-top-left {\n    margin-bottom: 10px; }\n\nngx-guided-tour .tour-step.tour-top .tour-arrow::before, ngx-guided-tour .tour-step.tour-top-right .tour-arrow::before, ngx-guided-tour .tour-step.tour-top-left .tour-arrow::before {\n      position: absolute;\n      bottom: 0; }\n\nngx-guided-tour .tour-step.tour-top .tour-block, ngx-guided-tour .tour-step.tour-top-right .tour-block, ngx-guided-tour .tour-step.tour-top-left .tour-block {\n      margin-bottom: 10px; }\n\nngx-guided-tour .tour-step.tour-bottom .tour-arrow::before, ngx-guided-tour .tour-step.tour-top .tour-arrow::before {\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    left: 50%; }\n\nngx-guided-tour .tour-step.tour-bottom-right .tour-arrow::before, ngx-guided-tour .tour-step.tour-top-right .tour-arrow::before {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    left: calc(100% - 5px); }\n\nngx-guided-tour .tour-step.tour-bottom-left .tour-arrow::before, ngx-guided-tour .tour-step.tour-top-left .tour-arrow::before {\n    left: 5px; }\n\nngx-guided-tour .tour-step.tour-left .tour-arrow::before {\n    position: absolute;\n    left: 100%;\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    top: 5px; }\n\nngx-guided-tour .tour-step.tour-left .tour-block {\n    margin-right: 10px; }\n\nngx-guided-tour .tour-step.tour-right .tour-arrow::before {\n    position: absolute;\n    left: 0;\n    top: 5px; }\n\nngx-guided-tour .tour-step.tour-right .tour-block {\n    margin-left: 10px; }\n\nngx-guided-tour .tour-step .tour-block {\n    padding: 15px 25px; }\n\nngx-guided-tour .tour-step .tour-progress-indicator {\n    padding-bottom: 15px; }\n\nngx-guided-tour .tour-step .tour-title {\n    font-weight: bold !important;\n    padding-bottom: 20px; }\n\nngx-guided-tour .tour-step h3.tour-title {\n    font-size: 20px; }\n\nngx-guided-tour .tour-step h2.tour-title {\n    font-size: 30px; }\n\nngx-guided-tour .tour-step .tour-content {\n    min-height: 80px;\n    padding-bottom: 30px;\n    font-size: 15px; }\n\nngx-guided-tour .tour-step .tour-buttons {\n    overflow: hidden; }\n\nngx-guided-tour .tour-step .tour-buttons button.link-button {\n      padding-left: 0;\n      font-size: 15px;\n      font-weight: bold;\n      max-width: none !important;\n      cursor: pointer;\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      border: 1px solid transparent;\n      line-height: 1.5;\n      background-color: transparent;\n      position: relative;\n      outline: none;\n      padding: 0 15px;\n      -webkit-appearance: button; }\n\nngx-guided-tour .tour-step .tour-buttons button.skip-button.link-button {\n      padding-left: 0;\n      border-left: 0; }\n\nngx-guided-tour .tour-step .tour-buttons .back-button {\n      float: right; }\n\nngx-guided-tour .tour-step .tour-buttons .next-button {\n      cursor: pointer;\n      border-radius: 1px;\n      float: right;\n      font-size: 14px;\n      border: none;\n      outline: none;\n      padding-left: 10px;\n      padding-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ybXVzay9jb2RlL25neC1ndWlkZWQtdG91ci9wcm9qZWN0cy9uZ3gtZ3VpZGVkLXRvdXIvc3JjL2xpYi9ndWlkZWQtdG91ci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVNLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQVZoQjtFQWNNLGVBQWU7RUFDZiwwRUFBa0UsRUFBQTs7QUFmeEU7RUFtQk0sZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBdEJ4QjtJQXlCVSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsMkNBQW1DO1lBQW5DLG1DQUFtQyxFQUFBOztBQS9CN0M7TUFrQ2MsV0FBVztNQUNYLHFCQUFxQjtNQUNyQixZQUFZO01BQ1osV0FBVztNQUNYLGtCQUFrQixFQUFBOztBQUkxQjtFQUNJO0lBQ0ksb0RBQTRDO1lBQTVDLDRDQUE0QztJQUM1QyxZQUFZLEVBQUE7RUFFaEI7SUFDSSxpREFBeUM7WUFBekMseUNBQXlDO0lBQ3pDLFlBQVksRUFBQSxFQUFBOztBQVBwQjtFQUNJO0lBQ0ksb0RBQTRDO1lBQTVDLDRDQUE0QztJQUM1QyxZQUFZLEVBQUE7RUFFaEI7SUFDSSxpREFBeUM7WUFBekMseUNBQXlDO0lBQ3pDLFlBQVksRUFBQSxFQUFBOztBQWpEMUI7RUF1RE0sZUFBZSxFQUFBOztBQXZEckI7SUF5RFUsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0lBQ1QsUUFBUTtJQUNSLHdDQUFnQztZQUFoQyxnQ0FBZ0MsRUFBQTs7QUE3RDFDO0lBaUVjLGtCQUFrQixFQUFBOztBQWpFaEM7SUFvRWMsZ0JBQWdCLEVBQUE7O0FBcEU5QjtJQXlFVSxtQkFBbUIsRUFBQTs7QUF6RTdCO01BNEVjLGtCQUFrQjtNQUNsQixTQUFTLEVBQUE7O0FBN0V2QjtNQWdGYyxtQkFBbUIsRUFBQTs7QUFoRmpDO0lBc0ZjLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsU0FBUyxFQUFBOztBQXZGdkI7SUE2RmMsb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixzQkFBc0IsRUFBQTs7QUE5RnBDO0lBb0djLFNBQVUsRUFBQTs7QUFwR3hCO0lBMEdjLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixRQUFRLEVBQUE7O0FBN0d0QjtJQWdIYyxrQkFBa0IsRUFBQTs7QUFoSGhDO0lBc0hjLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUSxFQUFBOztBQXhIdEI7SUEySGMsaUJBQWlCLEVBQUE7O0FBM0gvQjtJQWdJVSxrQkFBa0IsRUFBQTs7QUFoSTVCO0lBb0lVLG9CQUFvQixFQUFBOztBQXBJOUI7SUF3SVUsNEJBQTRCO0lBQzVCLG9CQUFvQixFQUFBOztBQXpJOUI7SUE2SVUsZUFBZSxFQUFBOztBQTdJekI7SUFnSlUsZUFBZSxFQUFBOztBQWhKekI7SUFvSlUsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixlQUFlLEVBQUE7O0FBdEp6QjtJQTBKVSxnQkFBZ0IsRUFBQTs7QUExSjFCO01BNkpjLGVBQWU7TUFDZixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLDBCQUEwQjtNQUMxQixlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixzQkFBc0I7TUFDdEIsNkJBQTZCO01BQzdCLGdCQUFnQjtNQUNoQiw2QkFBNkI7TUFDN0Isa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixlQUFlO01BQ2YsMEJBQTBCLEVBQUE7O0FBM0t4QztNQStLYyxlQUFlO01BQ2YsY0FBYyxFQUFBOztBQWhMNUI7TUFvTGMsWUFBWSxFQUFBOztBQXBMMUI7TUF3TGMsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osZUFBZTtNQUNmLFlBQVk7TUFDWixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLG1CQUFtQixFQUFBIiwiZmlsZSI6InByb2plY3RzL25neC1ndWlkZWQtdG91ci9zcmMvbGliL2d1aWRlZC10b3VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmd4LWd1aWRlZC10b3VyIHtcbiAgLmd1aWRlZC10b3VyLXVzZXItaW5wdXQtbWFzayB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIC5ndWlkZWQtdG91ci1zcG90bGlnaHQtb3ZlcmxheSB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCA5OTk5cHggcmdiYSgwLDAsMCwuNyksIDAgMCAxLjVyZW0gcmdiYSgwLDAsMCwuNSk7XG4gIH1cblxuICAudG91ci1vcmIge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgIC50b3VyLW9yYi1yaW5nIHtcbiAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICBhbmltYXRpb246IHB1bHNlIDJzIGxpbmVhciBpbmZpbml0ZTtcblxuICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHB1bHNlIHtcbiAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC40NSk7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDEuMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC4wO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIC50b3VyLXN0ZXAge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgJi5wYWdlLXRvdXItc3RlcCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxuICAgICAgfVxuICAgICAgJi50b3VyLWJvdHRvbSwgJi50b3VyLWJvdHRvbS1yaWdodCwgJi50b3VyLWJvdHRvbS1sZWZ0IHtcbiAgICAgICAgICAudG91ci1hcnJvdzo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG91ci1ibG9jayB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnRvdXItdG9wLCAmLnRvdXItdG9wLXJpZ2h0LCAmLnRvdXItdG9wLWxlZnQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgICAudG91ci1hcnJvdzo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b3VyLWJsb2NrIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYudG91ci1ib3R0b20gLCAmLnRvdXItdG9wIHtcbiAgICAgICAgICAudG91ci1hcnJvdzo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnRvdXItYm90dG9tLXJpZ2h0LCAmLnRvdXItdG9wLXJpZ2h0IHtcbiAgICAgICAgICAudG91ci1hcnJvdzo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAgICAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gNXB4KTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYudG91ci1ib3R0b20tbGVmdCwgJi50b3VyLXRvcC1sZWZ0IHtcbiAgICAgICAgICAudG91ci1hcnJvdzo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgbGVmdDogIDVweDtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYudG91ci1sZWZ0IHtcbiAgICAgICAgICAudG91ci1hcnJvdzo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvdXItYmxvY2sge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnRvdXItcmlnaHQge1xuICAgICAgICAgIC50b3VyLWFycm93OjpiZWZvcmUge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG91ci1ibG9jayB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRvdXItYmxvY2sge1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgICAgIH1cblxuICAgICAgLnRvdXItcHJvZ3Jlc3MtaW5kaWNhdG9yIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgIH1cblxuICAgICAgLnRvdXItdGl0bGUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIGgzLnRvdXItdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICAgIGgyLnRvdXItdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIH1cblxuICAgICAgLnRvdXItY29udGVudCB7XG4gICAgICAgICAgbWluLWhlaWdodDogODBweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG5cbiAgICAgIC50b3VyLWJ1dHRvbnMge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IC8vIGNsZWFyZml4XG5cbiAgICAgICAgICBidXR0b24ubGluay1idXR0b24ge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnV0dG9uLnNraXAtYnV0dG9uLmxpbmstYnV0dG9uIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmFjay1idXR0b24ge1xuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5leHQtYnV0dG9uIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./projects/ngx-guided-tour/src/lib/guided-tour.component.ts":
/*!*******************************************************************!*\
  !*** ./projects/ngx-guided-tour/src/lib/guided-tour.component.ts ***!
  \*******************************************************************/
/*! exports provided: GuidedTourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidedTourComponent", function() { return GuidedTourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guided-tour.constants */ "./projects/ngx-guided-tour/src/lib/guided-tour.constants.ts");
/* harmony import */ var _guided_tour_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guided-tour.service */ "./projects/ngx-guided-tour/src/lib/guided-tour.service.ts");
/* harmony import */ var _windowref_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./windowref.service */ "./projects/ngx-guided-tour/src/lib/windowref.service.ts");







var GuidedTourComponent = /** @class */ (function () {
    function GuidedTourComponent(guidedTourService, windowRef, dom) {
        this.guidedTourService = guidedTourService;
        this.windowRef = windowRef;
        this.dom = dom;
        this.topOfPageAdjustment = 0;
        this.tourStepWidth = 300;
        this.minimalTourStepWidth = 200;
        this.skipText = 'Skip';
        this.nextText = 'Next';
        this.doneText = 'Done';
        this.closeText = 'Close';
        this.backText = 'Back';
        this.progressIndicatorLocation = _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorLocation"].InsideNextButton;
        this.progressIndicator = undefined;
        this.highlightPadding = 4;
        this.currentTourStep = null;
        this.selectedElementRect = null;
        this.isOrbShowing = false;
        this.progressIndicatorLocations = _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["ProgressIndicatorLocation"];
    }
    Object.defineProperty(GuidedTourComponent.prototype, "maxWidthAdjustmentForTourStep", {
        get: function () {
            return this.tourStepWidth - this.minimalTourStepWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "widthAdjustmentForScreenBound", {
        get: function () {
            if (!this.tourStep) {
                return 0;
            }
            var adjustment = 0;
            if (this.calculatedLeftPosition < 0) {
                adjustment = -this.calculatedLeftPosition;
            }
            if (this.calculatedLeftPosition > this.windowRef.nativeWindow.innerWidth - this.tourStepWidth) {
                adjustment = this.calculatedLeftPosition - (this.windowRef.nativeWindow.innerWidth - this.tourStepWidth);
            }
            return Math.min(this.maxWidthAdjustmentForTourStep, adjustment);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "calculatedTourStepWidth", {
        get: function () {
            return this.tourStepWidth - this.widthAdjustmentForScreenBound;
        },
        enumerable: true,
        configurable: true
    });
    GuidedTourComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.guidedTourService.guidedTourCurrentStepStream.subscribe(function (step) {
            _this.currentTourStep = step;
            if (step && step.selector) {
                var selectedElement = _this.dom.querySelector(step.selector);
                if (selectedElement) {
                    _this.scrollToAndSetElement();
                }
                else {
                    _this.selectedElementRect = null;
                }
            }
            else {
                _this.selectedElementRect = null;
            }
        });
        this.guidedTourService.guidedTourOrbShowingStream.subscribe(function (value) {
            _this.isOrbShowing = value;
        });
        this.resizeSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.windowRef.nativeWindow, 'resize').subscribe(function () {
            _this.updateStepLocation();
        });
        this.scrollSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.windowRef.nativeWindow, 'scroll').subscribe(function () {
            _this.updateStepLocation();
        });
    };
    GuidedTourComponent.prototype.ngOnDestroy = function () {
        this.resizeSubscription.unsubscribe();
        this.scrollSubscription.unsubscribe();
    };
    GuidedTourComponent.prototype.scrollToAndSetElement = function () {
        var _this = this;
        this.updateStepLocation();
        // Allow things to render to scroll to the correct location
        setTimeout(function () {
            if (!_this.isOrbShowing && !_this.isTourOnScreen()) {
                if (_this.selectedElementRect && _this.isBottom()) {
                    // Scroll so the element is on the top of the screen.
                    var topPos = ((_this.windowRef.nativeWindow.scrollY + _this.selectedElementRect.top) - _this.topOfPageAdjustment)
                        - (_this.currentTourStep.scrollAdjustment ? _this.currentTourStep.scrollAdjustment : 0)
                        + _this.getStepScreenAdjustment();
                    try {
                        _this.windowRef.nativeWindow.scrollTo({
                            left: null,
                            top: topPos,
                            behavior: 'smooth'
                        });
                    }
                    catch (err) {
                        if (err instanceof TypeError) {
                            _this.windowRef.nativeWindow.scroll(0, topPos);
                        }
                        else {
                            throw err;
                        }
                    }
                }
                else {
                    // Scroll so the element is on the bottom of the screen.
                    var topPos = (_this.windowRef.nativeWindow.scrollY + _this.selectedElementRect.top + _this.selectedElementRect.height)
                        - _this.windowRef.nativeWindow.innerHeight
                        + (_this.currentTourStep.scrollAdjustment ? _this.currentTourStep.scrollAdjustment : 0)
                        - _this.getStepScreenAdjustment();
                    try {
                        _this.windowRef.nativeWindow.scrollTo({
                            left: null,
                            top: topPos,
                            behavior: 'smooth'
                        });
                    }
                    catch (err) {
                        if (err instanceof TypeError) {
                            _this.windowRef.nativeWindow.scroll(0, topPos);
                        }
                        else {
                            throw err;
                        }
                    }
                }
            }
        });
    };
    GuidedTourComponent.prototype.handleOrb = function () {
        this.guidedTourService.activateOrb();
        if (this.currentTourStep && this.currentTourStep.selector) {
            this.scrollToAndSetElement();
        }
    };
    GuidedTourComponent.prototype.isTourOnScreen = function () {
        return this.tourStep
            && this.elementInViewport(this.dom.querySelector(this.currentTourStep.selector))
            && this.elementInViewport(this.tourStep.nativeElement);
    };
    // Modified from https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    GuidedTourComponent.prototype.elementInViewport = function (element) {
        var top = element.offsetTop;
        var height = element.offsetHeight;
        while (element.offsetParent) {
            element = element.offsetParent;
            top += element.offsetTop;
        }
        if (this.isBottom()) {
            return (top >= (this.windowRef.nativeWindow.pageYOffset
                + this.topOfPageAdjustment
                + (this.currentTourStep.scrollAdjustment ? this.currentTourStep.scrollAdjustment : 0)
                + this.getStepScreenAdjustment())
                && (top + height) <= (this.windowRef.nativeWindow.pageYOffset + this.windowRef.nativeWindow.innerHeight));
        }
        else {
            return (top >= (this.windowRef.nativeWindow.pageYOffset + this.topOfPageAdjustment - this.getStepScreenAdjustment())
                && (top + height + (this.currentTourStep.scrollAdjustment ? this.currentTourStep.scrollAdjustment : 0)) <= (this.windowRef.nativeWindow.pageYOffset + this.windowRef.nativeWindow.innerHeight));
        }
    };
    GuidedTourComponent.prototype.backdropClick = function (event) {
        if (this.guidedTourService.preventBackdropFromAdvancing) {
            event.stopPropagation();
        }
        else {
            this.guidedTourService.nextStep();
        }
    };
    GuidedTourComponent.prototype.updateStepLocation = function () {
        if (this.currentTourStep && this.currentTourStep.selector) {
            var selectedElement = this.dom.querySelector(this.currentTourStep.selector);
            if (selectedElement && typeof selectedElement.getBoundingClientRect === 'function') {
                this.selectedElementRect = selectedElement.getBoundingClientRect();
            }
            else {
                this.selectedElementRect = null;
            }
        }
        else {
            this.selectedElementRect = null;
        }
    };
    GuidedTourComponent.prototype.isBottom = function () {
        return this.currentTourStep.orientation
            && (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].Bottom
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].BottomLeft
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].BottomRight);
    };
    Object.defineProperty(GuidedTourComponent.prototype, "topPosition", {
        get: function () {
            var paddingAdjustment = this.getHighlightPadding();
            if (this.isBottom()) {
                return this.selectedElementRect.top + this.selectedElementRect.height + paddingAdjustment;
            }
            return this.selectedElementRect.top - this.getHighlightPadding();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "orbTopPosition", {
        get: function () {
            if (this.isBottom()) {
                return this.selectedElementRect.top + this.selectedElementRect.height;
            }
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].Right
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].Left) {
                return (this.selectedElementRect.top + (this.selectedElementRect.height / 2));
            }
            return this.selectedElementRect.top;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "calculatedLeftPosition", {
        get: function () {
            var paddingAdjustment = this.getHighlightPadding();
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].TopRight
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].BottomRight) {
                return (this.selectedElementRect.right - this.tourStepWidth);
            }
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].TopLeft
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].BottomLeft) {
                return (this.selectedElementRect.left);
            }
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].Left) {
                return this.selectedElementRect.left - this.tourStepWidth - paddingAdjustment;
            }
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].Right) {
                return (this.selectedElementRect.left + this.selectedElementRect.width + paddingAdjustment);
            }
            return (this.selectedElementRect.right - (this.selectedElementRect.width / 2) - (this.tourStepWidth / 2));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "leftPosition", {
        get: function () {
            if (this.calculatedLeftPosition >= 0) {
                return this.calculatedLeftPosition;
            }
            var adjustment = Math.max(0, -this.calculatedLeftPosition);
            var maxAdjustment = Math.min(this.maxWidthAdjustmentForTourStep, adjustment);
            return this.calculatedLeftPosition + maxAdjustment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "orbLeftPosition", {
        get: function () {
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].TopRight
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].BottomRight) {
                return this.selectedElementRect.right;
            }
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].TopLeft
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].BottomLeft) {
                return this.selectedElementRect.left;
            }
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].Left) {
                return this.selectedElementRect.left;
            }
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].Right) {
                return (this.selectedElementRect.left + this.selectedElementRect.width);
            }
            return (this.selectedElementRect.right - (this.selectedElementRect.width / 2));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "transform", {
        get: function () {
            if (!this.currentTourStep.orientation
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].Top
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].TopRight
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].TopLeft) {
                return 'translateY(-100%)';
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "orbTransform", {
        get: function () {
            if (!this.currentTourStep.orientation
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].Top
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].Bottom
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].TopLeft
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].BottomLeft) {
                return 'translateY(-50%)';
            }
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].TopRight
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].BottomRight) {
                return 'translate(-100%, -50%)';
            }
            if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].Right
                || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].Left) {
                return 'translate(-50%, -50%)';
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "overlayTop", {
        get: function () {
            if (this.selectedElementRect) {
                return this.selectedElementRect.top - this.getHighlightPadding();
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "overlayLeft", {
        get: function () {
            if (this.selectedElementRect) {
                return this.selectedElementRect.left - this.getHighlightPadding();
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "overlayHeight", {
        get: function () {
            if (this.selectedElementRect) {
                return this.selectedElementRect.height + (this.getHighlightPadding() * 2);
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourComponent.prototype, "overlayWidth", {
        get: function () {
            if (this.selectedElementRect) {
                return this.selectedElementRect.width + (this.getHighlightPadding() * 2);
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    GuidedTourComponent.prototype.getHighlightPadding = function () {
        var paddingAdjustment = this.currentTourStep.useHighlightPadding ? this.highlightPadding : 0;
        if (this.currentTourStep.highlightPadding) {
            paddingAdjustment = this.currentTourStep.highlightPadding;
        }
        return paddingAdjustment;
    };
    // This calculates a value to add or subtract so the step should not be off screen.
    GuidedTourComponent.prototype.getStepScreenAdjustment = function () {
        if (this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].Left
            || this.currentTourStep.orientation === _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].Right) {
            return 0;
        }
        var scrollAdjustment = this.currentTourStep.scrollAdjustment ? this.currentTourStep.scrollAdjustment : 0;
        var tourStepHeight = typeof this.tourStep.nativeElement.getBoundingClientRect === 'function' ? this.tourStep.nativeElement.getBoundingClientRect().height : 0;
        var elementHeight = this.selectedElementRect.height + scrollAdjustment + tourStepHeight;
        if ((this.windowRef.nativeWindow.innerHeight - this.topOfPageAdjustment) < elementHeight) {
            return elementHeight - (this.windowRef.nativeWindow.innerHeight - this.topOfPageAdjustment);
        }
        return 0;
    };
    GuidedTourComponent.ctorParameters = function () { return [
        { type: _guided_tour_service__WEBPACK_IMPORTED_MODULE_5__["GuidedTourService"] },
        { type: _windowref_service__WEBPACK_IMPORTED_MODULE_6__["WindowRefService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GuidedTourComponent.prototype, "topOfPageAdjustment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GuidedTourComponent.prototype, "tourStepWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GuidedTourComponent.prototype, "minimalTourStepWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GuidedTourComponent.prototype, "skipText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GuidedTourComponent.prototype, "nextText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GuidedTourComponent.prototype, "doneText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GuidedTourComponent.prototype, "closeText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GuidedTourComponent.prototype, "backText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GuidedTourComponent.prototype, "progressIndicatorLocation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], GuidedTourComponent.prototype, "progressIndicator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tourStep', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GuidedTourComponent.prototype, "tourStep", void 0);
    GuidedTourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-guided-tour',
            template: "\n        <div *ngIf=\"currentTourStep && selectedElementRect && isOrbShowing\"\n                (mouseenter)=\"handleOrb()\"\n                class=\"tour-orb tour-{{ currentTourStep.orientation }}\"\n                [style.top.px]=\"orbTopPosition\"\n                [style.left.px]=\"orbLeftPosition\"\n                [style.transform]=\"orbTransform\">\n                <div class=\"tour-orb-ring\"></div>\n        </div>\n        <div *ngIf=\"currentTourStep && !isOrbShowing\">\n            <div class=\"guided-tour-user-input-mask\" (click)=\"backdropClick($event)\"></div>\n            <div class=\"guided-tour-spotlight-overlay\"\n                [style.top.px]=\"overlayTop\"\n                [style.left.px]=\"overlayLeft\"\n                [style.height.px]=\"overlayHeight\"\n                [style.width.px]=\"overlayWidth\">\n            </div>\n        </div>\n        <div *ngIf=\"currentTourStep && !isOrbShowing\">\n            <div #tourStep *ngIf=\"currentTourStep\"\n                class=\"tour-step tour-{{ currentTourStep.orientation }}\"\n                [ngClass]=\"{\n                    'page-tour-step': !currentTourStep.selector\n                }\"\n                [style.top.px]=\"(currentTourStep.selector && selectedElementRect ? topPosition : null)\"\n                [style.left.px]=\"(currentTourStep.selector && selectedElementRect ? leftPosition : null)\"\n                [style.width.px]=\"(currentTourStep.selector && selectedElementRect ? calculatedTourStepWidth : null)\"\n                [style.transform]=\"(currentTourStep.selector && selectedElementRect ? transform : null)\">\n                <div *ngIf=\"currentTourStep.selector\" class=\"tour-arrow\"></div>\n                <div class=\"tour-block\">\n                    <div *ngIf=\"\n                        progressIndicatorLocation === progressIndicatorLocations.TopOfTourBlock\n                        && !guidedTourService.onResizeMessage\"\n                    class=\"tour-progress-indicator\">\n                        <ng-container *ngTemplateOutlet=\"progress\"></ng-container>\n                    </div>\n                    <h3 class=\"tour-title\" *ngIf=\"currentTourStep.title && currentTourStep.selector\">\n                        {{ currentTourStep.title }}\n                    </h3>\n                    <h2 class=\"tour-title\" *ngIf=\"currentTourStep.title && !currentTourStep.selector\">\n                        {{ currentTourStep.title }}\n                    </h2>\n                    <div class=\"tour-content\" [innerHTML]=\"currentTourStep.content\"></div>\n                    <div class=\"tour-buttons\">\n                        <button *ngIf=\"!guidedTourService.onResizeMessage\"\n                            (click)=\"guidedTourService.skipTour()\"\n                            class=\"skip-button link-button\">\n                            {{ skipText }}\n                        </button>\n                        <button *ngIf=\"!guidedTourService.onLastStep && !guidedTourService.onResizeMessage\"\n                            class=\"next-button\"\n                            (click)=\"guidedTourService.nextStep()\">\n                            {{ nextText }}\n                            <ng-container *ngIf=\"progressIndicatorLocation === progressIndicatorLocations.InsideNextButton\">\n                                <ng-container *ngTemplateOutlet=\"progress\"></ng-container>\n                            </ng-container>\n                        </button>\n                        <button *ngIf=\"guidedTourService.onLastStep\"\n                            class=\"next-button\"\n                            (click)=\"guidedTourService.nextStep()\">\n                            {{ doneText }}\n                        </button>\n\n                        <button *ngIf=\"guidedTourService.onResizeMessage\"\n                            class=\"next-button\"\n                            (click)=\"guidedTourService.resetTour()\">\n                            {{ closeText }}\n                        </button>\n                        <button *ngIf=\"!guidedTourService.onFirstStep && !guidedTourService.onResizeMessage\"\n                            class=\"back-button link-button\"\n                            (click)=\"guidedTourService.backStep()\">\n                            {{ backText }}\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <ng-template #progress>\n            <ng-container *ngTemplateOutlet=\"\n                progressIndicator || defaultProgressIndicator; \n                context: { currentStepNumber: guidedTourService.currentTourStepDisplay, totalSteps: guidedTourService.currentTourStepCount }\n            \"></ng-container> \n        </ng-template>\n        <ng-template #defaultProgressIndicator let-currentStepNumber=\"currentStepNumber\" let-totalSteps=\"totalSteps\">\n            <ng-container *ngIf=\"progressIndicatorLocation === progressIndicatorLocations.InsideNextButton\">&nbsp;</ng-container>{{ currentStepNumber }}/{{ totalSteps }}\n        </ng-template>\n    ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./guided-tour.component.scss */ "./projects/ngx-guided-tour/src/lib/guided-tour.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_guided_tour_service__WEBPACK_IMPORTED_MODULE_5__["GuidedTourService"],
            _windowref_service__WEBPACK_IMPORTED_MODULE_6__["WindowRefService"], Object])
    ], GuidedTourComponent);
    return GuidedTourComponent;
}());



/***/ }),

/***/ "./projects/ngx-guided-tour/src/lib/guided-tour.constants.ts":
/*!*******************************************************************!*\
  !*** ./projects/ngx-guided-tour/src/lib/guided-tour.constants.ts ***!
  \*******************************************************************/
/*! exports provided: Orientation, ProgressIndicatorLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orientation", function() { return Orientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressIndicatorLocation", function() { return ProgressIndicatorLocation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Orientation = /** @class */ (function () {
    function Orientation() {
    }
    Orientation.Bottom = 'bottom';
    Orientation.BottomLeft = 'bottom-left';
    Orientation.BottomRight = 'bottom-right';
    Orientation.Center = 'center';
    Orientation.Left = 'left';
    Orientation.Right = 'right';
    Orientation.Top = 'top';
    Orientation.TopLeft = 'top-left';
    Orientation.TopRight = 'top-right';
    return Orientation;
}());

var ProgressIndicatorLocation;
(function (ProgressIndicatorLocation) {
    ProgressIndicatorLocation["InsideNextButton"] = "inside-next-button";
    ProgressIndicatorLocation["TopOfTourBlock"] = "top-of-tour-block";
    ProgressIndicatorLocation["None"] = "none";
})(ProgressIndicatorLocation || (ProgressIndicatorLocation = {}));


/***/ }),

/***/ "./projects/ngx-guided-tour/src/lib/guided-tour.module.ts":
/*!****************************************************************!*\
  !*** ./projects/ngx-guided-tour/src/lib/guided-tour.module.ts ***!
  \****************************************************************/
/*! exports provided: GuidedTourModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidedTourModule", function() { return GuidedTourModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _guided_tour_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guided-tour.service */ "./projects/ngx-guided-tour/src/lib/guided-tour.service.ts");
/* harmony import */ var _guided_tour_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guided-tour.component */ "./projects/ngx-guided-tour/src/lib/guided-tour.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _windowref_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./windowref.service */ "./projects/ngx-guided-tour/src/lib/windowref.service.ts");






var GuidedTourModule = /** @class */ (function () {
    function GuidedTourModule() {
    }
    GuidedTourModule_1 = GuidedTourModule;
    GuidedTourModule.forRoot = function () {
        return {
            ngModule: GuidedTourModule_1,
            providers: [
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"],
                _guided_tour_service__WEBPACK_IMPORTED_MODULE_1__["GuidedTourService"]
            ]
        };
    };
    var GuidedTourModule_1;
    GuidedTourModule = GuidedTourModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _guided_tour_component__WEBPACK_IMPORTED_MODULE_2__["GuidedTourComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
            ],
            providers: [
                _windowref_service__WEBPACK_IMPORTED_MODULE_5__["WindowRefService"]
            ],
            exports: [
                _guided_tour_component__WEBPACK_IMPORTED_MODULE_2__["GuidedTourComponent"]
            ],
            entryComponents: [
                _guided_tour_component__WEBPACK_IMPORTED_MODULE_2__["GuidedTourComponent"]
            ]
        })
    ], GuidedTourModule);
    return GuidedTourModule;
}());



/***/ }),

/***/ "./projects/ngx-guided-tour/src/lib/guided-tour.service.ts":
/*!*****************************************************************!*\
  !*** ./projects/ngx-guided-tour/src/lib/guided-tour.service.ts ***!
  \*****************************************************************/
/*! exports provided: GuidedTourService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidedTourService", function() { return GuidedTourService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guided-tour.constants */ "./projects/ngx-guided-tour/src/lib/guided-tour.constants.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _windowref_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./windowref.service */ "./projects/ngx-guided-tour/src/lib/windowref.service.ts");








var GuidedTourService = /** @class */ (function () {
    function GuidedTourService(errorHandler, windowRef, dom) {
        var _this = this;
        this.errorHandler = errorHandler;
        this.windowRef = windowRef;
        this.dom = dom;
        this._guidedTourCurrentStepSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._guidedTourOrbShowingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._currentTourStepIndex = 0;
        this._currentTour = null;
        this._onFirstStep = true;
        this._onLastStep = true;
        this._onResizeMessage = false;
        this.guidedTourCurrentStepStream = this._guidedTourCurrentStepSubject.asObservable();
        this.guidedTourOrbShowingStream = this._guidedTourOrbShowingSubject.asObservable();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.windowRef.nativeWindow, 'resize').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200)).subscribe(function () {
            if (_this._currentTour && _this._currentTourStepIndex > -1) {
                if (_this._currentTour.minimumScreenSize && _this._currentTour.minimumScreenSize >= _this.windowRef.nativeWindow.innerWidth) {
                    _this._onResizeMessage = true;
                    var dialog = _this._currentTour.resizeDialog || {
                        title: 'Please resize',
                        content: 'You have resized the tour to a size that is too small to continue. Please resize the browser to a larger size to continue the tour or close the tour.'
                    };
                    _this._guidedTourCurrentStepSubject.next(dialog);
                }
                else {
                    _this._onResizeMessage = false;
                    _this._guidedTourCurrentStepSubject.next(_this.getPreparedTourStep(_this._currentTourStepIndex));
                }
            }
        });
    }
    GuidedTourService.prototype.nextStep = function () {
        var _this = this;
        if (this._currentTour.steps[this._currentTourStepIndex].closeAction) {
            this._currentTour.steps[this._currentTourStepIndex].closeAction();
        }
        if (this._currentTour.steps[this._currentTourStepIndex + 1]) {
            this._currentTourStepIndex++;
            this._setFirstAndLast();
            if (this._currentTour.steps[this._currentTourStepIndex].action) {
                this._currentTour.steps[this._currentTourStepIndex].action();
                // Usually an action is opening something so we need to give it time to render.
                setTimeout(function () {
                    if (_this._checkSelectorValidity()) {
                        _this._guidedTourCurrentStepSubject.next(_this.getPreparedTourStep(_this._currentTourStepIndex));
                    }
                    else {
                        _this.nextStep();
                    }
                });
            }
            else {
                if (this._checkSelectorValidity()) {
                    this._guidedTourCurrentStepSubject.next(this.getPreparedTourStep(this._currentTourStepIndex));
                }
                else {
                    this.nextStep();
                }
            }
        }
        else {
            if (this._currentTour.completeCallback) {
                this._currentTour.completeCallback();
            }
            this.resetTour();
        }
    };
    GuidedTourService.prototype.backStep = function () {
        var _this = this;
        if (this._currentTour.steps[this._currentTourStepIndex].closeAction) {
            this._currentTour.steps[this._currentTourStepIndex].closeAction();
        }
        if (this._currentTour.steps[this._currentTourStepIndex - 1]) {
            this._currentTourStepIndex--;
            this._setFirstAndLast();
            if (this._currentTour.steps[this._currentTourStepIndex].action) {
                this._currentTour.steps[this._currentTourStepIndex].action();
                setTimeout(function () {
                    if (_this._checkSelectorValidity()) {
                        _this._guidedTourCurrentStepSubject.next(_this.getPreparedTourStep(_this._currentTourStepIndex));
                    }
                    else {
                        _this.backStep();
                    }
                });
            }
            else {
                if (this._checkSelectorValidity()) {
                    this._guidedTourCurrentStepSubject.next(this.getPreparedTourStep(this._currentTourStepIndex));
                }
                else {
                    this.backStep();
                }
            }
        }
        else {
            this.resetTour();
        }
    };
    GuidedTourService.prototype.skipTour = function () {
        if (this._currentTour.skipCallback) {
            this._currentTour.skipCallback(this._currentTourStepIndex);
        }
        this.resetTour();
    };
    GuidedTourService.prototype.resetTour = function () {
        this.dom.body.classList.remove('tour-open');
        this._currentTour = null;
        this._currentTourStepIndex = 0;
        this._guidedTourCurrentStepSubject.next(null);
    };
    GuidedTourService.prototype.startTour = function (tour) {
        this._currentTour = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"])(tour);
        this._currentTour.steps = this._currentTour.steps.filter(function (step) { return !step.skipStep; });
        this._currentTourStepIndex = 0;
        this._setFirstAndLast();
        this._guidedTourOrbShowingSubject.next(this._currentTour.useOrb);
        if (this._currentTour.steps.length > 0
            && (!this._currentTour.minimumScreenSize
                || (this.windowRef.nativeWindow.innerWidth >= this._currentTour.minimumScreenSize))) {
            if (!this._currentTour.useOrb) {
                this.dom.body.classList.add('tour-open');
            }
            if (this._currentTour.steps[this._currentTourStepIndex].action) {
                this._currentTour.steps[this._currentTourStepIndex].action();
            }
            if (this._checkSelectorValidity()) {
                this._guidedTourCurrentStepSubject.next(this.getPreparedTourStep(this._currentTourStepIndex));
            }
            else {
                this.nextStep();
            }
        }
    };
    GuidedTourService.prototype.activateOrb = function () {
        this._guidedTourOrbShowingSubject.next(false);
        this.dom.body.classList.add('tour-open');
    };
    GuidedTourService.prototype._setFirstAndLast = function () {
        this._onLastStep = (this._currentTour.steps.length - 1) === this._currentTourStepIndex;
        this._onFirstStep = this._currentTourStepIndex === 0;
    };
    GuidedTourService.prototype._checkSelectorValidity = function () {
        if (this._currentTour.steps[this._currentTourStepIndex].selector) {
            var selectedElement = this.dom.querySelector(this._currentTour.steps[this._currentTourStepIndex].selector);
            if (!selectedElement) {
                this.errorHandler.handleError(
                // If error handler is configured this should not block the browser.
                new Error("Error finding selector " + this._currentTour.steps[this._currentTourStepIndex].selector + " on step " + (this._currentTourStepIndex + 1) + " during guided tour: " + this._currentTour.tourId));
                return false;
            }
        }
        return true;
    };
    Object.defineProperty(GuidedTourService.prototype, "onLastStep", {
        get: function () {
            return this._onLastStep;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourService.prototype, "onFirstStep", {
        get: function () {
            return this._onFirstStep;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourService.prototype, "onResizeMessage", {
        get: function () {
            return this._onResizeMessage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourService.prototype, "currentTourStepDisplay", {
        get: function () {
            return this._currentTourStepIndex + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourService.prototype, "currentTourStepCount", {
        get: function () {
            return this._currentTour && this._currentTour.steps ? this._currentTour.steps.length : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuidedTourService.prototype, "preventBackdropFromAdvancing", {
        get: function () {
            return this._currentTour && this._currentTour.preventBackdropFromAdvancing;
        },
        enumerable: true,
        configurable: true
    });
    GuidedTourService.prototype.getPreparedTourStep = function (index) {
        return this.setTourOrientation(this._currentTour.steps[index]);
    };
    GuidedTourService.prototype.setTourOrientation = function (step) {
        var _this = this;
        var convertedStep = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"])(step);
        if (convertedStep.orientation
            && !(typeof convertedStep.orientation === 'string')
            && convertedStep.orientation.length) {
            convertedStep.orientation.sort(function (a, b) {
                if (!b.maximumSize) {
                    return 1;
                }
                if (!a.maximumSize) {
                    return -1;
                }
                return b.maximumSize - a.maximumSize;
            });
            var currentOrientation_1 = _guided_tour_constants__WEBPACK_IMPORTED_MODULE_4__["Orientation"].Top;
            convertedStep.orientation.forEach(function (orientationConfig) {
                if (!orientationConfig.maximumSize || _this.windowRef.nativeWindow.innerWidth <= orientationConfig.maximumSize) {
                    currentOrientation_1 = orientationConfig.orientationDirection;
                }
            });
            convertedStep.orientation = currentOrientation_1;
        }
        return convertedStep;
    };
    GuidedTourService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"] },
        { type: _windowref_service__WEBPACK_IMPORTED_MODULE_7__["WindowRefService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"],] }] }
    ]; };
    GuidedTourService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],
            _windowref_service__WEBPACK_IMPORTED_MODULE_7__["WindowRefService"], Object])
    ], GuidedTourService);
    return GuidedTourService;
}());



/***/ }),

/***/ "./projects/ngx-guided-tour/src/lib/windowref.service.ts":
/*!***************************************************************!*\
  !*** ./projects/ngx-guided-tour/src/lib/windowref.service.ts ***!
  \***************************************************************/
/*! exports provided: WindowRefService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRefService", function() { return WindowRefService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



function getWindow() {
    return window;
}
function getMockWindow() {
    return {
        innerWidth: 0,
        innerHeight: 0,
        scrollY: 0,
        scrollX: 0,
        pageYOffset: 0,
        pageXOffset: 0,
        scroll: function () { },
        scrollTo: function () { },
        addEventListener: function () { },
        removeEventListener: function () { },
    };
}
var WindowRefService = /** @class */ (function () {
    function WindowRefService(platformId) {
        this.isBrowser = false;
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId);
    }
    Object.defineProperty(WindowRefService.prototype, "nativeWindow", {
        get: function () {
            if (this.isBrowser) {
                return getWindow();
            }
            else {
                return getMockWindow();
            }
        },
        enumerable: true,
        configurable: true
    });
    WindowRefService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
    ]; };
    WindowRefService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], WindowRefService);
    return WindowRefService;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".jumbotron img {\n    vertical-align: bottom;\n    margin-right: 10px;\n}\n\n.center-content {\n    width: 100%;\n    max-width: 800px;\n    margin: auto;\n    padding: 0 15px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    flex-wrap: wrap;\n    text-align: center;\n}\n\n.center-content img {\n    margin: 30px;\n    cursor: pointer;\n}\n\np {\n    margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24gaW1nIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNlbnRlci1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNlbnRlci1jb250ZW50IGltZyB7XG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxucCB7XG4gICAgbWFyZ2luOiAwO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_ngx_guided_tour_src_lib_guided_tour_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/ngx-guided-tour/src/lib/guided-tour.constants */ "./projects/ngx-guided-tour/src/lib/guided-tour.constants.ts");
/* harmony import */ var projects_ngx_guided_tour_src_lib_guided_tour_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/ngx-guided-tour/src/lib/guided-tour.service */ "./projects/ngx-guided-tour/src/lib/guided-tour.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(guidedTourService) {
        var _this = this;
        this.guidedTourService = guidedTourService;
        this.title = 'ngx-guided-tour-demo';
        this.dashboardTour = {
            tourId: 'purchases-tour',
            useOrb: true,
            steps: [
                {
                    title: 'Welcome to the Guided Tour Demo',
                    selector: '.demo-title',
                    content: 'Step 1',
                    orientation: projects_ngx_guided_tour_src_lib_guided_tour_constants__WEBPACK_IMPORTED_MODULE_2__["Orientation"].Bottom
                },
                {
                    title: 'General page step',
                    content: 'We have the concept of general page steps so that a you can introuce a user to a page or non specific instructions',
                },
                {
                    title: 'Positioning',
                    selector: '.tour-middle-content',
                    content: 'Step position can be set so that steps are always in view. This step is on the left.',
                    orientation: projects_ngx_guided_tour_src_lib_guided_tour_constants__WEBPACK_IMPORTED_MODULE_2__["Orientation"].Left
                },
                {
                    title: 'Positioning 2',
                    selector: '.tour-middle-content',
                    content: 'This step is on the right.',
                    orientation: projects_ngx_guided_tour_src_lib_guided_tour_constants__WEBPACK_IMPORTED_MODULE_2__["Orientation"].Right
                },
                {
                    title: 'Scroll to content',
                    selector: '.tour-scroll',
                    content: 'Automatically scroll to elements so they are in view',
                    orientation: projects_ngx_guided_tour_src_lib_guided_tour_constants__WEBPACK_IMPORTED_MODULE_2__["Orientation"].Top
                }
            ]
        };
        setTimeout(function () {
            _this.guidedTourService.startTour(_this.dashboardTour);
        }, 1000);
    }
    AppComponent.prototype.restartTour = function () {
        this.guidedTourService.startTour(this.dashboardTour);
    };
    AppComponent.ctorParameters = function () { return [
        { type: projects_ngx_guided_tour_src_lib_guided_tour_service__WEBPACK_IMPORTED_MODULE_3__["GuidedTourService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [projects_ngx_guided_tour_src_lib_guided_tour_service__WEBPACK_IMPORTED_MODULE_3__["GuidedTourService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var projects_ngx_guided_tour_src_lib_guided_tour_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/ngx-guided-tour/src/lib/guided-tour.module */ "./projects/ngx-guided-tour/src/lib/guided-tour.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                projects_ngx_guided_tour_src_lib_guided_tour_module__WEBPACK_IMPORTED_MODULE_1__["GuidedTourModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rmusk/code/ngx-guided-tour/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map