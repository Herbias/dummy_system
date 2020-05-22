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
    });
  }, [result]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("td", {
    className: "border px-4 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
        lineNumber: 53,
        columnNumber: 11
      }
    }, __jsx("td", {
      className: "border px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, data.id.replace(/.(\d[x])/, "")), __jsx("td", {
      className: "border px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, data.ticket_no), __jsx("td", {
      className: "border px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, data.ticket_title), __jsx(Cell, {
      id: data.parent_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }), __jsx("td", {
      className: "border px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, data.ticketpriorities), __jsx("td", {
      className: "border px-4 py-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }, data.ticketstatus), __jsx(Cell, {
      id: data.assigned_user_id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }), __jsx(Cell, {
      id: data.modifiedby,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
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
          lineNumber: 87,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "p-4 shadow rounded bg-white",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 9
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }
      }, "Tickets"), __jsx("div", {
        className: "flex",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }
      }, __jsx("table", {
        className: "table-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 15
        }
      }, __jsx("thead", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 19
        }
      }, __jsx("th", {
        className: "px-4 py-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }
      }, "ID"), __jsx("th", {
        className: "px-4 py-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }
      }, "Number"), __jsx("th", {
        className: "px-4 py-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }
      }, "Title"), __jsx("th", {
        className: "px-4 py-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }
      }, "Organization"), __jsx("th", {
        className: "px-4 py-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }
      }, "Priority"), __jsx("th", {
        className: "px-4 py-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }
      }, "Status"), __jsx("th", {
        className: "px-4 py-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }
      }, "Assigned To"), __jsx("th", {
        className: "px-4 py-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }
      }, "Modified By"))), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 17
        }
      }, this.state.list && __jsx(Row, {
        data: this.state.list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 39
        }
      })))), __jsx("div", {
        className: "shadow rounded p-4 ml-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 15
        }
      }, "Add new record")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90aWNrZXRzLmpzIl0sIm5hbWVzIjpbIkdldFF1ZXJ5RGF0YSIsImlkIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImNvbHVtbiIsIm5hbWUiLCJDZWxsIiwiY3JlZGVudGlhbHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2V0dGluZ3MiLCJxdWVyeURhdGEiLCJyZXBsYWNlIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiY2VsbERhdGEiLCJzZXRDZWxsRGF0YSIsIkZldGNoRGF0YSIsInVybCIsIm9wZXJhdGlvbiIsInNlc3Npb25OYW1lIiwicXVlcnkiLCJ0aGVuIiwicmVzIiwiT2JqZWN0Iiwia2V5cyIsIlJvdyIsIm1hcCIsImkiLCJ0aWNrZXRfbm8iLCJ0aWNrZXRfdGl0bGUiLCJwYXJlbnRfaWQiLCJ0aWNrZXRwcmlvcml0aWVzIiwidGlja2V0c3RhdHVzIiwiYXNzaWduZWRfdXNlcl9pZCIsIm1vZGlmaWVkYnkiLCJ0aWNrZXRzIiwibGlzdCIsInByb3BzIiwic2V0U3RhdGUiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VySW5mbyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEVBQUQsRUFBUTtBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLEVBQUQsQ0FETDtBQUFBLE1BQ3BCQyxJQURvQjtBQUFBLE1BQ2RDLE9BRGM7O0FBRTNCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJSixFQUFFLElBQUksRUFBVixFQUFjRyxPQUFPLENBQUM7QUFBRUUsWUFBTSxFQUFFLGFBQVY7QUFBeUJDLFVBQUksRUFBRTtBQUEvQixLQUFELENBQVA7QUFDZCxRQUFJTixFQUFFLElBQUksRUFB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TkYsRUFPRTtBQUFJLGlCQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBGLEVBUUU7QUFBSSxpQkFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFSRixDQURGLENBREYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0csS0FBS0osS0FBTCxDQUFXNEIsSUFBWCxJQUFtQixNQUFDLEdBQUQ7QUFBSyxZQUFJLEVBQUUsS0FBSzVCLEtBQUwsQ0FBVzRCLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEdEIsQ0FiRixDQURGLENBREYsRUFvQkU7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLENBcEJGLENBRkYsQ0FERixDQURGO0FBK0JEOzs7O0VBOUNtQkcsK0M7O0FBaUR0QixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNoQyxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMQyxZQUFRLEVBQUVELEtBQUssQ0FBQ0MsUUFEWDtBQUVMSCxlQUFXLEVBQUVFLEtBQUssQ0FBQ0YsV0FGZDtBQUdMbUMsWUFBUSxFQUFFakMsS0FBSyxDQUFDaUM7QUFIWCxHQUFQO0FBS0QsQ0FORDs7QUFRZUMsMEhBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCTCxPQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx0aWNrZXRzLmpzLmFmN2IwOTNkNmQ5YzA2OTcwN2VkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vTGF5b3V0cy9NYWluTGF5b3V0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGZXRjaERhdGEgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEdldFF1ZXJ5RGF0YSA9IChpZCkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlkID09IDExKSBzZXREYXRhKHsgY29sdW1uOiBcImFjY291bnRuYW1lXCIsIG5hbWU6IFwiQWNjb3VudHNcIiB9KTtcclxuICAgIGlmIChpZCA9PSAxOSkgc2V0RGF0YSh7IGNvbHVtbjogXCJ1c2VyX25hbWVcIiwgbmFtZTogXCJVc2Vyc1wiIH0pO1xyXG4gICAgaWYgKGlkID09IDIwKSBzZXREYXRhKHsgY29sdW1uOiBcImdyb3VwbmFtZVwiLCBuYW1lOiBcIkdyb3Vwc1wiIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmNvbnN0IENlbGwgPSAoeyBpZCB9KSA9PiB7XHJcbiAgbGV0IGNyZWRlbnRpYWxzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jcmVkZW50aWFscyk7XHJcbiAgbGV0IHNldHRpbmdzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zZXR0aW5ncyk7XHJcbiAgbGV0IHF1ZXJ5RGF0YSA9IEdldFF1ZXJ5RGF0YShpZC5yZXBsYWNlKC8oW3hdXFxkKS4qLywgXCJcIikpO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2VsbERhdGEsIHNldENlbGxEYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UmVzdWx0KFxyXG4gICAgICBgU0VMRUNUICR7cXVlcnlEYXRhLmNvbHVtbn0gRlJPTSAke3F1ZXJ5RGF0YS5uYW1lfSBXSEVSRSBpZCA9ICR7aWR9O2BcclxuICAgICk7XHJcbiAgfSwgW3F1ZXJ5RGF0YV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgRmV0Y2hEYXRhKFwiR0VUXCIsIHNldHRpbmdzLnVybCwge1xyXG4gICAgICBvcGVyYXRpb246IFwicXVlcnlcIixcclxuICAgICAgc2Vzc2lvbk5hbWU6IGNyZWRlbnRpYWxzLnNlc3Npb25OYW1lLFxyXG4gICAgICBxdWVyeTogcmVzdWx0LFxyXG4gICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldENlbGxEYXRhKHJlcy5yZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgfSwgW3Jlc3VsdF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHB4LTQgcHktMlwiPlxyXG4gICAgICAgIHtjZWxsRGF0YSA/IGNlbGxEYXRhWzBdW09iamVjdC5rZXlzKGNlbGxEYXRhWzBdKVswXV0gOiBcIlwifVxyXG4gICAgICA8L3RkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFJvdyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7ZGF0YS5tYXAoKGRhdGEsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHRyIGtleT17aX0gaWQ9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHB4LTQgcHktMlwiPlxyXG4gICAgICAgICAgICAgIHtkYXRhLmlkLnJlcGxhY2UoLy4oXFxkW3hdKS8sIFwiXCIpfVxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHB4LTQgcHktMlwiPntkYXRhLnRpY2tldF9ub308L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHB4LTQgcHktMlwiPntkYXRhLnRpY2tldF90aXRsZX08L3RkPlxyXG4gICAgICAgICAgICA8Q2VsbCBpZD17ZGF0YS5wYXJlbnRfaWR9IC8+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtNCBweS0yXCI+e2RhdGEudGlja2V0cHJpb3JpdGllc308L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHB4LTQgcHktMlwiPntkYXRhLnRpY2tldHN0YXR1c308L3RkPlxyXG4gICAgICAgICAgICA8Q2VsbCBpZD17ZGF0YS5hc3NpZ25lZF91c2VyX2lkfSAvPlxyXG4gICAgICAgICAgICA8Q2VsbCBpZD17ZGF0YS5tb2RpZmllZGJ5fSAvPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jbGFzcyB0aWNrZXRzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGxpc3Q6IFtdLFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgRmV0Y2hEYXRhKFwiR0VUXCIsIHRoaXMucHJvcHMuc2V0dGluZ3MudXJsLCB7XHJcbiAgICAgIG9wZXJhdGlvbjogXCJxdWVyeVwiLFxyXG4gICAgICBzZXNzaW9uTmFtZTogdGhpcy5wcm9wcy5jcmVkZW50aWFscy5zZXNzaW9uTmFtZSxcclxuICAgICAgcXVlcnk6IGBTRUxFQ1QgaWQsIHRpY2tldF9ubywgdGlja2V0X3RpdGxlLCBwYXJlbnRfaWQsIHRpY2tldHByaW9yaXRpZXMsIHRpY2tldHN0YXR1cyxhc3NpZ25lZF91c2VyX2lkLCBtb2RpZmllZGJ5ICBGUk9NIEhlbHBEZXNrO2AsXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpc3Q6IHJlcy5yZXN1bHQgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1haW5MYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgc2hhZG93IHJvdW5kZWQgYmctd2hpdGVcIj5cclxuICAgICAgICAgIDxoMT5UaWNrZXRzPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+SUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5OdW1iZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5UaXRsZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPk9yZ2FuaXphdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPlByaW9yaXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+QXNzaWduZWQgVG88L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5Nb2RpZmllZCBCeTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5saXN0ICYmIDxSb3cgZGF0YT17dGhpcy5zdGF0ZS5saXN0fSAvPn1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93IHJvdW5kZWQgcC00IG1sLTJcIj5cclxuICAgICAgICAgICAgICA8aDE+QWRkIG5ldyByZWNvcmQ8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L01haW5MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNldHRpbmdzOiBzdGF0ZS5zZXR0aW5ncyxcclxuICAgIGNyZWRlbnRpYWxzOiBzdGF0ZS5jcmVkZW50aWFscyxcclxuICAgIHVzZXJJbmZvOiBzdGF0ZS51c2VySW5mbyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKHRpY2tldHMpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9