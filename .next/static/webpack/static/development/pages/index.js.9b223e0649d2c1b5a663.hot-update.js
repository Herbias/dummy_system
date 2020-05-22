webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./Layouts/MainLayout.js":
/*!*******************************!*\
  !*** ./Layouts/MainLayout.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var _components_SettingsModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SettingsModal */ "./components/SettingsModal.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/action */ "./redux/action.js");







var _jsxFileName = "C:\\Users\\Adrian\\Desktop\\DummySystem\\VGL\\Layouts\\MainLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var MainLayout = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MainLayout, _Component);

  var _super = _createSuper(MainLayout);

  function MainLayout() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      showModal: false,
      accessKey: ""
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "showModal", function () {
      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        showModal: !_this.state.showModal,
        accessKey: ""
      }));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "createSettings", function (data) {
      _this.setState(_objectSpread(_objectSpread({}, _this.state), {}, {
        showModal: !_this.state.showModal
      }));

      _this.props.SetSettings(data);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainLayout, [{
    key: "getChallenge",
    value: function getChallenge() {
      var _this2 = this;

      var a = FetchData("GET", this.props.settings.url, {
        operation: "getchallenge",
        username: this.props.settings.user
      }).then(function (res) {
        if (res.success) {
          return md5__WEBPACK_IMPORTED_MODULE_11___default()(res.result.token + _this2.props.settings.accessKey); // this.setState({
          //   ...this.state,
          //   accessKey: md5(res.result.token + this.props.settings.accessKey),
          // });
        }
      });
      console.log(a[value]);
    }
  }, {
    key: "getCredential",
    value: function getCredential() {
      var _this3 = this;

      var a = FetchData("POST", this.props.settings.url, {
        operation: "login",
        username: this.props.settings.user,
        accessKey: this.state.accessKey
      }).then(function (res) {
        if (res.success) _this3.props.SetCredential({
          sessionName: res.result.sessionName,
          userId: res.result.userId
        });
      });
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      var a = FetchData("GET", this.props.settings.url, {
        operation: "query",
        sessionName: this.props.credentials.sessionName,
        query: "SELECT user_name, first_name, last_name FROM Users WHERE id = ".concat(this.props.credentials.userId, ";")
      }).then(function (res) {
        if (res.success) console.log(res.result);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.settings !== this.props.settings) {
        this.getChallenge();
      }

      if (this.state.accessKey || prevProps.credentials !== this.props.credentials) {
        this.getCredential();
      }

      if (prevProps.credentials != this.props.credentials) {
        this.getUserInfo();
      }

      console.log(this.props.credentials);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_8__["default"], {
        Show: this.showModal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }
      }), this.props.children, this.state.showModal && __jsx(_components_SettingsModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        SetSettings: this.createSettings,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }
      }));
    }
  }]);

  return MainLayout;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var FetchData = function FetchData(method, url, data) {
  return new Promise(function (resolve, reject) {
    switch (method) {
      case "GET":
        fetch(url + "/webservice.php?".concat(encodeFormData(data)), {
          header: {
            "Content-Type": "application/x-www-form-urlencoded",
            Mode: "no-cors"
          }
        }).then(function (res) {
          try {
            if (res.ok) return res.json();
          } catch (err) {
            console.warn(e);
          }
        }).then(function (data) {
          resolve(data);
        });
        break;

      case "POST":
        var body = encodeFormData({
          operation: "login",
          username: data.username,
          accessKey: data.accessKey
        });
        fetch(url + "/webservice.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: body
        }).then(function (res) {
          try {
            if (res.ok) return res.json();
          } catch (err) {
            console.warn(e);
          }
        }).then(function (data) {
          resolve(data);
        });
        break;
    }
  });
};

_c = FetchData;

var encodeFormData = function encodeFormData(data) {
  return Object.keys(data).map(function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
  }).join("&");
};

var mapDispatchToProps = {
  SetSettings: _redux_action__WEBPACK_IMPORTED_MODULE_12__["SetSettings"],
  SetCredential: _redux_action__WEBPACK_IMPORTED_MODULE_12__["SetCredential"]
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    settings: state.settings,
    credentials: state.credentials
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(MainLayout));

var _c;

$RefreshReg$(_c, "FetchData");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXRzL01haW5MYXlvdXQuanMiXSwibmFtZXMiOlsiTWFpbkxheW91dCIsInNob3dNb2RhbCIsImFjY2Vzc0tleSIsInNldFN0YXRlIiwic3RhdGUiLCJkYXRhIiwicHJvcHMiLCJTZXRTZXR0aW5ncyIsImEiLCJGZXRjaERhdGEiLCJzZXR0aW5ncyIsInVybCIsIm9wZXJhdGlvbiIsInVzZXJuYW1lIiwidXNlciIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwibWQ1IiwicmVzdWx0IiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJTZXRDcmVkZW50aWFsIiwic2Vzc2lvbk5hbWUiLCJ1c2VySWQiLCJjcmVkZW50aWFscyIsInF1ZXJ5IiwicHJldlByb3BzIiwiZ2V0Q2hhbGxlbmdlIiwiZ2V0Q3JlZGVudGlhbCIsImdldFVzZXJJbmZvIiwiY2hpbGRyZW4iLCJjcmVhdGVTZXR0aW5ncyIsIkNvbXBvbmVudCIsIm1ldGhvZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJlbmNvZGVGb3JtRGF0YSIsImhlYWRlciIsIk1vZGUiLCJvayIsImpzb24iLCJlcnIiLCJ3YXJuIiwiZSIsImJvZHkiLCJoZWFkZXJzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0lBRU1BLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsZUFBUyxFQUFFLEtBREw7QUFFTkMsZUFBUyxFQUFFO0FBRkwsSzs7b05BS0ksWUFBTTtBQUNoQixZQUFLQyxRQUFMLGlDQUNLLE1BQUtDLEtBRFY7QUFFRUgsaUJBQVMsRUFB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QUFBZWlCLGVBQWEsRUFBYkEsNERBQWFBO0FBQTVCLENBQTNCOztBQUVBLElBQU1rQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUN0RCxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMTSxZQUFRLEVBQUVOLEtBQUssQ0FBQ00sUUFEWDtBQUVMaUIsZUFBVyxFQUFFdkIsS0FBSyxDQUFDdUI7QUFGZCxHQUFQO0FBSUQsQ0FMRDs7QUFPZWdDLDJIQUFPLENBQUNELGVBQUQsRUFBa0JELGtCQUFsQixDQUFQLENBQTZDekQsVUFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOWIyMjNlMDY0OWQyYzFiNWE2NjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBTZXR0aW5nc01vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL1NldHRpbmdzTW9kYWxcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgbWQ1IGZyb20gXCJtZDVcIjtcclxuXHJcbmltcG9ydCB7IFNldFNldHRpbmdzLCBTZXRDcmVkZW50aWFsIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvblwiO1xyXG5cclxuY2xhc3MgTWFpbkxheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzaG93TW9kYWw6IGZhbHNlLFxyXG4gICAgYWNjZXNzS2V5OiBcIlwiLFxyXG4gIH07XHJcblxyXG4gIHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICBzaG93TW9kYWw6ICF0aGlzLnN0YXRlLnNob3dNb2RhbCxcclxuICAgICAgYWNjZXNzS2V5OiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY3JlYXRlU2V0dGluZ3MgPSAoZGF0YSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHNob3dNb2RhbDogIXRoaXMuc3RhdGUuc2hvd01vZGFsIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5TZXRTZXR0aW5ncyhkYXRhKTtcclxuICB9O1xyXG5cclxuICBnZXRDaGFsbGVuZ2UoKSB7XHJcbiAgICBsZXQgYSA9IEZldGNoRGF0YShcIkdFVFwiLCB0aGlzLnByb3BzLnNldHRpbmdzLnVybCwge1xyXG4gICAgICBvcGVyYXRpb246IFwiZ2V0Y2hhbGxlbmdlXCIsXHJcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnByb3BzLnNldHRpbmdzLnVzZXIsXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIG1kNShyZXMucmVzdWx0LnRva2VuICsgdGhpcy5wcm9wcy5zZXR0aW5ncy5hY2Nlc3NLZXkpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAvLyAgIGFjY2Vzc0tleTogbWQ1KHJlcy5yZXN1bHQudG9rZW4gKyB0aGlzLnByb3BzLnNldHRpbmdzLmFjY2Vzc0tleSksXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coYVt2YWx1ZV0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3JlZGVudGlhbCgpIHtcclxuICAgIGxldCBhID0gRmV0Y2hEYXRhKFwiUE9TVFwiLCB0aGlzLnByb3BzLnNldHRpbmdzLnVybCwge1xyXG4gICAgICBvcGVyYXRpb246IFwibG9naW5cIixcclxuICAgICAgdXNlcm5hbWU6IHRoaXMucHJvcHMuc2V0dGluZ3MudXNlcixcclxuICAgICAgYWNjZXNzS2V5OiB0aGlzLnN0YXRlLmFjY2Vzc0tleSxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLnN1Y2Nlc3MpXHJcbiAgICAgICAgdGhpcy5wcm9wcy5TZXRDcmVkZW50aWFsKHtcclxuICAgICAgICAgIHNlc3Npb25OYW1lOiByZXMucmVzdWx0LnNlc3Npb25OYW1lLFxyXG4gICAgICAgICAgdXNlcklkOiByZXMucmVzdWx0LnVzZXJJZCxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICBsZXQgYSA9IEZldGNoRGF0YShcIkdFVFwiLCB0aGlzLnByb3BzLnNldHRpbmdzLnVybCwge1xyXG4gICAgICBvcGVyYXRpb246IFwicXVlcnlcIixcclxuICAgICAgc2Vzc2lvbk5hbWU6IHRoaXMucHJvcHMuY3JlZGVudGlhbHMuc2Vzc2lvbk5hbWUsXHJcbiAgICAgIHF1ZXJ5OiBgU0VMRUNUIHVzZXJfbmFtZSwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lIEZST00gVXNlcnMgV0hFUkUgaWQgPSAke3RoaXMucHJvcHMuY3JlZGVudGlhbHMudXNlcklkfTtgLFxyXG4gICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGlmIChyZXMuc3VjY2VzcykgY29uc29sZS5sb2cocmVzLnJlc3VsdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgIGlmIChwcmV2UHJvcHMuc2V0dGluZ3MgIT09IHRoaXMucHJvcHMuc2V0dGluZ3MpIHtcclxuICAgICAgdGhpcy5nZXRDaGFsbGVuZ2UoKTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5zdGF0ZS5hY2Nlc3NLZXkgfHxcclxuICAgICAgcHJldlByb3BzLmNyZWRlbnRpYWxzICE9PSB0aGlzLnByb3BzLmNyZWRlbnRpYWxzXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5nZXRDcmVkZW50aWFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByZXZQcm9wcy5jcmVkZW50aWFscyAhPSB0aGlzLnByb3BzLmNyZWRlbnRpYWxzKSB7XHJcbiAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmNyZWRlbnRpYWxzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPE5hdmlnYXRpb24gU2hvdz17dGhpcy5zaG93TW9kYWx9IC8+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd01vZGFsICYmIChcclxuICAgICAgICAgIDxTZXR0aW5nc01vZGFsIFNldFNldHRpbmdzPXt0aGlzLmNyZWF0ZVNldHRpbmdzfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmxldCBGZXRjaERhdGEgPSAobWV0aG9kLCB1cmwsIGRhdGEpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICAgIGZldGNoKHVybCArIGAvd2Vic2VydmljZS5waHA/JHtlbmNvZGVGb3JtRGF0YShkYXRhKX1gLCB7XHJcbiAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgICAgICAgICAgTW9kZTogXCJuby1jb3JzXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5vaykgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgICBsZXQgYm9keSA9IGVuY29kZUZvcm1EYXRhKHtcclxuICAgICAgICAgIG9wZXJhdGlvbjogXCJsb2dpblwiLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICBhY2Nlc3NLZXk6IGRhdGEuYWNjZXNzS2V5LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmZXRjaCh1cmwgKyBgL3dlYnNlcnZpY2UucGhwYCwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB9LFxyXG4gICAgICAgICAgYm9keTogYm9keSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGlmIChyZXMub2spIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBlbmNvZGVGb3JtRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpXHJcbiAgICAubWFwKChrZXkpID0+IGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKSlcclxuICAgIC5qb2luKFwiJlwiKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHsgU2V0U2V0dGluZ3MsIFNldENyZWRlbnRpYWwgfTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzZXR0aW5nczogc3RhdGUuc2V0dGluZ3MsXHJcbiAgICBjcmVkZW50aWFsczogc3RhdGUuY3JlZGVudGlhbHMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1haW5MYXlvdXQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9