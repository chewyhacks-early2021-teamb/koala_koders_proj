function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n        <mat-toolbar color=\"primary\">\n                <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n                  <mat-icon>home</mat-icon>\n                </button>\n                <span>Chewy</span>\n                <span class=\"example-spacer\"></span>\n              \n              </mat-toolbar>\n    ​\n    ​\n        <div class=\"login-box\">\n            <h1>Login</h1>\n            <div class=\"textbox\">\n                <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                <input style = \"width:100%\" type=\"text\" placeholder=\"Username\" name=\"\" value=\"\">     \n            </div>\n            <div class=\"textbox\">\n                <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n                <input style = \"width:100%\" type=\"password\" placeholder=\"Password\" name=\"\" value=\"\">\n            </div>\n            \n    <div class = \"dropdown\" style = \"display:flex;flex-direction: column;\"> \n        \n        \n                  <mat-form-field appearance=\"fill\">\n                        <mat-label>Who Are You?</mat-label>\n                        <mat-select [(ngModel)] = 'selectedOption'>\n                          <mat-option *ngFor=\"let role of roles\" [value]=\"role.value\">\n                            {{role.viewValue}}\n                          </mat-option>\n                        </mat-select>\n                      </mat-form-field>\n\n                      <button mat-stroked-button (click) = \"login()\"> Sign In</button>\n\n            </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pharm/pharm.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pharm/pharm.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPharmPharmComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\n        <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n        <span>Chewy</span>\n        <span class=\"example-spacer\"></span>\n      \n      </mat-toolbar>\n    \n        <div [ngStyle]=\"styling\">\n            <div style = \"display:flex;justify-content: center;flex-direction: column;\">\n            <div id=\"video1\">\n                <div class=\"remote_calls\" [id]=\"remoteCalls[0]\" class=\"remote\"  ></div>\n                <!-- <img src=\"assets/test.png\" width=\"510px\" height=\"320px\"/> -->\n                <div id=\"subvideo\">\n                    <div id=\"agora_local\" class=\"local\" style = \"width:100%;\"></div>\n                </div>\n            </div>\n            <!-- <div class=\"col-6\"> -->\n                    <div style = \"width: 508px;display:flex;justify-content: center; flex-direction: column;\">\n                      <!-- <div class=\"col-12\"> -->\n                          <div style = \"justify-content: center;display: flex;\">\n                        <button *ngIf = \"showJoinButton\" mat-flat-button color=\"primary\" (click)=\"join()\">Connect To User</button>\n                        <!-- <button mat-button color=\"primary\" (click)=\"publish()\">Publish Local Stream</button> -->\n                        <!-- <button mat-button color=\"primary\" (click)=\"unpublish()\">Unpublish Local Stream</button> -->\n                        <button  *ngIf = \"showLeaveButton\" mat-flat-button color=\"warn\" (click)=\"leave()\">Leave Call</button>\n                        <button *ngIf = \"!showJoinButton\" mat-flat-button color=\"basic\" (click)=\"reccomendItem()\">{{rec_text}}</button>\n                            </div>\n                        <div style = \"display:flex; align-self: center;\"> \n                        <mat-accordion style = \"margin:20px;\" *ngIf = \"!showJoinButton\"> \n\n                                <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                                                 (closed)=\"panelOpenState = false\">\n                              <mat-expansion-panel-header>\n                                <mat-panel-title>\n                                    <strong> Manage Recommended Products</strong> \n                                        </mat-panel-title>\n                               \n                              </mat-expansion-panel-header>\n                           <div style = \"display:flex; flex-wrap: wrap; justify-content: space-around;\">\n                              <mat-card class = \"item\" > \n                                  <mat-card-title>\n                                      Chuckit! Ultra Rubber Ball Tough Dog Toy\n                                  </mat-card-title>\n                            \n                                  <mat-card-subtitle>\n                                      Category: Toy Price: $5.01\n                                  </mat-card-subtitle>\n                            \n                                  <mat-card-content style = \"display: flex;justify-content: center;\">\n                                    <img style = \"width:200px\" src=\"https://img.chewy.com/is/image/catalog/90246_MAIN._AC_SL1500_V1527093481_.jpg\" alt=\"\">\n                                  </mat-card-content>\n                                  <div style = \"display: flex;justify-content: flex-end;\"> \n                                        <button mat-icon-button aria-label=\"Example icon button with a menu icon\">\n                                                <mat-icon>delete</mat-icon>\n                                              </button>\n\n                                  </div>\n                                 \n                                 \n                              </mat-card>\n                          \n                            </div>\n                            </mat-expansion-panel>\n                            </mat-accordion>\n                    </div>   \n\n                      <!-- </div> -->\n                      <!-- <div class=\"col-12\">\n                        User id: {{ uid }}\n                      </div> -->\n                    </div>\n                </div>\n                  <!-- </div> -->\n            <!-- <div id=\"chatandlist\">\n                <div id=\"chat\">\n                    <div id=\"storedcomments\"></div>\n                    <div id=\"cfunctions\">\n                        <input type=\"textbox\" value=\"Send a comment...\" id=\"new-comment\" onclick=\"clickedontextbox()\">\n                        <input type=\"button\" value=\"Send\" onclick=\"newcomment()\" >\n                    </div>\n                </div>\n                <div id=\"list\" onclick=\"additem()\">\n                    <div id=\"item\">\n                        item\n                    </div>\n                </div>\n            </div> -->\n            \n            <div *ngIf = \"showRec\" id=\"chrome-extension\">\n        <iframe  src=\"https://chewy.com\" frameborder=\"0\" style = \"width: 100%;height: 100%;\"></iframe>            </div>\n        </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n        <mat-toolbar color=\"primary\">\n            <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n              <mat-icon>home</mat-icon>\n            </button>\n            <span>Chewy</span>\n            <span class=\"example-spacer\"></span>\n          \n          </mat-toolbar>\n        \n       \n\n<section class=\"container\">\n\n    <article class=\"row\">\n   \n  \n     \n          <!-- <div class=\"col-12\">\n            User id: {{ uid }}\n          </div> -->\n  \n      <!-- <div class=\"col-6\">\n        <div class=\"row\">\n          <h2 class=\"col-12\">Connected: {{ connected }}</h2>\n          <h2 class=\"col-12\">Published: {{ published }}</h2>\n        </div>\n      </div> -->\n  \n      <!-- <div class=\"col-12\">\n        {{ remoteCalls | json }}\n      </div> -->\n    </article>\n  \n    <article class=\"row pt-3\">\n      <div class=\"col\">\n        <div id=\"agora_local\" class=\"local\"></div>\n      </div>\n      <div class=\"col\">\n        <div class=\"remote_calls\" [id]=\"remoteCalls[0]\" class=\"remote\"></div>\n      </div>\n    </article>\n   \n  </section>\n  <div style = \"display:flex;justify-content: center; flex-direction: column;\">\n        <div style = \"justify-content: center;display: flex;margin: 10px;\"> \n      <button *ngIf = \"showJoinButton\" mat-flat-button color=\"primary\" (click)=\"join()\">Talk To An Expert Vet</button>\n      <!-- <button mat-button color=\"primary\" (click)=\"publish()\">Publish Local Stream</button> -->\n      <!-- <button mat-button color=\"primary\" (click)=\"unpublish()\">Unpublish Local Stream</button> -->\n      <button *ngIf = \"showLeaveButton\"  mat-flat-button color=\"warn\" (click)=\"leave()\">Leave Call</button>\n    </div>\n    </div>\n  <!-- <mat-card style = \"margin:20px; height:40vh;\">  -->\n \n  <!-- <mat-card-title>   -->\n      \n    <!-- <mat-card-subtitle> \n        \n    </mat-card-subtitle> -->\n\n  <!-- </mat-card-title> -->\n\n  <mat-accordion style = \"margin:20px;\"> \n\n      <mat-expansion-panel style = \"margin:20px;\"(opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n          <strong> Recommendations </strong> \n              </mat-panel-title>\n     \n    </mat-expansion-panel-header>\n <div style = \"display:flex; flex-wrap: wrap; justify-content: space-around;\">\n    <mat-card class = \"item\" > \n        <mat-card-title>\n            Chuckit! Ultra Rubber Ball Tough Dog Toy\n        </mat-card-title>\n  \n        <mat-card-subtitle>\n            Category: Toy Price: $5.01\n        </mat-card-subtitle>\n  \n        <mat-card-content style = \"display: flex;justify-content: center;\">\n          <img style = \"width:200px\" src=\"https://img.chewy.com/is/image/catalog/90246_MAIN._AC_SL1500_V1527093481_.jpg\" alt=\"\">\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card class = \"item\" > \n        <mat-card-title>\n            Chuckit! Ultra Rubber Ball Tough Dog Toy\n        </mat-card-title>\n  \n        <mat-card-subtitle>\n            Category: Toy Price: $5.01\n        </mat-card-subtitle>\n  \n        <mat-card-content style = \"display: flex;justify-content: center;\">\n          <img style = \"width:200px\" src=\"https://img.chewy.com/is/image/catalog/90246_MAIN._AC_SL1500_V1527093481_.jpg\" alt=\"\">\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card class = \"item\" > \n        <mat-card-title>\n            Chuckit! Ultra Rubber Ball Tough Dog Toy\n        </mat-card-title>\n  \n        <mat-card-subtitle>\n            Category: Toy Price: $5.01\n        </mat-card-subtitle>\n  \n        <mat-card-content style = \"display: flex;justify-content: center;\">\n          <img style = \"width:200px\" src=\"https://img.chewy.com/is/image/catalog/90246_MAIN._AC_SL1500_V1527093481_.jpg\" alt=\"\">\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card class = \"item\" > \n        <mat-card-title>\n            Chuckit! Ultra Rubber Ball Tough Dog Toy\n        </mat-card-title>\n  \n        <mat-card-subtitle>\n            Category: Toy Price: $5.01\n        </mat-card-subtitle>\n  \n        <mat-card-content style = \"display: flex;justify-content: center;\">\n          <img style = \"width:200px\" src=\"https://img.chewy.com/is/image/catalog/90246_MAIN._AC_SL1500_V1527093481_.jpg\" alt=\"\">\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card class = \"item\" > \n        <mat-card-title>\n            Chuckit! Ultra Rubber Ball Tough Dog Toy\n        </mat-card-title>\n  \n        <mat-card-subtitle>\n            Category: Toy Price: $5.01\n        </mat-card-subtitle>\n  \n        <mat-card-content style = \"display: flex;justify-content: center;\">\n          <img style = \"width:200px\" src=\"https://img.chewy.com/is/image/catalog/90246_MAIN._AC_SL1500_V1527093481_.jpg\" alt=\"\">\n        </mat-card-content>\n    </mat-card>\n    \n    \n  </div>\n  </mat-expansion-panel>\n  </mat-accordion>\n\n  \n\n\n<!-- </mat-card> -->";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _pharm_pharm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pharm/pharm.component */
    "./src/app/pharm/pharm.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }, {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'pharm',
      component: _pharm_pharm_component__WEBPACK_IMPORTED_MODULE_3__["PharmComponent"]
    }, {
      path: 'user',
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_agora__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-agora */
    "./node_modules/ngx-agora/fesm2015/ngx-agora.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pharm_pharm_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pharm/pharm.component */
    "./src/app/pharm/pharm.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _pharm_pharm_component__WEBPACK_IMPORTED_MODULE_12__["PharmComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], ngx_agora__WEBPACK_IMPORTED_MODULE_8__["NgxAgoraModule"].forRoot({
        AppID: src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].agora.appId
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n    background-image: url('homepage.jpg');\n    background-size: cover;\n    background-attachment: fixed;\n}\n.login-box {\n    position: absolute;\n    max-width: 700px;\n    padding: 50px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: white;\n    color: black;\n}\n.login-box h1 {\n    float: left;\n    font-size: 40px;\n    border-bottom: 6px solid;\n    margin-bottom: 50px;\n    padding: 13px 0\n}\n.login-box .Vet .btn-primary {\n    font-size: 20px;\n    border-radius: 12px;\n}\n.login-box .Owner .btn-primary { \n    font-size: 20px;\n    border-radius: 12px;\n}\n.login-box .dropdown{\n    width: 30rem;\n}\n.dropdown:hover .dropdown-list{\n    opacity:1;\n    position:relative;\n}\n.login-box .dropdown-select{\n    padding: 1.5rem;\n    border-radius: 4px;\n    background-color: white;\n    width: 100%;\n    display:flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 1.6rem;\n    cursor: pointer;\n}\n.login-box .dropdown-list{\n    border-radius: 4px;\n    background-color: black;\n    position:absolute;\n    top:110%;\n    left: 0;\n    right: 0;\n    opacity:0;\n    visibility:hidden;\n    transition:opacity 0.2s linear, visibility 0.2s linear;\n}\n.login-box .dropdown-list__item{\n    padding: 1rem;\n    font-size: 1.4rem;\n}\n.textbox{\n    width: 100%;\n    overflow: hidden;\n    font-size: 20px;\n    padding: 8px 0;\n    margin: 8px 0;\n    border-bottom: 1px solid;\n}\n.textbox i{\n    width:26px;\n    float:left;\n    text-align:center;\n}\n​\n.textbook input{\n    border: none;\n    outline: none;\n    background: none;\n    color: white;\n    font-size: 18px;\n    /* width: 80px; */\n    float: left;\n    margin: 10px;\n    width:100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFDQUFrRDtJQUNsRCxzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CO0FBQ0o7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsUUFBUTtJQUNSLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULGlCQUFpQjtJQUNqQixzREFBc0Q7QUFDMUQ7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2hvbWVwYWdlLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cbi5sb2dpbi1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi5sb2dpbi1ib3ggaDEge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBwYWRkaW5nOiAxM3B4IDBcbn1cbi5sb2dpbi1ib3ggLlZldCAuYnRuLXByaW1hcnkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLmxvZ2luLWJveCAuT3duZXIgLmJ0bi1wcmltYXJ5IHsgXG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4ubG9naW4tYm94IC5kcm9wZG93bntcbiAgICB3aWR0aDogMzByZW07XG59XG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWxpc3R7XG4gICAgb3BhY2l0eToxO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuLmxvZ2luLWJveCAuZHJvcGRvd24tc2VsZWN0e1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sb2dpbi1ib3ggLmRyb3Bkb3duLWxpc3R7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDoxMTAlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgb3BhY2l0eTowO1xuICAgIHZpc2liaWxpdHk6aGlkZGVuO1xuICAgIHRyYW5zaXRpb246b3BhY2l0eSAwLjJzIGxpbmVhciwgdmlzaWJpbGl0eSAwLjJzIGxpbmVhcjtcbn1cbi5sb2dpbi1ib3ggLmRyb3Bkb3duLWxpc3RfX2l0ZW17XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbn1cbi50ZXh0Ym94e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xufVxuLnRleHRib3ggaXtcbiAgICB3aWR0aDoyNnB4O1xuICAgIGZsb2F0OmxlZnQ7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG7igItcbi50ZXh0Ym9vayBpbnB1dHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgLyogd2lkdGg6IDgwcHg7ICovXG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHdpZHRoOjEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(route) {
        _classCallCheck(this, LoginComponent);

        this.route = route;
        this.roles = [{
          value: 'pharm',
          viewValue: 'Veterinarian'
        }, {
          value: 'user',
          viewValue: 'Pet Owner'
        }];
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          console.log("logging into" + this.selectedOption);
          this.route.navigate([this.selectedOption]);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pharm/pharm.component.css":
  /*!*******************************************!*\
    !*** ./src/app/pharm/pharm.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPharmPharmComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".div1 {\n    box-sizing: border-box;\n    margin: 25px;\n}\n.item {\n    width: 300px;\n     margin:10px\n}\n.div2 {\n    box-sizing: border-box;\n    margin: 25px;\n}\n/* Create two unequal columns that floats next to each other */\n.column {\n  float: left;\n  padding: 10px;\n  height: 300px;\n  margin: 10px; /* Should be removed. Only for demonstration */\n}\n.left {\n  width: 30%;\n}\n.right {\n  width: 25%;\n}\n.middle{\n    width: 30%;\n}\n/* Clear floats after the columns */\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.recommendation{\nfloat: left;\n  padding: 10px;\n  height: 500px;\n  margin: 10px;\n  width: 30%;\n}\n.chaxbox{\nwidth: 50%;\nfloat: left;\n  padding: 10px;\n  height: 250px;\n  margin: 10px; \n}\n#app {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    height: 700px;\n    width: 1300px;\n    padding: 5px;\n}\n#video1 {\n    display: flex;\n    flex-flow: wrap;\n    position: relative;\n    flex-direction: row-reverse;\n    border: 7px solid white;\n    border-radius: 10px;\n    width: 510px;\n    height: 320px;\n    margin: 5px;\n    background-color: rgba(#333, 0.5);\n}\n#subvideo {\n    background-color: rgba(#333, 0.5);\n    display: flex;\n    border: 2px solid black;\n    width: 150px;\n    height: 96px;\n    margin: 5px;\n    align-self: flex-end;\n    justify-self: right;\n    position: absolute;\n    background-color: #128CED;\n}\n#chatandlist {\n    display: flex;\n    flex-flow: wrap;\n    flex-direction: row;\n    justify-content: space-between;\n    border: solid;\n    border-width: 0px;\n    width: 508px;\n    height: 320px;\n    margin: 5px;\n}\n#chat {\n    border: solid;\n    border-width: 1px;\n    width: 290px;\n    height: 290px;\n    background-color: #128CED;\n}\n#storedcomments {\n    display: flex;\n    flex-direction: column;\n    border: solid;\n    overflow: scroll;\n    border-width: 0px;\n    height: 220px;\n    margin: 5px;\n}\n#chat input {\n    height: 30px;\n}\n#cfunctions {\n    display: flex;\n    flex-direction: row;\n    align-items: baseline;\n    height: 30px;\n    display: inline-block;\n}\ninput {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 10px 0;\n    margin-left: 5px;\n}\n#new-comment {\n    width: 190px;\n    border: 0px;\n}\n#list {\n    border: solid;\n    border-width: 1px;\n    background-color: #128CED;\n    width: 210px;\n    height: 290px;\n    overflow: scroll;\n}\n#item {\n    border-bottom: solid;\n    border-width: 1px;\n    width: 210px;\n    height: 60px;\n}\n#chrome-extension {\n    border: solid;\n    border-width: 1px;\n    width: 900px;\n    height: 620px;\n    margin: 5px;\n}\n#r {\n    display: flex;\n    flex-direction: column;\n    border: solid;\n    border-width: 0px;\n}\np {\n    margin: 0px;\n}\nb {\n    margin: 0px;\n}\n.local,\n.remote {\n   width:100%;\n    /* height: 25vw; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhhcm0vcGhhcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0tBQ1g7QUFDTDtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFDQSw4REFBOEQ7QUFDOUQ7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZLEVBQUUsOENBQThDO0FBQzlEO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0EsbUNBQW1DO0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFDQTtBQUNBLFdBQVc7RUFDVCxhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFDQTtBQUNBLFVBQVU7QUFDVixXQUFXO0VBQ1QsYUFBYTtFQUNiLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFLQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUNBQWlDO0FBQ3JDO0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztBQUNmO0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFHQTs7R0FFRyxVQUFVO0lBQ1Qsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcGhhcm0vcGhhcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYxIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMjVweDtcbn1cbi5pdGVtIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgIG1hcmdpbjoxMHB4XG59XG4uZGl2MiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDI1cHg7XG59XG4vKiBDcmVhdGUgdHdvIHVuZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbi5jb2x1bW4ge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luOiAxMHB4OyAvKiBTaG91bGQgYmUgcmVtb3ZlZC4gT25seSBmb3IgZGVtb25zdHJhdGlvbiAqL1xufVxuLmxlZnQge1xuICB3aWR0aDogMzAlO1xufVxuLnJpZ2h0IHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5taWRkbGV7XG4gICAgd2lkdGg6IDMwJTtcbn1cbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xuLnJvdzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cbi5yZWNvbW1lbmRhdGlvbntcbmZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiAzMCU7XG59XG4uY2hheGJveHtcbndpZHRoOiA1MCU7XG5mbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgbWFyZ2luOiAxMHB4OyBcbn1cblxuXG5cblxuI2FwcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBoZWlnaHQ6IDcwMHB4O1xuICAgIHdpZHRoOiAxMzAwcHg7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4jdmlkZW8xIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogd3JhcDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIGJvcmRlcjogN3B4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDUxMHB4O1xuICAgIGhlaWdodDogMzIwcHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMzMzLCAwLjUpO1xufVxuXG4jc3VidmlkZW8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzMzMywgMC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDk2cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyOENFRDtcbn1cblxuI2NoYXRhbmRsaXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xuICAgIHdpZHRoOiA1MDhweDtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4jY2hhdCB7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICB3aWR0aDogMjkwcHg7XG4gICAgaGVpZ2h0OiAyOTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI4Q0VEO1xufVxuXG4jc3RvcmVkY29tbWVudHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAyMjBweDtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuI2NoYXQgaW5wdXQge1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuI2NmdW5jdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuaW5wdXQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbiNuZXctY29tbWVudCB7XG4gICAgd2lkdGg6IDE5MHB4O1xuICAgIGJvcmRlcjogMHB4O1xufVxuXG4jbGlzdCB7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI4Q0VEO1xuICAgIHdpZHRoOiAyMTBweDtcbiAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbiNpdGVtIHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICB3aWR0aDogMjEwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4jY2hyb21lLWV4dGVuc2lvbiB7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICB3aWR0aDogOTAwcHg7XG4gICAgaGVpZ2h0OiA2MjBweDtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuI3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xufVxuXG5wIHtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuYiB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cblxuLmxvY2FsLFxuLnJlbW90ZSB7XG4gICB3aWR0aDoxMDAlO1xuICAgIC8qIGhlaWdodDogMjV2dzsgKi9cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pharm/pharm.component.ts":
  /*!******************************************!*\
    !*** ./src/app/pharm/pharm.component.ts ***!
    \******************************************/

  /*! exports provided: PharmComponent */

  /***/
  function srcAppPharmPharmComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PharmComponent", function () {
      return PharmComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_agora__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-agora */
    "./node_modules/ngx-agora/fesm2015/ngx-agora.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var PharmComponent = /*#__PURE__*/function () {
      function PharmComponent(agoraService) {
        _classCallCheck(this, PharmComponent);

        this.agoraService = agoraService;
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
        this.uid = Math.floor(Math.random() * 100);
        this.client = this.agoraService.createClient({
          mode: 'rtc',
          codec: 'h264'
        });
        this.assignClientHandlers();
      }

      _createClass(PharmComponent, [{
        key: "reccomendItem",
        value: function reccomendItem() {
          if (this.showRec == false) {
            this.rec_text = "Hide Recommend View";
            this.styling = {
              "display": "flex",
              "flex-direction": "column",
              "flex-wrap": "wrap",
              "height": "700px",
              "width": "1300px",
              "padding": "5px"
            };
          } else {
            this.styling = {
              "display": "flex",
              "flex-direction": "row",
              "flex-wrap": "wrap",
              "height": "700px",
              "width": "1300px",
              "padding": "5px",
              "justify-content": "center"
            };
            this.rec_text = "Show Recommend View";
          }

          this.showRec = !this.showRec;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.styling = {
            "display": "flex",
            "flex-direction": "row",
            "flex-wrap": "wrap",
            "height": "700px",
            "width": "1300px",
            "padding": "5px",
            "justify-content": "center"
          };
          this.client.init(this.appId.value, function () {
            return console.log('Initialized successfully');
          }, function () {
            return console.log('Could not initialize');
          });
        }
      }, {
        key: "join",
        value: function join() {
          var _this = this;

          this.localStream = this.agoraService.createStream({
            streamID: this.uid,
            audio: true,
            video: true,
            screen: false
          });
          this.showJoinButton = false;
          this.showLeaveButton = true;
          this.assignLocalStreamHandlers();
          this.init();
          this.client.join(null, this.channel.value, this.uid);
          setTimeout(function () {
            _this.publish();
          }, 2000);
        }
      }, {
        key: "publish",
        value: function publish() {
          this.client.publish(this.localStream, function (err) {
            return console.log('Publish local stream error: ' + err);
          });
        }
      }, {
        key: "unpublish",
        value: function unpublish() {
          this.client.unpublish(this.localStream, function (error) {
            return console.error(error);
          });
          this.published = false;
        }
      }, {
        key: "leave",
        value: function leave() {
          var _this2 = this;

          if (this.connected) {
            this.client.leave(function () {
              console.log('Left the channel successfully');
              _this2.connected = false;
              _this2.published = false;
              _this2.remoteCalls = [];
            }, function (err) {
              console.log('Leave channel failed');
            });
          } else {
            this.agoraService.AgoraRTC.Logger.warning('Local client is not connected to channel.');
          }
        }
      }, {
        key: "init",
        value: function init() {
          var _this3 = this;

          this.localStream.init(function () {
            // The user has granted access to the camera and mic.
            console.log('getUserMedia successfully');

            _this3.localStream.play('agora_local');

            _this3.connected = true;
          }, function (err) {
            return console.log('getUserMedia failed', err);
          });
        }
      }, {
        key: "assignLocalStreamHandlers",
        value: function assignLocalStreamHandlers() {
          this.localStream.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["StreamEvent"].MediaAccessAllowed, function () {
            console.log('accessAllowed');
          }); // The user has denied access to the camera and mic.

          this.localStream.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["StreamEvent"].MediaAccessDenied, function () {
            console.log('accessDenied');
          });
        }
      }, {
        key: "assignClientHandlers",
        value: function assignClientHandlers() {
          var _this4 = this;

          this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].LocalStreamPublished, function (evt) {
            _this4.published = true;
            console.log('Publish local stream successfully');
          });
          this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].Error, function (error) {
            console.log('Got error msg:', error.reason);

            if (error.reason === 'DYNAMIC_KEY_TIMEOUT') {
              _this4.client.renewChannelKey('', function () {
                return console.log('Renewed the channel key successfully.');
              }, function (renewError) {
                return console.error('Renew channel key failed: ', renewError);
              });
            }
          });
          this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].RemoteStreamAdded, function (evt) {
            var stream = evt.stream;

            _this4.client.subscribe(stream, {
              audio: true,
              video: true
            }, function (err) {
              console.log('Subscribe stream failed', err);
            });
          });
          this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].RemoteStreamSubscribed, function (evt) {
            var stream = evt.stream;

            var id = _this4.getRemoteId(stream);

            if (!_this4.remoteCalls.length) {
              _this4.remoteCalls.push(id);

              setTimeout(function () {
                return stream.play(id);
              }, 1000);
            }
          });
          this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].RemoteStreamRemoved, function (evt) {
            var stream = evt.stream;

            if (stream) {
              stream.stop();
              _this4.remoteCalls = [];
              console.log("Remote stream is removed ".concat(stream.getId()));
            }
          });
          this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].PeerLeave, function (evt) {
            var stream = evt.stream;

            if (stream) {
              stream.stop();
              _this4.remoteCalls = _this4.remoteCalls.filter(function (call) {
                return call !== "".concat(_this4.getRemoteId(stream));
              });
              console.log("".concat(evt.uid, " left from this channel"));
            }
          });
        }
      }, {
        key: "getRemoteId",
        value: function getRemoteId(stream) {
          return "agora_remote-".concat(stream.getId());
        }
      }]);

      return PharmComponent;
    }();

    PharmComponent.ctorParameters = function () {
      return [{
        type: ngx_agora__WEBPACK_IMPORTED_MODULE_3__["NgxAgoraService"]
      }];
    };

    PharmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pharm',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pharm.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pharm/pharm.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pharm.component.css */
      "./src/app/pharm/pharm.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_agora__WEBPACK_IMPORTED_MODULE_3__["NgxAgoraService"]])], PharmComponent);
    /***/
  },

  /***/
  "./src/app/user/user.component.css":
  /*!*****************************************!*\
    !*** ./src/app/user/user.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".local {\n    background: rgba(#333, 0.5);\n    \n}\n#agora_local {\n    border: 7px solid white;\n    border-radius: 10px;\n}\n#undefined {\n    border: 7px solid white;\n    border-radius: 10px;\n}\n.remote {\n    background: rgba(#333, 0.5);\n    border: 7px solid white;\n    border-radius: 10px;\n}\n.local,\n.remote {\n    height: 25vw;\n}\n#chat {\n    border: solid;\n    border-width: 1px;\n    width: 60%;\n    height: 320px;\n    background-color: #128CED;\n}\n#storedcomments {\n    display: flex;\n    flex-direction: column;\n    border: solid;\n    overflow: scroll;\n    border-width: 0px;\n    height: 260px;\n    margin: 5px;\n}\n#chat input {\n    height: 300;\n    \n}\n#cfunctions {\n    display: flex;\n    flex-direction: row;\n    align-items: baseline;\n    height: 30px;\n    display: inline-block;\n}\ninput {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 10px 0;\n    margin-left: 5px;\n}\n#new-comment {\n    width: 200px;\n    border: 0px;\n}\n#r {\n    display: flex;\n    flex-direction: column;\n    border: solid;\n    border-width: 0px;\n}\np {\n    margin: 0px;\n}\nb {\n    margin: 0px;\n}\n.div1 {\n            box-sizing: border-box;\n            margin: 25px;\n        }\n.div2 {\n            box-sizing: border-box;\n            margin: 25px;\n        }\n/* Create two unequal columns that floats next to each other */\n.column {\n          float: left;\n          padding: 10px;\n          height: 300px;\n          margin: 10px; /* Should be removed. Only for demonstration */\n        }\n.left {\n          width: 30%;\n          \n        }\n.right {\n          width: 25%;\n        }\n.middle{\n            width: 30%;\n        }\n/* Clear floats after the columns */\n.row:after {\n          content: \"\";\n          display: table;\n          clear: both;\n\n        \n        }\n.recommendation{\n        float: left;\n          padding: 10px;\n          height: 380px;\n          margin: 10px;\n          width: 30%;\n   \n\n      }\n.chaxbox{\n        width: 60%;\n        float: left;\n        padding: 10px;\n        height: 250px;\n        margin: 10px; \n          \n      }\ndiv.ex3 {\n      background-color:white;\n      width: 90%;\n      height: 70%;\n      overflow: auto;\n}\n/* Create two equal columns that floats next to each other */\n.column1 {\n  float: left;\n  width: 30%;\n  padding: 10px;\n  height: 300px; /* Should be removed. Only for demonstration */\n}\n/* Clear floats after the columns */\n.row1:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .column {\n    width: 100%;\n  }\n}\n.item {\n    width: 300px;\n     margin:10px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7O0FBRS9CO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBR0E7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUVBOztJQUVJLFlBQVk7QUFDaEI7QUFLQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVzs7QUFFZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ1E7WUFDSSxzQkFBc0I7WUFDdEIsWUFBWTtRQUNoQjtBQUNBO1lBQ0ksc0JBQXNCO1lBQ3RCLFlBQVk7UUFDaEI7QUFHQSw4REFBOEQ7QUFDOUQ7VUFDRSxXQUFXO1VBQ1gsYUFBYTtVQUNiLGFBQWE7VUFDYixZQUFZLEVBQUUsOENBQThDO1FBQzlEO0FBRUE7VUFDRSxVQUFVOztRQUVaO0FBRUE7VUFDRSxVQUFVO1FBQ1o7QUFDQTtZQUNJLFVBQVU7UUFDZDtBQUNBLG1DQUFtQztBQUNuQztVQUNFLFdBQVc7VUFDWCxjQUFjO1VBQ2QsV0FBVzs7O1FBR2I7QUFDRjtRQUNFLFdBQVc7VUFDVCxhQUFhO1VBQ2IsYUFBYTtVQUNiLFlBQVk7VUFDWixVQUFVOzs7TUFHZDtBQUVBO1FBQ0UsVUFBVTtRQUNWLFdBQVc7UUFDWCxhQUFhO1FBQ2IsYUFBYTtRQUNiLFlBQVk7O01BRWQ7QUFFQTtNQUNBLHNCQUFzQjtNQUN0QixVQUFVO01BQ1YsV0FBVztNQUNYLGNBQWM7QUFDcEI7QUFLQSw0REFBNEQ7QUFDNUQ7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYixhQUFhLEVBQUUsOENBQThDO0FBQy9EO0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFFQSx1R0FBdUc7QUFDdkc7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBQ0E7SUFDSSxZQUFZO0tBQ1g7QUFDTCIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvY2FsIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCMzMzMsIDAuNSk7XG4gICAgXG59XG4jYWdvcmFfbG9jYWwge1xuICAgIGJvcmRlcjogN3B4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiN1bmRlZmluZWQge1xuICAgIGJvcmRlcjogN3B4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cblxuLnJlbW90ZSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgjMzMzLCAwLjUpO1xuICAgIGJvcmRlcjogN3B4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5sb2NhbCxcbi5yZW1vdGUge1xuICAgIGhlaWdodDogMjV2dztcbn1cblxuXG5cblxuI2NoYXQge1xuICAgIGJvcmRlcjogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjhDRUQ7XG59XG4jc3RvcmVkY29tbWVudHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAyNjBweDtcbiAgICBtYXJnaW46IDVweDtcbn1cbiNjaGF0IGlucHV0IHtcbiAgICBoZWlnaHQ6IDMwMDtcbiAgICBcbn1cbiNjZnVuY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5pbnB1dCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbiNuZXctY29tbWVudCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlcjogMHB4O1xufVxuI3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xufVxucCB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5iIHtcbiAgICBtYXJnaW46IDBweDtcbn1cbiAgICAgICAgLmRpdjEge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIG1hcmdpbjogMjVweDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2MiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgbWFyZ2luOiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLyogQ3JlYXRlIHR3byB1bmVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXG4gICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICBtYXJnaW46IDEwcHg7IC8qIFNob3VsZCBiZSByZW1vdmVkLiBPbmx5IGZvciBkZW1vbnN0cmF0aW9uICovXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5sZWZ0IHtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAucmlnaHQge1xuICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIH1cbiAgICAgICAgLm1pZGRsZXtcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIH1cbiAgICAgICAgLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4gICAgICAgIC5yb3c6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgICAgY2xlYXI6IGJvdGg7XG5cbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIC5yZWNvbW1lbmRhdGlvbntcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDM4MHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgXG5cbiAgICAgIH1cblxuICAgICAgLmNoYXhib3h7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICBtYXJnaW46IDEwcHg7IFxuICAgICAgICAgIFxuICAgICAgfVxuXG4gICAgICBkaXYuZXgzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuXG5cblxuLyogQ3JlYXRlIHR3byBlcXVhbCBjb2x1bW5zIHRoYXQgZmxvYXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuLmNvbHVtbjEge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAzMDBweDsgLyogU2hvdWxkIGJlIHJlbW92ZWQuIE9ubHkgZm9yIGRlbW9uc3RyYXRpb24gKi9cbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93MTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uaXRlbSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgICBtYXJnaW46MTBweFxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_agora__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-agora */
    "./node_modules/ngx-agora/fesm2015/ngx-agora.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var UserComponent = /*#__PURE__*/function () {
      function UserComponent(agoraService) {
        _classCallCheck(this, UserComponent);

        this.agoraService = agoraService;
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
        this.uid = Math.floor(Math.random() * 100);
        this.client = this.agoraService.createClient({
          mode: 'rtc',
          codec: 'h264'
        });
        this.assignClientHandlers();
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.client.init(this.appId.value, function () {
            return console.log('Initialized successfully');
          }, function () {
            return console.log('Could not initialize');
          });
        }
      }, {
        key: "join",
        value: function join() {
          var _this5 = this;

          this.localStream = this.agoraService.createStream({
            streamID: this.uid,
            audio: true,
            video: true,
            screen: false
          });
          this.assignLocalStreamHandlers();
          this.init();
          this.client.join(null, this.channel.value, this.uid);
          setTimeout(function () {
            _this5.publish();
          }, 2000);
        }
      }, {
        key: "publish",
        value: function publish() {
          this.client.publish(this.localStream, function (err) {
            return console.log('Publish local stream error: ' + err);
          });
        }
      }, {
        key: "unpublish",
        value: function unpublish() {
          this.client.unpublish(this.localStream, function (error) {
            return console.error(error);
          });
          this.published = false;
        }
      }, {
        key: "leave",
        value: function leave() {
          var _this6 = this;

          if (this.connected) {
            this.client.leave(function () {
              console.log('Left the channel successfully');
              _this6.connected = false;
              _this6.published = false;
              _this6.remoteCalls = [];
            }, function (err) {
              console.log('Leave channel failed');
            });
          } else {
            this.agoraService.AgoraRTC.Logger.warning('Local client is not connected to channel.');
          }
        }
      }, {
        key: "init",
        value: function init() {
          var _this7 = this;

          this.localStream.init(function () {
            // The user has granted access to the camera and mic.
            console.log('getUserMedia successfully');

            _this7.localStream.play('agora_local');

            _this7.connected = true;
          }, function (err) {
            return console.log('getUserMedia failed', err);
          });
        }
      }, {
        key: "assignLocalStreamHandlers",
        value: function assignLocalStreamHandlers() {
          this.localStream.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["StreamEvent"].MediaAccessAllowed, function () {
            console.log('accessAllowed');
          }); // The user has denied access to the camera and mic.

          this.localStream.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["StreamEvent"].MediaAccessDenied, function () {
            console.log('accessDenied');
          });
        }
      }, {
        key: "assignClientHandlers",
        value: function assignClientHandlers() {
          var _this8 = this;

          this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].LocalStreamPublished, function (evt) {
            _this8.published = true;
            console.log('Publish local stream successfully');
          });
          this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].Error, function (error) {
            console.log('Got error msg:', error.reason);

            if (error.reason === 'DYNAMIC_KEY_TIMEOUT') {
              _this8.client.renewChannelKey('', function () {
                return console.log('Renewed the channel key successfully.');
              }, function (renewError) {
                return console.error('Renew channel key failed: ', renewError);
              });
            }
          });
          this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].RemoteStreamAdded, function (evt) {
            var stream = evt.stream;

            _this8.client.subscribe(stream, {
              audio: true,
              video: true
            }, function (err) {
              console.log('Subscribe stream failed', err);
            });
          });
          this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].RemoteStreamSubscribed, function (evt) {
            var stream = evt.stream;

            var id = _this8.getRemoteId(stream);

            if (!_this8.remoteCalls.length) {
              _this8.remoteCalls.push(id);

              setTimeout(function () {
                return stream.play(id);
              }, 1000);
            }
          });
          this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].RemoteStreamRemoved, function (evt) {
            var stream = evt.stream;

            if (stream) {
              stream.stop();
              _this8.remoteCalls = [];
              console.log("Remote stream is removed ".concat(stream.getId()));
            }
          });
          this.client.on(ngx_agora__WEBPACK_IMPORTED_MODULE_3__["ClientEvent"].PeerLeave, function (evt) {
            var stream = evt.stream;

            if (stream) {
              stream.stop();
              _this8.remoteCalls = _this8.remoteCalls.filter(function (call) {
                return call !== "".concat(_this8.getRemoteId(stream));
              });
              console.log("".concat(evt.uid, " left from this channel"));
            }
          });
        }
      }, {
        key: "getRemoteId",
        value: function getRemoteId(stream) {
          return "agora_remote-".concat(stream.getId());
        }
      }]);

      return UserComponent;
    }();

    UserComponent.ctorParameters = function () {
      return [{
        type: ngx_agora__WEBPACK_IMPORTED_MODULE_3__["NgxAgoraService"]
      }];
    };

    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.component.css */
      "./src/app/user/user.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_agora__WEBPACK_IMPORTED_MODULE_3__["NgxAgoraService"]])], UserComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      agora: {
        appId: '8f8f1efc761e4672bbd87f33f21c0a69'
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/roshaansiddiqui/koala_koders_proj/Client-Portal/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map