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
        if (res.success) {
          console.log([res.result[0]]); // this.props.SetUserInfo(res.result);
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
          lineNumber: 85,
          columnNumber: 9
        }
      }), this.props.children, this.state.showModal && __jsx(_components_SettingsModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        SetSettings: this.createSettings,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
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
    credentials: state.credentials,
    userInfo: state.userInfo
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXRzL01haW5MYXlvdXQuanMiXSwibmFtZXMiOlsiTWFpbkxheW91dCIsInNob3dNb2RhbCIsImFjY2Vzc0tleSIsInNldFN0YXRlIiwic3RhdGUiLCJkYXRhIiwicHJvcHMiLCJTZXRTZXR0aW5ncyIsImEiLCJGZXRjaERhdGEiLCJzZXR0aW5ncyIsInVybCIsIm9wZXJhdGlvbiIsInVzZXJuYW1lIiwidXNlciIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwiZ2V0Q3JlZGVudGlhbCIsIm1kNSIsInJlc3VsdCIsInRva2VuIiwiU2V0Q3JlZGVudGlhbCIsInNlc3Npb25OYW1lIiwidXNlcklkIiwiY3JlZGVudGlhbHMiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2UHJvcHMiLCJnZXRDaGFsbGVuZ2UiLCJnZXRVc2VySW5mbyIsImNoaWxkcmVuIiwiY3JlYXRlU2V0dGluZ3MiLCJDb21wb25lbnQiLCJtZXRob2QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwiZW5jb2RlRm9ybURhdGEiLCJoZWFkZXIiLCJNb2RlIiwib2siLCJqc29uIiwiZXJyIiwid2FybiIsImUiLCJib2R5IiwiaGVhZGVycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiU2V0VXNlckluZm8iLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VySW5mbyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7SUFFTUEsVTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxlQUFTLEVBQUUsS0FETDtBQUVOQyxlQUFTLEVBQUU7QUFGTCxLOztvTkFLSSxZQUFNO0FBQ2hCLFlBQUtDLFFBQUwsaUNBQ0ssTUFBS0MsS0FE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Q0FBQ00sUUFEWDtBQUVMZSxlQUFXLEVBQUVyQixLQUFLLENBQUNxQixXQUZkO0FBR0xrQyxZQUFRLEVBQUV2RCxLQUFLLENBQUN1RDtBQUhYLEdBQVA7QUFLRCxDQU5EOztBQVFlQywySEFBTyxDQUFDRixlQUFELEVBQWtCRixrQkFBbEIsQ0FBUCxDQUE2Q3hELFVBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjg5NWY2NzA5YzMzZmE3Mzc3ODRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgU2V0dGluZ3NNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZXR0aW5nc01vZGFsXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IG1kNSBmcm9tIFwibWQ1XCI7XHJcblxyXG5pbXBvcnQgeyBTZXRTZXR0aW5ncywgU2V0Q3JlZGVudGlhbCwgU2V0VXNlckluZm8gfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9uXCI7XHJcblxyXG5jbGFzcyBNYWluTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIHNob3dNb2RhbDogZmFsc2UsXHJcbiAgICBhY2Nlc3NLZXk6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgc2hvd01vZGFsID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgIHNob3dNb2RhbDogIXRoaXMuc3RhdGUuc2hvd01vZGFsLFxyXG4gICAgICBhY2Nlc3NLZXk6IFwiXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjcmVhdGVTZXR0aW5ncyA9IChkYXRhKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgc2hvd01vZGFsOiAhdGhpcy5zdGF0ZS5zaG93TW9kYWwgfSk7XHJcbiAgICB0aGlzLnByb3BzLlNldFNldHRpbmdzKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGdldENoYWxsZW5nZSgpIHtcclxuICAgIGxldCBhID0gRmV0Y2hEYXRhKFwiR0VUXCIsIHRoaXMucHJvcHMuc2V0dGluZ3MudXJsLCB7XHJcbiAgICAgIG9wZXJhdGlvbjogXCJnZXRjaGFsbGVuZ2VcIixcclxuICAgICAgdXNlcm5hbWU6IHRoaXMucHJvcHMuc2V0dGluZ3MudXNlcixcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcclxuICAgICAgICB0aGlzLmdldENyZWRlbnRpYWwoXHJcbiAgICAgICAgICBtZDUocmVzLnJlc3VsdC50b2tlbiArIHRoaXMucHJvcHMuc2V0dGluZ3MuYWNjZXNzS2V5KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgLy8gICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgIC8vICAgYWNjZXNzS2V5OiBtZDUocmVzLnJlc3VsdC50b2tlbiArIHRoaXMucHJvcHMuc2V0dGluZ3MuYWNjZXNzS2V5KSxcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRDcmVkZW50aWFsKGFjY2Vzc0tleSkge1xyXG4gICAgbGV0IGEgPSBGZXRjaERhdGEoXCJQT1NUXCIsIHRoaXMucHJvcHMuc2V0dGluZ3MudXJsLCB7XHJcbiAgICAgIG9wZXJhdGlvbjogXCJsb2dpblwiLFxyXG4gICAgICB1c2VybmFtZTogdGhpcy5wcm9wcy5zZXR0aW5ncy51c2VyLFxyXG4gICAgICBhY2Nlc3NLZXk6IGFjY2Vzc0tleSxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLnN1Y2Nlc3MpXHJcbiAgICAgICAgdGhpcy5wcm9wcy5TZXRDcmVkZW50aWFsKHtcclxuICAgICAgICAgIHNlc3Npb25OYW1lOiByZXMucmVzdWx0LnNlc3Npb25OYW1lLFxyXG4gICAgICAgICAgdXNlcklkOiByZXMucmVzdWx0LnVzZXJJZCxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICBsZXQgYSA9IEZldGNoRGF0YShcIkdFVFwiLCB0aGlzLnByb3BzLnNldHRpbmdzLnVybCwge1xyXG4gICAgICBvcGVyYXRpb246IFwicXVlcnlcIixcclxuICAgICAgc2Vzc2lvbk5hbWU6IHRoaXMucHJvcHMuY3JlZGVudGlhbHMuc2Vzc2lvbk5hbWUsXHJcbiAgICAgIHF1ZXJ5OiBgU0VMRUNUIHVzZXJfbmFtZSwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lIEZST00gVXNlcnMgV0hFUkUgaWQgPSAke3RoaXMucHJvcHMuY3JlZGVudGlhbHMudXNlcklkfTtgLFxyXG4gICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFtyZXMucmVzdWx0WzBdXSk7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5TZXRVc2VySW5mbyhyZXMucmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICBpZiAocHJldlByb3BzLnNldHRpbmdzICE9PSB0aGlzLnByb3BzLnNldHRpbmdzKSB7XHJcbiAgICAgIHRoaXMuZ2V0Q2hhbGxlbmdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByZXZQcm9wcy5jcmVkZW50aWFscyAhPT0gdGhpcy5wcm9wcy5jcmVkZW50aWFscykge1xyXG4gICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uIFNob3c9e3RoaXMuc2hvd01vZGFsfSAvPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnNob3dNb2RhbCAmJiAoXHJcbiAgICAgICAgICA8U2V0dGluZ3NNb2RhbCBTZXRTZXR0aW5ncz17dGhpcy5jcmVhdGVTZXR0aW5nc30gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgRmV0Y2hEYXRhID0gKG1ldGhvZCwgdXJsLCBkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHN3aXRjaCAobWV0aG9kKSB7XHJcbiAgICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgICBmZXRjaCh1cmwgKyBgL3dlYnNlcnZpY2UucGhwPyR7ZW5jb2RlRm9ybURhdGEoZGF0YSl9YCwge1xyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXHJcbiAgICAgICAgICAgIE1vZGU6IFwibm8tY29yc1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGlmIChyZXMub2spIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJQT1NUXCI6XHJcbiAgICAgICAgbGV0IGJvZHkgPSBlbmNvZGVGb3JtRGF0YSh7XHJcbiAgICAgICAgICBvcGVyYXRpb246IFwibG9naW5cIixcclxuICAgICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgYWNjZXNzS2V5OiBkYXRhLmFjY2Vzc0tleSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZmV0Y2godXJsICsgYC93ZWJzZXJ2aWNlLnBocGAsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfSxcclxuICAgICAgICAgIGJvZHk6IGJvZHksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBpZiAocmVzLm9rKSByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZW5jb2RlRm9ybURhdGEgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKVxyXG4gICAgLm1hcCgoa2V5KSA9PiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSkpXHJcbiAgICAuam9pbihcIiZcIik7XHJcbn07XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7IFNldFNldHRpbmdzLCBTZXRDcmVkZW50aWFsLCBTZXRVc2VySW5mbyB9O1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNldHRpbmdzOiBzdGF0ZS5zZXR0aW5ncyxcclxuICAgIGNyZWRlbnRpYWxzOiBzdGF0ZS5jcmVkZW50aWFscyxcclxuICAgIHVzZXJJbmZvOiBzdGF0ZS51c2VySW5mbyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWFpbkxheW91dCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=