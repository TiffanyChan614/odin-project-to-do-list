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

  toJSON() {
    const projectsJSON = this.#projects.map((p) => p.toJSON());
    const currProjectId = this.#currProject ? this.#currProject.id : null;
    return { projects: projectsJSON, currProjectId: currProjectId };
  }

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

  save() {
    (0,_local_storage__WEBPACK_IMPORTED_MODULE_0__.saveLocalStorage)(this.#storageKey, this.toJSON());
  }

  isEmpty() {
    this.#projects.length === 0;
  }

  getProject(id) {
    if (this.isEmpty()) {
      console.error(`Project with ID ${id} is not found`);
    }
    for (let p of this.#projects) {
      if (p.id === id) {
        return p;
      }
    }
    return null;
  }

  addProject(project) {
    this.#projects.push(project);
    this.#currProject = project;
    this.save();
  }

  removeProject(id) {
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
  }

  addTodo(todo) {
    if (this.#currProject) {
      this.#currProject.addTodo(todo);
      this.save();
    }
  }

  removeTodo(id) {
    if (this.#currProject) {
      this.#currProject.removeTodo(id);
      this.save();
    }
  }

  getTodo(id) {
    if (this.#currProject) return this.#currProject.getTodo(id);
  }

  editTodo(id, title, desc, date, priority) {
    this.#currProject.editTodo(id, title, desc, date, priority);
    this.save();
  }

  toggleCheckTodo(id) {
    this.#currProject.toggleCheckTodo(id);
    this.save();
  }

  editProject(id, newName) {
    this.getProject(id).name = newName;
    this.#currProject = this.getProject(id);
    this.save();
  }

  clearCurrentProject() {
    if (this.#currProject) {
      this.#currProject.clearAllTodos();
      this.save();
    }
  }

  searchTodoByTitle(searchStr) {
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
  }

  sortByAddDateAsc() {
    this.#currProject.sortByAddDateAsc();
  }

  sortByAddDateDesc() {
    this.#currProject.sortByAddDateDesc();
  }

  sortByPriorityAsc() {
    this.#currProject.sortByPriorityAsc();
  }

  sortByPriorityDesc() {
    this.#currProject.sortByPriorityDesc();
  }

  sortByDateAsc() {
    this.#currProject.sortByDateAsc();
  }

  sortByDateDesc() {
    this.#currProject.sortByDateDesc();
  }

  sortByTitleAsc() {
    this.#currProject.sortByTitleAsc();
  }

  sortByTitleDesc() {
    this.#currProject.sortByTitleDesc();
  }

  clearAllProjects() {
    this.#projects = [];
    this.#currProject = null;
    this.save();
  }

  toString() {
    let out = '';
    for (let project of this.#projects) {
      out += project.toString() + '\n';
    }
    return out;
  }
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

  isEmpty() {
    this.#allTodos === 0 ? true : false;
  }

  getNumTodo() {
    this.#allTodos.length;
  }

  getNumChecked() {
    this.checkedTodos.length;
  }

  getNumUnchecked() {
    this.uncheckedTodos.length;
  }

  getTodoByTitle(title) {
    if (this.isEmpty()) return;
    let matches = [];
    for (let todo of this.#allTodos) {
      if (todo.title === title) {
        matches.push(todo);
      }
    }
    if (matches.length > 0) return matches;
    else return null;
  }

  getTodo(id) {
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
  }

  addTodo(todo) {
    this.#allTodos.push(todo);
  }

  removeTodo(id) {
    if (this.isEmpty()) {
      console.error(`Todo with ID ${id} cannot be found`);
      return;
    }
    this.#allTodos = this.#allTodos.filter((td) => td.id !== id);
  }

  editTodo(id, newTitle, newDesc, newDate, newPriority) {
    this.getTodo(id).edit(newTitle, newDesc, newDate, newPriority);
  }

  checkTodo(id) {
    if (this.isEmpty()) return;
    for (let i = 0; i < this.uncheckedTodos.length; i++) {
      const td = this.uncheckedTodos[i];
      if (td.id === id) {
        td.toggleCheck();
        break;
      }
    }
  }

  uncheckTodo(id) {
    if (this.isEmpty()) return;
    for (let i = 0; i < this.checkedTodos.length; i++) {
      const td = this.checkedTodos[i];
      if (td.id === id) {
        td.toggleCheck();
      }
    }
  }

  toggleCheckTodo(id) {
    if (this.isEmpty()) return;
    const td = this.getTodo(id);
    if (td.check) this.uncheckTodo(id);
    else this.checkTodo(id);
  }

  equals(project) {
    this.id === project.id;
  }

  clearAllTodos() {
    this.#allTodos = [];
  }

  clearHistory() {
    this.#allTodos = [...this.uncheckedTodos];
  }

  sortByAddDateAsc() {
    this.#allTodos.sort((a, b) => {
      return Date.parse(a.addDate) - Date.parse(b.addDate);
    });
  }

  sortByAddDateDesc() {
    this.#allTodos.sort((a, b) => {
      return Date.parse(b.addDate) - Date.parse(a.addDate);
    });
  }

  sortByPriorityAsc() {
    this.#allTodos.sort((a, b) => {
      const priorityA = Project.PRIORITY_ORDER.indexOf(
        a.priority.toLowerCase()
      );
      const priorityB = Project.PRIORITY_ORDER.indexOf(
        b.priority.toLowerCase()
      );
      return priorityA - priorityB;
    });
  }

  sortByPriorityDesc() {
    this.#allTodos.sort((a, b) => {
      const priorityA = Project.PRIORITY_ORDER.indexOf(
        a.priority.toLowerCase()
      );
      const priorityB = Project.PRIORITY_ORDER.indexOf(
        b.priority.toLowerCase()
      );
      return priorityB - priorityA;
    });
  }

  sortByDateAsc() {
    this.#allTodos.sort((a, b) => {
      return Date.parse(a.date) - Date.parse(b.date);
    });
  }

  sortByDateDesc() {
    this.#allTodos.sort((a, b) => {
      return Date.parse(b.date) - Date.parse(a.date);
    });
  }

  sortByTitleAsc() {
    this.#allTodos.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  }

  sortByTitleDesc = () => {
    this.#allTodos.sort((a, b) => {
      return b.title.localeCompare(a.title);
    });
  };

  toString() {
    let msg = `Project Name: ${this.name}\nProject ID: ${this.id}\n`;
    if (this.#allTodos.length > 0) {
      for (let i = 0; i < this.#allTodos.length; i++) {
        msg += `To-do ${i + 1}:\n`;
        msg += this.#allTodos[i].toString() + '\n';
      }
    }
    return msg;
  }

  toJSON() {
    return {
      id: this.#id,
      allTodos: this.#allTodos.length
        ? this.#allTodos.map((todo) => todo.toJSON())
        : [],
      name: this.#name,
    };
  }

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

  toggleCheck() {
    this.#check = !this.#check;
  }

  edit(newTitle, newDesc, newDate, newPriority) {
    this.#title = newTitle;
    this.#desc = newDesc;
    this.#date = newDate;
    this.#priority = newPriority;
  }

  equals(todo) {
    this.#id === todo.id;
  }

  toString() {
    return (
      `ID: ${this.#id}\n` +
      `Title: ${this.#title}\n` +
      `Description: ${this.#desc}\n` +
      `Due Date: ${this.#date}\n` +
      `Priority: ${this.#priority}\n` +
      `Check: ${this.#check}\n`
    );
  }

  toJSON() {
    return {
      id: this.#id,
      title: this.#title,
      desc: this.#desc,
      date: this.#date,
      priority: this.#priority,
      check: this.#check,
      addDate: this.#addDate,
    };
  }

  static fromJSON(json) {
    return new Todo(
      json.id,
      json.title,
      json.desc,
      json.date,
      json.priority,
      json.check,
      json.addDate
    );
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FB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QkFBNEIsVUFBVTs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsZ0JBQWdCLFlBQVk7QUFDNUIsc0JBQXNCLFdBQVc7QUFDakMsbUJBQW1CLFdBQVc7QUFDOUIsbUJBQW1CLGVBQWU7QUFDbEMsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9tZDUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbmlsLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9wYXJzZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvc2hhMS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92MS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3YzNS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y1LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvZGlzcGxheS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9kb20tY3JlYXRvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2luaXRpYWxQTS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvbG9jYWwtc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvcHJvamVjdC1tYW5hZ2VyLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS13aGl0ZS1ncmV5OiAjZWJlYmViO1xcbiAgLS1wYWxlLWdyZXk6ICNlM2U5ZWI7XFxuICAtLWxpZ2h0LWdyZXk6ICNkNmQ5ZGE7XFxuICAtLWdyZXk6ICNiMmJlYzM7XFxuICAtLW5ldXRyYWwtZ3JleTogI2E3YTdhNztcXG4gIC0tbWVkaXVtLWxpZ2h0LWdyZXk6ICM2NDZhNmM7XFxuICAtLW1lZGl1bS1ncmV5OiAjNDQ0YjRkO1xcbiAgLS1kYXJrOiAjMmQzNDM2O1xcbiAgLS1za3ktYmx1ZTogIzU1YTJmMDtcXG4gIC0tbGlnaHQtYmx1ZTogIzNlOTJlNjtcXG4gIC0tYmx1ZTogIzA5ODRlMztcXG4gIC0tZGFyay1ibHVlOiAjMDA2ZmM0O1xcbiAgLS1waW5rOiAjZmY0NjQ2O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sICdzeXN0ZW0tdWknO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNzaWRlYmFyLm9wZW4gI3Byb2plY3QtYnRucy1jb250YWluZXIsXFxuI2NvbnRlbnQgPiBoZWFkZXIge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jc2lkZWJhci5vcGVuIHtcXG4gIHdpZHRoOiAyNSU7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWF4LXdpZHRoOiA0MHJlbTtcXG59XFxuXFxuI3NpZGViYXIuY2xvc2Uge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbiNwcm9qZWN0LWJ0bnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuI3NpZGViYXIub3BlbiAjcHJvamVjdC1idG5zLWNvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgcGFkZGluZzogMCAwLjJyZW07XFxuICBtYXJnaW46IDAgMC43cmVtIDAgMC43cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4jc2lkZWJhci5vcGVuIGhlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbiNzaWRlYmFyLmNsb3NlICNwcm9qZWN0LWJ0bnMtY29udGFpbmVyIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcXG59XFxuXFxuI3NpZGViYXIuY2xvc2UgI2NsZWFyLWFsbC1wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdC1idG5zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNwcm9qZWN0LWJ0bnMtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktYmx1ZSk7XFxufVxcblxcbiNzaWRlYmFyLmNsb3NlICNwcm9qZWN0LWJ0bnMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3Quc2VsZWN0ZWQsXFxuLnByb2plY3Quc2VsZWN0ZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LWJsdWUpO1xcbn1cXG5cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgaGVpZ2h0OiA2dmg7XFxuICBtaW4taGVpZ2h0OiAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtO1xcbn1cXG5cXG4ucHJvamVjdCBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxufVxcblxcbi5wcm9qZWN0IGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tb3ZlcmxheSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLW92ZXJsYXkgaW5wdXQge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tZ3JleSk7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tb3ZlcmxheSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtZ3JleSk7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tYnRucyxcXG4jdG9kby1mb3JtLWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWJ0bnMgYnV0dG9uLFxcbiN0b2RvLWZvcm0tYnRucyBidXR0b24ge1xcbiAgcGFkZGluZzogMC43cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWdyZXkpO1xcbn1cXG5cXG4jY2FuY2VsLXByb2otYnRuOmhvdmVyLFxcbiNjYW5jZWwtdG9kby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxufVxcblxcbiNzdWJtaXQtcHJvai1idG46aG92ZXIsXFxuI3N1Ym1pdC10b2RvLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3RvZG8tZm9ybS1idG5zIHtcXG4gIG1hcmdpbi10b3A6IDAuOHJlbTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjVyZW07XFxufVxcblxcbiN0b2RvLWZvcm0tb3ZlcmxheSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdG9kby1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyNXJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI3RvZG8tZm9ybSBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0b2RvLWZvcm0gaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLWdyZXkpO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sICdzeXN0ZW0tdWknO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG59XFxuXFxuI3RvZG8tZm9ybSA+IGRpdjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuM3JlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxufVxcblxcbiN0b2RvLWZvcm0gPiBkaXYgbGFiZWwge1xcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcXG59XFxuXFxuI3RvZG8tZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWdyZXkpO1xcbn1cXG5cXG4jdG9kby1mb3JtICN0b2RvLWRlc2Mge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgbWF4LWhlaWdodDogMjByZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jc2VhcmNoLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDA7XFxuICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbiNzZWFyY2gtYmFyIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDY2JTtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDY2JTtcXG4gIGJvcmRlcjogMC4wN3JlbSBzb2xpZCB2YXIoLS1wYWxlLWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAzcmVtO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSAuc2VhcmNoLXJlc3VsdCB7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1saWdodC1ncmV5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSAuc2VhcmNoLXJlc3VsdCAubWF0Y2hlZC1wcm9qZWN0IHtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgLnNlYXJjaC1yZXN1bHQgLm1hdGNoZWQtdG9kby5jaGVja2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSAuc2VhcmNoLXJlc3VsdDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgPiAuc2VhcmNoLXJlc3VsdDpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBzb2xpZCB2YXIoLS1wYWxlLWdyZXkpO1xcbn1cXG5cXG4jdG9kby1jb250YWluZXIge1xcbiAgcGFkZGluZzogMC4ycmVtIDEuMnJlbSAycmVtIDEuMnJlbTtcXG59XFxuXFxuI2NvbnRlbnQgPiBoZWFkZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbn1cXG5cXG4jdG9kby1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEuNXJlbSAwIDFyZW07XFxufVxcblxcbiN0b2RvLWNvbnRhaW5lciBoZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbiN0b2RvLW1haW4tYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4jdG9kby1tYWluLWJ0bnMgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdG9kby1tYWluLWJ0bnMgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdG9kby1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbiAgcGFkZGluZzogMC44cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbn1cXG5cXG4udG9kbzpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMC4ycmVtIHZhcigtLW1lZGl1bS1saWdodC1ncmV5KTtcXG59XFxuXFxuLnRvZG8tdXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHkge1xcbiAgY29sb3I6IHZhcigtLXBpbmspO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50b2RvIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1uZXV0cmFsLWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS1ibHVlKTtcXG59XFxuXFxuLnRvZG8tYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWdyZXkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuLnRvZG8taWNvbnMge1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG59XFxuXFxuLnRvZG8gYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnRvZG8tZGV0YWlscyB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbn1cXG5cXG4udG9kby1kZXNjLFxcbi50b2RvLWRhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8uY2hlY2tlZCBzcGFuIHtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxufVxcblxcbi50b2RvLmNoZWNrZWQgLnRvZG8tdGl0bGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvIC50b2RvLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA0NTA7XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBvcGFjaXR5OiAwLjg7XFxuICB6LWluZGV4OiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ncmV5KTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICdGSUxMJyAwLCAnd2dodCcgMjAwLCAnR1JBRCcgMCwgJ29wc3onIDUwO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCAucHJvai1pY29ucyB7XFxuICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCAudG9kby1pY29ucyB7XFxuICB3aWR0aDogMXJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLDZC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RSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtFQUNWLGtDQUFrQztFQUNsQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrRUFBa0U7QUFDcEU7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS13aGl0ZS1ncmV5OiAjZWJlYmViO1xcbiAgLS1wYWxlLWdyZXk6ICNlM2U5ZWI7XFxuICAtLWxpZ2h0LWdyZXk6ICNkNmQ5ZGE7XFxuICAtLWdyZXk6ICNiMmJlYzM7XFxuICAtLW5ldXRyYWwtZ3JleTogI2E3YTdhNztcXG4gIC0tbWVkaXVtLWxpZ2h0LWdyZXk6ICM2NDZhNmM7XFxuICAtLW1lZGl1bS1ncmV5OiAjNDQ0YjRkO1xcbiAgLS1kYXJrOiAjMmQzNDM2O1xcbiAgLS1za3ktYmx1ZTogIzU1YTJmMDtcXG4gIC0tbGlnaHQtYmx1ZTogIzNlOTJlNjtcXG4gIC0tYmx1ZTogIzA5ODRlMztcXG4gIC0tZGFyay1ibHVlOiAjMDA2ZmM0O1xcbiAgLS1waW5rOiAjZmY0NjQ2O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sICdzeXN0ZW0tdWknO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNzaWRlYmFyLm9wZW4gI3Byb2plY3QtYnRucy1jb250YWluZXIsXFxuI2NvbnRlbnQgPiBoZWFkZXIge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jc2lkZWJhci5vcGVuIHtcXG4gIHdpZHRoOiAyNSU7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWF4LXdpZHRoOiA0MHJlbTtcXG59XFxuXFxuI3NpZGViYXIuY2xvc2Uge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbiNwcm9qZWN0LWJ0bnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuI3NpZGViYXIub3BlbiAjcHJvamVjdC1idG5zLWNvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgcGFkZGluZzogMCAwLjJyZW07XFxuICBtYXJnaW46IDAgMC43cmVtIDAgMC43cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4jc2lkZWJhci5vcGVuIGhlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbiNzaWRlYmFyLmNsb3NlICNwcm9qZWN0LWJ0bnMtY29udGFpbmVyIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcXG59XFxuXFxuI3NpZGViYXIuY2xvc2UgI2NsZWFyLWFsbC1wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdC1idG5zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNwcm9qZWN0LWJ0bnMtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktYmx1ZSk7XFxufVxcblxcbiNzaWRlYmFyLmNsb3NlICNwcm9qZWN0LWJ0bnMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3Quc2VsZWN0ZWQsXFxuLnByb2plY3Quc2VsZWN0ZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LWJsdWUpO1xcbn1cXG5cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgaGVpZ2h0OiA2dmg7XFxuICBtaW4taGVpZ2h0OiAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtO1xcbn1cXG5cXG4ucHJvamVjdCBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxufVxcblxcbi5wcm9qZWN0IGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tb3ZlcmxheSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLW92ZXJsYXkgaW5wdXQge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tZ3JleSk7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tb3ZlcmxheSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtZ3JleSk7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tYnRucyxcXG4jdG9kby1mb3JtLWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWJ0bnMgYnV0dG9uLFxcbiN0b2RvLWZvcm0tYnRucyBidXR0b24ge1xcbiAgcGFkZGluZzogMC43cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWdyZXkpO1xcbn1cXG5cXG4jY2FuY2VsLXByb2otYnRuOmhvdmVyLFxcbiNjYW5jZWwtdG9kby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxufVxcblxcbiNzdWJtaXQtcHJvai1idG46aG92ZXIsXFxuI3N1Ym1pdC10b2RvLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3RvZG8tZm9ybS1idG5zIHtcXG4gIG1hcmdpbi10b3A6IDAuOHJlbTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjVyZW07XFxufVxcblxcbiN0b2RvLWZvcm0tb3ZlcmxheSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdG9kby1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyNXJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI3RvZG8tZm9ybSBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0b2RvLWZvcm0gaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLWdyZXkpO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sICdzeXN0ZW0tdWknO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG59XFxuXFxuI3RvZG8tZm9ybSA+IGRpdjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuM3JlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxufVxcblxcbiN0b2RvLWZvcm0gPiBkaXYgbGFiZWwge1xcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcXG59XFxuXFxuI3RvZG8tZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWdyZXkpO1xcbn1cXG5cXG4jdG9kby1mb3JtICN0b2RvLWRlc2Mge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgbWF4LWhlaWdodDogMjByZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jc2VhcmNoLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDA7XFxuICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbiNzZWFyY2gtYmFyIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDY2JTtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDY2JTtcXG4gIGJvcmRlcjogMC4wN3JlbSBzb2xpZCB2YXIoLS1wYWxlLWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAzcmVtO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSAuc2VhcmNoLXJlc3VsdCB7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1saWdodC1ncmV5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSAuc2VhcmNoLXJlc3VsdCAubWF0Y2hlZC1wcm9qZWN0IHtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgLnNlYXJjaC1yZXN1bHQgLm1hdGNoZWQtdG9kby5jaGVja2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSAuc2VhcmNoLXJlc3VsdDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgPiAuc2VhcmNoLXJlc3VsdDpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBzb2xpZCB2YXIoLS1wYWxlLWdyZXkpO1xcbn1cXG5cXG4jdG9kby1jb250YWluZXIge1xcbiAgcGFkZGluZzogMC4ycmVtIDEuMnJlbSAycmVtIDEuMnJlbTtcXG59XFxuXFxuI2NvbnRlbnQgPiBoZWFkZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbn1cXG5cXG4jdG9kby1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEuNXJlbSAwIDFyZW07XFxufVxcblxcbiN0b2RvLWNvbnRhaW5lciBoZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbiN0b2RvLW1haW4tYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4jdG9kby1tYWluLWJ0bnMgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdG9kby1tYWluLWJ0bnMgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdG9kby1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbiAgcGFkZGluZzogMC44cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbn1cXG5cXG4udG9kbzpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMC4ycmVtIHZhcigtLW1lZGl1bS1saWdodC1ncmV5KTtcXG59XFxuXFxuLnRvZG8tdXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHkge1xcbiAgY29sb3I6IHZhcigtLXBpbmspO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50b2RvIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1uZXV0cmFsLWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS1ibHVlKTtcXG59XFxuXFxuLnRvZG8tYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWdyZXkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuLnRvZG8taWNvbnMge1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG59XFxuXFxuLnRvZG8gYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnRvZG8tZGV0YWlscyB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbn1cXG5cXG4udG9kby1kZXNjLFxcbi50b2RvLWRhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8uY2hlY2tlZCBzcGFuIHtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxufVxcblxcbi50b2RvLmNoZWNrZWQgLnRvZG8tdGl0bGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvIC50b2RvLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA0NTA7XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBvcGFjaXR5OiAwLjg7XFxuICB6LWluZGV4OiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ncmV5KTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICdGSUxMJyAwLCAnd2dodCcgMjAwLCAnR1JBRCcgMCwgJ29wc3onIDUwO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCAucHJvai1pY29ucyB7XFxuICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCAudG9kby1pY29ucyB7XFxuICB3aWR0aDogMXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOSUxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX25pbC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInBhcnNlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9wYXJzZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0cmluZ2lmeVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjFcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3YuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2M1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjIuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjQuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2YWxpZGF0ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdmFsaWRhdGUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2ZXJzaW9uXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92ZXJzaW9uLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YxLmpzXCIpKTtcblxudmFyIF92MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjMuanNcIikpO1xuXG52YXIgX3YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92NC5qc1wiKSk7XG5cbnZhciBfdjQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y1LmpzXCIpKTtcblxudmFyIF9uaWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL25pbC5qc1wiKSk7XG5cbnZhciBfdmVyc2lvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmVyc2lvbi5qc1wiKSk7XG5cbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcblxudmFyIF9zdHJpbmdpZnkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKSk7XG5cbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KG1zZy5sZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1kNVRvSGV4RW5jb2RlZEFycmF5KHdvcmRzVG9NZDUoYnl0ZXNUb1dvcmRzKGJ5dGVzKSwgYnl0ZXMubGVuZ3RoICogOCkpO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5cblxuZnVuY3Rpb24gbWQ1VG9IZXhFbmNvZGVkQXJyYXkoaW5wdXQpIHtcbiAgY29uc3Qgb3V0cHV0ID0gW107XG4gIGNvbnN0IGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIGNvbnN0IGhleFRhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICBjb25zdCB4ID0gaW5wdXRbaSA+PiA1XSA+Pj4gaSAlIDMyICYgMHhmZjtcbiAgICBjb25zdCBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIGxldCBhID0gMTczMjU4NDE5MztcbiAgbGV0IGIgPSAtMjcxNzMzODc5O1xuICBsZXQgYyA9IC0xNzMyNTg0MTk0O1xuICBsZXQgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgY29uc3Qgb2xkYSA9IGE7XG4gICAgY29uc3Qgb2xkYiA9IGI7XG4gICAgY29uc3Qgb2xkYyA9IGM7XG4gICAgY29uc3Qgb2xkZCA9IGQ7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICB9XG5cbiAgcmV0dXJuIFthLCBiLCBjLCBkXTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IGJ5dGVzIHRvIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHNcbiAqIENoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpZ2gtYnl0ZSBzaWxlbnRseSBpZ25vcmVkLlxuICovXG5cblxuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgY29uc3Qgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIGNvbnN0IGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgY29uc3QgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5cblxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuXG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbnZhciBfZGVmYXVsdCA9IG1kNTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgcmFuZG9tVVVJRFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICBsZXQgdjtcbiAgY29uc3QgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbnZhciBfZGVmYXVsdCA9IHBhcnNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJuZztcbi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuXG5mdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICBjb25zdCBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICBjb25zdCBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIGNvbnN0IGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgY29uc3QgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICBjb25zdCBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgY29uc3QgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgYXJyW2pdID0gYnl0ZXNbaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuXG4gICAgTVtpXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICBjb25zdCBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgV1t0XSA9IE1baV1bdF07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgdCA9IDE2OyB0IDwgODA7ICsrdCkge1xuICAgICAgV1t0XSA9IFJPVEwoV1t0IC0gM10gXiBXW3QgLSA4XSBeIFdbdCAtIDE0XSBeIFdbdCAtIDE2XSwgMSk7XG4gICAgfVxuXG4gICAgbGV0IGEgPSBIWzBdO1xuICAgIGxldCBiID0gSFsxXTtcbiAgICBsZXQgYyA9IEhbMl07XG4gICAgbGV0IGQgPSBIWzNdO1xuICAgIGxldCBlID0gSFs0XTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgODA7ICsrdCkge1xuICAgICAgY29uc3QgcyA9IE1hdGguZmxvb3IodCAvIDIwKTtcbiAgICAgIGNvbnN0IFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1t0XSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG52YXIgX2RlZmF1bHQgPSBzaGExO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5leHBvcnRzLnVuc2FmZVN0cmluZ2lmeSA9IHVuc2FmZVN0cmluZ2lmeTtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbnZhciBfZGVmYXVsdCA9IHN0cmluZ2lmeTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JuZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm5nLmpzXCIpKTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcbmxldCBfbm9kZUlkO1xuXG5sZXQgX2Nsb2Nrc2VxOyAvLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcblxuXG5sZXQgX2xhc3RNU2VjcyA9IDA7XG5sZXQgX2xhc3ROU2VjcyA9IDA7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQgZm9yIEFQSSBkZXRhaWxzXG5cbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGxldCBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICBjb25zdCBiID0gYnVmIHx8IG5ldyBBcnJheSgxNik7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsZXQgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICBsZXQgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxOyAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcblxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICBjb25zdCBzZWVkQnl0ZXMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgX3JuZy5kZWZhdWx0KSgpO1xuXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtzZWVkQnl0ZXNbMF0gfCAweDAxLCBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XV07XG4gICAgfVxuXG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9IC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuXG5cbiAgbGV0IG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IERhdGUubm93KCk7IC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcblxuICBsZXQgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7IC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcblxuICBjb25zdCBkdCA9IG1zZWNzIC0gX2xhc3RNU2VjcyArIChuc2VjcyAtIF9sYXN0TlNlY3MpIC8gMTAwMDA7IC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9IC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcblxuXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9IC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcblxuXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInV1aWQudjEoKTogQ2FuJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjXCIpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxOyAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcblxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDsgLy8gYHRpbWVfbG93YFxuXG4gIGNvbnN0IHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjsgLy8gYHRpbWVfbWlkYFxuXG4gIGNvbnN0IHRtaCA9IG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjsgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcblxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG5cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7IC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDsgLy8gYGNsb2NrX3NlcV9sb3dgXG5cbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmOyAvLyBgbm9kZWBcblxuICBmb3IgKGxldCBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgfHwgKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShiKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdjE7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MzUuanNcIikpO1xuXG52YXIgX21kID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tZDUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCB2MyA9ICgwLCBfdi5kZWZhdWx0KSgndjMnLCAweDMwLCBfbWQuZGVmYXVsdCk7XG52YXIgX2RlZmF1bHQgPSB2MztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5VUkwgPSBleHBvcnRzLkROUyA9IHZvaWQgMDtcbmV4cG9ydHMuZGVmYXVsdCA9IHYzNTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5cbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpOyAvLyBVVEY4IGVzY2FwZVxuXG4gIGNvbnN0IGJ5dGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuY29uc3QgRE5TID0gJzZiYTdiODEwLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnRzLkROUyA9IEROUztcbmNvbnN0IFVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0cy5VUkwgPSBVUkw7XG5cbmZ1bmN0aW9uIHYzNShuYW1lLCB2ZXJzaW9uLCBoYXNoZnVuYykge1xuICBmdW5jdGlvbiBnZW5lcmF0ZVVVSUQodmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgX25hbWVzcGFjZTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHN0cmluZ1RvQnl0ZXModmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJykge1xuICAgICAgbmFtZXNwYWNlID0gKDAsIF9wYXJzZS5kZWZhdWx0KShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGlmICgoKF9uYW1lc3BhY2UgPSBuYW1lc3BhY2UpID09PSBudWxsIHx8IF9uYW1lc3BhY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9uYW1lc3BhY2UubGVuZ3RoKSAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH0gLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcblxuXG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZS5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2UpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZSwgbmFtZXNwYWNlLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoZnVuYyhieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidWY7XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xuICB9IC8vIEZ1bmN0aW9uI25hbWUgaXMgbm90IHNldHRhYmxlIG9uIHNvbWUgcGxhdGZvcm1zICgjMjcwKVxuXG5cbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZVVVSUQubmFtZSA9IG5hbWU7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICB9IGNhdGNoIChlcnIpIHt9IC8vIEZvciBDb21tb25KUyBkZWZhdWx0IGV4cG9ydCBzdXBwb3J0XG5cblxuICBnZW5lcmF0ZVVVSUQuRE5TID0gRE5TO1xuICBnZW5lcmF0ZVVVSUQuVVJMID0gVVJMO1xuICByZXR1cm4gZ2VuZXJhdGVVVUlEO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX25hdGl2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbmF0aXZlLmpzXCIpKTtcblxudmFyIF9ybmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JuZy5qc1wiKSk7XG5cbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAoX25hdGl2ZS5kZWZhdWx0LnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBfbmF0aXZlLmRlZmF1bHQucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nLmRlZmF1bHQpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkocm5kcyk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHY0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjM1LmpzXCIpKTtcblxudmFyIF9zaGEgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NoYTEuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCB2NSA9ICgwLCBfdi5kZWZhdWx0KSgndjUnLCAweDUwLCBfc2hhLmRlZmF1bHQpO1xudmFyIF9kZWZhdWx0ID0gdjU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWdleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVnZXguanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgX3JlZ2V4LmRlZmF1bHQudGVzdCh1dWlkKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdmFsaWRhdGU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2ZXJzaW9uKHV1aWQpIHtcbiAgaWYgKCEoMCwgX3ZhbGlkYXRlLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxNSksIDE2KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdmVyc2lvbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsImltcG9ydCBkb21DcmVhdG9yIGZyb20gJy4vZG9tLWNyZWF0b3InO1xuaW1wb3J0IFRvZG8sIHsgc2V0VGltZVpvbmUgfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHBtIGZyb20gJy4vaW5pdGlhbFBNJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IHByb2pVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKTtcbmNvbnN0IHRvZG9VbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWxpc3QnKTtcbmNvbnN0IGFkZFByb2pCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKTtcbmNvbnN0IHByb2pGb3JtT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0tb3ZlcmxheScpO1xuY29uc3QgcHJvakZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtJyk7XG5jb25zdCBwcm9qTmFtZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuY29uc3QgY2xlYXJQcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NsZWFyLWFsbC1wcm9qZWN0cycpO1xuY29uc3QgYWRkVG9kb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdG9kbycpO1xuY29uc3QgY2xlYXJUb2Rvc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhci1hbGwtdG9kb3MnKTtcbmNvbnN0IHRvZG9Gb3JtT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWZvcm0tb3ZlcmxheScpO1xuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1mb3JtJyk7XG5jb25zdCB0b2RvVGl0bGVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXRpdGxlJyk7XG5jb25zdCB0b2RvRGVzY0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGVzYycpO1xuY29uc3QgdG9kb0RhdGVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRhdGUnKTtcbmNvbnN0IHRvZG9Qcmlvcml0eUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tcHJpb3JpdHknKTtcbmNvbnN0IGNhbmNlbFByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1wcm9qLWJ0bicpO1xuY29uc3QgY2FuY2VsVG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLXRvZG8tYnRuJyk7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXInKTtcbmNvbnN0IHNpZGViYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhci1idG4nKTtcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1jb250YWluZXInKTtcbmNvbnN0IHNob3dDb21wbGV0ZWRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy1jb21wbGV0ZWQnKTtcbmNvbnN0IGN1cnJQcm9qTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXByb2plY3QtbmFtZScpO1xuY29uc3Qgc2VhcmNoRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWJhcicpO1xuY29uc3QgZHJvcGRvd25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3Bkb3duLW1lbnUnKTtcbmNvbnN0IHNvcnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtbWVudScpO1xuY29uc3Qgc29ydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LXRvZG8nKTtcblxuY29uc3Qgc29ydEZ1bmN0aW9ucyA9IG5ldyBNYXAoW1xuICBbJ0R1ZSBEYXRlIC0gQ2xvc2VzdCBGaXJzdCcsICgpID0+IHBtLnNvcnRCeURhdGVBc2MoKV0sXG4gIFsnRHVlIERhdGUgLSBGdXJ0aGVzdCBGaXJzdCcsICgpID0+IHBtLnNvcnRCeURhdGVEZXNjKCldLFxuICBbJ1ByaW9yaXR5IC0gTG93ZXN0IEZpcnN0JywgKCkgPT4gcG0uc29ydEJ5UHJpb3JpdHlBc2MoKV0sXG4gIFsnUHJpb3JpdHkgLSBIaWdoZXN0IEZpcnN0JywgKCkgPT4gcG0uc29ydEJ5UHJpb3JpdHlEZXNjKCldLFxuICBbJ1RpdGxlIC0gQSB0byBaJywgKCkgPT4gcG0uc29ydEJ5VGl0bGVBc2MoKV0sXG4gIFsnVGl0bGUgLSBaIHRvIEEnLCAoKSA9PiBwbS5zb3J0QnlUaXRsZURlc2MoKV0sXG4gIFsnRGF0ZSBDcmVhdGVkIC0gT2xkZXN0IEZpcnN0JywgKCkgPT4gcG0uc29ydEJ5QWRkRGF0ZUFzYygpXSxcbiAgWydEYXRlIENyZWF0ZWQgLSBOZXdlc3QgRmlyc3QnLCAoKSA9PiBwbS5zb3J0QnlBZGREYXRlRGVzYygpXSxcbl0pO1xuXG5jb25zdCBFRElUID0gMCxcbiAgQUREID0gMTtcblxubGV0IHByb2pUb0VkaXQgPSBudWxsO1xubGV0IHByb2plY3RNb2RlID0gQUREO1xubGV0IHNlbGVjdGVkVG9kbyA9IG51bGw7XG5sZXQgdG9kb01vZGUgPSBBREQ7XG5sZXQgc2hvd0NvbXBsZXRlZCA9IGZhbHNlO1xubGV0IHNvcnRNb2RlID0gJ0RhdGUgQ3JlYXRlZCAtIE9sZGVzdCBGaXJzdCc7XG5cbmNvbnN0IGNsZWFyUHJvamVjdHMgPSAoKSA9PiB7XG4gIGlmIChwcm9qVWwpIHtcbiAgICBwcm9qVWwudGV4dENvbnRlbnQgPSAnJztcbiAgfVxufTtcblxuY29uc3QgY2xlYXJUb2RvcyA9ICgpID0+IHtcbiAgaWYgKHRvZG9VbCkge1xuICAgIHRvZG9VbC50ZXh0Q29udGVudCA9ICcnO1xuICB9XG59O1xuXG5jb25zdCBzaG93UHJvamVjdHMgPSAoKSA9PiB7XG4gIGlmIChwbS5pc0VtcHR5KCkpIHtcbiAgICBjdXJyUHJvak5hbWUudGV4dENvbnRlbnQgPSAnJztcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHBtLnByb2plY3RzKSB7XG4gICAgcHJvalVsLmFwcGVuZENoaWxkKGRvbUNyZWF0b3IuY3JlYXRlUHJvamVjdChwcm9qZWN0LCBwbSkpO1xuICB9XG4gIGlmIChwbS5jdXJyUHJvamVjdCkgY3VyclByb2pOYW1lLnRleHRDb250ZW50ID0gcG0uY3VyclByb2plY3QubmFtZTtcbn07XG5cbmNvbnN0IHNob3dUb2RvcyA9ICh0b2RvcykgPT4ge1xuICBpZiAoIXRvZG9VbCkgcmV0dXJuO1xuICBmb3IgKGxldCB0b2RvIG9mIHRvZG9zKSB7XG4gICAgdG9kb1VsLmFwcGVuZENoaWxkKGRvbUNyZWF0b3IuY3JlYXRlVG9kbyh0b2RvKSk7XG4gIH1cbn07XG5cbmNvbnN0IHJlZnJlc2hQcm9qZWN0cyA9ICgpID0+IHtcbiAgY2xlYXJQcm9qZWN0cygpO1xuICBzaG93UHJvamVjdHMoKTtcbn07XG5cbmNvbnN0IHJlZnJlc2hUb2RvcyA9ICgpID0+IHtcbiAgY2xlYXJUb2RvcygpO1xuICBpZiAocG0uY3VyclByb2plY3QpIHtcbiAgICBpZiAoc2hvd0NvbXBsZXRlZCkgc2hvd1RvZG9zKHBtLmN1cnJQcm9qZWN0LmFsbFRvZG9zKTtcbiAgICBlbHNlIHNob3dUb2RvcyhwbS5jdXJyUHJvamVjdC51bmNoZWNrZWRUb2Rvcyk7XG4gIH1cbn07XG5cbmNvbnN0IGFjdGl2YXRlQWRkUHJvaiA9ICgpID0+IHtcbiAgYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKHNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbG9zZScpKSB7XG4gICAgICBzaWRlYmFyQnRuLmNsaWNrKCk7XG4gICAgfVxuICAgIHByb2plY3RNb2RlID0gQUREO1xuICAgIHByb2pGb3JtT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHByb2pOYW1lRmllbGQudmFsdWUgPSAnJztcbiAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVQcm9qRm9ybVN1Ym1pdCA9ICgpID0+IHtcbiAgbGV0IHByb2pOYW1lID0gcHJvak5hbWVGaWVsZC52YWx1ZTtcbiAgaWYgKHByb2plY3RNb2RlID09PSBBREQpIHtcbiAgICBpZiAocHJvak5hbWUgIT09ICcnKSBwbS5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KG51bGwsIHByb2pOYW1lKSk7XG4gICAgZWxzZSBwbS5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KCkpO1xuICB9IGVsc2UgaWYgKHByb2plY3RNb2RlID09PSBFRElUKSB7XG4gICAgaWYgKHByb2pUb0VkaXQpIHtcbiAgICAgIHBtLmVkaXRQcm9qZWN0KHByb2pUb0VkaXQuaWQsIHByb2pOYW1lKTtcbiAgICAgIHByb2pUb0VkaXQgPSBudWxsO1xuICAgIH1cbiAgfVxuICBwcm9qRm9ybU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVmcmVzaFByb2plY3RzKCk7XG4gIHJlZnJlc2hUb2RvcygpO1xufTtcblxuY29uc3QgYWN0aXZhdGVQcm9qRm9ybSA9ICgpID0+IHtcbiAgcHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGFuZGxlUHJvakZvcm1TdWJtaXQoKTtcbiAgfSk7XG5cbiAgcHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGhhbmRsZVByb2pGb3JtU3VibWl0KCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlQ2FuY2VsUHJvakZvcm0gPSAoKSA9PiB7XG4gIGNhbmNlbFByb2pGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHJvakZvcm1PdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVQcm9qRXZlbnQgPSAoKSA9PiB7XG4gIHByb2pVbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSAmJiB0YXJnZXQuaWQpIHtcbiAgICAgIHBtLmN1cnJQcm9qZWN0ID0gcG0uZ2V0UHJvamVjdCh0YXJnZXQuaWQpO1xuICAgICAgcmVmcmVzaFByb2plY3RzKCk7XG4gICAgICByZWZyZXNoVG9kb3MoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVDbGVhckFsbFByb2ogPSAoKSA9PiB7XG4gIGNsZWFyUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcG0uY2xlYXJBbGxQcm9qZWN0cygpO1xuICAgIHJlZnJlc2hQcm9qZWN0cygpO1xuICAgIHJlZnJlc2hUb2RvcygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlQ2xlYXJQcm9qID0gKCkgPT4ge1xuICBwcm9qVWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmIChcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NsZWFyLXByb2plY3QnKSB8fFxuICAgICAgKHRhcmdldC5wYXJlbnROb2RlICE9PSBudWxsICYmXG4gICAgICAgIHRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnY2xlYXItcHJvamVjdCcpKVxuICAgICkge1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NsZWFyLXByb2plY3QnKSlcbiAgICAgICAgcG0ucmVtb3ZlUHJvamVjdCh0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcbiAgICAgIGVsc2UgcG0ucmVtb3ZlUHJvamVjdCh0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuICAgICAgcmVmcmVzaFByb2plY3RzKCk7XG4gICAgICByZWZyZXNoVG9kb3MoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVFZGl0UHJvaiA9ICgpID0+IHtcbiAgcHJvalVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXByb2plY3QnKSB8fFxuICAgICAgKHRhcmdldC5wYXJlbnROb2RlICE9PSBudWxsICYmXG4gICAgICAgIHRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZWRpdC1wcm9qZWN0JykpXG4gICAgKSB7XG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdC1wcm9qZWN0JykpIHtcbiAgICAgICAgcHJvalRvRWRpdCA9IHBtLmdldFByb2plY3QodGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qVG9FZGl0ID0gcG0uZ2V0UHJvamVjdCh0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuICAgICAgfVxuICAgICAgcHJvamVjdE1vZGUgPSBFRElUO1xuICAgICAgcHJvakZvcm1PdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBsZXQgb2xkTmFtZSA9IHByb2pUb0VkaXQubmFtZTtcbiAgICAgIHByb2pOYW1lRmllbGQudmFsdWUgPSBvbGROYW1lO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBzaG93VG9kb0RldGFpbCA9ICh0b2RvTGkpID0+IHtcbiAgdG9kb0xpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdsaWdodCBwaW5rJztcbiAgY29uc3QgZGVzY1AgPSB0b2RvTGkucXVlcnlTZWxlY3RvcignLnRvZG8tZGVzYycpO1xuICBjb25zdCBkYXRlUCA9IHRvZG9MaS5xdWVyeVNlbGVjdG9yKCcudG9kby1kYXRlJyk7XG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkZXNjUCkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlzcGxheScpID09PSAnbm9uZScpIHtcbiAgICBkZXNjUC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGRhdGVQLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH0gZWxzZSB7XG4gICAgZGVzY1Auc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkYXRlUC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59O1xuXG5jb25zdCBhY3RpdmF0ZVRvZG9FdmVudCA9ICgpID0+IHtcbiAgdG9kb1VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBjb25zdCB0b2RvID0gdGFyZ2V0LmNsb3Nlc3QoJy50b2RvJyk7XG4gICAgY29uc3QgdG9kb1RpdGxlID0gdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnLnRvZG8tdGl0bGUnKTtcbiAgICBjb25zdCBpc0NoZWNrYm94ID0gdGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCc7XG4gICAgY29uc3QgaXNCdXR0b24gPSB0YXJnZXQudGFnTmFtZSA9PT0gJ0JVVFRPTic7XG4gICAgY29uc3QgaXNTVkcgPSB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG5cbiAgICBpZiAoKHRvZG8gfHwgdG9kb1RpdGxlKSAmJiAhaXNDaGVja2JveCAmJiAhaXNCdXR0b24gJiYgIWlzU1ZHKSB7XG4gICAgICBsZXQgdG9kb0xpID0gdG9kbyB8fCB0b2RvVGl0bGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBzaG93VG9kb0RldGFpbCh0b2RvTGkpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZUNoZWNrVG9kbyA9ICgpID0+IHtcbiAgdG9kb1VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2stdG9kbycpKSB7XG4gICAgICBwbS50b2dnbGVDaGVja1RvZG8odGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcbiAgICAgIHJlZnJlc2hUb2RvcygpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZUNsZWFyVG9kbyA9ICgpID0+IHtcbiAgdG9kb1VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xlYXItdG9kbycpKSB7XG4gICAgICBwbS5yZW1vdmVUb2RvKHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG4gICAgICByZWZyZXNoVG9kb3MoKTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnY2xlYXItdG9kbycpKSB7XG4gICAgICBwbS5yZW1vdmVUb2RvKHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcbiAgICAgIHJlZnJlc2hUb2RvcygpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZUFkZFRvZG8gPSAoKSA9PiB7XG4gIGFkZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHRvZG9Nb2RlID0gQUREO1xuICAgIHRvZG9Gb3JtT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRvZG9UaXRsZUZpZWxkLnZhbHVlID0gJyc7XG4gICAgdG9kb0Rlc2NGaWVsZC52YWx1ZSA9ICcnO1xuICAgIHRvZG9EYXRlRmllbGQudmFsdWUgPSBzZXRUaW1lWm9uZSgpLnNsaWNlKDAsIDEwKTtcbiAgICB0b2RvUHJpb3JpdHlGaWVsZC52YWx1ZSA9ICdOb25lJztcbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZUVkaXRUb2RvID0gKCkgPT4ge1xuICB0b2RvVWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmIChcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtdG9kbycpIHx8XG4gICAgICB0YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtdG9kbycpXG4gICAgKSB7XG4gICAgICB0b2RvTW9kZSA9IEVESVQ7XG4gICAgICB0b2RvRm9ybU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXRvZG8nKSlcbiAgICAgICAgc2VsZWN0ZWRUb2RvID0gcG0uZ2V0VG9kbyh0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHNlbGVjdGVkVG9kbyA9IHBtLmdldFRvZG8oXG4gICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9sZFRpdGxlID0gc2VsZWN0ZWRUb2RvLnRpdGxlO1xuICAgICAgY29uc3Qgb2xkRGVzYyA9IHNlbGVjdGVkVG9kby5kZXNjO1xuICAgICAgY29uc3Qgb2xkRGF0ZSA9IHNlbGVjdGVkVG9kby5kYXRlO1xuICAgICAgY29uc3Qgb2xkUHJpb3JpdHkgPSBzZWxlY3RlZFRvZG8ucHJpb3JpdHk7XG4gICAgICB0b2RvVGl0bGVGaWVsZC52YWx1ZSA9IG9sZFRpdGxlO1xuICAgICAgaWYgKG9sZERlc2MgIT09ICdOb25lJykgdG9kb0Rlc2NGaWVsZC52YWx1ZSA9IG9sZERlc2M7XG4gICAgICBlbHNlIHRvZG9EZXNjRmllbGQudmFsdWUgPSAnJztcbiAgICAgIHRvZG9EYXRlRmllbGQudmFsdWUgPSBvbGREYXRlO1xuICAgICAgdG9kb1ByaW9yaXR5RmllbGQudmFsdWUgPSBvbGRQcmlvcml0eTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlVG9kb0Zvcm1TdWJtaXQgPSAoKSA9PiB7XG4gIGxldCB0aXRsZSA9IHRvZG9UaXRsZUZpZWxkLnZhbHVlO1xuICBsZXQgZGVzYyA9IHRvZG9EZXNjRmllbGQudmFsdWU7XG4gIGxldCBkYXRlID0gdG9kb0RhdGVGaWVsZC52YWx1ZTtcbiAgbGV0IHByaW9yaXR5ID0gdG9kb1ByaW9yaXR5RmllbGQudmFsdWU7XG4gIGlmICh0b2RvTW9kZSA9PT0gQUREKSB7XG4gICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyhudWxsLCB0aXRsZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xuICAgIHBtLmFkZFRvZG8obmV3VG9kbyk7XG4gIH0gZWxzZSBpZiAodG9kb01vZGUgPT09IEVESVQpIHtcbiAgICBpZiAoc2VsZWN0ZWRUb2RvKSB7XG4gICAgICBkZXNjID0gZGVzYyA9PT0gJycgPyAnTm9uZScgOiBkZXNjO1xuICAgICAgcG0uZWRpdFRvZG8oc2VsZWN0ZWRUb2RvLmlkLCB0aXRsZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgc2VsZWN0ZWRUb2RvID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgcmVmcmVzaFRvZG9zKCk7XG4gIHRvZG9Gb3JtT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuY29uc3QgYWN0aXZhdGVUb2RvRm9ybSA9ICgpID0+IHtcbiAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGFuZGxlVG9kb0Zvcm1TdWJtaXQoKTtcbiAgfSk7XG4gIHRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmICghZS5zaGlmdEtleSAmJiBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBoYW5kbGVUb2RvRm9ybVN1Ym1pdCgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZUNhbmNlbFRvZG9Gb3JtID0gKCkgPT4ge1xuICBjYW5jZWxUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRvZG9Gb3JtT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlVG9kb0Zvcm1UZXh0Ym94ID0gKCkgPT4ge1xuICB0b2RvRGVzY0ZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnNoaWZ0S2V5ICYmIGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWwgPSB0aGlzLnZhbHVlO1xuICAgICAgY29uc3QgY3Vyc29yUG9zID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgIGNvbnN0IG5ld1ZhbCA9XG4gICAgICAgIGN1cnJlbnRWYWwuc3Vic3RyaW5nKDAsIGN1cnNvclBvcykgK1xuICAgICAgICAnXFxuJyArXG4gICAgICAgIGN1cnJlbnRWYWwuc3Vic3RyaW5nKGN1cnNvclBvcyk7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsO1xuICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHRoaXMuc2VsZWN0aW9uRW5kID0gY3Vyc29yUG9zICsgMTtcblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZUNsZWFyQWxsVG9kb3MgPSAoKSA9PiB7XG4gIGNsZWFyVG9kb3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHBtLmNsZWFyQ3VycmVudFByb2plY3QoKTtcbiAgICByZWZyZXNoVG9kb3MoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZVNpZGViYXJCdG4gPSAoKSA9PiB7XG4gIHNpZGViYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChcbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHByb2plY3RDb250YWluZXIpLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKSA9PT1cbiAgICAgICdub25lJ1xuICAgICkge1xuICAgICAgcHJvamVjdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ2Nsb3NlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdjbG9zZScpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCB0b2dnbGVTaG93Q29tcGxldGVkYnRuID0gKCkgPT4ge1xuICBpZiAoc2hvd0NvbXBsZXRlZCkge1xuICAgIHNob3dDb21wbGV0ZWRCdG4udGV4dENvbnRlbnQgPSAnSGlkZSBDb21wbGV0ZWQnO1xuICB9IGVsc2Uge1xuICAgIHNob3dDb21wbGV0ZWRCdG4udGV4dENvbnRlbnQgPSAnU2hvdyBDb21wbGV0ZWQnO1xuICB9XG59O1xuXG5jb25zdCBhY3RpdmF0ZVNob3dDb21wbGV0ZWQgPSAoKSA9PiB7XG4gIHNob3dDb21wbGV0ZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHNob3dDb21wbGV0ZWQgPSAhc2hvd0NvbXBsZXRlZDtcbiAgICB0b2dnbGVTaG93Q29tcGxldGVkYnRuKCk7XG4gICAgcmVmcmVzaFRvZG9zKCk7XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVTZWFyY2hCYXIgPSAoKSA9PiB7XG4gIHNlYXJjaEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGRyb3Bkb3duTWVudS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnN0IHNlYXJjaFN0ciA9IHNlYXJjaEZpZWxkLnZhbHVlO1xuICAgIGlmIChzZWFyY2hTdHIpIHtcbiAgICAgIGxldCBtYXRjaGVzID0gcG0uc2VhcmNoVG9kb0J5VGl0bGUoc2VhcmNoU3RyKTtcbiAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBmb3IgKGxldCBtYXRjaCBvZiBtYXRjaGVzKSB7XG4gICAgICAgICAgZHJvcGRvd25NZW51LmFwcGVuZENoaWxkKGRvbUNyZWF0b3IuY3JlYXRlUmVzdWx0RGl2KG1hdGNoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZHJvcGRvd25NZW51LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB9IGVsc2UgZHJvcGRvd25NZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIGRyb3Bkb3duTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlRHJvcGRvd25NZW51ID0gKCkgPT4ge1xuICBkcm9wZG93bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWFyY2gtcmVzdWx0JykpIHtcbiAgICAgIGxldCBwcm9qSWQgPSB0YXJnZXQudmFsdWUuc3BsaXQoJzonKVswXTtcbiAgICAgIGxldCB0b2RvSWQgPSB0YXJnZXQudmFsdWUuc3BsaXQoJzonKVsxXTtcbiAgICAgIHBtLmN1cnJQcm9qZWN0ID0gcG0uZ2V0UHJvamVjdChwcm9qSWQpO1xuICAgICAgaWYgKHBtLmdldFRvZG8odG9kb0lkKS5jaGVjaykgc2hvd0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICB0b2dnbGVTaG93Q29tcGxldGVkYnRuKCk7XG4gICAgICByZWZyZXNoUHJvamVjdHMoKTtcbiAgICAgIHJlZnJlc2hUb2RvcygpO1xuICAgICAgY29uc3QgdG9kb0xpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dG9kb0lkfWApO1xuICAgICAgc2hvd1RvZG9EZXRhaWwodG9kb0xpKTtcbiAgICB9XG4gICAgZHJvcGRvd25NZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc2VhcmNoRmllbGQudmFsdWUgPSAnJztcbiAgfSk7XG59O1xuXG5jb25zdCBoaWRlRHJvcERvd25NZW51ID0gKCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKFxuICAgICAgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlYXJjaC1yZXN1bHQnKSAmJlxuICAgICAgdGFyZ2V0LmlkICE9PSAnc2VhcmNoLWJhcicgJiZcbiAgICAgIHRhcmdldC5pZCAhPT0gJ2Ryb3Bkb3duLW1lbnUnXG4gICAgKVxuICAgICAgZHJvcGRvd25NZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgc2VhcmNoRmllbGQudmFsdWUgPSAnJztcbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZVNvcnRNZW51ID0gKCkgPT4ge1xuICBzb3J0TWVudS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgIHNvcnRNb2RlID0gZS50YXJnZXQudmFsdWU7XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVTb3J0QnRuID0gKCkgPT4ge1xuICBzb3J0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzb3J0RnVuY3Rpb25zLmdldChzb3J0TW9kZSkoKTtcbiAgICByZWZyZXNoVG9kb3MoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZVVJID0gKCkgPT4ge1xuICBhY3RpdmF0ZUFkZFByb2ooKTtcbiAgYWN0aXZhdGVDYW5jZWxQcm9qRm9ybSgpO1xuICBhY3RpdmF0ZVByb2pGb3JtKCk7XG4gIGFjdGl2YXRlUHJvakV2ZW50KCk7XG4gIGFjdGl2YXRlQ2xlYXJBbGxQcm9qKCk7XG4gIGFjdGl2YXRlQ2xlYXJQcm9qKCk7XG4gIGFjdGl2YXRlRWRpdFByb2ooKTtcbiAgYWN0aXZhdGVUb2RvRXZlbnQoKTtcbiAgYWN0aXZhdGVDaGVja1RvZG8oKTtcbiAgYWN0aXZhdGVDbGVhclRvZG8oKTtcbiAgYWN0aXZhdGVBZGRUb2RvKCk7XG4gIGFjdGl2YXRlRWRpdFRvZG8oKTtcbiAgYWN0aXZhdGVUb2RvRm9ybSgpO1xuICBhY3RpdmF0ZUNhbmNlbFRvZG9Gb3JtKCk7XG4gIGFjdGl2YXRlQ2xlYXJBbGxUb2RvcygpO1xuICBhY3RpdmF0ZVNpZGViYXJCdG4oKTtcbiAgYWN0aXZhdGVTaG93Q29tcGxldGVkKCk7XG4gIGFjdGl2YXRlU2VhcmNoQmFyKCk7XG4gIGFjdGl2YXRlRHJvcGRvd25NZW51KCk7XG4gIGhpZGVEcm9wRG93bk1lbnUoKTtcbiAgYWN0aXZhdGVUb2RvRm9ybVRleHRib3goKTtcbiAgYWN0aXZhdGVTb3J0TWVudSgpO1xuICBhY3RpdmF0ZVNvcnRCdG4oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVmcmVzaFByb2plY3RzLFxuICByZWZyZXNoVG9kb3MsXG4gIGFjdGl2YXRlVUksXG59O1xuIiwiY29uc3QgU1ZHX0RFRkFVTFRfQ0xBU1MgPSAnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCc7XG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3QsIHBtKSA9PiB7XG4gIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICBsaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gIGxpLmlkID0gYCR7cHJvamVjdC5pZH1gO1xuICBsaS5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0QnRuc0RpdigpKTtcbiAgaWYgKHBtLmN1cnJQcm9qZWN0ICYmIGxpLmlkID09PSBwbS5jdXJyUHJvamVjdC5pZCkge1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gIH1cbiAgcmV0dXJuIGxpO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEJ0bnNEaXYgPSAoKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdlRhZygncHJvamVjdC1idG5zJyk7XG4gIGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVCdG5UYWcoJ2VkaXQtcHJvamVjdCcsICdlZGl0X25vdGUnLCAncHJvai1pY29ucycpO1xuICBjb25zdCBjbGVhckJ0biA9IGNyZWF0ZUJ0blRhZygnY2xlYXItcHJvamVjdCcsICdjbG9zZScsICdwcm9qLWljb25zJyk7XG4gIGRpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNsZWFyQnRuKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvZG8gPSAodG9kbykgPT4ge1xuICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gIGxpLmlkID0gYCR7dG9kby5pZH1gO1xuICBjb25zdCB1cHBlckRpdiA9IGNyZWF0ZURpdlRhZygndG9kby11cHBlcicpO1xuICB1cHBlckRpdi5hcHBlbmRDaGlsZChjcmVhdGVJbmZvRGl2KHRvZG8pKTtcbiAgdXBwZXJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0J0bnNEaXYoKSk7XG4gIGxpLmFwcGVuZENoaWxkKHVwcGVyRGl2KTtcbiAgY29uc3QgbG93ZXJEaXYgPSBjcmVhdGVEaXZUYWcoJ3RvZG8tbG93ZXInKTtcbiAgbG93ZXJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0RldGFpbHNEaXYodG9kbykpO1xuICBsaS5hcHBlbmRDaGlsZChsb3dlckRpdik7XG4gIGlmICh0b2RvLmNoZWNrKSBsaS5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gIHJldHVybiBsaTtcbn07XG5cbmNvbnN0IGNyZWF0ZUluZm9EaXYgPSAodG9kbykgPT4ge1xuICBjb25zdCBkaXYgPSBjcmVhdGVEaXZUYWcoJ3RvZG8taW5mbycpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0NoZWNrKHRvZG8pKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9Qcmlvcml0eSh0b2RvKSk7XG4gIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVTcGFuVGFnKHRvZG8udGl0bGUsICd0b2RvLXRpdGxlJykpO1xuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgY3JlYXRlVG9kb0J0bnNEaXYgPSAoKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdlRhZygndG9kby1idG5zJyk7XG4gIGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVCdG5UYWcoJ2VkaXQtdG9kbycsICdlZGl0X25vdGUnLCAndG9kby1pY29ucycpO1xuICBjb25zdCBjbG9zZUJ0biA9IGNyZWF0ZUJ0blRhZygnY2xlYXItdG9kbycsICdjbG9zZScsICd0b2RvLWljb25zJyk7XG4gIGRpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvZG9EZXRhaWxzRGl2ID0gKHRvZG8pID0+IHtcbiAgY29uc3QgZGl2ID0gY3JlYXRlRGl2VGFnKCd0b2RvLWRldGFpbHMnKTtcbiAgY29uc3QgZGVzYyA9IGNyZWF0ZVBUYWcoYERlc2NyaXB0aW9uOlxcdCR7dG9kby5kZXNjfWAsICd0b2RvLWRlc2MnKTtcbiAgY29uc3QgZGF0ZSA9IGNyZWF0ZVBUYWcoYER1ZSBkYXRlOlxcdCR7dG9kby5kYXRlfWAsICd0b2RvLWRhdGUnKTtcbiAgZGl2LmFwcGVuZENoaWxkKGRlc2MpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBjcmVhdGVUb2RvQ2hlY2sgPSAodG9kbykgPT4ge1xuICBsZXQgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2stdG9kbycpO1xuICBjaGVjay5jaGVja2VkID0gdG9kby5jaGVjaztcbiAgcmV0dXJuIGNoZWNrO1xufTtcblxuY29uc3QgY3JlYXRlVG9kb1ByaW9yaXR5ID0gKHRvZG8pID0+IHtcbiAgbGV0IHByaW9yaXR5O1xuICBpZiAodG9kby5wcmlvcml0eSA9PT0gJ05vbmUnKSBwcmlvcml0eSA9IGNyZWF0ZVNwYW5UYWcoJycsICd0b2RvLXByaW9yaXR5Jyk7XG4gIGVsc2UgcHJpb3JpdHkgPSBjcmVhdGVTcGFuVGFnKHRvZG8ucHJpb3JpdHksICd0b2RvLXByaW9yaXR5Jyk7XG4gIHJldHVybiBwcmlvcml0eTtcbn07XG5cbmNvbnN0IGNyZWF0ZVJlc3VsdERpdiA9IChtYXRjaCkgPT4ge1xuICBjb25zdCBvcHRpb24gPSBjcmVhdGVEaXZUYWcoXG4gICAgJ3NlYXJjaC1yZXN1bHQnLFxuICAgIGAke21hdGNoLm1hdGNoZWRQcm9qLmlkfToke21hdGNoLm1hdGNoZWRUb2RvLmlkfWBcbiAgKTtcblxuICBjb25zdCB0b2RvVGl0bGUgPSBjcmVhdGVQVGFnKG1hdGNoLm1hdGNoZWRUb2RvLnRpdGxlLCAnbWF0Y2hlZC10b2RvJyk7XG4gIGlmIChtYXRjaC5tYXRjaGVkVG9kby5jaGVjaykge1xuICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gIH1cbiAgY29uc3QgcHJvamVjdE5hbWUgPSBjcmVhdGVQVGFnKG1hdGNoLm1hdGNoZWRQcm9qLm5hbWUsICdtYXRjaGVkLXByb2plY3QnKTtcblxuICBvcHRpb24uYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgb3B0aW9uLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICByZXR1cm4gb3B0aW9uO1xufTtcblxuY29uc3QgY3JlYXRlU1ZHU3BhblRhZyA9ICh0ZXh0LCBkZWZhdWx0Q2xhc3MsIGN1c3RvbUNsYXNzKSA9PiB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZChkZWZhdWx0Q2xhc3MsIGN1c3RvbUNsYXNzKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBzcGFuO1xufTtcblxuY29uc3QgY3JlYXRlUFRhZyA9ICh0ZXh0LCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gcDtcbn07XG5cbmNvbnN0IGNyZWF0ZVNwYW5UYWcgPSAodGV4dCwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIHNwYW47XG59O1xuXG5jb25zdCBjcmVhdGVCdG5UYWcgPSAoY2xhc3NOYW1lLCBpY29uTmFtZSwgc3ZnQ2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBjb25zdCBpY29uID0gY3JlYXRlU1ZHU3BhblRhZyhpY29uTmFtZSwgU1ZHX0RFRkFVTFRfQ0xBU1MsIHN2Z0NsYXNzTmFtZSk7XG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZURpdlRhZyA9IChjbGFzc05hbWUsIHZhbCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIGRpdi52YWx1ZSA9IHZhbCA/IHZhbCA6ICcnO1xuICByZXR1cm4gZGl2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVQcm9qZWN0LFxuICBjcmVhdGVUb2RvLFxuICBjcmVhdGVSZXN1bHREaXYsXG59O1xuIiwiaW1wb3J0IHBtIGZyb20gJy4vaW5pdGlhbFBNLmpzJztcbmltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tICcuL2Rpc3BsYXktY29udHJvbGxlcic7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuZGlzcGxheUNvbnRyb2xsZXIucmVmcmVzaFRvZG9zKHBtKTtcbmRpc3BsYXlDb250cm9sbGVyLnJlZnJlc2hQcm9qZWN0cyhwbSk7XG5kaXNwbGF5Q29udHJvbGxlci5hY3RpdmF0ZVVJKHBtKTtcbiIsImltcG9ydCBQcm9qZWN0TWFuYWdlciBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xubGV0IHBtID0gbmV3IFByb2plY3RNYW5hZ2VyKCk7XG5pZiAocG0uaXNFbXB0eSgpKSB7XG4gIGxldCBwcm9qMSA9IG5ldyBQcm9qZWN0KG51bGwpO1xuICBwbS5hZGRQcm9qZWN0KHByb2oxKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHBtO1xuIiwiY29uc3Qgc3RvcmFnZUF2YWlsYWJsZSA9ICh0eXBlKSA9PiB7XG4gIGxldCBzdG9yYWdlO1xuICB0cnkge1xuICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coYEVycm9yIHRlc3RpbmcgZm9yIHN0b3JhZ2UgYXZhaWxhYmlsaXR5OiAke2V9YCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5jb25zdCBsb2FkTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2VyaWFsaXplZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgaWYgKHNlcmlhbGl6ZWREYXRhID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjb25zdCBwYXJzZWREYXRhID0gSlNPTi5wYXJzZShzZXJpYWxpemVkRGF0YSk7XG4gICAgICByZXR1cm4gcGFyc2VkRGF0YTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBsb2FkaW5nIGZyb20gbG9jYWwgc3RvcmFnZTogJHtlcnJ9YCk7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnTG9jYWwgc3RvcmFnZSBub3QgYXZhaWxhYmxlJyk7XG4gIH1cbn07XG5cbmNvbnN0IHNhdmVMb2NhbFN0b3JhZ2UgPSAoa2V5LCBkYXRhKSA9PiB7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzZXJpYWxpemVkRGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBzZXJpYWxpemVkRGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3Igc2F2aW5nIHRvIGxvY2FsIHN0b3JhZ2U6ICR7ZXJyfWApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnTG9jYWwgc3RvcmFnZSBub3QgYXZhaWxhYmxlJyk7XG4gIH1cbn07XG5cbmNvbnN0IGNsZWFyTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICB0cnkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBlcnJvciBjbGVhcmluZyBsb2NhbCBzdG9yYWdlOiAke2UubWVzc2FnZX1gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ0xvY2FsIHN0b3JhZ2Ugbm90IGF2YWlsYWJsZScpO1xuICB9XG59O1xuXG5leHBvcnQgeyBsb2FkTG9jYWxTdG9yYWdlLCBzYXZlTG9jYWxTdG9yYWdlLCBjbGVhckxvY2FsU3RvcmFnZSB9O1xuIiwiaW1wb3J0IHsgbG9hZExvY2FsU3RvcmFnZSwgc2F2ZUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWwtc3RvcmFnZSc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuXG5jbGFzcyBQcm9qZWN0TWFuYWdlciB7XG4gICNwcm9qZWN0cztcbiAgI2N1cnJQcm9qZWN0O1xuICAjc3RvcmFnZUtleTtcblxuICBjb25zdHJ1Y3RvcihzdG9yYWdlS2V5ID0gJ3Byb2plY3RNYW5hZ2VyJywgLi4ucHJvamVjdHMpIHtcbiAgICB0aGlzLiNzdG9yYWdlS2V5ID0gc3RvcmFnZUtleTtcbiAgICBsZXQgc3RvcmVkRGF0YTtcbiAgICB0cnkge1xuICAgICAgc3RvcmVkRGF0YSA9IGxvYWRMb2NhbFN0b3JhZ2UodGhpcy4jc3RvcmFnZUtleSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgRXJyb3IgbG9hZGluZyBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZSBmb3Iga2V5IFwiJHtcbiAgICAgICAgICB0aGlzLiNzdG9yYWdlS2V5XG4gICAgICAgIH1cIjogJHtlcnJ9YFxuICAgICAgKTtcbiAgICAgIHN0b3JlZERhdGEgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoc3RvcmVkRGF0YSkge1xuICAgICAgaWYgKHN0b3JlZERhdGEucHJvamVjdHMpXG4gICAgICAgIHRoaXMuI3Byb2plY3RzID0gc3RvcmVkRGF0YS5wcm9qZWN0cy5tYXAoKHApID0+IFByb2plY3QuZnJvbUpTT04ocCkpO1xuICAgICAgZWxzZSB0aGlzLiNwcm9qZWN0cyA9IFtdO1xuICAgICAgaWYgKHRoaXMuI3Byb2plY3RzICYmIHN0b3JlZERhdGEuY3VyclByb2plY3RJZCkge1xuICAgICAgICBjb25zdCB0ZW1wUHJvaiA9IHRoaXMuI3Byb2plY3RzLmZpbmQoXG4gICAgICAgICAgKHApID0+IHAuaWQgPT09IHN0b3JlZERhdGEuY3VyclByb2plY3RJZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLiNjdXJyUHJvamVjdCA9IHRlbXBQcm9qIHx8IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiNjdXJyUHJvamVjdCA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI3Byb2plY3RzID1cbiAgICAgICAgcHJvamVjdHMubGVuZ3RoID4gMCA/IHByb2plY3RzLm1hcCgocCkgPT4gbmV3IFByb2plY3QocCkpIDogW107XG4gICAgICB0aGlzLiNjdXJyUHJvamVjdCA9IHRoaXMuI3Byb2plY3RzLmxlbmd0aCA+IDAgPyB0aGlzLiNwcm9qZWN0c1swXSA6IG51bGw7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgcHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3Byb2plY3RzO1xuICB9XG5cbiAgc2V0IGN1cnJQcm9qZWN0KGN1cnJQcm9qKSB7XG4gICAgdGhpcy4jY3VyclByb2plY3QgPVxuICAgICAgdGhpcy4jcHJvamVjdHMuZmluZCgocHJvaikgPT4gcHJvai5pZCA9PT0gY3VyclByb2ouaWQpIHx8IG51bGw7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICBnZXQgY3VyclByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2N1cnJQcm9qZWN0O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHByb2plY3RzSlNPTiA9IHRoaXMuI3Byb2plY3RzLm1hcCgocCkgPT4gcC50b0pTT04oKSk7XG4gICAgY29uc3QgY3VyclByb2plY3RJZCA9IHRoaXMuI2N1cnJQcm9qZWN0ID8gdGhpcy4jY3VyclByb2plY3QuaWQgOiBudWxsO1xuICAgIHJldHVybiB7IHByb2plY3RzOiBwcm9qZWN0c0pTT04sIGN1cnJQcm9qZWN0SWQ6IGN1cnJQcm9qZWN0SWQgfTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgcHJvamVjdE1hbmFnZXIgPSBuZXcgUHJvamVjdE1hbmFnZXIoKTtcbiAgICBpZiAoIWpzb24gfHwgIWpzb24ucHJvamVjdHMpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0TWFuYWdlcjtcbiAgICB9XG4gICAganNvbi5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0SlNPTikgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbUpTT04ocHJvamVjdEpTT04pO1xuICAgICAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIGlmIChqc29uLmN1cnJQcm9qZWN0SWQgPT09IHByb2plY3QuaWQpIHtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2plY3RNYW5hZ2VyO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBzYXZlTG9jYWxTdG9yYWdlKHRoaXMuI3N0b3JhZ2VLZXksIHRoaXMudG9KU09OKCkpO1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICB0aGlzLiNwcm9qZWN0cy5sZW5ndGggPT09IDA7XG4gIH1cblxuICBnZXRQcm9qZWN0KGlkKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBQcm9qZWN0IHdpdGggSUQgJHtpZH0gaXMgbm90IGZvdW5kYCk7XG4gICAgfVxuICAgIGZvciAobGV0IHAgb2YgdGhpcy4jcHJvamVjdHMpIHtcbiAgICAgIGlmIChwLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gcDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICB0aGlzLiNwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLnNhdmUoKTtcbiAgfVxuXG4gIHJlbW92ZVByb2plY3QoaWQpIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFByb2plY3Qgd2l0aCBJRCAke2lkfSBpcyBub3QgZm91bmRgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy4jcHJvamVjdHMgPSB0aGlzLiNwcm9qZWN0cy5maWx0ZXIoKHApID0+IHAuaWQgIT09IGlkKTtcbiAgICBpZiAodGhpcy4jY3VyclByb2plY3QuaWQgPT09IGlkKSB7XG4gICAgICBpZiAoIXRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICAgIHRoaXMuI2N1cnJQcm9qZWN0ID0gdGhpcy4jcHJvamVjdHNbMF07XG4gICAgICB9IGVsc2UgdGhpcy4jY3VyclByb2plY3QgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnNhdmUoKTtcbiAgfVxuXG4gIGFkZFRvZG8odG9kbykge1xuICAgIGlmICh0aGlzLiNjdXJyUHJvamVjdCkge1xuICAgICAgdGhpcy4jY3VyclByb2plY3QuYWRkVG9kbyh0b2RvKTtcbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVRvZG8oaWQpIHtcbiAgICBpZiAodGhpcy4jY3VyclByb2plY3QpIHtcbiAgICAgIHRoaXMuI2N1cnJQcm9qZWN0LnJlbW92ZVRvZG8oaWQpO1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VG9kbyhpZCkge1xuICAgIGlmICh0aGlzLiNjdXJyUHJvamVjdCkgcmV0dXJuIHRoaXMuI2N1cnJQcm9qZWN0LmdldFRvZG8oaWQpO1xuICB9XG5cbiAgZWRpdFRvZG8oaWQsIHRpdGxlLCBkZXNjLCBkYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0LmVkaXRUb2RvKGlkLCB0aXRsZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xuICAgIHRoaXMuc2F2ZSgpO1xuICB9XG5cbiAgdG9nZ2xlQ2hlY2tUb2RvKGlkKSB7XG4gICAgdGhpcy4jY3VyclByb2plY3QudG9nZ2xlQ2hlY2tUb2RvKGlkKTtcbiAgICB0aGlzLnNhdmUoKTtcbiAgfVxuXG4gIGVkaXRQcm9qZWN0KGlkLCBuZXdOYW1lKSB7XG4gICAgdGhpcy5nZXRQcm9qZWN0KGlkKS5uYW1lID0gbmV3TmFtZTtcbiAgICB0aGlzLiNjdXJyUHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdChpZCk7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICBjbGVhckN1cnJlbnRQcm9qZWN0KCkge1xuICAgIGlmICh0aGlzLiNjdXJyUHJvamVjdCkge1xuICAgICAgdGhpcy4jY3VyclByb2plY3QuY2xlYXJBbGxUb2RvcygpO1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoVG9kb0J5VGl0bGUoc2VhcmNoU3RyKSB7XG4gICAgbGV0IG1hdGNoZXMgPSBbXTtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMuI3Byb2plY3RzKSB7XG4gICAgICBmb3IgKGxldCB0b2RvIG9mIHByb2plY3QuYWxsVG9kb3MpIHtcbiAgICAgICAgaWYgKHRvZG8udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hTdHIudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICBsZXQgbWF0Y2ggPSB7IG1hdGNoZWRQcm9qOiBwcm9qZWN0LCBtYXRjaGVkVG9kbzogdG9kbyB9O1xuICAgICAgICAgIG1hdGNoZXMucHVzaChtYXRjaCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBzb3J0QnlBZGREYXRlQXNjKCkge1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0LnNvcnRCeUFkZERhdGVBc2MoKTtcbiAgfVxuXG4gIHNvcnRCeUFkZERhdGVEZXNjKCkge1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0LnNvcnRCeUFkZERhdGVEZXNjKCk7XG4gIH1cblxuICBzb3J0QnlQcmlvcml0eUFzYygpIHtcbiAgICB0aGlzLiNjdXJyUHJvamVjdC5zb3J0QnlQcmlvcml0eUFzYygpO1xuICB9XG5cbiAgc29ydEJ5UHJpb3JpdHlEZXNjKCkge1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0LnNvcnRCeVByaW9yaXR5RGVzYygpO1xuICB9XG5cbiAgc29ydEJ5RGF0ZUFzYygpIHtcbiAgICB0aGlzLiNjdXJyUHJvamVjdC5zb3J0QnlEYXRlQXNjKCk7XG4gIH1cblxuICBzb3J0QnlEYXRlRGVzYygpIHtcbiAgICB0aGlzLiNjdXJyUHJvamVjdC5zb3J0QnlEYXRlRGVzYygpO1xuICB9XG5cbiAgc29ydEJ5VGl0bGVBc2MoKSB7XG4gICAgdGhpcy4jY3VyclByb2plY3Quc29ydEJ5VGl0bGVBc2MoKTtcbiAgfVxuXG4gIHNvcnRCeVRpdGxlRGVzYygpIHtcbiAgICB0aGlzLiNjdXJyUHJvamVjdC5zb3J0QnlUaXRsZURlc2MoKTtcbiAgfVxuXG4gIGNsZWFyQWxsUHJvamVjdHMoKSB7XG4gICAgdGhpcy4jcHJvamVjdHMgPSBbXTtcbiAgICB0aGlzLiNjdXJyUHJvamVjdCA9IG51bGw7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBsZXQgb3V0ID0gJyc7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiB0aGlzLiNwcm9qZWN0cykge1xuICAgICAgb3V0ICs9IHByb2plY3QudG9TdHJpbmcoKSArICdcXG4nO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RNYW5hZ2VyO1xuIiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcblxuY29uc3QgdXVpZCA9IHJlcXVpcmUoJ3V1aWQnKTtcbmNsYXNzIFByb2plY3Qge1xuICBzdGF0aWMgUFJJT1JJVFlfT1JERVIgPSBbJ25vbmUnLCAnIScsICchIScsICchISEnXTtcblxuICAjaWQ7XG4gICNuYW1lO1xuICAjYWxsVG9kb3M7XG5cbiAgY29uc3RydWN0b3IoaWQgPSBudWxsLCBuYW1lID0gJ05ldyBQcm9qZWN0JywgYWxsVG9kb3MgPSBbXSkge1xuICAgIGlmICghaWQpIHRoaXMuI2lkID0gYHByb2plY3QtJHt1dWlkLnY0KCl9YDtcbiAgICBlbHNlIHRoaXMuI2lkID0gaWQ7XG4gICAgdGhpcy4jbmFtZSA9IG5hbWU7XG4gICAgdGhpcy4jYWxsVG9kb3MgPSBbLi4uYWxsVG9kb3NdO1xuICB9XG5cbiAgc2V0IGlkKGlkKSB7XG4gICAgdGhpcy4jaWQgPSBpZDtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaWQ7XG4gIH1cblxuICBzZXQgbmFtZShuYW1lKSB7XG4gICAgdGhpcy4jbmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbmFtZTtcbiAgfVxuXG4gIGdldCB1bmNoZWNrZWRUb2RvcygpIHtcbiAgICByZXR1cm4gdGhpcy4jYWxsVG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmNoZWNrID09PSBmYWxzZSk7XG4gIH1cblxuICBnZXQgY2hlY2tlZFRvZG9zKCkge1xuICAgIHJldHVybiB0aGlzLiNhbGxUb2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uY2hlY2sgPT09IHRydWUpO1xuICB9XG5cbiAgc2V0IGFsbFRvZG9zKHRvZG9zKSB7XG4gICAgdGhpcy4jYWxsVG9kb3MgPSBbLi4udG9kb3NdO1xuICB9XG5cbiAgZ2V0IGFsbFRvZG9zKCkge1xuICAgIHJldHVybiB0aGlzLiNhbGxUb2RvcztcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgdGhpcy4jYWxsVG9kb3MgPT09IDAgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBnZXROdW1Ub2RvKCkge1xuICAgIHRoaXMuI2FsbFRvZG9zLmxlbmd0aDtcbiAgfVxuXG4gIGdldE51bUNoZWNrZWQoKSB7XG4gICAgdGhpcy5jaGVja2VkVG9kb3MubGVuZ3RoO1xuICB9XG5cbiAgZ2V0TnVtVW5jaGVja2VkKCkge1xuICAgIHRoaXMudW5jaGVja2VkVG9kb3MubGVuZ3RoO1xuICB9XG5cbiAgZ2V0VG9kb0J5VGl0bGUodGl0bGUpIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHJldHVybjtcbiAgICBsZXQgbWF0Y2hlcyA9IFtdO1xuICAgIGZvciAobGV0IHRvZG8gb2YgdGhpcy4jYWxsVG9kb3MpIHtcbiAgICAgIGlmICh0b2RvLnRpdGxlID09PSB0aXRsZSkge1xuICAgICAgICBtYXRjaGVzLnB1c2godG9kbyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHJldHVybiBtYXRjaGVzO1xuICAgIGVsc2UgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRUb2RvKGlkKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBUb2RvIHdpdGggSUQgJHtpZH0gY2Fubm90IGJlIGZvdW5kYCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZm9yIChsZXQgdGQgb2YgdGhpcy4jYWxsVG9kb3MpIHtcbiAgICAgIGlmICh0ZC5pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIHRkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGFkZFRvZG8odG9kbykge1xuICAgIHRoaXMuI2FsbFRvZG9zLnB1c2godG9kbyk7XG4gIH1cblxuICByZW1vdmVUb2RvKGlkKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBUb2RvIHdpdGggSUQgJHtpZH0gY2Fubm90IGJlIGZvdW5kYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuI2FsbFRvZG9zID0gdGhpcy4jYWxsVG9kb3MuZmlsdGVyKCh0ZCkgPT4gdGQuaWQgIT09IGlkKTtcbiAgfVxuXG4gIGVkaXRUb2RvKGlkLCBuZXdUaXRsZSwgbmV3RGVzYywgbmV3RGF0ZSwgbmV3UHJpb3JpdHkpIHtcbiAgICB0aGlzLmdldFRvZG8oaWQpLmVkaXQobmV3VGl0bGUsIG5ld0Rlc2MsIG5ld0RhdGUsIG5ld1ByaW9yaXR5KTtcbiAgfVxuXG4gIGNoZWNrVG9kbyhpZCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51bmNoZWNrZWRUb2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGQgPSB0aGlzLnVuY2hlY2tlZFRvZG9zW2ldO1xuICAgICAgaWYgKHRkLmlkID09PSBpZCkge1xuICAgICAgICB0ZC50b2dnbGVDaGVjaygpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1bmNoZWNrVG9kbyhpZCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGVja2VkVG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRkID0gdGhpcy5jaGVja2VkVG9kb3NbaV07XG4gICAgICBpZiAodGQuaWQgPT09IGlkKSB7XG4gICAgICAgIHRkLnRvZ2dsZUNoZWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQ2hlY2tUb2RvKGlkKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm47XG4gICAgY29uc3QgdGQgPSB0aGlzLmdldFRvZG8oaWQpO1xuICAgIGlmICh0ZC5jaGVjaykgdGhpcy51bmNoZWNrVG9kbyhpZCk7XG4gICAgZWxzZSB0aGlzLmNoZWNrVG9kbyhpZCk7XG4gIH1cblxuICBlcXVhbHMocHJvamVjdCkge1xuICAgIHRoaXMuaWQgPT09IHByb2plY3QuaWQ7XG4gIH1cblxuICBjbGVhckFsbFRvZG9zKCkge1xuICAgIHRoaXMuI2FsbFRvZG9zID0gW107XG4gIH1cblxuICBjbGVhckhpc3RvcnkoKSB7XG4gICAgdGhpcy4jYWxsVG9kb3MgPSBbLi4udGhpcy51bmNoZWNrZWRUb2Rvc107XG4gIH1cblxuICBzb3J0QnlBZGREYXRlQXNjKCkge1xuICAgIHRoaXMuI2FsbFRvZG9zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBEYXRlLnBhcnNlKGEuYWRkRGF0ZSkgLSBEYXRlLnBhcnNlKGIuYWRkRGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICBzb3J0QnlBZGREYXRlRGVzYygpIHtcbiAgICB0aGlzLiNhbGxUb2Rvcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gRGF0ZS5wYXJzZShiLmFkZERhdGUpIC0gRGF0ZS5wYXJzZShhLmFkZERhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgc29ydEJ5UHJpb3JpdHlBc2MoKSB7XG4gICAgdGhpcy4jYWxsVG9kb3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgcHJpb3JpdHlBID0gUHJvamVjdC5QUklPUklUWV9PUkRFUi5pbmRleE9mKFxuICAgICAgICBhLnByaW9yaXR5LnRvTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICBjb25zdCBwcmlvcml0eUIgPSBQcm9qZWN0LlBSSU9SSVRZX09SREVSLmluZGV4T2YoXG4gICAgICAgIGIucHJpb3JpdHkudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBwcmlvcml0eUEgLSBwcmlvcml0eUI7XG4gICAgfSk7XG4gIH1cblxuICBzb3J0QnlQcmlvcml0eURlc2MoKSB7XG4gICAgdGhpcy4jYWxsVG9kb3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgcHJpb3JpdHlBID0gUHJvamVjdC5QUklPUklUWV9PUkRFUi5pbmRleE9mKFxuICAgICAgICBhLnByaW9yaXR5LnRvTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICBjb25zdCBwcmlvcml0eUIgPSBQcm9qZWN0LlBSSU9SSVRZX09SREVSLmluZGV4T2YoXG4gICAgICAgIGIucHJpb3JpdHkudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBwcmlvcml0eUIgLSBwcmlvcml0eUE7XG4gICAgfSk7XG4gIH1cblxuICBzb3J0QnlEYXRlQXNjKCkge1xuICAgIHRoaXMuI2FsbFRvZG9zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBEYXRlLnBhcnNlKGEuZGF0ZSkgLSBEYXRlLnBhcnNlKGIuZGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICBzb3J0QnlEYXRlRGVzYygpIHtcbiAgICB0aGlzLiNhbGxUb2Rvcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gRGF0ZS5wYXJzZShiLmRhdGUpIC0gRGF0ZS5wYXJzZShhLmRhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgc29ydEJ5VGl0bGVBc2MoKSB7XG4gICAgdGhpcy4jYWxsVG9kb3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNvcnRCeVRpdGxlRGVzYyA9ICgpID0+IHtcbiAgICB0aGlzLiNhbGxUb2Rvcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYi50aXRsZS5sb2NhbGVDb21wYXJlKGEudGl0bGUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHRvU3RyaW5nKCkge1xuICAgIGxldCBtc2cgPSBgUHJvamVjdCBOYW1lOiAke3RoaXMubmFtZX1cXG5Qcm9qZWN0IElEOiAke3RoaXMuaWR9XFxuYDtcbiAgICBpZiAodGhpcy4jYWxsVG9kb3MubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNhbGxUb2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtc2cgKz0gYFRvLWRvICR7aSArIDF9OlxcbmA7XG4gICAgICAgIG1zZyArPSB0aGlzLiNhbGxUb2Rvc1tpXS50b1N0cmluZygpICsgJ1xcbic7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtc2c7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLiNpZCxcbiAgICAgIGFsbFRvZG9zOiB0aGlzLiNhbGxUb2Rvcy5sZW5ndGhcbiAgICAgICAgPyB0aGlzLiNhbGxUb2Rvcy5tYXAoKHRvZG8pID0+IHRvZG8udG9KU09OKCkpXG4gICAgICAgIDogW10sXG4gICAgICBuYW1lOiB0aGlzLiNuYW1lLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChqc29uLmlkLCBqc29uLm5hbWUpO1xuICAgIHByb2plY3QuI2FsbFRvZG9zID0ganNvbi5hbGxUb2Rvcy5tYXAoKHRvZG9KU09OKSA9PlxuICAgICAgVG9kby5mcm9tSlNPTih0b2RvSlNPTilcbiAgICApO1xuICAgIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJjb25zdCB1dWlkID0gcmVxdWlyZSgndXVpZCcpO1xuXG5leHBvcnQgY29uc3Qgc2V0VGltZVpvbmUgPSAoKSA9PiB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRpbWV6b25lT2Zmc2V0ID0gbm93LmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMDtcbiAgY29uc3QgbG9jYWxUaW1lID0gbmV3IERhdGUobm93LmdldFRpbWUoKSAtIHRpbWV6b25lT2Zmc2V0KTtcbiAgcmV0dXJuIGxvY2FsVGltZS50b0lTT1N0cmluZygpO1xufTtcblxuY2xhc3MgVG9kbyB7XG4gICNpZDtcbiAgI3RpdGxlO1xuICAjZGVzYztcbiAgI2RhdGU7XG4gICNwcmlvcml0eTtcbiAgI2NoZWNrO1xuICAjYWRkRGF0ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBpZCA9IG51bGwsXG4gICAgdGl0bGUgPSAnTmV3IFRvZG8nLFxuICAgIGRlc2MgPSAnTm9uZScsXG4gICAgZGF0ZSA9IHNldFRpbWVab25lKCkuc2xpY2UoMCwgMTApLFxuICAgIHByaW9yaXR5ID0gJ05vbmUnLFxuICAgIGNoZWNrID0gZmFsc2UsXG4gICAgYWRkRGF0ZSA9IHNldFRpbWVab25lKClcbiAgKSB7XG4gICAgaWYgKGlkICE9PSBudWxsKSB0aGlzLiNpZCA9IGlkO1xuICAgIGVsc2UgdGhpcy4jaWQgPSBgdG9kby0ke3V1aWQudjQoKX1gO1xuXG4gICAgaWYgKHRpdGxlICE9PSAnJykgdGhpcy4jdGl0bGUgPSB0aXRsZTtcbiAgICBlbHNlIHRoaXMuI3RpdGxlID0gJ05ldyBUb2RvJztcblxuICAgIGlmIChkZXNjICE9PSAnJykgdGhpcy4jZGVzYyA9IGRlc2M7XG4gICAgZWxzZSB0aGlzLiNkZXNjID0gJ05vbmUnO1xuXG4gICAgdGhpcy4jZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLiNjaGVjayA9IGNoZWNrO1xuICAgIHRoaXMuI2FkZERhdGUgPSBhZGREYXRlO1xuICB9XG5cbiAgc2V0IGlkKGlkKSB7XG4gICAgdGhpcy4jaWQgPSBpZDtcbiAgfVxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lkO1xuICB9XG5cbiAgc2V0IHRpdGxlKHRpdGxlKSB7XG4gICAgdGhpcy4jdGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jdGl0bGU7XG4gIH1cblxuICBzZXQgZGVzYyhkZXNjKSB7XG4gICAgdGhpcy4jZGVzYyA9IGRlc2M7XG4gIH1cblxuICBnZXQgZGVzYygpIHtcbiAgICByZXR1cm4gdGhpcy4jZGVzYztcbiAgfVxuXG4gIHNldCBkYXRlKGRhdGUpIHtcbiAgICB0aGlzLiNkYXRlID0gZGF0ZTtcbiAgfVxuXG4gIGdldCBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLiNkYXRlO1xuICB9XG5cbiAgc2V0IHByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy4jcHJpb3JpdHk7XG4gIH1cblxuICBzZXQgY2hlY2soY2hlY2spIHtcbiAgICB0aGlzLiNjaGVjayA9IGNoZWNrO1xuICB9XG5cbiAgZ2V0IGNoZWNrKCkge1xuICAgIHJldHVybiB0aGlzLiNjaGVjaztcbiAgfVxuXG4gIHNldCBhZGREYXRlKGRhdGUpIHtcbiAgICB0aGlzLiNhZGREYXRlID0gZGF0ZTtcbiAgfVxuXG4gIGdldCBhZGREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLiNhZGREYXRlO1xuICB9XG5cbiAgdG9nZ2xlQ2hlY2soKSB7XG4gICAgdGhpcy4jY2hlY2sgPSAhdGhpcy4jY2hlY2s7XG4gIH1cblxuICBlZGl0KG5ld1RpdGxlLCBuZXdEZXNjLCBuZXdEYXRlLCBuZXdQcmlvcml0eSkge1xuICAgIHRoaXMuI3RpdGxlID0gbmV3VGl0bGU7XG4gICAgdGhpcy4jZGVzYyA9IG5ld0Rlc2M7XG4gICAgdGhpcy4jZGF0ZSA9IG5ld0RhdGU7XG4gICAgdGhpcy4jcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgfVxuXG4gIGVxdWFscyh0b2RvKSB7XG4gICAgdGhpcy4jaWQgPT09IHRvZG8uaWQ7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYElEOiAke3RoaXMuI2lkfVxcbmAgK1xuICAgICAgYFRpdGxlOiAke3RoaXMuI3RpdGxlfVxcbmAgK1xuICAgICAgYERlc2NyaXB0aW9uOiAke3RoaXMuI2Rlc2N9XFxuYCArXG4gICAgICBgRHVlIERhdGU6ICR7dGhpcy4jZGF0ZX1cXG5gICtcbiAgICAgIGBQcmlvcml0eTogJHt0aGlzLiNwcmlvcml0eX1cXG5gICtcbiAgICAgIGBDaGVjazogJHt0aGlzLiNjaGVja31cXG5gXG4gICAgKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuI2lkLFxuICAgICAgdGl0bGU6IHRoaXMuI3RpdGxlLFxuICAgICAgZGVzYzogdGhpcy4jZGVzYyxcbiAgICAgIGRhdGU6IHRoaXMuI2RhdGUsXG4gICAgICBwcmlvcml0eTogdGhpcy4jcHJpb3JpdHksXG4gICAgICBjaGVjazogdGhpcy4jY2hlY2ssXG4gICAgICBhZGREYXRlOiB0aGlzLiNhZGREYXRlLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIHJldHVybiBuZXcgVG9kbyhcbiAgICAgIGpzb24uaWQsXG4gICAgICBqc29uLnRpdGxlLFxuICAgICAganNvbi5kZXNjLFxuICAgICAganNvbi5kYXRlLFxuICAgICAganNvbi5wcmlvcml0eSxcbiAgICAgIGpzb24uY2hlY2ssXG4gICAgICBqc29uLmFkZERhdGVcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=