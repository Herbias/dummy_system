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
      var a = FetchData("GET", this.props.settings.url, {
        operation: "query",
        sessionName: this.props.credentials.sessionName,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXRzL01haW5MYXlvdXQuanMiXSwibmFtZXMiOlsiTWFpbkxheW91dCIsInNob3dNb2RhbCIsImFjY2Vzc0tleSIsInNldFN0YXRlIiwic3RhdGUiLCJkYXRhIiwicHJvcHMiLCJTZXRTZXR0aW5ncyIsImEiLCJGZXRjaERhdGEiLCJzZXR0aW5ncyIsInVybCIsIm9wZXJhdGlvbiIsInVzZXJuYW1lIiwidXNlciIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwibWQ1IiwicmVzdWx0IiwidG9rZW4iLCJTZXRDcmVkZW50aWFsIiwic2Vzc2lvbk5hbWUiLCJ1c2VySWQiLCJjcmVkZW50aWFscyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInByZXZQcm9wcyIsImdldENoYWxsZW5nZSIsImdldENyZWRlbnRpYWwiLCJnZXRVc2VySW5mbyIsImNoaWxkcmVuIiwiY3JlYXRlU2V0dGluZ3MiLCJDb21wb25lbnQiLCJtZXRob2QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwiZW5jb2RlRm9ybURhdGEiLCJoZWFkZXIiLCJNb2RlIiwib2siLCJqc29uIiwiZXJyIiwid2FybiIsImUiLCJib2R5IiwiaGVhZGVycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwibWFwU3RhdGVUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztJQUVNQSxVOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGVBQVMsRUFBRSxLQURMO0FBRU5DLGVBQVMsRUFBRTtBQUZMLEs7O29OQUtJLFlBQU07QUFDaEIsWUFBS0MsUUFBTCxpQ0FDSyxNQUFLQyxLQURWO0FBRUVILGlCQUFTLEVBQUUsQ0FBQyxN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TE0sWUFBUSxFQUFFTixLQUFLLENBQUNNLFFBRFg7QUFFTGMsZUFBVyxFQUFFcEIsS0FBSyxDQUFDb0I7QUFGZCxHQUFQO0FBSUQsQ0FMRDs7QUFPZWtDLDJIQUFPLENBQUNELGVBQUQsRUFBa0JELGtCQUFsQixDQUFQLENBQTZDeEQsVUFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMmRhN2FjZTlhNzlhYjUyZjM2OGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBTZXR0aW5nc01vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL1NldHRpbmdzTW9kYWxcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgbWQ1IGZyb20gXCJtZDVcIjtcclxuXHJcbmltcG9ydCB7IFNldFNldHRpbmdzLCBTZXRDcmVkZW50aWFsIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvblwiO1xyXG5cclxuY2xhc3MgTWFpbkxheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzaG93TW9kYWw6IGZhbHNlLFxyXG4gICAgYWNjZXNzS2V5OiBcIlwiLFxyXG4gIH07XHJcblxyXG4gIHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICBzaG93TW9kYWw6ICF0aGlzLnN0YXRlLnNob3dNb2RhbCxcclxuICAgICAgYWNjZXNzS2V5OiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY3JlYXRlU2V0dGluZ3MgPSAoZGF0YSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHNob3dNb2RhbDogIXRoaXMuc3RhdGUuc2hvd01vZGFsIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5TZXRTZXR0aW5ncyhkYXRhKTtcclxuICB9O1xyXG5cclxuICBnZXRDaGFsbGVuZ2UoKSB7XHJcbiAgICBsZXQgYSA9IEZldGNoRGF0YShcIkdFVFwiLCB0aGlzLnByb3BzLnNldHRpbmdzLnVybCwge1xyXG4gICAgICBvcGVyYXRpb246IFwiZ2V0Y2hhbGxlbmdlXCIsXHJcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnByb3BzLnNldHRpbmdzLnVzZXIsXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgYWNjZXNzS2V5OiBtZDUocmVzLnJlc3VsdC50b2tlbiArIHRoaXMucHJvcHMuc2V0dGluZ3MuYWNjZXNzS2V5KSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRDcmVkZW50aWFsKCkge1xyXG4gICAgbGV0IGEgPSBGZXRjaERhdGEoXCJQT1NUXCIsIHRoaXMucHJvcHMuc2V0dGluZ3MudXJsLCB7XHJcbiAgICAgIG9wZXJhdGlvbjogXCJsb2dpblwiLFxyXG4gICAgICB1c2VybmFtZTogdGhpcy5wcm9wcy5zZXR0aW5ncy51c2VyLFxyXG4gICAgICBhY2Nlc3NLZXk6IHRoaXMuc3RhdGUuYWNjZXNzS2V5LFxyXG4gICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGlmIChyZXMuc3VjY2VzcylcclxuICAgICAgICB0aGlzLnByb3BzLlNldENyZWRlbnRpYWwoe1xyXG4gICAgICAgICAgc2Vzc2lvbk5hbWU6IHJlcy5yZXN1bHQuc2Vzc2lvbk5hbWUsXHJcbiAgICAgICAgICB1c2VySWQ6IHJlcy5yZXN1bHQudXNlcklkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIGxldCBhID0gRmV0Y2hEYXRhKFwiR0VUXCIsIHRoaXMucHJvcHMuc2V0dGluZ3MudXJsLCB7XHJcbiAgICAgIG9wZXJhdGlvbjogXCJxdWVyeVwiLFxyXG4gICAgICBzZXNzaW9uTmFtZTogdGhpcy5wcm9wcy5jcmVkZW50aWFscy5zZXNzaW9uTmFtZSxcclxuICAgICAgcXVlcnk6IGBTRUxFQ1QgdXNlcl9uYW1lLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUgRlJPTSBVc2VycyBXSEVSRSBpZCA9ICR7Y3JlZGVudGlhbHMudXNlcklkfTtgLFxyXG4gICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGlmIChyZXMuc3VjY2VzcykgY29uc29sZS5sb2cocmVzLnJlc3VsdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgIGlmIChwcmV2UHJvcHMuc2V0dGluZ3MgIT09IHRoaXMucHJvcHMuc2V0dGluZ3MpIHtcclxuICAgICAgdGhpcy5nZXRDaGFsbGVuZ2UoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLmFjY2Vzc0tleSkge1xyXG4gICAgICB0aGlzLmdldENyZWRlbnRpYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJldlByb3BzLmNyZWRlbnRpYWxzICE9IHRoaXMucHJvcHMuY3JlZGVudGlhbHMpIHtcclxuICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuY3JlZGVudGlhbHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8TmF2aWdhdGlvbiBTaG93PXt0aGlzLnNob3dNb2RhbH0gLz5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93TW9kYWwgJiYgKFxyXG4gICAgICAgICAgPFNldHRpbmdzTW9kYWwgU2V0U2V0dGluZ3M9e3RoaXMuY3JlYXRlU2V0dGluZ3N9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxubGV0IEZldGNoRGF0YSA9IChtZXRob2QsIHVybCwgZGF0YSkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgICAgZmV0Y2godXJsICsgYC93ZWJzZXJ2aWNlLnBocD8ke2VuY29kZUZvcm1EYXRhKGRhdGEpfWAsIHtcclxuICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxyXG4gICAgICAgICAgICBNb2RlOiBcIm5vLWNvcnNcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBpZiAocmVzLm9rKSByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICAgIGxldCBib2R5ID0gZW5jb2RlRm9ybURhdGEoe1xyXG4gICAgICAgICAgb3BlcmF0aW9uOiBcImxvZ2luXCIsXHJcbiAgICAgICAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgIGFjY2Vzc0tleTogZGF0YS5hY2Nlc3NLZXksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZldGNoKHVybCArIGAvd2Vic2VydmljZS5waHBgLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXHJcbiAgICAgICAgICBib2R5OiBib2R5LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5vaykgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGVuY29kZUZvcm1EYXRhID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSlcclxuICAgIC5tYXAoKGtleSkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pKVxyXG4gICAgLmpvaW4oXCImXCIpO1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0geyBTZXRTZXR0aW5ncywgU2V0Q3JlZGVudGlhbCB9O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNldHRpbmdzOiBzdGF0ZS5zZXR0aW5ncyxcclxuICAgIGNyZWRlbnRpYWxzOiBzdGF0ZS5jcmVkZW50aWFscyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFpbkxheW91dCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=