webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/reducer.js":
/*!**************************!*\
  !*** ./redux/reducer.js ***!
  \**************************/
/*! exports provided: initState, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initState = {
  token: "",
  settings: {
    url: "",
    user: "",
    accessKey: ""
  },
  credentials: {
    sessionName: "",
    userId: ""
  },
  userInfo: ""
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "SET_SETTINGS":
      return _objectSpread(_objectSpread({}, state), {}, {
        settings: {
          url: action.payload.url,
          user: action.payload.user,
          accessKey: action.payload.accessKey
        }
      });

    case "SET_CREDENTIAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        credentials: action.payload
      });

    case "SET_USERINFO":
      return _objectSpread(_objectSpread({}, state), {}, {
        userInfo: action.payload
      });

    default:
      return state;
  }
};

var makeStore = function makeStore(context) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer);
};

var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["createWrapper"])(makeStore, {
  debug: false
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImluaXRTdGF0ZSIsInRva2VuIiwic2V0dGluZ3MiLCJ1cmwiLCJ1c2VyIiwiYWNjZXNzS2V5IiwiY3JlZGVudGlhbHMiLCJzZXNzaW9uTmFtZSIsInVzZXJJZCIsInVzZXJJbmZvIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJtYWtlU3RvcmUiLCJjb250ZXh0IiwiY3JlYXRlU3RvcmUiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQUlBLFNBQVMsR0FBRztBQUNyQkMsT0FBSyxFQUFFLEVBRGM7QUFFckJDLFVBQVEsRUFBRTtBQUNSQyxPQUFHLEVBQUUsRUFERztBQUVSQyxRQUFJLEVBQUUsRUFGRTtBQUdSQyxhQUFTLEVBQUU7QUFISCxHQUZXO0FBT3JCQyxhQUFXLEVBQUU7QUFDWEMsZUFBVyxFQUFFLEVBREY7QUFFWEMsVUFBTSxFQUFFO0FBRkcsR0FQUTtBQVdyQkMsVUFBUSxFQUFFO0FBWFcsQ0FBaEI7O0FBY1AsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBK0I7QUFBQSxNQUE5QkMsS0FBOEIsdUVBQXRCWCxTQUFzQjtBQUFBLE1BQVhZLE1BQVc7O0FBQzdDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssY0FBTDtBQUNFLDZDQUNLRixLQURMO0FBRUVULGdCQUFRLEVBQUU7QUFDUkMsYUFBRyxFQUFFUyxNQUFNLENBQUNFLE9BQVAsQ0FBZVgsR0FEWjtBQUVSQyxjQUFJLEVBQUVRLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlVixJQUZiO0FBR1JDLG1CQUFTLEVBQUVPLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlVDtBQUhsQjtBQUZaOztBQVFGLFNBQUssZ0JBQUw7QUFDRSw2Q0FDS00sS0FETDtBQUVFTCxtQkFBVyxFQUFFTSxNQUFNLENBQUNFO0FBRnRCOztBQUlGLFNBQUssY0FBTDtBQUNFLDZDQUNLSCxLQURMO0FBRUVGLGdCQUFRLEVBQUVHLE1BQU0sQ0FBQ0U7QUFGbkI7O0FBSUY7QUFDRSxhQUFPSCxLQUFQO0FBckJKO0FBdUJELENBeEJEOztBQTBCQSxJQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxPQUFEO0FBQUEsU0FBYUMseURBQVcsQ0FBQ1AsT0FBRCxDQUF4QjtBQUFBLENBQWxCOztBQUNPLElBQU1RLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ0osU0FBRCxFQUFZO0FBQUVLLE9BQUssRUFBRTtBQUFULENBQVosQ0FBN0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuYWExMWZkODU1Y2UyNDc4ZDNiZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcblxyXG5leHBvcnQgbGV0IGluaXRTdGF0ZSA9IHtcclxuICB0b2tlbjogXCJcIixcclxuICBzZXR0aW5nczoge1xyXG4gICAgdXJsOiBcIlwiLFxyXG4gICAgdXNlcjogXCJcIixcclxuICAgIGFjY2Vzc0tleTogXCJcIixcclxuICB9LFxyXG4gIGNyZWRlbnRpYWxzOiB7XHJcbiAgICBzZXNzaW9uTmFtZTogXCJcIixcclxuICAgIHVzZXJJZDogXCJcIixcclxuICB9LFxyXG4gIHVzZXJJbmZvOiBcIlwiLFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIlNFVF9TRVRUSU5HU1wiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICB1cmw6IGFjdGlvbi5wYXlsb2FkLnVybCxcclxuICAgICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXHJcbiAgICAgICAgICBhY2Nlc3NLZXk6IGFjdGlvbi5wYXlsb2FkLmFjY2Vzc0tleSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIlNFVF9DUkVERU5USUFMXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY3JlZGVudGlhbHM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBcIlNFVF9VU0VSSU5GT1wiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJJbmZvOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBtYWtlU3RvcmUgPSAoY29udGV4dCkgPT4gY3JlYXRlU3RvcmUocmVkdWNlcik7XHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHsgZGVidWc6IGZhbHNlIH0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9