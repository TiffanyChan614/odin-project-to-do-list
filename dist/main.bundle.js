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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --white-grey: #ebebeb;\n  --pale-grey: #e3e9eb;\n  --light-grey: #d6d9da;\n  --grey: #b2bec3;\n  --neutral-grey: #a7a7a7;\n  --medium-light-grey: #646a6c;\n  --medium-grey: #444b4d;\n  --dark: #2d3436;\n  --sky-blue: #55a2f0;\n  --light-blue: #3e92e6;\n  --blue: #0984e3;\n  --dark-blue: #006fc4;\n  --pink: #ff4646;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: -apple-system, 'system-ui';\n}\n\nfooter {\n  text-align: center;\n  font-size: 0.8rem;\n}\n\nmain {\n  display: flex;\n  flex: 1;\n  height: 100%;\n}\n\n#sidebar.open #project-btns-container,\n#content > header {\n  height: 3rem;\n}\n\n#sidebar {\n  background-color: var(--blue);\n  height: 100vh;\n  overflow-y: auto;\n}\n\n#sidebar.open {\n  width: 25%;\n  min-width: max-content;\n  max-width: 40rem;\n}\n\n#sidebar.close {\n  width: auto;\n}\n\n#project-btns-container {\n  display: flex;\n  align-items: center;\n  color: white;\n  gap: 0.5rem;\n  background-color: var(--blue);\n}\n\n#sidebar.open #project-btns-container {\n  flex-direction: row;\n  padding: 0 0.2rem;\n  margin: 0 0.7rem 0 0.7rem;\n  border-bottom: 0.1rem solid white;\n}\n\n#sidebar.open header {\n  position: sticky;\n  top: 0;\n  background-color: var(--blue);\n}\n\n#sidebar.close #project-btns-container {\n  flex-direction: column;\n  padding: 1rem 0.5rem;\n}\n\n#sidebar.close #clear-all-projects {\n  display: none;\n}\n\n#project-btns-container button {\n  background-color: inherit;\n  border: none;\n  padding: 0.3rem;\n  border-radius: 5rem;\n  color: white;\n}\n\n#project-btns-container button:hover {\n  background-color: var(--sky-blue);\n}\n\n#sidebar.close #project-btns-container button {\n  width: 100%;\n}\n\n.project.selected,\n.project.selected:hover {\n  background-color: var(--sky-blue);\n}\n\n#project-container {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  background-color: var(--blue);\n  padding-bottom: 2rem;\n}\n\n.project-btns {\n  display: flex;\n  gap: 0.2rem;\n}\n\n.project {\n  height: 6vh;\n  min-height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 0.7rem;\n}\n\n.project button {\n  border: none;\n  background-color: inherit;\n  color: white;\n  margin-left: 0.5em;\n}\n\n.project:hover {\n  background-color: var(--light-blue);\n}\n\n.project button:hover {\n  transform: scale(1.1);\n}\n\n#project-form-overlay {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  text-align: center;\n}\n\n#project-form-overlay input {\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  border: 0.1rem solid var(--grey);\n}\n\n#project-form-overlay input::placeholder {\n  color: var(--neutral-grey);\n}\n\n#project-form-btns,\n#todo-form-btns {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n#project-form-btns button,\n#todo-form-btns button {\n  padding: 0.7rem;\n  border: none;\n  border-radius: 0.5rem;\n  color: var(--medium-grey);\n  background-color: var(--white-grey);\n}\n\n#cancel-proj-btn:hover,\n#cancel-todo-btn:hover {\n  background-color: var(--light-grey);\n}\n\n#submit-proj-btn:hover,\n#submit-todo-btn:hover {\n  background-color: var(--blue);\n  color: white;\n}\n\n#todo-form-btns {\n  margin-top: 0.8rem;\n}\n\n#project-form {\n  background-color: white;\n  padding: 2rem;\n  border-radius: 0.5rem;\n  color: var(--medium-grey);\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n  width: 25rem;\n}\n\n#todo-form-overlay {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  text-align: center;\n}\n\n#todo-form {\n  background-color: white;\n  padding: 2rem;\n  border-radius: 0.5rem;\n  color: var(--medium-grey);\n  display: flex;\n  flex-direction: column;\n  width: 25rem;\n  gap: 1rem;\n}\n\n#todo-form h2 {\n  text-align: center;\n}\n\n#todo-form input,\nselect,\ntextarea {\n  padding: 0.4rem;\n  border-radius: 0.5rem;\n  border: 0.1rem solid var(--grey);\n  font-family: -apple-system, 'system-ui';\n  color: var(--medium-grey);\n}\n\n#todo-form > div:not(:last-of-type) {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  text-align: left;\n  font-size: 0.9rem;\n  color: var(--medium-light-grey);\n}\n\n#todo-form > div label {\n  margin-left: 0.2rem;\n}\n\n#todo-form input::placeholder,\ntextarea::placeholder {\n  color: var(--neutral-grey);\n}\n\n#todo-form #todo-desc {\n  height: 3rem;\n  max-height: 20rem;\n  overflow: auto;\n  resize: vertical;\n  word-wrap: break-word;\n}\n\n#content {\n  color: var(--medium-grey);\n  width: 100%;\n  height: 100vh;\n  overflow-y: auto;\n}\n\n#search-container {\n  position: sticky;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 3rem;\n}\n\n#search-bar {\n  flex-shrink: 0;\n  height: 2rem;\n  width: 66%;\n  border: 0.15rem solid var(--light-grey);\n  border-radius: 1rem;\n  padding: 0 0.5rem;\n  color: var(--medium-grey);\n  margin-top: 1rem;\n}\n\n#dropdown-menu {\n  display: none;\n  width: 66%;\n  border: 0.07rem solid var(--pale-grey);\n  border-radius: 0.5rem;\n  background-color: white;\n  flex-direction: column;\n  position: fixed;\n  top: 3rem;\n}\n\n#dropdown-menu .search-result {\n  margin: 0 0.5rem;\n  color: var(--medium-light-grey);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n\n#dropdown-menu .search-result .matched-project {\n  color: var(--medium-light-grey);\n  font-size: 0.9rem;\n}\n\n#dropdown-menu .search-result .matched-todo.checked {\n  text-decoration: line-through;\n}\n\n#dropdown-menu .search-result:hover {\n  color: var(--medium-grey);\n  font-weight: 450;\n}\n\n#dropdown-menu > .search-result:not(:last-of-type) {\n  border-bottom: 0.07rem solid var(--pale-grey);\n}\n\n#todo-container {\n  padding: 0.2rem 1.2rem 2rem 1.2rem;\n}\n\n#content > header {\n  position: sticky;\n  top: 0;\n  height: max-content;\n  background-color: white;\n  padding: 0 1.5rem;\n}\n\n#todo-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1.5rem 0 1rem;\n}\n\n#todo-container header h1 {\n  font-size: 1.5rem;\n  color: var(--medium-grey);\n  margin-right: 0.5rem;\n}\n\n#todo-main-btns {\n  display: flex;\n  gap: 0.5rem;\n  margin-left: 0.5rem;\n}\n\n#todo-main-btns button {\n  padding: 0.5rem;\n  background-color: var(--light-blue);\n  border: none;\n  border-radius: 0.4rem;\n  color: white;\n}\n\n#todo-main-btns button:hover {\n  background-color: var(--blue);\n  color: white;\n}\n\n#todo-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.todo {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-width: max-content;\n  padding: 0.8rem 1rem;\n  background-color: var(--pale-grey);\n  border-radius: 0.4rem;\n}\n\n.todo:hover {\n  box-shadow: 0 0 0.2rem var(--medium-light-grey);\n}\n\n.todo-upper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.todo-info {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.todo-priority {\n  color: var(--pink);\n  font-weight: bold;\n}\n\n.todo input[type='checkbox'] {\n  appearance: none;\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  background-color: white;\n  border: 0.1rem solid var(--neutral-grey);\n  border-radius: 2rem;\n  cursor: pointer;\n}\n\n.todo input[type='checkbox']:checked {\n  background-color: var(--sky-blue);\n}\n\n.todo-btns {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.todo button {\n  padding: 0.2rem;\n  background-color: var(--pale-grey);\n  border: none;\n  border-radius: 2rem;\n}\n\n.todo-icons {\n  color: var(--medium-grey);\n}\n\n.todo button:hover {\n  transform: scale(1.1);\n}\n\n.todo-details {\n  font-size: 0.9rem;\n  color: var(--medium-light-grey);\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  margin-left: 2rem;\n  white-space: pre;\n}\n\n.todo-desc,\n.todo-date {\n  display: none;\n}\n\n.todo.checked span {\n  color: var(--medium-light-grey);\n}\n\n.todo.checked .todo-title {\n  text-decoration: line-through;\n}\n\n.todo .todo-title {\n  font-weight: 450;\n}\n\nfooter {\n  padding: 0.2rem;\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n  opacity: 0.8;\n  z-index: 2;\n  background-color: var(--pale-grey);\n  color: var(--dark);\n}\n\n.material-symbols-outlined {\n  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 50;\n}\n\n.material-symbols-outlined .proj-icons {\n  width: 1.5rem;\n}\n\n.material-symbols-outlined .todo-icons {\n  width: 1rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --white-grey: #ebebeb;\n  --pale-grey: #e3e9eb;\n  --light-grey: #d6d9da;\n  --grey: #b2bec3;\n  --neutral-grey: #a7a7a7;\n  --medium-light-grey: #646a6c;\n  --medium-grey: #444b4d;\n  --dark: #2d3436;\n  --sky-blue: #55a2f0;\n  --light-blue: #3e92e6;\n  --blue: #0984e3;\n  --dark-blue: #006fc4;\n  --pink: #ff4646;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: -apple-system, 'system-ui';\n}\n\nfooter {\n  text-align: center;\n  font-size: 0.8rem;\n}\n\nmain {\n  display: flex;\n  flex: 1;\n  height: 100%;\n}\n\n#sidebar.open #project-btns-container,\n#content > header {\n  height: 3rem;\n}\n\n#sidebar {\n  background-color: var(--blue);\n  height: 100vh;\n  overflow-y: auto;\n}\n\n#sidebar.open {\n  width: 25%;\n  min-width: max-content;\n  max-width: 40rem;\n}\n\n#sidebar.close {\n  width: auto;\n}\n\n#project-btns-container {\n  display: flex;\n  align-items: center;\n  color: white;\n  gap: 0.5rem;\n  background-color: var(--blue);\n}\n\n#sidebar.open #project-btns-container {\n  flex-direction: row;\n  padding: 0 0.2rem;\n  margin: 0 0.7rem 0 0.7rem;\n  border-bottom: 0.1rem solid white;\n}\n\n#sidebar.open header {\n  position: sticky;\n  top: 0;\n  background-color: var(--blue);\n}\n\n#sidebar.close #project-btns-container {\n  flex-direction: column;\n  padding: 1rem 0.5rem;\n}\n\n#sidebar.close #clear-all-projects {\n  display: none;\n}\n\n#project-btns-container button {\n  background-color: inherit;\n  border: none;\n  padding: 0.3rem;\n  border-radius: 5rem;\n  color: white;\n}\n\n#project-btns-container button:hover {\n  background-color: var(--sky-blue);\n}\n\n#sidebar.close #project-btns-container button {\n  width: 100%;\n}\n\n.project.selected,\n.project.selected:hover {\n  background-color: var(--sky-blue);\n}\n\n#project-container {\n  display: flex;\n  flex-direction: column;\n  color: white;\n  background-color: var(--blue);\n  padding-bottom: 2rem;\n}\n\n.project-btns {\n  display: flex;\n  gap: 0.2rem;\n}\n\n.project {\n  height: 6vh;\n  min-height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 0.7rem;\n}\n\n.project button {\n  border: none;\n  background-color: inherit;\n  color: white;\n  margin-left: 0.5em;\n}\n\n.project:hover {\n  background-color: var(--light-blue);\n}\n\n.project button:hover {\n  transform: scale(1.1);\n}\n\n#project-form-overlay {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  text-align: center;\n}\n\n#project-form-overlay input {\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  border: 0.1rem solid var(--grey);\n}\n\n#project-form-overlay input::placeholder {\n  color: var(--neutral-grey);\n}\n\n#project-form-btns,\n#todo-form-btns {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n#project-form-btns button,\n#todo-form-btns button {\n  padding: 0.7rem;\n  border: none;\n  border-radius: 0.5rem;\n  color: var(--medium-grey);\n  background-color: var(--white-grey);\n}\n\n#cancel-proj-btn:hover,\n#cancel-todo-btn:hover {\n  background-color: var(--light-grey);\n}\n\n#submit-proj-btn:hover,\n#submit-todo-btn:hover {\n  background-color: var(--blue);\n  color: white;\n}\n\n#todo-form-btns {\n  margin-top: 0.8rem;\n}\n\n#project-form {\n  background-color: white;\n  padding: 2rem;\n  border-radius: 0.5rem;\n  color: var(--medium-grey);\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n  width: 25rem;\n}\n\n#todo-form-overlay {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  text-align: center;\n}\n\n#todo-form {\n  background-color: white;\n  padding: 2rem;\n  border-radius: 0.5rem;\n  color: var(--medium-grey);\n  display: flex;\n  flex-direction: column;\n  width: 25rem;\n  gap: 1rem;\n}\n\n#todo-form h2 {\n  text-align: center;\n}\n\n#todo-form input,\nselect,\ntextarea {\n  padding: 0.4rem;\n  border-radius: 0.5rem;\n  border: 0.1rem solid var(--grey);\n  font-family: -apple-system, 'system-ui';\n  color: var(--medium-grey);\n}\n\n#todo-form > div:not(:last-of-type) {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  text-align: left;\n  font-size: 0.9rem;\n  color: var(--medium-light-grey);\n}\n\n#todo-form > div label {\n  margin-left: 0.2rem;\n}\n\n#todo-form input::placeholder,\ntextarea::placeholder {\n  color: var(--neutral-grey);\n}\n\n#todo-form #todo-desc {\n  height: 3rem;\n  max-height: 20rem;\n  overflow: auto;\n  resize: vertical;\n  word-wrap: break-word;\n}\n\n#content {\n  color: var(--medium-grey);\n  width: 100%;\n  height: 100vh;\n  overflow-y: auto;\n}\n\n#search-container {\n  position: sticky;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 3rem;\n}\n\n#search-bar {\n  flex-shrink: 0;\n  height: 2rem;\n  width: 66%;\n  border: 0.15rem solid var(--light-grey);\n  border-radius: 1rem;\n  padding: 0 0.5rem;\n  color: var(--medium-grey);\n  margin-top: 1rem;\n}\n\n#dropdown-menu {\n  display: none;\n  width: 66%;\n  border: 0.07rem solid var(--pale-grey);\n  border-radius: 0.5rem;\n  background-color: white;\n  flex-direction: column;\n  position: fixed;\n  top: 3rem;\n}\n\n#dropdown-menu .search-result {\n  margin: 0 0.5rem;\n  color: var(--medium-light-grey);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n\n#dropdown-menu .search-result .matched-project {\n  color: var(--medium-light-grey);\n  font-size: 0.9rem;\n}\n\n#dropdown-menu .search-result .matched-todo.checked {\n  text-decoration: line-through;\n}\n\n#dropdown-menu .search-result:hover {\n  color: var(--medium-grey);\n  font-weight: 450;\n}\n\n#dropdown-menu > .search-result:not(:last-of-type) {\n  border-bottom: 0.07rem solid var(--pale-grey);\n}\n\n#todo-container {\n  padding: 0.2rem 1.2rem 2rem 1.2rem;\n}\n\n#content > header {\n  position: sticky;\n  top: 0;\n  height: max-content;\n  background-color: white;\n  padding: 0 1.5rem;\n}\n\n#todo-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1.5rem 0 1rem;\n}\n\n#todo-container header h1 {\n  font-size: 1.5rem;\n  color: var(--medium-grey);\n  margin-right: 0.5rem;\n}\n\n#todo-main-btns {\n  display: flex;\n  gap: 0.5rem;\n  margin-left: 0.5rem;\n}\n\n#todo-main-btns button {\n  padding: 0.5rem;\n  background-color: var(--light-blue);\n  border: none;\n  border-radius: 0.4rem;\n  color: white;\n}\n\n#todo-main-btns button:hover {\n  background-color: var(--blue);\n  color: white;\n}\n\n#todo-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.todo {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-width: max-content;\n  padding: 0.8rem 1rem;\n  background-color: var(--pale-grey);\n  border-radius: 0.4rem;\n}\n\n.todo:hover {\n  box-shadow: 0 0 0.2rem var(--medium-light-grey);\n}\n\n.todo-upper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.todo-info {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.todo-priority {\n  color: var(--pink);\n  font-weight: bold;\n}\n\n.todo input[type='checkbox'] {\n  appearance: none;\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  background-color: white;\n  border: 0.1rem solid var(--neutral-grey);\n  border-radius: 2rem;\n  cursor: pointer;\n}\n\n.todo input[type='checkbox']:checked {\n  background-color: var(--sky-blue);\n}\n\n.todo-btns {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.todo button {\n  padding: 0.2rem;\n  background-color: var(--pale-grey);\n  border: none;\n  border-radius: 2rem;\n}\n\n.todo-icons {\n  color: var(--medium-grey);\n}\n\n.todo button:hover {\n  transform: scale(1.1);\n}\n\n.todo-details {\n  font-size: 0.9rem;\n  color: var(--medium-light-grey);\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  margin-left: 2rem;\n  white-space: pre;\n}\n\n.todo-desc,\n.todo-date {\n  display: none;\n}\n\n.todo.checked span {\n  color: var(--medium-light-grey);\n}\n\n.todo.checked .todo-title {\n  text-decoration: line-through;\n}\n\n.todo .todo-title {\n  font-weight: 450;\n}\n\nfooter {\n  padding: 0.2rem;\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n  opacity: 0.8;\n  z-index: 2;\n  background-color: var(--pale-grey);\n  color: var(--dark);\n}\n\n.material-symbols-outlined {\n  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 50;\n}\n\n.material-symbols-outlined .proj-icons {\n  width: 1.5rem;\n}\n\n.material-symbols-outlined .todo-icons {\n  width: 1rem;\n}\n"],"sourceRoot":""}]);
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
const sortMenu = document.querySelector('#sort-menu');
const sortBtn = document.querySelector('#sort-todo');

const sortFunctions = new Map([
  ['Due Date - Closest First', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByDateAsc()],
  ['Due Date - Furthest First', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByDateDesc()],
  ['Priority - Lowest First', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByPriorityAsc()],
  ['Priority - Highest First', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByPriorityDesc()],
  ['Title - A to Z', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByTitleAsc()],
  ['Title - Z to A', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByTitleDesc()],
  ['Date Created - Oldest First', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByAddDateAsc()],
  ['Date Created - Newest First', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByAddDateDesc()],
]);

const EDIT = 0,
  ADD = 1;

let projToEdit = null;
let projectMode = ADD;
let selectedTodo = null;
let todoMode = ADD;
let showCompleted = false;
let sortMode = 'Date Created - Oldest First';

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
  for (const project of _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].projects) {
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
    todoDateField.value = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.setTimeZone)().slice(0, 10);
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
      e.preventDefault();
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

const activateSortMenu = () => {
  sortMenu.addEventListener('change', (e) => {
    sortMode = e.target.value;
  });
};

const activateSortBtn = () => {
  sortBtn.addEventListener('click', (e) => {
    sortFunctions.get(sortMode)();
    refreshTodos();
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
  activateSortMenu();
  activateSortBtn();
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
  if (match.matchedTodo.check) {
    todoTitle.classList.add('checked');
  }
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
  let proj1 = new _project__WEBPACK_IMPORTED_MODULE_1__["default"](null);
  pm.addProject(proj1);
}
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
  #storageKey;

  constructor(storageKey = 'projectManager', ...projects) {
    this.#storageKey = storageKey;
    let storedData;
    try {
      storedData = (0,_local_storage__WEBPACK_IMPORTED_MODULE_0__.loadLocalStorage)(this.#storageKey);
    } catch {
      console.error(
        `Error loading data from local storage for key "${
          this.#storageKey
        }": ${err}`
      );
      storedData = null;
    }
    if (storedData) {
      if (storedData.projects)
        this.#projects = storedData.projects.map((p) => _project__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(p));
      else this.#projects = [];
      if (this.#projects && storedData.currProjectId) {
        const tempProj = this.#projects.find(
          (p) => p.id === storedData.currProjectId
        );
        this.#currProject = tempProj || null;
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
    this.#currProject =
      this.#projects.find((proj) => proj.id === currProj.id) || null;
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
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage)(this.#storageKey, this.toJSON());
  };

  isEmpty = () => this.#projects.length === 0;

  getProject = (id) => {
    if (this.isEmpty()) {
      console.error(`Project with ID ${id} is not found`);
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
      console.error(`Project with ID ${id} is not found`);
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

  sortByAddDateAsc = () => {
    this.#currProject.sortByAddDateAsc();
  };

  sortByAddDateDesc = () => {
    this.#currProject.sortByAddDateDesc();
  };

  sortByPriorityAsc = () => {
    this.#currProject.sortByPriorityAsc();
  };

  sortByPriorityDesc = () => {
    this.#currProject.sortByPriorityDesc();
  };

  sortByDateAsc = () => {
    this.#currProject.sortByDateAsc();
  };

  sortByDateDesc = () => {
    this.#currProject.sortByDateDesc();
  };

  sortByTitleAsc = () => {
    this.#currProject.sortByTitleAsc();
  };

  sortByTitleDesc = () => {
    this.#currProject.sortByTitleDesc();
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
  static PRIORITY_ORDER = ['none', '!', '!!', '!!!'];

  #id;
  #name;
  #allTodos;

  constructor(id = null, name = 'New Project', allTodos = []) {
    if (!id) this.#id = `project-${uuid.v4()}`;
    else this.#id = id;
    this.#name = name;
    this.#allTodos = [...allTodos];
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
    return this.#allTodos.filter((todo) => todo.check === false);
  }

  get checkedTodos() {
    return this.#allTodos.filter((todo) => todo.check === true);
  }

  set allTodos(todos) {
    this.#allTodos = [...todos];
  }

  get allTodos() {
    return this.#allTodos;
  }

  isEmpty = () => (this.#allTodos === 0 ? true : false);

  getNumTodo = () => this.#allTodos.length;

  getNumChecked = () => this.checkedTodos.length;

  getNumUnchecked = () => this.uncheckedTodos.length;

  getTodoByTitle = (title) => {
    if (this.isEmpty()) return;
    let matches = [];
    for (let todo of this.#allTodos) {
      if (todo.title === title) {
        matches.push(todo);
      }
    }
    if (matches.length > 0) return matches;
    else return null;
  };

  getTodo = (id) => {
    if (this.isEmpty()) {
      console.error(`Todo with ID ${id} cannot be found`);
      return null;
    }
    for (let td of this.#allTodos) {
      if (td.id === id) {
        return td;
      }
    }
    return null;
  };

  addTodo = (todo) => {
    this.#allTodos.push(todo);
  };

  removeTodo = (id) => {
    if (this.isEmpty()) {
      console.error(`Todo with ID ${id} cannot be found`);
      return;
    }
    this.#allTodos = this.#allTodos.filter((td) => td.id !== id);
  };

  editTodo = (id, newTitle, newDesc, newDate, newPriority) => {
    this.getTodo(id).edit(newTitle, newDesc, newDate, newPriority);
  };

  checkTodo = (id) => {
    if (this.isEmpty()) return;
    for (let i = 0; i < this.uncheckedTodos.length; i++) {
      const td = this.uncheckedTodos[i];
      if (td.id === id) {
        td.toggleCheck();
        break;
      }
    }
  };

  uncheckTodo = (id) => {
    if (this.isEmpty()) return;
    for (let i = 0; i < this.checkedTodos.length; i++) {
      const td = this.checkedTodos[i];
      if (td.id === id) {
        td.toggleCheck();
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
    this.#allTodos = [];
  };

  clearHistory = () => {
    this.#allTodos = [...this.uncheckedTodos];
  };

  sortByAddDateAsc = () => {
    this.#allTodos = this.#allTodos.sort((a, b) => {
      return Date.parse(a.addDate) - Date.parse(b.addDate);
    });
  };

  sortByAddDateDesc = () => {
    this.#allTodos = this.#allTodos.sort((a, b) => {
      return Date.parse(b.addDate) - Date.parse(a.addDate);
    });
  };

  sortByPriorityAsc = () => {
    this.#allTodos = this.#allTodos.sort((a, b) => {
      const priorityA = Project.PRIORITY_ORDER.indexOf(
        a.priority.toLowerCase()
      );
      const priorityB = Project.PRIORITY_ORDER.indexOf(
        b.priority.toLowerCase()
      );
      return priorityA - priorityB;
    });
  };

  sortByPriorityDesc = () => {
    this.#allTodos = this.#allTodos.sort((a, b) => {
      const priorityA = Project.PRIORITY_ORDER.indexOf(
        a.priority.toLowerCase()
      );
      const priorityB = Project.PRIORITY_ORDER.indexOf(
        b.priority.toLowerCase()
      );
      return priorityB - priorityA;
    });
  };

  sortByDateAsc = () => {
    this.#allTodos = this.#allTodos.sort((a, b) => {
      return Date.parse(a.date) - Date.parse(b.date);
    });
  };

  sortByDateDesc = () => {
    this.#allTodos = this.#allTodos.sort((a, b) => {
      return Date.parse(b.date) - Date.parse(a.date);
    });
  };

  sortByTitleAsc = () => {
    this.#allTodos = this.#allTodos.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  };

  sortByTitleDesc = () => {
    this.#allTodos = this.#allTodos.sort((a, b) => {
      return b.title.localeCompare(a.title);
    });
  };

  toString = () => {
    let msg = `Project Name: ${this.name}\nProject ID: ${this.id}\n`;
    if (this.#allTodos.length > 0) {
      for (let i = 0; i < this.#allTodos.length; i++) {
        msg += `To-do ${i + 1}:\n`;
        msg += this.#allTodos[i].toString() + '\n';
      }
    }
    return msg;
  };

  toJSON = () => {
    return {
      id: this.#id,
      allTodos: this.#allTodos.length
        ? this.#allTodos.map((todo) => todo.toJSON())
        : [],
      name: this.#name,
    };
  };

  static fromJSON(json) {
    const project = new Project(json.id, json.name);
    project.#allTodos = json.allTodos.map((todoJSON) =>
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
  return localTime.toISOString();
};

class Todo {
  #id;
  #title;
  #desc;
  #date;
  #priority;
  #check;
  #addDate;

  constructor(
    id = null,
    title = 'New Todo',
    desc = 'None',
    date = setTimeZone().slice(0, 10),
    priority = 'None',
    check = false,
    addDate = setTimeZone()
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
    this.#addDate = addDate;
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

  set addDate(date) {
    this.#addDate = date;
  }

  get addDate() {
    return this.#addDate;
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
      addDate: this.#addDate,
    };
  };

  static fromJSON = (json) => {
    return new Todo(
      json.id,
      json.title,
      json.desc,
      json.date,
      json.priority,
      json.check,
      json.addDate
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaURBQWlELDBCQUEwQix5QkFBeUIsMEJBQTBCLG9CQUFvQiw0QkFBNEIsaUNBQWlDLDJCQUEyQixvQkFBb0Isd0JBQXdCLDBCQUEwQixvQkFBb0IseUJBQXlCLG9CQUFvQixHQUFHLE9BQU8sY0FBYyxlQUFlLDJCQUEyQixHQUFHLFVBQVUsc0JBQXNCLDRDQUE0QyxHQUFHLFlBQVksdUJBQXVCLHNCQUFzQixHQUFHLFVBQVUsa0JBQWtCLFlBQVksaUJBQWlCLEdBQUcsK0RBQStELGlCQUFpQixHQUFHLGNBQWMsa0NBQWtDLGtCQUFrQixxQkFBcUIsR0FBRyxtQkFBbUIsZUFBZSwyQkFBMkIscUJBQXFCLEdBQUcsb0JBQW9CLGdCQUFnQixHQUFHLDZCQUE2QixrQkFBa0Isd0JBQXdCLGlCQUFpQixnQkFBZ0Isa0NBQWtDLEdBQUcsMkNBQTJDLHdCQUF3QixzQkFBc0IsOEJBQThCLHNDQUFzQyxHQUFHLDBCQUEwQixxQkFBcUIsV0FBVyxrQ0FBa0MsR0FBRyw0Q0FBNEMsMkJBQTJCLHlCQUF5QixHQUFHLHdDQUF3QyxrQkFBa0IsR0FBRyxvQ0FBb0MsOEJBQThCLGlCQUFpQixvQkFBb0Isd0JBQXdCLGlCQUFpQixHQUFHLDBDQUEwQyxzQ0FBc0MsR0FBRyxtREFBbUQsZ0JBQWdCLEdBQUcsaURBQWlELHNDQUFzQyxHQUFHLHdCQUF3QixrQkFBa0IsMkJBQTJCLGlCQUFpQixrQ0FBa0MseUJBQXlCLEdBQUcsbUJBQW1CLGtCQUFrQixnQkFBZ0IsR0FBRyxjQUFjLGdCQUFnQixxQkFBcUIsa0JBQWtCLHdCQUF3QixtQ0FBbUMsMkJBQTJCLEdBQUcscUJBQXFCLGlCQUFpQiw4QkFBOEIsaUJBQWlCLHVCQUF1QixHQUFHLG9CQUFvQix3Q0FBd0MsR0FBRywyQkFBMkIsMEJBQTBCLEdBQUcsMkJBQTJCLGtCQUFrQix1QkFBdUIsV0FBVyxZQUFZLGlCQUFpQixrQkFBa0IseUNBQXlDLDRCQUE0Qix3QkFBd0IsZUFBZSx1QkFBdUIsR0FBRyxpQ0FBaUMsb0JBQW9CLDBCQUEwQixxQ0FBcUMsR0FBRyw4Q0FBOEMsK0JBQStCLEdBQUcsMENBQTBDLGtCQUFrQiw0QkFBNEIsY0FBYyxHQUFHLHdEQUF3RCxvQkFBb0IsaUJBQWlCLDBCQUEwQiw4QkFBOEIsd0NBQXdDLEdBQUcscURBQXFELHdDQUF3QyxHQUFHLHFEQUFxRCxrQ0FBa0MsaUJBQWlCLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHLG1CQUFtQiw0QkFBNEIsa0JBQWtCLDBCQUEwQiw4QkFBOEIsa0JBQWtCLGNBQWMsMkJBQTJCLGlCQUFpQixHQUFHLHdCQUF3QixrQkFBa0IsdUJBQXVCLFdBQVcsWUFBWSxpQkFBaUIsa0JBQWtCLHlDQUF5Qyw0QkFBNEIsd0JBQXdCLGVBQWUsdUJBQXVCLEdBQUcsZ0JBQWdCLDRCQUE0QixrQkFBa0IsMEJBQTBCLDhCQUE4QixrQkFBa0IsMkJBQTJCLGlCQUFpQixjQUFjLEdBQUcsbUJBQW1CLHVCQUF1QixHQUFHLDBDQUEwQyxvQkFBb0IsMEJBQTBCLHFDQUFxQyw0Q0FBNEMsOEJBQThCLEdBQUcseUNBQXlDLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLHFCQUFxQixzQkFBc0Isb0NBQW9DLEdBQUcsNEJBQTRCLHdCQUF3QixHQUFHLDJEQUEyRCwrQkFBK0IsR0FBRywyQkFBMkIsaUJBQWlCLHNCQUFzQixtQkFBbUIscUJBQXFCLDBCQUEwQixHQUFHLGNBQWMsOEJBQThCLGdCQUFnQixrQkFBa0IscUJBQXFCLEdBQUcsdUJBQXVCLHFCQUFxQixrQkFBa0IsMkJBQTJCLFdBQVcsaUJBQWlCLEdBQUcsaUJBQWlCLG1CQUFtQixpQkFBaUIsZUFBZSw0Q0FBNEMsd0JBQXdCLHNCQUFzQiw4QkFBOEIscUJBQXFCLEdBQUcsb0JBQW9CLGtCQUFrQixlQUFlLDJDQUEyQywwQkFBMEIsNEJBQTRCLDJCQUEyQixvQkFBb0IsY0FBYyxHQUFHLG1DQUFtQyxxQkFBcUIsb0NBQW9DLGtCQUFrQix3QkFBd0IsbUNBQW1DLG9CQUFvQixHQUFHLG9EQUFvRCxvQ0FBb0Msc0JBQXNCLEdBQUcseURBQXlELGtDQUFrQyxHQUFHLHlDQUF5Qyw4QkFBOEIscUJBQXFCLEdBQUcsd0RBQXdELGtEQUFrRCxHQUFHLHFCQUFxQix1Q0FBdUMsR0FBRyx1QkFBdUIscUJBQXFCLFdBQVcsd0JBQXdCLDRCQUE0QixzQkFBc0IsR0FBRyxrQkFBa0Isa0JBQWtCLG1DQUFtQyx3QkFBd0IsMEJBQTBCLEdBQUcsK0JBQStCLHNCQUFzQiw4QkFBOEIseUJBQXlCLEdBQUcscUJBQXFCLGtCQUFrQixnQkFBZ0Isd0JBQXdCLEdBQUcsNEJBQTRCLG9CQUFvQix3Q0FBd0MsaUJBQWlCLDBCQUEwQixpQkFBaUIsR0FBRyxrQ0FBa0Msa0NBQWtDLGlCQUFpQixHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLGdCQUFnQixHQUFHLFdBQVcsa0JBQWtCLDJCQUEyQixnQkFBZ0IsMkJBQTJCLHlCQUF5Qix1Q0FBdUMsMEJBQTBCLEdBQUcsaUJBQWlCLG9EQUFvRCxHQUFHLGlCQUFpQixrQkFBa0Isd0JBQXdCLG1DQUFtQyx3QkFBd0IsR0FBRyxnQkFBZ0Isa0JBQWtCLGdCQUFnQixHQUFHLG9CQUFvQix1QkFBdUIsc0JBQXNCLEdBQUcsa0NBQWtDLHFCQUFxQiwwQkFBMEIsZ0JBQWdCLGlCQUFpQiw0QkFBNEIsNkNBQTZDLHdCQUF3QixvQkFBb0IsR0FBRywwQ0FBMEMsc0NBQXNDLEdBQUcsZ0JBQWdCLGtCQUFrQixnQkFBZ0IsR0FBRyxrQkFBa0Isb0JBQW9CLHVDQUF1QyxpQkFBaUIsd0JBQXdCLEdBQUcsaUJBQWlCLDhCQUE4QixHQUFHLHdCQUF3QiwwQkFBMEIsR0FBRyxtQkFBbUIsc0JBQXNCLG9DQUFvQyxrQkFBa0IsMkJBQTJCLGdCQUFnQixzQkFBc0IscUJBQXFCLEdBQUcsNkJBQTZCLGtCQUFrQixHQUFHLHdCQUF3QixvQ0FBb0MsR0FBRywrQkFBK0Isa0NBQWtDLEdBQUcsdUJBQXVCLHFCQUFxQixHQUFHLFlBQVksb0JBQW9CLG9CQUFvQixjQUFjLGlCQUFpQixpQkFBaUIsZUFBZSx1Q0FBdUMsdUJBQXVCLEdBQUcsZ0NBQWdDLHVFQUF1RSxHQUFHLDRDQUE0QyxrQkFBa0IsR0FBRyw0Q0FBNEMsZ0JBQWdCLEdBQUcsU0FBUyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGdCQUFnQixZQUFZO0FBQzVCLHNCQUFzQixXQUFXO0FBQ2pDLG1CQUFtQixXQUFXO0FBQzlCLG1CQUFtQixlQUFlO0FBQ2xDLGdCQUFnQixZQUFZO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbWQ1LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL25pbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3NoYTEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjEuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3YzLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92MzUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92NS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2Rpc3BsYXktY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvZG9tLWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9pbml0aWFsUE0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3Byb2plY3QtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvdG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0td2hpdGUtZ3JleTogI2ViZWJlYjtcXG4gIC0tcGFsZS1ncmV5OiAjZTNlOWViO1xcbiAgLS1saWdodC1ncmV5OiAjZDZkOWRhO1xcbiAgLS1ncmV5OiAjYjJiZWMzO1xcbiAgLS1uZXV0cmFsLWdyZXk6ICNhN2E3YTc7XFxuICAtLW1lZGl1bS1saWdodC1ncmV5OiAjNjQ2YTZjO1xcbiAgLS1tZWRpdW0tZ3JleTogIzQ0NGI0ZDtcXG4gIC0tZGFyazogIzJkMzQzNjtcXG4gIC0tc2t5LWJsdWU6ICM1NWEyZjA7XFxuICAtLWxpZ2h0LWJsdWU6ICMzZTkyZTY7XFxuICAtLWJsdWU6ICMwOTg0ZTM7XFxuICAtLWRhcmstYmx1ZTogIzAwNmZjNDtcXG4gIC0tcGluazogI2ZmNDY0NjtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCAnc3lzdGVtLXVpJztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhci5vcGVuICNwcm9qZWN0LWJ0bnMtY29udGFpbmVyLFxcbiNjb250ZW50ID4gaGVhZGVyIHtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI3NpZGViYXIub3BlbiB7XFxuICB3aWR0aDogMjUlO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIG1heC13aWR0aDogNDByZW07XFxufVxcblxcbiNzaWRlYmFyLmNsb3NlIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdC1idG5zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbiNzaWRlYmFyLm9wZW4gI3Byb2plY3QtYnRucy1jb250YWluZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHBhZGRpbmc6IDAgMC4ycmVtO1xcbiAgbWFyZ2luOiAwIDAuN3JlbSAwIDAuN3JlbTtcXG4gIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI3NpZGViYXIub3BlbiBoZWFkZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4jc2lkZWJhci5jbG9zZSAjcHJvamVjdC1idG5zLWNvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxufVxcblxcbiNzaWRlYmFyLmNsb3NlICNjbGVhci1hbGwtcHJvamVjdHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Byb2plY3QtYnRucy1jb250YWluZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jcHJvamVjdC1idG5zLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LWJsdWUpO1xcbn1cXG5cXG4jc2lkZWJhci5jbG9zZSAjcHJvamVjdC1idG5zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LnNlbGVjdGVkLFxcbi5wcm9qZWN0LnNlbGVjdGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS1ibHVlKTtcXG59XFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGhlaWdodDogNnZoO1xcbiAgbWluLWhlaWdodDogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtIDAuN3JlbTtcXG59XFxuXFxuLnByb2plY3QgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbn1cXG5cXG4ucHJvamVjdCBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLW92ZXJsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1vdmVybGF5IGlucHV0IHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLWdyZXkpO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLW92ZXJsYXkgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWdyZXkpO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWJ0bnMsXFxuI3RvZG8tZm9ybS1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1idG5zIGJ1dHRvbixcXG4jdG9kby1mb3JtLWJ0bnMgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1ncmV5KTtcXG59XFxuXFxuI2NhbmNlbC1wcm9qLWJ0bjpob3ZlcixcXG4jY2FuY2VsLXRvZG8tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4jc3VibWl0LXByb2otYnRuOmhvdmVyLFxcbiNzdWJtaXQtdG9kby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiN0b2RvLWZvcm0tYnRucyB7XFxuICBtYXJnaW4tdG9wOiAwLjhyZW07XFxufVxcblxcbiNwcm9qZWN0LWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDI1cmVtO1xcbn1cXG5cXG4jdG9kby1mb3JtLW92ZXJsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3RvZG8tZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjVyZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiN0b2RvLWZvcm0gaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdG9kby1mb3JtIGlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCAnc3lzdGVtLXVpJztcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxufVxcblxcbiN0b2RvLWZvcm0gPiBkaXY6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjNyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4jdG9kby1mb3JtID4gZGl2IGxhYmVsIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjJyZW07XFxufVxcblxcbiN0b2RvLWZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1ncmV5KTtcXG59XFxuXFxuI3RvZG8tZm9ybSAjdG9kby1kZXNjIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIG1heC1oZWlnaHQ6IDIwcmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI3NlYXJjaC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4jc2VhcmNoLWJhciB7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiA2NiU7XFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiA2NiU7XFxuICBib3JkZXI6IDAuMDdyZW0gc29saWQgdmFyKC0tcGFsZS1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogM3JlbTtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgLnNlYXJjaC1yZXN1bHQge1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgLnNlYXJjaC1yZXN1bHQgLm1hdGNoZWQtcHJvamVjdCB7XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWxpZ2h0LWdyZXkpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbiNkcm9wZG93bi1tZW51IC5zZWFyY2gtcmVzdWx0IC5tYXRjaGVkLXRvZG8uY2hlY2tlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgLnNlYXJjaC1yZXN1bHQ6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIGZvbnQtd2VpZ2h0OiA0NTA7XFxufVxcblxcbiNkcm9wZG93bi1tZW51ID4gLnNlYXJjaC1yZXN1bHQ6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1ib3R0b206IDAuMDdyZW0gc29saWQgdmFyKC0tcGFsZS1ncmV5KTtcXG59XFxuXFxuI3RvZG8tY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAuMnJlbSAxLjJyZW0gMnJlbSAxLjJyZW07XFxufVxcblxcbiNjb250ZW50ID4gaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG59XFxuXFxuI3RvZG8taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxLjVyZW0gMCAxcmVtO1xcbn1cXG5cXG4jdG9kby1jb250YWluZXIgaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4jdG9kby1tYWluLWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuI3RvZG8tbWFpbi1idG5zIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3RvZG8tbWFpbi1idG5zIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3RvZG8tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDAuMnJlbSB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxufVxcblxcbi50b2RvLXVwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8taW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvLXByaW9yaXR5IHtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udG9kbyBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tbmV1dHJhbC1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvIGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktYmx1ZSk7XFxufVxcblxcbi50b2RvLWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udG9kbyBidXR0b24ge1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ncmV5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxufVxcblxcbi50b2RvLWljb25zIHtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxufVxcblxcbi50b2RvIGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi50b2RvLWRldGFpbHMge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWxpZ2h0LWdyZXkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuM3JlbTtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG59XFxuXFxuLnRvZG8tZGVzYyxcXG4udG9kby1kYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLmNoZWNrZWQgc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4udG9kby5jaGVja2VkIC50b2RvLXRpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kbyAudG9kby10aXRsZSB7XFxuICBmb250LXdlaWdodDogNDUwO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgb3BhY2l0eTogMC44O1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtZ3JleSk7XFxuICBjb2xvcjogdmFyKC0tZGFyayk7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnRklMTCcgMCwgJ3dnaHQnIDIwMCwgJ0dSQUQnIDAsICdvcHN6JyA1MDtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgLnByb2otaWNvbnMge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgLnRvZG8taWNvbnMge1xcbiAgd2lkdGg6IDFyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0VBQ1AsWUFBWTtBQUNkOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Us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RUFDWix1QkFBdUI7RUFDdkIsd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVM7RUFDVCxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0VBQWtFO0FBQ3BFOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0td2hpdGUtZ3JleTogI2ViZWJlYjtcXG4gIC0tcGFsZS1ncmV5OiAjZTNlOWViO1xcbiAgLS1saWdodC1ncmV5OiAjZDZkOWRhO1xcbiAgLS1ncmV5OiAjYjJiZWMzO1xcbiAgLS1uZXV0cmFsLWdyZXk6ICNhN2E3YTc7XFxuICAtLW1lZGl1bS1saWdodC1ncmV5OiAjNjQ2YTZjO1xcbiAgLS1tZWRpdW0tZ3JleTogIzQ0NGI0ZDtcXG4gIC0tZGFyazogIzJkMzQzNjtcXG4gIC0tc2t5LWJsdWU6ICM1NWEyZjA7XFxuICAtLWxpZ2h0LWJsdWU6ICMzZTkyZTY7XFxuICAtLWJsdWU6ICMwOTg0ZTM7XFxuICAtLWRhcmstYmx1ZTogIzAwNmZjNDtcXG4gIC0tcGluazogI2ZmNDY0NjtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCAnc3lzdGVtLXVpJztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhci5vcGVuICNwcm9qZWN0LWJ0bnMtY29udGFpbmVyLFxcbiNjb250ZW50ID4gaGVhZGVyIHtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI3NpZGViYXIub3BlbiB7XFxuICB3aWR0aDogMjUlO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIG1heC13aWR0aDogNDByZW07XFxufVxcblxcbiNzaWRlYmFyLmNsb3NlIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdC1idG5zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbiNzaWRlYmFyLm9wZW4gI3Byb2plY3QtYnRucy1jb250YWluZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHBhZGRpbmc6IDAgMC4ycmVtO1xcbiAgbWFyZ2luOiAwIDAuN3JlbSAwIDAuN3JlbTtcXG4gIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI3NpZGViYXIub3BlbiBoZWFkZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4jc2lkZWJhci5jbG9zZSAjcHJvamVjdC1idG5zLWNvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxufVxcblxcbiNzaWRlYmFyLmNsb3NlICNjbGVhci1hbGwtcHJvamVjdHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Byb2plY3QtYnRucy1jb250YWluZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jcHJvamVjdC1idG5zLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LWJsdWUpO1xcbn1cXG5cXG4jc2lkZWJhci5jbG9zZSAjcHJvamVjdC1idG5zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LnNlbGVjdGVkLFxcbi5wcm9qZWN0LnNlbGVjdGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS1ibHVlKTtcXG59XFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGhlaWdodDogNnZoO1xcbiAgbWluLWhlaWdodDogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtIDAuN3JlbTtcXG59XFxuXFxuLnByb2plY3QgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbn1cXG5cXG4ucHJvamVjdCBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLW92ZXJsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1vdmVybGF5IGlucHV0IHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLWdyZXkpO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLW92ZXJsYXkgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWdyZXkpO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWJ0bnMsXFxuI3RvZG8tZm9ybS1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1idG5zIGJ1dHRvbixcXG4jdG9kby1mb3JtLWJ0bnMgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1ncmV5KTtcXG59XFxuXFxuI2NhbmNlbC1wcm9qLWJ0bjpob3ZlcixcXG4jY2FuY2VsLXRvZG8tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4jc3VibWl0LXByb2otYnRuOmhvdmVyLFxcbiNzdWJtaXQtdG9kby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiN0b2RvLWZvcm0tYnRucyB7XFxuICBtYXJnaW4tdG9wOiAwLjhyZW07XFxufVxcblxcbiNwcm9qZWN0LWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDI1cmVtO1xcbn1cXG5cXG4jdG9kby1mb3JtLW92ZXJsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3RvZG8tZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjVyZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiN0b2RvLWZvcm0gaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdG9kby1mb3JtIGlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCAnc3lzdGVtLXVpJztcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxufVxcblxcbiN0b2RvLWZvcm0gPiBkaXY6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjNyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4jdG9kby1mb3JtID4gZGl2IGxhYmVsIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjJyZW07XFxufVxcblxcbiN0b2RvLWZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1ncmV5KTtcXG59XFxuXFxuI3RvZG8tZm9ybSAjdG9kby1kZXNjIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIG1heC1oZWlnaHQ6IDIwcmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI3NlYXJjaC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4jc2VhcmNoLWJhciB7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiA2NiU7XFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiA2NiU7XFxuICBib3JkZXI6IDAuMDdyZW0gc29saWQgdmFyKC0tcGFsZS1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogM3JlbTtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgLnNlYXJjaC1yZXN1bHQge1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgLnNlYXJjaC1yZXN1bHQgLm1hdGNoZWQtcHJvamVjdCB7XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWxpZ2h0LWdyZXkpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbiNkcm9wZG93bi1tZW51IC5zZWFyY2gtcmVzdWx0IC5tYXRjaGVkLXRvZG8uY2hlY2tlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgLnNlYXJjaC1yZXN1bHQ6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIGZvbnQtd2VpZ2h0OiA0NTA7XFxufVxcblxcbiNkcm9wZG93bi1tZW51ID4gLnNlYXJjaC1yZXN1bHQ6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1ib3R0b206IDAuMDdyZW0gc29saWQgdmFyKC0tcGFsZS1ncmV5KTtcXG59XFxuXFxuI3RvZG8tY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAuMnJlbSAxLjJyZW0gMnJlbSAxLjJyZW07XFxufVxcblxcbiNjb250ZW50ID4gaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG59XFxuXFxuI3RvZG8taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxLjVyZW0gMCAxcmVtO1xcbn1cXG5cXG4jdG9kby1jb250YWluZXIgaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4jdG9kby1tYWluLWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuI3RvZG8tbWFpbi1idG5zIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3RvZG8tbWFpbi1idG5zIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3RvZG8tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDAuMnJlbSB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxufVxcblxcbi50b2RvLXVwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8taW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvLXByaW9yaXR5IHtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udG9kbyBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tbmV1dHJhbC1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvIGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktYmx1ZSk7XFxufVxcblxcbi50b2RvLWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udG9kbyBidXR0b24ge1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ncmV5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxufVxcblxcbi50b2RvLWljb25zIHtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxufVxcblxcbi50b2RvIGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi50b2RvLWRldGFpbHMge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWxpZ2h0LWdyZXkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuM3JlbTtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG59XFxuXFxuLnRvZG8tZGVzYyxcXG4udG9kby1kYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLmNoZWNrZWQgc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4udG9kby5jaGVja2VkIC50b2RvLXRpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kbyAudG9kby10aXRsZSB7XFxuICBmb250LXdlaWdodDogNDUwO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgb3BhY2l0eTogMC44O1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtZ3JleSk7XFxuICBjb2xvcjogdmFyKC0tZGFyayk7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnRklMTCcgMCwgJ3dnaHQnIDIwMCwgJ0dSQUQnIDAsICdvcHN6JyA1MDtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgLnByb2otaWNvbnMge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgLnRvZG8taWNvbnMge1xcbiAgd2lkdGg6IDFyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTklMXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9uaWwuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJwYXJzZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcGFyc2UuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzdHJpbmdpZnlcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYxXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3YyLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3YzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3Y0LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmFsaWRhdGVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3ZhbGlkYXRlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidmVyc2lvblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdmVyc2lvbi5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MS5qc1wiKSk7XG5cbnZhciBfdjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YzLmpzXCIpKTtcblxudmFyIF92MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjQuanNcIikpO1xuXG52YXIgX3Y0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92NS5qc1wiKSk7XG5cbnZhciBfbmlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9uaWwuanNcIikpO1xuXG52YXIgX3ZlcnNpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZlcnNpb24uanNcIikpO1xuXG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5cbnZhciBfc3RyaW5naWZ5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIikpO1xuXG52YXIgX3BhcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbi8qXG4gKiBCcm93c2VyLWNvbXBhdGlibGUgSmF2YVNjcmlwdCBNRDVcbiAqXG4gKiBNb2RpZmljYXRpb24gb2YgSmF2YVNjcmlwdCBNRDVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL0phdmFTY3JpcHQtTUQ1XG4gKlxuICogQ29weXJpZ2h0IDIwMTEsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIEJhc2VkIG9uXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFJTQSBEYXRhIFNlY3VyaXR5LCBJbmMuIE1ENSBNZXNzYWdlXG4gKiBEaWdlc3QgQWxnb3JpdGhtLCBhcyBkZWZpbmVkIGluIFJGQyAxMzIxLlxuICogVmVyc2lvbiAyLjIgQ29weXJpZ2h0IChDKSBQYXVsIEpvaG5zdG9uIDE5OTkgLSAyMDA5XG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBtb3JlIGluZm8uXG4gKi9cbmZ1bmN0aW9uIG1kNShieXRlcykge1xuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShtc2cubGVuZ3RoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlc1tpXSA9IG1zZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZDVUb0hleEVuY29kZWRBcnJheSh3b3Jkc1RvTWQ1KGJ5dGVzVG9Xb3JkcyhieXRlcyksIGJ5dGVzLmxlbmd0aCAqIDgpKTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMgdG8gYW4gYXJyYXkgb2YgYnl0ZXNcbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNVRvSGV4RW5jb2RlZEFycmF5KGlucHV0KSB7XG4gIGNvbnN0IG91dHB1dCA9IFtdO1xuICBjb25zdCBsZW5ndGgzMiA9IGlucHV0Lmxlbmd0aCAqIDMyO1xuICBjb25zdCBoZXhUYWIgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGgzMjsgaSArPSA4KSB7XG4gICAgY29uc3QgeCA9IGlucHV0W2kgPj4gNV0gPj4+IGkgJSAzMiAmIDB4ZmY7XG4gICAgY29uc3QgaGV4ID0gcGFyc2VJbnQoaGV4VGFiLmNoYXJBdCh4ID4+PiA0ICYgMHgwZikgKyBoZXhUYWIuY2hhckF0KHggJiAweDBmKSwgMTYpO1xuICAgIG91dHB1dC5wdXNoKGhleCk7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgb3V0cHV0IGxlbmd0aCB3aXRoIHBhZGRpbmcgYW5kIGJpdCBsZW5ndGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE91dHB1dExlbmd0aChpbnB1dExlbmd0aDgpIHtcbiAgcmV0dXJuIChpbnB1dExlbmd0aDggKyA2NCA+Pj4gOSA8PCA0KSArIDE0ICsgMTtcbn1cbi8qXG4gKiBDYWxjdWxhdGUgdGhlIE1ENSBvZiBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzLCBhbmQgYSBiaXQgbGVuZ3RoLlxuICovXG5cblxuZnVuY3Rpb24gd29yZHNUb01kNSh4LCBsZW4pIHtcbiAgLyogYXBwZW5kIHBhZGRpbmcgKi9cbiAgeFtsZW4gPj4gNV0gfD0gMHg4MCA8PCBsZW4gJSAzMjtcbiAgeFtnZXRPdXRwdXRMZW5ndGgobGVuKSAtIDFdID0gbGVuO1xuICBsZXQgYSA9IDE3MzI1ODQxOTM7XG4gIGxldCBiID0gLTI3MTczMzg3OTtcbiAgbGV0IGMgPSAtMTczMjU4NDE5NDtcbiAgbGV0IGQgPSAyNzE3MzM4Nzg7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNikge1xuICAgIGNvbnN0IG9sZGEgPSBhO1xuICAgIGNvbnN0IG9sZGIgPSBiO1xuICAgIGNvbnN0IG9sZGMgPSBjO1xuICAgIGNvbnN0IG9sZGQgPSBkO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2ldLCA3LCAtNjgwODc2OTM2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMV0sIDEyLCAtMzg5NTY0NTg2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE3LCA2MDYxMDU4MTkpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgNF0sIDcsIC0xNzY0MTg4OTcpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA1XSwgMTIsIDEyMDAwODA0MjYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTcsIC0xNDczMjMxMzQxKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgN10sIDIyLCAtNDU3MDU5ODMpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNywgMTc3MDAzNTQxNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDldLCAxMiwgLTE5NTg0MTQ0MTcpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE3LCAtNDIwNjMpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxMV0sIDIyLCAtMTk5MDQwNDE2Mik7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNywgMTgwNDYwMzY4Mik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDEzXSwgMTIsIC00MDM0MTEwMSk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTcsIC0xNTAyMDAyMjkwKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTVdLCAyMiwgMTIzNjUzNTMyOSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA1LCAtMTY1Nzk2NTEwKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgNl0sIDksIC0xMDY5NTAxNjMyKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNCwgNjQzNzE3NzEzKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNSwgLTcwMTU1ODY5MSk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDEwXSwgOSwgMzgwMTYwODMpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE0LCAtNjYwNDc4MzM1KTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgNF0sIDIwLCAtNDA1NTM3ODQ4KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgOV0sIDUsIDU2ODQ0NjQzOCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDE0XSwgOSwgLTEwMTk4MDM2OTApO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA4XSwgMjAsIDExNjM1MzE1MDEpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDUsIC0xNDQ0NjgxNDY3KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMl0sIDksIC01MTQwMzc4NCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNCwgMTczNTMyODQ3Myk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDEyXSwgMjAsIC0xOTI2NjA3NzM0KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgNV0sIDQsIC0zNzg1NTgpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA4XSwgMTEsIC0yMDIyNTc0NDYzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTFdLCAxNiwgMTgzOTAzMDU2Mik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDE0XSwgMjMsIC0zNTMwOTU1Nik7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDFdLCA0LCAtMTUzMDk5MjA2MCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDRdLCAxMSwgMTI3Mjg5MzM1Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDEwXSwgMjMsIC0xMDk0NzMwNjQwKTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMTNdLCA0LCA2ODEyNzkxNzQpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2ldLCAxMSwgLTM1ODUzNzIyMik7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNiwgLTcyMjUyMTk3OSk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDZdLCAyMywgNzYwMjkxODkpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNCwgLTY0MDM2NDQ4Nyk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDEyXSwgMTEsIC00MjE4MTU4MzUpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxNV0sIDE2LCA1MzA3NDI1MjApO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAyXSwgMjMsIC05OTUzMzg2NTEpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2ldLCA2LCAtMTk4NjMwODQ0KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgN10sIDEwLCAxMTI2ODkxNDE1KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDEyXSwgNiwgMTcwMDQ4NTU3MSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDNdLCAxMCwgLTE4OTQ5ODY2MDYpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA4XSwgNiwgMTg3MzMxMzM1OSk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDE1XSwgMTAsIC0zMDYxMTc0NCk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNSwgLTE1NjAxOTgzODApO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxM10sIDIxLCAxMzA5MTUxNjQ5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgNF0sIDYsIC0xNDU1MjMwNzApO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxMV0sIDEwLCAtMTEyMDIxMDM3OSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNSwgNzE4Nzg3MjU5KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgOV0sIDIxLCAtMzQzNDg1NTUxKTtcbiAgICBhID0gc2FmZUFkZChhLCBvbGRhKTtcbiAgICBiID0gc2FmZUFkZChiLCBvbGRiKTtcbiAgICBjID0gc2FmZUFkZChjLCBvbGRjKTtcbiAgICBkID0gc2FmZUFkZChkLCBvbGRkKTtcbiAgfVxuXG4gIHJldHVybiBbYSwgYiwgYywgZF07XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBieXRlcyB0byBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzXG4gKiBDaGFyYWN0ZXJzID4yNTUgaGF2ZSB0aGVpciBoaWdoLWJ5dGUgc2lsZW50bHkgaWdub3JlZC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJ5dGVzVG9Xb3JkcyhpbnB1dCkge1xuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgbGVuZ3RoOCA9IGlucHV0Lmxlbmd0aCAqIDg7XG4gIGNvbnN0IG91dHB1dCA9IG5ldyBVaW50MzJBcnJheShnZXRPdXRwdXRMZW5ndGgobGVuZ3RoOCkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoODsgaSArPSA4KSB7XG4gICAgb3V0cHV0W2kgPj4gNV0gfD0gKGlucHV0W2kgLyA4XSAmIDB4ZmYpIDw8IGkgJSAzMjtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKlxuICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICogdG8gd29yayBhcm91bmQgYnVncyBpbiBzb21lIEpTIGludGVycHJldGVycy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHNhZmVBZGQoeCwgeSkge1xuICBjb25zdCBsc3cgPSAoeCAmIDB4ZmZmZikgKyAoeSAmIDB4ZmZmZik7XG4gIGNvbnN0IG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICByZXR1cm4gbXN3IDw8IDE2IHwgbHN3ICYgMHhmZmZmO1xufVxuLypcbiAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpdFJvdGF0ZUxlZnQobnVtLCBjbnQpIHtcbiAgcmV0dXJuIG51bSA8PCBjbnQgfCBudW0gPj4+IDMyIC0gY250O1xufVxuLypcbiAqIFRoZXNlIGZ1bmN0aW9ucyBpbXBsZW1lbnQgdGhlIGZvdXIgYmFzaWMgb3BlcmF0aW9ucyB0aGUgYWxnb3JpdGhtIHVzZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVjbW4ocSwgYSwgYiwgeCwgcywgdCkge1xuICByZXR1cm4gc2FmZUFkZChiaXRSb3RhdGVMZWZ0KHNhZmVBZGQoc2FmZUFkZChhLCBxKSwgc2FmZUFkZCh4LCB0KSksIHMpLCBiKTtcbn1cblxuZnVuY3Rpb24gbWQ1ZmYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBjIHwgfmIgJiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1Z2coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgJiBkIHwgYyAmIH5kLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aGgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWlpKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihjIF4gKGIgfCB+ZCksIGEsIGIsIHgsIHMsIHQpO1xufVxuXG52YXIgX2RlZmF1bHQgPSBtZDU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbmNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG52YXIgX2RlZmF1bHQgPSB7XG4gIHJhbmRvbVVVSURcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gcGFyc2UodXVpZCkge1xuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgbGV0IHY7XG4gIGNvbnN0IGFyciA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gUGFyc2UgIyMjIyMjIyMtLi4uLi0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzBdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDAsIDgpLCAxNikpID4+PiAyNDtcbiAgYXJyWzFdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMl0gPSB2ID4+PiA4ICYgMHhmZjtcbiAgYXJyWzNdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLSMjIyMtLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls0XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSg5LCAxMyksIDE2KSkgPj4+IDg7XG4gIGFycls1XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLSMjIyMtLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNl0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE4KSwgMTYpKSA+Pj4gODtcbiAgYXJyWzddID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0jIyMjLS4uLi4uLi4uLi4uLlxuXG4gIGFycls4XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxOSwgMjMpLCAxNikpID4+PiA4O1xuICBhcnJbOV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLS4uLi4tIyMjIyMjIyMjIyMjXG4gIC8vIChVc2UgXCIvXCIgdG8gYXZvaWQgMzItYml0IHRydW5jYXRpb24gd2hlbiBiaXQtc2hpZnRpbmcgaGlnaC1vcmRlciBieXRlcylcblxuICBhcnJbMTBdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDI0LCAzNiksIDE2KSkgLyAweDEwMDAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzExXSA9IHYgLyAweDEwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMl0gPSB2ID4+PiAyNCAmIDB4ZmY7XG4gIGFyclsxM10gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsxNF0gPSB2ID4+PiA4ICYgMHhmZjtcbiAgYXJyWzE1XSA9IHYgJiAweGZmO1xuICByZXR1cm4gYXJyO1xufVxuXG52YXIgX2RlZmF1bHQgPSBwYXJzZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBybmc7XG4vLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcblxuZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbi8vIEFkYXB0ZWQgZnJvbSBDaHJpcyBWZW5lc3MnIFNIQTEgY29kZSBhdFxuLy8gaHR0cDovL3d3dy5tb3ZhYmxlLXR5cGUuY28udWsvc2NyaXB0cy9zaGExLmh0bWxcbmZ1bmN0aW9uIGYocywgeCwgeSwgeikge1xuICBzd2l0Y2ggKHMpIHtcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4geCAmIHkgXiB+eCAmIHo7XG5cbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIHggJiB5IF4geCAmIHogXiB5ICYgejtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG4gIH1cbn1cblxuZnVuY3Rpb24gUk9UTCh4LCBuKSB7XG4gIHJldHVybiB4IDw8IG4gfCB4ID4+PiAzMiAtIG47XG59XG5cbmZ1bmN0aW9uIHNoYTEoYnl0ZXMpIHtcbiAgY29uc3QgSyA9IFsweDVhODI3OTk5LCAweDZlZDllYmExLCAweDhmMWJiY2RjLCAweGNhNjJjMWQ2XTtcbiAgY29uc3QgSCA9IFsweDY3NDUyMzAxLCAweGVmY2RhYjg5LCAweDk4YmFkY2ZlLCAweDEwMzI1NDc2LCAweGMzZDJlMWYwXTtcblxuICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IG1zZyA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChieXRlcykpOyAvLyBVVEY4IGVzY2FwZVxuXG4gICAgYnl0ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXNnLmxlbmd0aDsgKytpKSB7XG4gICAgICBieXRlcy5wdXNoKG1zZy5jaGFyQ29kZUF0KGkpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoYnl0ZXMpKSB7XG4gICAgLy8gQ29udmVydCBBcnJheS1saWtlIHRvIEFycmF5XG4gICAgYnl0ZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChieXRlcyk7XG4gIH1cblxuICBieXRlcy5wdXNoKDB4ODApO1xuICBjb25zdCBsID0gYnl0ZXMubGVuZ3RoIC8gNCArIDI7XG4gIGNvbnN0IE4gPSBNYXRoLmNlaWwobCAvIDE2KTtcbiAgY29uc3QgTSA9IG5ldyBBcnJheShOKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IE47ICsraSkge1xuICAgIGNvbnN0IGFyciA9IG5ldyBVaW50MzJBcnJheSgxNik7XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIGFycltqXSA9IGJ5dGVzW2kgKiA2NCArIGogKiA0XSA8PCAyNCB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMV0gPDwgMTYgfCBieXRlc1tpICogNjQgKyBqICogNCArIDJdIDw8IDggfCBieXRlc1tpICogNjQgKyBqICogNCArIDNdO1xuICAgIH1cblxuICAgIE1baV0gPSBhcnI7XG4gIH1cblxuICBNW04gLSAxXVsxNF0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4IC8gTWF0aC5wb3coMiwgMzIpO1xuICBNW04gLSAxXVsxNF0gPSBNYXRoLmZsb29yKE1bTiAtIDFdWzE0XSk7XG4gIE1bTiAtIDFdWzE1XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggJiAweGZmZmZmZmZmO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgY29uc3QgVyA9IG5ldyBVaW50MzJBcnJheSg4MCk7XG5cbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDE2OyArK3QpIHtcbiAgICAgIFdbdF0gPSBNW2ldW3RdO1xuICAgIH1cblxuICAgIGZvciAobGV0IHQgPSAxNjsgdCA8IDgwOyArK3QpIHtcbiAgICAgIFdbdF0gPSBST1RMKFdbdCAtIDNdIF4gV1t0IC0gOF0gXiBXW3QgLSAxNF0gXiBXW3QgLSAxNl0sIDEpO1xuICAgIH1cblxuICAgIGxldCBhID0gSFswXTtcbiAgICBsZXQgYiA9IEhbMV07XG4gICAgbGV0IGMgPSBIWzJdO1xuICAgIGxldCBkID0gSFszXTtcbiAgICBsZXQgZSA9IEhbNF07XG5cbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDgwOyArK3QpIHtcbiAgICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKHQgLyAyMCk7XG4gICAgICBjb25zdCBUID0gUk9UTChhLCA1KSArIGYocywgYiwgYywgZCkgKyBlICsgS1tzXSArIFdbdF0gPj4+IDA7XG4gICAgICBlID0gZDtcbiAgICAgIGQgPSBjO1xuICAgICAgYyA9IFJPVEwoYiwgMzApID4+PiAwO1xuICAgICAgYiA9IGE7XG4gICAgICBhID0gVDtcbiAgICB9XG5cbiAgICBIWzBdID0gSFswXSArIGEgPj4+IDA7XG4gICAgSFsxXSA9IEhbMV0gKyBiID4+PiAwO1xuICAgIEhbMl0gPSBIWzJdICsgYyA+Pj4gMDtcbiAgICBIWzNdID0gSFszXSArIGQgPj4+IDA7XG4gICAgSFs0XSA9IEhbNF0gKyBlID4+PiAwO1xuICB9XG5cbiAgcmV0dXJuIFtIWzBdID4+IDI0ICYgMHhmZiwgSFswXSA+PiAxNiAmIDB4ZmYsIEhbMF0gPj4gOCAmIDB4ZmYsIEhbMF0gJiAweGZmLCBIWzFdID4+IDI0ICYgMHhmZiwgSFsxXSA+PiAxNiAmIDB4ZmYsIEhbMV0gPj4gOCAmIDB4ZmYsIEhbMV0gJiAweGZmLCBIWzJdID4+IDI0ICYgMHhmZiwgSFsyXSA+PiAxNiAmIDB4ZmYsIEhbMl0gPj4gOCAmIDB4ZmYsIEhbMl0gJiAweGZmLCBIWzNdID4+IDI0ICYgMHhmZiwgSFszXSA+PiAxNiAmIDB4ZmYsIEhbM10gPj4gOCAmIDB4ZmYsIEhbM10gJiAweGZmLCBIWzRdID4+IDI0ICYgMHhmZiwgSFs0XSA+PiAxNiAmIDB4ZmYsIEhbNF0gPj4gOCAmIDB4ZmYsIEhbNF0gJiAweGZmXTtcbn1cblxudmFyIF9kZWZhdWx0ID0gc2hhMTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuZXhwb3J0cy51bnNhZmVTdHJpbmdpZnkgPSB1bnNhZmVTdHJpbmdpZnk7XG5cbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5mdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCEoMCwgX3ZhbGlkYXRlLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG52YXIgX2RlZmF1bHQgPSBzdHJpbmdpZnk7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9ybmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JuZy5qc1wiKSk7XG5cbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5sZXQgX25vZGVJZDtcblxubGV0IF9jbG9ja3NlcTsgLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG5cblxubGV0IF9sYXN0TVNlY3MgPSAwO1xubGV0IF9sYXN0TlNlY3MgPSAwOyAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkIGZvciBBUEkgZGV0YWlsc1xuXG5mdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBsZXQgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcbiAgY29uc3QgYiA9IGJ1ZiB8fCBuZXcgQXJyYXkoMTYpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGV0IG5vZGUgPSBvcHRpb25zLm5vZGUgfHwgX25vZGVJZDtcbiAgbGV0IGNsb2Nrc2VxID0gb3B0aW9ucy5jbG9ja3NlcSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbG9ja3NlcSA6IF9jbG9ja3NlcTsgLy8gbm9kZSBhbmQgY2xvY2tzZXEgbmVlZCB0byBiZSBpbml0aWFsaXplZCB0byByYW5kb20gdmFsdWVzIGlmIHRoZXkncmUgbm90XG4gIC8vIHNwZWNpZmllZC4gIFdlIGRvIHRoaXMgbGF6aWx5IHRvIG1pbmltaXplIGlzc3VlcyByZWxhdGVkIHRvIGluc3VmZmljaWVudFxuICAvLyBzeXN0ZW0gZW50cm9weS4gIFNlZSAjMTg5XG5cbiAgaWYgKG5vZGUgPT0gbnVsbCB8fCBjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgY29uc3Qgc2VlZEJ5dGVzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcuZGVmYXVsdCkoKTtcblxuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjUsIGNyZWF0ZSBhbmQgNDgtYml0IG5vZGUgaWQsICg0NyByYW5kb20gYml0cyArIG11bHRpY2FzdCBiaXQgPSAxKVxuICAgICAgbm9kZSA9IF9ub2RlSWQgPSBbc2VlZEJ5dGVzWzBdIHwgMHgwMSwgc2VlZEJ5dGVzWzFdLCBzZWVkQnl0ZXNbMl0sIHNlZWRCeXRlc1szXSwgc2VlZEJ5dGVzWzRdLCBzZWVkQnl0ZXNbNV1dO1xuICAgIH1cblxuICAgIGlmIChjbG9ja3NlcSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC4yLjIsIHJhbmRvbWl6ZSAoMTQgYml0KSBjbG9ja3NlcVxuICAgICAgY2xvY2tzZXEgPSBfY2xvY2tzZXEgPSAoc2VlZEJ5dGVzWzZdIDw8IDggfCBzZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuICAgIH1cbiAgfSAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAvLyAoMTU4Mi0xMC0xNSAwMDowMCkuICBKU051bWJlcnMgYXJlbid0IHByZWNpc2UgZW5vdWdoIGZvciB0aGlzLCBzb1xuICAvLyB0aW1lIGlzIGhhbmRsZWQgaW50ZXJuYWxseSBhcyAnbXNlY3MnIChpbnRlZ2VyIG1pbGxpc2Vjb25kcykgYW5kICduc2VjcydcbiAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cblxuXG4gIGxldCBtc2VjcyA9IG9wdGlvbnMubXNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubXNlY3MgOiBEYXRlLm5vdygpOyAvLyBQZXIgNC4yLjEuMiwgdXNlIGNvdW50IG9mIHV1aWQncyBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBjdXJyZW50IGNsb2NrXG4gIC8vIGN5Y2xlIHRvIHNpbXVsYXRlIGhpZ2hlciByZXNvbHV0aW9uIGNsb2NrXG5cbiAgbGV0IG5zZWNzID0gb3B0aW9ucy5uc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxOyAvLyBUaW1lIHNpbmNlIGxhc3QgdXVpZCBjcmVhdGlvbiAoaW4gbXNlY3MpXG5cbiAgY29uc3QgZHQgPSBtc2VjcyAtIF9sYXN0TVNlY3MgKyAobnNlY3MgLSBfbGFzdE5TZWNzKSAvIDEwMDAwOyAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG5cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfSAvLyBSZXNldCBuc2VjcyBpZiBjbG9jayByZWdyZXNzZXMgKG5ldyBjbG9ja3NlcSkgb3Igd2UndmUgbW92ZWQgb250byBhIG5ld1xuICAvLyB0aW1lIGludGVydmFsXG5cblxuICBpZiAoKGR0IDwgMCB8fCBtc2VjcyA+IF9sYXN0TVNlY3MpICYmIG9wdGlvbnMubnNlY3MgPT09IHVuZGVmaW5lZCkge1xuICAgIG5zZWNzID0gMDtcbiAgfSAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG5cblxuICBpZiAobnNlY3MgPj0gMTAwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1dWlkLnYxKCk6IENhbid0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlY1wiKTtcbiAgfVxuXG4gIF9sYXN0TVNlY3MgPSBtc2VjcztcbiAgX2xhc3ROU2VjcyA9IG5zZWNzO1xuICBfY2xvY2tzZXEgPSBjbG9ja3NlcTsgLy8gUGVyIDQuMS40IC0gQ29udmVydCBmcm9tIHVuaXggZXBvY2ggdG8gR3JlZ29yaWFuIGVwb2NoXG5cbiAgbXNlY3MgKz0gMTIyMTkyOTI4MDAwMDA7IC8vIGB0aW1lX2xvd2BcblxuICBjb25zdCB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7IC8vIGB0aW1lX21pZGBcblxuICBjb25zdCB0bWggPSBtc2VjcyAvIDB4MTAwMDAwMDAwICogMTAwMDAgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7IC8vIGB0aW1lX2hpZ2hfYW5kX3ZlcnNpb25gXG5cbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMTYgJiAweGZmOyAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcblxuICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7IC8vIGBjbG9ja19zZXFfbG93YFxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxICYgMHhmZjsgLy8gYG5vZGVgXG5cbiAgZm9yIChsZXQgbiA9IDA7IG4gPCA2OyArK24pIHtcbiAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gIH1cblxuICByZXR1cm4gYnVmIHx8ICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkoYik7XG59XG5cbnZhciBfZGVmYXVsdCA9IHYxO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjM1LmpzXCIpKTtcblxudmFyIF9tZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWQ1LmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3QgdjMgPSAoMCwgX3YuZGVmYXVsdCkoJ3YzJywgMHgzMCwgX21kLmRlZmF1bHQpO1xudmFyIF9kZWZhdWx0ID0gdjM7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVVJMID0gZXhwb3J0cy5ETlMgPSB2b2lkIDA7XG5leHBvcnRzLmRlZmF1bHQgPSB2MzU7XG5cbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuXG52YXIgX3BhcnNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wYXJzZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHN0cmluZ1RvQnl0ZXMoc3RyKSB7XG4gIHN0ciA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdHIpKTsgLy8gVVRGOCBlc2NhcGVcblxuICBjb25zdCBieXRlcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgYnl0ZXMucHVzaChzdHIuY2hhckNvZGVBdChpKSk7XG4gIH1cblxuICByZXR1cm4gYnl0ZXM7XG59XG5cbmNvbnN0IEROUyA9ICc2YmE3YjgxMC05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0cy5ETlMgPSBETlM7XG5jb25zdCBVUkwgPSAnNmJhN2I4MTEtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydHMuVVJMID0gVVJMO1xuXG5mdW5jdGlvbiB2MzUobmFtZSwgdmVyc2lvbiwgaGFzaGZ1bmMpIHtcbiAgZnVuY3Rpb24gZ2VuZXJhdGVVVUlEKHZhbHVlLCBuYW1lc3BhY2UsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgdmFyIF9uYW1lc3BhY2U7XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBzdHJpbmdUb0J5dGVzKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWVzcGFjZSA9ICgwLCBfcGFyc2UuZGVmYXVsdCkobmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBpZiAoKChfbmFtZXNwYWNlID0gbmFtZXNwYWNlKSA9PT0gbnVsbCB8fCBfbmFtZXNwYWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfbmFtZXNwYWNlLmxlbmd0aCkgIT09IDE2KSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ05hbWVzcGFjZSBtdXN0IGJlIGFycmF5LWxpa2UgKDE2IGl0ZXJhYmxlIGludGVnZXIgdmFsdWVzLCAwLTI1NSknKTtcbiAgICB9IC8vIENvbXB1dGUgaGFzaCBvZiBuYW1lc3BhY2UgYW5kIHZhbHVlLCBQZXIgNC4zXG4gICAgLy8gRnV0dXJlOiBVc2Ugc3ByZWFkIHN5bnRheCB3aGVuIHN1cHBvcnRlZCBvbiBhbGwgcGxhdGZvcm1zLCBlLmcuIGBieXRlcyA9XG4gICAgLy8gaGFzaGZ1bmMoWy4uLm5hbWVzcGFjZSwgLi4uIHZhbHVlXSlgXG5cblxuICAgIGxldCBieXRlcyA9IG5ldyBVaW50OEFycmF5KDE2ICsgdmFsdWUubGVuZ3RoKTtcbiAgICBieXRlcy5zZXQobmFtZXNwYWNlKTtcbiAgICBieXRlcy5zZXQodmFsdWUsIG5hbWVzcGFjZS5sZW5ndGgpO1xuICAgIGJ5dGVzID0gaGFzaGZ1bmMoYnl0ZXMpO1xuICAgIGJ5dGVzWzZdID0gYnl0ZXNbNl0gJiAweDBmIHwgdmVyc2lvbjtcbiAgICBieXRlc1s4XSA9IGJ5dGVzWzhdICYgMHgzZiB8IDB4ODA7XG5cbiAgICBpZiAoYnVmKSB7XG4gICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVzW2ldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYnVmO1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKGJ5dGVzKTtcbiAgfSAvLyBGdW5jdGlvbiNuYW1lIGlzIG5vdCBzZXR0YWJsZSBvbiBzb21lIHBsYXRmb3JtcyAoIzI3MClcblxuXG4gIHRyeSB7XG4gICAgZ2VuZXJhdGVVVUlELm5hbWUgPSBuYW1lOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgfSBjYXRjaCAoZXJyKSB7fSAvLyBGb3IgQ29tbW9uSlMgZGVmYXVsdCBleHBvcnQgc3VwcG9ydFxuXG5cbiAgZ2VuZXJhdGVVVUlELkROUyA9IEROUztcbiAgZ2VuZXJhdGVVVUlELlVSTCA9IFVSTDtcbiAgcmV0dXJuIGdlbmVyYXRlVVVJRDtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9uYXRpdmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL25hdGl2ZS5qc1wiKSk7XG5cbnZhciBfcm5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ybmcuanNcIikpO1xuXG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKF9uYXRpdmUuZGVmYXVsdC5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gX25hdGl2ZS5kZWZhdWx0LnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgX3JuZy5kZWZhdWx0KSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKHJuZHMpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2NDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YzNS5qc1wiKSk7XG5cbnZhciBfc2hhID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zaGExLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuY29uc3QgdjUgPSAoMCwgX3YuZGVmYXVsdCkoJ3Y1JywgMHg1MCwgX3NoYS5kZWZhdWx0KTtcbnZhciBfZGVmYXVsdCA9IHY1O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVnZXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlZ2V4LmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIF9yZWdleC5kZWZhdWx0LnRlc3QodXVpZCk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHZhbGlkYXRlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdmVyc2lvbih1dWlkKSB7XG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTUpLCAxNik7XG59XG5cbnZhciBfZGVmYXVsdCA9IHZlcnNpb247XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJpbXBvcnQgZG9tQ3JlYXRvciBmcm9tICcuL2RvbS1jcmVhdG9yJztcbmltcG9ydCBUb2RvLCB7IHNldFRpbWVab25lIH0gZnJvbSAnLi90b2RvJztcbmltcG9ydCBwbSBmcm9tICcuL2luaXRpYWxQTSc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuXG5jb25zdCBwcm9qVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG5jb25zdCB0b2RvVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1saXN0Jyk7XG5jb25zdCBhZGRQcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0Jyk7XG5jb25zdCBwcm9qRm9ybU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtLW92ZXJsYXknKTtcbmNvbnN0IHByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybScpO1xuY29uc3QgcHJvak5hbWVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcbmNvbnN0IGNsZWFyUHJvakJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhci1hbGwtcHJvamVjdHMnKTtcbmNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRvZG8nKTtcbmNvbnN0IGNsZWFyVG9kb3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xlYXItYWxsLXRvZG9zJyk7XG5jb25zdCB0b2RvRm9ybU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1mb3JtLW92ZXJsYXknKTtcbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybScpO1xuY29uc3QgdG9kb1RpdGxlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby10aXRsZScpO1xuY29uc3QgdG9kb0Rlc2NGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRlc2MnKTtcbmNvbnN0IHRvZG9EYXRlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kYXRlJyk7XG5jb25zdCB0b2RvUHJpb3JpdHlGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXByaW9yaXR5Jyk7XG5jb25zdCBjYW5jZWxQcm9qRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtcHJvai1idG4nKTtcbmNvbnN0IGNhbmNlbFRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC10b2RvLWJ0bicpO1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XG5jb25zdCBzaWRlYmFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXItYnRuJyk7XG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtY29udGFpbmVyJyk7XG5jb25zdCBzaG93Q29tcGxldGVkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctY29tcGxldGVkJyk7XG5jb25zdCBjdXJyUHJvak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1wcm9qZWN0LW5hbWUnKTtcbmNvbnN0IHNlYXJjaEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1iYXInKTtcbmNvbnN0IGRyb3Bkb3duTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wZG93bi1tZW51Jyk7XG5jb25zdCBzb3J0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LW1lbnUnKTtcbmNvbnN0IHNvcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC10b2RvJyk7XG5cbmNvbnN0IHNvcnRGdW5jdGlvbnMgPSBuZXcgTWFwKFtcbiAgWydEdWUgRGF0ZSAtIENsb3Nlc3QgRmlyc3QnLCAoKSA9PiBwbS5zb3J0QnlEYXRlQXNjKCldLFxuICBbJ0R1ZSBEYXRlIC0gRnVydGhlc3QgRmlyc3QnLCAoKSA9PiBwbS5zb3J0QnlEYXRlRGVzYygpXSxcbiAgWydQcmlvcml0eSAtIExvd2VzdCBGaXJzdCcsICgpID0+IHBtLnNvcnRCeVByaW9yaXR5QXNjKCldLFxuICBbJ1ByaW9yaXR5IC0gSGlnaGVzdCBGaXJzdCcsICgpID0+IHBtLnNvcnRCeVByaW9yaXR5RGVzYygpXSxcbiAgWydUaXRsZSAtIEEgdG8gWicsICgpID0+IHBtLnNvcnRCeVRpdGxlQXNjKCldLFxuICBbJ1RpdGxlIC0gWiB0byBBJywgKCkgPT4gcG0uc29ydEJ5VGl0bGVEZXNjKCldLFxuICBbJ0RhdGUgQ3JlYXRlZCAtIE9sZGVzdCBGaXJzdCcsICgpID0+IHBtLnNvcnRCeUFkZERhdGVBc2MoKV0sXG4gIFsnRGF0ZSBDcmVhdGVkIC0gTmV3ZXN0IEZpcnN0JywgKCkgPT4gcG0uc29ydEJ5QWRkRGF0ZURlc2MoKV0sXG5dKTtcblxuY29uc3QgRURJVCA9IDAsXG4gIEFERCA9IDE7XG5cbmxldCBwcm9qVG9FZGl0ID0gbnVsbDtcbmxldCBwcm9qZWN0TW9kZSA9IEFERDtcbmxldCBzZWxlY3RlZFRvZG8gPSBudWxsO1xubGV0IHRvZG9Nb2RlID0gQUREO1xubGV0IHNob3dDb21wbGV0ZWQgPSBmYWxzZTtcbmxldCBzb3J0TW9kZSA9ICdEYXRlIENyZWF0ZWQgLSBPbGRlc3QgRmlyc3QnO1xuXG5jb25zdCBjbGVhclByb2plY3RzID0gKCkgPT4ge1xuICBpZiAocHJvalVsKSB7XG4gICAgcHJvalVsLnRleHRDb250ZW50ID0gJyc7XG4gIH1cbn07XG5cbmNvbnN0IGNsZWFyVG9kb3MgPSAoKSA9PiB7XG4gIGlmICh0b2RvVWwpIHtcbiAgICB0b2RvVWwudGV4dENvbnRlbnQgPSAnJztcbiAgfVxufTtcblxuY29uc3Qgc2hvd1Byb2plY3RzID0gKCkgPT4ge1xuICBpZiAocG0uaXNFbXB0eSgpKSB7XG4gICAgY3VyclByb2pOYW1lLnRleHRDb250ZW50ID0gJyc7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAoY29uc3QgcHJvamVjdCBvZiBwbS5wcm9qZWN0cykge1xuICAgIHByb2pVbC5hcHBlbmRDaGlsZChkb21DcmVhdG9yLmNyZWF0ZVByb2plY3QocHJvamVjdCwgcG0pKTtcbiAgfVxuICBpZiAocG0uY3VyclByb2plY3QpIGN1cnJQcm9qTmFtZS50ZXh0Q29udGVudCA9IHBtLmN1cnJQcm9qZWN0Lm5hbWU7XG59O1xuXG5jb25zdCBzaG93VG9kb3MgPSAodG9kb3MpID0+IHtcbiAgaWYgKCF0b2RvVWwpIHJldHVybjtcbiAgZm9yIChsZXQgdG9kbyBvZiB0b2Rvcykge1xuICAgIHRvZG9VbC5hcHBlbmRDaGlsZChkb21DcmVhdG9yLmNyZWF0ZVRvZG8odG9kbykpO1xuICB9XG59O1xuXG5jb25zdCByZWZyZXNoUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNsZWFyUHJvamVjdHMoKTtcbiAgc2hvd1Byb2plY3RzKCk7XG59O1xuXG5jb25zdCByZWZyZXNoVG9kb3MgPSAoKSA9PiB7XG4gIGNsZWFyVG9kb3MoKTtcbiAgaWYgKHBtLmN1cnJQcm9qZWN0KSB7XG4gICAgaWYgKHNob3dDb21wbGV0ZWQpIHNob3dUb2RvcyhwbS5jdXJyUHJvamVjdC5hbGxUb2Rvcyk7XG4gICAgZWxzZSBzaG93VG9kb3MocG0uY3VyclByb2plY3QudW5jaGVja2VkVG9kb3MpO1xuICB9XG59O1xuXG5jb25zdCBhY3RpdmF0ZUFkZFByb2ogPSAoKSA9PiB7XG4gIGFkZFByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucygnY2xvc2UnKSkge1xuICAgICAgc2lkZWJhckJ0bi5jbGljaygpO1xuICAgIH1cbiAgICBwcm9qZWN0TW9kZSA9IEFERDtcbiAgICBwcm9qRm9ybU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBwcm9qTmFtZUZpZWxkLnZhbHVlID0gJyc7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUHJvakZvcm1TdWJtaXQgPSAoKSA9PiB7XG4gIGxldCBwcm9qTmFtZSA9IHByb2pOYW1lRmllbGQudmFsdWU7XG4gIGlmIChwcm9qZWN0TW9kZSA9PT0gQUREKSB7XG4gICAgaWYgKHByb2pOYW1lICE9PSAnJykgcG0uYWRkUHJvamVjdChuZXcgUHJvamVjdChudWxsLCBwcm9qTmFtZSkpO1xuICAgIGVsc2UgcG0uYWRkUHJvamVjdChuZXcgUHJvamVjdCgpKTtcbiAgfSBlbHNlIGlmIChwcm9qZWN0TW9kZSA9PT0gRURJVCkge1xuICAgIGlmIChwcm9qVG9FZGl0KSB7XG4gICAgICBwbS5lZGl0UHJvamVjdChwcm9qVG9FZGl0LmlkLCBwcm9qTmFtZSk7XG4gICAgICBwcm9qVG9FZGl0ID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgcHJvakZvcm1PdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlZnJlc2hQcm9qZWN0cygpO1xuICByZWZyZXNoVG9kb3MoKTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlUHJvakZvcm0gPSAoKSA9PiB7XG4gIHByb2pGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhhbmRsZVByb2pGb3JtU3VibWl0KCk7XG4gIH0pO1xuXG4gIHByb2pGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBoYW5kbGVQcm9qRm9ybVN1Ym1pdCgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZUNhbmNlbFByb2pGb3JtID0gKCkgPT4ge1xuICBjYW5jZWxQcm9qRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb2pGb3JtT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlUHJvakV2ZW50ID0gKCkgPT4ge1xuICBwcm9qVWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0JykgJiYgdGFyZ2V0LmlkKSB7XG4gICAgICBwbS5jdXJyUHJvamVjdCA9IHBtLmdldFByb2plY3QodGFyZ2V0LmlkKTtcbiAgICAgIHJlZnJlc2hQcm9qZWN0cygpO1xuICAgICAgcmVmcmVzaFRvZG9zKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlQ2xlYXJBbGxQcm9qID0gKCkgPT4ge1xuICBjbGVhclByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHBtLmNsZWFyQWxsUHJvamVjdHMoKTtcbiAgICByZWZyZXNoUHJvamVjdHMoKTtcbiAgICByZWZyZXNoVG9kb3MoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZUNsZWFyUHJvaiA9ICgpID0+IHtcbiAgcHJvalVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGVhci1wcm9qZWN0JykgfHxcbiAgICAgICh0YXJnZXQucGFyZW50Tm9kZSAhPT0gbnVsbCAmJlxuICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NsZWFyLXByb2plY3QnKSlcbiAgICApIHtcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGVhci1wcm9qZWN0JykpXG4gICAgICAgIHBtLnJlbW92ZVByb2plY3QodGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG4gICAgICBlbHNlIHBtLnJlbW92ZVByb2plY3QodGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcbiAgICAgIHJlZnJlc2hQcm9qZWN0cygpO1xuICAgICAgcmVmcmVzaFRvZG9zKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlRWRpdFByb2ogPSAoKSA9PiB7XG4gIHByb2pVbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKFxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdC1wcm9qZWN0JykgfHxcbiAgICAgICh0YXJnZXQucGFyZW50Tm9kZSAhPT0gbnVsbCAmJlxuICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtcHJvamVjdCcpKVxuICAgICkge1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtcHJvamVjdCcpKSB7XG4gICAgICAgIHByb2pUb0VkaXQgPSBwbS5nZXRQcm9qZWN0KHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvalRvRWRpdCA9IHBtLmdldFByb2plY3QodGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcbiAgICAgIH1cbiAgICAgIHByb2plY3RNb2RlID0gRURJVDtcbiAgICAgIHByb2pGb3JtT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgbGV0IG9sZE5hbWUgPSBwcm9qVG9FZGl0Lm5hbWU7XG4gICAgICBwcm9qTmFtZUZpZWxkLnZhbHVlID0gb2xkTmFtZTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3Qgc2hvd1RvZG9EZXRhaWwgPSAodG9kb0xpKSA9PiB7XG4gIHRvZG9MaS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnbGlnaHQgcGluayc7XG4gIGNvbnN0IGRlc2NQID0gdG9kb0xpLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWRlc2MnKTtcbiAgY29uc3QgZGF0ZVAgPSB0b2RvTGkucXVlcnlTZWxlY3RvcignLnRvZG8tZGF0ZScpO1xuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoZGVzY1ApLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgZGVzY1Auc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBkYXRlUC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9IGVsc2Uge1xuICAgIGRlc2NQLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZGF0ZVAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufTtcblxuY29uc3QgYWN0aXZhdGVUb2RvRXZlbnQgPSAoKSA9PiB7XG4gIHRvZG9VbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgdG9kbyA9IHRhcmdldC5jbG9zZXN0KCcudG9kbycpO1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJy50b2RvLXRpdGxlJyk7XG4gICAgY29uc3QgaXNDaGVja2JveCA9IHRhcmdldC50eXBlID09PSAnY2hlY2tib3gnO1xuICAgIGNvbnN0IGlzQnV0dG9uID0gdGFyZ2V0LnRhZ05hbWUgPT09ICdCVVRUT04nO1xuICAgIGNvbnN0IGlzU1ZHID0gdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xuXG4gICAgaWYgKCh0b2RvIHx8IHRvZG9UaXRsZSkgJiYgIWlzQ2hlY2tib3ggJiYgIWlzQnV0dG9uICYmICFpc1NWRykge1xuICAgICAgbGV0IHRvZG9MaSA9IHRvZG8gfHwgdG9kb1RpdGxlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgc2hvd1RvZG9EZXRhaWwodG9kb0xpKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVDaGVja1RvZG8gPSAoKSA9PiB7XG4gIHRvZG9VbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrLXRvZG8nKSkge1xuICAgICAgcG0udG9nZ2xlQ2hlY2tUb2RvKHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG4gICAgICByZWZyZXNoVG9kb3MoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVDbGVhclRvZG8gPSAoKSA9PiB7XG4gIHRvZG9VbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NsZWFyLXRvZG8nKSkge1xuICAgICAgcG0ucmVtb3ZlVG9kbyh0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuICAgICAgcmVmcmVzaFRvZG9zKCk7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NsZWFyLXRvZG8nKSkge1xuICAgICAgcG0ucmVtb3ZlVG9kbyh0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG4gICAgICByZWZyZXNoVG9kb3MoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVBZGRUb2RvID0gKCkgPT4ge1xuICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICB0b2RvTW9kZSA9IEFERDtcbiAgICB0b2RvRm9ybU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB0b2RvVGl0bGVGaWVsZC52YWx1ZSA9ICcnO1xuICAgIHRvZG9EZXNjRmllbGQudmFsdWUgPSAnJztcbiAgICB0b2RvRGF0ZUZpZWxkLnZhbHVlID0gc2V0VGltZVpvbmUoKS5zbGljZSgwLCAxMCk7XG4gICAgdG9kb1ByaW9yaXR5RmllbGQudmFsdWUgPSAnTm9uZSc7XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVFZGl0VG9kbyA9ICgpID0+IHtcbiAgdG9kb1VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXRvZG8nKSB8fFxuICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXRvZG8nKVxuICAgICkge1xuICAgICAgdG9kb01vZGUgPSBFRElUO1xuICAgICAgdG9kb0Zvcm1PdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdC10b2RvJykpXG4gICAgICAgIHNlbGVjdGVkVG9kbyA9IHBtLmdldFRvZG8odGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcbiAgICAgIGVsc2Uge1xuICAgICAgICBzZWxlY3RlZFRvZG8gPSBwbS5nZXRUb2RvKFxuICAgICAgICAgIHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBvbGRUaXRsZSA9IHNlbGVjdGVkVG9kby50aXRsZTtcbiAgICAgIGNvbnN0IG9sZERlc2MgPSBzZWxlY3RlZFRvZG8uZGVzYztcbiAgICAgIGNvbnN0IG9sZERhdGUgPSBzZWxlY3RlZFRvZG8uZGF0ZTtcbiAgICAgIGNvbnN0IG9sZFByaW9yaXR5ID0gc2VsZWN0ZWRUb2RvLnByaW9yaXR5O1xuICAgICAgdG9kb1RpdGxlRmllbGQudmFsdWUgPSBvbGRUaXRsZTtcbiAgICAgIGlmIChvbGREZXNjICE9PSAnTm9uZScpIHRvZG9EZXNjRmllbGQudmFsdWUgPSBvbGREZXNjO1xuICAgICAgZWxzZSB0b2RvRGVzY0ZpZWxkLnZhbHVlID0gJyc7XG4gICAgICB0b2RvRGF0ZUZpZWxkLnZhbHVlID0gb2xkRGF0ZTtcbiAgICAgIHRvZG9Qcmlvcml0eUZpZWxkLnZhbHVlID0gb2xkUHJpb3JpdHk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZVRvZG9Gb3JtU3VibWl0ID0gKCkgPT4ge1xuICBsZXQgdGl0bGUgPSB0b2RvVGl0bGVGaWVsZC52YWx1ZTtcbiAgbGV0IGRlc2MgPSB0b2RvRGVzY0ZpZWxkLnZhbHVlO1xuICBsZXQgZGF0ZSA9IHRvZG9EYXRlRmllbGQudmFsdWU7XG4gIGxldCBwcmlvcml0eSA9IHRvZG9Qcmlvcml0eUZpZWxkLnZhbHVlO1xuICBpZiAodG9kb01vZGUgPT09IEFERCkge1xuICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG8obnVsbCwgdGl0bGUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcbiAgICBwbS5hZGRUb2RvKG5ld1RvZG8pO1xuICB9IGVsc2UgaWYgKHRvZG9Nb2RlID09PSBFRElUKSB7XG4gICAgaWYgKHNlbGVjdGVkVG9kbykge1xuICAgICAgZGVzYyA9IGRlc2MgPT09ICcnID8gJ05vbmUnIDogZGVzYztcbiAgICAgIHBtLmVkaXRUb2RvKHNlbGVjdGVkVG9kby5pZCwgdGl0bGUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcbiAgICAgIHNlbGVjdGVkVG9kbyA9IG51bGw7XG4gICAgfVxuICB9XG4gIHJlZnJlc2hUb2RvcygpO1xuICB0b2RvRm9ybU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn07XG5cbmNvbnN0IGFjdGl2YXRlVG9kb0Zvcm0gPSAoKSA9PiB7XG4gIHRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhhbmRsZVRvZG9Gb3JtU3VibWl0KCk7XG4gIH0pO1xuICB0b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoIWUuc2hpZnRLZXkgJiYgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaGFuZGxlVG9kb0Zvcm1TdWJtaXQoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVDYW5jZWxUb2RvRm9ybSA9ICgpID0+IHtcbiAgY2FuY2VsVG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0b2RvRm9ybU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZVRvZG9Gb3JtVGV4dGJveCA9ICgpID0+IHtcbiAgdG9kb0Rlc2NGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5zaGlmdEtleSAmJiBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBjb25zdCBjdXJyZW50VmFsID0gdGhpcy52YWx1ZTtcbiAgICAgIGNvbnN0IGN1cnNvclBvcyA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICBjb25zdCBuZXdWYWwgPVxuICAgICAgICBjdXJyZW50VmFsLnN1YnN0cmluZygwLCBjdXJzb3JQb3MpICtcbiAgICAgICAgJ1xcbicgK1xuICAgICAgICBjdXJyZW50VmFsLnN1YnN0cmluZyhjdXJzb3JQb3MpO1xuICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbDtcbiAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLnNlbGVjdGlvbkVuZCA9IGN1cnNvclBvcyArIDE7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVDbGVhckFsbFRvZG9zID0gKCkgPT4ge1xuICBjbGVhclRvZG9zQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwbS5jbGVhckN1cnJlbnRQcm9qZWN0KCk7XG4gICAgcmVmcmVzaFRvZG9zKCk7XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVTaWRlYmFyQnRuID0gKCkgPT4ge1xuICBzaWRlYmFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoXG4gICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwcm9qZWN0Q29udGFpbmVyKS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXNwbGF5JykgPT09XG4gICAgICAnbm9uZSdcbiAgICApIHtcbiAgICAgIHByb2plY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2UnKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgdG9nZ2xlU2hvd0NvbXBsZXRlZGJ0biA9ICgpID0+IHtcbiAgaWYgKHNob3dDb21wbGV0ZWQpIHtcbiAgICBzaG93Q29tcGxldGVkQnRuLnRleHRDb250ZW50ID0gJ0hpZGUgQ29tcGxldGVkJztcbiAgfSBlbHNlIHtcbiAgICBzaG93Q29tcGxldGVkQnRuLnRleHRDb250ZW50ID0gJ1Nob3cgQ29tcGxldGVkJztcbiAgfVxufTtcblxuY29uc3QgYWN0aXZhdGVTaG93Q29tcGxldGVkID0gKCkgPT4ge1xuICBzaG93Q29tcGxldGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzaG93Q29tcGxldGVkID0gIXNob3dDb21wbGV0ZWQ7XG4gICAgdG9nZ2xlU2hvd0NvbXBsZXRlZGJ0bigpO1xuICAgIHJlZnJlc2hUb2RvcygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlU2VhcmNoQmFyID0gKCkgPT4ge1xuICBzZWFyY2hGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBkcm9wZG93bk1lbnUudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBzZWFyY2hTdHIgPSBzZWFyY2hGaWVsZC52YWx1ZTtcbiAgICBpZiAoc2VhcmNoU3RyKSB7XG4gICAgICBsZXQgbWF0Y2hlcyA9IHBtLnNlYXJjaFRvZG9CeVRpdGxlKHNlYXJjaFN0cik7XG4gICAgICBpZiAobWF0Y2hlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgZm9yIChsZXQgbWF0Y2ggb2YgbWF0Y2hlcykge1xuICAgICAgICAgIGRyb3Bkb3duTWVudS5hcHBlbmRDaGlsZChkb21DcmVhdG9yLmNyZWF0ZVJlc3VsdERpdihtYXRjaCkpO1xuICAgICAgICB9XG4gICAgICAgIGRyb3Bkb3duTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgfSBlbHNlIGRyb3Bkb3duTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSBkcm9wZG93bk1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZURyb3Bkb3duTWVudSA9ICgpID0+IHtcbiAgZHJvcGRvd25NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VhcmNoLXJlc3VsdCcpKSB7XG4gICAgICBsZXQgcHJvaklkID0gdGFyZ2V0LnZhbHVlLnNwbGl0KCc6JylbMF07XG4gICAgICBsZXQgdG9kb0lkID0gdGFyZ2V0LnZhbHVlLnNwbGl0KCc6JylbMV07XG4gICAgICBwbS5jdXJyUHJvamVjdCA9IHBtLmdldFByb2plY3QocHJvaklkKTtcbiAgICAgIGlmIChwbS5nZXRUb2RvKHRvZG9JZCkuY2hlY2spIHNob3dDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgdG9nZ2xlU2hvd0NvbXBsZXRlZGJ0bigpO1xuICAgICAgcmVmcmVzaFByb2plY3RzKCk7XG4gICAgICByZWZyZXNoVG9kb3MoKTtcbiAgICAgIGNvbnN0IHRvZG9MaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RvZG9JZH1gKTtcbiAgICAgIHNob3dUb2RvRGV0YWlsKHRvZG9MaSk7XG4gICAgfVxuICAgIGRyb3Bkb3duTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHNlYXJjaEZpZWxkLnZhbHVlID0gJyc7XG4gIH0pO1xufTtcblxuY29uc3QgaGlkZURyb3BEb3duTWVudSA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmIChcbiAgICAgICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWFyY2gtcmVzdWx0JykgJiZcbiAgICAgIHRhcmdldC5pZCAhPT0gJ3NlYXJjaC1iYXInICYmXG4gICAgICB0YXJnZXQuaWQgIT09ICdkcm9wZG93bi1tZW51J1xuICAgIClcbiAgICAgIGRyb3Bkb3duTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHNlYXJjaEZpZWxkLnZhbHVlID0gJyc7XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVTb3J0TWVudSA9ICgpID0+IHtcbiAgc29ydE1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICBzb3J0TW9kZSA9IGUudGFyZ2V0LnZhbHVlO1xuICB9KTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlU29ydEJ0biA9ICgpID0+IHtcbiAgc29ydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgc29ydEZ1bmN0aW9ucy5nZXQoc29ydE1vZGUpKCk7XG4gICAgcmVmcmVzaFRvZG9zKCk7XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVVSSA9ICgpID0+IHtcbiAgYWN0aXZhdGVBZGRQcm9qKCk7XG4gIGFjdGl2YXRlQ2FuY2VsUHJvakZvcm0oKTtcbiAgYWN0aXZhdGVQcm9qRm9ybSgpO1xuICBhY3RpdmF0ZVByb2pFdmVudCgpO1xuICBhY3RpdmF0ZUNsZWFyQWxsUHJvaigpO1xuICBhY3RpdmF0ZUNsZWFyUHJvaigpO1xuICBhY3RpdmF0ZUVkaXRQcm9qKCk7XG4gIGFjdGl2YXRlVG9kb0V2ZW50KCk7XG4gIGFjdGl2YXRlQ2hlY2tUb2RvKCk7XG4gIGFjdGl2YXRlQ2xlYXJUb2RvKCk7XG4gIGFjdGl2YXRlQWRkVG9kbygpO1xuICBhY3RpdmF0ZUVkaXRUb2RvKCk7XG4gIGFjdGl2YXRlVG9kb0Zvcm0oKTtcbiAgYWN0aXZhdGVDYW5jZWxUb2RvRm9ybSgpO1xuICBhY3RpdmF0ZUNsZWFyQWxsVG9kb3MoKTtcbiAgYWN0aXZhdGVTaWRlYmFyQnRuKCk7XG4gIGFjdGl2YXRlU2hvd0NvbXBsZXRlZCgpO1xuICBhY3RpdmF0ZVNlYXJjaEJhcigpO1xuICBhY3RpdmF0ZURyb3Bkb3duTWVudSgpO1xuICBoaWRlRHJvcERvd25NZW51KCk7XG4gIGFjdGl2YXRlVG9kb0Zvcm1UZXh0Ym94KCk7XG4gIGFjdGl2YXRlU29ydE1lbnUoKTtcbiAgYWN0aXZhdGVTb3J0QnRuKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlZnJlc2hQcm9qZWN0cyxcbiAgcmVmcmVzaFRvZG9zLFxuICBhY3RpdmF0ZVVJLFxufTtcbiIsImNvbnN0IFNWR19ERUZBVUxUX0NMQVNTID0gJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnO1xuY29uc3QgY3JlYXRlUHJvamVjdCA9IChwcm9qZWN0LCBwbSkgPT4ge1xuICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICBsaS5pZCA9IGAke3Byb2plY3QuaWR9YDtcbiAgbGkuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEJ0bnNEaXYoKSk7XG4gIGlmIChwbS5jdXJyUHJvamVjdCAmJiBsaS5pZCA9PT0gcG0uY3VyclByb2plY3QuaWQpIHtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICB9XG4gIHJldHVybiBsaTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RCdG5zRGl2ID0gKCkgPT4ge1xuICBjb25zdCBkaXYgPSBjcmVhdGVEaXZUYWcoJ3Byb2plY3QtYnRucycpO1xuICBjb25zdCBlZGl0QnRuID0gY3JlYXRlQnRuVGFnKCdlZGl0LXByb2plY3QnLCAnZWRpdF9ub3RlJywgJ3Byb2otaWNvbnMnKTtcbiAgY29uc3QgY2xlYXJCdG4gPSBjcmVhdGVCdG5UYWcoJ2NsZWFyLXByb2plY3QnLCAnY2xvc2UnLCAncHJvai1pY29ucycpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gIGRpdi5hcHBlbmRDaGlsZChjbGVhckJ0bik7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBjcmVhdGVUb2RvID0gKHRvZG8pID0+IHtcbiAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGkuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICBsaS5pZCA9IGAke3RvZG8uaWR9YDtcbiAgY29uc3QgdXBwZXJEaXYgPSBjcmVhdGVEaXZUYWcoJ3RvZG8tdXBwZXInKTtcbiAgdXBwZXJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSW5mb0Rpdih0b2RvKSk7XG4gIHVwcGVyRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9CdG5zRGl2KCkpO1xuICBsaS5hcHBlbmRDaGlsZCh1cHBlckRpdik7XG4gIGNvbnN0IGxvd2VyRGl2ID0gY3JlYXRlRGl2VGFnKCd0b2RvLWxvd2VyJyk7XG4gIGxvd2VyRGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9EZXRhaWxzRGl2KHRvZG8pKTtcbiAgbGkuYXBwZW5kQ2hpbGQobG93ZXJEaXYpO1xuICBpZiAodG9kby5jaGVjaykgbGkuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICByZXR1cm4gbGk7XG59O1xuXG5jb25zdCBjcmVhdGVJbmZvRGl2ID0gKHRvZG8pID0+IHtcbiAgY29uc3QgZGl2ID0gY3JlYXRlRGl2VGFnKCd0b2RvLWluZm8nKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9DaGVjayh0b2RvKSk7XG4gIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVUb2RvUHJpb3JpdHkodG9kbykpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU3BhblRhZyh0b2RvLnRpdGxlLCAndG9kby10aXRsZScpKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvZG9CdG5zRGl2ID0gKCkgPT4ge1xuICBjb25zdCBkaXYgPSBjcmVhdGVEaXZUYWcoJ3RvZG8tYnRucycpO1xuICBjb25zdCBlZGl0QnRuID0gY3JlYXRlQnRuVGFnKCdlZGl0LXRvZG8nLCAnZWRpdF9ub3RlJywgJ3RvZG8taWNvbnMnKTtcbiAgY29uc3QgY2xvc2VCdG4gPSBjcmVhdGVCdG5UYWcoJ2NsZWFyLXRvZG8nLCAnY2xvc2UnLCAndG9kby1pY29ucycpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gIGRpdi5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBjcmVhdGVUb2RvRGV0YWlsc0RpdiA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdlRhZygndG9kby1kZXRhaWxzJyk7XG4gIGNvbnN0IGRlc2MgPSBjcmVhdGVQVGFnKGBEZXNjcmlwdGlvbjpcXHQke3RvZG8uZGVzY31gLCAndG9kby1kZXNjJyk7XG4gIGNvbnN0IGRhdGUgPSBjcmVhdGVQVGFnKGBEdWUgZGF0ZTpcXHQke3RvZG8uZGF0ZX1gLCAndG9kby1kYXRlJyk7XG4gIGRpdi5hcHBlbmRDaGlsZChkZXNjKTtcbiAgZGl2LmFwcGVuZENoaWxkKGRhdGUpO1xuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgY3JlYXRlVG9kb0NoZWNrID0gKHRvZG8pID0+IHtcbiAgbGV0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY2hlY2sudHlwZSA9ICdjaGVja2JveCc7XG4gIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLXRvZG8nKTtcbiAgY2hlY2suY2hlY2tlZCA9IHRvZG8uY2hlY2s7XG4gIHJldHVybiBjaGVjaztcbn07XG5cbmNvbnN0IGNyZWF0ZVRvZG9Qcmlvcml0eSA9ICh0b2RvKSA9PiB7XG4gIGxldCBwcmlvcml0eTtcbiAgaWYgKHRvZG8ucHJpb3JpdHkgPT09ICdOb25lJykgcHJpb3JpdHkgPSBjcmVhdGVTcGFuVGFnKCcnLCAndG9kby1wcmlvcml0eScpO1xuICBlbHNlIHByaW9yaXR5ID0gY3JlYXRlU3BhblRhZyh0b2RvLnByaW9yaXR5LCAndG9kby1wcmlvcml0eScpO1xuICByZXR1cm4gcHJpb3JpdHk7XG59O1xuXG5jb25zdCBjcmVhdGVSZXN1bHREaXYgPSAobWF0Y2gpID0+IHtcbiAgY29uc3Qgb3B0aW9uID0gY3JlYXRlRGl2VGFnKFxuICAgICdzZWFyY2gtcmVzdWx0JyxcbiAgICBgJHttYXRjaC5tYXRjaGVkUHJvai5pZH06JHttYXRjaC5tYXRjaGVkVG9kby5pZH1gXG4gICk7XG5cbiAgY29uc3QgdG9kb1RpdGxlID0gY3JlYXRlUFRhZyhtYXRjaC5tYXRjaGVkVG9kby50aXRsZSwgJ21hdGNoZWQtdG9kbycpO1xuICBpZiAobWF0Y2gubWF0Y2hlZFRvZG8uY2hlY2spIHtcbiAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICB9XG4gIGNvbnN0IHByb2plY3ROYW1lID0gY3JlYXRlUFRhZyhtYXRjaC5tYXRjaGVkUHJvai5uYW1lLCAnbWF0Y2hlZC1wcm9qZWN0Jyk7XG5cbiAgb3B0aW9uLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gIG9wdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgcmV0dXJuIG9wdGlvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZVNWR1NwYW5UYWcgPSAodGV4dCwgZGVmYXVsdENsYXNzLCBjdXN0b21DbGFzcykgPT4ge1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLmNsYXNzTGlzdC5hZGQoZGVmYXVsdENsYXNzLCBjdXN0b21DbGFzcyk7XG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gc3Bhbjtcbn07XG5cbmNvbnN0IGNyZWF0ZVBUYWcgPSAodGV4dCwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBwLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIHA7XG59O1xuXG5jb25zdCBjcmVhdGVTcGFuVGFnID0gKHRleHQsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBzcGFuO1xufTtcblxuY29uc3QgY3JlYXRlQnRuVGFnID0gKGNsYXNzTmFtZSwgaWNvbk5hbWUsIHN2Z0NsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgY29uc3QgaWNvbiA9IGNyZWF0ZVNWR1NwYW5UYWcoaWNvbk5hbWUsIFNWR19ERUZBVUxUX0NMQVNTLCBzdmdDbGFzc05hbWUpO1xuICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbik7XG4gIHJldHVybiBidXR0b247XG59O1xuXG5jb25zdCBjcmVhdGVEaXZUYWcgPSAoY2xhc3NOYW1lLCB2YWwpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBkaXYudmFsdWUgPSB2YWwgPyB2YWwgOiAnJztcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY3JlYXRlUHJvamVjdCxcbiAgY3JlYXRlVG9kbyxcbiAgY3JlYXRlUmVzdWx0RGl2LFxufTtcbiIsImltcG9ydCBwbSBmcm9tICcuL2luaXRpYWxQTS5qcyc7XG5pbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSAnLi9kaXNwbGF5LWNvbnRyb2xsZXInO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmRpc3BsYXlDb250cm9sbGVyLnJlZnJlc2hUb2RvcyhwbSk7XG5kaXNwbGF5Q29udHJvbGxlci5yZWZyZXNoUHJvamVjdHMocG0pO1xuZGlzcGxheUNvbnRyb2xsZXIuYWN0aXZhdGVVSShwbSk7XG4iLCJpbXBvcnQgUHJvamVjdE1hbmFnZXIgZnJvbSAnLi9wcm9qZWN0LW1hbmFnZXInO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcbmxldCBwbSA9IG5ldyBQcm9qZWN0TWFuYWdlcigpO1xuaWYgKHBtLmlzRW1wdHkoKSkge1xuICBsZXQgcHJvajEgPSBuZXcgUHJvamVjdChudWxsKTtcbiAgcG0uYWRkUHJvamVjdChwcm9qMSk7XG59XG5leHBvcnQgZGVmYXVsdCBwbTtcbiIsImNvbnN0IHN0b3JhZ2VBdmFpbGFibGUgPSAodHlwZSkgPT4ge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGBFcnJvciB0ZXN0aW5nIGZvciBzdG9yYWdlIGF2YWlsYWJpbGl0eTogJHtlfWApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuY29uc3QgbG9hZExvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNlcmlhbGl6ZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIGlmIChzZXJpYWxpemVkRGF0YSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY29uc3QgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2Uoc2VyaWFsaXplZERhdGEpO1xuICAgICAgcmV0dXJuIHBhcnNlZERhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3IgbG9hZGluZyBmcm9tIGxvY2FsIHN0b3JhZ2U6ICR7ZXJyfWApO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ0xvY2FsIHN0b3JhZ2Ugbm90IGF2YWlsYWJsZScpO1xuICB9XG59O1xuXG5jb25zdCBzYXZlTG9jYWxTdG9yYWdlID0gKGtleSwgZGF0YSkgPT4ge1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2VyaWFsaXplZERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgc2VyaWFsaXplZERhdGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coYEVycm9yIHNhdmluZyB0byBsb2NhbCBzdG9yYWdlOiAke2Vycn1gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ0xvY2FsIHN0b3JhZ2Ugbm90IGF2YWlsYWJsZScpO1xuICB9XG59O1xuXG5jb25zdCBjbGVhckxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgZXJyb3IgY2xlYXJpbmcgbG9jYWwgc3RvcmFnZTogJHtlLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdMb2NhbCBzdG9yYWdlIG5vdCBhdmFpbGFibGUnKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgbG9hZExvY2FsU3RvcmFnZSwgc2F2ZUxvY2FsU3RvcmFnZSwgY2xlYXJMb2NhbFN0b3JhZ2UgfTtcbiIsImltcG9ydCB7IGxvYWRMb2NhbFN0b3JhZ2UsIHNhdmVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcblxuY2xhc3MgUHJvamVjdE1hbmFnZXIge1xuICAjcHJvamVjdHM7XG4gICNjdXJyUHJvamVjdDtcbiAgI3N0b3JhZ2VLZXk7XG5cbiAgY29uc3RydWN0b3Ioc3RvcmFnZUtleSA9ICdwcm9qZWN0TWFuYWdlcicsIC4uLnByb2plY3RzKSB7XG4gICAgdGhpcy4jc3RvcmFnZUtleSA9IHN0b3JhZ2VLZXk7XG4gICAgbGV0IHN0b3JlZERhdGE7XG4gICAgdHJ5IHtcbiAgICAgIHN0b3JlZERhdGEgPSBsb2FkTG9jYWxTdG9yYWdlKHRoaXMuI3N0b3JhZ2VLZXkpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYEVycm9yIGxvYWRpbmcgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2UgZm9yIGtleSBcIiR7XG4gICAgICAgICAgdGhpcy4jc3RvcmFnZUtleVxuICAgICAgICB9XCI6ICR7ZXJyfWBcbiAgICAgICk7XG4gICAgICBzdG9yZWREYXRhID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHN0b3JlZERhdGEpIHtcbiAgICAgIGlmIChzdG9yZWREYXRhLnByb2plY3RzKVxuICAgICAgICB0aGlzLiNwcm9qZWN0cyA9IHN0b3JlZERhdGEucHJvamVjdHMubWFwKChwKSA9PiBQcm9qZWN0LmZyb21KU09OKHApKTtcbiAgICAgIGVsc2UgdGhpcy4jcHJvamVjdHMgPSBbXTtcbiAgICAgIGlmICh0aGlzLiNwcm9qZWN0cyAmJiBzdG9yZWREYXRhLmN1cnJQcm9qZWN0SWQpIHtcbiAgICAgICAgY29uc3QgdGVtcFByb2ogPSB0aGlzLiNwcm9qZWN0cy5maW5kKFxuICAgICAgICAgIChwKSA9PiBwLmlkID09PSBzdG9yZWREYXRhLmN1cnJQcm9qZWN0SWRcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy4jY3VyclByb2plY3QgPSB0ZW1wUHJvaiB8fCBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4jY3VyclByb2plY3QgPSBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNwcm9qZWN0cyA9XG4gICAgICAgIHByb2plY3RzLmxlbmd0aCA+IDAgPyBwcm9qZWN0cy5tYXAoKHApID0+IG5ldyBQcm9qZWN0KHApKSA6IFtdO1xuICAgICAgdGhpcy4jY3VyclByb2plY3QgPSB0aGlzLiNwcm9qZWN0cy5sZW5ndGggPiAwID8gdGhpcy4jcHJvamVjdHNbMF0gOiBudWxsO1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHByb2plY3RzKCkge1xuICAgIHJldHVybiB0aGlzLiNwcm9qZWN0cztcbiAgfVxuXG4gIHNldCBjdXJyUHJvamVjdChjdXJyUHJvaikge1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0ID1cbiAgICAgIHRoaXMuI3Byb2plY3RzLmZpbmQoKHByb2opID0+IHByb2ouaWQgPT09IGN1cnJQcm9qLmlkKSB8fCBudWxsO1xuICAgIHRoaXMuc2F2ZSgpO1xuICB9XG5cbiAgZ2V0IGN1cnJQcm9qZWN0KCkge1xuICAgIHJldHVybiB0aGlzLiNjdXJyUHJvamVjdDtcbiAgfVxuXG4gIHRvSlNPTiA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0pTT04gPSB0aGlzLiNwcm9qZWN0cy5tYXAoKHApID0+IHAudG9KU09OKCkpO1xuICAgIGNvbnN0IGN1cnJQcm9qZWN0SWQgPSB0aGlzLiNjdXJyUHJvamVjdCA/IHRoaXMuI2N1cnJQcm9qZWN0LmlkIDogbnVsbDtcbiAgICByZXR1cm4geyBwcm9qZWN0czogcHJvamVjdHNKU09OLCBjdXJyUHJvamVjdElkOiBjdXJyUHJvamVjdElkIH07XG4gIH07XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBwcm9qZWN0TWFuYWdlciA9IG5ldyBQcm9qZWN0TWFuYWdlcigpO1xuICAgIGlmICghanNvbiB8fCAhanNvbi5wcm9qZWN0cykge1xuICAgICAgcmV0dXJuIHByb2plY3RNYW5hZ2VyO1xuICAgIH1cbiAgICBqc29uLnByb2plY3RzLmZvckVhY2goKHByb2plY3RKU09OKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdC5mcm9tSlNPTihwcm9qZWN0SlNPTik7XG4gICAgICBwcm9qZWN0TWFuYWdlci5hZGRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgaWYgKGpzb24uY3VyclByb2plY3RJZCA9PT0gcHJvamVjdC5pZCkge1xuICAgICAgICBwcm9qZWN0TWFuYWdlci5zZXRDdXJyZW50UHJvamVjdChwcm9qZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcHJvamVjdE1hbmFnZXI7XG4gIH1cblxuICBzYXZlID0gKCkgPT4ge1xuICAgIHNhdmVMb2NhbFN0b3JhZ2UodGhpcy4jc3RvcmFnZUtleSwgdGhpcy50b0pTT04oKSk7XG4gIH07XG5cbiAgaXNFbXB0eSA9ICgpID0+IHRoaXMuI3Byb2plY3RzLmxlbmd0aCA9PT0gMDtcblxuICBnZXRQcm9qZWN0ID0gKGlkKSA9PiB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBQcm9qZWN0IHdpdGggSUQgJHtpZH0gaXMgbm90IGZvdW5kYCk7XG4gICAgfVxuICAgIGZvciAobGV0IHAgb2YgdGhpcy4jcHJvamVjdHMpIHtcbiAgICAgIGlmIChwLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gcDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgYWRkUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgdGhpcy4jcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB0aGlzLiNjdXJyUHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH07XG5cbiAgcmVtb3ZlUHJvamVjdCA9IChpZCkgPT4ge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgY29uc29sZS5lcnJvcihgUHJvamVjdCB3aXRoIElEICR7aWR9IGlzIG5vdCBmb3VuZGApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLiNwcm9qZWN0cyA9IHRoaXMuI3Byb2plY3RzLmZpbHRlcigocCkgPT4gcC5pZCAhPT0gaWQpO1xuICAgIGlmICh0aGlzLiNjdXJyUHJvamVjdC5pZCA9PT0gaWQpIHtcbiAgICAgIGlmICghdGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgICAgdGhpcy4jY3VyclByb2plY3QgPSB0aGlzLiNwcm9qZWN0c1swXTtcbiAgICAgIH0gZWxzZSB0aGlzLiNjdXJyUHJvamVjdCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuc2F2ZSgpO1xuICB9O1xuXG4gIGFkZFRvZG8gPSAodG9kbykgPT4ge1xuICAgIGlmICh0aGlzLiNjdXJyUHJvamVjdCkge1xuICAgICAgdGhpcy4jY3VyclByb2plY3QuYWRkVG9kbyh0b2RvKTtcbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZW1vdmVUb2RvID0gKGlkKSA9PiB7XG4gICAgaWYgKHRoaXMuI2N1cnJQcm9qZWN0KSB7XG4gICAgICB0aGlzLiNjdXJyUHJvamVjdC5yZW1vdmVUb2RvKGlkKTtcbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgIH1cbiAgfTtcblxuICBnZXRUb2RvID0gKGlkKSA9PiB7XG4gICAgaWYgKHRoaXMuI2N1cnJQcm9qZWN0KSByZXR1cm4gdGhpcy4jY3VyclByb2plY3QuZ2V0VG9kbyhpZCk7XG4gIH07XG5cbiAgZWRpdFRvZG8gPSAoaWQsIHRpdGxlLCBkZXNjLCBkYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0LmVkaXRUb2RvKGlkLCB0aXRsZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xuICAgIHRoaXMuc2F2ZSgpO1xuICB9O1xuXG4gIHRvZ2dsZUNoZWNrVG9kbyA9IChpZCkgPT4ge1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0LnRvZ2dsZUNoZWNrVG9kbyhpZCk7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH07XG5cbiAgZWRpdFByb2plY3QgPSAoaWQsIG5ld05hbWUpID0+IHtcbiAgICB0aGlzLmdldFByb2plY3QoaWQpLm5hbWUgPSBuZXdOYW1lO1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KGlkKTtcbiAgICB0aGlzLnNhdmUoKTtcbiAgfTtcblxuICBjbGVhckN1cnJlbnRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLiNjdXJyUHJvamVjdCkge1xuICAgICAgdGhpcy4jY3VyclByb2plY3QuY2xlYXJBbGxUb2RvcygpO1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHNlYXJjaFRvZG9CeVRpdGxlID0gKHNlYXJjaFN0cikgPT4ge1xuICAgIGxldCBtYXRjaGVzID0gW107XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiB0aGlzLiNwcm9qZWN0cykge1xuICAgICAgZm9yIChsZXQgdG9kbyBvZiBwcm9qZWN0LmFsbFRvZG9zKSB7XG4gICAgICAgIGlmICh0b2RvLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgbGV0IG1hdGNoID0geyBtYXRjaGVkUHJvajogcHJvamVjdCwgbWF0Y2hlZFRvZG86IHRvZG8gfTtcbiAgICAgICAgICBtYXRjaGVzLnB1c2gobWF0Y2gpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9O1xuXG4gIHNvcnRCeUFkZERhdGVBc2MgPSAoKSA9PiB7XG4gICAgdGhpcy4jY3VyclByb2plY3Quc29ydEJ5QWRkRGF0ZUFzYygpO1xuICB9O1xuXG4gIHNvcnRCeUFkZERhdGVEZXNjID0gKCkgPT4ge1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0LnNvcnRCeUFkZERhdGVEZXNjKCk7XG4gIH07XG5cbiAgc29ydEJ5UHJpb3JpdHlBc2MgPSAoKSA9PiB7XG4gICAgdGhpcy4jY3VyclByb2plY3Quc29ydEJ5UHJpb3JpdHlBc2MoKTtcbiAgfTtcblxuICBzb3J0QnlQcmlvcml0eURlc2MgPSAoKSA9PiB7XG4gICAgdGhpcy4jY3VyclByb2plY3Quc29ydEJ5UHJpb3JpdHlEZXNjKCk7XG4gIH07XG5cbiAgc29ydEJ5RGF0ZUFzYyA9ICgpID0+IHtcbiAgICB0aGlzLiNjdXJyUHJvamVjdC5zb3J0QnlEYXRlQXNjKCk7XG4gIH07XG5cbiAgc29ydEJ5RGF0ZURlc2MgPSAoKSA9PiB7XG4gICAgdGhpcy4jY3VyclByb2plY3Quc29ydEJ5RGF0ZURlc2MoKTtcbiAgfTtcblxuICBzb3J0QnlUaXRsZUFzYyA9ICgpID0+IHtcbiAgICB0aGlzLiNjdXJyUHJvamVjdC5zb3J0QnlUaXRsZUFzYygpO1xuICB9O1xuXG4gIHNvcnRCeVRpdGxlRGVzYyA9ICgpID0+IHtcbiAgICB0aGlzLiNjdXJyUHJvamVjdC5zb3J0QnlUaXRsZURlc2MoKTtcbiAgfTtcblxuICBjbGVhckFsbFByb2plY3RzID0gKCkgPT4ge1xuICAgIHRoaXMuI3Byb2plY3RzID0gW107XG4gICAgdGhpcy4jY3VyclByb2plY3QgPSBudWxsO1xuICAgIHRoaXMuc2F2ZSgpO1xuICB9O1xuXG4gIHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIGxldCBvdXQgPSAnJztcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMuI3Byb2plY3RzKSB7XG4gICAgICBvdXQgKz0gcHJvamVjdC50b1N0cmluZygpICsgJ1xcbic7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RNYW5hZ2VyO1xuIiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcblxuY29uc3QgdXVpZCA9IHJlcXVpcmUoJ3V1aWQnKTtcbmNsYXNzIFByb2plY3Qge1xuICBzdGF0aWMgUFJJT1JJVFlfT1JERVIgPSBbJ25vbmUnLCAnIScsICchIScsICchISEnXTtcblxuICAjaWQ7XG4gICNuYW1lO1xuICAjYWxsVG9kb3M7XG5cbiAgY29uc3RydWN0b3IoaWQgPSBudWxsLCBuYW1lID0gJ05ldyBQcm9qZWN0JywgYWxsVG9kb3MgPSBbXSkge1xuICAgIGlmICghaWQpIHRoaXMuI2lkID0gYHByb2plY3QtJHt1dWlkLnY0KCl9YDtcbiAgICBlbHNlIHRoaXMuI2lkID0gaWQ7XG4gICAgdGhpcy4jbmFtZSA9IG5hbWU7XG4gICAgdGhpcy4jYWxsVG9kb3MgPSBbLi4uYWxsVG9kb3NdO1xuICB9XG5cbiAgc2V0IGlkKGlkKSB7XG4gICAgdGhpcy4jaWQgPSBpZDtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaWQ7XG4gIH1cblxuICBzZXQgbmFtZShuYW1lKSB7XG4gICAgdGhpcy4jbmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbmFtZTtcbiAgfVxuXG4gIGdldCB1bmNoZWNrZWRUb2RvcygpIHtcbiAgICByZXR1cm4gdGhpcy4jYWxsVG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmNoZWNrID09PSBmYWxzZSk7XG4gIH1cblxuICBnZXQgY2hlY2tlZFRvZG9zKCkge1xuICAgIHJldHVybiB0aGlzLiNhbGxUb2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uY2hlY2sgPT09IHRydWUpO1xuICB9XG5cbiAgc2V0IGFsbFRvZG9zKHRvZG9zKSB7XG4gICAgdGhpcy4jYWxsVG9kb3MgPSBbLi4udG9kb3NdO1xuICB9XG5cbiAgZ2V0IGFsbFRvZG9zKCkge1xuICAgIHJldHVybiB0aGlzLiNhbGxUb2RvcztcbiAgfVxuXG4gIGlzRW1wdHkgPSAoKSA9PiAodGhpcy4jYWxsVG9kb3MgPT09IDAgPyB0cnVlIDogZmFsc2UpO1xuXG4gIGdldE51bVRvZG8gPSAoKSA9PiB0aGlzLiNhbGxUb2Rvcy5sZW5ndGg7XG5cbiAgZ2V0TnVtQ2hlY2tlZCA9ICgpID0+IHRoaXMuY2hlY2tlZFRvZG9zLmxlbmd0aDtcblxuICBnZXROdW1VbmNoZWNrZWQgPSAoKSA9PiB0aGlzLnVuY2hlY2tlZFRvZG9zLmxlbmd0aDtcblxuICBnZXRUb2RvQnlUaXRsZSA9ICh0aXRsZSkgPT4ge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuO1xuICAgIGxldCBtYXRjaGVzID0gW107XG4gICAgZm9yIChsZXQgdG9kbyBvZiB0aGlzLiNhbGxUb2Rvcykge1xuICAgICAgaWYgKHRvZG8udGl0bGUgPT09IHRpdGxlKSB7XG4gICAgICAgIG1hdGNoZXMucHVzaCh0b2RvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkgcmV0dXJuIG1hdGNoZXM7XG4gICAgZWxzZSByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBnZXRUb2RvID0gKGlkKSA9PiB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBUb2RvIHdpdGggSUQgJHtpZH0gY2Fubm90IGJlIGZvdW5kYCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZm9yIChsZXQgdGQgb2YgdGhpcy4jYWxsVG9kb3MpIHtcbiAgICAgIGlmICh0ZC5pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIHRkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBhZGRUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0aGlzLiNhbGxUb2Rvcy5wdXNoKHRvZG8pO1xuICB9O1xuXG4gIHJlbW92ZVRvZG8gPSAoaWQpID0+IHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFRvZG8gd2l0aCBJRCAke2lkfSBjYW5ub3QgYmUgZm91bmRgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy4jYWxsVG9kb3MgPSB0aGlzLiNhbGxUb2Rvcy5maWx0ZXIoKHRkKSA9PiB0ZC5pZCAhPT0gaWQpO1xuICB9O1xuXG4gIGVkaXRUb2RvID0gKGlkLCBuZXdUaXRsZSwgbmV3RGVzYywgbmV3RGF0ZSwgbmV3UHJpb3JpdHkpID0+IHtcbiAgICB0aGlzLmdldFRvZG8oaWQpLmVkaXQobmV3VGl0bGUsIG5ld0Rlc2MsIG5ld0RhdGUsIG5ld1ByaW9yaXR5KTtcbiAgfTtcblxuICBjaGVja1RvZG8gPSAoaWQpID0+IHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHJldHVybjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudW5jaGVja2VkVG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRkID0gdGhpcy51bmNoZWNrZWRUb2Rvc1tpXTtcbiAgICAgIGlmICh0ZC5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGQudG9nZ2xlQ2hlY2soKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHVuY2hlY2tUb2RvID0gKGlkKSA9PiB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm47XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoZWNrZWRUb2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGQgPSB0aGlzLmNoZWNrZWRUb2Rvc1tpXTtcbiAgICAgIGlmICh0ZC5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGQudG9nZ2xlQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdG9nZ2xlQ2hlY2tUb2RvID0gKGlkKSA9PiB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm47XG4gICAgY29uc3QgdGQgPSB0aGlzLmdldFRvZG8oaWQpO1xuICAgIGlmICh0ZC5jaGVjaykgdGhpcy51bmNoZWNrVG9kbyhpZCk7XG4gICAgZWxzZSB0aGlzLmNoZWNrVG9kbyhpZCk7XG4gIH07XG5cbiAgZXF1YWxzID0gKHByb2plY3QpID0+IHRoaXMuaWQgPT09IHByb2plY3QuaWQ7XG5cbiAgY2xlYXJBbGxUb2RvcyA9ICgpID0+IHtcbiAgICB0aGlzLiNhbGxUb2RvcyA9IFtdO1xuICB9O1xuXG4gIGNsZWFySGlzdG9yeSA9ICgpID0+IHtcbiAgICB0aGlzLiNhbGxUb2RvcyA9IFsuLi50aGlzLnVuY2hlY2tlZFRvZG9zXTtcbiAgfTtcblxuICBzb3J0QnlBZGREYXRlQXNjID0gKCkgPT4ge1xuICAgIHRoaXMuI2FsbFRvZG9zID0gdGhpcy4jYWxsVG9kb3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIERhdGUucGFyc2UoYS5hZGREYXRlKSAtIERhdGUucGFyc2UoYi5hZGREYXRlKTtcbiAgICB9KTtcbiAgfTtcblxuICBzb3J0QnlBZGREYXRlRGVzYyA9ICgpID0+IHtcbiAgICB0aGlzLiNhbGxUb2RvcyA9IHRoaXMuI2FsbFRvZG9zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBEYXRlLnBhcnNlKGIuYWRkRGF0ZSkgLSBEYXRlLnBhcnNlKGEuYWRkRGF0ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc29ydEJ5UHJpb3JpdHlBc2MgPSAoKSA9PiB7XG4gICAgdGhpcy4jYWxsVG9kb3MgPSB0aGlzLiNhbGxUb2Rvcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBwcmlvcml0eUEgPSBQcm9qZWN0LlBSSU9SSVRZX09SREVSLmluZGV4T2YoXG4gICAgICAgIGEucHJpb3JpdHkudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5QiA9IFByb2plY3QuUFJJT1JJVFlfT1JERVIuaW5kZXhPZihcbiAgICAgICAgYi5wcmlvcml0eS50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHByaW9yaXR5QSAtIHByaW9yaXR5QjtcbiAgICB9KTtcbiAgfTtcblxuICBzb3J0QnlQcmlvcml0eURlc2MgPSAoKSA9PiB7XG4gICAgdGhpcy4jYWxsVG9kb3MgPSB0aGlzLiNhbGxUb2Rvcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBwcmlvcml0eUEgPSBQcm9qZWN0LlBSSU9SSVRZX09SREVSLmluZGV4T2YoXG4gICAgICAgIGEucHJpb3JpdHkudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5QiA9IFByb2plY3QuUFJJT1JJVFlfT1JERVIuaW5kZXhPZihcbiAgICAgICAgYi5wcmlvcml0eS50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHByaW9yaXR5QiAtIHByaW9yaXR5QTtcbiAgICB9KTtcbiAgfTtcblxuICBzb3J0QnlEYXRlQXNjID0gKCkgPT4ge1xuICAgIHRoaXMuI2FsbFRvZG9zID0gdGhpcy4jYWxsVG9kb3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIERhdGUucGFyc2UoYS5kYXRlKSAtIERhdGUucGFyc2UoYi5kYXRlKTtcbiAgICB9KTtcbiAgfTtcblxuICBzb3J0QnlEYXRlRGVzYyA9ICgpID0+IHtcbiAgICB0aGlzLiNhbGxUb2RvcyA9IHRoaXMuI2FsbFRvZG9zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBEYXRlLnBhcnNlKGIuZGF0ZSkgLSBEYXRlLnBhcnNlKGEuZGF0ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc29ydEJ5VGl0bGVBc2MgPSAoKSA9PiB7XG4gICAgdGhpcy4jYWxsVG9kb3MgPSB0aGlzLiNhbGxUb2Rvcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS50aXRsZS5sb2NhbGVDb21wYXJlKGIudGl0bGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHNvcnRCeVRpdGxlRGVzYyA9ICgpID0+IHtcbiAgICB0aGlzLiNhbGxUb2RvcyA9IHRoaXMuI2FsbFRvZG9zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBiLnRpdGxlLmxvY2FsZUNvbXBhcmUoYS50aXRsZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgbGV0IG1zZyA9IGBQcm9qZWN0IE5hbWU6ICR7dGhpcy5uYW1lfVxcblByb2plY3QgSUQ6ICR7dGhpcy5pZH1cXG5gO1xuICAgIGlmICh0aGlzLiNhbGxUb2Rvcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI2FsbFRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1zZyArPSBgVG8tZG8gJHtpICsgMX06XFxuYDtcbiAgICAgICAgbXNnICs9IHRoaXMuI2FsbFRvZG9zW2ldLnRvU3RyaW5nKCkgKyAnXFxuJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1zZztcbiAgfTtcblxuICB0b0pTT04gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLiNpZCxcbiAgICAgIGFsbFRvZG9zOiB0aGlzLiNhbGxUb2Rvcy5sZW5ndGhcbiAgICAgICAgPyB0aGlzLiNhbGxUb2Rvcy5tYXAoKHRvZG8pID0+IHRvZG8udG9KU09OKCkpXG4gICAgICAgIDogW10sXG4gICAgICBuYW1lOiB0aGlzLiNuYW1lLFxuICAgIH07XG4gIH07XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoanNvbi5pZCwganNvbi5uYW1lKTtcbiAgICBwcm9qZWN0LiNhbGxUb2RvcyA9IGpzb24uYWxsVG9kb3MubWFwKCh0b2RvSlNPTikgPT5cbiAgICAgIFRvZG8uZnJvbUpTT04odG9kb0pTT04pXG4gICAgKTtcbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiY29uc3QgdXVpZCA9IHJlcXVpcmUoJ3V1aWQnKTtcblxuZXhwb3J0IGNvbnN0IHNldFRpbWVab25lID0gKCkgPT4ge1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0aW1lem9uZU9mZnNldCA9IG5vdy5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDA7XG4gIGNvbnN0IGxvY2FsVGltZSA9IG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgLSB0aW1lem9uZU9mZnNldCk7XG4gIHJldHVybiBsb2NhbFRpbWUudG9JU09TdHJpbmcoKTtcbn07XG5cbmNsYXNzIFRvZG8ge1xuICAjaWQ7XG4gICN0aXRsZTtcbiAgI2Rlc2M7XG4gICNkYXRlO1xuICAjcHJpb3JpdHk7XG4gICNjaGVjaztcbiAgI2FkZERhdGU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgaWQgPSBudWxsLFxuICAgIHRpdGxlID0gJ05ldyBUb2RvJyxcbiAgICBkZXNjID0gJ05vbmUnLFxuICAgIGRhdGUgPSBzZXRUaW1lWm9uZSgpLnNsaWNlKDAsIDEwKSxcbiAgICBwcmlvcml0eSA9ICdOb25lJyxcbiAgICBjaGVjayA9IGZhbHNlLFxuICAgIGFkZERhdGUgPSBzZXRUaW1lWm9uZSgpXG4gICkge1xuICAgIGlmIChpZCAhPT0gbnVsbCkgdGhpcy4jaWQgPSBpZDtcbiAgICBlbHNlIHRoaXMuI2lkID0gYHRvZG8tJHt1dWlkLnY0KCl9YDtcblxuICAgIGlmICh0aXRsZSAhPT0gJycpIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gICAgZWxzZSB0aGlzLiN0aXRsZSA9ICdOZXcgVG9kbyc7XG5cbiAgICBpZiAoZGVzYyAhPT0gJycpIHRoaXMuI2Rlc2MgPSBkZXNjO1xuICAgIGVsc2UgdGhpcy4jZGVzYyA9ICdOb25lJztcblxuICAgIHRoaXMuI2RhdGUgPSBkYXRlO1xuICAgIHRoaXMuI3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy4jY2hlY2sgPSBjaGVjaztcbiAgICB0aGlzLiNhZGREYXRlID0gYWRkRGF0ZTtcbiAgfVxuXG4gIHNldCBpZChpZCkge1xuICAgIHRoaXMuI2lkID0gaWQ7XG4gIH1cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLiNpZDtcbiAgfVxuXG4gIHNldCB0aXRsZSh0aXRsZSkge1xuICAgIHRoaXMuI3RpdGxlID0gdGl0bGU7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3RpdGxlO1xuICB9XG5cbiAgc2V0IGRlc2MoZGVzYykge1xuICAgIHRoaXMuI2Rlc2MgPSBkZXNjO1xuICB9XG5cbiAgZ2V0IGRlc2MoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Rlc2M7XG4gIH1cblxuICBzZXQgZGF0ZShkYXRlKSB7XG4gICAgdGhpcy4jZGF0ZSA9IGRhdGU7XG4gIH1cblxuICBnZXQgZGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jZGF0ZTtcbiAgfVxuXG4gIHNldCBwcmlvcml0eShwcmlvcml0eSkge1xuICAgIHRoaXMuI3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3ByaW9yaXR5O1xuICB9XG5cbiAgc2V0IGNoZWNrKGNoZWNrKSB7XG4gICAgdGhpcy4jY2hlY2sgPSBjaGVjaztcbiAgfVxuXG4gIGdldCBjaGVjaygpIHtcbiAgICByZXR1cm4gdGhpcy4jY2hlY2s7XG4gIH1cblxuICBzZXQgYWRkRGF0ZShkYXRlKSB7XG4gICAgdGhpcy4jYWRkRGF0ZSA9IGRhdGU7XG4gIH1cblxuICBnZXQgYWRkRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jYWRkRGF0ZTtcbiAgfVxuXG4gIHRvZ2dsZUNoZWNrID0gKCkgPT4gKHRoaXMuI2NoZWNrID0gIXRoaXMuI2NoZWNrKTtcblxuICBlZGl0ID0gKG5ld1RpdGxlLCBuZXdEZXNjLCBuZXdEYXRlLCBuZXdQcmlvcml0eSkgPT4ge1xuICAgIHRoaXMuI3RpdGxlID0gbmV3VGl0bGU7XG4gICAgdGhpcy4jZGVzYyA9IG5ld0Rlc2M7XG4gICAgdGhpcy4jZGF0ZSA9IG5ld0RhdGU7XG4gICAgdGhpcy4jcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgfTtcblxuICBlcXVhbHMgPSAodG9kbykgPT4gdGhpcy4jaWQgPT09IHRvZG8uaWQ7XG5cbiAgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBJRDogJHt0aGlzLiNpZH1cXG5gICtcbiAgICAgIGBUaXRsZTogJHt0aGlzLiN0aXRsZX1cXG5gICtcbiAgICAgIGBEZXNjcmlwdGlvbjogJHt0aGlzLiNkZXNjfVxcbmAgK1xuICAgICAgYER1ZSBEYXRlOiAke3RoaXMuI2RhdGV9XFxuYCArXG4gICAgICBgUHJpb3JpdHk6ICR7dGhpcy4jcHJpb3JpdHl9XFxuYCArXG4gICAgICBgQ2hlY2s6ICR7dGhpcy4jY2hlY2t9XFxuYFxuICAgICk7XG4gIH07XG5cbiAgdG9KU09OID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy4jaWQsXG4gICAgICB0aXRsZTogdGhpcy4jdGl0bGUsXG4gICAgICBkZXNjOiB0aGlzLiNkZXNjLFxuICAgICAgZGF0ZTogdGhpcy4jZGF0ZSxcbiAgICAgIHByaW9yaXR5OiB0aGlzLiNwcmlvcml0eSxcbiAgICAgIGNoZWNrOiB0aGlzLiNjaGVjayxcbiAgICAgIGFkZERhdGU6IHRoaXMuI2FkZERhdGUsXG4gICAgfTtcbiAgfTtcblxuICBzdGF0aWMgZnJvbUpTT04gPSAoanNvbikgPT4ge1xuICAgIHJldHVybiBuZXcgVG9kbyhcbiAgICAgIGpzb24uaWQsXG4gICAgICBqc29uLnRpdGxlLFxuICAgICAganNvbi5kZXNjLFxuICAgICAganNvbi5kYXRlLFxuICAgICAganNvbi5wcmlvcml0eSxcbiAgICAgIGpzb24uY2hlY2ssXG4gICAgICBqc29uLmFkZERhdGVcbiAgICApO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9