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
          _this2.getCredential(md5__WEBPACK_IMPORTED_MODULE_11___default()(res.result.token + _this2.props.settings.accessKey)); // this.setState({
          //   ...this.state,
          //   accessKey: md5(res.result.token + this.props.settings.accessKey),
          // });

        }
      });
    }
  }, {
    key: "getCredential",
    value: function getCredential(accessKey) {
      var _this3 = this;

      var a = FetchData("POST", this.props.settings.url, {
        operation: "login",
        username: this.props.settings.user,
        accessKey: accessKey
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

      if (prevProps.credentials !== this.props.credentials) {
        this.getUserInfo();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_8__["default"], {
        Show: this.showModal,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }
      }), this.props.children, this.state.showModal && __jsx(_components_SettingsModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        SetSettings: this.createSettings,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXRzL01haW5MYXlvdXQuanMiXSwibmFtZXMiOlsiTWFpbkxheW91dCIsInNob3dNb2RhbCIsImFjY2Vzc0tleSIsInNldFN0YXRlIiwic3RhdGUiLCJkYXRhIiwicHJvcHMiLCJTZXRTZXR0aW5ncyIsImEiLCJGZXRjaERhdGEiLCJzZXR0aW5ncyIsInVybCIsIm9wZXJhdGlvbiIsInVzZXJuYW1lIiwidXNlciIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwiZ2V0Q3JlZGVudGlhbCIsIm1kNSIsInJlc3VsdCIsInRva2VuIiwiU2V0Q3JlZGVudGlhbCIsInNlc3Npb25OYW1lIiwidXNlcklkIiwiY3JlZGVudGlhbHMiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2UHJvcHMiLCJnZXRDaGFsbGVuZ2UiLCJnZXRVc2VySW5mbyIsImNoaWxkcmVuIiwiY3JlYXRlU2V0dGluZ3MiLCJDb21wb25lbnQiLCJtZXRob2QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwiZW5jb2RlRm9ybURhdGEiLCJoZWFkZXIiLCJNb2RlIiwib2siLCJqc29uIiwiZXJyIiwid2FybiIsImUiLCJib2R5IiwiaGVhZGVycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwibWFwU3RhdGVUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztJQUVNQSxVOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGVBQVMsRUFBRSxLQURMO0FBRU5DLGVBQVMsRUFBRTtBQUZMLEs7O29OQUtJLFlBQU07QUFDaEIsWUFBS0MsUUFBTCxpQ0FDSyxNQUFLQyxLQURWO0FBRUVILGlCQUFTLEVBQUUsQ0FBQyxN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a0JBQWxCLENBQVAsQ0FBNkN4RCxVQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kZjc4YzdkNWJmYTg2YmEyNTkyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IFNldHRpbmdzTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2V0dGluZ3NNb2RhbFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBtZDUgZnJvbSBcIm1kNVwiO1xyXG5cclxuaW1wb3J0IHsgU2V0U2V0dGluZ3MsIFNldENyZWRlbnRpYWwgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uXCI7XHJcblxyXG5jbGFzcyBNYWluTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHNob3dNb2RhbDogZmFsc2UsXHJcbiAgICBhY2Nlc3NLZXk6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgc2hvd01vZGFsID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgIHNob3dNb2RhbDogIXRoaXMuc3RhdGUuc2hvd01vZGFsLFxyXG4gICAgICBhY2Nlc3NLZXk6IFwiXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjcmVhdGVTZXR0aW5ncyA9IChkYXRhKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgc2hvd01vZGFsOiAhdGhpcy5zdGF0ZS5zaG93TW9kYWwgfSk7XHJcbiAgICB0aGlzLnByb3BzLlNldFNldHRpbmdzKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGdldENoYWxsZW5nZSgpIHtcclxuICAgIGxldCBhID0gRmV0Y2hEYXRhKFwiR0VUXCIsIHRoaXMucHJvcHMuc2V0dGluZ3MudXJsLCB7XHJcbiAgICAgIG9wZXJhdGlvbjogXCJnZXRjaGFsbGVuZ2VcIixcclxuICAgICAgdXNlcm5hbWU6IHRoaXMucHJvcHMuc2V0dGluZ3MudXNlcixcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICB0aGlzLmdldENyZWRlbnRpYWwoXHJcbiAgICAgICAgICBtZDUocmVzLnJlc3VsdC50b2tlbiArIHRoaXMucHJvcHMuc2V0dGluZ3MuYWNjZXNzS2V5KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgLy8gICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgIC8vICAgYWNjZXNzS2V5OiBtZDUocmVzLnJlc3VsdC50b2tlbiArIHRoaXMucHJvcHMuc2V0dGluZ3MuYWNjZXNzS2V5KSxcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRDcmVkZW50aWFsKGFjY2Vzc0tleSkge1xyXG4gICAgbGV0IGEgPSBGZXRjaERhdGEoXCJQT1NUXCIsIHRoaXMucHJvcHMuc2V0dGluZ3MudXJsLCB7XHJcbiAgICAgIG9wZXJhdGlvbjogXCJsb2dpblwiLFxyXG4gICAgICB1c2VybmFtZTogdGhpcy5wcm9wcy5zZXR0aW5ncy51c2VyLFxyXG4gICAgICBhY2Nlc3NLZXk6IGFjY2Vzc0tleSxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLnN1Y2Nlc3MpXHJcbiAgICAgICAgdGhpcy5wcm9wcy5TZXRDcmVkZW50aWFsKHtcclxuICAgICAgICAgIHNlc3Npb25OYW1lOiByZXMucmVzdWx0LnNlc3Npb25OYW1lLFxyXG4gICAgICAgICAgdXNlcklkOiByZXMucmVzdWx0LnVzZXJJZCxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICBsZXQgYSA9IEZldGNoRGF0YShcIkdFVFwiLCB0aGlzLnByb3BzLnNldHRpbmdzLnVybCwge1xyXG4gICAgICBvcGVyYXRpb246IFwicXVlcnlcIixcclxuICAgICAgc2Vzc2lvbk5hbWU6IHRoaXMucHJvcHMuY3JlZGVudGlhbHMuc2Vzc2lvbk5hbWUsXHJcbiAgICAgIHF1ZXJ5OiBgU0VMRUNUIHVzZXJfbmFtZSwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lIEZST00gVXNlcnMgV0hFUkUgaWQgPSAke3RoaXMucHJvcHMuY3JlZGVudGlhbHMudXNlcklkfTtgLFxyXG4gICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGlmIChyZXMuc3VjY2VzcykgY29uc29sZS5sb2cocmVzLnJlc3VsdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgIGlmIChwcmV2UHJvcHMuc2V0dGluZ3MgIT09IHRoaXMucHJvcHMuc2V0dGluZ3MpIHtcclxuICAgICAgdGhpcy5nZXRDaGFsbGVuZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJldlByb3BzLmNyZWRlbnRpYWxzICE9PSB0aGlzLnByb3BzLmNyZWRlbnRpYWxzKSB7XHJcbiAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPE5hdmlnYXRpb24gU2hvdz17dGhpcy5zaG93TW9kYWx9IC8+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd01vZGFsICYmIChcclxuICAgICAgICAgIDxTZXR0aW5nc01vZGFsIFNldFNldHRpbmdzPXt0aGlzLmNyZWF0ZVNldHRpbmdzfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmxldCBGZXRjaERhdGEgPSAobWV0aG9kLCB1cmwsIGRhdGEpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICAgIGZldGNoKHVybCArIGAvd2Vic2VydmljZS5waHA/JHtlbmNvZGVGb3JtRGF0YShkYXRhKX1gLCB7XHJcbiAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgICAgICAgICAgTW9kZTogXCJuby1jb3JzXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5vaykgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgICBsZXQgYm9keSA9IGVuY29kZUZvcm1EYXRhKHtcclxuICAgICAgICAgIG9wZXJhdGlvbjogXCJsb2dpblwiLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICBhY2Nlc3NLZXk6IGRhdGEuYWNjZXNzS2V5LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmZXRjaCh1cmwgKyBgL3dlYnNlcnZpY2UucGhwYCwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB9LFxyXG4gICAgICAgICAgYm9keTogYm9keSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGlmIChyZXMub2spIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBlbmNvZGVGb3JtRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpXHJcbiAgICAubWFwKChrZXkpID0+IGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKSlcclxuICAgIC5qb2luKFwiJlwiKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHsgU2V0U2V0dGluZ3MsIFNldENyZWRlbnRpYWwgfTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzZXR0aW5nczogc3RhdGUuc2V0dGluZ3MsXHJcbiAgICBjcmVkZW50aWFsczogc3RhdGUuY3JlZGVudGlhbHMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1haW5MYXlvdXQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9