"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/product/[id]";
exports.ids = ["pages/product/[id]"];
exports.modules = {

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var buttercms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! buttercms */ \"buttercms\");\n/* harmony import */ var buttercms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(buttercms__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst details = (product)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: product.name\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dell\\\\Documents\\\\Nextjs\\\\Api_Cart\\\\pages\\\\product\\\\[id].js\",\n            lineNumber: 9,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (details);\nconst getStaticPaths = async ()=>{\n    const butter = buttercms__WEBPACK_IMPORTED_MODULE_4___default()(process.env.REACT_APP_BUTTER_ECOMMERCE);\n    const res = await butter.content.retrieve([\n        \"products\"\n    ], {\n        order: \"name\"\n    });\n    const { data  } = await res.data;\n    const products = data.products;\n    // map data to an array of path objects with params (id)\n    const paths = products.map((product)=>{\n        return {\n            params: {\n                id: product.id.toString()\n            }\n        };\n    });\n    return {\n        paths,\n        fallback: false\n    };\n};\nasync function getStaticProps(context) {\n    const butter = buttercms__WEBPACK_IMPORTED_MODULE_4___default()(process.env.REACT_APP_BUTTER_ECOMMERCE);\n    const id = context.params.id;\n    const res = await butter.content.retrieve([\n        \"products\"\n    ] + id, {\n        order: \"name\"\n    });\n    const { data  } = await res.data;\n    const product = data.products;\n    return {\n        props: {\n            product\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ0k7QUFDSTtBQUNGO0FBRS9CLE1BQU1JLE9BQU8sR0FBRyxDQUFDQyxPQUFPLEdBQUs7SUFDM0IscUJBQ0U7a0JBQ0EsNEVBQUNDLElBQUU7c0JBQUVELE9BQU8sQ0FBQ0UsSUFBSTs7Ozs7cUJBQU07cUJBQ3BCLENBQ0o7Q0FDRjtBQUVELGlFQUFlSCxPQUFPO0FBR2YsTUFBTUksY0FBYyxHQUFHLFVBQVk7SUFDeEMsTUFBTUMsTUFBTSxHQUFFTixnREFBTSxDQUFDTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsMEJBQTBCLENBQUM7SUFDOUQsTUFBTUMsR0FBRyxHQUFHLE1BQU1KLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDQyxRQUFRLENBQUM7UUFBQyxVQUFVO0tBQUMsRUFBRTtRQUN0REMsS0FBSyxFQUFFLE1BQU07S0FDZCxDQUFDO0lBQ0YsTUFBTSxFQUFFQyxJQUFJLEdBQUUsR0FBRyxNQUFNSixHQUFHLENBQUNJLElBQUk7SUFDL0IsTUFBTUMsUUFBUSxHQUFHRCxJQUFJLENBQUNDLFFBQVE7SUFFNUIsd0RBQXdEO0lBQ3hELE1BQU1DLEtBQUssR0FBR0QsUUFBUSxDQUFDRSxHQUFHLENBQUNmLENBQUFBLE9BQU8sR0FBSTtRQUNwQyxPQUFPO1lBQ0xnQixNQUFNLEVBQUU7Z0JBQUVDLEVBQUUsRUFBRWpCLE9BQU8sQ0FBQ2lCLEVBQUUsQ0FBQ0MsUUFBUSxFQUFFO2FBQUU7U0FDdEM7S0FDRixDQUFDO0lBRUYsT0FBTztRQUNMSixLQUFLO1FBQ0xLLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0NBQ0Y7QUFFTSxlQUFlQyxjQUFjLENBQUNDLE9BQU8sRUFBRTtJQUM1QyxNQUFNakIsTUFBTSxHQUFFTixnREFBTSxDQUFDTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsMEJBQTBCLENBQUM7SUFFNUQsTUFBTVUsRUFBRSxHQUFHSSxPQUFPLENBQUNMLE1BQU0sQ0FBQ0MsRUFBRTtJQUU1QixNQUFNVCxHQUFHLEdBQUcsTUFBTUosTUFBTSxDQUFDSyxPQUFPLENBQUNDLFFBQVEsQ0FBQztRQUFDLFVBQVU7S0FBQyxHQUFHTyxFQUFFLEVBQUU7UUFDM0ROLEtBQUssRUFBRSxNQUFNO0tBQ2QsQ0FBQztJQUNGLE1BQU0sRUFBRUMsSUFBSSxHQUFFLEdBQUcsTUFBTUosR0FBRyxDQUFDSSxJQUFJO0lBQy9CLE1BQU1aLE9BQU8sR0FBR1ksSUFBSSxDQUFDQyxRQUFRO0lBQzdCLE9BQU87UUFDTFMsS0FBSyxFQUFFO1lBQ0x0QixPQUFPO1NBQ1I7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dGpzLy4vcGFnZXMvcHJvZHVjdC9baWRdLmpzP2Y2ODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnO1xyXG5pbXBvcnQgQnV0dGVyIGZyb20gXCJidXR0ZXJjbXNcIjtcclxuXHJcbmNvbnN0IGRldGFpbHMgPSAocHJvZHVjdCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGgxPntwcm9kdWN0Lm5hbWV9PC9oMT4gXHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRldGFpbHNcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgYnV0dGVyID1CdXR0ZXIocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JVVFRFUl9FQ09NTUVSQ0UpO1xyXG5jb25zdCByZXMgPSBhd2FpdCBidXR0ZXIuY29udGVudC5yZXRyaWV2ZShbXCJwcm9kdWN0c1wiXSwge1xyXG4gIG9yZGVyOiBcIm5hbWVcIixcclxufSk7XHJcbmNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzLmRhdGE7XHJcbmNvbnN0IHByb2R1Y3RzID0gZGF0YS5wcm9kdWN0cztcclxuXHJcbiAgLy8gbWFwIGRhdGEgdG8gYW4gYXJyYXkgb2YgcGF0aCBvYmplY3RzIHdpdGggcGFyYW1zIChpZClcclxuICBjb25zdCBwYXRocyA9IHByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmFtczogeyBpZDogcHJvZHVjdC5pZC50b1N0cmluZygpIH1cclxuICAgIH1cclxuICB9KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgYnV0dGVyID1CdXR0ZXIocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JVVFRFUl9FQ09NTUVSQ0UpO1xyXG5cclxuICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkO1xyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBidXR0ZXIuY29udGVudC5yZXRyaWV2ZShbXCJwcm9kdWN0c1wiXSArIGlkLCB7XHJcbiAgICBvcmRlcjogXCJuYW1lXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXMuZGF0YTtcclxuICBjb25zdCBwcm9kdWN0ID0gZGF0YS5wcm9kdWN0cyA7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHByb2R1Y3QsXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIlNjcmlwdCIsIkJ1dHRlciIsImRldGFpbHMiLCJwcm9kdWN0IiwiaDEiLCJuYW1lIiwiZ2V0U3RhdGljUGF0aHMiLCJidXR0ZXIiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0JVVFRFUl9FQ09NTUVSQ0UiLCJyZXMiLCJjb250ZW50IiwicmV0cmlldmUiLCJvcmRlciIsImRhdGEiLCJwcm9kdWN0cyIsInBhdGhzIiwibWFwIiwicGFyYW1zIiwiaWQiLCJ0b1N0cmluZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[id].js\n");

/***/ }),

/***/ "buttercms":
/*!****************************!*\
  !*** external "buttercms" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("buttercms");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/script");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/product/[id].js"));
module.exports = __webpack_exports__;

})();