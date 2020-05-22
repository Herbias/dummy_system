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
    value: function getCredential(accessKey) {
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
      } // if (prevProps.credentials != this.props.credentials) {
      //   this.getUserInfo();
      // }


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
          lineNumber: 87,
          columnNumber: 9
        }
      }), this.props.children, this.state.showModal && __jsx(_components_SettingsModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
        SetSettings: this.createSettings,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9MYXlvdXRzL01haW5MYXlvdXQuanMiXSwibmFtZXMiOlsiTWFpbkxheW91dCIsInNob3dNb2RhbCIsImFjY2Vzc0tleSIsInNldFN0YXRlIiwic3RhdGUiLCJkYXRhIiwicHJvcHMiLCJTZXRTZXR0aW5ncyIsImEiLCJGZXRjaERhdGEiLCJzZXR0aW5ncyIsInVybCIsIm9wZXJhdGlvbiIsInVzZXJuYW1lIiwidXNlciIsInRoZW4iLCJyZXMiLCJzdWNjZXNzIiwibWQ1IiwicmVzdWx0IiwidG9rZW4iLCJTZXRDcmVkZW50aWFsIiwic2Vzc2lvbk5hbWUiLCJ1c2VySWQiLCJjcmVkZW50aWFscyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInByZXZQcm9wcyIsImdldENoYWxsZW5nZSIsImdldENyZWRlbnRpYWwiLCJjaGlsZHJlbiIsImNyZWF0ZVNldHRpbmdzIiwiQ29tcG9uZW50IiwibWV0aG9kIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmZXRjaCIsImVuY29kZUZvcm1EYXRhIiwiaGVhZGVyIiwiTW9kZSIsIm9rIiwianNvbiIsImVyciIsIndhcm4iLCJlIiwiYm9keSIsImhlYWRlcnMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7SUFFTUEsVTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxlQUFTLEVBQUUsS0FETDtBQUVOQyxlQUFTLEVBQUU7QUFGTCxLOztvTkFLSSxZQUFNO0FBQ2hCLFlBQUtDLFFBQUwsaUNBQ0ssTUFBS0MsS0FEVjtBQUVFSCxpQkFBUyxFQUFFLENBQUMsTUFBS0csS0FBTCxDQUFX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Q0xNLFlBQVEsRUFBRU4sS0FBSyxDQUFDTSxRQURYO0FBRUxjLGVBQVcsRUFBRXBCLEtBQUssQ0FBQ29CO0FBRmQsR0FBUDtBQUlELENBTEQ7O0FBT2VpQywySEFBTyxDQUFDRCxlQUFELEVBQWtCRCxrQkFBbEIsQ0FBUCxDQUE2Q3ZELFVBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmZlYTg4NzhhNTc3ZjhmMDQzOTllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgU2V0dGluZ3NNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZXR0aW5nc01vZGFsXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IG1kNSBmcm9tIFwibWQ1XCI7XHJcblxyXG5pbXBvcnQgeyBTZXRTZXR0aW5ncywgU2V0Q3JlZGVudGlhbCB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25cIjtcclxuXHJcbmNsYXNzIE1haW5MYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgc2hvd01vZGFsOiBmYWxzZSxcclxuICAgIGFjY2Vzc0tleTogXCJcIixcclxuICB9O1xyXG5cclxuICBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgc2hvd01vZGFsOiAhdGhpcy5zdGF0ZS5zaG93TW9kYWwsXHJcbiAgICAgIGFjY2Vzc0tleTogXCJcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNyZWF0ZVNldHRpbmdzID0gKGRhdGEpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBzaG93TW9kYWw6ICF0aGlzLnN0YXRlLnNob3dNb2RhbCB9KTtcclxuICAgIHRoaXMucHJvcHMuU2V0U2V0dGluZ3MoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgZ2V0Q2hhbGxlbmdlKCkge1xyXG4gICAgbGV0IGEgPSBGZXRjaERhdGEoXCJHRVRcIiwgdGhpcy5wcm9wcy5zZXR0aW5ncy51cmwsIHtcclxuICAgICAgb3BlcmF0aW9uOiBcImdldGNoYWxsZW5nZVwiLFxyXG4gICAgICB1c2VybmFtZTogdGhpcy5wcm9wcy5zZXR0aW5ncy51c2VyLFxyXG4gICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgIGFjY2Vzc0tleTogbWQ1KHJlcy5yZXN1bHQudG9rZW4gKyB0aGlzLnByb3BzLnNldHRpbmdzLmFjY2Vzc0tleSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3JlZGVudGlhbChhY2Nlc3NLZXkpIHtcclxuICAgIGxldCBhID0gRmV0Y2hEYXRhKFwiUE9TVFwiLCB0aGlzLnByb3BzLnNldHRpbmdzLnVybCwge1xyXG4gICAgICBvcGVyYXRpb246IFwibG9naW5cIixcclxuICAgICAgdXNlcm5hbWU6IHRoaXMucHJvcHMuc2V0dGluZ3MudXNlcixcclxuICAgICAgYWNjZXNzS2V5OiB0aGlzLnN0YXRlLmFjY2Vzc0tleSxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBpZiAocmVzLnN1Y2Nlc3MpXHJcbiAgICAgICAgdGhpcy5wcm9wcy5TZXRDcmVkZW50aWFsKHtcclxuICAgICAgICAgIHNlc3Npb25OYW1lOiByZXMucmVzdWx0LnNlc3Npb25OYW1lLFxyXG4gICAgICAgICAgdXNlcklkOiByZXMucmVzdWx0LnVzZXJJZCxcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICBsZXQgYSA9IEZldGNoRGF0YShcIkdFVFwiLCB0aGlzLnByb3BzLnNldHRpbmdzLnVybCwge1xyXG4gICAgICBvcGVyYXRpb246IFwicXVlcnlcIixcclxuICAgICAgc2Vzc2lvbk5hbWU6IHRoaXMucHJvcHMuY3JlZGVudGlhbHMuc2Vzc2lvbk5hbWUsXHJcbiAgICAgIHF1ZXJ5OiBgU0VMRUNUIHVzZXJfbmFtZSwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lIEZST00gVXNlcnMgV0hFUkUgaWQgPSAke3RoaXMucHJvcHMuY3JlZGVudGlhbHMudXNlcklkfTtgLFxyXG4gICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGlmIChyZXMuc3VjY2VzcykgY29uc29sZS5sb2cocmVzLnJlc3VsdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgIGlmIChwcmV2UHJvcHMuc2V0dGluZ3MgIT09IHRoaXMucHJvcHMuc2V0dGluZ3MpIHtcclxuICAgICAgdGhpcy5nZXRDaGFsbGVuZ2UoKTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgdGhpcy5zdGF0ZS5hY2Nlc3NLZXkgfHxcclxuICAgICAgcHJldlByb3BzLmNyZWRlbnRpYWxzICE9PSB0aGlzLnByb3BzLmNyZWRlbnRpYWxzXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5nZXRDcmVkZW50aWFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgKHByZXZQcm9wcy5jcmVkZW50aWFscyAhPSB0aGlzLnByb3BzLmNyZWRlbnRpYWxzKSB7XHJcbiAgICAvLyAgIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmNyZWRlbnRpYWxzKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPE5hdmlnYXRpb24gU2hvdz17dGhpcy5zaG93TW9kYWx9IC8+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd01vZGFsICYmIChcclxuICAgICAgICAgIDxTZXR0aW5nc01vZGFsIFNldFNldHRpbmdzPXt0aGlzLmNyZWF0ZVNldHRpbmdzfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmxldCBGZXRjaERhdGEgPSAobWV0aG9kLCB1cmwsIGRhdGEpID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICAgIGZldGNoKHVybCArIGAvd2Vic2VydmljZS5waHA/JHtlbmNvZGVGb3JtRGF0YShkYXRhKX1gLCB7XHJcbiAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgICAgICAgICAgTW9kZTogXCJuby1jb3JzXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5vaykgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgICBsZXQgYm9keSA9IGVuY29kZUZvcm1EYXRhKHtcclxuICAgICAgICAgIG9wZXJhdGlvbjogXCJsb2dpblwiLFxyXG4gICAgICAgICAgdXNlcm5hbWU6IGRhdGEudXNlcm5hbWUsXHJcbiAgICAgICAgICBhY2Nlc3NLZXk6IGRhdGEuYWNjZXNzS2V5LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmZXRjaCh1cmwgKyBgL3dlYnNlcnZpY2UucGhwYCwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB9LFxyXG4gICAgICAgICAgYm9keTogYm9keSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGlmIChyZXMub2spIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBlbmNvZGVGb3JtRGF0YSA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpXHJcbiAgICAubWFwKChrZXkpID0+IGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKSlcclxuICAgIC5qb2luKFwiJlwiKTtcclxufTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHsgU2V0U2V0dGluZ3MsIFNldENyZWRlbnRpYWwgfTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzZXR0aW5nczogc3RhdGUuc2V0dGluZ3MsXHJcbiAgICBjcmVkZW50aWFsczogc3RhdGUuY3JlZGVudGlhbHMsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1haW5MYXlvdXQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9