webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\n\nvar _jsxFileName = \"/Users/rinnahlagroma/TRAINING/NEXTJS/06-onwards-to-a-bigger-project-starting-project/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar DUMMY_MEETUPS = [{\n  id: 'm1',\n  title: 'First Meetup',\n  image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',\n  address: 'Some Address 12345',\n  description: 'This is the first meetup'\n}, {\n  id: 'm2',\n  title: 'Second Meetup',\n  image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',\n  address: 'Some Address 12345',\n  description: 'This is the Second meetup'\n}, {\n  id: 'm3',\n  title: 'Third Meetup',\n  image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',\n  address: 'Some Address 12345',\n  description: 'This is the Third meetup'\n}];\n\nvar HomePage = function HomePage(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      loadedMeetups = _useState[0],\n      setLoadedMeetups = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setLoadedMeetups(DUMMY_MEETUPS);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      meetups: loadedMeetups\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_s(HomePage, \"lt95aOlOC9RW+nrRzHOiZRPQygU=\");\n\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJEVU1NWV9NRUVUVVBTIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwibG9hZGVkTWVldHVwcyIsInNldExvYWRlZE1lZXR1cHMiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNsQjtBQUNJQyxJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsY0FGWDtBQUdJQyxPQUFLLEVBQUUscUpBSFg7QUFJSUMsU0FBTyxFQUFFLG9CQUpiO0FBS0lDLGFBQVcsRUFBRTtBQUxqQixDQURrQixFQVFsQjtBQUNJSixJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsZUFGWDtBQUdJQyxPQUFLLEVBQUUscUpBSFg7QUFJSUMsU0FBTyxFQUFFLG9CQUpiO0FBS0lDLGFBQVcsRUFBRTtBQUxqQixDQVJrQixFQWVsQjtBQUNJSixJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsY0FGWDtBQUdJQyxPQUFLLEVBQUUscUpBSFg7QUFJSUMsU0FBTyxFQUFFLG9CQUpiO0FBS0lDLGFBQVcsRUFBRTtBQUxqQixDQWZrQixDQUF0Qjs7QUF3QkEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ2tCQyxzREFBUSxDQUFDLEVBQUQsQ0FEMUI7QUFBQSxNQUNqQkMsYUFEaUI7QUFBQSxNQUNGQyxnQkFERTs7QUFHeEJDLHlEQUFTLENBQUMsWUFBTTtBQUNaRCxvQkFBZ0IsQ0FBQ1YsYUFBRCxDQUFoQjtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHRixzQkFDRTtBQUFBLDJCQUNBLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFUztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsbUJBREY7QUFLRCxDQVhEOztHQUFNSCxROztLQUFBQSxROztBQXFCU0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnO1xuXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xuICAgIHtcbiAgICAgICAgaWQ6ICdtMScsXG4gICAgICAgIHRpdGxlOiAnRmlyc3QgTWVldHVwJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU3NTkzNjEyMzQ1Mi1iNjdjMzIwM2MzNTc/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh6WldGeVkyaDhNbng4YVcxaFoyVjhaVzU4TUh4OE1IeDhmREElM0Qmdz0xMDAwJnE9ODAnLFxuICAgICAgICBhZGRyZXNzOiAnU29tZSBBZGRyZXNzIDEyMzQ1JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIHRoZSBmaXJzdCBtZWV0dXAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnbTInLFxuICAgICAgICB0aXRsZTogJ1NlY29uZCBNZWV0dXAnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc1OTM2MTIzNDUyLWI2N2MzMjAzYzM1Nz9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1ueDhhVzFoWjJWOFpXNThNSHg4TUh4OGZEQSUzRCZ3PTEwMDAmcT04MCcsXG4gICAgICAgIGFkZHJlc3M6ICdTb21lIEFkZHJlc3MgMTIzNDUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgdGhlIFNlY29uZCBtZWV0dXAnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnbTMnLFxuICAgICAgICB0aXRsZTogJ1RoaXJkIE1lZXR1cCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NzU5MzYxMjM0NTItYjY3YzMyMDNjMzU3P2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4elpXRnlZMmg4TW54OGFXMWhaMlY4Wlc1OE1IeDhNSHg4ZkRBJTNEJnc9MTAwMCZxPTgwJyxcbiAgICAgICAgYWRkcmVzczogJ1NvbWUgQWRkcmVzcyAxMjM0NScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyB0aGUgVGhpcmQgbWVldHVwJ1xuICAgIH1cbl1cblxuY29uc3QgSG9tZVBhZ2UgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbbG9hZGVkTWVldHVwcywgc2V0TG9hZGVkTWVldHVwc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkZWRNZWV0dXBzKERVTU1ZX01FRVRVUFMpXG4gICAgfSwgW10pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtsb2FkZWRNZWV0dXBzfSAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQU1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})