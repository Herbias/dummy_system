webpackHotUpdate("static\\development\\pages\\tickets.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

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
  var credentials = useSelector(function (state) {
    return state.credentials;
  });
  var settings = useSelector(function (state) {
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
      console.log(res);
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

_s2(Cell, "gWEE/AhEr3lRHONaodJFVsn7CNk=", true);

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
    }, data.ticket_title), __jsx("td", {
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
    }, data.ticketstatus));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy90aWNrZXRzLmpzIl0sIm5hbWVzIjpbIkdldFF1ZXJ5RGF0YSIsImlkIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImNvbHVtbiIsIm5hbWUiLCJDZWxsIiwiY3JlZGVudGlhbHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2V0dGluZ3MiLCJxdWVyeURhdGEiLCJyZXBsYWNlIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiY2VsbERhdGEiLCJzZXRDZWxsRGF0YSIsIkZldGNoRGF0YSIsInVybCIsIm9wZXJhdGlvbiIsInNlc3Npb25OYW1lIiwicXVlcnkiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJSb3ciLCJtYXAiLCJpIiwidGlja2V0X25vIiwidGlja2V0X3RpdGxlIiwidGlja2V0cHJpb3JpdGllcyIsInRpY2tldHN0YXR1cyIsInRpY2tldHMiLCJsaXN0IiwicHJvcHMiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInVzZXJJbmZvIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsRUFBRCxFQUFRO0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsRUFBRCxDQURMO0FBQUEsTUFDcEJDLElBRG9CO0FBQUEsTUFDZEMsT0FEYzs7QUFFM0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlKLEVBQUUsSUFBSSxFQUFWLEVBQWNHLE9BQU8sQ0FBQztBQUFFRSxZQUFNLEVBQUUsYUFBVjtBQUF5QkMsVUFBSSxFQUFFO0FBQS9CLEtBQUQsQ0FBUDtBQUNkLFFBQUlOLEVBQUUsSUFBSSxFQUFWLEVBQWNHLE9B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QUFBQTtBQUFBLFNBQ0csS0FBS0osS0FBTCxDQUFXMkIsSUFBWCxJQUFtQixNQUFDLEdBQUQ7QUFBSyxZQUFJLEVBQUUsS0FBSzNCLEtBQUwsQ0FBVzJCLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEdEIsQ0FiRixDQURGLENBREYsQ0FGRixDQURGLENBREY7QUErQkQ7Ozs7RUE5Q21CRywrQzs7QUFpRHRCLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQy9CLEtBQUQsRUFBVztBQUNqQyxTQUFPO0FBQ0xDLFlBQVEsRUFBRUQsS0FBSyxDQUFDQyxRQURYO0FBRUxILGVBQVcsRUFBRUUsS0FBSyxDQUFDRixXQUZkO0FBR0xrQyxZQUFRLEVBQUVoQyxLQUFLLENBQUNnQztBQUhYLEdBQVA7QUFLRCxDQU5EOztBQVFlQywwSEFBTyxDQUFDRixlQUFELENBQVAsQ0FBeUJMLE9BQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHRpY2tldHMuanMuMGQ5YWM5Y2U0MzUxOWU5MGNlOGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluTGF5b3V0IGZyb20gXCIuLi9MYXlvdXRzL01haW5MYXlvdXRcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmV0Y2hEYXRhIH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBHZXRRdWVyeURhdGEgPSAoaWQpID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpZCA9PSAxMSkgc2V0RGF0YSh7IGNvbHVtbjogXCJhY2NvdW50bmFtZVwiLCBuYW1lOiBcIkFjY291bnRzXCIgfSk7XHJcbiAgICBpZiAoaWQgPT0gMTkpIHNldERhdGEoeyBjb2x1bW46IFwidXNlcl9uYW1lXCIsIG5hbWU6IFwiVXNlcnNcIiB9KTtcclxuICAgIGlmIChpZCA9PSAyMCkgc2V0RGF0YSh7IGNvbHVtbjogXCJncm91cG5hbWVcIiwgbmFtZTogXCJHcm91cHNcIiB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5jb25zdCBDZWxsID0gKHsgaWQgfSkgPT4ge1xyXG4gIGxldCBjcmVkZW50aWFscyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY3JlZGVudGlhbHMpO1xyXG4gIGxldCBzZXR0aW5ncyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2V0dGluZ3MpO1xyXG4gIGxldCBxdWVyeURhdGEgPSBHZXRRdWVyeURhdGEoaWQucmVwbGFjZSgvKFt4XVxcZCkuKi8sIFwiXCIpKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NlbGxEYXRhLCBzZXRDZWxsRGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFJlc3VsdChcclxuICAgICAgYFNFTEVDVCAke3F1ZXJ5RGF0YS5jb2x1bW59IEZST00gJHtxdWVyeURhdGEubmFtZX0gV0hFUkUgaWQgPSAke2lkfTtgXHJcbiAgICApO1xyXG4gIH0sIFtxdWVyeURhdGFdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIEZldGNoRGF0YShcIkdFVFwiLCBzZXR0aW5ncy51cmwsIHtcclxuICAgICAgb3BlcmF0aW9uOiBcInF1ZXJ5XCIsXHJcbiAgICAgIHNlc3Npb25OYW1lOiBjcmVkZW50aWFscy5zZXNzaW9uTmFtZSxcclxuICAgICAgcXVlcnk6IHJlc3VsdCxcclxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgfSk7XHJcbiAgICAvLyAgIGZldGNoKFxyXG4gICAgLy8gICAgIHNldHRpbmdzLnVybCArXHJcbiAgICAvLyAgICAgICBgL3dlYnNlcnZpY2UucGhwPyR7ZW5jb2RlRm9ybURhdGEoe1xyXG4gICAgLy8gICAgICAgICBvcGVyYXRpb246IFwicXVlcnlcIixcclxuICAgIC8vICAgICAgICAgc2Vzc2lvbk5hbWU6IGNyZWRlbnRpYWxzLnNlc3Npb25OYW1lLFxyXG4gICAgLy8gICAgICAgICBxdWVyeTogcmVzdWx0LFxyXG4gICAgLy8gICAgICAgfSl9YCxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICBoZWFkZXI6IHtcclxuICAgIC8vICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgIC8vICAgICAgICAgTW9kZTogXCJuby1jb3JzXCIsXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgKVxyXG4gICAgLy8gICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgIC8vICAgICAgIHRyeSB7XHJcbiAgICAvLyAgICAgICAgIGlmIChyZXMub2spIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgLy8gICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUud2FybihlKTtcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAvLyAgICAgICBzZXRDZWxsRGF0YShkYXRhLnJlc3VsdCk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgfSwgW3Jlc3VsdF0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHB4LTQgcHktMlwiPlxyXG4gICAgICAgIHtjZWxsRGF0YSA/IGNlbGxEYXRhWzBdW09iamVjdC5rZXlzKGNlbGxEYXRhWzBdKVswXV0gOiBcIlwifVxyXG4gICAgICA8L3RkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFJvdyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7ZGF0YS5tYXAoKGRhdGEsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHRyIGtleT17aX0gaWQ9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHB4LTQgcHktMlwiPlxyXG4gICAgICAgICAgICAgIHtkYXRhLmlkLnJlcGxhY2UoLy4oXFxkW3hdKS8sIFwiXCIpfVxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHB4LTQgcHktMlwiPntkYXRhLnRpY2tldF9ub308L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHB4LTQgcHktMlwiPntkYXRhLnRpY2tldF90aXRsZX08L3RkPlxyXG4gICAgICAgICAgICB7LyogPENlbGwgaWQ9e2RhdGEucGFyZW50X2lkfSAvPiAqL31cclxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlciBweC00IHB5LTJcIj57ZGF0YS50aWNrZXRwcmlvcml0aWVzfTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtNCBweS0yXCI+e2RhdGEudGlja2V0c3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgIHsvKiA8Q2VsbCBpZD17ZGF0YS5hc3NpZ25lZF91c2VyX2lkfSAvPiAqL31cclxuICAgICAgICAgICAgey8qIDxDZWxsIGlkPXtkYXRhLm1vZGlmaWVkYnl9IC8+ICovfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jbGFzcyB0aWNrZXRzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGxpc3Q6IFtdLFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgRmV0Y2hEYXRhKFwiR0VUXCIsIHRoaXMucHJvcHMuc2V0dGluZ3MudXJsLCB7XHJcbiAgICAgIG9wZXJhdGlvbjogXCJxdWVyeVwiLFxyXG4gICAgICBzZXNzaW9uTmFtZTogdGhpcy5wcm9wcy5jcmVkZW50aWFscy5zZXNzaW9uTmFtZSxcclxuICAgICAgcXVlcnk6IGBTRUxFQ1QgaWQsIHRpY2tldF9ubywgdGlja2V0X3RpdGxlLCBwYXJlbnRfaWQsIHRpY2tldHByaW9yaXRpZXMsIHRpY2tldHN0YXR1cyxhc3NpZ25lZF91c2VyX2lkLCBtb2RpZmllZGJ5ICBGUk9NIEhlbHBEZXNrO2AsXHJcbiAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxpc3Q6IHJlcy5yZXN1bHQgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1haW5MYXlvdXQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgc2hhZG93IHJvdW5kZWQgYmctd2hpdGVcIj5cclxuICAgICAgICAgIDxoMT5UaWNrZXRzPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+SUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5OdW1iZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5UaXRsZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPk9yZ2FuaXphdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMlwiPlByaW9yaXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yXCI+QXNzaWduZWQgVG88L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTJcIj5Nb2RpZmllZCBCeTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5saXN0ICYmIDxSb3cgZGF0YT17dGhpcy5zdGF0ZS5saXN0fSAvPn1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdyByb3VuZGVkIHAtNCBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT5BZGQgbmV3IHJlY29yZDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBzZXR0aW5nczogc3RhdGUuc2V0dGluZ3MsXHJcbiAgICBjcmVkZW50aWFsczogc3RhdGUuY3JlZGVudGlhbHMsXHJcbiAgICB1c2VySW5mbzogc3RhdGUudXNlckluZm8sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKSh0aWNrZXRzKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==