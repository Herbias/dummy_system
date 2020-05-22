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
      console.log("From reducer: " + JSON.stringify(action.payload));
      return _objectSpread(_objectSpread({}, state), {}, {
        credentials: action.payload
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImluaXRTdGF0ZSIsInRva2VuIiwic2V0dGluZ3MiLCJ1cmwiLCJ1c2VyIiwiYWNjZXNzS2V5IiwiY3JlZGVudGlhbHMiLCJzZXNzaW9uTmFtZSIsInVzZXJJZCIsInVzZXJJbmZvIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ha2VTdG9yZSIsImNvbnRleHQiLCJjcmVhdGVTdG9yZSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBSUEsU0FBUyxHQUFHO0FBQ3JCQyxPQUFLLEVBQUUsRUFEYztBQUVyQkMsVUFBUSxFQUFFO0FBQ1JDLE9BQUcsRUFBRSxFQURHO0FBRVJDLFFBQUksRUFBRSxFQUZFO0FBR1JDLGFBQVMsRUFBRTtBQUhILEdBRlc7QUFPckJDLGFBQVcsRUFBRTtBQUNYQyxlQUFXLEVBQUUsRUFERjtBQUVYQyxVQUFNLEVBQUU7QUFGRyxHQVBRO0FBV3JCQyxVQUFRLEVBQUU7QUFYVyxDQUFoQjs7QUFjUCxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUErQjtBQUFBLE1BQTlCQyxLQUE4Qix1RUFBdEJYLFNBQXNCO0FBQUEsTUFBWFksTUFBVzs7QUFDN0MsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyxjQUFMO0FBQ0UsNkNBQ0tGLEtBREw7QUFFRVQsZ0JBQVEsRUFBRTtBQUNSQyxhQUFHLEVBQUVTLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlWCxHQURaO0FBRVJDLGNBQUksRUFBRVEsTUFBTSxDQUFDRSxPQUFQLENBQWVWLElBRmI7QUFHUkMsbUJBQVMsRUFBRU8sTUFBTSxDQUFDRSxPQUFQLENBQWVUO0FBSGxCO0FBRlo7O0FBUUYsU0FBSyxnQkFBTDtBQUNFVSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBbUJDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixNQUFNLENBQUNFLE9BQXRCLENBQS9CO0FBQ0EsNkNBQ0tILEtBREw7QUFFRUwsbUJBQVcsRUFBRU0sTUFBTSxDQUFDRTtBQUZ0Qjs7QUFJRjtBQUNFLGFBQU9ILEtBQVA7QUFqQko7QUFtQkQsQ0FwQkQ7O0FBc0JBLElBQU1RLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE9BQUQ7QUFBQSxTQUFhQyx5REFBVyxDQUFDWCxPQUFELENBQXhCO0FBQUEsQ0FBbEI7O0FBQ08sSUFBTVksT0FBTyxHQUFHQyx3RUFBYSxDQUFDSixTQUFELEVBQVk7QUFBRUssT0FBSyxFQUFFO0FBQVQsQ0FBWixDQUE3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5lZDU4OTZmNjYyMTM4ZGI0YmY1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcbmV4cG9ydCBsZXQgaW5pdFN0YXRlID0ge1xyXG4gIHRva2VuOiBcIlwiLFxyXG4gIHNldHRpbmdzOiB7XHJcbiAgICB1cmw6IFwiXCIsXHJcbiAgICB1c2VyOiBcIlwiLFxyXG4gICAgYWNjZXNzS2V5OiBcIlwiLFxyXG4gIH0sXHJcbiAgY3JlZGVudGlhbHM6IHtcclxuICAgIHNlc3Npb25OYW1lOiBcIlwiLFxyXG4gICAgdXNlcklkOiBcIlwiLFxyXG4gIH0sXHJcbiAgdXNlckluZm86IFwiXCIsXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiU0VUX1NFVFRJTkdTXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHVybDogYWN0aW9uLnBheWxvYWQudXJsLFxyXG4gICAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlcixcclxuICAgICAgICAgIGFjY2Vzc0tleTogYWN0aW9uLnBheWxvYWQuYWNjZXNzS2V5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFwiU0VUX0NSRURFTlRJQUxcIjpcclxuICAgICAgY29uc29sZS5sb2coXCJGcm9tIHJlZHVjZXI6IFwiICsgSlNPTi5zdHJpbmdpZnkoYWN0aW9uLnBheWxvYWQpKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjcmVkZW50aWFsczogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKGNvbnRleHQpID0+IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiBmYWxzZSB9KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==