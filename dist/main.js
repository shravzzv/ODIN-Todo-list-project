/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todos_createTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos/createTodo */ \"./src/todos/createTodo.js\");\n/* harmony import */ var _lists_createList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lists/createList */ \"./src/lists/createList.js\");\n\r\n\r\n\r\nconst todo1 = new _todos_createTodo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('clear gmail', '', new Date(), 1, '', '')\r\nconst inbox = new _lists_createList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('inbox')\r\n\r\ntodo1.addToList(inbox)\r\ntodo1.markComplete()\r\ntodo1.changePriority(3)\r\n\r\nconsole.log(todo1)\r\nconsole.log(inbox)\r\n\n\n//# sourceURL=webpack://odin-todo-list-project/./src/index.js?");

/***/ }),

/***/ "./src/lists/createList.js":
/*!*********************************!*\
  !*** ./src/lists/createList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _removeTodoFromList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeTodoFromList */ \"./src/lists/removeTodoFromList.js\");\n\r\n\r\nclass List {\r\n  constructor(title) {\r\n    this.title = title\r\n    this.todos = []\r\n  }\r\n\r\n  removeTodo(todo) {\r\n    (0,_removeTodoFromList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todo, this)\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);\r\n\n\n//# sourceURL=webpack://odin-todo-list-project/./src/lists/createList.js?");

/***/ }),

/***/ "./src/lists/removeTodoFromList.js":
/*!*****************************************!*\
  !*** ./src/lists/removeTodoFromList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst removeTodoFromList = (todo, list) => {\r\n  list.todos = list.todos.filter((item) => item.title !== todo.title)\r\n  todo.list = ''\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTodoFromList);\r\n\n\n//# sourceURL=webpack://odin-todo-list-project/./src/lists/removeTodoFromList.js?");

/***/ }),

/***/ "./src/todos/addTodoToList.js":
/*!************************************!*\
  !*** ./src/todos/addTodoToList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addTodoToList = (todo, list) => {\r\n  todo.list = list.title\r\n  list.todos.push(todo)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTodoToList);\r\n\n\n//# sourceURL=webpack://odin-todo-list-project/./src/todos/addTodoToList.js?");

/***/ }),

/***/ "./src/todos/changeTodoPriority.js":
/*!*****************************************!*\
  !*** ./src/todos/changeTodoPriority.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst changeTodoPriority = (todo, newPriority) => {\r\n  todo.priority = newPriority\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeTodoPriority);\r\n\n\n//# sourceURL=webpack://odin-todo-list-project/./src/todos/changeTodoPriority.js?");

/***/ }),

/***/ "./src/todos/completeTodo.js":
/*!***********************************!*\
  !*** ./src/todos/completeTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst completeTodo = (todo) => (todo.complete = true)\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completeTodo);\r\n\n\n//# sourceURL=webpack://odin-todo-list-project/./src/todos/completeTodo.js?");

/***/ }),

/***/ "./src/todos/createTodo.js":
/*!*********************************!*\
  !*** ./src/todos/createTodo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _completeTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completeTodo */ \"./src/todos/completeTodo.js\");\n/* harmony import */ var _addTodoToList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTodoToList */ \"./src/todos/addTodoToList.js\");\n/* harmony import */ var _changeTodoPriority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeTodoPriority */ \"./src/todos/changeTodoPriority.js\");\n\r\n\r\n\r\n\r\nclass Todo {\r\n  constructor(title, desc, due, priority, notes, checklist) {\r\n    this.title = title\r\n    this.desc = desc\r\n    this.due = due\r\n    this.priority = priority\r\n    this.notes = notes\r\n    this.checklist = checklist\r\n    this.complete = false\r\n    this.list = 'inbox'\r\n  }\r\n\r\n  markComplete() {\r\n    (0,_completeTodo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this)\r\n  }\r\n\r\n  addToList(list) {\r\n    (0,_addTodoToList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, list)\r\n  }\r\n\r\n  changePriority(newPriority) {\r\n    (0,_changeTodoPriority__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, newPriority)\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\r\n\n\n//# sourceURL=webpack://odin-todo-list-project/./src/todos/createTodo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;