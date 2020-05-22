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
          _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
            accessKey: md5__WEBPACK_IMPORTED_MODULE_11___default()(res.result.token + _this2.props.settings.accessKey)
          }));
        }
      });
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
      var a = FetchData("GET", settings.url, {
        operation: "query",
        sessionName: credentials.sessionName,
        query: "SELECT user_name, first_name, last_name FROM Users WHERE id = ".concat(credentials.userId, ";")
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

      if (this.state.accessKey) {
        this.getCredential();
      }

      if (preProps.credentials != this.props.credentials) {
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
          lineNumber: 84,
          columnNumber: 9
        }
      }), this.props.children, this.state.showModal && __jsx(_components_SettingsModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        SetSettings: this.createSettings,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXRzL01haW5MYXlvdXQuanMiXSwibmFtZXMiOlsiTWFpbkxheW91dCIsInNob3dNb2RhbCIsImFjY2Vzc0tleSIsInNldFN0YXRlIiwic3RhdGUiLCJkYXRhIiwicHJvcHMiLCJTZXRTZXR0aW5ncyIsImEiLCJGZXRjaERhdGEiLCJzZXR0aW5ncyIsInVybCIsIm9wZXJhdGlvbiIsInVzZXJuYW1lIiwidXNlciIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwibWQ1IiwicmVzdWx0IiwidG9rZW4iLCJTZXRDcmVkZW50aWFsIiwic2Vzc2lvbk5hbWUiLCJ1c2VySWQiLCJjcmVkZW50aWFscyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInByZXZQcm9wcyIsImdldENoYWxsZW5nZSIsImdldENyZWRlbnRpYWwiLCJwcmVQcm9wcyIsImdldFVzZXJJbmZvIiwiY2hpbGRyZW4iLCJjcmVhdGVTZXR0aW5ncyIsIkNvbXBvbmVudCIsIm1ldGhvZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJlbmNvZGVGb3JtRGF0YSIsImhlYWRlciIsIk1vZGUiLCJvayIsImpzb24iLCJlcnIiLCJ3YXJuIiwiZSIsImJvZHkiLCJoZWFkZXJzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0lBRU1BLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsZUFBUyxFQUFFLEtBREw7QUFFTkMsZUFBUyxFQUFFO0FBRkwsSzs7b05BS0ksWUFBTTtBQUNoQixZQUFLQyxRQUFMLGlDQUNLLE1BQUtDLEtBRFY7QUFFRUgsaUJBQVMs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UUFEWDtBQUVMYyxlQUFXLEVBQUVwQixLQUFLLENBQUNvQjtBQUZkLEdBQVA7QUFJRCxDQUxEOztBQU9lbUMsMkhBQU8sQ0FBQ0QsZUFBRCxFQUFrQkQsa0JBQWxCLENBQVAsQ0FBNkN6RCxVQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4xN2RlYTE5ZjU0MWZkMjQ1MjZiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IFNldHRpbmdzTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2V0dGluZ3NNb2RhbFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBtZDUgZnJvbSBcIm1kNVwiO1xyXG5cclxuaW1wb3J0IHsgU2V0U2V0dGluZ3MsIFNldENyZWRlbnRpYWwgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uXCI7XHJcblxyXG5jbGFzcyBNYWluTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHNob3dNb2RhbDogZmFsc2UsXHJcbiAgICBhY2Nlc3NLZXk6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgc2hvd01vZGFsID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgIHNob3dNb2RhbDogIXRoaXMuc3RhdGUuc2hvd01vZGFsLFxyXG4gICAgICBhY2Nlc3NLZXk6IFwiXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjcmVhdGVTZXR0aW5ncyA9IChkYXRhKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgc2hvd01vZGFsOiAhdGhpcy5zdGF0ZS5zaG93TW9kYWwgfSk7XHJcbiAgICB0aGlzLnByb3BzLlNldFNldHRpbmdzKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGdldENoYWxsZW5nZSgpIHtcclxuICAgIGxldCBhID0gRmV0Y2hEYXRhKFwiR0VUXCIsIHRoaXMucHJvcHMuc2V0dGluZ3MudXJsLCB7XHJcbiAgICAgIG9wZXJhdGlvbjogXCJnZXRjaGFsbGVuZ2VcIixcclxuICAgICAgdXNlcm5hbWU6IHRoaXMucHJvcHMuc2V0dGluZ3MudXNlcixcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICBhY2Nlc3NLZXk6IG1kNShyZXMucmVzdWx0LnRva2VuICsgdGhpcy5wcm9wcy5zZXR0aW5ncy5hY2Nlc3NLZXkpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldENyZWRlbnRpYWwoKSB7XHJcbiAgICBsZXQgYSA9IEZldGNoRGF0YShcIlBPU1RcIiwgdGhpcy5wcm9wcy5zZXR0aW5ncy51cmwsIHtcclxuICAgICAgb3BlcmF0aW9uOiBcImxvZ2luXCIsXHJcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnByb3BzLnNldHRpbmdzLnVzZXIsXHJcbiAgICAgIGFjY2Vzc0tleTogdGhpcy5zdGF0ZS5hY2Nlc3NLZXksXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5zdWNjZXNzKVxyXG4gICAgICAgIHRoaXMucHJvcHMuU2V0Q3JlZGVudGlhbCh7XHJcbiAgICAgICAgICBzZXNzaW9uTmFtZTogcmVzLnJlc3VsdC5zZXNzaW9uTmFtZSxcclxuICAgICAgICAgIHVzZXJJZDogcmVzLnJlc3VsdC51c2VySWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgbGV0IGEgPSBGZXRjaERhdGEoXCJHRVRcIiwgc2V0dGluZ3MudXJsLCB7XHJcbiAgICAgIG9wZXJhdGlvbjogXCJxdWVyeVwiLFxyXG4gICAgICBzZXNzaW9uTmFtZTogY3JlZGVudGlhbHMuc2Vzc2lvbk5hbWUsXHJcbiAgICAgIHF1ZXJ5OiBgU0VMRUNUIHVzZXJfbmFtZSwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lIEZST00gVXNlcnMgV0hFUkUgaWQgPSAke2NyZWRlbnRpYWxzLnVzZXJJZH07YCxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLnN1Y2Nlc3MpIGNvbnNvbGUubG9nKHJlcy5yZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICBpZiAocHJldlByb3BzLnNldHRpbmdzICE9PSB0aGlzLnByb3BzLnNldHRpbmdzKSB7XHJcbiAgICAgIHRoaXMuZ2V0Q2hhbGxlbmdlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5hY2Nlc3NLZXkpIHtcclxuICAgICAgdGhpcy5nZXRDcmVkZW50aWFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByZVByb3BzLmNyZWRlbnRpYWxzICE9IHRoaXMucHJvcHMuY3JlZGVudGlhbHMpIHtcclxuICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuY3JlZGVudGlhbHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8TmF2aWdhdGlvbiBTaG93PXt0aGlzLnNob3dNb2RhbH0gLz5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93TW9kYWwgJiYgKFxyXG4gICAgICAgICAgPFNldHRpbmdzTW9kYWwgU2V0U2V0dGluZ3M9e3RoaXMuY3JlYXRlU2V0dGluZ3N9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxubGV0IEZldGNoRGF0YSA9IChtZXRob2QsIHVybCwgZGF0YSkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgICAgZmV0Y2godXJsICsgYC93ZWJzZXJ2aWNlLnBocD8ke2VuY29kZUZvcm1EYXRhKGRhdGEpfWAsIHtcclxuICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxyXG4gICAgICAgICAgICBNb2RlOiBcIm5vLWNvcnNcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBpZiAocmVzLm9rKSByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICAgIGxldCBib2R5ID0gZW5jb2RlRm9ybURhdGEoe1xyXG4gICAgICAgICAgb3BlcmF0aW9uOiBcImxvZ2luXCIsXHJcbiAgICAgICAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgIGFjY2Vzc0tleTogZGF0YS5hY2Nlc3NLZXksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZldGNoKHVybCArIGAvd2Vic2VydmljZS5waHBgLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXHJcbiAgICAgICAgICBib2R5OiBib2R5LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5vaykgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGVuY29kZUZvcm1EYXRhID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSlcclxuICAgIC5tYXAoKGtleSkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pKVxyXG4gICAgLmpvaW4oXCImXCIpO1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0geyBTZXRTZXR0aW5ncywgU2V0Q3JlZGVudGlhbCB9O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNldHRpbmdzOiBzdGF0ZS5zZXR0aW5ncyxcclxuICAgIGNyZWRlbnRpYWxzOiBzdGF0ZS5jcmVkZW50aWFscyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFpbkxheW91dCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=