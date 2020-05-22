webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./redux/action.js":
/*!*************************!*\
  !*** ./redux/action.js ***!
  \*************************/
/*! exports provided: SetSettings, SetCredential, SetUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetSettings", function() { return SetSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetCredential", function() { return SetCredential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUserInfo", function() { return SetUserInfo; });
var SetSettings = function SetSettings(data) {
  // console.log(data);
  return {
    type: "SET_SETTINGS",
    payload: {
      url: data.url,
      user: data.user,
      accessKey: data.accessKey
    }
  };
};

_c = SetSettings;

var SetCredential = function SetCredential(data) {
  return {
    type: "SET_CREDENTIAL",
    payload: data
  };
};

_c2 = SetCredential;

var SetUserInfo = function SetUserInfo(data) {
  return {
    type: "SET_USERINFO",
    payload: data
  };
};

_c3 = SetUserInfo;


var _c, _c2, _c3;

$RefreshReg$(_c, "SetSettings");
$RefreshReg$(_c2, "SetCredential");
$RefreshReg$(_c3, "SetUserInfo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb24uanMiXSwibmFtZXMiOlsiU2V0U2V0dGluZ3MiLCJkYXRhIiwidHlwZSIsInBheWxvYWQiLCJ1cmwiLCJ1c2VyIiwiYWNjZXNzS2V5IiwiU2V0Q3JlZGVudGlhbCIsIlNldFVzZXJJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQVU7QUFDNUI7QUFDQSxTQUFPO0FBQ0xDLFFBQUksRUFBRSxjQUREO0FBRUxDLFdBQU8sRUFBRTtBQUNQQyxTQUFHLEVBQUVILElBQUksQ0FBQ0csR0FESDtBQUVQQyxVQUFJLEVBQUVKLElBQUksQ0FBQ0ksSUFGSjtBQUdQQyxlQUFTLEVBQUVMLElBQUksQ0FBQ0s7QUFIVDtBQUZKLEdBQVA7QUFRRCxDQVZEOztLQUFNTixXOztBQVlOLElBQU1PLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ04sSUFBRCxFQUFVO0FBQzlCLFNBQU87QUFDTEMsUUFBSSxFQUFFLGdCQUREO0FBRUxDLFdBQU8sRUFBRUY7QUFGSixHQUFQO0FBSUQsQ0FMRDs7TUFBTU0sYTs7QUFPTixJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDUCxJQUFELEVBQVU7QUFDNUIsU0FBTztBQUNMQyxRQUFJLEVBQUUsY0FERDtBQUVMQyxXQUFPLEVBQUVGO0FBRkosR0FBUDtBQUlELENBTEQ7O01BQU1PLFc7QUFPTiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYTk0NTdjNjcxNTIzYTNhNmJjNzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNldFNldHRpbmdzID0gKGRhdGEpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJTRVRfU0VUVElOR1NcIixcclxuICAgIHBheWxvYWQ6IHtcclxuICAgICAgdXJsOiBkYXRhLnVybCxcclxuICAgICAgdXNlcjogZGF0YS51c2VyLFxyXG4gICAgICBhY2Nlc3NLZXk6IGRhdGEuYWNjZXNzS2V5LFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgU2V0Q3JlZGVudGlhbCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiU0VUX0NSRURFTlRJQUxcIixcclxuICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IFNldFVzZXJJbmZvID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJTRVRfVVNFUklORk9cIixcclxuICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCB7IFNldFNldHRpbmdzLCBTZXRDcmVkZW50aWFsLCBTZXRVc2VySW5mbyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9