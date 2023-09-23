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
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions in README.md\"\n            }\n        });\n        return;\n    }\n    const planet = req.body.planet || \"\";\n    if (planet.trim().length === 0) {\n        res.status(400).json({\n            error: {\n                message: \"Please enter a valid planet\"\n            }\n        });\n        return;\n    }\n    try {\n        const completion = await openai.createCompletion({\n            model: \"gpt-3.5-turbo-instruct\",\n            prompt: generatePrompt(planet),\n            temperature: 0.4,\n            max_tokens: 480\n        });\n        res.status(200).json({\n            result: completion.data.choices[0].text\n        });\n    } catch (error) {\n        // Consider adjusting the error handling logic for your use case\n        if (error.response) {\n            console.error(error.response.status, error.response.data);\n            res.status(error.response.status).json(error.response.data);\n        } else {\n            console.error(`Error with OpenAI API request: ${error.message}`);\n            res.status(500).json({\n                error: {\n                    message: \"An error occurred during your request.\"\n                }\n            });\n        }\n    }\n}\nfunction generatePrompt(planet) {\n    const capitalizedplanet = planet[0].toUpperCase() + planet.slice(1).toLowerCase();\n    return `Teach me about the planet ${capitalizedplanet} in a detailed form in atleast 60 words and a maximum of 120 words`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDO0FBQ0EsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsNkJBQWUsMENBQWdCTSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN2QyxJQUFJLENBQUNQLGNBQWNDLE1BQU0sRUFBRTtRQUN6Qk0sSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsT0FBTztnQkFDTEMsU0FBUztZQUNYO1FBQ0Y7UUFDQTtJQUNGLENBQUM7SUFFRCxNQUFNQyxTQUFTTixJQUFJTyxJQUFJLENBQUNELE1BQU0sSUFBSTtJQUNsQyxJQUFJQSxPQUFPRSxJQUFJLEdBQUdDLE1BQU0sS0FBSyxHQUFHO1FBQzlCUixJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxPQUFPO2dCQUNMQyxTQUFTO1lBQ1g7UUFDRjtRQUNBO0lBQ0YsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNSyxhQUFhLE1BQU1YLE9BQU9ZLGdCQUFnQixDQUFDO1lBQy9DQyxPQUFPO1lBQ1BDLFFBQVFDLGVBQWVSO1lBQ3ZCUyxhQUFhO1lBQ2JDLFlBQVk7UUFDZDtRQUNBZixJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVjLFFBQVFQLFdBQVdRLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtRQUFDO0lBQ2pFLEVBQUUsT0FBTWhCLE9BQU87UUFDYixnRUFBZ0U7UUFDaEUsSUFBSUEsTUFBTWlCLFFBQVEsRUFBRTtZQUNsQkMsUUFBUWxCLEtBQUssQ0FBQ0EsTUFBTWlCLFFBQVEsQ0FBQ25CLE1BQU0sRUFBRUUsTUFBTWlCLFFBQVEsQ0FBQ0gsSUFBSTtZQUN4RGpCLElBQUlDLE1BQU0sQ0FBQ0UsTUFBTWlCLFFBQVEsQ0FBQ25CLE1BQU0sRUFBRUMsSUFBSSxDQUFDQyxNQUFNaUIsUUFBUSxDQUFDSCxJQUFJO1FBQzVELE9BQU87WUFDTEksUUFBUWxCLEtBQUssQ0FBQyxDQUFDLCtCQUErQixFQUFFQSxNQUFNQyxPQUFPLENBQUMsQ0FBQztZQUMvREosSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFDbkJDLE9BQU87b0JBQ0xDLFNBQVM7Z0JBQ1g7WUFDRjtRQUNGLENBQUM7SUFDSDtBQUNGLENBQUM7QUFFRCxTQUFTUyxlQUFlUixNQUFNLEVBQUU7SUFDOUIsTUFBTWlCLG9CQUNKakIsTUFBTSxDQUFDLEVBQUUsQ0FBQ2tCLFdBQVcsS0FBS2xCLE9BQU9tQixLQUFLLENBQUMsR0FBR0MsV0FBVztJQUN2RCxPQUFPLENBQUMsMEJBQTBCLEVBQUVILGtCQUFrQixrRUFBa0UsQ0FBQztBQUMzSCIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanM/NjI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XHJcblxyXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXHJcbn0pO1xyXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XHJcbiAgaWYgKCFjb25maWd1cmF0aW9uLmFwaUtleSkge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xyXG4gICAgICBlcnJvcjoge1xyXG4gICAgICAgIG1lc3NhZ2U6IFwiT3BlbkFJIEFQSSBrZXkgbm90IGNvbmZpZ3VyZWQsIHBsZWFzZSBmb2xsb3cgaW5zdHJ1Y3Rpb25zIGluIFJFQURNRS5tZFwiLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBsYW5ldCA9IHJlcS5ib2R5LnBsYW5ldCB8fCAnJztcclxuICBpZiAocGxhbmV0LnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcclxuICAgICAgZXJyb3I6IHtcclxuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIHBsYW5ldFwiLFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xyXG4gICAgICBtb2RlbDogXCJncHQtMy41LXR1cmJvLWluc3RydWN0XCIsXHJcbiAgICAgIHByb21wdDogZ2VuZXJhdGVQcm9tcHQocGxhbmV0KSxcclxuICAgICAgdGVtcGVyYXR1cmU6IDAuNCxcclxuICAgICAgbWF4X3Rva2VuczogNDgwLFxyXG4gICAgfSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc3VsdDogY29tcGxldGlvbi5kYXRhLmNob2ljZXNbMF0udGV4dCB9KTtcclxuICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAvLyBDb25zaWRlciBhZGp1c3RpbmcgdGhlIGVycm9yIGhhbmRsaW5nIGxvZ2ljIGZvciB5b3VyIHVzZSBjYXNlXHJcbiAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvci5yZXNwb25zZS5zdGF0dXMsIGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICByZXMuc3RhdHVzKGVycm9yLnJlc3BvbnNlLnN0YXR1cykuanNvbihlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdpdGggT3BlbkFJIEFQSSByZXF1ZXN0OiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgbWVzc2FnZTogJ0FuIGVycm9yIG9jY3VycmVkIGR1cmluZyB5b3VyIHJlcXVlc3QuJyxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9tcHQocGxhbmV0KSB7XHJcbiAgY29uc3QgY2FwaXRhbGl6ZWRwbGFuZXQgPVxyXG4gICAgcGxhbmV0WzBdLnRvVXBwZXJDYXNlKCkgKyBwbGFuZXQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcclxuICByZXR1cm4gYFRlYWNoIG1lIGFib3V0IHRoZSBwbGFuZXQgJHtjYXBpdGFsaXplZHBsYW5ldH0gaW4gYSBkZXRhaWxlZCBmb3JtIGluIGF0bGVhc3QgNjAgd29yZHMgYW5kIGEgbWF4aW11bSBvZiAxMjAgd29yZHNgO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJwbGFuZXQiLCJib2R5IiwidHJpbSIsImxlbmd0aCIsImNvbXBsZXRpb24iLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJwcm9tcHQiLCJnZW5lcmF0ZVByb21wdCIsInRlbXBlcmF0dXJlIiwibWF4X3Rva2VucyIsInJlc3VsdCIsImRhdGEiLCJjaG9pY2VzIiwidGV4dCIsInJlc3BvbnNlIiwiY29uc29sZSIsImNhcGl0YWxpemVkcGxhbmV0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRvTG93ZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();