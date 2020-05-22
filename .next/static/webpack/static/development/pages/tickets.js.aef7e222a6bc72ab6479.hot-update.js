webpackHotUpdate("static\\development\\pages\\tickets.js",{

/***/ "./pages/tickets.js":
/*!**************************!*\
  !*** ./pages/tickets.js ***!
  \**************************/
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
/* harmony import */ var _Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Layouts/MainLayout */ "./Layouts/MainLayout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");








var _s = $RefreshSig$(),
    _this = undefined,
    _jsxFileName = "C:\\Users\\Adrian\\Desktop\\DummySystem\\VGL\\pages\\tickets.js",
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var GetQueryData = function GetQueryData(id) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({}),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (id == 11) setData({
      column: "accountname",
      name: "Accounts"
    });
    if (id == 19) setData({
      column: "user_name",
      name: "Users"
    });
    if (id == 20) setData({
      column: "groupname",
      name: "Groups"
    });
  }, []);
  return data;
};

_s(GetQueryData, "tNVKLF/eI269iIOS4WygXQde5D8=");

_c = GetQueryData;

var Cell = function Cell(_ref) {
  _s2();

  var id = _ref.id;
  var credentials = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.credentials;
  });
  var settings = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.settings;
  });
  var queryData = GetQueryData(id.replace(/([x]\d).*/, ""));

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      result = _useState2[0],
      setResult = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      cellData = _useState3[0],
      setCellData = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    setResult("SELECT ".concat(queryData.column, " FROM ").concat(queryData.name, " WHERE id = ").concat(id, ";"));
  }, [queryData]);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    Object(_utils_helper__WEBPACK_IMPORTED_MODULE_10__["FetchData"])("GET", settings.url, {
      operation: "query",
      sessionName: credentials.sessionName,
      query: result
    }).then(function (res) {
      setCellData(res.result);
    }); //   fetch(
    //     settings.url +
    //       `/webservice.php?${encodeFormData({
    //         operation: "query",
    //         sessionName: credentials.sessionName,
    //         query: result,
    //       })}`,
    //     {
    //       header: {
    //         "Content-Type": "application/x-www-form-urlencoded",
    //         Mode: "no-cors",
    //       },
    //     }
    //   )
    //     .then((res) => {
    //       try {
    //         if (res.ok) return res.json();
    //       } catch (err) {
    //         console.warn(e);
    //       }
    //     })
    //     .then((data) => {
    //       setCellData(data.result);
    //     });
  }, [result]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("td", {
    className: "border px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, cellData ? cellData[0][Object.keys(cellData[0])[0]] : ""));
};

_s2(Cell, "gWEE/AhEr3lRHONaodJFVsn7CNk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"]];
});

_c2 = Cell;

var Row = function Row(_ref2) {
  var data = _ref2.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, data.map(function (data, i) {
    return __jsx("tr", {
      key: i,
      id: data.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }, __jsx("td", {
      className: "border px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }, data.id.replace(/.(\d[x])/, "")), __jsx("td", {
      className: "border px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }
    }, data.ticket_no), __jsx("td", {
      className: "border px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }, data.ticket_title), __jsx(Cell, {
      id: data.parent_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }
    }), __jsx("td", {
      className: "border px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 13
      }
    }, data.ticketpriorities), __jsx("td", {
      className: "border px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }
    }, data.ticketstatus), __jsx(Cell, {
      id: data.assigned_user_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }), __jsx(Cell, {
      id: data.modifiedby,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }));
  }));
};

_c3 = Row;

var tickets = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(tickets, _Component);

  var _super = _createSuper(tickets);

  function tickets() {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, tickets);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "state", {
      list: []
    });

    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(tickets, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      Object(_utils_helper__WEBPACK_IMPORTED_MODULE_10__["FetchData"])("GET", this.props.settings.url, {
        operation: "query",
        sessionName: this.props.credentials.sessionName,
        query: "SELECT id, ticket_no, ticket_title, parent_id, ticketpriorities, ticketstatus,assigned_user_id, modifiedby  FROM HelpDesk;"
      }).then(function (res) {
        _this3.setState({
          list: res.result
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_Layouts_MainLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "p-4 shadow rounded bg-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }
      }, "Tickets"), __jsx("div", {
        className: "flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 13
        }
      }, __jsx("table", {
        className: "table-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 15
        }
      }, __jsx("thead", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 17
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 19
        }
      }, __jsx("th", {
        className: "px-4 py-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }
      }, "ID"), __jsx("th", {
        className: "px-4 py-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 21
        }
      }, "Number"), __jsx("th", {
        className: "px-4 py-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }
      }, "Title"), __jsx("th", {
        className: "px-4 py-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }
      }, "Organization"), __jsx("th", {
        className: "px-4 py-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }
      }, "Priority"), __jsx("th", {
        className: "px-4 py-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }
      }, "Status"), __jsx("th", {
        className: "px-4 py-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }
      }, "Assigned To"), __jsx("th", {
        className: "px-4 py-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 21
        }
      }, "Modified By"))), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 17
        }
      }, this.state.list && __jsx(Row, {
        data: this.state.list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 39
        }
      })))))));
    }
  }]);

  return tickets;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    settings: state.settings,
    credentials: state.credentials,
    userInfo: state.userInfo
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(tickets));

var _c, _c2, _c3;

$RefreshReg$(_c, "GetQueryData");
$RefreshReg$(_c2, "Cell");
$RefreshReg$(_c3, "Row");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90aWNrZXRzLmpzIl0sIm5hbWVzIjpbIkdldFF1ZXJ5RGF0YSIsImlkIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImNvbHVtbiIsIm5hbWUiLCJDZWxsIiwiY3JlZGVudGlhbHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2V0dGluZ3MiLCJxdWVyeURhdGEiLCJyZXBsYWNlIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiY2VsbERhdGEiLCJzZXRDZWxsRGF0YSIsIkZldGNoRGF0YSIsInVybCIsIm9wZXJhdGlvbiIsInNlc3Npb25OYW1lIiwicXVlcnkiLCJ0aGVuIiwicmVzIiwiT2JqZWN0Iiwia2V5cyIsIlJvdyIsIm1hcCIsImkiLCJ0aWNrZXRfbm8iLCJ0aWNrZXRfdGl0bGUiLCJwYXJlbnRfaWQiLCJ0aWNrZXRwcmlvcml0aWVzIiwidGlja2V0c3RhdHVzIiwiYXNzaWduZWRfdXNlcl9pZCIsIm1vZGlmaWVkYnkiLCJ0aWNrZXRzIiwibGlzdCIsInByb3BzIiwic2V0U3RhdGUiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VySW5mbyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEVBQUQsRUFBUTtBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEVBQUQsQ0FETDtBQUFBLE1BQ3BCQyxJQURvQjtBQUFBLE1BQ2RDLE9BRGM7O0FBRTNCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJSixFQUFFLElBQUksRUFBVixFQUFjRyxPQUFPLENBQUM7QUFBRUUsWUFBTSxFQUFFLGFBQVY7QUFBeUJDLFVBQUksRUFBRTtBQUEvQixLQUFELENBQVA7QUFDZCxRQUFJTixFQUFFLElBQUksRUFB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S0U7QUFBSSxpQkFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRixFQU1FO0FBQUksaUJBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkYsRUFPRTtBQUFJLGlCQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBGLEVBUUU7QUFBSSxpQkFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFSRixDQURGLENBREYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csS0FBS0osS0FBTCxDQUFXNEIsSUFBWCxJQUFtQixNQUFDLEdBQUQ7QUFBSyxZQUFJLEVBQUUsS0FBSzVCLEtBQUwsQ0FBVzRCLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEdEIsQ0FiRixDQURGLENBREYsQ0FGRixDQURGLENBREY7QUErQkQ7Ozs7RUE5Q21CRywrQzs7QUFpRHRCLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ2hDLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xDLFlBQVEsRUFBRUQsS0FBSyxDQUFDQyxRQURYO0FBRUxILGVBQVcsRUFBRUUsS0FBSyxDQUFDRixXQUZkO0FBR0xtQyxZQUFRLEVBQUVqQyxLQUFLLENBQUNpQztBQUhYLEdBQVA7QUFLRCxDQU5EOztBQVFlQywwSEFBTyxDQUFDRixlQUFELENBQVAsQ0FBeUJMLE9BQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHRpY2tldHMuanMuYWVmN2UyMjJhNmJjNzJhYjY0NzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluTGF5b3V0IGZyb20gXCIuLi9MYXlvdXRzL01haW5MYXlvdXRcIjtcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZldGNoRGF0YSB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgR2V0UXVlcnlEYXRhID0gKGlkKSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaWQgPT0gMTEpIHNldERhdGEoeyBjb2x1bW46IFwiYWNjb3VudG5hbWVcIiwgbmFtZTogXCJBY2NvdW50c1wiIH0pO1xyXG4gICAgaWYgKGlkID09IDE5KSBzZXREYXRhKHsgY29sdW1uOiBcInVzZXJfbmFtZVwiLCBuYW1lOiBcIlVzZXJzXCIgfSk7XHJcbiAgICBpZiAoaWQgPT0gMjApIHNldERhdGEoeyBjb2x1bW46IFwiZ3JvdXBuYW1lXCIsIG5hbWU6IFwiR3JvdXBzXCIgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuY29uc3QgQ2VsbCA9ICh7IGlkIH0pID0+IHtcclxuICBsZXQgY3JlZGVudGlhbHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNyZWRlbnRpYWxzKTtcclxuICBsZXQgc2V0dGluZ3MgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNldHRpbmdzKTtcclxuICBsZXQgcXVlcnlEYXRhID0gR2V0UXVlcnlEYXRhKGlkLnJlcGxhY2UoLyhbeF1cXGQpLiovLCBcIlwiKSk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjZWxsRGF0YSwgc2V0Q2VsbERhdGFdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRSZXN1bHQoXHJcbiAgICAgIGBTRUxFQ1QgJHtxdWVyeURhdGEuY29sdW1ufSBGUk9NICR7cXVlcnlEYXRhLm5hbWV9IFdIRVJFIGlkID0gJHtpZH07YFxyXG4gICAgKTtcclxuICB9LCBbcXVlcnlEYXRhXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBGZXRjaERhdGEoXCJHRVRcIiwgc2V0dGluZ3MudXJsLCB7XHJcbiAgICAgIG9wZXJhdGlvbjogXCJxdWVyeVwiLFxyXG4gICAgICBzZXNzaW9uTmFtZTogY3JlZGVudGlhbHMuc2Vzc2lvbk5hbWUsXHJcbiAgICAgIHF1ZXJ5OiByZXN1bHQsXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0Q2VsbERhdGEocmVzLnJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIC8vICAgZmV0Y2goXHJcbiAgICAvLyAgICAgc2V0dGluZ3MudXJsICtcclxuICAgIC8vICAgICAgIGAvd2Vic2VydmljZS5waHA/JHtlbmNvZGVGb3JtRGF0YSh7XHJcbiAgICAvLyAgICAgICAgIG9wZXJhdGlvbjogXCJxdWVyeVwiLFxyXG4gICAgLy8gICAgICAgICBzZXNzaW9uTmFtZTogY3JlZGVudGlhbHMuc2Vzc2lvbk5hbWUsXHJcbiAgICAvLyAgICAgICAgIHF1ZXJ5OiByZXN1bHQsXHJcbiAgICAvLyAgICAgICB9KX1gLFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIGhlYWRlcjoge1xyXG4gICAgLy8gICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxyXG4gICAgLy8gICAgICAgICBNb2RlOiBcIm5vLWNvcnNcIixcclxuICAgIC8vICAgICAgIH0sXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICApXHJcbiAgICAvLyAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgLy8gICAgICAgdHJ5IHtcclxuICAgIC8vICAgICAgICAgaWYgKHJlcy5vaykgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAvLyAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS53YXJuKGUpO1xyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIC8vICAgICAgIHNldENlbGxEYXRhKGRhdGEucmVzdWx0KTtcclxuICAgIC8vICAgICB9KTtcclxuICB9LCBbcmVzdWx0XSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtNCBweS0yXCI+XHJcbiAgICAgICAge2NlbGxEYXRhID8gY2VsbERhdGFbMF1bT2JqZWN0LmtleXMoY2VsbERhdGFbMF0pWzBdXSA6IFwiXCJ9XHJcbiAgICAgIDwvdGQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUm93ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtkYXRhLm1hcCgoZGF0YSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8dHIga2V5PXtpfSBpZD17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtNCBweS0yXCI+XHJcbiAgICAgICAgICAgICAge2RhdGEuaWQucmVwbGFjZSgvLihcXGRbeF0pLywgXCJcIil9XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtNCBweS0yXCI+e2RhdGEudGlja2V0X25vfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtNCBweS0yXCI+e2RhdGEudGlja2V0X3RpdGxlfTwvdGQ+XHJcbiAgICAgICAgICAgIDxDZWxsIGlkPXtkYXRhLnBhcmVudF9pZH0gLz5cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBweC00IHB5LTJcIj57ZGF0YS50aWNrZXRwcmlvcml0aWVzfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtNCBweS0yXCI+e2RhdGEudGlja2V0c3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgIDxDZWxsIGlkPXtkYXRhLmFzc2lnbmVkX3VzZXJfaWR9IC8+XHJcbiAgICAgICAgICAgIDxDZWxsIGlkPXtkYXRhLm1vZGlmaWVkYnl9IC8+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNsYXNzIHRpY2tldHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgbGlzdDogW10sXHJcbiAgfTtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBGZXRjaERhdGEoXCJHRVRcIiwgdGhpcy5wcm9wcy5zZXR0aW5ncy51cmwsIHtcclxuICAgICAgb3BlcmF0aW9uOiBcInF1ZXJ5XCIsXHJcbiAgICAgIHNlc3Npb25OYW1lOiB0aGlzLnByb3BzLmNyZWRlbnRpYWxzLnNlc3Npb25OYW1lLFxyXG4gICAgICBxdWVyeTogYFNFTEVDVCBpZCwgdGlja2V0X25vLCB0aWNrZXRfdGl0bGUsIHBhcmVudF9pZCwgdGlja2V0cHJpb3JpdGllcywgdGlja2V0c3RhdHVzLGFzc2lnbmVkX3VzZXJfaWQsIG1vZGlmaWVkYnkgIEZST00gSGVscERlc2s7YCxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbGlzdDogcmVzLnJlc3VsdCB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TWFpbkxheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBzaGFkb3cgcm91bmRlZCBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgPGgxPlRpY2tldHM8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5JRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPk51bWJlcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPlRpdGxlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+T3JnYW5pemF0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+UHJpb3JpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5TdGF0dXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5Bc3NpZ25lZCBUbzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPk1vZGlmaWVkIEJ5PC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxpc3QgJiYgPFJvdyBkYXRhPXt0aGlzLnN0YXRlLmxpc3R9IC8+fVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93IHJvdW5kZWQgcC00IG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgxPkFkZCBuZXcgcmVjb3JkPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01haW5MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNldHRpbmdzOiBzdGF0ZS5zZXR0aW5ncyxcclxuICAgIGNyZWRlbnRpYWxzOiBzdGF0ZS5jcmVkZW50aWFscyxcclxuICAgIHVzZXJJbmZvOiBzdGF0ZS51c2VySW5mbyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKHRpY2tldHMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9