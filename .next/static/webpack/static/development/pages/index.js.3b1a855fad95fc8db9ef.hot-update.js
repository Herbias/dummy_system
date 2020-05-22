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
  console.log(data);
  return {
    type: "SET_CREDENTIAL",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb24uanMiXSwibmFtZXMiOlsiU2V0U2V0dGluZ3MiLCJkYXRhIiwidHlwZSIsInBheWxvYWQiLCJ1cmwiLCJ1c2VyIiwiYWNjZXNzS2V5IiwiU2V0Q3JlZGVudGlhbCIsIlNldFVzZXJJbmZvIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsSUFBRCxFQUFVO0FBQzVCO0FBQ0EsU0FBTztBQUNMQyxRQUFJLEVBQUUsY0FERDtBQUVMQyxXQUFPLEVBQUU7QUFDUEMsU0FBRyxFQUFFSCxJQUFJLENBQUNHLEdBREg7QUFFUEMsVUFBSSxFQUFFSixJQUFJLENBQUNJLElBRko7QUFHUEMsZUFBUyxFQUFFTCxJQUFJLENBQUNLO0FBSFQ7QUFGSixHQUFQO0FBUUQsQ0FWRDs7S0FBTU4sVzs7QUFZTixJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNOLElBQUQsRUFBVTtBQUM5QixTQUFPO0FBQ0xDLFFBQUksRUFBRSxnQkFERDtBQUVMQyxXQUFPLEVBQUVGO0FBRkosR0FBUDtBQUlELENBTEQ7O01BQU1NLGE7O0FBT04sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1AsSUFBRCxFQUFVO0FBQzVCUSxTQUFPLENBQUNDLEdBQVIsQ0FBWVQsSUFBWjtBQUNBLFNBQU87QUFDTEMsUUFBSSxFQUFFLGdCQUREO0FBRUxDLFdBQU8sRUFBRUY7QUFGSixHQUFQO0FBSUQsQ0FORDs7TUFBTU8sVztBQVFOIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zYjFhODU1ZmFkOTVmYzhkYjllZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2V0U2V0dGluZ3MgPSAoZGF0YSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIlNFVF9TRVRUSU5HU1wiLFxyXG4gICAgcGF5bG9hZDoge1xyXG4gICAgICB1cmw6IGRhdGEudXJsLFxyXG4gICAgICB1c2VyOiBkYXRhLnVzZXIsXHJcbiAgICAgIGFjY2Vzc0tleTogZGF0YS5hY2Nlc3NLZXksXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBTZXRDcmVkZW50aWFsID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogXCJTRVRfQ1JFREVOVElBTFwiLFxyXG4gICAgcGF5bG9hZDogZGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgU2V0VXNlckluZm8gPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIlNFVF9DUkVERU5USUFMXCIsXHJcbiAgICBwYXlsb2FkOiBkYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgeyBTZXRTZXR0aW5ncywgU2V0Q3JlZGVudGlhbCwgU2V0VXNlckluZm8gfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==