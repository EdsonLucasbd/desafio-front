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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": function() { return /* binding */ theme; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals */ \"./src/styles/globals.js\");\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        font-size: 3rem;\\n        font-weight: 700;\\n        line-height: 52px;\\n        letter-spacing: -1.2px;\\n      \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        font-size: 2.5rem;\\n        font-weight: 700;\\n        line-height: 44px;\\n        letter-spacing: -1px;\\n      \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        font-size: 2rem;\\n        font-weight: 700;\\n        line-height: 36px;\\n        letter-spacing: -0.8px;\\n      \"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        font-size: 1.5rem;\\n        font-weight: 700;\\n        line-height: 28px;\\n        letter-spacing: -0.6px;\\n      \"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        font-size: 1.5rem;\\n        font-weight: 700;\\n        line-height: 24px;\\n      \"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        font-size: 1rem;\\n        font-weight: 700;\\n        line-height: 20px;\\n      \"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        font-size: 1rem;\\n        font-weight: 400;\\n        line-height: 24px;\\n    \"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nvar theme = {\n    TextColors: {\n        // Monochrome\n        darkHigh: 'rgba(0,0,0,0.80)',\n        darkLow: 'rgba(0,0,0,0.44)',\n        darkMedium: 'rgba(0,0,0,0.60)',\n        lightHigh: 'rgba(255,255,255,0.80)',\n        lightSolid: '#FFF',\n        // Palette\n        magenta: '#E63888'\n    },\n    typography: {\n        typeface: {\n            primary: '\"Roboto\"'\n        },\n        weight: {\n            bold: 700,\n            regular: 400\n        },\n        sizes: {\n            display: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject()),\n            headingL: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject1()),\n            headingM: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject2()),\n            headingS: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject3()),\n            headingXS: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject4()),\n            subHeading: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject5()),\n            bodyM: (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject6())\n        }\n    },\n    '@media(max-width: 760px)': {\n        display: {\n            fontSize: '2.5rem',\n            lineHeight: '44px'\n        },\n        headingL: {\n            fontSize: '2rem',\n            lineHeight: '36px'\n        },\n        headingM: {\n            fontSize: '1.5rem',\n            lineHeight: '28px'\n        },\n        headingS: {\n            fontSize: '1.25rem',\n            lineHeight: '24px'\n        },\n        headingXS: {\n            fontSize: '1.125rem',\n            lineHeight: '22px'\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QztBQUNTOzs7Ozs7Ozs7Ozs7O1FBd0I3QixDQUtiOzs7Ozs7Ozs7UUFDYyxDQUtkOzs7Ozs7Ozs7UUFDYyxDQUtkOzs7Ozs7Ozs7UUFDYyxDQUtkOzs7Ozs7Ozs7UUFDZSxDQUlmOzs7Ozs7Ozs7UUFDZ0IsQ0FJaEI7Ozs7Ozs7OztRQUNXLENBSWI7Ozs7Ozs7QUE1REcsR0FBSyxDQUFDRSxLQUFLLEdBQUcsQ0FBQztJQUNwQkMsVUFBVSxFQUFFLENBQUM7UUFDWCxFQUFhO1FBQ2JDLFFBQVEsRUFBRSxDQUFrQjtRQUM1QkMsT0FBTyxFQUFFLENBQWtCO1FBQzNCQyxVQUFVLEVBQUUsQ0FBa0I7UUFDOUJDLFNBQVMsRUFBRSxDQUF3QjtRQUNuQ0MsVUFBVSxFQUFFLENBQU07UUFFbEIsRUFBVTtRQUNWQyxPQUFPLEVBQUUsQ0FBUztJQUNwQixDQUFDO0lBRURDLFVBQVUsRUFBRSxDQUFDO1FBQ1hDLFFBQVEsRUFBRSxDQUFDO1lBQ1RDLE9BQU8sRUFBRSxDQUFVO1FBQ3JCLENBQUM7UUFDREMsTUFBTSxFQUFFLENBQUM7WUFDUEMsSUFBSSxFQUFFLEdBQUc7WUFDVEMsT0FBTyxFQUFFLEdBQUc7UUFDZCxDQUFDO1FBQ0RDLEtBQUssRUFBRSxDQUFDO1lBQ05DLE9BQU8sRUFBRWpCLHNEQUFHO1lBTVprQixRQUFRLEVBQUVsQixzREFBRztZQU1ibUIsUUFBUSxFQUFFbkIsc0RBQUc7WUFNYm9CLFFBQVEsRUFBRXBCLHNEQUFHO1lBTWJxQixTQUFTLEVBQUVyQixzREFBRztZQUtkc0IsVUFBVSxFQUFFdEIsc0RBQUc7WUFLZnVCLEtBQUssRUFBRXZCLHNEQUFHO1FBS1osQ0FBQztJQUNILENBQUM7SUFFRCxDQUEwQiwyQkFBRSxDQUFDO1FBQzNCaUIsT0FBTyxFQUFFLENBQUM7WUFDUk8sUUFBUSxFQUFFLENBQVE7WUFDbEJDLFVBQVUsRUFBRSxDQUFNO1FBQ3BCLENBQUM7UUFDRFAsUUFBUSxFQUFFLENBQUM7WUFDVE0sUUFBUSxFQUFFLENBQU07WUFDaEJDLFVBQVUsRUFBRSxDQUFNO1FBQ3BCLENBQUM7UUFDRE4sUUFBUSxFQUFFLENBQUM7WUFDVEssUUFBUSxFQUFFLENBQVE7WUFDbEJDLFVBQVUsRUFBRSxDQUFNO1FBQ3BCLENBQUM7UUFDREwsUUFBUSxFQUFFLENBQUM7WUFDVEksUUFBUSxFQUFFLENBQVM7WUFDbkJDLFVBQVUsRUFBRSxDQUFNO1FBQ3BCLENBQUM7UUFDREosU0FBUyxFQUFFLENBQUM7WUFDVkcsUUFBUSxFQUFFLENBQVU7WUFDcEJDLFVBQVUsRUFBRSxDQUFNO1FBQ3BCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL3RoZW1lLmpzPzE5ZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgR2xvYmFsU3R5bGVzIH0gZnJvbSAnLi4vc3R5bGVzL2dsb2JhbHMnO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG4gIFRleHRDb2xvcnM6IHtcbiAgICAvLyBNb25vY2hyb21lXG4gICAgZGFya0hpZ2g6ICdyZ2JhKDAsMCwwLDAuODApJyxcbiAgICBkYXJrTG93OiAncmdiYSgwLDAsMCwwLjQ0KScsXG4gICAgZGFya01lZGl1bTogJ3JnYmEoMCwwLDAsMC42MCknLFxuICAgIGxpZ2h0SGlnaDogJ3JnYmEoMjU1LDI1NSwyNTUsMC44MCknLFxuICAgIGxpZ2h0U29saWQ6ICcjRkZGJyxcbiAgXG4gICAgLy8gUGFsZXR0ZVxuICAgIG1hZ2VudGE6ICcjRTYzODg4JywgLy8gYWNlbnQgY29sb3JcbiAgfSxcbiAgXG4gIHR5cG9ncmFwaHk6IHtcbiAgICB0eXBlZmFjZToge1xuICAgICAgcHJpbWFyeTogJ1wiUm9ib3RvXCInLFxuICAgIH0sXG4gICAgd2VpZ2h0OiB7XG4gICAgICBib2xkOiA3MDAsXG4gICAgICByZWd1bGFyOiA0MDAsXG4gICAgfSxcbiAgICBzaXplczoge1xuICAgICAgZGlzcGxheTogY3NzYFxuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTEuMnB4O1xuICAgICAgYCxcbiAgICAgIGhlYWRpbmdMOiBjc3NgXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gICAgICBgLFxuICAgICAgaGVhZGluZ006IGNzc2BcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjhweDtcbiAgICAgIGAsXG4gICAgICBoZWFkaW5nUzogY3NzYFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XG4gICAgICBgLFxuICAgICAgaGVhZGluZ1hTOiBjc3NgXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIGAsXG4gICAgICBzdWJIZWFkaW5nOiBjc3NgXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBgLFxuICAgICAgYm9keU06IGNzc2BcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBgLFxuICAgIH1cbiAgfSxcblxuICAnQG1lZGlhKG1heC13aWR0aDogNzYwcHgpJzoge1xuICAgIGRpc3BsYXk6IHtcbiAgICAgIGZvbnRTaXplOiAnMi41cmVtJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICc0NHB4JyxcbiAgICB9LFxuICAgIGhlYWRpbmdMOiB7XG4gICAgICBmb250U2l6ZTogJzJyZW0nLFxuICAgICAgbGluZUhlaWdodDogJzM2cHgnLFxuICAgIH0sXG4gICAgaGVhZGluZ006IHtcbiAgICAgIGZvbnRTaXplOiAnMS41cmVtJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcyOHB4JyxcbiAgICB9LFxuICAgIGhlYWRpbmdTOiB7XG4gICAgICBmb250U2l6ZTogJzEuMjVyZW0nLFxuICAgICAgbGluZUhlaWdodDogJzI0cHgnLFxuICAgIH0sXG4gICAgaGVhZGluZ1hTOiB7XG4gICAgICBmb250U2l6ZTogJzEuMTI1cmVtJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcyMnB4JyxcbiAgICB9LFxuICB9XG59Il0sIm5hbWVzIjpbImNzcyIsIkdsb2JhbFN0eWxlcyIsInRoZW1lIiwiVGV4dENvbG9ycyIsImRhcmtIaWdoIiwiZGFya0xvdyIsImRhcmtNZWRpdW0iLCJsaWdodEhpZ2giLCJsaWdodFNvbGlkIiwibWFnZW50YSIsInR5cG9ncmFwaHkiLCJ0eXBlZmFjZSIsInByaW1hcnkiLCJ3ZWlnaHQiLCJib2xkIiwicmVndWxhciIsInNpemVzIiwiZGlzcGxheSIsImhlYWRpbmdMIiwiaGVhZGluZ00iLCJoZWFkaW5nUyIsImhlYWRpbmdYUyIsInN1YkhlYWRpbmciLCJib2R5TSIsImZvbnRTaXplIiwibGluZUhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/theme.js\n");

/***/ })

});