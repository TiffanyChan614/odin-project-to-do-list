"use strict";
(self["webpackChunkodin_to_do_list"] = self["webpackChunkodin_to_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --white-grey: #ebebeb;\n  --pale-grey: #e3e9eb;\n  --light-grey: #d6d9da;\n  --grey: #b2bec3;\n  --neutral-grey: #a7a7a7;\n  --medium-light-grey: #646a6c;\n  --medium-grey: #444b4d;\n  --dark: #2d3436;\n  --sky-blue: #55a2f0;\n  --light-blue: #3e92e6;\n  --blue: #0984e3;\n  --dark-blue: #006fc4;\n  --pink: #ff4646;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: -apple-system, 'system-ui';\n}\n\nfooter {\n  text-align: center;\n  font-size: 0.8rem;\n}\n\nmain {\n  display: flex;\n  flex: 1;\n  height: 100%;\n}\n\n#sidebar.open #project-btns-container,\n#content > header {\n  height: 7vh;\n  min-height: 3rem;\n}\n\n#sidebar {\n  background-color: var(--blue);\n  height: 100vh;\n  overflow-y: auto;\n}\n\n#sidebar.open {\n  width: 25%;\n  min-width: max-content;\n  max-width: 40rem;\n}\n\n#sidebar.close {\n  width: auto;\n}\n\n#project-btns-container {\n  position: sticky;\n  top: 0;\n  display: flex;\n  align-items: center;\n  color: white;\n  gap: 0.5rem;\n  background-color: var(--blue);\n}\n\n#sidebar.open #project-btns-container {\n  flex-direction: row;\n  padding: 0 0.2rem;\n  margin: 0 0.7rem 0 0.7rem;\n  border-bottom: 0.1rem solid white;\n}\n\n#sidebar.close #project-btns-container {\n  flex-direction: column;\n  padding: 1rem 0.5rem;\n}\n\n#sidebar.close #clear-all-projects {\n  display: none;\n}\n\n#project-btns-container button {\n  background-color: inherit;\n  border: none;\n  padding: 0.3rem;\n  border-radius: 5rem;\n  color: white;\n}\n\n#project-btns-container button:hover {\n  background-color: var(--sky-blue);\n}\n\n#sidebar.close #project-btns-container button {\n  width: 100%;\n}\n\n.project.selected,\n.project.selected:hover {\n  background-color: var(--sky-blue);\n}\n\n#project-container {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  background-color: var(--blue);\n  padding-bottom: 2rem;\n}\n\n.project-btns {\n  display: flex;\n  gap: 0.2rem;\n}\n\n.project {\n  height: 6vh;\n  min-height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 0.7rem;\n}\n\n.project-btns {\n  margin-left: 0.5em;\n}\n\n.project button {\n  border: none;\n  background-color: inherit;\n  color: white;\n}\n\n.project:hover {\n  background-color: var(--light-blue);\n}\n\n.project button:hover {\n  transform: scale(1.1);\n}\n\n#project-form-overlay {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  text-align: center;\n}\n\n#project-form-overlay input {\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  border: 0.1rem solid var(--grey);\n}\n\n#project-form-overlay input::placeholder {\n  color: var(--neutral-grey);\n}\n\n#project-form-btns,\n#todo-form-btns {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n#project-form-btns button,\n#todo-form-btns button {\n  padding: 0.7rem;\n  border: none;\n  border-radius: 0.5rem;\n  color: var(--medium-grey);\n  background-color: var(--white-grey);\n}\n\n#cancel-proj-btn:hover,\n#cancel-todo-btn:hover {\n  background-color: var(--light-grey);\n}\n\n#submit-proj-btn:hover,\n#submit-todo-btn:hover {\n  background-color: var(--blue);\n  color: white;\n}\n\n#todo-form-btns {\n  margin-top: 0.8rem;\n}\n\n#project-form {\n  background-color: white;\n  padding: 2rem;\n  border-radius: 0.5rem;\n  color: var(--medium-grey);\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n  width: 25rem;\n}\n\n#todo-form-overlay {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  text-align: center;\n}\n\n#todo-form {\n  background-color: white;\n  padding: 2rem;\n  border-radius: 0.5rem;\n  color: var(--medium-grey);\n  display: flex;\n  flex-direction: column;\n  width: 25rem;\n  gap: 1rem;\n}\n\n#todo-form h2 {\n  text-align: center;\n}\n\n#todo-form input,\nselect,\ntextarea {\n  padding: 0.4rem;\n  border-radius: 0.5rem;\n  border: 0.1rem solid var(--grey);\n  font-family: -apple-system, 'system-ui';\n  color: var(--medium-grey);\n}\n\n#todo-form > div:not(:last-of-type) {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  text-align: left;\n  font-size: 0.9rem;\n  color: var(--medium-light-grey);\n}\n\n#todo-form > div label {\n  margin-left: 0.2rem;\n}\n\n#todo-form input::placeholder,\ntextarea::placeholder {\n  color: var(--neutral-grey);\n}\n\n#todo-form #todo-desc {\n  height: 3rem;\n  overflow: auto;\n  resize: vertical;\n  word-wrap: break-word;\n}\n\n#content {\n  color: var(--medium-grey);\n  width: 100%;\n  height: 100vh;\n  overflow-y: auto;\n}\n\n#search-container {\n  position: sticky;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n\n#search-bar {\n  flex-shrink: 0;\n  height: 2rem;\n  width: 66%;\n  border: 0.15rem solid var(--light-grey);\n  border-radius: 1rem;\n  padding: 0 0.5rem;\n  color: var(--medium-grey);\n  margin-top: 1rem;\n}\n\n#dropdown-menu {\n  display: none;\n  width: 66%;\n  border: 0.07rem solid var(--pale-grey);\n  border-radius: 0.5rem;\n  background-color: white;\n  flex-direction: column;\n}\n\n#dropdown-menu .search-result {\n  margin: 0 0.5rem;\n  color: var(--medium-light-grey);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n\n#dropdown-menu .search-result .matched-project {\n  color: var(--medium-light-grey);\n  font-size: 0.9rem;\n}\n\n#dropdown-menu .search-result:hover {\n  color: var(--medium-grey);\n  font-weight: 450;\n}\n\n#dropdown-menu > .search-result:not(:last-of-type) {\n  border-bottom: 0.07rem solid var(--pale-grey);\n}\n\n#todo-container {\n  padding: 0.2rem 1.2rem 2rem 1.2rem;\n}\n\n#content > header {\n  position: sticky;\n  top: 0;\n  height: max-content;\n  background-color: white;\n  padding: 0 1.5rem;\n}\n\n#todo-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1.5rem 0 1rem;\n}\n\n#todo-container header h1 {\n  font-size: 1.5rem;\n  color: var(--medium-grey);\n  margin-right: 0.5rem;\n}\n\n#todo-main-btns {\n  display: flex;\n  gap: 0.5rem;\n}\n\n#todo-main-btns button {\n  padding: 0.5rem;\n  background-color: var(--light-blue);\n  border: none;\n  border-radius: 0.4rem;\n  color: white;\n}\n\n#todo-main-btns button:hover {\n  background-color: var(--blue);\n  color: white;\n}\n\n#todo-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.todo {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0.8rem 1rem;\n  background-color: var(--pale-grey);\n  border-radius: 0.4rem;\n}\n\n.todo:hover {\n  box-shadow: 0 0 0.2rem var(--medium-light-grey);\n}\n\n.todo-upper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.todo-info {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.todo-priority {\n  color: var(--pink);\n  font-weight: bold;\n}\n\n.todo input[type='checkbox'] {\n  appearance: none;\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  background-color: white;\n  border: 0.1rem solid var(--neutral-grey);\n  border-radius: 2rem;\n  cursor: pointer;\n}\n\n.todo input[type='checkbox']:checked {\n  background-color: var(--sky-blue);\n}\n\n.todo-btns {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.todo button {\n  padding: 0.2rem;\n  background-color: var(--pale-grey);\n  border: none;\n  border-radius: 2rem;\n}\n\n.todo button:hover {\n  transform: scale(1.1);\n}\n\n.todo-details {\n  font-size: 0.9rem;\n  color: var(--medium-light-grey);\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  margin-left: 2rem;\n  white-space: pre;\n}\n\n.todo-desc,\n.todo-date {\n  display: none;\n}\n\n.todo.checked span {\n  color: var(--medium-light-grey);\n}\n\n.todo.checked .todo-title {\n  text-decoration: line-through;\n}\n\n.todo .todo-title {\n  font-weight: 450;\n}\n\nfooter {\n  padding: 0.2rem;\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n  opacity: 0.8;\n  z-index: 2;\n  background-color: var(--pale-grey);\n  color: var(--dark);\n}\n\n.material-symbols-outlined {\n  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 50;\n}\n\n.material-symbols-outlined .proj-icons {\n  width: 1.5rem;\n}\n\n.material-symbols-outlined .todo-icons {\n  width: 1rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --white-grey: #ebebeb;\n  --pale-grey: #e3e9eb;\n  --light-grey: #d6d9da;\n  --grey: #b2bec3;\n  --neutral-grey: #a7a7a7;\n  --medium-light-grey: #646a6c;\n  --medium-grey: #444b4d;\n  --dark: #2d3436;\n  --sky-blue: #55a2f0;\n  --light-blue: #3e92e6;\n  --blue: #0984e3;\n  --dark-blue: #006fc4;\n  --pink: #ff4646;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: -apple-system, 'system-ui';\n}\n\nfooter {\n  text-align: center;\n  font-size: 0.8rem;\n}\n\nmain {\n  display: flex;\n  flex: 1;\n  height: 100%;\n}\n\n#sidebar.open #project-btns-container,\n#content > header {\n  height: 7vh;\n  min-height: 3rem;\n}\n\n#sidebar {\n  background-color: var(--blue);\n  height: 100vh;\n  overflow-y: auto;\n}\n\n#sidebar.open {\n  width: 25%;\n  min-width: max-content;\n  max-width: 40rem;\n}\n\n#sidebar.close {\n  width: auto;\n}\n\n#project-btns-container {\n  position: sticky;\n  top: 0;\n  display: flex;\n  align-items: center;\n  color: white;\n  gap: 0.5rem;\n  background-color: var(--blue);\n}\n\n#sidebar.open #project-btns-container {\n  flex-direction: row;\n  padding: 0 0.2rem;\n  margin: 0 0.7rem 0 0.7rem;\n  border-bottom: 0.1rem solid white;\n}\n\n#sidebar.close #project-btns-container {\n  flex-direction: column;\n  padding: 1rem 0.5rem;\n}\n\n#sidebar.close #clear-all-projects {\n  display: none;\n}\n\n#project-btns-container button {\n  background-color: inherit;\n  border: none;\n  padding: 0.3rem;\n  border-radius: 5rem;\n  color: white;\n}\n\n#project-btns-container button:hover {\n  background-color: var(--sky-blue);\n}\n\n#sidebar.close #project-btns-container button {\n  width: 100%;\n}\n\n.project.selected,\n.project.selected:hover {\n  background-color: var(--sky-blue);\n}\n\n#project-container {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  background-color: var(--blue);\n  padding-bottom: 2rem;\n}\n\n.project-btns {\n  display: flex;\n  gap: 0.2rem;\n}\n\n.project {\n  height: 6vh;\n  min-height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 0.7rem;\n}\n\n.project-btns {\n  margin-left: 0.5em;\n}\n\n.project button {\n  border: none;\n  background-color: inherit;\n  color: white;\n}\n\n.project:hover {\n  background-color: var(--light-blue);\n}\n\n.project button:hover {\n  transform: scale(1.1);\n}\n\n#project-form-overlay {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  text-align: center;\n}\n\n#project-form-overlay input {\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  border: 0.1rem solid var(--grey);\n}\n\n#project-form-overlay input::placeholder {\n  color: var(--neutral-grey);\n}\n\n#project-form-btns,\n#todo-form-btns {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n#project-form-btns button,\n#todo-form-btns button {\n  padding: 0.7rem;\n  border: none;\n  border-radius: 0.5rem;\n  color: var(--medium-grey);\n  background-color: var(--white-grey);\n}\n\n#cancel-proj-btn:hover,\n#cancel-todo-btn:hover {\n  background-color: var(--light-grey);\n}\n\n#submit-proj-btn:hover,\n#submit-todo-btn:hover {\n  background-color: var(--blue);\n  color: white;\n}\n\n#todo-form-btns {\n  margin-top: 0.8rem;\n}\n\n#project-form {\n  background-color: white;\n  padding: 2rem;\n  border-radius: 0.5rem;\n  color: var(--medium-grey);\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n  width: 25rem;\n}\n\n#todo-form-overlay {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  text-align: center;\n}\n\n#todo-form {\n  background-color: white;\n  padding: 2rem;\n  border-radius: 0.5rem;\n  color: var(--medium-grey);\n  display: flex;\n  flex-direction: column;\n  width: 25rem;\n  gap: 1rem;\n}\n\n#todo-form h2 {\n  text-align: center;\n}\n\n#todo-form input,\nselect,\ntextarea {\n  padding: 0.4rem;\n  border-radius: 0.5rem;\n  border: 0.1rem solid var(--grey);\n  font-family: -apple-system, 'system-ui';\n  color: var(--medium-grey);\n}\n\n#todo-form > div:not(:last-of-type) {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  text-align: left;\n  font-size: 0.9rem;\n  color: var(--medium-light-grey);\n}\n\n#todo-form > div label {\n  margin-left: 0.2rem;\n}\n\n#todo-form input::placeholder,\ntextarea::placeholder {\n  color: var(--neutral-grey);\n}\n\n#todo-form #todo-desc {\n  height: 3rem;\n  overflow: auto;\n  resize: vertical;\n  word-wrap: break-word;\n}\n\n#content {\n  color: var(--medium-grey);\n  width: 100%;\n  height: 100vh;\n  overflow-y: auto;\n}\n\n#search-container {\n  position: sticky;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n\n#search-bar {\n  flex-shrink: 0;\n  height: 2rem;\n  width: 66%;\n  border: 0.15rem solid var(--light-grey);\n  border-radius: 1rem;\n  padding: 0 0.5rem;\n  color: var(--medium-grey);\n  margin-top: 1rem;\n}\n\n#dropdown-menu {\n  display: none;\n  width: 66%;\n  border: 0.07rem solid var(--pale-grey);\n  border-radius: 0.5rem;\n  background-color: white;\n  flex-direction: column;\n}\n\n#dropdown-menu .search-result {\n  margin: 0 0.5rem;\n  color: var(--medium-light-grey);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n\n#dropdown-menu .search-result .matched-project {\n  color: var(--medium-light-grey);\n  font-size: 0.9rem;\n}\n\n#dropdown-menu .search-result:hover {\n  color: var(--medium-grey);\n  font-weight: 450;\n}\n\n#dropdown-menu > .search-result:not(:last-of-type) {\n  border-bottom: 0.07rem solid var(--pale-grey);\n}\n\n#todo-container {\n  padding: 0.2rem 1.2rem 2rem 1.2rem;\n}\n\n#content > header {\n  position: sticky;\n  top: 0;\n  height: max-content;\n  background-color: white;\n  padding: 0 1.5rem;\n}\n\n#todo-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1.5rem 0 1rem;\n}\n\n#todo-container header h1 {\n  font-size: 1.5rem;\n  color: var(--medium-grey);\n  margin-right: 0.5rem;\n}\n\n#todo-main-btns {\n  display: flex;\n  gap: 0.5rem;\n}\n\n#todo-main-btns button {\n  padding: 0.5rem;\n  background-color: var(--light-blue);\n  border: none;\n  border-radius: 0.4rem;\n  color: white;\n}\n\n#todo-main-btns button:hover {\n  background-color: var(--blue);\n  color: white;\n}\n\n#todo-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.todo {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0.8rem 1rem;\n  background-color: var(--pale-grey);\n  border-radius: 0.4rem;\n}\n\n.todo:hover {\n  box-shadow: 0 0 0.2rem var(--medium-light-grey);\n}\n\n.todo-upper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.todo-info {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.todo-priority {\n  color: var(--pink);\n  font-weight: bold;\n}\n\n.todo input[type='checkbox'] {\n  appearance: none;\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  background-color: white;\n  border: 0.1rem solid var(--neutral-grey);\n  border-radius: 2rem;\n  cursor: pointer;\n}\n\n.todo input[type='checkbox']:checked {\n  background-color: var(--sky-blue);\n}\n\n.todo-btns {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.todo button {\n  padding: 0.2rem;\n  background-color: var(--pale-grey);\n  border: none;\n  border-radius: 2rem;\n}\n\n.todo button:hover {\n  transform: scale(1.1);\n}\n\n.todo-details {\n  font-size: 0.9rem;\n  color: var(--medium-light-grey);\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  margin-left: 2rem;\n  white-space: pre;\n}\n\n.todo-desc,\n.todo-date {\n  display: none;\n}\n\n.todo.checked span {\n  color: var(--medium-light-grey);\n}\n\n.todo.checked .todo-title {\n  text-decoration: line-through;\n}\n\n.todo .todo-title {\n  font-weight: 450;\n}\n\nfooter {\n  padding: 0.2rem;\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n  opacity: 0.8;\n  z-index: 2;\n  background-color: var(--pale-grey);\n  color: var(--dark);\n}\n\n.material-symbols-outlined {\n  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 50;\n}\n\n.material-symbols-outlined .proj-icons {\n  width: 1.5rem;\n}\n\n.material-symbols-outlined .todo-icons {\n  width: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "NIL", ({
  enumerable: true,
  get: function get() {
    return _nil.default;
  }
}));
Object.defineProperty(exports, "parse", ({
  enumerable: true,
  get: function get() {
    return _parse.default;
  }
}));
Object.defineProperty(exports, "stringify", ({
  enumerable: true,
  get: function get() {
    return _stringify.default;
  }
}));
Object.defineProperty(exports, "v1", ({
  enumerable: true,
  get: function get() {
    return _v.default;
  }
}));
Object.defineProperty(exports, "v3", ({
  enumerable: true,
  get: function get() {
    return _v2.default;
  }
}));
Object.defineProperty(exports, "v4", ({
  enumerable: true,
  get: function get() {
    return _v3.default;
  }
}));
Object.defineProperty(exports, "v5", ({
  enumerable: true,
  get: function get() {
    return _v4.default;
  }
}));
Object.defineProperty(exports, "validate", ({
  enumerable: true,
  get: function get() {
    return _validate.default;
  }
}));
Object.defineProperty(exports, "version", ({
  enumerable: true,
  get: function get() {
    return _version.default;
  }
}));

var _v = _interopRequireDefault(__webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/commonjs-browser/v1.js"));

var _v2 = _interopRequireDefault(__webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/commonjs-browser/v3.js"));

var _v3 = _interopRequireDefault(__webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/commonjs-browser/v4.js"));

var _v4 = _interopRequireDefault(__webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/commonjs-browser/v5.js"));

var _nil = _interopRequireDefault(__webpack_require__(/*! ./nil.js */ "./node_modules/uuid/dist/commonjs-browser/nil.js"));

var _version = _interopRequireDefault(__webpack_require__(/*! ./version.js */ "./node_modules/uuid/dist/commonjs-browser/version.js"));

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));

var _stringify = _interopRequireDefault(__webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js"));

var _parse = _interopRequireDefault(__webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/commonjs-browser/parse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/md5.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/md5.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';

  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));

  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

var _default = md5;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/native.js":
/*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/native.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _default = {
  randomUUID
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/nil.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/nil.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/parse.js":
/*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/parse.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default = parse;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/regex.js":
/*!**********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/regex.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/rng.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/rng.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);

function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/sha1.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/sha1.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

var _default = sha1;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/stringify.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.unsafeStringify = unsafeStringify;

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v1.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v1.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _rng = _interopRequireDefault(__webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/commonjs-browser/rng.js"));

var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.unsafeStringify)(b);
}

var _default = v1;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v3.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v3.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/commonjs-browser/v35.js"));

var _md = _interopRequireDefault(__webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/commonjs-browser/md5.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v35.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v35.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.URL = exports.DNS = void 0;
exports["default"] = v35;

var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");

var _parse = _interopRequireDefault(__webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/commonjs-browser/parse.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.unsafeStringify)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v4.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v4.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _native = _interopRequireDefault(__webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/commonjs-browser/native.js"));

var _rng = _interopRequireDefault(__webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/commonjs-browser/rng.js"));

var _stringify = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/commonjs-browser/stringify.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  if (_native.default.randomUUID && !buf && !options) {
    return _native.default.randomUUID();
  }

  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.unsafeStringify)(rnds);
}

var _default = v4;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/v5.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/v5.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/commonjs-browser/v35.js"));

var _sha = _interopRequireDefault(__webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/commonjs-browser/sha1.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/validate.js":
/*!*************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/validate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regex = _interopRequireDefault(__webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/commonjs-browser/regex.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/uuid/dist/commonjs-browser/version.js":
/*!************************************************************!*\
  !*** ./node_modules/uuid/dist/commonjs-browser/version.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/commonjs-browser/validate.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.slice(14, 15), 16);
}

var _default = version;
exports["default"] = _default;

/***/ }),

/***/ "./src/display-controller.js":
/*!***********************************!*\
  !*** ./src/display-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-creator */ "./src/dom-creator.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _initialPM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialPM */ "./src/initialPM.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");





const projUl = document.querySelector('#project-list');
const todoUl = document.querySelector('#todo-list');
const addProjBtn = document.querySelector('#add-project');
const projFormOverlay = document.querySelector('#project-form-overlay');
const projForm = document.querySelector('#project-form');
const projNameField = document.querySelector('#project-name');
const clearProjBtn = document.querySelector('#clear-all-projects');
const addTodoBtn = document.querySelector('#add-todo');
const clearTodosBtn = document.querySelector('#clear-all-todos');
const todoFormOverlay = document.querySelector('#todo-form-overlay');
const todoForm = document.querySelector('#todo-form');
const todoTitleField = document.querySelector('#todo-title');
const todoDescField = document.querySelector('#todo-desc');
const todoDateField = document.querySelector('#todo-date');
const todoPriorityField = document.querySelector('#todo-priority');
const cancelProjForm = document.querySelector('#cancel-proj-btn');
const cancelTodoForm = document.querySelector('#cancel-todo-btn');
const sidebar = document.querySelector('#sidebar');
const sidebarBtn = document.querySelector('#sidebar-btn');
const projectContainer = document.querySelector('#project-container');
const showCompletedBtn = document.querySelector('#show-completed');
const currProjName = document.querySelector('#current-project-name');
const searchField = document.querySelector('#search-bar');
const dropdownMenu = document.querySelector('#dropdown-menu');

const EDIT = 0,
  ADD = 1;

let projToEdit = null;
let projectMode = ADD;
let selectedTodo = null;
let todoMode = ADD;
let showCompleted = false;

const clearProjects = () => {
  if (projUl) {
    projUl.textContent = '';
  }
};

const clearTodos = () => {
  if (todoUl) {
    todoUl.textContent = '';
  }
};

const showProjects = () => {
  if (_initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].isEmpty()) {
    currProjName.textContent = '';
    return;
  }
  for (let project of _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].projects) {
    projUl.appendChild(_dom_creator__WEBPACK_IMPORTED_MODULE_0__["default"].createProject(project, _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"]));
  }
  if (_initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].currProject) currProjName.textContent = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].currProject.name;
};

const showTodos = (todos) => {
  if (!todoUl) return;
  for (let todo of todos) {
    todoUl.appendChild(_dom_creator__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo(todo));
  }
};

const refreshProjects = () => {
  clearProjects();
  showProjects();
};

const refreshTodos = () => {
  clearTodos();
  if (_initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].currProject) {
    if (showCompleted) showTodos(_initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].currProject.allTodos);
    else showTodos(_initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].currProject.uncheckedTodos);
  }
};

const activateAddProj = () => {
  addProjBtn.addEventListener('click', (e) => {
    if (sidebar.classList.contains('close')) {
      sidebarBtn.click();
    }
    projectMode = ADD;
    projFormOverlay.style.display = 'flex';
    projNameField.value = '';
  });
};

const handleProjFormSubmit = () => {
  let projName = projNameField.value;
  if (projectMode === ADD) {
    if (projName !== '') _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(new _project__WEBPACK_IMPORTED_MODULE_3__["default"](null, projName));
    else _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(new _project__WEBPACK_IMPORTED_MODULE_3__["default"]());
  } else if (projectMode === EDIT) {
    if (projToEdit) {
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].editProject(projToEdit.id, projName);
      projToEdit = null;
    }
  }
  projFormOverlay.style.display = 'none';
  refreshProjects();
  refreshTodos();
};

const activateProjForm = () => {
  projForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleProjFormSubmit();
  });

  projForm.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleProjFormSubmit();
    }
  });
};

const activateCancelProjForm = () => {
  cancelProjForm.addEventListener('click', (e) => {
    e.preventDefault();
    projFormOverlay.style.display = 'none';
  });
};

const activateProjEvent = () => {
  projUl.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('project') && target.id) {
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].currProject = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(target.id);
      refreshProjects();
      refreshTodos();
    }
  });
};

const activateClearAllProj = () => {
  clearProjBtn.addEventListener('click', (e) => {
    _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].clearAllProjects();
    refreshProjects();
    refreshTodos();
  });
};

const activateClearProj = () => {
  projUl.addEventListener('click', (e) => {
    const target = e.target;
    if (
      target.classList.contains('clear-project') ||
      (target.parentNode !== null &&
        target.parentNode.classList.contains('clear-project'))
    ) {
      if (target.classList.contains('clear-project'))
        _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].removeProject(target.parentNode.parentNode.id);
      else _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].removeProject(target.parentNode.parentNode.parentNode.id);
      refreshProjects();
      refreshTodos();
    }
  });
};

const activateEditProj = () => {
  projUl.addEventListener('click', (e) => {
    const target = e.target;
    if (
      target.classList.contains('edit-project') ||
      (target.parentNode !== null &&
        target.parentNode.classList.contains('edit-project'))
    ) {
      if (target.classList.contains('edit-project')) {
        projToEdit = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(target.parentNode.parentNode.id);
      } else {
        projToEdit = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(target.parentNode.parentNode.parentNode.id);
      }
      projectMode = EDIT;
      projFormOverlay.style.display = 'flex';
      let oldName = projToEdit.name;
      projNameField.value = oldName;
    }
  });
};

const showTodoDetail = (todoLi) => {
  todoLi.style.backgroundColor = 'light pink';
  const descP = todoLi.querySelector('.todo-desc');
  const dateP = todoLi.querySelector('.todo-date');
  if (window.getComputedStyle(descP).getPropertyValue('display') === 'none') {
    descP.style.display = 'flex';
    dateP.style.display = 'flex';
  } else {
    descP.style.display = 'none';
    dateP.style.display = 'none';
  }
};

const activateTodoEvent = () => {
  todoUl.addEventListener('click', (e) => {
    const target = e.target;
    const todo = target.closest('.todo');
    const todoTitle = target.classList.contains('.todo-title');
    const isCheckbox = target.type === 'checkbox';
    const isButton = target.tagName === 'BUTTON';
    const isSVG = target.classList.contains('material-symbols-outlined');

    if ((todo || todoTitle) && !isCheckbox && !isButton && !isSVG) {
      let todoLi = todo || todoTitle.parentNode.parentNode.parentNode;
      showTodoDetail(todoLi);
    }
  });
};

const activateCheckTodo = () => {
  todoUl.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('check-todo')) {
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].toggleCheckTodo(target.parentNode.parentNode.parentNode.id);
      refreshTodos();
    }
  });
};

const activateClearTodo = () => {
  todoUl.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('clear-todo')) {
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].removeTodo(target.parentNode.parentNode.parentNode.id);
      refreshTodos();
    } else if (target.parentNode.classList.contains('clear-todo')) {
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].removeTodo(target.parentNode.parentNode.parentNode.parentNode.id);
      refreshTodos();
    }
  });
};

const activateAddTodo = () => {
  addTodoBtn.addEventListener('click', (e) => {
    todoMode = ADD;
    todoFormOverlay.style.display = 'flex';
    todoTitleField.value = '';
    todoDescField.value = '';
    todoDateField.value = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.setTimeZone)();
    todoPriorityField.value = 'None';
  });
};

const activateEditTodo = () => {
  todoUl.addEventListener('click', (e) => {
    const target = e.target;
    if (
      target.classList.contains('edit-todo') ||
      target.parentNode.classList.contains('edit-todo')
    ) {
      todoMode = EDIT;
      todoFormOverlay.style.display = 'flex';
      if (target.classList.contains('edit-todo'))
        selectedTodo = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getTodo(target.parentNode.parentNode.parentNode.id);
      else {
        selectedTodo = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getTodo(
          target.parentNode.parentNode.parentNode.parentNode.id
        );
      }
      const oldTitle = selectedTodo.title;
      const oldDesc = selectedTodo.desc;
      const oldDate = selectedTodo.date;
      const oldPriority = selectedTodo.priority;
      todoTitleField.value = oldTitle;
      if (oldDesc !== 'None') todoDescField.value = oldDesc;
      else todoDescField.value = '';
      todoDateField.value = oldDate;
      todoPriorityField.value = oldPriority;
    }
  });
};

const handleTodoFormSubmit = () => {
  let title = todoTitleField.value;
  let desc = todoDescField.value;
  let date = todoDateField.value;
  let priority = todoPriorityField.value;
  if (todoMode === ADD) {
    let newTodo = new _todo__WEBPACK_IMPORTED_MODULE_1__["default"](null, title, desc, date, priority);
    _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].addTodo(newTodo);
  } else if (todoMode === EDIT) {
    if (selectedTodo) {
      desc = desc === '' ? 'None' : desc;
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].editTodo(selectedTodo.id, title, desc, date, priority);
      selectedTodo = null;
    }
  }
  refreshTodos();
  todoFormOverlay.style.display = 'none';
};

const activateTodoForm = () => {
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleTodoFormSubmit();
  });
  todoForm.addEventListener('keydown', (e) => {
    if (!e.shiftKey && e.keyCode === 13) {
      handleTodoFormSubmit();
    }
  });
};

const activateCancelTodoForm = () => {
  cancelTodoForm.addEventListener('click', (e) => {
    e.preventDefault();
    todoFormOverlay.style.display = 'none';
  });
};

const activateTodoFormTextbox = () => {
  todoDescField.addEventListener('keydown', function (e) {
    if (e.shiftKey && e.keyCode === 13) {
      const currentVal = this.value;
      const cursorPos = this.selectionStart;
      const newVal =
        currentVal.substring(0, cursorPos) +
        '\n' +
        currentVal.substring(cursorPos);
      this.value = newVal;
      this.selectionStart = this.selectionEnd = cursorPos + 1;

      e.preventDefault();
    }
  });
};

const activateClearAllTodos = () => {
  clearTodosBtn.addEventListener('click', (e) => {
    _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].clearCurrentProject();
    refreshTodos();
  });
};

const activateSidebarBtn = () => {
  sidebarBtn.addEventListener('click', (e) => {
    if (
      window.getComputedStyle(projectContainer).getPropertyValue('display') ===
      'none'
    ) {
      projectContainer.style.display = 'flex';
      sidebar.classList.toggle('open');
      sidebar.classList.toggle('close');
    } else {
      projectContainer.style.display = 'none';
      sidebar.classList.toggle('open');
      sidebar.classList.toggle('close');
    }
  });
};

const toggleShowCompletedbtn = () => {
  if (showCompleted) {
    showCompletedBtn.textContent = 'Hide Completed';
  } else {
    showCompletedBtn.textContent = 'Show Completed';
  }
};

const activateShowCompleted = () => {
  showCompletedBtn.addEventListener('click', (e) => {
    showCompleted = !showCompleted;
    toggleShowCompletedbtn();
    refreshTodos();
  });
};

const activateSearchBar = () => {
  searchField.addEventListener('input', () => {
    dropdownMenu.textContent = '';
    const searchStr = searchField.value;
    if (searchStr) {
      let matches = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].searchTodoByTitle(searchStr);
      if (matches.length !== 0) {
        for (let match of matches) {
          dropdownMenu.appendChild(_dom_creator__WEBPACK_IMPORTED_MODULE_0__["default"].createResultDiv(match));
        }
        dropdownMenu.style.display = 'flex';
      } else dropdownMenu.style.display = 'none';
    } else dropdownMenu.style.display = 'none';
  });
};

const activateDropdownMenu = () => {
  dropdownMenu.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('search-result')) {
      let projId = target.value.split(':')[0];
      let todoId = target.value.split(':')[1];
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].currProject = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(projId);
      if (_initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getTodo(todoId).check) showCompleted = true;
      toggleShowCompletedbtn();
      refreshProjects();
      refreshTodos();
      const todoLi = document.querySelector(`#${todoId}`);
      showTodoDetail(todoLi);
    }
    dropdownMenu.style.display = 'none';
    searchField.value = '';
  });
};

const hideDropDownMenu = () => {
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (
      !target.classList.contains('search-result') &&
      target.id !== 'search-bar' &&
      target.id !== 'dropdown-menu'
    )
      dropdownMenu.style.display = 'none';
    searchField.value = '';
  });
};

const activateUI = () => {
  activateAddProj();
  activateCancelProjForm();
  activateProjForm();
  activateProjEvent();
  activateClearAllProj();
  activateClearProj();
  activateEditProj();
  activateTodoEvent();
  activateCheckTodo();
  activateClearTodo();
  activateAddTodo();
  activateEditTodo();
  activateTodoForm();
  activateCancelTodoForm();
  activateClearAllTodos();
  activateSidebarBtn();
  activateShowCompleted();
  activateSearchBar();
  activateDropdownMenu();
  hideDropDownMenu();
  activateTodoFormTextbox();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  refreshProjects,
  refreshTodos,
  activateUI,
});


/***/ }),

/***/ "./src/dom-creator.js":
/*!****************************!*\
  !*** ./src/dom-creator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SVG_DEFAULT_CLASS = 'material-symbols-outlined';
const createProject = (project, pm) => {
  let li = document.createElement('li');
  li.textContent = project.name;
  li.classList.add('project');
  li.id = `${project.id}`;
  li.appendChild(createProjectBtnsDiv());
  if (pm.currProject && li.id === pm.currProject.id) {
    li.classList.add('selected');
  }
  return li;
};

const createProjectBtnsDiv = () => {
  const div = createDivTag('project-btns');
  const editBtn = createBtnTag('edit-project', 'edit_note', 'proj-icons');
  const clearBtn = createBtnTag('clear-project', 'close', 'proj-icons');
  div.appendChild(editBtn);
  div.appendChild(clearBtn);
  return div;
};

const createTodo = (todo) => {
  let li = document.createElement('li');
  li.classList.add('todo');
  li.id = `${todo.id}`;
  const upperDiv = createDivTag('todo-upper');
  upperDiv.appendChild(createInfoDiv(todo));
  upperDiv.appendChild(createTodoBtnsDiv());
  li.appendChild(upperDiv);
  const lowerDiv = createDivTag('todo-lower');
  lowerDiv.appendChild(createTodoDetailsDiv(todo));
  li.appendChild(lowerDiv);
  if (todo.check) li.classList.add('checked');
  return li;
};

const createInfoDiv = (todo) => {
  const div = createDivTag('todo-info');
  div.appendChild(createTodoCheck(todo));
  div.appendChild(createTodoPriority(todo));
  div.appendChild(createSpanTag(todo.title, 'todo-title'));
  return div;
};

const createTodoBtnsDiv = () => {
  const div = createDivTag('todo-btns');
  const editBtn = createBtnTag('edit-todo', 'edit_note', 'todo-icons');
  const closeBtn = createBtnTag('clear-todo', 'close', 'todo-icons');
  div.appendChild(editBtn);
  div.appendChild(closeBtn);
  return div;
};

const createTodoDetailsDiv = (todo) => {
  const div = createDivTag('todo-details');
  const desc = createPTag(`Description:\t${todo.desc}`, 'todo-desc');
  const date = createPTag(`Due date:\t${todo.date}`, 'todo-date');
  div.appendChild(desc);
  div.appendChild(date);
  return div;
};

const createTodoCheck = (todo) => {
  let check = document.createElement('input');
  check.type = 'checkbox';
  check.classList.add('check-todo');
  check.checked = todo.check;
  return check;
};

const createTodoPriority = (todo) => {
  let priority;
  if (todo.priority === 'None') priority = createSpanTag('', 'todo-priority');
  else priority = createSpanTag(todo.priority, 'todo-priority');
  return priority;
};

const createResultDiv = (match) => {
  const option = createDivTag(
    'search-result',
    `${match.matchedProj.id}:${match.matchedTodo.id}`
  );

  const todoTitle = createPTag(match.matchedTodo.title, 'matched-todo');
  const projectName = createPTag(match.matchedProj.name, 'matched-project');

  option.appendChild(todoTitle);
  option.appendChild(projectName);

  return option;
};

const createSVGSpanTag = (text, defaultClass, customClass) => {
  const span = document.createElement('span');
  span.classList.add(defaultClass, customClass);
  span.textContent = text;
  return span;
};

const createPTag = (text, className) => {
  const p = document.createElement('p');
  p.classList.add(className);
  p.textContent = text;
  return p;
};

const createSpanTag = (text, className) => {
  const span = document.createElement('span');
  span.classList.add(className);
  span.textContent = text;
  return span;
};

const createBtnTag = (className, iconName, svgClassName) => {
  const button = document.createElement('button');
  button.classList.add(className);
  const icon = createSVGSpanTag(iconName, SVG_DEFAULT_CLASS, svgClassName);
  button.appendChild(icon);
  return button;
};

const createDivTag = (className, val) => {
  const div = document.createElement('p');
  div.classList.add(className);
  div.value = val ? val : '';
  return div;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  createProject,
  createTodo,
  createResultDiv,
});


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialPM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialPM.js */ "./src/initialPM.js");
/* harmony import */ var _display_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-controller */ "./src/display-controller.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// import Project from './project';




_display_controller__WEBPACK_IMPORTED_MODULE_1__["default"].refreshTodos(_initialPM_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
_display_controller__WEBPACK_IMPORTED_MODULE_1__["default"].refreshProjects(_initialPM_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
_display_controller__WEBPACK_IMPORTED_MODULE_1__["default"].activateUI(_initialPM_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/initialPM.js":
/*!**************************!*\
  !*** ./src/initialPM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");


let pm = new _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"]();
if (pm.isEmpty()) {
  let proj1 = new _project__WEBPACK_IMPORTED_MODULE_1__["default"]('To do list');
  pm.addProject(proj1);
}
pm.currProject = pm.projects[0];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pm);


/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearLocalStorage": () => (/* binding */ clearLocalStorage),
/* harmony export */   "loadLocalStorage": () => (/* binding */ loadLocalStorage),
/* harmony export */   "saveLocalStorage": () => (/* binding */ saveLocalStorage)
/* harmony export */ });
const storageAvailable = (type) => {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    console.log(`Error testing for storage availability: ${e}`);
    return false;
  }
};

const loadLocalStorage = (key) => {
  if (storageAvailable('localStorage')) {
    try {
      const serializedData = localStorage.getItem(key);
      if (serializedData === null) {
        return undefined;
      }
      const parsedData = JSON.parse(serializedData);
      return parsedData;
    } catch (err) {
      console.log(`Error loading from local storage: ${err}`);
      return undefined;
    }
  } else {
    console.log('Local storage not available');
  }
};

const saveLocalStorage = (key, data) => {
  if (storageAvailable('localStorage')) {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (err) {
      console.log(`Error saving to local storage: ${err}`);
    }
  } else {
    console.log('Local storage not available');
  }
};

const clearLocalStorage = (key) => {
  if (storageAvailable('localStorage')) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error(`error clearing local storage: ${e.message}`);
    }
  } else {
    console.log('Local storage not available');
  }
};




/***/ }),

/***/ "./src/project-manager.js":
/*!********************************!*\
  !*** ./src/project-manager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage */ "./src/local-storage.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");



class ProjectManager {
  #projects;
  #currProject;

  constructor(...projects) {
    const storedData = (0,_local_storage__WEBPACK_IMPORTED_MODULE_0__.loadLocalStorage)('projectManager');
    if (storedData) {
      if (storedData.projects)
        this.#projects = storedData.projects.map((p) => _project__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(p));
      else this.#projects = [];
      if (this.#projects && storedData.currProjectId) {
        const tempProj = this.getProject(storedData.currProjectId);
        if (tempProj) this.#currProject = tempProj;
        else this.#currProject = null;
      } else {
        this.#currProject = null;
      }
    } else {
      this.#projects =
        projects.length > 0 ? projects.map((p) => new _project__WEBPACK_IMPORTED_MODULE_1__["default"](p)) : [];
      this.#currProject = this.#projects.length > 0 ? this.#projects[0] : null;
      this.save();
    }
  }

  get projects() {
    return this.#projects;
  }

  set currProject(currProj) {
    for (const proj of this.#projects) {
      if (proj.id === currProj.id) {
        this.#currProject = currProj;
        this.save();
        return;
      }
    }
    this.#currProject = null;
    this.save();
  }

  get currProject() {
    return this.#currProject;
  }

  toJSON = () => {
    const projectsJSON = this.#projects.map((p) => p.toJSON());
    const currProjectId = this.#currProject ? this.#currProject.id : null;
    return { projects: projectsJSON, currProjectId: currProjectId };
  };

  static fromJSON(json) {
    const projectManager = new ProjectManager();
    if (!json || !json.projects) {
      return projectManager;
    }
    json.projects.forEach((projectJSON) => {
      const project = _project__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(projectJSON);
      projectManager.addProject(project);
      if (json.currProjectId === project.id) {
        projectManager.setCurrentProject(project);
      }
    });
    return projectManager;
  }

  save = () => {
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage)('projectManager', this.toJSON());
  };

  isEmpty = () => this.#projects.length === 0;

  getProject = (id) => {
    if (this.isEmpty()) {
      console.log(`Project with ID ${id} is not found`);
    }
    for (let p of this.#projects) {
      if (p.id === id) {
        return p;
      }
    }
    return null;
  };

  addProject = (project) => {
    this.#projects.push(project);
    this.#currProject = project;
    this.save();
  };

  removeProject = (id) => {
    if (this.isEmpty()) {
      console.log(`Project with ID ${id} is not found`);
      return;
    }
    this.#projects = this.#projects.filter((p) => p.id !== id);
    if (this.#currProject.id === id) {
      if (!this.isEmpty()) {
        this.#currProject = this.#projects[0];
      } else this.#currProject = null;
    }
    this.save();
  };

  addTodo = (todo) => {
    if (this.#currProject) {
      this.#currProject.addTodo(todo);
      this.save();
    }
  };

  removeTodo = (id) => {
    if (this.#currProject) {
      this.#currProject.removeTodo(id);
      this.save();
    }
  };

  getTodo = (id) => {
    if (this.#currProject) return this.#currProject.getTodo(id);
  };

  editTodo = (id, title, desc, date, priority) => {
    this.#currProject.editTodo(id, title, desc, date, priority);
    this.save();
  };

  toggleCheckTodo = (id) => {
    this.#currProject.toggleCheckTodo(id);
    this.save();
  };

  editProject = (id, newName) => {
    this.getProject(id).name = newName;
    this.#currProject = this.getProject(id);
    this.save();
  };

  clearCurrentProject = () => {
    if (this.#currProject) {
      this.#currProject.clearAllTodos();
      this.save();
    }
  };

  searchTodoByTitle = (searchStr) => {
    let matches = [];
    for (let project of this.#projects) {
      for (let todo of project.allTodos) {
        if (todo.title.toLowerCase().includes(searchStr.toLowerCase())) {
          let match = { matchedProj: project, matchedTodo: todo };
          matches.push(match);
        }
      }
    }
    return matches;
  };

  clearAllProjects = () => {
    this.#projects = [];
    this.#currProject = null;
    this.save();
  };

  toString = () => {
    let out = '';
    for (let project of this.#projects) {
      out += project.toString() + '\n';
    }
    return out;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectManager);


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


const uuid = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js");
class Project {
  #id;
  #name;
  #uncheckedTodos;
  #checkedTodos;

  constructor(
    id = null,
    name = 'New Project',
    uncheckedTodos = [],
    checkedTodos = []
  ) {
    if (!id) this.#id = `project-${uuid.v4()}`;
    else this.#id = id;
    this.#name = name;
    this.#uncheckedTodos = uncheckedTodos;
    this.#checkedTodos = checkedTodos;
  }

  set id(id) {
    this.#id = id;
  }

  get id() {
    return this.#id;
  }

  set name(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get uncheckedTodos() {
    return this.#uncheckedTodos;
  }

  get checkedTodos() {
    return this.#checkedTodos;
  }

  get allTodos() {
    return [...this.#uncheckedTodos, ...this.#checkedTodos];
  }

  isEmpty = () =>
    this.#uncheckedTodos.length === 0 && this.#checkedTodos.length === 0
      ? true
      : false;

  getNumTodo = () => this.#uncheckedTodos.length;

  getNumChecked = () => this.#checkedTodos.length;

  getTodoByTitle = (title) => {
    if (this.isEmpty()) return;
    let matches = [];
    for (let todo of this.#uncheckedTodos) {
      if (todo.title === title) {
        matches.push(todo);
      }
    }
    if (matches.length > 0) return matches;
    else return null;
  };

  getTodo = (id) => {
    if (this.isEmpty()) {
      console.log(`Todo with ID ${id} cannot be found`);
      return null;
    }
    for (let td of this.#uncheckedTodos) {
      if (td.id === id) {
        return td;
      }
    }
    for (let td of this.#checkedTodos) {
      if (td.id === id) {
        return td;
      }
    }
    return null;
  };

  addTodo = (todo) => {
    this.#uncheckedTodos.push(todo);
  };

  removeTodo = (id) => {
    if (this.isEmpty()) {
      console.log(`Todo with ID ${id} cannot be found`);
      return;
    }
    this.#uncheckedTodos = this.#uncheckedTodos.filter((td) => td.id !== id);
    this.#checkedTodos = this.#uncheckedTodos.filter((td) => td.id !== id);
  };

  editTodo = (id, newTitle, newDesc, newDate, newPriority) => {
    this.getTodo(id).edit(newTitle, newDesc, newDate, newPriority);
  };

  checkTodo = (id) => {
    if (this.isEmpty()) return;
    for (let i = 0; i < this.#uncheckedTodos.length; i++) {
      const td = this.#uncheckedTodos[i];
      if (td.id === id) {
        td.toggleCheck();
        this.#uncheckedTodos.splice(i, 1);
        this.#checkedTodos.push(td);
        break;
      }
    }
  };

  uncheckTodo = (id) => {
    if (this.isEmpty()) return;
    for (let i = 0; i < this.#checkedTodos.length; i++) {
      const td = this.#checkedTodos[i];
      if (td.id === id) {
        td.toggleCheck();
        this.#checkedTodos.splice(i, 1);
        this.#uncheckedTodos.push(td);
      }
    }
  };

  toggleCheckTodo = (id) => {
    if (this.isEmpty()) return;
    const td = this.getTodo(id);
    if (td.check) this.uncheckTodo(id);
    else this.checkTodo(id);
  };

  equals = (project) => this.id === project.id;

  clearAllTodos = () => {
    this.#uncheckedTodos = [];
    this.#checkedTodos = [];
  };

  clearHistory = () => (this.#checkedTodos = []);

  toString = () => {
    let msg = `Project Name: ${this.name}\nProject ID: ${this.id}\n`;
    if (this.#uncheckedTodos.length > 0) {
      for (let i = 0; i < this.#uncheckedTodos.length; i++) {
        msg += `To-do ${i + 1}:\n`;
        msg += this.#uncheckedTodos[i].toString() + '\n';
      }
    }
    return msg;
  };

  toJSON = () => {
    return {
      id: this.#id,
      uncheckedTodos: this.#uncheckedTodos.length
        ? this.#uncheckedTodos.map((todo) => todo.toJSON())
        : [],
      checkedTodos: this.#checkedTodos.length
        ? this.#checkedTodos.map((todo) => todo.toJSON())
        : [],
      name: this.#name,
    };
  };

  static fromJSON(json) {
    const project = new Project(json.id, json.name);
    project.#uncheckedTodos = json.uncheckedTodos.map((todoJSON) =>
      _todo__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(todoJSON)
    );
    project.#checkedTodos = json.checkedTodos.map((todoJSON) =>
      _todo__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(todoJSON)
    );
    return project;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "setTimeZone": () => (/* binding */ setTimeZone)
/* harmony export */ });
const uuid = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js");

const setTimeZone = () => {
  const now = new Date();
  const timezoneOffset = now.getTimezoneOffset() * 60000;
  const localTime = new Date(now.getTime() - timezoneOffset);
  return localTime.toISOString().slice(0, 10);
};

class Todo {
  #id;
  #title;
  #desc;
  #date;
  #priority;
  #check;

  constructor(
    id = null,
    title = 'New Todo',
    desc = 'None',
    date = setTimeZone(),
    priority = 'None',
    check = false
  ) {
    if (id !== null) this.#id = id;
    else this.#id = `todo-${uuid.v4()}`;

    if (title !== '') this.#title = title;
    else this.#title = 'New Todo';

    if (desc !== '') this.#desc = desc;
    else this.#desc = 'None';

    this.#date = date;
    this.#priority = priority;
    this.#check = check;
  }

  set id(id) {
    this.#id = id;
  }
  get id() {
    return this.#id;
  }

  set title(title) {
    this.#title = title;
  }

  get title() {
    return this.#title;
  }

  set desc(desc) {
    this.#desc = desc;
  }

  get desc() {
    return this.#desc;
  }

  set date(date) {
    this.#date = date;
  }

  get date() {
    return this.#date;
  }

  set priority(priority) {
    this.#priority = priority;
  }

  get priority() {
    return this.#priority;
  }

  set check(check) {
    this.#check = check;
  }

  get check() {
    return this.#check;
  }

  toggleCheck = () => (this.#check = !this.#check);

  edit = (newTitle, newDesc, newDate, newPriority) => {
    this.#title = newTitle;
    this.#desc = newDesc;
    this.#date = newDate;
    this.#priority = newPriority;
  };

  equals = (todo) => this.#id === todo.id;

  toString = () => {
    return (
      `ID: ${this.#id}\n` +
      `Title: ${this.#title}\n` +
      `Description: ${this.#desc}\n` +
      `Due Date: ${this.#date}\n` +
      `Priority: ${this.#priority}\n` +
      `Check: ${this.#check}\n`
    );
  };

  toJSON = () => {
    return {
      id: this.#id,
      title: this.#title,
      desc: this.#desc,
      date: this.#date,
      priority: this.#priority,
      check: this.#check,
    };
  };

  static fromJSON = (json) => {
    return new Todo(
      json.id,
      json.title,
      json.desc,
      json.date,
      json.priority,
      json.check
    );
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxh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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsZ0JBQWdCLFlBQVk7QUFDNUIsc0JBQXNCLFdBQVc7QUFDakMsbUJBQW1CLFdBQVc7QUFDOUIsbUJBQW1CLGVBQWU7QUFDbEMsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9uaWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3BhcnNlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3YxLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92My5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjM1LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92ZXJzaW9uLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2RvbS1jcmVhdG9yLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5pdGlhbFBNLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXdoaXRlLWdyZXk6ICNlYmViZWI7XFxuICAtLXBhbGUtZ3JleTogI2UzZTllYjtcXG4gIC0tbGlnaHQtZ3JleTogI2Q2ZDlkYTtcXG4gIC0tZ3JleTogI2IyYmVjMztcXG4gIC0tbmV1dHJhbC1ncmV5OiAjYTdhN2E3O1xcbiAgLS1tZWRpdW0tbGlnaHQtZ3JleTogIzY0NmE2YztcXG4gIC0tbWVkaXVtLWdyZXk6ICM0NDRiNGQ7XFxuICAtLWRhcms6ICMyZDM0MzY7XFxuICAtLXNreS1ibHVlOiAjNTVhMmYwO1xcbiAgLS1saWdodC1ibHVlOiAjM2U5MmU2O1xcbiAgLS1ibHVlOiAjMDk4NGUzO1xcbiAgLS1kYXJrLWJsdWU6ICMwMDZmYzQ7XFxuICAtLXBpbms6ICNmZjQ2NDY7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgJ3N5c3RlbS11aSc7XFxufVxcblxcbmZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3NpZGViYXIub3BlbiAjcHJvamVjdC1idG5zLWNvbnRhaW5lcixcXG4jY29udGVudCA+IGhlYWRlciB7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIG1pbi1oZWlnaHQ6IDNyZW07XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbiNzaWRlYmFyLm9wZW4ge1xcbiAgd2lkdGg6IDI1JTtcXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtYXgtd2lkdGg6IDQwcmVtO1xcbn1cXG5cXG4jc2lkZWJhci5jbG9zZSB7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuI3Byb2plY3QtYnRucy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuI3NpZGViYXIub3BlbiAjcHJvamVjdC1idG5zLWNvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgcGFkZGluZzogMCAwLjJyZW07XFxuICBtYXJnaW46IDAgMC43cmVtIDAgMC43cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4jc2lkZWJhci5jbG9zZSAjcHJvamVjdC1idG5zLWNvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxufVxcblxcbiNzaWRlYmFyLmNsb3NlICNjbGVhci1hbGwtcHJvamVjdHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Byb2plY3QtYnRucy1jb250YWluZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jcHJvamVjdC1idG5zLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LWJsdWUpO1xcbn1cXG5cXG4jc2lkZWJhci5jbG9zZSAjcHJvamVjdC1idG5zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LnNlbGVjdGVkLFxcbi5wcm9qZWN0LnNlbGVjdGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS1ibHVlKTtcXG59XFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGhlaWdodDogNnZoO1xcbiAgbWluLWhlaWdodDogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtIDAuN3JlbTtcXG59XFxuXFxuLnByb2plY3QtYnRucyB7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxufVxcblxcbi5wcm9qZWN0IGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG59XFxuXFxuLnByb2plY3QgYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1vdmVybGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tb3ZlcmxheSBpbnB1dCB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1ncmV5KTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1vdmVybGF5IGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1ncmV5KTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1idG5zLFxcbiN0b2RvLWZvcm0tYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tYnRucyBidXR0b24sXFxuI3RvZG8tZm9ybS1idG5zIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjdyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtZ3JleSk7XFxufVxcblxcbiNjYW5jZWwtcHJvai1idG46aG92ZXIsXFxuI2NhbmNlbC10b2RvLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG59XFxuXFxuI3N1Ym1pdC1wcm9qLWJ0bjpob3ZlcixcXG4jc3VibWl0LXRvZG8tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdG9kby1mb3JtLWJ0bnMge1xcbiAgbWFyZ2luLXRvcDogMC44cmVtO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyNXJlbTtcXG59XFxuXFxuI3RvZG8tZm9ybS1vdmVybGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0b2RvLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jdG9kby1mb3JtIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3RvZG8tZm9ybSBpbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tZ3JleSk7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgJ3N5c3RlbS11aSc7XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbn1cXG5cXG4jdG9kby1mb3JtID4gZGl2Om5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zcmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1saWdodC1ncmV5KTtcXG59XFxuXFxuI3RvZG8tZm9ybSA+IGRpdiBsYWJlbCB7XFxuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xcbn1cXG5cXG4jdG9kby1mb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtZ3JleSk7XFxufVxcblxcbiN0b2RvLWZvcm0gI3RvZG8tZGVzYyB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jc2VhcmNoLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDA7XFxufVxcblxcbiNzZWFyY2gtYmFyIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDY2JTtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDY2JTtcXG4gIGJvcmRlcjogMC4wN3JlbSBzb2xpZCB2YXIoLS1wYWxlLWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSAuc2VhcmNoLXJlc3VsdCB7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1saWdodC1ncmV5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSAuc2VhcmNoLXJlc3VsdCAubWF0Y2hlZC1wcm9qZWN0IHtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgLnNlYXJjaC1yZXN1bHQ6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIGZvbnQtd2VpZ2h0OiA0NTA7XFxufVxcblxcbiNkcm9wZG93bi1tZW51ID4gLnNlYXJjaC1yZXN1bHQ6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1ib3R0b206IDAuMDdyZW0gc29saWQgdmFyKC0tcGFsZS1ncmV5KTtcXG59XFxuXFxuI3RvZG8tY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAuMnJlbSAxLjJyZW0gMnJlbSAxLjJyZW07XFxufVxcblxcbiNjb250ZW50ID4gaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG59XFxuXFxuI3RvZG8taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxLjVyZW0gMCAxcmVtO1xcbn1cXG5cXG4jdG9kby1jb250YWluZXIgaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4jdG9kby1tYWluLWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jdG9kby1tYWluLWJ0bnMgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdG9kby1tYWluLWJ0bnMgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdG9kby1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjhyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtZ3JleSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxufVxcblxcbi50b2RvOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjJyZW0gdmFyKC0tbWVkaXVtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4udG9kby11cHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udG9kby1wcmlvcml0eSB7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRvZG8gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLW5ldXRyYWwtZ3JleSk7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kbyBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LWJsdWUpO1xcbn1cXG5cXG4udG9kby1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtZ3JleSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG4udG9kbyBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4udG9kby1kZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1saWdodC1ncmV5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjNyZW07XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxufVxcblxcbi50b2RvLWRlc2MsXFxuLnRvZG8tZGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby5jaGVja2VkIHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1saWdodC1ncmV5KTtcXG59XFxuXFxuLnRvZG8uY2hlY2tlZCAudG9kby10aXRsZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8gLnRvZG8tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWdyZXkpO1xcbiAgY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ0ZJTEwnIDAsICd3Z2h0JyAyMDAsICdHUkFEJyAwLCAnb3BzeicgNTA7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIC5wcm9qLWljb25zIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIC50b2RvLWljb25zIHtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFD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WTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtFQUFrRTtBQUNwRTs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXdoaXRlLWdyZXk6ICNlYmViZWI7XFxuICAtLXBhbGUtZ3JleTogI2UzZTllYjtcXG4gIC0tbGlnaHQtZ3JleTogI2Q2ZDlkYTtcXG4gIC0tZ3JleTogI2IyYmVjMztcXG4gIC0tbmV1dHJhbC1ncmV5OiAjYTdhN2E3O1xcbiAgLS1tZWRpdW0tbGlnaHQtZ3JleTogIzY0NmE2YztcXG4gIC0tbWVkaXVtLWdyZXk6ICM0NDRiNGQ7XFxuICAtLWRhcms6ICMyZDM0MzY7XFxuICAtLXNreS1ibHVlOiAjNTVhMmYwO1xcbiAgLS1saWdodC1ibHVlOiAjM2U5MmU2O1xcbiAgLS1ibHVlOiAjMDk4NGUzO1xcbiAgLS1kYXJrLWJsdWU6ICMwMDZmYzQ7XFxuICAtLXBpbms6ICNmZjQ2NDY7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgJ3N5c3RlbS11aSc7XFxufVxcblxcbmZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3NpZGViYXIub3BlbiAjcHJvamVjdC1idG5zLWNvbnRhaW5lcixcXG4jY29udGVudCA+IGhlYWRlciB7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIG1pbi1oZWlnaHQ6IDNyZW07XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbiNzaWRlYmFyLm9wZW4ge1xcbiAgd2lkdGg6IDI1JTtcXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtYXgtd2lkdGg6IDQwcmVtO1xcbn1cXG5cXG4jc2lkZWJhci5jbG9zZSB7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuI3Byb2plY3QtYnRucy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuI3NpZGViYXIub3BlbiAjcHJvamVjdC1idG5zLWNvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgcGFkZGluZzogMCAwLjJyZW07XFxuICBtYXJnaW46IDAgMC43cmVtIDAgMC43cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4jc2lkZWJhci5jbG9zZSAjcHJvamVjdC1idG5zLWNvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxufVxcblxcbiNzaWRlYmFyLmNsb3NlICNjbGVhci1hbGwtcHJvamVjdHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Byb2plY3QtYnRucy1jb250YWluZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jcHJvamVjdC1idG5zLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LWJsdWUpO1xcbn1cXG5cXG4jc2lkZWJhci5jbG9zZSAjcHJvamVjdC1idG5zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LnNlbGVjdGVkLFxcbi5wcm9qZWN0LnNlbGVjdGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS1ibHVlKTtcXG59XFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGhlaWdodDogNnZoO1xcbiAgbWluLWhlaWdodDogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtIDAuN3JlbTtcXG59XFxuXFxuLnByb2plY3QtYnRucyB7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxufVxcblxcbi5wcm9qZWN0IGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG59XFxuXFxuLnByb2plY3QgYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1vdmVybGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tb3ZlcmxheSBpbnB1dCB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1ncmV5KTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1vdmVybGF5IGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1ncmV5KTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1idG5zLFxcbiN0b2RvLWZvcm0tYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tYnRucyBidXR0b24sXFxuI3RvZG8tZm9ybS1idG5zIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjdyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtZ3JleSk7XFxufVxcblxcbiNjYW5jZWwtcHJvai1idG46aG92ZXIsXFxuI2NhbmNlbC10b2RvLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG59XFxuXFxuI3N1Ym1pdC1wcm9qLWJ0bjpob3ZlcixcXG4jc3VibWl0LXRvZG8tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdG9kby1mb3JtLWJ0bnMge1xcbiAgbWFyZ2luLXRvcDogMC44cmVtO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyNXJlbTtcXG59XFxuXFxuI3RvZG8tZm9ybS1vdmVybGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0b2RvLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jdG9kby1mb3JtIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3RvZG8tZm9ybSBpbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tZ3JleSk7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgJ3N5c3RlbS11aSc7XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbn1cXG5cXG4jdG9kby1mb3JtID4gZGl2Om5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zcmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1saWdodC1ncmV5KTtcXG59XFxuXFxuI3RvZG8tZm9ybSA+IGRpdiBsYWJlbCB7XFxuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xcbn1cXG5cXG4jdG9kby1mb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtZ3JleSk7XFxufVxcblxcbiN0b2RvLWZvcm0gI3RvZG8tZGVzYyB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jc2VhcmNoLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDA7XFxufVxcblxcbiNzZWFyY2gtYmFyIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDY2JTtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDY2JTtcXG4gIGJvcmRlcjogMC4wN3JlbSBzb2xpZCB2YXIoLS1wYWxlLWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSAuc2VhcmNoLXJlc3VsdCB7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1saWdodC1ncmV5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSAuc2VhcmNoLXJlc3VsdCAubWF0Y2hlZC1wcm9qZWN0IHtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgLnNlYXJjaC1yZXN1bHQ6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIGZvbnQtd2VpZ2h0OiA0NTA7XFxufVxcblxcbiNkcm9wZG93bi1tZW51ID4gLnNlYXJjaC1yZXN1bHQ6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1ib3R0b206IDAuMDdyZW0gc29saWQgdmFyKC0tcGFsZS1ncmV5KTtcXG59XFxuXFxuI3RvZG8tY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAuMnJlbSAxLjJyZW0gMnJlbSAxLjJyZW07XFxufVxcblxcbiNjb250ZW50ID4gaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG59XFxuXFxuI3RvZG8taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxLjVyZW0gMCAxcmVtO1xcbn1cXG5cXG4jdG9kby1jb250YWluZXIgaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4jdG9kby1tYWluLWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4jdG9kby1tYWluLWJ0bnMgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdG9kby1tYWluLWJ0bnMgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdG9kby1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjhyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtZ3JleSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxufVxcblxcbi50b2RvOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjJyZW0gdmFyKC0tbWVkaXVtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4udG9kby11cHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udG9kby1wcmlvcml0eSB7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRvZG8gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLW5ldXRyYWwtZ3JleSk7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kbyBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LWJsdWUpO1xcbn1cXG5cXG4udG9kby1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtZ3JleSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG4udG9kbyBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4udG9kby1kZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1saWdodC1ncmV5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjNyZW07XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxufVxcblxcbi50b2RvLWRlc2MsXFxuLnRvZG8tZGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby5jaGVja2VkIHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1saWdodC1ncmV5KTtcXG59XFxuXFxuLnRvZG8uY2hlY2tlZCAudG9kby10aXRsZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8gLnRvZG8tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWdyZXkpO1xcbiAgY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ0ZJTEwnIDAsICd3Z2h0JyAyMDAsICdHUkFEJyAwLCAnb3BzeicgNTA7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIC5wcm9qLWljb25zIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIC50b2RvLWljb25zIHtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5JTFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbmlsLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicGFyc2VcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3BhcnNlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic3RyaW5naWZ5XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2MVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92Mi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92My5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY1XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92NC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInZhbGlkYXRlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92YWxpZGF0ZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInZlcnNpb25cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3ZlcnNpb24uZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjEuanNcIikpO1xuXG52YXIgX3YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92My5qc1wiKSk7XG5cbnZhciBfdjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y0LmpzXCIpKTtcblxudmFyIF92NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjUuanNcIikpO1xuXG52YXIgX25pbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbmlsLmpzXCIpKTtcblxudmFyIF92ZXJzaW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92ZXJzaW9uLmpzXCIpKTtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG52YXIgX3N0cmluZ2lmeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpKTtcblxudmFyIF9wYXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGFyc2UuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4vKlxuICogQnJvd3Nlci1jb21wYXRpYmxlIEphdmFTY3JpcHQgTUQ1XG4gKlxuICogTW9kaWZpY2F0aW9uIG9mIEphdmFTY3JpcHQgTUQ1XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9KYXZhU2NyaXB0LU1ENVxuICpcbiAqIENvcHlyaWdodCAyMDExLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqXG4gKiBCYXNlZCBvblxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBSU0EgRGF0YSBTZWN1cml0eSwgSW5jLiBNRDUgTWVzc2FnZVxuICogRGlnZXN0IEFsZ29yaXRobSwgYXMgZGVmaW5lZCBpbiBSRkMgMTMyMS5cbiAqIFZlcnNpb24gMi4yIENvcHlyaWdodCAoQykgUGF1bCBKb2huc3RvbiAxOTk5IC0gMjAwOVxuICogT3RoZXIgY29udHJpYnV0b3JzOiBHcmVnIEhvbHQsIEFuZHJldyBLZXBlcnQsIFlkbmFyLCBMb3N0aW5ldFxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlXG4gKiBTZWUgaHR0cDovL3BhamhvbWUub3JnLnVrL2NyeXB0L21kNSBmb3IgbW9yZSBpbmZvLlxuICovXG5mdW5jdGlvbiBtZDUoYnl0ZXMpIHtcbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobXNnLmxlbmd0aCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXNbaV0gPSBtc2cuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWQ1VG9IZXhFbmNvZGVkQXJyYXkod29yZHNUb01kNShieXRlc1RvV29yZHMoYnl0ZXMpLCBieXRlcy5sZW5ndGggKiA4KSk7XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzIHRvIGFuIGFycmF5IG9mIGJ5dGVzXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVUb0hleEVuY29kZWRBcnJheShpbnB1dCkge1xuICBjb25zdCBvdXRwdXQgPSBbXTtcbiAgY29uc3QgbGVuZ3RoMzIgPSBpbnB1dC5sZW5ndGggKiAzMjtcbiAgY29uc3QgaGV4VGFiID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoMzI7IGkgKz0gOCkge1xuICAgIGNvbnN0IHggPSBpbnB1dFtpID4+IDVdID4+PiBpICUgMzIgJiAweGZmO1xuICAgIGNvbnN0IGhleCA9IHBhcnNlSW50KGhleFRhYi5jaGFyQXQoeCA+Pj4gNCAmIDB4MGYpICsgaGV4VGFiLmNoYXJBdCh4ICYgMHgwZiksIDE2KTtcbiAgICBvdXRwdXQucHVzaChoZXgpO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qKlxuICogQ2FsY3VsYXRlIG91dHB1dCBsZW5ndGggd2l0aCBwYWRkaW5nIGFuZCBiaXQgbGVuZ3RoXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRPdXRwdXRMZW5ndGgoaW5wdXRMZW5ndGg4KSB7XG4gIHJldHVybiAoaW5wdXRMZW5ndGg4ICsgNjQgPj4+IDkgPDwgNCkgKyAxNCArIDE7XG59XG4vKlxuICogQ2FsY3VsYXRlIHRoZSBNRDUgb2YgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcywgYW5kIGEgYml0IGxlbmd0aC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHdvcmRzVG9NZDUoeCwgbGVuKSB7XG4gIC8qIGFwcGVuZCBwYWRkaW5nICovXG4gIHhbbGVuID4+IDVdIHw9IDB4ODAgPDwgbGVuICUgMzI7XG4gIHhbZ2V0T3V0cHV0TGVuZ3RoKGxlbikgLSAxXSA9IGxlbjtcbiAgbGV0IGEgPSAxNzMyNTg0MTkzO1xuICBsZXQgYiA9IC0yNzE3MzM4Nzk7XG4gIGxldCBjID0gLTE3MzI1ODQxOTQ7XG4gIGxldCBkID0gMjcxNzMzODc4O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICBjb25zdCBvbGRhID0gYTtcbiAgICBjb25zdCBvbGRiID0gYjtcbiAgICBjb25zdCBvbGRjID0gYztcbiAgICBjb25zdCBvbGRkID0gZDtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgYSA9IHNhZmVBZGQoYSwgb2xkYSk7XG4gICAgYiA9IHNhZmVBZGQoYiwgb2xkYik7XG4gICAgYyA9IHNhZmVBZGQoYywgb2xkYyk7XG4gICAgZCA9IHNhZmVBZGQoZCwgb2xkZCk7XG4gIH1cblxuICByZXR1cm4gW2EsIGIsIGMsIGRdO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgYnl0ZXMgdG8gYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3Jkc1xuICogQ2hhcmFjdGVycyA+MjU1IGhhdmUgdGhlaXIgaGlnaC1ieXRlIHNpbGVudGx5IGlnbm9yZWQuXG4gKi9cblxuXG5mdW5jdGlvbiBieXRlc1RvV29yZHMoaW5wdXQpIHtcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGxlbmd0aDggPSBpbnB1dC5sZW5ndGggKiA4O1xuICBjb25zdCBvdXRwdXQgPSBuZXcgVWludDMyQXJyYXkoZ2V0T3V0cHV0TGVuZ3RoKGxlbmd0aDgpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDg7IGkgKz0gOCkge1xuICAgIG91dHB1dFtpID4+IDVdIHw9IChpbnB1dFtpIC8gOF0gJiAweGZmKSA8PCBpICUgMzI7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLypcbiAqIEFkZCBpbnRlZ2Vycywgd3JhcHBpbmcgYXQgMl4zMi4gVGhpcyB1c2VzIDE2LWJpdCBvcGVyYXRpb25zIGludGVybmFsbHlcbiAqIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gc29tZSBKUyBpbnRlcnByZXRlcnMuXG4gKi9cblxuXG5mdW5jdGlvbiBzYWZlQWRkKHgsIHkpIHtcbiAgY29uc3QgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpO1xuICBjb25zdCBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDB4ZmZmZjtcbn1cbi8qXG4gKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gKi9cblxuXG5mdW5jdGlvbiBiaXRSb3RhdGVMZWZ0KG51bSwgY250KSB7XG4gIHJldHVybiBudW0gPDwgY250IHwgbnVtID4+PiAzMiAtIGNudDtcbn1cbi8qXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICovXG5cblxuZnVuY3Rpb24gbWQ1Y21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgYyB8IH5iICYgZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgZCB8IGMgJiB+ZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gbWQ1O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5jb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xudmFyIF9kZWZhdWx0ID0ge1xuICByYW5kb21VVUlEXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHBhcnNlKHV1aWQpIHtcbiAgaWYgKCEoMCwgX3ZhbGlkYXRlLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIGxldCB2O1xuICBjb25zdCBhcnIgPSBuZXcgVWludDhBcnJheSgxNik7IC8vIFBhcnNlICMjIyMjIyMjLS4uLi4tLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFyclswXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgwLCA4KSwgMTYpKSA+Pj4gMjQ7XG4gIGFyclsxXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzJdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclszXSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0jIyMjLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoOSwgMTMpLCAxNikpID4+PiA4O1xuICBhcnJbNV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0jIyMjLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzZdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxOCksIDE2KSkgPj4+IDg7XG4gIGFycls3XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tIyMjIy0uLi4uLi4uLi4uLi5cblxuICBhcnJbOF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTksIDIzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzldID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0uLi4uLSMjIyMjIyMjIyMjI1xuICAvLyAoVXNlIFwiL1wiIHRvIGF2b2lkIDMyLWJpdCB0cnVuY2F0aW9uIHdoZW4gYml0LXNoaWZ0aW5nIGhpZ2gtb3JkZXIgYnl0ZXMpXG5cbiAgYXJyWzEwXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgyNCwgMzYpLCAxNikpIC8gMHgxMDAwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMV0gPSB2IC8gMHgxMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTJdID0gdiA+Pj4gMjQgJiAweGZmO1xuICBhcnJbMTNdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMTRdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclsxNV0gPSB2ICYgMHhmZjtcbiAgcmV0dXJuIGFycjtcbn1cblxudmFyIF9kZWZhdWx0ID0gcGFyc2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcm5nO1xuLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5cbmZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4vLyBBZGFwdGVkIGZyb20gQ2hyaXMgVmVuZXNzJyBTSEExIGNvZGUgYXRcbi8vIGh0dHA6Ly93d3cubW92YWJsZS10eXBlLmNvLnVrL3NjcmlwdHMvc2hhMS5odG1sXG5mdW5jdGlvbiBmKHMsIHgsIHksIHopIHtcbiAgc3dpdGNoIChzKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIHggJiB5IF4gfnggJiB6O1xuXG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcblxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiB4ICYgeSBeIHggJiB6IF4geSAmIHo7XG5cbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuICB9XG59XG5cbmZ1bmN0aW9uIFJPVEwoeCwgbikge1xuICByZXR1cm4geCA8PCBuIHwgeCA+Pj4gMzIgLSBuO1xufVxuXG5mdW5jdGlvbiBzaGExKGJ5dGVzKSB7XG4gIGNvbnN0IEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gIGNvbnN0IEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG5cbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXMucHVzaChtc2cuY2hhckNvZGVBdChpKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGJ5dGVzKSkge1xuICAgIC8vIENvbnZlcnQgQXJyYXktbGlrZSB0byBBcnJheVxuICAgIGJ5dGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYnl0ZXMpO1xuICB9XG5cbiAgYnl0ZXMucHVzaCgweDgwKTtcbiAgY29uc3QgbCA9IGJ5dGVzLmxlbmd0aCAvIDQgKyAyO1xuICBjb25zdCBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gIGNvbnN0IE0gPSBuZXcgQXJyYXkoTik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICBjb25zdCBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICBhcnJbal0gPSBieXRlc1tpICogNjQgKyBqICogNF0gPDwgMjQgfCBieXRlc1tpICogNjQgKyBqICogNCArIDFdIDw8IDE2IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAyXSA8PCA4IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAzXTtcbiAgICB9XG5cbiAgICBNW2ldID0gYXJyO1xuICB9XG5cbiAgTVtOIC0gMV1bMTRdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAvIE1hdGgucG93KDIsIDMyKTtcbiAgTVtOIC0gMV1bMTRdID0gTWF0aC5mbG9vcihNW04gLSAxXVsxNF0pO1xuICBNW04gLSAxXVsxNV0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4ICYgMHhmZmZmZmZmZjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IE47ICsraSkge1xuICAgIGNvbnN0IFcgPSBuZXcgVWludDMyQXJyYXkoODApO1xuXG4gICAgZm9yIChsZXQgdCA9IDA7IHQgPCAxNjsgKyt0KSB7XG4gICAgICBXW3RdID0gTVtpXVt0XTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCB0ID0gMTY7IHQgPCA4MDsgKyt0KSB7XG4gICAgICBXW3RdID0gUk9UTChXW3QgLSAzXSBeIFdbdCAtIDhdIF4gV1t0IC0gMTRdIF4gV1t0IC0gMTZdLCAxKTtcbiAgICB9XG5cbiAgICBsZXQgYSA9IEhbMF07XG4gICAgbGV0IGIgPSBIWzFdO1xuICAgIGxldCBjID0gSFsyXTtcbiAgICBsZXQgZCA9IEhbM107XG4gICAgbGV0IGUgPSBIWzRdO1xuXG4gICAgZm9yIChsZXQgdCA9IDA7IHQgPCA4MDsgKyt0KSB7XG4gICAgICBjb25zdCBzID0gTWF0aC5mbG9vcih0IC8gMjApO1xuICAgICAgY29uc3QgVCA9IFJPVEwoYSwgNSkgKyBmKHMsIGIsIGMsIGQpICsgZSArIEtbc10gKyBXW3RdID4+PiAwO1xuICAgICAgZSA9IGQ7XG4gICAgICBkID0gYztcbiAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IFQ7XG4gICAgfVxuXG4gICAgSFswXSA9IEhbMF0gKyBhID4+PiAwO1xuICAgIEhbMV0gPSBIWzFdICsgYiA+Pj4gMDtcbiAgICBIWzJdID0gSFsyXSArIGMgPj4+IDA7XG4gICAgSFszXSA9IEhbM10gKyBkID4+PiAwO1xuICAgIEhbNF0gPSBIWzRdICsgZSA+Pj4gMDtcbiAgfVxuXG4gIHJldHVybiBbSFswXSA+PiAyNCAmIDB4ZmYsIEhbMF0gPj4gMTYgJiAweGZmLCBIWzBdID4+IDggJiAweGZmLCBIWzBdICYgMHhmZiwgSFsxXSA+PiAyNCAmIDB4ZmYsIEhbMV0gPj4gMTYgJiAweGZmLCBIWzFdID4+IDggJiAweGZmLCBIWzFdICYgMHhmZiwgSFsyXSA+PiAyNCAmIDB4ZmYsIEhbMl0gPj4gMTYgJiAweGZmLCBIWzJdID4+IDggJiAweGZmLCBIWzJdICYgMHhmZiwgSFszXSA+PiAyNCAmIDB4ZmYsIEhbM10gPj4gMTYgJiAweGZmLCBIWzNdID4+IDggJiAweGZmLCBIWzNdICYgMHhmZiwgSFs0XSA+PiAyNCAmIDB4ZmYsIEhbNF0gPj4gMTYgJiAweGZmLCBIWzRdID4+IDggJiAweGZmLCBIWzRdICYgMHhmZl07XG59XG5cbnZhciBfZGVmYXVsdCA9IHNoYTE7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbmV4cG9ydHMudW5zYWZlU3RyaW5naWZ5ID0gdW5zYWZlU3RyaW5naWZ5O1xuXG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxudmFyIF9kZWZhdWx0ID0gc3RyaW5naWZ5O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcm5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ybmcuanNcIikpO1xuXG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxubGV0IF9ub2RlSWQ7XG5cbmxldCBfY2xvY2tzZXE7IC8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxuXG5cbmxldCBfbGFzdE1TZWNzID0gMDtcbmxldCBfbGFzdE5TZWNzID0gMDsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCBmb3IgQVBJIGRldGFpbHNcblxuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgbGV0IGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIGNvbnN0IGIgPSBidWYgfHwgbmV3IEFycmF5KDE2KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxldCBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIGxldCBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7IC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuXG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlZWRCeXRlcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nLmRlZmF1bHQpKCk7XG5cbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW3NlZWRCeXRlc1swXSB8IDB4MDEsIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXTtcbiAgICB9XG5cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH0gLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG5cblxuICBsZXQgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogRGF0ZS5ub3coKTsgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuXG4gIGxldCBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTsgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuXG4gIGNvbnN0IGR0ID0gbXNlY3MgLSBfbGFzdE1TZWNzICsgKG5zZWNzIC0gX2xhc3ROU2VjcykgLyAxMDAwMDsgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH0gLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuXG5cbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH0gLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuXG5cbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXVpZC52MSgpOiBDYW4ndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWNcIik7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7IC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwOyAvLyBgdGltZV9sb3dgXG5cbiAgY29uc3QgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmOyAvLyBgdGltZV9taWRgXG5cbiAgY29uc3QgdG1oID0gbXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmOyAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjsgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG5cbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwOyAvLyBgY2xvY2tfc2VxX2xvd2BcblxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7IC8vIGBub2RlYFxuXG4gIGZvciAobGV0IG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKGIpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2MTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YzNS5qc1wiKSk7XG5cbnZhciBfbWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21kNS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IHYzID0gKDAsIF92LmRlZmF1bHQpKCd2MycsIDB4MzAsIF9tZC5kZWZhdWx0KTtcbnZhciBfZGVmYXVsdCA9IHYzO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gdm9pZCAwO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjM1O1xuXG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcblxudmFyIF9wYXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGFyc2UuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgY29uc3QgYnl0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5jb25zdCBETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydHMuRE5TID0gRE5TO1xuY29uc3QgVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnRzLlVSTCA9IFVSTDtcblxuZnVuY3Rpb24gdjM1KG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBfbmFtZXNwYWNlO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSAoMCwgX3BhcnNlLmRlZmF1bHQpKG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaWYgKCgoX25hbWVzcGFjZSA9IG5hbWVzcGFjZSkgPT09IG51bGwgfHwgX25hbWVzcGFjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25hbWVzcGFjZS5sZW5ndGgpICE9PSAxNikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfSAvLyBDb21wdXRlIGhhc2ggb2YgbmFtZXNwYWNlIGFuZCB2YWx1ZSwgUGVyIDQuM1xuICAgIC8vIEZ1dHVyZTogVXNlIHNwcmVhZCBzeW50YXggd2hlbiBzdXBwb3J0ZWQgb24gYWxsIHBsYXRmb3JtcywgZS5nLiBgYnl0ZXMgPVxuICAgIC8vIGhhc2hmdW5jKFsuLi5uYW1lc3BhY2UsIC4uLiB2YWx1ZV0pYFxuXG5cbiAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZSk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlLCBuYW1lc3BhY2UubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2hmdW5jKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gICAgaWYgKGJ1Zikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfbmF0aXZlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9uYXRpdmUuanNcIikpO1xuXG52YXIgX3JuZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm5nLmpzXCIpKTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChfbmF0aXZlLmRlZmF1bHQucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIF9uYXRpdmUuZGVmYXVsdC5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcuZGVmYXVsdCkoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShybmRzKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdjQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MzUuanNcIikpO1xuXG52YXIgX3NoYSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2hhMS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IHY1ID0gKDAsIF92LmRlZmF1bHQpKCd2NScsIDB4NTAsIF9zaGEuZGVmYXVsdCk7XG52YXIgX2RlZmF1bHQgPSB2NTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlZ2V4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZWdleC5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBfcmVnZXguZGVmYXVsdC50ZXN0KHV1aWQpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2YWxpZGF0ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZlcnNpb24odXVpZCkge1xuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE1KSwgMTYpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2ZXJzaW9uO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiaW1wb3J0IGRvbUNyZWF0b3IgZnJvbSAnLi9kb20tY3JlYXRvcic7XG5pbXBvcnQgVG9kbywgeyBzZXRUaW1lWm9uZSB9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgcG0gZnJvbSAnLi9pbml0aWFsUE0nO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuY29uc3QgcHJvalVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuY29uc3QgdG9kb1VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbGlzdCcpO1xuY29uc3QgYWRkUHJvakJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdCcpO1xuY29uc3QgcHJvakZvcm1PdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybS1vdmVybGF5Jyk7XG5jb25zdCBwcm9qRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0nKTtcbmNvbnN0IHByb2pOYW1lRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG5jb25zdCBjbGVhclByb2pCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xlYXItYWxsLXByb2plY3RzJyk7XG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10b2RvJyk7XG5jb25zdCBjbGVhclRvZG9zQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NsZWFyLWFsbC10b2RvcycpO1xuY29uc3QgdG9kb0Zvcm1PdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybS1vdmVybGF5Jyk7XG5jb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWZvcm0nKTtcbmNvbnN0IHRvZG9UaXRsZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tdGl0bGUnKTtcbmNvbnN0IHRvZG9EZXNjRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kZXNjJyk7XG5jb25zdCB0b2RvRGF0ZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGF0ZScpO1xuY29uc3QgdG9kb1ByaW9yaXR5RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1wcmlvcml0eScpO1xuY29uc3QgY2FuY2VsUHJvakZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLXByb2otYnRuJyk7XG5jb25zdCBjYW5jZWxUb2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtdG9kby1idG4nKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcicpO1xuY29uc3Qgc2lkZWJhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyLWJ0bicpO1xuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWNvbnRhaW5lcicpO1xuY29uc3Qgc2hvd0NvbXBsZXRlZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LWNvbXBsZXRlZCcpO1xuY29uc3QgY3VyclByb2pOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtcHJvamVjdC1uYW1lJyk7XG5jb25zdCBzZWFyY2hGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtYmFyJyk7XG5jb25zdCBkcm9wZG93bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcGRvd24tbWVudScpO1xuXG5jb25zdCBFRElUID0gMCxcbiAgQUREID0gMTtcblxubGV0IHByb2pUb0VkaXQgPSBudWxsO1xubGV0IHByb2plY3RNb2RlID0gQUREO1xubGV0IHNlbGVjdGVkVG9kbyA9IG51bGw7XG5sZXQgdG9kb01vZGUgPSBBREQ7XG5sZXQgc2hvd0NvbXBsZXRlZCA9IGZhbHNlO1xuXG5jb25zdCBjbGVhclByb2plY3RzID0gKCkgPT4ge1xuICBpZiAocHJvalVsKSB7XG4gICAgcHJvalVsLnRleHRDb250ZW50ID0gJyc7XG4gIH1cbn07XG5cbmNvbnN0IGNsZWFyVG9kb3MgPSAoKSA9PiB7XG4gIGlmICh0b2RvVWwpIHtcbiAgICB0b2RvVWwudGV4dENvbnRlbnQgPSAnJztcbiAgfVxufTtcblxuY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xuICBpZiAocG0uaXNFbXB0eSgpKSB7XG4gICAgY3VyclByb2pOYW1lLnRleHRDb250ZW50ID0gJyc7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAobGV0IHByb2plY3Qgb2YgcG0ucHJvamVjdHMpIHtcbiAgICBwcm9qVWwuYXBwZW5kQ2hpbGQoZG9tQ3JlYXRvci5jcmVhdGVQcm9qZWN0KHByb2plY3QsIHBtKSk7XG4gIH1cbiAgaWYgKHBtLmN1cnJQcm9qZWN0KSBjdXJyUHJvak5hbWUudGV4dENvbnRlbnQgPSBwbS5jdXJyUHJvamVjdC5uYW1lO1xufTtcblxuY29uc3Qgc2hvd1RvZG9zID0gKHRvZG9zKSA9PiB7XG4gIGlmICghdG9kb1VsKSByZXR1cm47XG4gIGZvciAobGV0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICB0b2RvVWwuYXBwZW5kQ2hpbGQoZG9tQ3JlYXRvci5jcmVhdGVUb2RvKHRvZG8pKTtcbiAgfVxufTtcblxuY29uc3QgcmVmcmVzaFByb2plY3RzID0gKCkgPT4ge1xuICBjbGVhclByb2plY3RzKCk7XG4gIHNob3dQcm9qZWN0cygpO1xufTtcblxuY29uc3QgcmVmcmVzaFRvZG9zID0gKCkgPT4ge1xuICBjbGVhclRvZG9zKCk7XG4gIGlmIChwbS5jdXJyUHJvamVjdCkge1xuICAgIGlmIChzaG93Q29tcGxldGVkKSBzaG93VG9kb3MocG0uY3VyclByb2plY3QuYWxsVG9kb3MpO1xuICAgIGVsc2Ugc2hvd1RvZG9zKHBtLmN1cnJQcm9qZWN0LnVuY2hlY2tlZFRvZG9zKTtcbiAgfVxufTtcblxuY29uc3QgYWN0aXZhdGVBZGRQcm9qID0gKCkgPT4ge1xuICBhZGRQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlJykpIHtcbiAgICAgIHNpZGViYXJCdG4uY2xpY2soKTtcbiAgICB9XG4gICAgcHJvamVjdE1vZGUgPSBBREQ7XG4gICAgcHJvakZvcm1PdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgcHJvak5hbWVGaWVsZC52YWx1ZSA9ICcnO1xuICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZVByb2pGb3JtU3VibWl0ID0gKCkgPT4ge1xuICBsZXQgcHJvak5hbWUgPSBwcm9qTmFtZUZpZWxkLnZhbHVlO1xuICBpZiAocHJvamVjdE1vZGUgPT09IEFERCkge1xuICAgIGlmIChwcm9qTmFtZSAhPT0gJycpIHBtLmFkZFByb2plY3QobmV3IFByb2plY3QobnVsbCwgcHJvak5hbWUpKTtcbiAgICBlbHNlIHBtLmFkZFByb2plY3QobmV3IFByb2plY3QoKSk7XG4gIH0gZWxzZSBpZiAocHJvamVjdE1vZGUgPT09IEVESVQpIHtcbiAgICBpZiAocHJvalRvRWRpdCkge1xuICAgICAgcG0uZWRpdFByb2plY3QocHJvalRvRWRpdC5pZCwgcHJvak5hbWUpO1xuICAgICAgcHJvalRvRWRpdCA9IG51bGw7XG4gICAgfVxuICB9XG4gIHByb2pGb3JtT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZWZyZXNoUHJvamVjdHMoKTtcbiAgcmVmcmVzaFRvZG9zKCk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZVByb2pGb3JtID0gKCkgPT4ge1xuICBwcm9qRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBoYW5kbGVQcm9qRm9ybVN1Ym1pdCgpO1xuICB9KTtcblxuICBwcm9qRm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaGFuZGxlUHJvakZvcm1TdWJtaXQoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVDYW5jZWxQcm9qRm9ybSA9ICgpID0+IHtcbiAgY2FuY2VsUHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwcm9qRm9ybU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZVByb2pFdmVudCA9ICgpID0+IHtcbiAgcHJvalVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpICYmIHRhcmdldC5pZCkge1xuICAgICAgcG0uY3VyclByb2plY3QgPSBwbS5nZXRQcm9qZWN0KHRhcmdldC5pZCk7XG4gICAgICByZWZyZXNoUHJvamVjdHMoKTtcbiAgICAgIHJlZnJlc2hUb2RvcygpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZUNsZWFyQWxsUHJvaiA9ICgpID0+IHtcbiAgY2xlYXJQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwbS5jbGVhckFsbFByb2plY3RzKCk7XG4gICAgcmVmcmVzaFByb2plY3RzKCk7XG4gICAgcmVmcmVzaFRvZG9zKCk7XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVDbGVhclByb2ogPSAoKSA9PiB7XG4gIHByb2pVbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKFxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xlYXItcHJvamVjdCcpIHx8XG4gICAgICAodGFyZ2V0LnBhcmVudE5vZGUgIT09IG51bGwgJiZcbiAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGVhci1wcm9qZWN0JykpXG4gICAgKSB7XG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xlYXItcHJvamVjdCcpKVxuICAgICAgICBwbS5yZW1vdmVQcm9qZWN0KHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuICAgICAgZWxzZSBwbS5yZW1vdmVQcm9qZWN0KHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG4gICAgICByZWZyZXNoUHJvamVjdHMoKTtcbiAgICAgIHJlZnJlc2hUb2RvcygpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZUVkaXRQcm9qID0gKCkgPT4ge1xuICBwcm9qVWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmIChcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtcHJvamVjdCcpIHx8XG4gICAgICAodGFyZ2V0LnBhcmVudE5vZGUgIT09IG51bGwgJiZcbiAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXByb2plY3QnKSlcbiAgICApIHtcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXByb2plY3QnKSkge1xuICAgICAgICBwcm9qVG9FZGl0ID0gcG0uZ2V0UHJvamVjdCh0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2pUb0VkaXQgPSBwbS5nZXRQcm9qZWN0KHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG4gICAgICB9XG4gICAgICBwcm9qZWN0TW9kZSA9IEVESVQ7XG4gICAgICBwcm9qRm9ybU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGxldCBvbGROYW1lID0gcHJvalRvRWRpdC5uYW1lO1xuICAgICAgcHJvak5hbWVGaWVsZC52YWx1ZSA9IG9sZE5hbWU7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHNob3dUb2RvRGV0YWlsID0gKHRvZG9MaSkgPT4ge1xuICB0b2RvTGkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2xpZ2h0IHBpbmsnO1xuICBjb25zdCBkZXNjUCA9IHRvZG9MaS5xdWVyeVNlbGVjdG9yKCcudG9kby1kZXNjJyk7XG4gIGNvbnN0IGRhdGVQID0gdG9kb0xpLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRhdGUnKTtcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRlc2NQKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgIGRlc2NQLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZGF0ZVAuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfSBlbHNlIHtcbiAgICBkZXNjUC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRhdGVQLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn07XG5cbmNvbnN0IGFjdGl2YXRlVG9kb0V2ZW50ID0gKCkgPT4ge1xuICB0b2RvVWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHRvZG8gPSB0YXJnZXQuY2xvc2VzdCgnLnRvZG8nKTtcbiAgICBjb25zdCB0b2RvVGl0bGUgPSB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCcudG9kby10aXRsZScpO1xuICAgIGNvbnN0IGlzQ2hlY2tib3ggPSB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JztcbiAgICBjb25zdCBpc0J1dHRvbiA9IHRhcmdldC50YWdOYW1lID09PSAnQlVUVE9OJztcbiAgICBjb25zdCBpc1NWRyA9IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcblxuICAgIGlmICgodG9kbyB8fCB0b2RvVGl0bGUpICYmICFpc0NoZWNrYm94ICYmICFpc0J1dHRvbiAmJiAhaXNTVkcpIHtcbiAgICAgIGxldCB0b2RvTGkgPSB0b2RvIHx8IHRvZG9UaXRsZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIHNob3dUb2RvRGV0YWlsKHRvZG9MaSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlQ2hlY2tUb2RvID0gKCkgPT4ge1xuICB0b2RvVWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjay10b2RvJykpIHtcbiAgICAgIHBtLnRvZ2dsZUNoZWNrVG9kbyh0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuICAgICAgcmVmcmVzaFRvZG9zKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlQ2xlYXJUb2RvID0gKCkgPT4ge1xuICB0b2RvVWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGVhci10b2RvJykpIHtcbiAgICAgIHBtLnJlbW92ZVRvZG8odGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcbiAgICAgIHJlZnJlc2hUb2RvcygpO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGVhci10b2RvJykpIHtcbiAgICAgIHBtLnJlbW92ZVRvZG8odGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuICAgICAgcmVmcmVzaFRvZG9zKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlQWRkVG9kbyA9ICgpID0+IHtcbiAgYWRkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgdG9kb01vZGUgPSBBREQ7XG4gICAgdG9kb0Zvcm1PdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgdG9kb1RpdGxlRmllbGQudmFsdWUgPSAnJztcbiAgICB0b2RvRGVzY0ZpZWxkLnZhbHVlID0gJyc7XG4gICAgdG9kb0RhdGVGaWVsZC52YWx1ZSA9IHNldFRpbWVab25lKCk7XG4gICAgdG9kb1ByaW9yaXR5RmllbGQudmFsdWUgPSAnTm9uZSc7XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVFZGl0VG9kbyA9ICgpID0+IHtcbiAgdG9kb1VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXRvZG8nKSB8fFxuICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXRvZG8nKVxuICAgICkge1xuICAgICAgdG9kb01vZGUgPSBFRElUO1xuICAgICAgdG9kb0Zvcm1PdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdC10b2RvJykpXG4gICAgICAgIHNlbGVjdGVkVG9kbyA9IHBtLmdldFRvZG8odGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcbiAgICAgIGVsc2Uge1xuICAgICAgICBzZWxlY3RlZFRvZG8gPSBwbS5nZXRUb2RvKFxuICAgICAgICAgIHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBvbGRUaXRsZSA9IHNlbGVjdGVkVG9kby50aXRsZTtcbiAgICAgIGNvbnN0IG9sZERlc2MgPSBzZWxlY3RlZFRvZG8uZGVzYztcbiAgICAgIGNvbnN0IG9sZERhdGUgPSBzZWxlY3RlZFRvZG8uZGF0ZTtcbiAgICAgIGNvbnN0IG9sZFByaW9yaXR5ID0gc2VsZWN0ZWRUb2RvLnByaW9yaXR5O1xuICAgICAgdG9kb1RpdGxlRmllbGQudmFsdWUgPSBvbGRUaXRsZTtcbiAgICAgIGlmIChvbGREZXNjICE9PSAnTm9uZScpIHRvZG9EZXNjRmllbGQudmFsdWUgPSBvbGREZXNjO1xuICAgICAgZWxzZSB0b2RvRGVzY0ZpZWxkLnZhbHVlID0gJyc7XG4gICAgICB0b2RvRGF0ZUZpZWxkLnZhbHVlID0gb2xkRGF0ZTtcbiAgICAgIHRvZG9Qcmlvcml0eUZpZWxkLnZhbHVlID0gb2xkUHJpb3JpdHk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZVRvZG9Gb3JtU3VibWl0ID0gKCkgPT4ge1xuICBsZXQgdGl0bGUgPSB0b2RvVGl0bGVGaWVsZC52YWx1ZTtcbiAgbGV0IGRlc2MgPSB0b2RvRGVzY0ZpZWxkLnZhbHVlO1xuICBsZXQgZGF0ZSA9IHRvZG9EYXRlRmllbGQudmFsdWU7XG4gIGxldCBwcmlvcml0eSA9IHRvZG9Qcmlvcml0eUZpZWxkLnZhbHVlO1xuICBpZiAodG9kb01vZGUgPT09IEFERCkge1xuICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG8obnVsbCwgdGl0bGUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcbiAgICBwbS5hZGRUb2RvKG5ld1RvZG8pO1xuICB9IGVsc2UgaWYgKHRvZG9Nb2RlID09PSBFRElUKSB7XG4gICAgaWYgKHNlbGVjdGVkVG9kbykge1xuICAgICAgZGVzYyA9IGRlc2MgPT09ICcnID8gJ05vbmUnIDogZGVzYztcbiAgICAgIHBtLmVkaXRUb2RvKHNlbGVjdGVkVG9kby5pZCwgdGl0bGUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcbiAgICAgIHNlbGVjdGVkVG9kbyA9IG51bGw7XG4gICAgfVxuICB9XG4gIHJlZnJlc2hUb2RvcygpO1xuICB0b2RvRm9ybU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn07XG5cbmNvbnN0IGFjdGl2YXRlVG9kb0Zvcm0gPSAoKSA9PiB7XG4gIHRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhhbmRsZVRvZG9Gb3JtU3VibWl0KCk7XG4gIH0pO1xuICB0b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoIWUuc2hpZnRLZXkgJiYgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgaGFuZGxlVG9kb0Zvcm1TdWJtaXQoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVDYW5jZWxUb2RvRm9ybSA9ICgpID0+IHtcbiAgY2FuY2VsVG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0b2RvRm9ybU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZVRvZG9Gb3JtVGV4dGJveCA9ICgpID0+IHtcbiAgdG9kb0Rlc2NGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5zaGlmdEtleSAmJiBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBjb25zdCBjdXJyZW50VmFsID0gdGhpcy52YWx1ZTtcbiAgICAgIGNvbnN0IGN1cnNvclBvcyA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICBjb25zdCBuZXdWYWwgPVxuICAgICAgICBjdXJyZW50VmFsLnN1YnN0cmluZygwLCBjdXJzb3JQb3MpICtcbiAgICAgICAgJ1xcbicgK1xuICAgICAgICBjdXJyZW50VmFsLnN1YnN0cmluZyhjdXJzb3JQb3MpO1xuICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbDtcbiAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLnNlbGVjdGlvbkVuZCA9IGN1cnNvclBvcyArIDE7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVDbGVhckFsbFRvZG9zID0gKCkgPT4ge1xuICBjbGVhclRvZG9zQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwbS5jbGVhckN1cnJlbnRQcm9qZWN0KCk7XG4gICAgcmVmcmVzaFRvZG9zKCk7XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVTaWRlYmFyQnRuID0gKCkgPT4ge1xuICBzaWRlYmFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoXG4gICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwcm9qZWN0Q29udGFpbmVyKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT09XG4gICAgICAnbm9uZSdcbiAgICApIHtcbiAgICAgIHByb2plY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2UnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgdG9nZ2xlU2hvd0NvbXBsZXRlZGJ0biA9ICgpID0+IHtcbiAgaWYgKHNob3dDb21wbGV0ZWQpIHtcbiAgICBzaG93Q29tcGxldGVkQnRuLnRleHRDb250ZW50ID0gJ0hpZGUgQ29tcGxldGVkJztcbiAgfSBlbHNlIHtcbiAgICBzaG93Q29tcGxldGVkQnRuLnRleHRDb250ZW50ID0gJ1Nob3cgQ29tcGxldGVkJztcbiAgfVxufTtcblxuY29uc3QgYWN0aXZhdGVTaG93Q29tcGxldGVkID0gKCkgPT4ge1xuICBzaG93Q29tcGxldGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzaG93Q29tcGxldGVkID0gIXNob3dDb21wbGV0ZWQ7XG4gICAgdG9nZ2xlU2hvd0NvbXBsZXRlZGJ0bigpO1xuICAgIHJlZnJlc2hUb2RvcygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlU2VhcmNoQmFyID0gKCkgPT4ge1xuICBzZWFyY2hGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBkcm9wZG93bk1lbnUudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBzZWFyY2hTdHIgPSBzZWFyY2hGaWVsZC52YWx1ZTtcbiAgICBpZiAoc2VhcmNoU3RyKSB7XG4gICAgICBsZXQgbWF0Y2hlcyA9IHBtLnNlYXJjaFRvZG9CeVRpdGxlKHNlYXJjaFN0cik7XG4gICAgICBpZiAobWF0Y2hlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgZm9yIChsZXQgbWF0Y2ggb2YgbWF0Y2hlcykge1xuICAgICAgICAgIGRyb3Bkb3duTWVudS5hcHBlbmRDaGlsZChkb21DcmVhdG9yLmNyZWF0ZVJlc3VsdERpdihtYXRjaCkpO1xuICAgICAgICB9XG4gICAgICAgIGRyb3Bkb3duTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgfSBlbHNlIGRyb3Bkb3duTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSBkcm9wZG93bk1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZURyb3Bkb3duTWVudSA9ICgpID0+IHtcbiAgZHJvcGRvd25NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VhcmNoLXJlc3VsdCcpKSB7XG4gICAgICBsZXQgcHJvaklkID0gdGFyZ2V0LnZhbHVlLnNwbGl0KCc6JylbMF07XG4gICAgICBsZXQgdG9kb0lkID0gdGFyZ2V0LnZhbHVlLnNwbGl0KCc6JylbMV07XG4gICAgICBwbS5jdXJyUHJvamVjdCA9IHBtLmdldFByb2plY3QocHJvaklkKTtcbiAgICAgIGlmIChwbS5nZXRUb2RvKHRvZG9JZCkuY2hlY2spIHNob3dDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgdG9nZ2xlU2hvd0NvbXBsZXRlZGJ0bigpO1xuICAgICAgcmVmcmVzaFByb2plY3RzKCk7XG4gICAgICByZWZyZXNoVG9kb3MoKTtcbiAgICAgIGNvbnN0IHRvZG9MaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RvZG9JZH1gKTtcbiAgICAgIHNob3dUb2RvRGV0YWlsKHRvZG9MaSk7XG4gICAgfVxuICAgIGRyb3Bkb3duTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHNlYXJjaEZpZWxkLnZhbHVlID0gJyc7XG4gIH0pO1xufTtcblxuY29uc3QgaGlkZURyb3BEb3duTWVudSA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmIChcbiAgICAgICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWFyY2gtcmVzdWx0JykgJiZcbiAgICAgIHRhcmdldC5pZCAhPT0gJ3NlYXJjaC1iYXInICYmXG4gICAgICB0YXJnZXQuaWQgIT09ICdkcm9wZG93bi1tZW51J1xuICAgIClcbiAgICAgIGRyb3Bkb3duTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHNlYXJjaEZpZWxkLnZhbHVlID0gJyc7XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVVSSA9ICgpID0+IHtcbiAgYWN0aXZhdGVBZGRQcm9qKCk7XG4gIGFjdGl2YXRlQ2FuY2VsUHJvakZvcm0oKTtcbiAgYWN0aXZhdGVQcm9qRm9ybSgpO1xuICBhY3RpdmF0ZVByb2pFdmVudCgpO1xuICBhY3RpdmF0ZUNsZWFyQWxsUHJvaigpO1xuICBhY3RpdmF0ZUNsZWFyUHJvaigpO1xuICBhY3RpdmF0ZUVkaXRQcm9qKCk7XG4gIGFjdGl2YXRlVG9kb0V2ZW50KCk7XG4gIGFjdGl2YXRlQ2hlY2tUb2RvKCk7XG4gIGFjdGl2YXRlQ2xlYXJUb2RvKCk7XG4gIGFjdGl2YXRlQWRkVG9kbygpO1xuICBhY3RpdmF0ZUVkaXRUb2RvKCk7XG4gIGFjdGl2YXRlVG9kb0Zvcm0oKTtcbiAgYWN0aXZhdGVDYW5jZWxUb2RvRm9ybSgpO1xuICBhY3RpdmF0ZUNsZWFyQWxsVG9kb3MoKTtcbiAgYWN0aXZhdGVTaWRlYmFyQnRuKCk7XG4gIGFjdGl2YXRlU2hvd0NvbXBsZXRlZCgpO1xuICBhY3RpdmF0ZVNlYXJjaEJhcigpO1xuICBhY3RpdmF0ZURyb3Bkb3duTWVudSgpO1xuICBoaWRlRHJvcERvd25NZW51KCk7XG4gIGFjdGl2YXRlVG9kb0Zvcm1UZXh0Ym94KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlZnJlc2hQcm9qZWN0cyxcbiAgcmVmcmVzaFRvZG9zLFxuICBhY3RpdmF0ZVVJLFxufTtcbiIsImNvbnN0IFNWR19ERUZBVUxUX0NMQVNTID0gJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnO1xuY29uc3QgY3JlYXRlUHJvamVjdCA9IChwcm9qZWN0LCBwbSkgPT4ge1xuICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICBsaS5pZCA9IGAke3Byb2plY3QuaWR9YDtcbiAgbGkuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEJ0bnNEaXYoKSk7XG4gIGlmIChwbS5jdXJyUHJvamVjdCAmJiBsaS5pZCA9PT0gcG0uY3VyclByb2plY3QuaWQpIHtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICB9XG4gIHJldHVybiBsaTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RCdG5zRGl2ID0gKCkgPT4ge1xuICBjb25zdCBkaXYgPSBjcmVhdGVEaXZUYWcoJ3Byb2plY3QtYnRucycpO1xuICBjb25zdCBlZGl0QnRuID0gY3JlYXRlQnRuVGFnKCdlZGl0LXByb2plY3QnLCAnZWRpdF9ub3RlJywgJ3Byb2otaWNvbnMnKTtcbiAgY29uc3QgY2xlYXJCdG4gPSBjcmVhdGVCdG5UYWcoJ2NsZWFyLXByb2plY3QnLCAnY2xvc2UnLCAncHJvai1pY29ucycpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gIGRpdi5hcHBlbmRDaGlsZChjbGVhckJ0bik7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBjcmVhdGVUb2RvID0gKHRvZG8pID0+IHtcbiAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICBsaS5pZCA9IGAke3RvZG8uaWR9YDtcbiAgY29uc3QgdXBwZXJEaXYgPSBjcmVhdGVEaXZUYWcoJ3RvZG8tdXBwZXInKTtcbiAgdXBwZXJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mb0Rpdih0b2RvKSk7XG4gIHVwcGVyRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9CdG5zRGl2KCkpO1xuICBsaS5hcHBlbmRDaGlsZCh1cHBlckRpdik7XG4gIGNvbnN0IGxvd2VyRGl2ID0gY3JlYXRlRGl2VGFnKCd0b2RvLWxvd2VyJyk7XG4gIGxvd2VyRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9EZXRhaWxzRGl2KHRvZG8pKTtcbiAgbGkuYXBwZW5kQ2hpbGQobG93ZXJEaXYpO1xuICBpZiAodG9kby5jaGVjaykgbGkuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICByZXR1cm4gbGk7XG59O1xuXG5jb25zdCBjcmVhdGVJbmZvRGl2ID0gKHRvZG8pID0+IHtcbiAgY29uc3QgZGl2ID0gY3JlYXRlRGl2VGFnKCd0b2RvLWluZm8nKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9DaGVjayh0b2RvKSk7XG4gIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVUb2RvUHJpb3JpdHkodG9kbykpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU3BhblRhZyh0b2RvLnRpdGxlLCAndG9kby10aXRsZScpKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvZG9CdG5zRGl2ID0gKCkgPT4ge1xuICBjb25zdCBkaXYgPSBjcmVhdGVEaXZUYWcoJ3RvZG8tYnRucycpO1xuICBjb25zdCBlZGl0QnRuID0gY3JlYXRlQnRuVGFnKCdlZGl0LXRvZG8nLCAnZWRpdF9ub3RlJywgJ3RvZG8taWNvbnMnKTtcbiAgY29uc3QgY2xvc2VCdG4gPSBjcmVhdGVCdG5UYWcoJ2NsZWFyLXRvZG8nLCAnY2xvc2UnLCAndG9kby1pY29ucycpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gIGRpdi5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBjcmVhdGVUb2RvRGV0YWlsc0RpdiA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdlRhZygndG9kby1kZXRhaWxzJyk7XG4gIGNvbnN0IGRlc2MgPSBjcmVhdGVQVGFnKGBEZXNjcmlwdGlvbjpcXHQke3RvZG8uZGVzY31gLCAndG9kby1kZXNjJyk7XG4gIGNvbnN0IGRhdGUgPSBjcmVhdGVQVGFnKGBEdWUgZGF0ZTpcXHQke3RvZG8uZGF0ZX1gLCAndG9kby1kYXRlJyk7XG4gIGRpdi5hcHBlbmRDaGlsZChkZXNjKTtcbiAgZGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgY3JlYXRlVG9kb0NoZWNrID0gKHRvZG8pID0+IHtcbiAgbGV0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY2hlY2sudHlwZSA9ICdjaGVja2JveCc7XG4gIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLXRvZG8nKTtcbiAgY2hlY2suY2hlY2tlZCA9IHRvZG8uY2hlY2s7XG4gIHJldHVybiBjaGVjaztcbn07XG5cbmNvbnN0IGNyZWF0ZVRvZG9Qcmlvcml0eSA9ICh0b2RvKSA9PiB7XG4gIGxldCBwcmlvcml0eTtcbiAgaWYgKHRvZG8ucHJpb3JpdHkgPT09ICdOb25lJykgcHJpb3JpdHkgPSBjcmVhdGVTcGFuVGFnKCcnLCAndG9kby1wcmlvcml0eScpO1xuICBlbHNlIHByaW9yaXR5ID0gY3JlYXRlU3BhblRhZyh0b2RvLnByaW9yaXR5LCAndG9kby1wcmlvcml0eScpO1xuICByZXR1cm4gcHJpb3JpdHk7XG59O1xuXG5jb25zdCBjcmVhdGVSZXN1bHREaXYgPSAobWF0Y2gpID0+IHtcbiAgY29uc3Qgb3B0aW9uID0gY3JlYXRlRGl2VGFnKFxuICAgICdzZWFyY2gtcmVzdWx0JyxcbiAgICBgJHttYXRjaC5tYXRjaGVkUHJvai5pZH06JHttYXRjaC5tYXRjaGVkVG9kby5pZH1gXG4gICk7XG5cbiAgY29uc3QgdG9kb1RpdGxlID0gY3JlYXRlUFRhZyhtYXRjaC5tYXRjaGVkVG9kby50aXRsZSwgJ21hdGNoZWQtdG9kbycpO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGNyZWF0ZVBUYWcobWF0Y2gubWF0Y2hlZFByb2oubmFtZSwgJ21hdGNoZWQtcHJvamVjdCcpO1xuXG4gIG9wdGlvbi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICBvcHRpb24uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gIHJldHVybiBvcHRpb247XG59O1xuXG5jb25zdCBjcmVhdGVTVkdTcGFuVGFnID0gKHRleHQsIGRlZmF1bHRDbGFzcywgY3VzdG9tQ2xhc3MpID0+IHtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKGRlZmF1bHRDbGFzcywgY3VzdG9tQ2xhc3MpO1xuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIHNwYW47XG59O1xuXG5jb25zdCBjcmVhdGVQVGFnID0gKHRleHQsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgcC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBwO1xufTtcblxuY29uc3QgY3JlYXRlU3BhblRhZyA9ICh0ZXh0LCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gc3Bhbjtcbn07XG5cbmNvbnN0IGNyZWF0ZUJ0blRhZyA9IChjbGFzc05hbWUsIGljb25OYW1lLCBzdmdDbGFzc05hbWUpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIGNvbnN0IGljb24gPSBjcmVhdGVTVkdTcGFuVGFnKGljb25OYW1lLCBTVkdfREVGQVVMVF9DTEFTUywgc3ZnQ2xhc3NOYW1lKTtcbiAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuY29uc3QgY3JlYXRlRGl2VGFnID0gKGNsYXNzTmFtZSwgdmFsKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgZGl2LnZhbHVlID0gdmFsID8gdmFsIDogJyc7XG4gIHJldHVybiBkaXY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZVByb2plY3QsXG4gIGNyZWF0ZVRvZG8sXG4gIGNyZWF0ZVJlc3VsdERpdixcbn07XG4iLCIvLyBpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHBtIGZyb20gJy4vaW5pdGlhbFBNLmpzJztcbmltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tICcuL2Rpc3BsYXktY29udHJvbGxlcic7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZGlzcGxheUNvbnRyb2xsZXIucmVmcmVzaFRvZG9zKHBtKTtcbmRpc3BsYXlDb250cm9sbGVyLnJlZnJlc2hQcm9qZWN0cyhwbSk7XG5kaXNwbGF5Q29udHJvbGxlci5hY3RpdmF0ZVVJKHBtKTtcbiIsImltcG9ydCBQcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xubGV0IHBtID0gbmV3IFByb2plY3RNYW5hZ2VyKCk7XG5pZiAocG0uaXNFbXB0eSgpKSB7XG4gIGxldCBwcm9qMSA9IG5ldyBQcm9qZWN0KCdUbyBkbyBsaXN0Jyk7XG4gIHBtLmFkZFByb2plY3QocHJvajEpO1xufVxucG0uY3VyclByb2plY3QgPSBwbS5wcm9qZWN0c1swXTtcbmV4cG9ydCBkZWZhdWx0IHBtO1xuIiwiY29uc3Qgc3RvcmFnZUF2YWlsYWJsZSA9ICh0eXBlKSA9PiB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coYEVycm9yIHRlc3RpbmcgZm9yIHN0b3JhZ2UgYXZhaWxhYmlsaXR5OiAke2V9YCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5jb25zdCBsb2FkTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2VyaWFsaXplZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgaWYgKHNlcmlhbGl6ZWREYXRhID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjb25zdCBwYXJzZWREYXRhID0gSlNPTi5wYXJzZShzZXJpYWxpemVkRGF0YSk7XG4gICAgICByZXR1cm4gcGFyc2VkRGF0YTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBsb2FkaW5nIGZyb20gbG9jYWwgc3RvcmFnZTogJHtlcnJ9YCk7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnTG9jYWwgc3RvcmFnZSBub3QgYXZhaWxhYmxlJyk7XG4gIH1cbn07XG5cbmNvbnN0IHNhdmVMb2NhbFN0b3JhZ2UgPSAoa2V5LCBkYXRhKSA9PiB7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzZXJpYWxpemVkRGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBzZXJpYWxpemVkRGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3Igc2F2aW5nIHRvIGxvY2FsIHN0b3JhZ2U6ICR7ZXJyfWApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnTG9jYWwgc3RvcmFnZSBub3QgYXZhaWxhYmxlJyk7XG4gIH1cbn07XG5cbmNvbnN0IGNsZWFyTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBlcnJvciBjbGVhcmluZyBsb2NhbCBzdG9yYWdlOiAke2UubWVzc2FnZX1gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ0xvY2FsIHN0b3JhZ2Ugbm90IGF2YWlsYWJsZScpO1xuICB9XG59O1xuXG5leHBvcnQgeyBsb2FkTG9jYWxTdG9yYWdlLCBzYXZlTG9jYWxTdG9yYWdlLCBjbGVhckxvY2FsU3RvcmFnZSB9O1xuIiwiaW1wb3J0IHsgbG9hZExvY2FsU3RvcmFnZSwgc2F2ZUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuXG5jbGFzcyBQcm9qZWN0TWFuYWdlciB7XG4gICNwcm9qZWN0cztcbiAgI2N1cnJQcm9qZWN0O1xuXG4gIGNvbnN0cnVjdG9yKC4uLnByb2plY3RzKSB7XG4gICAgY29uc3Qgc3RvcmVkRGF0YSA9IGxvYWRMb2NhbFN0b3JhZ2UoJ3Byb2plY3RNYW5hZ2VyJyk7XG4gICAgaWYgKHN0b3JlZERhdGEpIHtcbiAgICAgIGlmIChzdG9yZWREYXRhLnByb2plY3RzKVxuICAgICAgICB0aGlzLiNwcm9qZWN0cyA9IHN0b3JlZERhdGEucHJvamVjdHMubWFwKChwKSA9PiBQcm9qZWN0LmZyb21KU09OKHApKTtcbiAgICAgIGVsc2UgdGhpcy4jcHJvamVjdHMgPSBbXTtcbiAgICAgIGlmICh0aGlzLiNwcm9qZWN0cyAmJiBzdG9yZWREYXRhLmN1cnJQcm9qZWN0SWQpIHtcbiAgICAgICAgY29uc3QgdGVtcFByb2ogPSB0aGlzLmdldFByb2plY3Qoc3RvcmVkRGF0YS5jdXJyUHJvamVjdElkKTtcbiAgICAgICAgaWYgKHRlbXBQcm9qKSB0aGlzLiNjdXJyUHJvamVjdCA9IHRlbXBQcm9qO1xuICAgICAgICBlbHNlIHRoaXMuI2N1cnJQcm9qZWN0ID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuI2N1cnJQcm9qZWN0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jcHJvamVjdHMgPVxuICAgICAgICBwcm9qZWN0cy5sZW5ndGggPiAwID8gcHJvamVjdHMubWFwKChwKSA9PiBuZXcgUHJvamVjdChwKSkgOiBbXTtcbiAgICAgIHRoaXMuI2N1cnJQcm9qZWN0ID0gdGhpcy4jcHJvamVjdHMubGVuZ3RoID4gMCA/IHRoaXMuI3Byb2plY3RzWzBdIDogbnVsbDtcbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBwcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy4jcHJvamVjdHM7XG4gIH1cblxuICBzZXQgY3VyclByb2plY3QoY3VyclByb2opIHtcbiAgICBmb3IgKGNvbnN0IHByb2ogb2YgdGhpcy4jcHJvamVjdHMpIHtcbiAgICAgIGlmIChwcm9qLmlkID09PSBjdXJyUHJvai5pZCkge1xuICAgICAgICB0aGlzLiNjdXJyUHJvamVjdCA9IGN1cnJQcm9qO1xuICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLiNjdXJyUHJvamVjdCA9IG51bGw7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICBnZXQgY3VyclByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2N1cnJQcm9qZWN0O1xuICB9XG5cbiAgdG9KU09OID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzSlNPTiA9IHRoaXMuI3Byb2plY3RzLm1hcCgocCkgPT4gcC50b0pTT04oKSk7XG4gICAgY29uc3QgY3VyclByb2plY3RJZCA9IHRoaXMuI2N1cnJQcm9qZWN0ID8gdGhpcy4jY3VyclByb2plY3QuaWQgOiBudWxsO1xuICAgIHJldHVybiB7IHByb2plY3RzOiBwcm9qZWN0c0pTT04sIGN1cnJQcm9qZWN0SWQ6IGN1cnJQcm9qZWN0SWQgfTtcbiAgfTtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHByb2plY3RNYW5hZ2VyID0gbmV3IFByb2plY3RNYW5hZ2VyKCk7XG4gICAgaWYgKCFqc29uIHx8ICFqc29uLnByb2plY3RzKSB7XG4gICAgICByZXR1cm4gcHJvamVjdE1hbmFnZXI7XG4gICAgfVxuICAgIGpzb24ucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdEpTT04pID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0LmZyb21KU09OKHByb2plY3RKU09OKTtcbiAgICAgIHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QocHJvamVjdCk7XG4gICAgICBpZiAoanNvbi5jdXJyUHJvamVjdElkID09PSBwcm9qZWN0LmlkKSB7XG4gICAgICAgIHByb2plY3RNYW5hZ2VyLnNldEN1cnJlbnRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9qZWN0TWFuYWdlcjtcbiAgfVxuXG4gIHNhdmUgPSAoKSA9PiB7XG4gICAgc2F2ZUxvY2FsU3RvcmFnZSgncHJvamVjdE1hbmFnZXInLCB0aGlzLnRvSlNPTigpKTtcbiAgfTtcblxuICBpc0VtcHR5ID0gKCkgPT4gdGhpcy4jcHJvamVjdHMubGVuZ3RoID09PSAwO1xuXG4gIGdldFByb2plY3QgPSAoaWQpID0+IHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBQcm9qZWN0IHdpdGggSUQgJHtpZH0gaXMgbm90IGZvdW5kYCk7XG4gICAgfVxuICAgIGZvciAobGV0IHAgb2YgdGhpcy4jcHJvamVjdHMpIHtcbiAgICAgIGlmIChwLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gcDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgdGhpcy4jcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB0aGlzLiNjdXJyUHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH07XG5cbiAgcmVtb3ZlUHJvamVjdCA9IChpZCkgPT4ge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgY29uc29sZS5sb2coYFByb2plY3Qgd2l0aCBJRCAke2lkfSBpcyBub3QgZm91bmRgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy4jcHJvamVjdHMgPSB0aGlzLiNwcm9qZWN0cy5maWx0ZXIoKHApID0+IHAuaWQgIT09IGlkKTtcbiAgICBpZiAodGhpcy4jY3VyclByb2plY3QuaWQgPT09IGlkKSB7XG4gICAgICBpZiAoIXRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICAgIHRoaXMuI2N1cnJQcm9qZWN0ID0gdGhpcy4jcHJvamVjdHNbMF07XG4gICAgICB9IGVsc2UgdGhpcy4jY3VyclByb2plY3QgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnNhdmUoKTtcbiAgfTtcblxuICBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICBpZiAodGhpcy4jY3VyclByb2plY3QpIHtcbiAgICAgIHRoaXMuI2N1cnJQcm9qZWN0LmFkZFRvZG8odG9kbyk7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmVtb3ZlVG9kbyA9IChpZCkgPT4ge1xuICAgIGlmICh0aGlzLiNjdXJyUHJvamVjdCkge1xuICAgICAgdGhpcy4jY3VyclByb2plY3QucmVtb3ZlVG9kbyhpZCk7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0VG9kbyA9IChpZCkgPT4ge1xuICAgIGlmICh0aGlzLiNjdXJyUHJvamVjdCkgcmV0dXJuIHRoaXMuI2N1cnJQcm9qZWN0LmdldFRvZG8oaWQpO1xuICB9O1xuXG4gIGVkaXRUb2RvID0gKGlkLCB0aXRsZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICB0aGlzLiNjdXJyUHJvamVjdC5lZGl0VG9kbyhpZCwgdGl0bGUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcbiAgICB0aGlzLnNhdmUoKTtcbiAgfTtcblxuICB0b2dnbGVDaGVja1RvZG8gPSAoaWQpID0+IHtcbiAgICB0aGlzLiNjdXJyUHJvamVjdC50b2dnbGVDaGVja1RvZG8oaWQpO1xuICAgIHRoaXMuc2F2ZSgpO1xuICB9O1xuXG4gIGVkaXRQcm9qZWN0ID0gKGlkLCBuZXdOYW1lKSA9PiB7XG4gICAgdGhpcy5nZXRQcm9qZWN0KGlkKS5uYW1lID0gbmV3TmFtZTtcbiAgICB0aGlzLiNjdXJyUHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdChpZCk7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH07XG5cbiAgY2xlYXJDdXJyZW50UHJvamVjdCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy4jY3VyclByb2plY3QpIHtcbiAgICAgIHRoaXMuI2N1cnJQcm9qZWN0LmNsZWFyQWxsVG9kb3MoKTtcbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgIH1cbiAgfTtcblxuICBzZWFyY2hUb2RvQnlUaXRsZSA9IChzZWFyY2hTdHIpID0+IHtcbiAgICBsZXQgbWF0Y2hlcyA9IFtdO1xuICAgIGZvciAobGV0IHByb2plY3Qgb2YgdGhpcy4jcHJvamVjdHMpIHtcbiAgICAgIGZvciAobGV0IHRvZG8gb2YgcHJvamVjdC5hbGxUb2Rvcykge1xuICAgICAgICBpZiAodG9kby50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0ci50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgIGxldCBtYXRjaCA9IHsgbWF0Y2hlZFByb2o6IHByb2plY3QsIG1hdGNoZWRUb2RvOiB0b2RvIH07XG4gICAgICAgICAgbWF0Y2hlcy5wdXNoKG1hdGNoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfTtcblxuICBjbGVhckFsbFByb2plY3RzID0gKCkgPT4ge1xuICAgIHRoaXMuI3Byb2plY3RzID0gW107XG4gICAgdGhpcy4jY3VyclByb2plY3QgPSBudWxsO1xuICAgIHRoaXMuc2F2ZSgpO1xuICB9O1xuXG4gIHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIGxldCBvdXQgPSAnJztcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMuI3Byb2plY3RzKSB7XG4gICAgICBvdXQgKz0gcHJvamVjdC50b1N0cmluZygpICsgJ1xcbic7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RNYW5hZ2VyO1xuIiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcblxuY29uc3QgdXVpZCA9IHJlcXVpcmUoJ3V1aWQnKTtcbmNsYXNzIFByb2plY3Qge1xuICAjaWQ7XG4gICNuYW1lO1xuICAjdW5jaGVja2VkVG9kb3M7XG4gICNjaGVja2VkVG9kb3M7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgaWQgPSBudWxsLFxuICAgIG5hbWUgPSAnTmV3IFByb2plY3QnLFxuICAgIHVuY2hlY2tlZFRvZG9zID0gW10sXG4gICAgY2hlY2tlZFRvZG9zID0gW11cbiAgKSB7XG4gICAgaWYgKCFpZCkgdGhpcy4jaWQgPSBgcHJvamVjdC0ke3V1aWQudjQoKX1gO1xuICAgIGVsc2UgdGhpcy4jaWQgPSBpZDtcbiAgICB0aGlzLiNuYW1lID0gbmFtZTtcbiAgICB0aGlzLiN1bmNoZWNrZWRUb2RvcyA9IHVuY2hlY2tlZFRvZG9zO1xuICAgIHRoaXMuI2NoZWNrZWRUb2RvcyA9IGNoZWNrZWRUb2RvcztcbiAgfVxuXG4gIHNldCBpZChpZCkge1xuICAgIHRoaXMuI2lkID0gaWQ7XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lkO1xuICB9XG5cbiAgc2V0IG5hbWUobmFtZSkge1xuICAgIHRoaXMuI25hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI25hbWU7XG4gIH1cblxuICBnZXQgdW5jaGVja2VkVG9kb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3VuY2hlY2tlZFRvZG9zO1xuICB9XG5cbiAgZ2V0IGNoZWNrZWRUb2RvcygpIHtcbiAgICByZXR1cm4gdGhpcy4jY2hlY2tlZFRvZG9zO1xuICB9XG5cbiAgZ2V0IGFsbFRvZG9zKCkge1xuICAgIHJldHVybiBbLi4udGhpcy4jdW5jaGVja2VkVG9kb3MsIC4uLnRoaXMuI2NoZWNrZWRUb2Rvc107XG4gIH1cblxuICBpc0VtcHR5ID0gKCkgPT5cbiAgICB0aGlzLiN1bmNoZWNrZWRUb2Rvcy5sZW5ndGggPT09IDAgJiYgdGhpcy4jY2hlY2tlZFRvZG9zLmxlbmd0aCA9PT0gMFxuICAgICAgPyB0cnVlXG4gICAgICA6IGZhbHNlO1xuXG4gIGdldE51bVRvZG8gPSAoKSA9PiB0aGlzLiN1bmNoZWNrZWRUb2Rvcy5sZW5ndGg7XG5cbiAgZ2V0TnVtQ2hlY2tlZCA9ICgpID0+IHRoaXMuI2NoZWNrZWRUb2Rvcy5sZW5ndGg7XG5cbiAgZ2V0VG9kb0J5VGl0bGUgPSAodGl0bGUpID0+IHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHJldHVybjtcbiAgICBsZXQgbWF0Y2hlcyA9IFtdO1xuICAgIGZvciAobGV0IHRvZG8gb2YgdGhpcy4jdW5jaGVja2VkVG9kb3MpIHtcbiAgICAgIGlmICh0b2RvLnRpdGxlID09PSB0aXRsZSkge1xuICAgICAgICBtYXRjaGVzLnB1c2godG9kbyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHJldHVybiBtYXRjaGVzO1xuICAgIGVsc2UgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgZ2V0VG9kbyA9IChpZCkgPT4ge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgY29uc29sZS5sb2coYFRvZG8gd2l0aCBJRCAke2lkfSBjYW5ub3QgYmUgZm91bmRgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBmb3IgKGxldCB0ZCBvZiB0aGlzLiN1bmNoZWNrZWRUb2Rvcykge1xuICAgICAgaWYgKHRkLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gdGQ7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IHRkIG9mIHRoaXMuI2NoZWNrZWRUb2Rvcykge1xuICAgICAgaWYgKHRkLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gdGQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRoaXMuI3VuY2hlY2tlZFRvZG9zLnB1c2godG9kbyk7XG4gIH07XG5cbiAgcmVtb3ZlVG9kbyA9IChpZCkgPT4ge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgY29uc29sZS5sb2coYFRvZG8gd2l0aCBJRCAke2lkfSBjYW5ub3QgYmUgZm91bmRgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy4jdW5jaGVja2VkVG9kb3MgPSB0aGlzLiN1bmNoZWNrZWRUb2Rvcy5maWx0ZXIoKHRkKSA9PiB0ZC5pZCAhPT0gaWQpO1xuICAgIHRoaXMuI2NoZWNrZWRUb2RvcyA9IHRoaXMuI3VuY2hlY2tlZFRvZG9zLmZpbHRlcigodGQpID0+IHRkLmlkICE9PSBpZCk7XG4gIH07XG5cbiAgZWRpdFRvZG8gPSAoaWQsIG5ld1RpdGxlLCBuZXdEZXNjLCBuZXdEYXRlLCBuZXdQcmlvcml0eSkgPT4ge1xuICAgIHRoaXMuZ2V0VG9kbyhpZCkuZWRpdChuZXdUaXRsZSwgbmV3RGVzYywgbmV3RGF0ZSwgbmV3UHJpb3JpdHkpO1xuICB9O1xuXG4gIGNoZWNrVG9kbyA9IChpZCkgPT4ge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jdW5jaGVja2VkVG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRkID0gdGhpcy4jdW5jaGVja2VkVG9kb3NbaV07XG4gICAgICBpZiAodGQuaWQgPT09IGlkKSB7XG4gICAgICAgIHRkLnRvZ2dsZUNoZWNrKCk7XG4gICAgICAgIHRoaXMuI3VuY2hlY2tlZFRvZG9zLnNwbGljZShpLCAxKTtcbiAgICAgICAgdGhpcy4jY2hlY2tlZFRvZG9zLnB1c2godGQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdW5jaGVja1RvZG8gPSAoaWQpID0+IHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHJldHVybjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI2NoZWNrZWRUb2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGQgPSB0aGlzLiNjaGVja2VkVG9kb3NbaV07XG4gICAgICBpZiAodGQuaWQgPT09IGlkKSB7XG4gICAgICAgIHRkLnRvZ2dsZUNoZWNrKCk7XG4gICAgICAgIHRoaXMuI2NoZWNrZWRUb2Rvcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIHRoaXMuI3VuY2hlY2tlZFRvZG9zLnB1c2godGQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB0b2dnbGVDaGVja1RvZG8gPSAoaWQpID0+IHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHJldHVybjtcbiAgICBjb25zdCB0ZCA9IHRoaXMuZ2V0VG9kbyhpZCk7XG4gICAgaWYgKHRkLmNoZWNrKSB0aGlzLnVuY2hlY2tUb2RvKGlkKTtcbiAgICBlbHNlIHRoaXMuY2hlY2tUb2RvKGlkKTtcbiAgfTtcblxuICBlcXVhbHMgPSAocHJvamVjdCkgPT4gdGhpcy5pZCA9PT0gcHJvamVjdC5pZDtcblxuICBjbGVhckFsbFRvZG9zID0gKCkgPT4ge1xuICAgIHRoaXMuI3VuY2hlY2tlZFRvZG9zID0gW107XG4gICAgdGhpcy4jY2hlY2tlZFRvZG9zID0gW107XG4gIH07XG5cbiAgY2xlYXJIaXN0b3J5ID0gKCkgPT4gKHRoaXMuI2NoZWNrZWRUb2RvcyA9IFtdKTtcblxuICB0b1N0cmluZyA9ICgpID0+IHtcbiAgICBsZXQgbXNnID0gYFByb2plY3QgTmFtZTogJHt0aGlzLm5hbWV9XFxuUHJvamVjdCBJRDogJHt0aGlzLmlkfVxcbmA7XG4gICAgaWYgKHRoaXMuI3VuY2hlY2tlZFRvZG9zLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jdW5jaGVja2VkVG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbXNnICs9IGBUby1kbyAke2kgKyAxfTpcXG5gO1xuICAgICAgICBtc2cgKz0gdGhpcy4jdW5jaGVja2VkVG9kb3NbaV0udG9TdHJpbmcoKSArICdcXG4nO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbXNnO1xuICB9O1xuXG4gIHRvSlNPTiA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuI2lkLFxuICAgICAgdW5jaGVja2VkVG9kb3M6IHRoaXMuI3VuY2hlY2tlZFRvZG9zLmxlbmd0aFxuICAgICAgICA/IHRoaXMuI3VuY2hlY2tlZFRvZG9zLm1hcCgodG9kbykgPT4gdG9kby50b0pTT04oKSlcbiAgICAgICAgOiBbXSxcbiAgICAgIGNoZWNrZWRUb2RvczogdGhpcy4jY2hlY2tlZFRvZG9zLmxlbmd0aFxuICAgICAgICA/IHRoaXMuI2NoZWNrZWRUb2Rvcy5tYXAoKHRvZG8pID0+IHRvZG8udG9KU09OKCkpXG4gICAgICAgIDogW10sXG4gICAgICBuYW1lOiB0aGlzLiNuYW1lLFxuICAgIH07XG4gIH07XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoanNvbi5pZCwganNvbi5uYW1lKTtcbiAgICBwcm9qZWN0LiN1bmNoZWNrZWRUb2RvcyA9IGpzb24udW5jaGVja2VkVG9kb3MubWFwKCh0b2RvSlNPTikgPT5cbiAgICAgIFRvZG8uZnJvbUpTT04odG9kb0pTT04pXG4gICAgKTtcbiAgICBwcm9qZWN0LiNjaGVja2VkVG9kb3MgPSBqc29uLmNoZWNrZWRUb2Rvcy5tYXAoKHRvZG9KU09OKSA9PlxuICAgICAgVG9kby5mcm9tSlNPTih0b2RvSlNPTilcbiAgICApO1xuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJjb25zdCB1dWlkID0gcmVxdWlyZSgndXVpZCcpO1xuXG5leHBvcnQgY29uc3Qgc2V0VGltZVpvbmUgPSAoKSA9PiB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gbm93LmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMDtcbiAgY29uc3QgbG9jYWxUaW1lID0gbmV3IERhdGUobm93LmdldFRpbWUoKSAtIHRpbWV6b25lT2Zmc2V0KTtcbiAgcmV0dXJuIGxvY2FsVGltZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbn07XG5cbmNsYXNzIFRvZG8ge1xuICAjaWQ7XG4gICN0aXRsZTtcbiAgI2Rlc2M7XG4gICNkYXRlO1xuICAjcHJpb3JpdHk7XG4gICNjaGVjaztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBpZCA9IG51bGwsXG4gICAgdGl0bGUgPSAnTmV3IFRvZG8nLFxuICAgIGRlc2MgPSAnTm9uZScsXG4gICAgZGF0ZSA9IHNldFRpbWVab25lKCksXG4gICAgcHJpb3JpdHkgPSAnTm9uZScsXG4gICAgY2hlY2sgPSBmYWxzZVxuICApIHtcbiAgICBpZiAoaWQgIT09IG51bGwpIHRoaXMuI2lkID0gaWQ7XG4gICAgZWxzZSB0aGlzLiNpZCA9IGB0b2RvLSR7dXVpZC52NCgpfWA7XG5cbiAgICBpZiAodGl0bGUgIT09ICcnKSB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICAgIGVsc2UgdGhpcy4jdGl0bGUgPSAnTmV3IFRvZG8nO1xuXG4gICAgaWYgKGRlc2MgIT09ICcnKSB0aGlzLiNkZXNjID0gZGVzYztcbiAgICBlbHNlIHRoaXMuI2Rlc2MgPSAnTm9uZSc7XG5cbiAgICB0aGlzLiNkYXRlID0gZGF0ZTtcbiAgICB0aGlzLiNwcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuI2NoZWNrID0gY2hlY2s7XG4gIH1cblxuICBzZXQgaWQoaWQpIHtcbiAgICB0aGlzLiNpZCA9IGlkO1xuICB9XG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaWQ7XG4gIH1cblxuICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLiN0aXRsZTtcbiAgfVxuXG4gIHNldCBkZXNjKGRlc2MpIHtcbiAgICB0aGlzLiNkZXNjID0gZGVzYztcbiAgfVxuXG4gIGdldCBkZXNjKCkge1xuICAgIHJldHVybiB0aGlzLiNkZXNjO1xuICB9XG5cbiAgc2V0IGRhdGUoZGF0ZSkge1xuICAgIHRoaXMuI2RhdGUgPSBkYXRlO1xuICB9XG5cbiAgZ2V0IGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2RhdGU7XG4gIH1cblxuICBzZXQgcHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICB0aGlzLiNwcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLiNwcmlvcml0eTtcbiAgfVxuXG4gIHNldCBjaGVjayhjaGVjaykge1xuICAgIHRoaXMuI2NoZWNrID0gY2hlY2s7XG4gIH1cblxuICBnZXQgY2hlY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuI2NoZWNrO1xuICB9XG5cbiAgdG9nZ2xlQ2hlY2sgPSAoKSA9PiAodGhpcy4jY2hlY2sgPSAhdGhpcy4jY2hlY2spO1xuXG4gIGVkaXQgPSAobmV3VGl0bGUsIG5ld0Rlc2MsIG5ld0RhdGUsIG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgdGhpcy4jdGl0bGUgPSBuZXdUaXRsZTtcbiAgICB0aGlzLiNkZXNjID0gbmV3RGVzYztcbiAgICB0aGlzLiNkYXRlID0gbmV3RGF0ZTtcbiAgICB0aGlzLiNwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICB9O1xuXG4gIGVxdWFscyA9ICh0b2RvKSA9PiB0aGlzLiNpZCA9PT0gdG9kby5pZDtcblxuICB0b1N0cmluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgYElEOiAke3RoaXMuI2lkfVxcbmAgK1xuICAgICAgYFRpdGxlOiAke3RoaXMuI3RpdGxlfVxcbmAgK1xuICAgICAgYERlc2NyaXB0aW9uOiAke3RoaXMuI2Rlc2N9XFxuYCArXG4gICAgICBgRHVlIERhdGU6ICR7dGhpcy4jZGF0ZX1cXG5gICtcbiAgICAgIGBQcmlvcml0eTogJHt0aGlzLiNwcmlvcml0eX1cXG5gICtcbiAgICAgIGBDaGVjazogJHt0aGlzLiNjaGVja31cXG5gXG4gICAgKTtcbiAgfTtcblxuICB0b0pTT04gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLiNpZCxcbiAgICAgIHRpdGxlOiB0aGlzLiN0aXRsZSxcbiAgICAgIGRlc2M6IHRoaXMuI2Rlc2MsXG4gICAgICBkYXRlOiB0aGlzLiNkYXRlLFxuICAgICAgcHJpb3JpdHk6IHRoaXMuI3ByaW9yaXR5LFxuICAgICAgY2hlY2s6IHRoaXMuI2NoZWNrLFxuICAgIH07XG4gIH07XG5cbiAgc3RhdGljIGZyb21KU09OID0gKGpzb24pID0+IHtcbiAgICByZXR1cm4gbmV3IFRvZG8oXG4gICAgICBqc29uLmlkLFxuICAgICAganNvbi50aXRsZSxcbiAgICAgIGpzb24uZGVzYyxcbiAgICAgIGpzb24uZGF0ZSxcbiAgICAgIGpzb24ucHJpb3JpdHksXG4gICAgICBqc29uLmNoZWNrXG4gICAgKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==