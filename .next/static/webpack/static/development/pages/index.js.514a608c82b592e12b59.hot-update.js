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
      var _this4 = this;

      var a = FetchData("GET", this.props.settings.url, {
        operation: "query",
        sessionName: this.props.credentials.sessionName,
        query: "SELECT user_name, first_name, last_name FROM Users WHERE id = ".concat(this.props.credentials.userId, ";")
      }).then(function (res) {
        if (res.success) {
          _this4.props.SetUserInfo([res.result]);
        }
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
  SetCredential: _redux_action__WEBPACK_IMPORTED_MODULE_12__["SetCredential"],
  SetUserInfo: _redux_action__WEBPACK_IMPORTED_MODULE_12__["SetUserInfo"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXRzL01haW5MYXlvdXQuanMiXSwibmFtZXMiOlsiTWFpbkxheW91dCIsInNob3dNb2RhbCIsImFjY2Vzc0tleSIsInNldFN0YXRlIiwic3RhdGUiLCJkYXRhIiwicHJvcHMiLCJTZXRTZXR0aW5ncyIsImEiLCJGZXRjaERhdGEiLCJzZXR0aW5ncyIsInVybCIsIm9wZXJhdGlvbiIsInVzZXJuYW1lIiwidXNlciIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwiZ2V0Q3JlZGVudGlhbCIsIm1kNSIsInJlc3VsdCIsInRva2VuIiwiU2V0Q3JlZGVudGlhbCIsInNlc3Npb25OYW1lIiwidXNlcklkIiwiY3JlZGVudGlhbHMiLCJxdWVyeSIsIlNldFVzZXJJbmZvIiwicHJldlByb3BzIiwiZ2V0Q2hhbGxlbmdlIiwiZ2V0VXNlckluZm8iLCJjaGlsZHJlbiIsImNyZWF0ZVNldHRpbmdzIiwiQ29tcG9uZW50IiwibWV0aG9kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsImVuY29kZUZvcm1EYXRhIiwiaGVhZGVyIiwiTW9kZSIsIm9rIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJ3YXJuIiwiZSIsImJvZHkiLCJoZWFkZXJzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0lBRU1BLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsZUFBUyxFQUFFLEtBREw7QUFFTkMsZUFBUyxFQUFFO0FBRkwsSzs7b05BS0ksWUFBTTtBQUNoQixZQUFLQyxRQUFMLGlDQUNLLE1BQUtDLEtBRFY7QUFFRUgsaUJBQVMsRUFB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QixLQUFLLENBQUNxQjtBQUZkLEdBQVA7QUFJRCxDQUxEOztBQU9laUMsMkhBQU8sQ0FBQ0QsZUFBRCxFQUFrQkQsa0JBQWxCLENBQVAsQ0FBNkN4RCxVQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy41MTRhNjA4YzgyYjU5MmUxMmI1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IFNldHRpbmdzTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2V0dGluZ3NNb2RhbFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBtZDUgZnJvbSBcIm1kNVwiO1xyXG5cclxuaW1wb3J0IHsgU2V0U2V0dGluZ3MsIFNldENyZWRlbnRpYWwsIFNldFVzZXJJbmZvIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvblwiO1xyXG5cclxuY2xhc3MgTWFpbkxheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzaG93TW9kYWw6IGZhbHNlLFxyXG4gICAgYWNjZXNzS2V5OiBcIlwiLFxyXG4gIH07XHJcblxyXG4gIHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICBzaG93TW9kYWw6ICF0aGlzLnN0YXRlLnNob3dNb2RhbCxcclxuICAgICAgYWNjZXNzS2V5OiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY3JlYXRlU2V0dGluZ3MgPSAoZGF0YSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHNob3dNb2RhbDogIXRoaXMuc3RhdGUuc2hvd01vZGFsIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5TZXRTZXR0aW5ncyhkYXRhKTtcclxuICB9O1xyXG5cclxuICBnZXRDaGFsbGVuZ2UoKSB7XHJcbiAgICBsZXQgYSA9IEZldGNoRGF0YShcIkdFVFwiLCB0aGlzLnByb3BzLnNldHRpbmdzLnVybCwge1xyXG4gICAgICBvcGVyYXRpb246IFwiZ2V0Y2hhbGxlbmdlXCIsXHJcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnByb3BzLnNldHRpbmdzLnVzZXIsXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgdGhpcy5nZXRDcmVkZW50aWFsKFxyXG4gICAgICAgICAgbWQ1KHJlcy5yZXN1bHQudG9rZW4gKyB0aGlzLnByb3BzLnNldHRpbmdzLmFjY2Vzc0tleSlcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIC8vICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAvLyAgIGFjY2Vzc0tleTogbWQ1KHJlcy5yZXN1bHQudG9rZW4gKyB0aGlzLnByb3BzLnNldHRpbmdzLmFjY2Vzc0tleSksXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3JlZGVudGlhbChhY2Nlc3NLZXkpIHtcclxuICAgIGxldCBhID0gRmV0Y2hEYXRhKFwiUE9TVFwiLCB0aGlzLnByb3BzLnNldHRpbmdzLnVybCwge1xyXG4gICAgICBvcGVyYXRpb246IFwibG9naW5cIixcclxuICAgICAgdXNlcm5hbWU6IHRoaXMucHJvcHMuc2V0dGluZ3MudXNlcixcclxuICAgICAgYWNjZXNzS2V5OiBhY2Nlc3NLZXksXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5zdWNjZXNzKVxyXG4gICAgICAgIHRoaXMucHJvcHMuU2V0Q3JlZGVudGlhbCh7XHJcbiAgICAgICAgICBzZXNzaW9uTmFtZTogcmVzLnJlc3VsdC5zZXNzaW9uTmFtZSxcclxuICAgICAgICAgIHVzZXJJZDogcmVzLnJlc3VsdC51c2VySWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgbGV0IGEgPSBGZXRjaERhdGEoXCJHRVRcIiwgdGhpcy5wcm9wcy5zZXR0aW5ncy51cmwsIHtcclxuICAgICAgb3BlcmF0aW9uOiBcInF1ZXJ5XCIsXHJcbiAgICAgIHNlc3Npb25OYW1lOiB0aGlzLnByb3BzLmNyZWRlbnRpYWxzLnNlc3Npb25OYW1lLFxyXG4gICAgICBxdWVyeTogYFNFTEVDVCB1c2VyX25hbWUsIGZpcnN0X25hbWUsIGxhc3RfbmFtZSBGUk9NIFVzZXJzIFdIRVJFIGlkID0gJHt0aGlzLnByb3BzLmNyZWRlbnRpYWxzLnVzZXJJZH07YCxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICB0aGlzLnByb3BzLlNldFVzZXJJbmZvKFtyZXMucmVzdWx0XSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgaWYgKHByZXZQcm9wcy5zZXR0aW5ncyAhPT0gdGhpcy5wcm9wcy5zZXR0aW5ncykge1xyXG4gICAgICB0aGlzLmdldENoYWxsZW5nZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcmV2UHJvcHMuY3JlZGVudGlhbHMgIT09IHRoaXMucHJvcHMuY3JlZGVudGlhbHMpIHtcclxuICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8TmF2aWdhdGlvbiBTaG93PXt0aGlzLnNob3dNb2RhbH0gLz5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICB7dGhpcy5zdGF0ZS5zaG93TW9kYWwgJiYgKFxyXG4gICAgICAgICAgPFNldHRpbmdzTW9kYWwgU2V0U2V0dGluZ3M9e3RoaXMuY3JlYXRlU2V0dGluZ3N9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxubGV0IEZldGNoRGF0YSA9IChtZXRob2QsIHVybCwgZGF0YSkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgICBjYXNlIFwiR0VUXCI6XHJcbiAgICAgICAgZmV0Y2godXJsICsgYC93ZWJzZXJ2aWNlLnBocD8ke2VuY29kZUZvcm1EYXRhKGRhdGEpfWAsIHtcclxuICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxyXG4gICAgICAgICAgICBNb2RlOiBcIm5vLWNvcnNcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBpZiAocmVzLm9rKSByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICAgIGxldCBib2R5ID0gZW5jb2RlRm9ybURhdGEoe1xyXG4gICAgICAgICAgb3BlcmF0aW9uOiBcImxvZ2luXCIsXHJcbiAgICAgICAgICB1c2VybmFtZTogZGF0YS51c2VybmFtZSxcclxuICAgICAgICAgIGFjY2Vzc0tleTogZGF0YS5hY2Nlc3NLZXksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZldGNoKHVybCArIGAvd2Vic2VydmljZS5waHBgLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXHJcbiAgICAgICAgICBib2R5OiBib2R5LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5vaykgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGVuY29kZUZvcm1EYXRhID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSlcclxuICAgIC5tYXAoKGtleSkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pKVxyXG4gICAgLmpvaW4oXCImXCIpO1xyXG59O1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0geyBTZXRTZXR0aW5ncywgU2V0Q3JlZGVudGlhbCwgU2V0VXNlckluZm8gfTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzZXR0aW5nczogc3RhdGUuc2V0dGluZ3MsXHJcbiAgICBjcmVkZW50aWFsczogc3RhdGUuY3JlZGVudGlhbHMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1haW5MYXlvdXQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9