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
          lineNumber: 74,
          columnNumber: 9
        }
      }), this.props.children, this.state.showModal && __jsx(_components_SettingsModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        SetSettings: this.createSettings,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXRzL01haW5MYXlvdXQuanMiXSwibmFtZXMiOlsiTWFpbkxheW91dCIsInNob3dNb2RhbCIsImFjY2Vzc0tleSIsInNldFN0YXRlIiwic3RhdGUiLCJkYXRhIiwicHJvcHMiLCJTZXRTZXR0aW5ncyIsImEiLCJGZXRjaERhdGEiLCJzZXR0aW5ncyIsInVybCIsIm9wZXJhdGlvbiIsInVzZXJuYW1lIiwidXNlciIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwibWQ1IiwicmVzdWx0IiwidG9rZW4iLCJTZXRDcmVkZW50aWFsIiwic2Vzc2lvbk5hbWUiLCJ1c2VySWQiLCJwcmV2UHJvcHMiLCJnZXRDaGFsbGVuZ2UiLCJnZXRDcmVkZW50aWFsIiwicHJlUHJvcHMiLCJjcmVkZW50aWFscyIsImdldFVzZXJJbmZvIiwiY29uc29sZSIsImxvZyIsImNoaWxkcmVuIiwiY3JlYXRlU2V0dGluZ3MiLCJDb21wb25lbnQiLCJtZXRob2QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwiZW5jb2RlRm9ybURhdGEiLCJoZWFkZXIiLCJNb2RlIiwib2siLCJqc29uIiwiZXJyIiwid2FybiIsImUiLCJib2R5IiwiaGVhZGVycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwibWFwU3RhdGVUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztJQUVNQSxVOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLGVBQVMsRUFBRSxLQURMO0FBRU5DLGVBQVMsRUFBRTtBQUZMLEs7O29OQUtJLFlBQU07QUFDaEIsWUFBS0MsUUFBTCxpQ0FDSyxNQUFLQyxLQURWO0FBRUVILGlCQUFTLEVBQUUsQ0FB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RDtBQUNGLFNBWEgsRUFZR2hDLElBWkgsQ0FZUSxVQUFDVixJQUFELEVBQVU7QUFDZGdDLGlCQUFPLENBQUNoQyxJQUFELENBQVA7QUFDRCxTQWRIO0FBZUE7QUF6Q0o7QUEyQ0QsR0E1Q00sQ0FBUDtBQTZDRCxDQTlDRDs7S0FBSUksUzs7QUFnREosSUFBTStCLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ25DLElBQUQsRUFBVTtBQUMvQixTQUFPNkMsTUFBTSxDQUFDQyxJQUFQLENBQVk5QyxJQUFaLEVBQ0orQyxHQURJLENBQ0EsVUFBQ0MsR0FBRDtBQUFBLFdBQVNDLGtCQUFrQixDQUFDRCxHQUFELENBQWxCLEdBQTBCLEdBQTFCLEdBQWdDQyxrQkFBa0IsQ0FBQ2pELElBQUksQ0FBQ2dELEdBQUQsQ0FBTCxDQUEzRDtBQUFBLEdBREEsRUFFSkUsSUFGSSxDQUVDLEdBRkQsQ0FBUDtBQUdELENBSkQ7O0FBTUEsSUFBTUMsa0JBQWtCLEdBQUc7QUFBRWpELGFBQVcsRUFBWEEsMERBQUY7QUFBZWMsZUFBYSxFQUFiQSw0REFBYUE7QUFBNUIsQ0FBM0I7O0FBRUEsSUFBTW9DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3JELEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xNLFlBQVEsRUFBRU4sS0FBSyxDQUFDTSxRQURYO0FBRUxrQixlQUFXLEVBQUV4QixLQUFLLENBQUN3QjtBQUZkLEdBQVA7QUFJRCxDQUxEOztBQU9lOEIsMkhBQU8sQ0FBQ0QsZUFBRCxFQUFrQkQsa0JBQWxCLENBQVAsQ0FBNkN4RCxVQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yNzUzNDRiNmJlYzY3N2RlMmEyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcclxuaW1wb3J0IFNldHRpbmdzTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2V0dGluZ3NNb2RhbFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBtZDUgZnJvbSBcIm1kNVwiO1xyXG5cclxuaW1wb3J0IHsgU2V0U2V0dGluZ3MsIFNldENyZWRlbnRpYWwgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uXCI7XHJcblxyXG5jbGFzcyBNYWluTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHNob3dNb2RhbDogZmFsc2UsXHJcbiAgICBhY2Nlc3NLZXk6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgc2hvd01vZGFsID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgIHNob3dNb2RhbDogIXRoaXMuc3RhdGUuc2hvd01vZGFsLFxyXG4gICAgICBhY2Nlc3NLZXk6IFwiXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjcmVhdGVTZXR0aW5ncyA9IChkYXRhKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgc2hvd01vZGFsOiAhdGhpcy5zdGF0ZS5zaG93TW9kYWwgfSk7XHJcbiAgICB0aGlzLnByb3BzLlNldFNldHRpbmdzKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGdldENoYWxsZW5nZSgpIHtcclxuICAgIGxldCBhID0gRmV0Y2hEYXRhKFwiR0VUXCIsIHRoaXMucHJvcHMuc2V0dGluZ3MudXJsLCB7XHJcbiAgICAgIG9wZXJhdGlvbjogXCJnZXRjaGFsbGVuZ2VcIixcclxuICAgICAgdXNlcm5hbWU6IHRoaXMucHJvcHMuc2V0dGluZ3MudXNlcixcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgICBhY2Nlc3NLZXk6IG1kNShyZXMucmVzdWx0LnRva2VuICsgdGhpcy5wcm9wcy5zZXR0aW5ncy5hY2Nlc3NLZXkpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldENyZWRlbnRpYWwoKSB7XHJcbiAgICBsZXQgYSA9IEZldGNoRGF0YShcIlBPU1RcIiwgdGhpcy5wcm9wcy5zZXR0aW5ncy51cmwsIHtcclxuICAgICAgb3BlcmF0aW9uOiBcImxvZ2luXCIsXHJcbiAgICAgIHVzZXJuYW1lOiB0aGlzLnByb3BzLnNldHRpbmdzLnVzZXIsXHJcbiAgICAgIGFjY2Vzc0tleTogdGhpcy5zdGF0ZS5hY2Nlc3NLZXksXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgaWYgKHJlcy5zdWNjZXNzKVxyXG4gICAgICAgIHRoaXMucHJvcHMuU2V0Q3JlZGVudGlhbCh7XHJcbiAgICAgICAgICBzZXNzaW9uTmFtZTogcmVzLnJlc3VsdC5zZXNzaW9uTmFtZSxcclxuICAgICAgICAgIHVzZXJJZDogcmVzLnJlc3VsdC51c2VySWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgIGlmIChwcmV2UHJvcHMuc2V0dGluZ3MgIT09IHRoaXMucHJvcHMuc2V0dGluZ3MpIHtcclxuICAgICAgdGhpcy5nZXRDaGFsbGVuZ2UoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLmFjY2Vzc0tleSkge1xyXG4gICAgICB0aGlzLmdldENyZWRlbnRpYWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocHJlUHJvcHMuY3JlZGVudGlhbHMgIT0gdGhpcy5wcm9wcy5jcmVkZW50aWFscykge1xyXG4gICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5jcmVkZW50aWFscyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIFNob3c9e3RoaXMuc2hvd01vZGFsfSAvPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dNb2RhbCAmJiAoXHJcbiAgICAgICAgICA8U2V0dGluZ3NNb2RhbCBTZXRTZXR0aW5ncz17dGhpcy5jcmVhdGVTZXR0aW5nc30gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgRmV0Y2hEYXRhID0gKG1ldGhvZCwgdXJsLCBkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgICBmZXRjaCh1cmwgKyBgL3dlYnNlcnZpY2UucGhwPyR7ZW5jb2RlRm9ybURhdGEoZGF0YSl9YCwge1xyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXHJcbiAgICAgICAgICAgIE1vZGU6IFwibm8tY29yc1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGlmIChyZXMub2spIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgICAgbGV0IGJvZHkgPSBlbmNvZGVGb3JtRGF0YSh7XHJcbiAgICAgICAgICBvcGVyYXRpb246IFwibG9naW5cIixcclxuICAgICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgYWNjZXNzS2V5OiBkYXRhLmFjY2Vzc0tleSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZmV0Y2godXJsICsgYC93ZWJzZXJ2aWNlLnBocGAsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfSxcclxuICAgICAgICAgIGJvZHk6IGJvZHksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBpZiAocmVzLm9rKSByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZW5jb2RlRm9ybURhdGEgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKVxyXG4gICAgLm1hcCgoa2V5KSA9PiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSkpXHJcbiAgICAuam9pbihcIiZcIik7XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7IFNldFNldHRpbmdzLCBTZXRDcmVkZW50aWFsIH07XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgc2V0dGluZ3M6IHN0YXRlLnNldHRpbmdzLFxyXG4gICAgY3JlZGVudGlhbHM6IHN0YXRlLmNyZWRlbnRpYWxzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNYWluTGF5b3V0KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==