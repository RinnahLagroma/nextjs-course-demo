webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\n\nvar _jsxFileName = \"/Users/rinnahlagroma/TRAINING/NEXTJS/06-onwards-to-a-bigger-project-starting-project/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar DUMMY_MEETUPS = [{\n  id: 'm1',\n  title: 'First Meetup',\n  image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',\n  address: 'Some Address 12345',\n  description: 'This is the first meetup'\n}, {\n  id: 'm2',\n  title: 'Second Meetup',\n  image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',\n  address: 'Some Address 12345',\n  description: 'This is the Second meetup'\n}, {\n  id: 'm3',\n  title: 'Third Meetup',\n  image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',\n  address: 'Some Address 12345',\n  description: 'This is the Third meetup'\n}];\n\nvar HomePage = function HomePage() {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      meetups: DUMMY_MEETUPS\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_s(HomePage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJEVU1NWV9NRUVUVVBTIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiSG9tZVBhZ2UiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHLENBQ2xCO0FBQ0lDLElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBRSxjQUZYO0FBR0lDLE9BQUssRUFBRSxxSkFIWDtBQUlJQyxTQUFPLEVBQUUsb0JBSmI7QUFLSUMsYUFBVyxFQUFFO0FBTGpCLENBRGtCLEVBUWxCO0FBQ0lKLElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBRSxlQUZYO0FBR0lDLE9BQUssRUFBRSxxSkFIWDtBQUlJQyxTQUFPLEVBQUUsb0JBSmI7QUFLSUMsYUFBVyxFQUFFO0FBTGpCLENBUmtCLEVBZWxCO0FBQ0lKLElBQUUsRUFBRSxJQURSO0FBRUlDLE9BQUssRUFBRSxjQUZYO0FBR0lDLE9BQUssRUFBRSxxSkFIWDtBQUlJQyxTQUFPLEVBQUUsb0JBSmI7QUFLSUMsYUFBVyxFQUFFO0FBTGpCLENBZmtCLENBQXRCOztBQXdCQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ25CQyx5REFBUztBQUNYLHNCQUNFO0FBQUEsMkJBQ0EscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVQO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxtQkFERjtBQUtELENBUEQ7O0dBQU1NLFE7O0tBQUFBLFE7QUFTU0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCc7XG5cbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXG4gICAge1xuICAgICAgICBpZDogJ20xJyxcbiAgICAgICAgdGl0bGU6ICdGaXJzdCBNZWV0dXAnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc1OTM2MTIzNDUyLWI2N2MzMjAzYzM1Nz9peGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1ueDhhVzFoWjJWOFpXNThNSHg4TUh4OGZEQSUzRCZ3PTEwMDAmcT04MCcsXG4gICAgICAgIGFkZHJlc3M6ICdTb21lIEFkZHJlc3MgMTIzNDUnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgdGhlIGZpcnN0IG1lZXR1cCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdtMicsXG4gICAgICAgIHRpdGxlOiAnU2Vjb25kIE1lZXR1cCcsXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NzU5MzYxMjM0NTItYjY3YzMyMDNjMzU3P2l4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4elpXRnlZMmg4TW54OGFXMWhaMlY4Wlc1OE1IeDhNSHg4ZkRBJTNEJnc9MTAwMCZxPTgwJyxcbiAgICAgICAgYWRkcmVzczogJ1NvbWUgQWRkcmVzcyAxMjM0NScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyB0aGUgU2Vjb25kIG1lZXR1cCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdtMycsXG4gICAgICAgIHRpdGxlOiAnVGhpcmQgTWVldHVwJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU3NTkzNjEyMzQ1Mi1iNjdjMzIwM2MzNTc/aXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh6WldGeVkyaDhNbng4YVcxaFoyVjhaVzU4TUh4OE1IeDhmREElM0Qmdz0xMDAwJnE9ODAnLFxuICAgICAgICBhZGRyZXNzOiAnU29tZSBBZGRyZXNzIDEyMzQ1JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIHRoZSBUaGlyZCBtZWV0dXAnXG4gICAgfVxuXVxuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgICB1c2VFZmZlY3QoKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPE1lZXR1cExpc3QgbWVldHVwcz17RFVNTVlfTUVFVFVQU30gLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})