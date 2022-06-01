"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": function() { return /* binding */ theme; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals */ \"./src/styles/globals.js\");\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        font-size: 3rem;\\n        font-weight: 700;\\n        line-height: 3.25rem;\\n        letter-spacing: -0.075rem;\\n\\n        @media(max-width: 760px) {\\n          font-size: 2.5rem;\\n          line-height: 44px;\\n        }\\n      \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        font-size: 2.5rem;\\n        font-weight: 700;\\n        line-height: 2.75rem;\\n        letter-spacing: -0.063rem;\\n\\n        @media(max-width: 760px) {\\n          font-size: 2rem;\\n          line-height: 2.25rem;\\n        }\\n      \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        font-size: 2rem;\\n        font-weight: 700;\\n        line-height: 2.25rem;\\n        letter-spacing: -0.05rem;\\n\\n        @media(max-width: 760px) {\\n          font-size: 1.5rem;\\n          line-height: 1.75rem;\\n        }\\n      \"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        font-size: 1.5rem;\\n        font-weight: 700;\\n        line-height: 1.75rem;\\n        letter-spacing: -0.038rem;\\n\\n        @media(max-width: 760px) {\\n          font-size: 1.25rem;\\n          line-height: 1.5rem;\\n        }\\n      \"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        font-size: 1.5rem;\\n        font-weight: 700;\\n        line-height: 1.5rem;\\n\\n        @media(max-width: 760px) {\\n          font-size: 1.125rem;\\n          line-height: 1.375rem;\\n        }\\n      \"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        font-size: 1rem;\\n        font-weight: 700;\\n        line-height: 1.25rem;\\n      \"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        font-size: 1rem;\\n        font-weight: 400;\\n        line-height: 1.5rem;\\n    \"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nvar theme = {\n    TextColors: {\n        // Monochrome\n        darkHigh: 'rgba(0,0,0,0.80)',\n        darkLow: 'rgba(0,0,0,0.44)',\n        darkMedium: 'rgba(0,0,0,0.60)',\n        lightHigh: 'rgba(255,255,255,0.80)',\n        lightSolid: '#FFF',\n        // acent color\n        magenta: '#E63888'\n    },\n    typography: {\n        typeface: {\n            primary: 'Roboto'\n        },\n        weight: {\n            bold: 700,\n            regular: 400\n        },\n        sizes: {\n            display: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject()),\n            headingL: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject1()),\n            headingM: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject2()),\n            headingS: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject3()),\n            headingXS: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject4()),\n            subHeading: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject5()),\n            bodyM: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject6())\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QztBQUNTOzs7Ozs7Ozs7Ozs7O1FBd0I3QixDQVViOzs7Ozs7Ozs7UUFDYyxDQVVkOzs7Ozs7Ozs7UUFDYyxDQVVkOzs7Ozs7Ozs7UUFDYyxDQVVkOzs7Ozs7Ozs7UUFDZSxDQVNmOzs7Ozs7Ozs7UUFDZ0IsQ0FJaEI7Ozs7Ozs7OztRQUNXLENBSWI7Ozs7Ozs7QUFyRkcsR0FBSyxDQUFDRSxLQUFLLEdBQUcsQ0FBQztJQUNwQkMsVUFBVSxFQUFFLENBQUM7UUFDWCxFQUFhO1FBQ2JDLFFBQVEsRUFBRSxDQUFrQjtRQUM1QkMsT0FBTyxFQUFFLENBQWtCO1FBQzNCQyxVQUFVLEVBQUUsQ0FBa0I7UUFDOUJDLFNBQVMsRUFBRSxDQUF3QjtRQUNuQ0MsVUFBVSxFQUFFLENBQU07UUFFbEIsRUFBYztRQUNkQyxPQUFPLEVBQUUsQ0FBUztJQUNwQixDQUFDO0lBRURDLFVBQVUsRUFBRSxDQUFDO1FBQ1hDLFFBQVEsRUFBRSxDQUFDO1lBQ1RDLE9BQU8sRUFBRSxDQUFRO1FBQ25CLENBQUM7UUFDREMsTUFBTSxFQUFFLENBQUM7WUFDUEMsSUFBSSxFQUFFLEdBQUc7WUFDVEMsT0FBTyxFQUFFLEdBQUc7UUFDZCxDQUFDO1FBQ0RDLEtBQUssRUFBRSxDQUFDO1lBQ05DLE9BQU8sRUFBRWpCLHNEQUFHO1lBV1prQixRQUFRLEVBQUVsQixzREFBRztZQVdibUIsUUFBUSxFQUFFbkIsc0RBQUc7WUFXYm9CLFFBQVEsRUFBRXBCLHNEQUFHO1lBV2JxQixTQUFTLEVBQUVyQixzREFBRztZQVVkc0IsVUFBVSxFQUFFdEIsc0RBQUc7WUFLZnVCLEtBQUssRUFBRXZCLHNEQUFHO1FBS1osQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvdGhlbWUuanM/MTlmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBHbG9iYWxTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvZ2xvYmFscyc7XG5cbmV4cG9ydCBjb25zdCB0aGVtZSA9IHtcbiAgVGV4dENvbG9yczoge1xuICAgIC8vIE1vbm9jaHJvbWVcbiAgICBkYXJrSGlnaDogJ3JnYmEoMCwwLDAsMC44MCknLFxuICAgIGRhcmtMb3c6ICdyZ2JhKDAsMCwwLDAuNDQpJyxcbiAgICBkYXJrTWVkaXVtOiAncmdiYSgwLDAsMCwwLjYwKScsXG4gICAgbGlnaHRIaWdoOiAncmdiYSgyNTUsMjU1LDI1NSwwLjgwKScsXG4gICAgbGlnaHRTb2xpZDogJyNGRkYnLFxuICBcbiAgICAvLyBhY2VudCBjb2xvclxuICAgIG1hZ2VudGE6ICcjRTYzODg4JywgXG4gIH0sXG4gIFxuICB0eXBvZ3JhcGh5OiB7XG4gICAgdHlwZWZhY2U6IHtcbiAgICAgIHByaW1hcnk6ICdSb2JvdG8nLFxuICAgIH0sXG4gICAgd2VpZ2h0OiB7XG4gICAgICBib2xkOiA3MDAsXG4gICAgICByZWd1bGFyOiA0MDAsXG4gICAgfSxcbiAgICBzaXplczoge1xuICAgICAgZGlzcGxheTogY3NzYFxuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzLjI1cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDc1cmVtO1xuXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2MHB4KSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgICBoZWFkaW5nTDogY3NzYFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuNzVyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNjNyZW07XG5cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNzYwcHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgICBoZWFkaW5nTTogY3NzYFxuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDVyZW07XG5cbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogNzYwcHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICAgIGhlYWRpbmdTOiBjc3NgXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzOHJlbTtcblxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA3NjBweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgICAgaGVhZGluZ1hTOiBjc3NgXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2MHB4KSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4zNzVyZW07XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgICBzdWJIZWFkaW5nOiBjc3NgXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgICBgLFxuICAgICAgYm9keU06IGNzc2BcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIGAsXG4gICAgfVxuICB9LFxufSJdLCJuYW1lcyI6WyJjc3MiLCJHbG9iYWxTdHlsZXMiLCJ0aGVtZSIsIlRleHRDb2xvcnMiLCJkYXJrSGlnaCIsImRhcmtMb3ciLCJkYXJrTWVkaXVtIiwibGlnaHRIaWdoIiwibGlnaHRTb2xpZCIsIm1hZ2VudGEiLCJ0eXBvZ3JhcGh5IiwidHlwZWZhY2UiLCJwcmltYXJ5Iiwid2VpZ2h0IiwiYm9sZCIsInJlZ3VsYXIiLCJzaXplcyIsImRpc3BsYXkiLCJoZWFkaW5nTCIsImhlYWRpbmdNIiwiaGVhZGluZ1MiLCJoZWFkaW5nWFMiLCJzdWJIZWFkaW5nIiwiYm9keU0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/theme.js\n");

/***/ })

});