webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Layouts/MainLayout */ "./Layouts/MainLayout.js");
/* harmony import */ var _components_UserInformation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/UserInformation */ "./components/UserInformation.js");







var _jsxFileName = "C:\\Users\\Adrian\\Desktop\\DummySystem\\VGL\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      message: {
        style: "text-red-500",
        str: "It seems web services is not configure correctly"
      }
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.userInfo != this.props.userInfo) setMessage({
        style: "text-green-500",
        str: "Welcome to VTiger Web Services"
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "p-4 shadow rounded bg-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }
      }, __jsx("h1", {
        className: this.state.message.style + " leading-normal mb-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }
      }, " ", this.state.message.str), this.props.credentials.userId != "" && __jsx(_components_UserInformation__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 51
        }
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    settings: state.settings,
    credentials: state.credentials,
    userInfo: state.userInfo
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(Index));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIm1lc3NhZ2UiLCJzdHlsZSIsInN0ciIsInByZXZQcm9wcyIsInVzZXJJbmZvIiwicHJvcHMiLCJzZXRNZXNzYWdlIiwic3RhdGUiLCJjcmVkZW50aWFscyIsInVzZXJJZCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInNldHRpbmdzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxhQUFPLEVBQUU7QUFDUEMsYUFBSyxFQUFFLGNBREE7QUFFUEMsV0FBRyxFQUFFO0FBRkU7QUFESCxLOzs7Ozs7O3VDQU9XQyxTLEVBQVc7QUFDNUIsVUFBR0EsU0FBUyxDQUFDQyxRQUFWLElBQXNCLEtBQUtDLEtBQUwsQ0FBV0QsUUFBcEMsRUFDRUUsVUFBVSxDQUFDO0FBQ1RMLGFBQUssRUFBRSxnQkFERTtBQUVUQyxXQUFHLEVBQUU7QUFGSSxPQUFELENBQVY7QUFJSDs7OzZCQUVRO0FBQ1AsYUFDRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBRSxLQUFLSyxLQUFMLENBQVdQLE9BQVgsQ0FBbUJDLEtBQW5CLEdBQTJCLHNCQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csR0FESCxFQUVHLEtBQUtNLEtBQUwsQ0FBV1AsT0FBWCxDQUFtQkUsR0FGdEIsQ0FERixFQUtHLEtBQUtHLEtBQUwsQ0FBV0csV0FBWCxDQUF1QkMsTUFBdkIsSUFBaUMsRUFBakMsSUFBdUMsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTDFDLENBREYsQ0FERjtBQVdEOzs7O0VBNUJpQkMsK0M7O0FBK0JwQixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNKLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xLLFlBQVEsRUFBRUwsS0FBSyxDQUFDSyxRQURYO0FBRUxKLGVBQVcsRUFBRUQsS0FBSyxDQUFDQyxXQUZkO0FBR0xKLFlBQVEsRUFBRUcsS0FBSyxDQUFDSDtBQUhYLEdBQVA7QUFLRCxDQU5EOztBQVFlUywwSEFBTyxDQUFDRixlQUFELENBQVAsQ0FBeUJaLEtBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjdlNDAwZGVmYjNmMzlmYTIyOGM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vTGF5b3V0cy9NYWluTGF5b3V0XCI7XHJcbmltcG9ydCBVc2VySW5mb3JtYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm9ybWF0aW9uXCI7XHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBtZXNzYWdlOiB7XHJcbiAgICAgIHN0eWxlOiBcInRleHQtcmVkLTUwMFwiLFxyXG4gICAgICBzdHI6IFwiSXQgc2VlbXMgd2ViIHNlcnZpY2VzIGlzIG5vdCBjb25maWd1cmUgY29ycmVjdGx5XCIsXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgIGlmKHByZXZQcm9wcy51c2VySW5mbyAhPSB0aGlzLnByb3BzLnVzZXJJbmZvKVxyXG4gICAgICBzZXRNZXNzYWdlKHtcclxuICAgICAgICBzdHlsZTogXCJ0ZXh0LWdyZWVuLTUwMFwiLFxyXG4gICAgICAgIHN0cjogXCJXZWxjb21lIHRvIFZUaWdlciBXZWIgU2VydmljZXNcIixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1haW5MYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgc2hhZG93IHJvdW5kZWQgYmctd2hpdGVcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3RoaXMuc3RhdGUubWVzc2FnZS5zdHlsZSArIFwiIGxlYWRpbmctbm9ybWFsIG1iLTJcIn0+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAge3RoaXMuc3RhdGUubWVzc2FnZS5zdHJ9XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuY3JlZGVudGlhbHMudXNlcklkICE9IFwiXCIgJiYgPFVzZXJJbmZvcm1hdGlvbiAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzZXR0aW5nczogc3RhdGUuc2V0dGluZ3MsXHJcbiAgICBjcmVkZW50aWFsczogc3RhdGUuY3JlZGVudGlhbHMsXHJcbiAgICB1c2VySW5mbzogc3RhdGUudXNlckluZm8sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShJbmRleCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=