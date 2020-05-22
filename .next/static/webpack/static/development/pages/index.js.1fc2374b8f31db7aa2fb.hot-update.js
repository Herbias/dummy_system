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
      console.log(a["value"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXRzL01haW5MYXlvdXQuanMiXSwibmFtZXMiOlsiTWFpbkxheW91dCIsInNob3dNb2RhbCIsImFjY2Vzc0tleSIsInNldFN0YXRlIiwic3RhdGUiLCJkYXRhIiwicHJvcHMiLCJTZXRTZXR0aW5ncyIsImEiLCJGZXRjaERhdGEiLCJzZXR0aW5ncyIsInVybCIsIm9wZXJhdGlvbiIsInVzZXJuYW1lIiwidXNlciIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwibWQ1IiwicmVzdWx0IiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwiU2V0Q3JlZGVudGlhbCIsInNlc3Npb25OYW1lIiwidXNlcklkIiwiY3JlZGVudGlhbHMiLCJxdWVyeSIsInByZXZQcm9wcyIsImdldENoYWxsZW5nZSIsImdldENyZWRlbnRpYWwiLCJnZXRVc2VySW5mbyIsImNoaWxkcmVuIiwiY3JlYXRlU2V0dGluZ3MiLCJDb21wb25lbnQiLCJtZXRob2QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwiZW5jb2RlRm9ybURhdGEiLCJoZWFkZXIiLCJNb2RlIiwib2siLCJqc29uIiwiZXJyIiwid2FybiIsImUiLCJib2R5IiwiaGVhZGVycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwibWFwU3RhdGVUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztJQUVNQSxVOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGVBQVMsRUFBRSxLQURMO0FBRU5DLGVBQVMsRUFBRTtBQUZMLEs7O29OQUtJLFlBQU07QUFDaEIsWUFBS0MsUUFBTCxpQ0FDSyxNQUFLQyxLQURWO0FBRUVILGlCQUFTLEVBQUUsQ0FBQyxN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QWEsRUFBYkEsNERBQWFBO0FBQTVCLENBQTNCOztBQUVBLElBQU1rQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNyRCxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMTSxZQUFRLEVBQUVOLEtBQUssQ0FBQ00sUUFEWDtBQUVMZ0IsZUFBVyxFQUFFdEIsS0FBSyxDQUFDc0I7QUFGZCxHQUFQO0FBSUQsQ0FMRDs7QUFPZWdDLDJIQUFPLENBQUNELGVBQUQsRUFBa0JELGtCQUFsQixDQUFQLENBQTZDeEQsVUFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMWZjMjM3NGI4ZjMxZGI3YWEyZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBTZXR0aW5nc01vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL1NldHRpbmdzTW9kYWxcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgbWQ1IGZyb20gXCJtZDVcIjtcclxuXHJcbmltcG9ydCB7IFNldFNldHRpbmdzLCBTZXRDcmVkZW50aWFsIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvblwiO1xyXG5cclxuY2xhc3MgTWFpbkxheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzaG93TW9kYWw6IGZhbHNlLFxyXG4gICAgYWNjZXNzS2V5OiBcIlwiLFxyXG4gIH07XHJcblxyXG4gIHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICBzaG93TW9kYWw6ICF0aGlzLnN0YXRlLnNob3dNb2RhbCxcclxuICAgICAgYWNjZXNzS2V5OiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY3JlYXRlU2V0dGluZ3MgPSAoZGF0YSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHNob3dNb2RhbDogIXRoaXMuc3RhdGUuc2hvd01vZGFsIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5TZXRTZXR0aW5ncyhkYXRhKTtcclxuICB9O1xyXG5cclxuICBnZXRDaGFsbGVuZ2UoKSB7XHJcbiAgICBsZXQgYSA9IEZldGNoRGF0YShcIkdFVFwiLCB0aGlzLnByb3BzLnNldHRpbmdzLnVybCwge1xyXG4gICAgICBvcGVyYXRpb246IFwiZ2V0Y2hhbGxlbmdlXCIsXHJcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnByb3BzLnNldHRpbmdzLnVzZXIsXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIG1kNShyZXMucmVzdWx0LnRva2VuICsgdGhpcy5wcm9wcy5zZXR0aW5ncy5hY2Nlc3NLZXkpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAvLyAgIGFjY2Vzc0tleTogbWQ1KHJlcy5yZXN1bHQudG9rZW4gKyB0aGlzLnByb3BzLnNldHRpbmdzLmFjY2Vzc0tleSksXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coYVtcInZhbHVlXCJdKTtcclxuICB9XHJcblxyXG4gIGdldENyZWRlbnRpYWwoKSB7XHJcbiAgICBsZXQgYSA9IEZldGNoRGF0YShcIlBPU1RcIiwgdGhpcy5wcm9wcy5zZXR0aW5ncy51cmwsIHtcclxuICAgICAgb3BlcmF0aW9uOiBcImxvZ2luXCIsXHJcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnByb3BzLnNldHRpbmdzLnVzZXIsXHJcbiAgICAgIGFjY2Vzc0tleTogdGhpcy5zdGF0ZS5hY2Nlc3NLZXksXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5zdWNjZXNzKVxyXG4gICAgICAgIHRoaXMucHJvcHMuU2V0Q3JlZGVudGlhbCh7XHJcbiAgICAgICAgICBzZXNzaW9uTmFtZTogcmVzLnJlc3VsdC5zZXNzaW9uTmFtZSxcclxuICAgICAgICAgIHVzZXJJZDogcmVzLnJlc3VsdC51c2VySWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgbGV0IGEgPSBGZXRjaERhdGEoXCJHRVRcIiwgdGhpcy5wcm9wcy5zZXR0aW5ncy51cmwsIHtcclxuICAgICAgb3BlcmF0aW9uOiBcInF1ZXJ5XCIsXHJcbiAgICAgIHNlc3Npb25OYW1lOiB0aGlzLnByb3BzLmNyZWRlbnRpYWxzLnNlc3Npb25OYW1lLFxyXG4gICAgICBxdWVyeTogYFNFTEVDVCB1c2VyX25hbWUsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSBGUk9NIFVzZXJzIFdIRVJFIGlkID0gJHt0aGlzLnByb3BzLmNyZWRlbnRpYWxzLnVzZXJJZH07YCxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLnN1Y2Nlc3MpIGNvbnNvbGUubG9nKHJlcy5yZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICBpZiAocHJldlByb3BzLnNldHRpbmdzICE9PSB0aGlzLnByb3BzLnNldHRpbmdzKSB7XHJcbiAgICAgIHRoaXMuZ2V0Q2hhbGxlbmdlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuc3RhdGUuYWNjZXNzS2V5IHx8XHJcbiAgICAgIHByZXZQcm9wcy5jcmVkZW50aWFscyAhPT0gdGhpcy5wcm9wcy5jcmVkZW50aWFsc1xyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuZ2V0Q3JlZGVudGlhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcmV2UHJvcHMuY3JlZGVudGlhbHMgIT0gdGhpcy5wcm9wcy5jcmVkZW50aWFscykge1xyXG4gICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5jcmVkZW50aWFscyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIFNob3c9e3RoaXMuc2hvd01vZGFsfSAvPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dNb2RhbCAmJiAoXHJcbiAgICAgICAgICA8U2V0dGluZ3NNb2RhbCBTZXRTZXR0aW5ncz17dGhpcy5jcmVhdGVTZXR0aW5nc30gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgRmV0Y2hEYXRhID0gKG1ldGhvZCwgdXJsLCBkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgICBmZXRjaCh1cmwgKyBgL3dlYnNlcnZpY2UucGhwPyR7ZW5jb2RlRm9ybURhdGEoZGF0YSl9YCwge1xyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXHJcbiAgICAgICAgICAgIE1vZGU6IFwibm8tY29yc1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGlmIChyZXMub2spIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgICAgbGV0IGJvZHkgPSBlbmNvZGVGb3JtRGF0YSh7XHJcbiAgICAgICAgICBvcGVyYXRpb246IFwibG9naW5cIixcclxuICAgICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgYWNjZXNzS2V5OiBkYXRhLmFjY2Vzc0tleSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZmV0Y2godXJsICsgYC93ZWJzZXJ2aWNlLnBocGAsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfSxcclxuICAgICAgICAgIGJvZHk6IGJvZHksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBpZiAocmVzLm9rKSByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZW5jb2RlRm9ybURhdGEgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKVxyXG4gICAgLm1hcCgoa2V5KSA9PiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSkpXHJcbiAgICAuam9pbihcIiZcIik7XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7IFNldFNldHRpbmdzLCBTZXRDcmVkZW50aWFsIH07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc2V0dGluZ3M6IHN0YXRlLnNldHRpbmdzLFxyXG4gICAgY3JlZGVudGlhbHM6IHN0YXRlLmNyZWRlbnRpYWxzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYWluTGF5b3V0KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==