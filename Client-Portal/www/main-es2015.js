(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("        <mat-toolbar color=\"primary\">\n                <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n                  <mat-icon>home</mat-icon>\n                </button>\n                <span>Chewy</span>\n                <span class=\"example-spacer\"></span>\n              \n              </mat-toolbar>\n    ​\n    ​\n        <div class=\"login-box\">\n            <h1>Login</h1>\n            <div class=\"textbox\">\n                <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                <input [(ngModel)] = \"email\" style = \"width:100%\" type=\"text\" placeholder=\"Username\" name=\"\" value=\"\">     \n            </div>\n            <div class=\"textbox\">\n                <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n                <input [(ngModel)] = \"password\"  style = \"width:100%\" type=\"password\" placeholder=\"Password\" name=\"\" value=\"\">\n            </div>\n            \n    <div class = \"dropdown\" style = \"display:flex;flex-direction: column;\"> \n        \n        \n                  <mat-form-field appearance=\"fill\">\n                        <mat-label>Who Are You?</mat-label>\n                        <mat-select [(ngModel)] = 'selectedOption'>\n                          <mat-option *ngFor=\"let role of roles\" [value]=\"role.value\">\n                            {{role.viewValue}}\n                          </mat-option>\n                        </mat-select>\n                      </mat-form-field>\n\n                      <button mat-stroked-button (click) = \"login()\"> Sign In</button>\n\n            </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pharm/pharm.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pharm/pharm.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n        <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n        <span>Chewy</span>\n        <span class=\"example-spacer\"></span>\n      \n      </mat-toolbar>\n    \n        <div [ngStyle]=\"styling\">\n            <div style = \"display:flex;justify-content: center;flex-direction: column;\">\n            <div id=\"video1\">\n                <div class=\"remote_calls\" [id]=\"remoteCalls[0]\" class=\"remote\"  ></div>\n                <!-- <img src=\"assets/test.png\" width=\"510px\" height=\"320px\"/> -->\n                <div id=\"subvideo\">\n                    <div id=\"agora_local\" class=\"local\" style = \"width:100%;\"></div>\n                </div>\n            </div>\n            <!-- <div class=\"col-6\"> -->\n                    <div style = \"width: 700px;display:flex;justify-content: center; flex-direction: column;\">\n                      <!-- <div class=\"col-12\"> -->\n                          <div style = \"justify-content: center;display: flex;\">\n                        <button *ngIf = \"showJoinButton\" mat-flat-button color=\"primary\" (click)=\"join()\">Connect To User</button>\n                        <!-- <button mat-button color=\"primary\" (click)=\"publish()\">Publish Local Stream</button> -->\n                        <!-- <button mat-button color=\"primary\" (click)=\"unpublish()\">Unpublish Local Stream</button> -->\n                        <button  *ngIf = \"showLeaveButton\" mat-flat-button color=\"warn\" (click)=\"leave()\">Leave Call</button>\n                        <button *ngIf = \"!showJoinButton\" mat-flat-button color=\"basic\" (click)=\"reccomendItem()\">{{rec_text}}</button>\n                            </div>\n                        <div style = \"display:flex; align-self: center;\"> \n                        <mat-accordion style = \"margin:20px;\" *ngIf = \"!showJoinButton\"> \n\n                                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                                 (closed)=\"panelOpenState = false\">\n                              <mat-expansion-panel-header>\n                                <mat-panel-title>\n                                    <strong> Manage Recommended Products</strong> \n                                        </mat-panel-title>\n                               \n                              </mat-expansion-panel-header>\n                              \n                              <div style = \"display: flex; justify-content: space-around; flex-wrap: wrap;overflow: scroll;\"> \n                                    <div *ngFor = \"let product of list_of_managed_products\"  class = \"item\">\n                                      <mat-card  > \n                                            <a   href = {{product.link}} target = \"_blank\"> \n        \n                                          <mat-card-title>\n                                              {{product.title}}\n                                          </mat-card-title>\n                                    \n                                          <mat-card-subtitle>\n                                            <strong> Category: </strong> {{product.category}} |  <strong> Price: </strong> ${{product.price}}\n                                          </mat-card-subtitle>\n                                        </a>\n                                          <mat-card-content style = \"display: flex;justify-content: center;flex-direction: column;align-items: center;\">\n                                            <img style = \"height: 250px;width:50%;\" src= {{product.image_url}} alt=\"\">\n                                            <!-- <button style = \"margin:10 px;\" mat-raised-button (click) = 'recommendProduct(product.id)'> Recommend Item</button> -->\n                                            <div style = \"display: flex;justify-content: flex-end;\"> \n                                                    <button (click) = \"undo_rec_item(product)\"mat-icon-button aria-label=\"Example icon button with a menu icon\">\n                                                            <mat-icon>delete</mat-icon>\n                                                          </button>\n                                                          </div>\n                                        </mat-card-content>\n        \n        \n                                      </mat-card>\n                                  </div>\n                                     </div>\n                         \n                                \n\n                            </mat-expansion-panel>\n                            </mat-accordion>\n                    </div>   \n\n                      <!-- </div> -->\n                      <!-- <div class=\"col-12\">\n                        User id: {{ uid }}\n                      </div> -->\n                    </div>\n                </div>\n                  <!-- </div> -->\n            <!-- <div id=\"chatandlist\">\n                <div id=\"chat\">\n                    <div id=\"storedcomments\"></div>\n                    <div id=\"cfunctions\">\n                        <input type=\"textbox\" value=\"Send a comment...\" id=\"new-comment\" onclick=\"clickedontextbox()\">\n                        <input type=\"button\" value=\"Send\" onclick=\"newcomment()\" >\n                    </div>\n                </div>\n                <div id=\"list\" onclick=\"additem()\">\n                    <div id=\"item\">\n                        item\n                    </div>\n                </div>\n            </div> -->\n            <div *ngIf = \"showRec\" id=\"chrome-extension\">\n                    <div style = \"display: flex; justify-content: space-around;flex-wrap: wrap;\" > \n                            <div *ngFor = \"let product of list_of_products\"  class = \"item\">\n                              <mat-card  > \n                                    <a   href = {{product.link}} target = \"_blank\"> \n\n                                  <mat-card-title>\n                                      {{product.title}}\n                                  </mat-card-title>\n                            \n                                  <mat-card-subtitle>\n                                    <strong> Category: </strong> {{product.category}} |  <strong> Price: </strong> ${{product.price}}\n                                  </mat-card-subtitle>\n                                </a>\n                                  <mat-card-content style = \"display: flex;justify-content: center;flex-direction: column;align-items: center;\">\n                                    <img style = \"height: 250px;width:50%;\" src= {{product.image_url}} alt=\"\">\n                                    <button style = \"margin-top:15px;\" mat-raised-button (click) = 'recommendProduct(product.id, product)'> Recommend Item</button>\n\n                                </mat-card-content>\n\n\n                              </mat-card>\n                          </div>\n                             </div>\n                              \n        <!-- <iframe  src=\"https://chewy.com\" frameborder=\"0\" style = \"width: 100%;height: 100%;\"></iframe>            </div> -->\n        </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n        <mat-toolbar color=\"primary\">\n            <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n              <mat-icon>home</mat-icon>\n            </button>\n            <span>Chewy</span>\n            <span class=\"example-spacer\"></span>\n          \n          </mat-toolbar>\n        \n       \n\n<section class=\"container\">\n\n    <article class=\"row\">\n   \n  \n     \n          <!-- <div class=\"col-12\">\n            User id: {{ uid }}\n          </div> -->\n  \n      <!-- <div class=\"col-6\">\n        <div class=\"row\">\n          <h2 class=\"col-12\">Connected: {{ connected }}</h2>\n          <h2 class=\"col-12\">Published: {{ published }}</h2>\n        </div>\n      </div> -->\n  \n      <!-- <div class=\"col-12\">\n        {{ remoteCalls | json }}\n      </div> -->\n    </article>\n  \n    <article class=\"row pt-3\">\n      <div class=\"col\">\n        <div id=\"agora_local\" class=\"local\"></div>\n      </div>\n      <div class=\"col\">\n        <div class=\"remote_calls\" [id]=\"remoteCalls[0]\" class=\"remote\"></div>\n      </div>\n    </article>\n   \n  </section>\n  <div style = \"display:flex;justify-content: center; flex-direction: column;\">\n        <div style = \"justify-content: center;display: flex;margin: 10px;\"> \n      <button *ngIf = \"showJoinButton\" mat-flat-button color=\"primary\" (click)=\"join()\">Talk To An Expert Vet</button>\n      <!-- <button mat-button color=\"primary\" (click)=\"publish()\">Publish Local Stream</button> -->\n      <!-- <button mat-button color=\"primary\" (click)=\"unpublish()\">Unpublish Local Stream</button> -->\n      <button *ngIf = \"showLeaveButton\"  mat-flat-button color=\"warn\" (click)=\"leave()\">Leave Call</button>\n    </div>\n    </div>\n  <!-- <mat-card style = \"margin:20px; height:40vh;\">  -->\n \n  <!-- <mat-card-title>   -->\n      \n    <!-- <mat-card-subtitle> \n        \n    </mat-card-subtitle> -->\n\n  <!-- </mat-card-title> -->\n\n  <mat-accordion style = \"margin:20px;\"> \n\n      <mat-expansion-panel style = \"margin:20px; \"(opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n          <strong> Recommendations </strong> \n              </mat-panel-title>\n     \n    </mat-expansion-panel-header>\n \n<div style = \"display: flex; justify-content: space-around;flex-wrap: wrap;\"> \n  <div *ngFor = \"let product of list_of_recommended_products\"  class = \"item\">\n    <a   href = {{product.link}} target = \"_blank\"> \n    <mat-card  > \n        <mat-card-title>\n            {{product.title}}\n        </mat-card-title>\n  \n        <mat-card-subtitle>\n          <strong> Category: </strong> {{product.category}} |  <strong> Price: </strong> ${{product.price}}\n        </mat-card-subtitle>\n  \n        <mat-card-content style = \"display: flex;justify-content: center;\">\n          <img style = \"width:200px\" src= {{product.image_url}} alt=\"\">\n        </mat-card-content>\n    </mat-card>\n  </a>\n</div>\n   </div>\n    \n    \n  </mat-expansion-panel>\n  </mat-accordion>\n\n  \n\n\n<!-- </mat-card> -->");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _pharm_pharm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pharm/pharm.component */ "./src/app/pharm/pharm.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'pharm', component: _pharm_pharm_component__WEBPACK_IMPORTED_MODULE_3__["PharmComponent"] },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_agora__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-agora */ "./node_modules/ngx-agora/fesm2015/ngx-agora.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pharm_pharm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pharm/pharm.component */ "./src/app/pharm/pharm.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _pharm_pharm_component__WEBPACK_IMPORTED_MODULE_12__["PharmComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
            _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"],
            ngx_agora__WEBPACK_IMPORTED_MODULE_8__["NgxAgoraModule"].forRoot({ AppID: src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].agora.appId })
        ],
        providers: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__["AngularFirestore"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n    /* background-image: url('../../assets/homepage.jpg'); */\n    background-size: cover;\n    background-attachment: fixed;\n}\n.login-box {\n    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.15);\n\n    position: absolute;\n    max-width: 700px;\n    padding: 50px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: white;\n    color: black;\n}\n.login-box h1 {\n    float: left;\n    font-size: 40px;\n    border-bottom: 6px solid;\n    margin-bottom: 50px;\n    padding: 13px 0\n}\n.login-box .Vet .btn-primary {\n    font-size: 20px;\n    border-radius: 12px;\n}\n.login-box .Owner .btn-primary { \n    font-size: 20px;\n    border-radius: 12px;\n}\n.login-box .dropdown{\n    width: 30rem;\n}\n.dropdown:hover .dropdown-list{\n    opacity:1;\n    position:relative;\n}\n.login-box .dropdown-select{\n    padding: 1.5rem;\n    border-radius: 4px;\n    background-color: white;\n    width: 100%;\n    display:flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 1.6rem;\n    cursor: pointer;\n}\n.login-box .dropdown-list{\n    border-radius: 4px;\n    background-color: black;\n    position:absolute;\n    top:110%;\n    left: 0;\n    right: 0;\n    opacity:0;\n    visibility:hidden;\n    transition:opacity 0.2s linear, visibility 0.2s linear;\n}\n.login-box .dropdown-list__item{\n    padding: 1rem;\n    font-size: 1.4rem;\n}\n.textbox{\n    width: 100%;\n    overflow: hidden;\n    font-size: 20px;\n    padding: 8px 0;\n    margin: 8px 0;\n    border-bottom: 1px solid;\n}\n.textbox i{\n    width:26px;\n    float:left;\n    text-align:center;\n}\n​\n.textbook input{\n    border: none;\n    outline: none;\n    background: none;\n    color: white;\n    font-size: 18px;\n    /* width: 80px; */\n    float: left;\n    margin: 10px;\n    width:100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdEQUF3RDtJQUN4RCxzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSx5Q0FBeUM7O0lBRXpDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkI7QUFDSjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLHNEQUFzRDtBQUMxRDtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsY0FBYztJQUNkLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFVBQVU7SUFDVixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7O0lBRUksWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaG9tZXBhZ2UuanBnJyk7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuLmxvZ2luLWJveCB7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4ubG9naW4tYm94IGgxIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgcGFkZGluZzogMTNweCAwXG59XG4ubG9naW4tYm94IC5WZXQgLmJ0bi1wcmltYXJ5IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5sb2dpbi1ib3ggLk93bmVyIC5idG4tcHJpbWFyeSB7IFxuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLmxvZ2luLWJveCAuZHJvcGRvd257XG4gICAgd2lkdGg6IDMwcmVtO1xufVxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1saXN0e1xuICAgIG9wYWNpdHk6MTtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cbi5sb2dpbi1ib3ggLmRyb3Bkb3duLXNlbGVjdHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubG9naW4tYm94IC5kcm9wZG93bi1saXN0e1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MTEwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG9wYWNpdHk6MDtcbiAgICB2aXNpYmlsaXR5OmhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOm9wYWNpdHkgMC4ycyBsaW5lYXIsIHZpc2liaWxpdHkgMC4ycyBsaW5lYXI7XG59XG4ubG9naW4tYm94IC5kcm9wZG93bi1saXN0X19pdGVte1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG59XG4udGV4dGJveHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cbi50ZXh0Ym94IGl7XG4gICAgd2lkdGg6MjZweDtcbiAgICBmbG9hdDpsZWZ0O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxu4oCLXG4udGV4dGJvb2sgaW5wdXR7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIC8qIHdpZHRoOiA4MHB4OyAqL1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB3aWR0aDoxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");




let LoginComponent = class LoginComponent {
    constructor(route, authenticationService) {
        this.route = route;
        this.authenticationService = authenticationService;
        this.roles = [
            { value: 'pharm', viewValue: 'Veterinarian' },
            { value: 'user', viewValue: 'Pet Owner' },
        ];
    }
    ngOnInit() {
    }
    login() {
        console.log("logging into" + this.selectedOption);
        this.authenticationService.SignIn(this.email, this.password, this.selectedOption);
        this.email = '';
        this.password = '';
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/pharm/pharm.component.css":
/*!*******************************************!*\
  !*** ./src/app/pharm/pharm.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nbody {\n    /* background-image: url(img/homepage.jpg);\n    background-size: cover;\n    background-attachment: fixed; */\n\n\n}\n.div1 {\n    box-sizing: border-box;\n    margin: 25px;\n}\n.item {\n    width: 300px;\n     margin:10px\n}\n.div2 {\n    box-sizing: border-box;\n    margin: 25px;\n}\n/* Create two unequal columns that floats next to each other */\n.column {\n  float: left;\n  padding: 10px;\n  height: 300px;\n  margin: 10px; /* Should be removed. Only for demonstration */\n}\n.left {\n  width: 30%;\n}\n.right {\n  width: 25%;\n}\n.middle{\n    width: 30%;\n}\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.recommendation{\nfloat: left;\n  padding: 10px;\n  height: 500px;\n  margin: 10px;\n  width: 30%;\n}\n.chaxbox{\nwidth: 50%;\nfloat: left;\n  padding: 10px;\n  height: 250px;\n  margin: 10px; \n}\n#app {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    height: 700px;\n    width: 100%;\n    padding: 5px;\n}\n#video1 {\n    display: flex;\n    flex-flow: wrap;\n    position: relative;\n    flex-direction: row-reverse;\n    border: 7px solid #7b7b7b;\n    border-radius: 10px;\n    width: 700px;\n    height: 400px;\n    margin: 5px;\n    background-color: rgba(#333, 0.5);\n}\n.item:hover {\n    transform: translateY(5px) scale(1.05);\n}\n#subvideo {\n    background-color: rgba(#333, 0.5);\n    display: flex;\n    border: 2px solid #7b7b7b;\n    width: 300px;\n    height: 180px;\n    margin: 5px;\n    align-self: flex-end;\n    justify-self: right;\n    position: absolute;\n    /* background-color: #128CED; */\n}\n#chatandlist {\n    display: flex;\n    flex-flow: wrap;\n    flex-direction: row;\n    justify-content: space-between;\n    border: solid;\n    border-width: 0px;\n    width: 508px;\n    height: 320px;\n    margin: 5px;\n}\n#chat {\n    border: solid;\n    border-width: 1px;\n    width: 290px;\n    height: 290px;\n    background-color: #128CED;\n}\n#storedcomments {\n    display: flex;\n    flex-direction: column;\n    border: solid;\n    overflow: scroll;\n    border-width: 0px;\n    height: 220px;\n    margin: 5px;\n}\n#chat input {\n    height: 30px;\n}\n#cfunctions {\n    display: flex;\n    flex-direction: row;\n    align-items: baseline;\n    height: 30px;\n    display: inline-block;\n}\ninput {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 10px 0;\n    margin-left: 5px;\n}\n#new-comment {\n    width: 190px;\n    border: 0px;\n}\n#list {\n    border: solid;\n    border-width: 1px;\n    background-color: #128CED;\n    width: 210px;\n    height: 290px;\n    overflow: scroll;\n}\n#item {\n    border-bottom: solid;\n    border-width: 1px;\n    width: 200px;\n    height: 60px;\n}\n#chrome-extension {\n    /* border: solid;\n    border-width: 1px;\n    \n    height: 620px;\n    margin: 5px;\n    overflow: scroll; */\n    margin: 5px;\n    overflow: scroll;\n    border-radius: 10px;\n    background-color: #cccccc;\n    width: 700px;\n}\n#r {\n    display: flex;\n    flex-direction: column;\n    border: solid;\n    border-width: 0px;\n}\np {\n    margin: 0px;\n}\nb {\n    margin: 0px;\n}\n.local,\n.remote {\n   width:100%;\n    /* height: 25vw; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhhcm0vcGhhcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSTs7bUNBRStCOzs7QUFHbkM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0tBQ1g7QUFDTDtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFDQSw4REFBOEQ7QUFDOUQ7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZLEVBQUUsOENBQThDO0FBQzlEO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0EsbUNBQW1DO0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFDQTtBQUNBLFdBQVc7RUFDVCxhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVixXQUFXO0VBQ1QsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFLQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLCtCQUErQjtBQUNuQztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBO0lBQ0k7Ozs7O3VCQUttQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUdBOztHQUVHLFVBQVU7SUFDVCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9waGFybS9waGFybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1nL2hvbWVwYWdlLmpwZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkOyAqL1xuXG5cbn1cbi5kaXYxIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMjVweDtcbn1cbi5pdGVtIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgIG1hcmdpbjoxMHB4XG59XG4uZGl2MiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDI1cHg7XG59XG4vKiBDcmVhdGUgdHdvIHVuZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luOiAxMHB4OyAvKiBTaG91bGQgYmUgcmVtb3ZlZC4gT25seSBmb3IgZGVtb25zdHJhdGlvbiAqL1xufVxuLmxlZnQge1xuICB3aWR0aDogMzAlO1xufVxuLnJpZ2h0IHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5taWRkbGV7XG4gICAgd2lkdGg6IDMwJTtcbn1cbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cbi5yZWNvbW1lbmRhdGlvbntcbmZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiAzMCU7XG59XG4uY2hheGJveHtcbndpZHRoOiA1MCU7XG5mbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgbWFyZ2luOiAxMHB4OyBcbn1cblxuXG5cblxuI2FwcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBoZWlnaHQ6IDcwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuI3ZpZGVvMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHdyYXA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBib3JkZXI6IDdweCBzb2xpZCAjN2I3YjdiO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDcwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMzMzLCAwLjUpO1xufVxuLml0ZW06aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpIHNjYWxlKDEuMDUpO1xufVxuI3N1YnZpZGVvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMzMzMsIDAuNSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN2I3YjdiO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMxMjhDRUQ7ICovXG59XG5cbiNjaGF0YW5kbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHdyYXA7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgICB3aWR0aDogNTA4cHg7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuI2NoYXQge1xuICAgIGJvcmRlcjogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgd2lkdGg6IDI5MHB4O1xuICAgIGhlaWdodDogMjkwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyOENFRDtcbn1cblxuI3N0b3JlZGNvbW1lbnRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbiNjaGF0IGlucHV0IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbiNjZnVuY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmlucHV0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4jbmV3LWNvbW1lbnQge1xuICAgIHdpZHRoOiAxOTBweDtcbiAgICBib3JkZXI6IDBweDtcbn1cblxuI2xpc3Qge1xuICAgIGJvcmRlcjogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyOENFRDtcbiAgICB3aWR0aDogMjEwcHg7XG4gICAgaGVpZ2h0OiAyOTBweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4jaXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuI2Nocm9tZS1leHRlbnNpb24ge1xuICAgIC8qIGJvcmRlcjogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgXG4gICAgaGVpZ2h0OiA2MjBweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsOyAqL1xuICAgIG1hcmdpbjogNXB4O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICAgIHdpZHRoOiA3MDBweDtcbn1cblxuI3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuYiB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cblxuLmxvY2FsLFxuLnJlbW90ZSB7XG4gICB3aWR0aDoxMDAlO1xuICAgIC8qIGhlaWdodDogMjV2dzsgKi9cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pharm/pharm.component.ts":
/*!******************************************!*\
  !*** ./src/app/pharm/pharm.component.ts ***!
  \******************************************/
/*! exports provided: PharmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmComponent", function() { return PharmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_agora__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-agora */ "./node_modules/ngx-agora/fesm2015/ngx-agora.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);







let PharmComponent = class PharmComponent {
    constructor(agoraService, firestore) {
        this.agoraService = agoraService;
        this.firestore = firestore;
        this.showRec = false;
        this.rec_text = "Show Recommend View";
        this.showJoinButton = true;
        this.showLeaveButton = false;
        /**
         * App ID used when connecting to the Agora.io servers
         */
        this.appId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].agora ? src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].agora.appId : '');
        /**
         * Channel (meeting room) within the Agora app to join
         */
        this.channel = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('123');
        /**
         * All the IDs of other users that have joined the call
         */
        this.remoteCalls = [];
        /**
         * Whether the local client has tuned in to the Agora meeting room
         */
        this.connected = false;
        /**
         * Whether the local client's A/V stream has been published to the remote meeting room
         */
        this.published = false;
        this.productLink = "78972";
        this.userID = "nm2h0kyxsYTs4Id9tRl01PTwkUW2";
        this.list_of_products = [];
        this.list_of_managed_products = [];
        this.uid = Math.floor(Math.random() * 100);
        firestore.collection('Products').get().forEach(cols => {
            cols.docs.forEach(snapshot => {
                this.list_of_products.push(this.retrieve_product_info(snapshot, snapshot.id));
            });
        });
        // subscribe(snapshot => {
        //   this.list_of_products_ids = snapshot.data()
        //   this.list_of_recommended_products_ids.forEach(product_id => {
        //     console.log("product Id" + product_id )
        //     this.list_of_products.push(this.retrieve_product_info(product_id))
        //   })
        // })
        this.client = this.agoraService.createClient({ mode: 'live', codec: 'h264' });
        this.assignClientHandlers();
    }
    reccomendItem() {
        if (this.showRec == false) {
            this.rec_text = "Hide Recommend View";
            this.styling = { "display": "flex",
                "flex-direction": "column",
                "flex-wrap": "wrap",
                "height": "700px",
                "width": "100%",
                "padding": "5px"
            };
        }
        else {
            this.styling = { "display": "flex",
                "flex-direction": "row",
                "flex-wrap": "wrap",
                "height": "700px",
                "width": "100%",
                "padding": "5px",
                "justify-content": "center" };
            this.rec_text = "Show Recommend View";
        }
        this.showRec = !this.showRec;
    }
    recommendProduct(product_id, product) {
        var ref = this.firestore.collection('Users').doc(this.userID);
        ref.update({ recommended_products: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion(product_id) });
        this.remove(product);
    }
    unrecommendProduct(product_id) {
        var ref = this.firestore.collection('Users').doc(this.userID);
        ref.update({ recommended_products: firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayRemove(product_id) });
    }
    retrieve_product_info(snapshot, id) {
        var product = { title: "",
            category: "",
            price: "",
            image_url: "",
            link: "",
            id: id };
        if (snapshot.data().title) {
            product.title = snapshot.data().title;
        }
        if (snapshot.data().category) {
            product.category = snapshot.data().category;
        }
        if (snapshot.data().price) {
            product.price = snapshot.data().price;
        }
        if (snapshot.data().image_url) {
            product.image_url = snapshot.data().image_url;
        }
        if (snapshot.data().link) {
            product.link = snapshot.data().link;
        }
        // console.log(snapshot + "stringify")
        // product = { title: snapshot.data().title, 
        // category: snapshot.data().category, 
        // price:snapshot.data().price, 
        // image_url: snapshot.data().image_url
        // }
        return product;
    }
    ngOnInit() {
        this.styling = { "display": "flex",
            "flex-direction": "row",
            "flex-wrap": "wrap",
            "height": "700px",
            "width": "100%",
            "padding": "5px",
            "justify-content": "center" };
        this.client.init(this.appId.value, () => console.log('Initialized successfully'), () => console.log('Could not initialize'));
    }
    join() {
        this.localStream = this.agoraService.createStream({ streamID: this.uid, audio: true, video: true, screen: false });
        this.showJoinButton = false;
        this.showLeaveButton = true;
        this.assignLocalStreamHandlers();
        this.init();
        this.client.join(null, this.channel.value, this.uid);
        setTimeout(() => {
            this.publish();
        }, 2000);
    }
    publish() {
        this.client.publish(this.localStream, err => console.log('Publish local stream error: ' + err));
    }
    unpublish() {
        this.client.unpublish(this.localStream, error => console.error(error));
        this.published = false;
    }
    leave() {
        if (this.connected) {
            this.client.leave(() => {
                console.log('Left the channel successfully');
                this.connected = false;
                this.published = false;
                this.remoteCalls = [];
            }, err => {
                console.log('Leave channel failed');
            });
        }
        else {
            this.agoraService.AgoraRTC.Logger.warning('Local client is not connected to channel.');
        }
    }
    init() {
        this.localStream.init(() => {
            // The user has granted access to the camera and mic.
            console.log('getUserMedia successfully');
            this.localStream.play('agora_local');
            this.connected = true;
        }, err => console.log('getUserMedia failed', err));
    }
    assignLocalStreamHandlers() {
        this.localStream.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["StreamEvent"].MediaAccessAllowed, () => {
            console.log('accessAllowed');
        });
        // The user has denied access to the camera and mic.
        this.localStream.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["StreamEvent"].MediaAccessDenied, () => {
            console.log('accessDenied');
        });
    }
    assignClientHandlers() {
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].LocalStreamPublished, evt => {
            this.published = true;
            console.log('Publish local stream successfully');
        });
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].Error, error => {
            console.log('Got error msg:', error.reason);
            if (error.reason === 'DYNAMIC_KEY_TIMEOUT') {
                this.client.renewChannelKey('', () => console.log('Renewed the channel key successfully.'), renewError => console.error('Renew channel key failed: ', renewError));
            }
        });
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].RemoteStreamAdded, evt => {
            const stream = evt.stream;
            this.client.subscribe(stream, { audio: true, video: true }, err => {
                console.log('Subscribe stream failed', err);
            });
        });
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].RemoteStreamSubscribed, evt => {
            const stream = evt.stream;
            const id = this.getRemoteId(stream);
            if (!this.remoteCalls.length) {
                this.remoteCalls.push(id);
                setTimeout(() => stream.play(id), 1000);
            }
        });
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].RemoteStreamRemoved, evt => {
            const stream = evt.stream;
            if (stream) {
                stream.stop();
                this.remoteCalls = [];
                console.log(`Remote stream is removed ${stream.getId()}`);
            }
        });
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].PeerLeave, evt => {
            const stream = evt.stream;
            if (stream) {
                stream.stop();
                this.remoteCalls = this.remoteCalls.filter(call => call !== `${this.getRemoteId(stream)}`);
                console.log(`${evt.uid} left from this channel`);
            }
        });
    }
    getRemoteId(stream) {
        return `agora_remote-${stream.getId()}`;
    }
    remove(item) {
        // var id = item.id
        const index = this.list_of_products.indexOf(item);
        this.list_of_managed_products.push(item);
        // const indexInID = this.list_of_products_ids.indexOf(id);
        if (index >= 0) {
            this.list_of_products.splice(index, 1);
        }
        // if(indexInID) {
        //   this.list_of_products_ids.splice(indexInID, 1);
        // }
    }
    undo_rec_item(item) {
        const index = this.list_of_managed_products.indexOf(item);
        this.list_of_products.push(item);
        if (index >= 0) {
            this.list_of_managed_products.splice(index, 1);
        }
        this.unrecommendProduct(item.id);
    }
};
PharmComponent.ctorParameters = () => [
    { type: ngx_agora__WEBPACK_IMPORTED_MODULE_3__["NgxAgoraService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
PharmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pharm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pharm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pharm/pharm.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pharm.component.css */ "./src/app/pharm/pharm.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_agora__WEBPACK_IMPORTED_MODULE_3__["NgxAgoraService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
], PharmComponent);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthenticationService = class AuthenticationService {
    constructor(route, angularFireAuth) {
        this.route = route;
        this.angularFireAuth = angularFireAuth;
        this.userData = angularFireAuth.authState;
    }
    /* Sign in */
    SignIn(email, password, mode) {
        this.angularFireAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(res => {
            console.log('You are Successfully logged in!');
            this.route.navigate([mode]);
            this.user_uid = res.user.uid;
        })
            .catch(err => {
            console.log('Something is wrong:', err.message);
        });
    }
    /* Sign out */
    SignOut() {
        this.angularFireAuth
            .auth
            .signOut();
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".local {\n    background: rgba(#333, 0.5);\n    \n}\n#agora_local {\n    border: 7px solid #7b7b7b;\n    border-radius: 10px;\n}\n#undefined {\n    border: 7px solid #7b7b7b;\n    border-radius: 10px;\n}\n.remote {\n    background: rgba(#333, 0.5);\n    border: 7px solid #7b7b7b;\n    border-radius: 10px;\n}\n.local,\n.remote {\n    height: 25vw;\n}\n#chat {\n    border: solid;\n    border-width: 1px;\n    width: 60%;\n    height: 320px;\n    background-color: #128CED;\n}\n#storedcomments {\n    display: flex;\n    flex-direction: column;\n    border: solid;\n    overflow: scroll;\n    border-width: 0px;\n    height: 260px;\n    margin: 5px;\n}\n#chat input {\n    height: 300;\n    \n}\n#cfunctions {\n    display: flex;\n    flex-direction: row;\n    align-items: baseline;\n    height: 30px;\n    display: inline-block;\n}\ninput {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 10px 0;\n    margin-left: 5px;\n}\n#new-comment {\n    width: 200px;\n    border: 0px;\n}\n#r {\n    display: flex;\n    flex-direction: column;\n    border: solid;\n    border-width: 0px;\n}\np {\n    margin: 0px;\n}\nb {\n    margin: 0px;\n}\n.div1 {\n            box-sizing: border-box;\n            margin: 25px;\n        }\n.div2 {\n            box-sizing: border-box;\n            margin: 25px;\n        }\n/* Create two unequal columns that floats next to each other */\n.column {\n          float: left;\n          padding: 10px;\n          height: 300px;\n          margin: 10px; /* Should be removed. Only for demonstration */\n        }\n.left {\n          width: 30%;\n          \n        }\n.right {\n          width: 25%;\n        }\n.middle{\n            width: 30%;\n        }\n/* Clear floats after the columns */\n.row:after {\n          content: \"\";\n          display: table;\n          clear: both;\n\n        \n        }\n.recommendation{\n        float: left;\n          padding: 10px;\n          height: 380px;\n          margin: 10px;\n          width: 30%;\n   \n\n      }\n.chaxbox{\n        width: 60%;\n        float: left;\n        padding: 10px;\n        height: 250px;\n        margin: 10px; \n          \n      }\ndiv.ex3 {\n      background-color:white;\n      width: 90%;\n      height: 70%;\n      overflow: auto;\n}\n/* Create two equal columns that floats next to each other */\n.column1 {\n  float: left;\n  width: 30%;\n  padding: 10px;\n  height: 300px; /* Should be removed. Only for demonstration */\n}\n/* Clear floats after the columns */\n.row1:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .column {\n    width: 100%;\n  }\n}\n.item {\n    width: 300px;\n     margin:10px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7O0FBRS9CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCO0FBR0E7SUFDSSwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUVBOztJQUVJLFlBQVk7QUFDaEI7QUFLQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVzs7QUFFZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ1E7WUFDSSxzQkFBc0I7WUFDdEIsWUFBWTtRQUNoQjtBQUNBO1lBQ0ksc0JBQXNCO1lBQ3RCLFlBQVk7UUFDaEI7QUFHQSw4REFBOEQ7QUFDOUQ7VUFDRSxXQUFXO1VBQ1gsYUFBYTtVQUNiLGFBQWE7VUFDYixZQUFZLEVBQUUsOENBQThDO1FBQzlEO0FBRUE7VUFDRSxVQUFVOztRQUVaO0FBRUE7VUFDRSxVQUFVO1FBQ1o7QUFDQTtZQUNJLFVBQVU7UUFDZDtBQUNBLG1DQUFtQztBQUNuQztVQUNFLFdBQVc7VUFDWCxjQUFjO1VBQ2QsV0FBVzs7O1FBR2I7QUFDRjtRQUNFLFdBQVc7VUFDVCxhQUFhO1VBQ2IsYUFBYTtVQUNiLFlBQVk7VUFDWixVQUFVOzs7TUFHZDtBQUVBO1FBQ0UsVUFBVTtRQUNWLFdBQVc7UUFDWCxhQUFhO1FBQ2IsYUFBYTtRQUNiLFlBQVk7O01BRWQ7QUFFQTtNQUNBLHNCQUFzQjtNQUN0QixVQUFVO01BQ1YsV0FBVztNQUNYLGNBQWM7QUFDcEI7QUFLQSw0REFBNEQ7QUFDNUQ7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhLEVBQUUsOENBQThDO0FBQy9EO0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFFQSx1R0FBdUc7QUFDdkc7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBQ0E7SUFDSSxZQUFZO0tBQ1g7QUFDTCIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2FsIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCMzMzMsIDAuNSk7XG4gICAgXG59XG4jYWdvcmFfbG9jYWwge1xuICAgIGJvcmRlcjogN3B4IHNvbGlkICM3YjdiN2I7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI3VuZGVmaW5lZCB7XG4gICAgYm9yZGVyOiA3cHggc29saWQgIzdiN2I3YjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5cbi5yZW1vdGUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoIzMzMywgMC41KTtcbiAgICBib3JkZXI6IDdweCBzb2xpZCAjN2I3YjdiO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5sb2NhbCxcbi5yZW1vdGUge1xuICAgIGhlaWdodDogMjV2dztcbn1cblxuXG5cblxuI2NoYXQge1xuICAgIGJvcmRlcjogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjhDRUQ7XG59XG4jc3RvcmVkY29tbWVudHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAyNjBweDtcbiAgICBtYXJnaW46IDVweDtcbn1cbiNjaGF0IGlucHV0IHtcbiAgICBoZWlnaHQ6IDMwMDtcbiAgICBcbn1cbiNjZnVuY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5pbnB1dCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbiNuZXctY29tbWVudCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlcjogMHB4O1xufVxuI3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xufVxucCB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5iIHtcbiAgICBtYXJnaW46IDBweDtcbn1cbiAgICAgICAgLmRpdjEge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIG1hcmdpbjogMjVweDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2MiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbWFyZ2luOiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLyogQ3JlYXRlIHR3byB1bmVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXG4gICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7IC8qIFNob3VsZCBiZSByZW1vdmVkLiBPbmx5IGZvciBkZW1vbnN0cmF0aW9uICovXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAucmlnaHQge1xuICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIH1cbiAgICAgICAgLm1pZGRsZXtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4gICAgICAgIC5yb3c6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgICAgY2xlYXI6IGJvdGg7XG5cbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIC5yZWNvbW1lbmRhdGlvbntcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDM4MHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgXG5cbiAgICAgIH1cblxuICAgICAgLmNoYXhib3h7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICBtYXJnaW46IDEwcHg7IFxuICAgICAgICAgIFxuICAgICAgfVxuXG4gICAgICBkaXYuZXgzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuXG5cblxuLyogQ3JlYXRlIHR3byBlcXVhbCBjb2x1bW5zIHRoYXQgZmxvYXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuLmNvbHVtbjEge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAzMDBweDsgLyogU2hvdWxkIGJlIHJlbW92ZWQuIE9ubHkgZm9yIGRlbW9uc3RyYXRpb24gKi9cbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93MTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uaXRlbSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgICBtYXJnaW46MTBweFxufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_agora__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-agora */ "./node_modules/ngx-agora/fesm2015/ngx-agora.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");







let UserComponent = class UserComponent {
    constructor(authenticationService, agoraService, firestore) {
        this.authenticationService = authenticationService;
        this.agoraService = agoraService;
        this.firestore = firestore;
        this.showJoinButton = true;
        this.showLeaveButton = false;
        /**
         * App ID used when connecting to the Agora.io servers
         */
        this.appId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].agora ? src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].agora.appId : '');
        /**
         * Channel (meeting room) within the Agora app to join
         */
        this.channel = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('123');
        /**
         * All the IDs of other users that have joined the call
         */
        this.remoteCalls = [];
        /**
         * Whether the local client has tuned in to the Agora meeting room
         */
        this.connected = false;
        /**
         * Whether the local client's A/V stream has been published to the remote meeting room
         */
        this.published = false;
        this.list_of_recommended_products = [];
        this.user_uid = this.authenticationService.user_uid;
        // firestore.doc('Users/'+this.user_uid).get().subscribe(snapshot => {
        //   this.list_of_recommended_products_ids = snapshot.data().recommended_products
        //   this.list_of_recommended_products_ids.forEach(product_id => {
        //     console.log("product Id" + product_id )
        //     this.retrieve_product_info(product_id)
        //   })
        // })
        firestore.doc('Users/' + this.user_uid).snapshotChanges().subscribe(snapshot => {
            console.log('we are liveee');
            this.list_of_recommended_products = [];
            this.list_of_recommended_products_ids = snapshot.payload.data()['recommended_products'];
            this.list_of_recommended_products_ids.forEach(product_id => {
                console.log("product Id" + product_id);
                this.list_of_recommended_products.push(this.retrieve_product_info(product_id));
            });
        });
        this.uid = Math.floor(Math.random() * 100);
        this.client = this.agoraService.createClient({ mode: 'live', codec: 'h264' });
        this.assignClientHandlers();
    }
    retrieve_product_info(id) {
        var product = { title: "",
            category: "",
            price: "",
            image_url: "",
            link: "" };
        var ref = this.firestore.doc('Products/' + id).get().subscribe(snapshot => {
            if (snapshot.data().title) {
                product.title = snapshot.data().title;
            }
            if (snapshot.data().category) {
                product.category = snapshot.data().category;
            }
            if (snapshot.data().price) {
                product.price = snapshot.data().price;
            }
            if (snapshot.data().image_url) {
                product.image_url = snapshot.data().image_url;
            }
            if (snapshot.data().link) {
                product.link = snapshot.data().link;
            }
            // console.log(snapshot + "stringify")
            // product = { title: snapshot.data().title, 
            // category: snapshot.data().category, 
            // price:snapshot.data().price, 
            // image_url: snapshot.data().image_url
            // }
            console.log(product.title + "title");
            console.log(product.image_url + "image_url");
            console.log(product.price + "price");
            console.log(product.category + "category");
        });
        return product;
    }
    ngOnInit() {
        this.client.init(this.appId.value, () => console.log('Initialized successfully'), () => console.log('Could not initialize'));
    }
    join() {
        this.localStream = this.agoraService.createStream({ streamID: this.uid, audio: true, video: true, screen: false });
        this.assignLocalStreamHandlers();
        this.init();
        this.client.join(null, this.channel.value, this.uid);
        setTimeout(() => {
            this.publish();
        }, 2000);
    }
    publish() {
        this.client.publish(this.localStream, err => console.log('Publish local stream error: ' + err));
    }
    unpublish() {
        this.client.unpublish(this.localStream, error => console.error(error));
        this.published = false;
    }
    leave() {
        if (this.connected) {
            this.client.leave(() => {
                console.log('Left the channel successfully');
                this.connected = false;
                this.published = false;
                this.remoteCalls = [];
            }, err => {
                console.log('Leave channel failed');
            });
        }
        else {
            this.agoraService.AgoraRTC.Logger.warning('Local client is not connected to channel.');
        }
    }
    init() {
        this.localStream.init(() => {
            // The user has granted access to the camera and mic.
            console.log('getUserMedia successfully');
            this.localStream.play('agora_local');
            this.connected = true;
        }, err => console.log('getUserMedia failed', err));
    }
    assignLocalStreamHandlers() {
        this.localStream.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["StreamEvent"].MediaAccessAllowed, () => {
            console.log('accessAllowed');
        });
        // The user has denied access to the camera and mic.
        this.localStream.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["StreamEvent"].MediaAccessDenied, () => {
            console.log('accessDenied');
        });
    }
    assignClientHandlers() {
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].LocalStreamPublished, evt => {
            this.published = true;
            console.log('Publish local stream successfully');
        });
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].Error, error => {
            console.log('Got error msg:', error.reason);
            if (error.reason === 'DYNAMIC_KEY_TIMEOUT') {
                this.client.renewChannelKey('', () => console.log('Renewed the channel key successfully.'), renewError => console.error('Renew channel key failed: ', renewError));
            }
        });
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].RemoteStreamAdded, evt => {
            const stream = evt.stream;
            this.client.subscribe(stream, { audio: true, video: true }, err => {
                console.log('Subscribe stream failed', err);
            });
        });
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].RemoteStreamSubscribed, evt => {
            const stream = evt.stream;
            const id = this.getRemoteId(stream);
            if (!this.remoteCalls.length) {
                this.remoteCalls.push(id);
                setTimeout(() => stream.play(id), 1000);
            }
        });
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].RemoteStreamRemoved, evt => {
            const stream = evt.stream;
            if (stream) {
                stream.stop();
                this.remoteCalls = [];
                console.log(`Remote stream is removed ${stream.getId()}`);
            }
        });
        this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].PeerLeave, evt => {
            const stream = evt.stream;
            if (stream) {
                stream.stop();
                this.remoteCalls = this.remoteCalls.filter(call => call !== `${this.getRemoteId(stream)}`);
                console.log(`${evt.uid} left from this channel`);
            }
        });
    }
    getRemoteId(stream) {
        return `agora_remote-${stream.getId()}`;
    }
};
UserComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: ngx_agora__WEBPACK_IMPORTED_MODULE_3__["NgxAgoraService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"], ngx_agora__WEBPACK_IMPORTED_MODULE_3__["NgxAgoraService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
], UserComponent);



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

const environment = {
    production: false,
    agora: {
        appId: '8f8f1efc761e4672bbd87f33f21c0a69'
    },
    firebase: {
        apiKey: "AIzaSyAnv4fHYOqh95lE8f0LX7NVtl-dtlLX60s",
        authDomain: "agora-bf17e.firebaseapp.com",
        projectId: "agora-bf17e",
        storageBucket: "agora-bf17e.appspot.com",
        messagingSenderId: "133281787788",
        appId: "1:133281787788:web:214fbcddc19ecbb03c30a9"
    }
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/roshaansiddiqui/koala_koders_proj/Client-Portal/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map