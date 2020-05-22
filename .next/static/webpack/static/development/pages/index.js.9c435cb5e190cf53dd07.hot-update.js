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
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.settings !== this.props.settings) {
        this.getChallenge();
      }

      if (this.state.accessKey) {
        this.getCredential();
      }

      if (preProps.credentials != this.props.credentials) this.getUserInfo();
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
          lineNumber: 72,
          columnNumber: 9
        }
      }), this.props.children, this.state.showModal && __jsx(_components_SettingsModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        SetSettings: this.createSettings,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXRzL01haW5MYXlvdXQuanMiXSwibmFtZXMiOlsiTWFpbkxheW91dCIsInNob3dNb2RhbCIsImFjY2Vzc0tleSIsInNldFN0YXRlIiwic3RhdGUiLCJkYXRhIiwicHJvcHMiLCJTZXRTZXR0aW5ncyIsImEiLCJGZXRjaERhdGEiLCJzZXR0aW5ncyIsInVybCIsIm9wZXJhdGlvbiIsInVzZXJuYW1lIiwidXNlciIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwibWQ1IiwicmVzdWx0IiwidG9rZW4iLCJTZXRDcmVkZW50aWFsIiwic2Vzc2lvbk5hbWUiLCJ1c2VySWQiLCJwcmV2UHJvcHMiLCJnZXRDaGFsbGVuZ2UiLCJnZXRDcmVkZW50aWFsIiwicHJlUHJvcHMiLCJjcmVkZW50aWFscyIsImdldFVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsImNoaWxkcmVuIiwiY3JlYXRlU2V0dGluZ3MiLCJDb21wb25lbnQiLCJtZXRob2QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwiZW5jb2RlRm9ybURhdGEiLCJoZWFkZXIiLCJNb2RlIiwib2siLCJqc29uIiwiZXJyIiwid2FybiIsImUiLCJib2R5IiwiaGVhZGVycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwibWFwU3RhdGVUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztJQUVNQSxVOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGVBQVMsRUFBRSxLQURMO0FBRU5DLGVBQVMsRUFBRTtBQUZMLEs7O29OQUtJLFlBQU07QUFDaEIsWUFBS0MsUUFBTCxpQ0FDSyxNQUFLQyxLQURWO0FBRUVILGlCQUFTLEVBQUUsQ0FB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LEVBWUdoQyxJQVpILENBWVEsVUFBQ1YsSUFBRCxFQUFVO0FBQ2RnQyxpQkFBTyxDQUFDaEMsSUFBRCxDQUFQO0FBQ0QsU0FkSDtBQWVBO0FBekNKO0FBMkNELEdBNUNNLENBQVA7QUE2Q0QsQ0E5Q0Q7O0tBQUlJLFM7O0FBZ0RKLElBQU0rQixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNuQyxJQUFELEVBQVU7QUFDL0IsU0FBTzZDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZOUMsSUFBWixFQUNKK0MsR0FESSxDQUNBLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQyxrQkFBa0IsQ0FBQ0QsR0FBRCxDQUFsQixHQUEwQixHQUExQixHQUFnQ0Msa0JBQWtCLENBQUNqRCxJQUFJLENBQUNnRCxHQUFELENBQUwsQ0FBM0Q7QUFBQSxHQURBLEVBRUpFLElBRkksQ0FFQyxHQUZELENBQVA7QUFHRCxDQUpEOztBQU1BLElBQU1DLGtCQUFrQixHQUFHO0FBQUVqRCxhQUFXLEVBQVhBLDBEQUFGO0FBQWVjLGVBQWEsRUFBYkEsNERBQWFBO0FBQTVCLENBQTNCOztBQUVBLElBQU1vQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNyRCxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMTSxZQUFRLEVBQUVOLEtBQUssQ0FBQ00sUUFEWDtBQUVMa0IsZUFBVyxFQUFFeEIsS0FBSyxDQUFDd0I7QUFGZCxHQUFQO0FBSUQsQ0FMRDs7QUFPZThCLDJIQUFPLENBQUNELGVBQUQsRUFBa0JELGtCQUFsQixDQUFQLENBQTZDeEQsVUFBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOWM0MzVjYjVlMTkwY2Y1M2RkMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBTZXR0aW5nc01vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL1NldHRpbmdzTW9kYWxcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgbWQ1IGZyb20gXCJtZDVcIjtcclxuXHJcbmltcG9ydCB7IFNldFNldHRpbmdzLCBTZXRDcmVkZW50aWFsIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvblwiO1xyXG5cclxuY2xhc3MgTWFpbkxheW91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzaG93TW9kYWw6IGZhbHNlLFxyXG4gICAgYWNjZXNzS2V5OiBcIlwiLFxyXG4gIH07XHJcblxyXG4gIHNob3dNb2RhbCA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICBzaG93TW9kYWw6ICF0aGlzLnN0YXRlLnNob3dNb2RhbCxcclxuICAgICAgYWNjZXNzS2V5OiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY3JlYXRlU2V0dGluZ3MgPSAoZGF0YSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHNob3dNb2RhbDogIXRoaXMuc3RhdGUuc2hvd01vZGFsIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5TZXRTZXR0aW5ncyhkYXRhKTtcclxuICB9O1xyXG5cclxuICBnZXRDaGFsbGVuZ2UoKSB7XHJcbiAgICBsZXQgYSA9IEZldGNoRGF0YShcIkdFVFwiLCB0aGlzLnByb3BzLnNldHRpbmdzLnVybCwge1xyXG4gICAgICBvcGVyYXRpb246IFwiZ2V0Y2hhbGxlbmdlXCIsXHJcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnByb3BzLnNldHRpbmdzLnVzZXIsXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5zdWNjZXNzKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgYWNjZXNzS2V5OiBtZDUocmVzLnJlc3VsdC50b2tlbiArIHRoaXMucHJvcHMuc2V0dGluZ3MuYWNjZXNzS2V5KSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRDcmVkZW50aWFsKCkge1xyXG4gICAgbGV0IGEgPSBGZXRjaERhdGEoXCJQT1NUXCIsIHRoaXMucHJvcHMuc2V0dGluZ3MudXJsLCB7XHJcbiAgICAgIG9wZXJhdGlvbjogXCJsb2dpblwiLFxyXG4gICAgICB1c2VybmFtZTogdGhpcy5wcm9wcy5zZXR0aW5ncy51c2VyLFxyXG4gICAgICBhY2Nlc3NLZXk6IHRoaXMuc3RhdGUuYWNjZXNzS2V5LFxyXG4gICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGlmIChyZXMuc3VjY2VzcylcclxuICAgICAgICB0aGlzLnByb3BzLlNldENyZWRlbnRpYWwoe1xyXG4gICAgICAgICAgc2Vzc2lvbk5hbWU6IHJlcy5yZXN1bHQuc2Vzc2lvbk5hbWUsXHJcbiAgICAgICAgICB1c2VySWQ6IHJlcy5yZXN1bHQudXNlcklkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICBpZiAocHJldlByb3BzLnNldHRpbmdzICE9PSB0aGlzLnByb3BzLnNldHRpbmdzKSB7XHJcbiAgICAgIHRoaXMuZ2V0Q2hhbGxlbmdlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5hY2Nlc3NLZXkpIHtcclxuICAgICAgdGhpcy5nZXRDcmVkZW50aWFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByZVByb3BzLmNyZWRlbnRpYWxzICE9IHRoaXMucHJvcHMuY3JlZGVudGlhbHMpIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmNyZWRlbnRpYWxzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPE5hdmlnYXRpb24gU2hvdz17dGhpcy5zaG93TW9kYWx9IC8+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd01vZGFsICYmIChcclxuICAgICAgICAgIDxTZXR0aW5nc01vZGFsIFNldFNldHRpbmdzPXt0aGlzLmNyZWF0ZVNldHRpbmdzfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmxldCBGZXRjaERhdGEgPSAobWV0aG9kLCB1cmwsIGRhdGEpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICAgIGZldGNoKHVybCArIGAvd2Vic2VydmljZS5waHA/JHtlbmNvZGVGb3JtRGF0YShkYXRhKX1gLCB7XHJcbiAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgICAgICAgICAgTW9kZTogXCJuby1jb3JzXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5vaykgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgICBsZXQgYm9keSA9IGVuY29kZUZvcm1EYXRhKHtcclxuICAgICAgICAgIG9wZXJhdGlvbjogXCJsb2dpblwiLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICBhY2Nlc3NLZXk6IGRhdGEuYWNjZXNzS2V5LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmZXRjaCh1cmwgKyBgL3dlYnNlcnZpY2UucGhwYCwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB9LFxyXG4gICAgICAgICAgYm9keTogYm9keSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGlmIChyZXMub2spIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBlbmNvZGVGb3JtRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpXHJcbiAgICAubWFwKChrZXkpID0+IGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKSlcclxuICAgIC5qb2luKFwiJlwiKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHsgU2V0U2V0dGluZ3MsIFNldENyZWRlbnRpYWwgfTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzZXR0aW5nczogc3RhdGUuc2V0dGluZ3MsXHJcbiAgICBjcmVkZW50aWFsczogc3RhdGUuY3JlZGVudGlhbHMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1haW5MYXlvdXQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9