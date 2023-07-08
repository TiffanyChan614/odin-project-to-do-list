"use strict";
(self["webpackChunkodin_to_do_list"] = self["webpackChunkodin_to_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --white-grey: #ebebeb;\n  --pale-grey: #e3e9eb;\n  --light-grey: #d6d9da;\n  --grey: #b2bec3;\n  --neutral-grey: #a7a7a7;\n  --medium-light-grey: #646a6c;\n  --medium-grey: #444b4d;\n  --dark: #2d3436;\n  --sky-blue: #55a2f0;\n  --light-blue: #3e92e6;\n  --blue: #0984e3;\n  --dark-blue: #006fc4;\n  --pink: #ff4646;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: -apple-system, 'system-ui';\n}\n\nfooter {\n  text-align: center;\n  font-size: 0.8rem;\n}\n\nmain {\n  display: flex;\n  flex: 1;\n  height: 100%;\n}\n\n#sidebar.open #project-btns-container,\n#content > header {\n  height: 3rem;\n}\n\n#sidebar {\n  background-color: var(--blue);\n  height: 100vh;\n  overflow-y: auto;\n}\n\n#sidebar.open {\n  width: 25%;\n  min-width: max-content;\n  max-width: 40rem;\n}\n\n#sidebar.close {\n  width: auto;\n}\n\n#project-btns-container {\n  display: flex;\n  align-items: center;\n  color: white;\n  gap: 0.5rem;\n  background-color: var(--blue);\n}\n\n#sidebar.open #project-btns-container {\n  flex-direction: row;\n  padding: 0 0.2rem;\n  margin: 0 0.7rem 0 0.7rem;\n  border-bottom: 0.1rem solid white;\n}\n\n#sidebar.open header {\n  position: sticky;\n  top: 0;\n  background-color: var(--blue);\n}\n\n#sidebar.close #project-btns-container {\n  flex-direction: column;\n  padding: 1rem 0.5rem;\n}\n\n#sidebar.close #clear-all-projects {\n  display: none;\n}\n\n#project-btns-container button {\n  background-color: inherit;\n  border: none;\n  padding: 0.3rem;\n  border-radius: 5rem;\n  color: white;\n}\n\n#project-btns-container button:hover {\n  background-color: var(--sky-blue);\n}\n\n#sidebar.close #project-btns-container button {\n  width: 100%;\n}\n\n.project.selected,\n.project.selected:hover {\n  background-color: var(--sky-blue);\n}\n\n#project-container {\n  display: none;\n  flex-direction: column;\n  color: white;\n  background-color: var(--blue);\n  padding-bottom: 2rem;\n}\n\n.project-btns {\n  display: flex;\n  gap: 0.2rem;\n}\n\n.project {\n  height: 6vh;\n  min-height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 0.7rem;\n}\n\n.project button {\n  border: none;\n  background-color: inherit;\n  color: white;\n  margin-left: 0.5em;\n}\n\n.project:hover {\n  background-color: var(--light-blue);\n}\n\n.project button:hover {\n  transform: scale(1.1);\n}\n\n#project-form-overlay {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  text-align: center;\n}\n\n#project-form-overlay input {\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  border: 0.1rem solid var(--grey);\n}\n\n#project-form-overlay input::placeholder {\n  color: var(--neutral-grey);\n}\n\n#project-form-btns,\n#todo-form-btns {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n#project-form-btns button,\n#todo-form-btns button {\n  padding: 0.7rem;\n  border: none;\n  border-radius: 0.5rem;\n  color: var(--medium-grey);\n  background-color: var(--white-grey);\n}\n\n#cancel-proj-btn:hover,\n#cancel-todo-btn:hover {\n  background-color: var(--light-grey);\n}\n\n#submit-proj-btn:hover,\n#submit-todo-btn:hover {\n  background-color: var(--blue);\n  color: white;\n}\n\n#todo-form-btns {\n  margin-top: 0.8rem;\n}\n\n#project-form {\n  background-color: white;\n  padding: 2rem;\n  border-radius: 0.5rem;\n  color: var(--medium-grey);\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n  width: 25rem;\n}\n\n#todo-form-overlay {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n  text-align: center;\n}\n\n#todo-form {\n  background-color: white;\n  padding: 2rem;\n  border-radius: 0.5rem;\n  color: var(--medium-grey);\n  display: flex;\n  flex-direction: column;\n  width: 25rem;\n  gap: 1rem;\n}\n\n#todo-form h2 {\n  text-align: center;\n}\n\n#todo-form input,\nselect,\ntextarea {\n  padding: 0.4rem;\n  border-radius: 0.5rem;\n  border: 0.1rem solid var(--grey);\n  font-family: -apple-system, 'system-ui';\n  color: var(--medium-grey);\n}\n\n#todo-form > div:not(:last-of-type) {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  text-align: left;\n  font-size: 0.9rem;\n  color: var(--medium-light-grey);\n}\n\n#todo-form > div label {\n  margin-left: 0.2rem;\n}\n\n#todo-form input::placeholder,\ntextarea::placeholder {\n  color: var(--neutral-grey);\n}\n\n#todo-form #todo-desc {\n  height: 3rem;\n  max-height: 20rem;\n  overflow: auto;\n  resize: vertical;\n  word-wrap: break-word;\n}\n\n#content {\n  color: var(--medium-grey);\n  width: 100%;\n  height: 100vh;\n  overflow-y: auto;\n}\n\n#search-container {\n  position: sticky;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 3rem;\n}\n\n#search-bar {\n  flex-shrink: 0;\n  height: 2rem;\n  width: 66%;\n  border: 0.15rem solid var(--light-grey);\n  border-radius: 1rem;\n  padding: 0 0.5rem;\n  color: var(--medium-grey);\n  margin-top: 1rem;\n}\n\n#dropdown-menu {\n  display: none;\n  width: 50%;\n  border: 0.07rem solid var(--pale-grey);\n  border-radius: 0.5rem;\n  background-color: white;\n  flex-direction: column;\n  position: fixed;\n  top: 3rem;\n}\n\n#dropdown-menu .search-result {\n  margin: 0 0.5rem;\n  color: var(--medium-light-grey);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n\n#dropdown-menu .search-result .matched-project {\n  color: var(--medium-light-grey);\n  font-size: 0.9rem;\n}\n\n#dropdown-menu .search-result .matched-todo.checked {\n  text-decoration: line-through;\n}\n\n#dropdown-menu .search-result:hover {\n  color: var(--medium-grey);\n  font-weight: 450;\n}\n\n#dropdown-menu > .search-result:not(:last-of-type) {\n  border-bottom: 0.07rem solid var(--pale-grey);\n}\n\n#todo-container {\n  padding: 0.2rem 1.2rem 2rem 1.2rem;\n}\n\n#content > header {\n  position: sticky;\n  top: 0;\n  height: max-content;\n  background-color: white;\n  padding: 0 1.5rem;\n}\n\n#todo-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1.5rem 0 1rem;\n}\n\n#todo-container header h1 {\n  font-size: 1.5rem;\n  color: var(--medium-grey);\n  margin-right: 0.5rem;\n}\n\n#todo-main-btns {\n  display: flex;\n  gap: 0.5rem;\n  margin-left: 0.5rem;\n}\n\n#todo-main-btns button {\n  padding: 0.5rem;\n  background-color: var(--light-blue);\n  border: none;\n  border-radius: 0.4rem;\n  color: white;\n}\n\n#todo-main-btns button:hover {\n  background-color: var(--blue);\n  color: white;\n}\n\n#todo-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.todo {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-width: max-content;\n  padding: 0.8rem 1rem;\n  background-color: var(--pale-grey);\n  border-radius: 0.4rem;\n}\n\n.todo:hover {\n  box-shadow: 0 0 0.2rem var(--light-grey);\n}\n\n.todo-upper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.todo-info {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.todo-priority {\n  color: var(--pink);\n  font-weight: bold;\n}\n\n.todo input[type='checkbox'] {\n  appearance: none;\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  background-color: white;\n  border: 0.1rem solid var(--neutral-grey);\n  border-radius: 2rem;\n  cursor: pointer;\n}\n\n.todo input[type='checkbox']:checked {\n  background-color: var(--sky-blue);\n}\n\n.todo-btns {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.todo button {\n  padding: 0.2rem;\n  background-color: var(--pale-grey);\n  border: none;\n  border-radius: 2rem;\n}\n\n.todo-icons {\n  color: var(--medium-grey);\n}\n\n.todo button:hover {\n  transform: scale(1.1);\n}\n\n.todo-details {\n  font-size: 0.9rem;\n  color: var(--medium-light-grey);\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  margin-left: 2rem;\n  white-space: pre;\n}\n\n.todo-lower {\n  display: none;\n}\n\n.todo.checked span {\n  color: var(--medium-light-grey);\n}\n\n.todo.checked .todo-title {\n  text-decoration: line-through;\n}\n\n.todo .todo-title {\n  font-weight: 450;\n}\n\nfooter {\n  padding: 0.2rem;\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n  opacity: 0.8;\n  z-index: 2;\n  background-color: var(--pale-grey);\n  color: var(--dark);\n}\n\n.material-symbols-outlined {\n  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 50;\n}\n\n.material-symbols-outlined .proj-icons {\n  width: 1.5rem;\n}\n\n.material-symbols-outlined .todo-icons {\n  width: 1rem;\n}\n\n#project-form-overlay.flex,\n#todo-form-overlay.flex,\n#project-container.flex,\n#dropdown-menu.flex,\n.todo-lower.flex {\n  display: flex;\n}\n", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --white-grey: #ebebeb;\n  --pale-grey: #e3e9eb;\n  --light-grey: #d6d9da;\n  --grey: #b2bec3;\n  --neutral-grey: #a7a7a7;\n  --medium-light-grey: #646a6c;\n  --medium-grey: #444b4d;\n  --dark: #2d3436;\n  --sky-blue: #55a2f0;\n  --light-blue: #3e92e6;\n  --blue: #0984e3;\n  --dark-blue: #006fc4;\n  --pink: #ff4646;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n  font-family: -apple-system, 'system-ui';\n}\n\nfooter {\n  text-align: center;\n  font-size: 0.8rem;\n}\n\nmain {\n  display: flex;\n  flex: 1;\n  height: 100%;\n}\n\n#sidebar.open #project-btns-container,\n#content > header {\n  height: 3rem;\n}\n\n#sidebar {\n  background-color: var(--blue);\n  height: 100vh;\n  overflow-y: auto;\n}\n\n#sidebar.open {\n  width: 25%;\n  min-width: max-content;\n  max-width: 40rem;\n}\n\n#sidebar.close {\n  width: auto;\n}\n\n#project-btns-container {\n  display: flex;\n  align-items: center;\n  color: white;\n  gap: 0.5rem;\n  background-color: var(--blue);\n}\n\n#sidebar.open #project-btns-container {\n  flex-direction: row;\n  padding: 0 0.2rem;\n  margin: 0 0.7rem 0 0.7rem;\n  border-bottom: 0.1rem solid white;\n}\n\n#sidebar.open header {\n  position: sticky;\n  top: 0;\n  background-color: var(--blue);\n}\n\n#sidebar.close #project-btns-container {\n  flex-direction: column;\n  padding: 1rem 0.5rem;\n}\n\n#sidebar.close #clear-all-projects {\n  display: none;\n}\n\n#project-btns-container button {\n  background-color: inherit;\n  border: none;\n  padding: 0.3rem;\n  border-radius: 5rem;\n  color: white;\n}\n\n#project-btns-container button:hover {\n  background-color: var(--sky-blue);\n}\n\n#sidebar.close #project-btns-container button {\n  width: 100%;\n}\n\n.project.selected,\n.project.selected:hover {\n  background-color: var(--sky-blue);\n}\n\n#project-container {\n  display: none;\n  flex-direction: column;\n  color: white;\n  background-color: var(--blue);\n  padding-bottom: 2rem;\n}\n\n.project-btns {\n  display: flex;\n  gap: 0.2rem;\n}\n\n.project {\n  height: 6vh;\n  min-height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 0.7rem;\n}\n\n.project button {\n  border: none;\n  background-color: inherit;\n  color: white;\n  margin-left: 0.5em;\n}\n\n.project:hover {\n  background-color: var(--light-blue);\n}\n\n.project button:hover {\n  transform: scale(1.1);\n}\n\n#project-form-overlay {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  text-align: center;\n}\n\n#project-form-overlay input {\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  border: 0.1rem solid var(--grey);\n}\n\n#project-form-overlay input::placeholder {\n  color: var(--neutral-grey);\n}\n\n#project-form-btns,\n#todo-form-btns {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n#project-form-btns button,\n#todo-form-btns button {\n  padding: 0.7rem;\n  border: none;\n  border-radius: 0.5rem;\n  color: var(--medium-grey);\n  background-color: var(--white-grey);\n}\n\n#cancel-proj-btn:hover,\n#cancel-todo-btn:hover {\n  background-color: var(--light-grey);\n}\n\n#submit-proj-btn:hover,\n#submit-todo-btn:hover {\n  background-color: var(--blue);\n  color: white;\n}\n\n#todo-form-btns {\n  margin-top: 0.8rem;\n}\n\n#project-form {\n  background-color: white;\n  padding: 2rem;\n  border-radius: 0.5rem;\n  color: var(--medium-grey);\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n  width: 25rem;\n}\n\n#todo-form-overlay {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 1;\n  text-align: center;\n}\n\n#todo-form {\n  background-color: white;\n  padding: 2rem;\n  border-radius: 0.5rem;\n  color: var(--medium-grey);\n  display: flex;\n  flex-direction: column;\n  width: 25rem;\n  gap: 1rem;\n}\n\n#todo-form h2 {\n  text-align: center;\n}\n\n#todo-form input,\nselect,\ntextarea {\n  padding: 0.4rem;\n  border-radius: 0.5rem;\n  border: 0.1rem solid var(--grey);\n  font-family: -apple-system, 'system-ui';\n  color: var(--medium-grey);\n}\n\n#todo-form > div:not(:last-of-type) {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  text-align: left;\n  font-size: 0.9rem;\n  color: var(--medium-light-grey);\n}\n\n#todo-form > div label {\n  margin-left: 0.2rem;\n}\n\n#todo-form input::placeholder,\ntextarea::placeholder {\n  color: var(--neutral-grey);\n}\n\n#todo-form #todo-desc {\n  height: 3rem;\n  max-height: 20rem;\n  overflow: auto;\n  resize: vertical;\n  word-wrap: break-word;\n}\n\n#content {\n  color: var(--medium-grey);\n  width: 100%;\n  height: 100vh;\n  overflow-y: auto;\n}\n\n#search-container {\n  position: sticky;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  height: 3rem;\n}\n\n#search-bar {\n  flex-shrink: 0;\n  height: 2rem;\n  width: 66%;\n  border: 0.15rem solid var(--light-grey);\n  border-radius: 1rem;\n  padding: 0 0.5rem;\n  color: var(--medium-grey);\n  margin-top: 1rem;\n}\n\n#dropdown-menu {\n  display: none;\n  width: 50%;\n  border: 0.07rem solid var(--pale-grey);\n  border-radius: 0.5rem;\n  background-color: white;\n  flex-direction: column;\n  position: fixed;\n  top: 3rem;\n}\n\n#dropdown-menu .search-result {\n  margin: 0 0.5rem;\n  color: var(--medium-light-grey);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n\n#dropdown-menu .search-result .matched-project {\n  color: var(--medium-light-grey);\n  font-size: 0.9rem;\n}\n\n#dropdown-menu .search-result .matched-todo.checked {\n  text-decoration: line-through;\n}\n\n#dropdown-menu .search-result:hover {\n  color: var(--medium-grey);\n  font-weight: 450;\n}\n\n#dropdown-menu > .search-result:not(:last-of-type) {\n  border-bottom: 0.07rem solid var(--pale-grey);\n}\n\n#todo-container {\n  padding: 0.2rem 1.2rem 2rem 1.2rem;\n}\n\n#content > header {\n  position: sticky;\n  top: 0;\n  height: max-content;\n  background-color: white;\n  padding: 0 1.5rem;\n}\n\n#todo-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1.5rem 0 1rem;\n}\n\n#todo-container header h1 {\n  font-size: 1.5rem;\n  color: var(--medium-grey);\n  margin-right: 0.5rem;\n}\n\n#todo-main-btns {\n  display: flex;\n  gap: 0.5rem;\n  margin-left: 0.5rem;\n}\n\n#todo-main-btns button {\n  padding: 0.5rem;\n  background-color: var(--light-blue);\n  border: none;\n  border-radius: 0.4rem;\n  color: white;\n}\n\n#todo-main-btns button:hover {\n  background-color: var(--blue);\n  color: white;\n}\n\n#todo-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.todo {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-width: max-content;\n  padding: 0.8rem 1rem;\n  background-color: var(--pale-grey);\n  border-radius: 0.4rem;\n}\n\n.todo:hover {\n  box-shadow: 0 0 0.2rem var(--light-grey);\n}\n\n.todo-upper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.todo-info {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.todo-priority {\n  color: var(--pink);\n  font-weight: bold;\n}\n\n.todo input[type='checkbox'] {\n  appearance: none;\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  background-color: white;\n  border: 0.1rem solid var(--neutral-grey);\n  border-radius: 2rem;\n  cursor: pointer;\n}\n\n.todo input[type='checkbox']:checked {\n  background-color: var(--sky-blue);\n}\n\n.todo-btns {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.todo button {\n  padding: 0.2rem;\n  background-color: var(--pale-grey);\n  border: none;\n  border-radius: 2rem;\n}\n\n.todo-icons {\n  color: var(--medium-grey);\n}\n\n.todo button:hover {\n  transform: scale(1.1);\n}\n\n.todo-details {\n  font-size: 0.9rem;\n  color: var(--medium-light-grey);\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n  margin-left: 2rem;\n  white-space: pre;\n}\n\n.todo-lower {\n  display: none;\n}\n\n.todo.checked span {\n  color: var(--medium-light-grey);\n}\n\n.todo.checked .todo-title {\n  text-decoration: line-through;\n}\n\n.todo .todo-title {\n  font-weight: 450;\n}\n\nfooter {\n  padding: 0.2rem;\n  position: fixed;\n  bottom: 0;\n  width: 100vw;\n  opacity: 0.8;\n  z-index: 2;\n  background-color: var(--pale-grey);\n  color: var(--dark);\n}\n\n.material-symbols-outlined {\n  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 50;\n}\n\n.material-symbols-outlined .proj-icons {\n  width: 1.5rem;\n}\n\n.material-symbols-outlined .todo-icons {\n  width: 1rem;\n}\n\n#project-form-overlay.flex,\n#todo-form-overlay.flex,\n#project-container.flex,\n#dropdown-menu.flex,\n.todo-lower.flex {\n  display: flex;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_initialPM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/initialPM.js */ "./src/js/services/initialPM.js");
/* harmony import */ var _services_display_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/display-controller */ "./src/js/services/display-controller.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/style.css */ "./src/style/style.css");




_services_display_controller__WEBPACK_IMPORTED_MODULE_1__["default"].refreshTodos(_services_initialPM_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
_services_display_controller__WEBPACK_IMPORTED_MODULE_1__["default"].refreshProjects(_services_initialPM_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
_services_display_controller__WEBPACK_IMPORTED_MODULE_1__["default"].activateUI(_services_initialPM_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/js/models/project.js":
/*!**********************************!*\
  !*** ./src/js/models/project.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/js/models/todo.js");


const uuid = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js");
class Project {
  static PRIORITY_ORDER = ['none', '!', '!!', '!!!'];

  #id;
  #name;
  #allTodos;

  constructor(id = null, name = 'New Project', allTodos = []) {
    if (!id) {
      this.#id = `project-${uuid.v4()}`;
    } else {
      this.#id = id;
    }
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
    return this.#allTodos === 0 ? true : false;
  }

  getNumTodo() {
    return this.#allTodos.length;
  }

  getNumChecked() {
    return this.checkedTodos.length;
  }

  getNumUnchecked() {
    return this.uncheckedTodos.length;
  }

  getTodoByTitle(title) {
    if (this.isEmpty()) {
      return;
    }
    let matches = [];
    for (let todo of this.#allTodos) {
      if (todo.title === title) {
        matches.push(todo);
      }
    }
    if (matches.length > 0) {
      return matches;
    }
    return null;
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
    return this.id === project.id;
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

  getAsString() {
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

/***/ "./src/js/models/todo.js":
/*!*******************************!*\
  !*** ./src/js/models/todo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/utility.js */ "./src/js/services/utility.js");

const uuid = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/commonjs-browser/index.js");

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
    date = (0,_services_utility_js__WEBPACK_IMPORTED_MODULE_0__.setTimeZone)().slice(0, 10),
    priority = 'None',
    check = false,
    addDate = (0,_services_utility_js__WEBPACK_IMPORTED_MODULE_0__.setTimeZone)()
  ) {
    // Always use {} bracket around if else statements. It makes reading code easy and less error prone.
    if (id !== null) {
      this.#id = id;
    } else {
      this.#id = `todo-${uuid.v4()}`;
    }

    if (title !== '') {
      this.#title = title;
    } else {
      this.#title = 'New Todo';
    }

    if (desc !== '') {
      this.#desc = desc;
    } else {
      this.#desc = 'None';
    }

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

  // CR: Not returning anything
  equals(todo) {
    return this.#id === todo.id;
  }

  // CR: toString is Javascript provided, I will try to not override it. Use something like getAsString
  getAsString() {
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

// CR: Either export everything here or export at the start of component. Don't mix both
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./src/js/services/display-controller.js":
/*!***********************************************!*\
  !*** ./src/js/services/display-controller.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-creator */ "./src/js/services/dom-creator.js");
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/todo */ "./src/js/models/todo.js");
/* harmony import */ var _initialPM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialPM */ "./src/js/services/initialPM.js");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/project */ "./src/js/models/project.js");
/* harmony import */ var _services_utility_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utility.js */ "./src/js/services/utility.js");






const projUl = document.querySelector('#project-list')
const todoUl = document.querySelector('#todo-list')
const addProjBtn = document.querySelector('#add-project')
const projFormOverlay = document.querySelector('#project-form-overlay')
const projForm = document.querySelector('#project-form')
const projNameField = document.querySelector('#project-name')
const clearProjBtn = document.querySelector('#clear-all-projects')
const addTodoBtn = document.querySelector('#add-todo')
const clearTodosBtn = document.querySelector('#clear-all-todos')
const todoFormOverlay = document.querySelector('#todo-form-overlay')
const todoForm = document.querySelector('#todo-form')
const todoTitleField = document.querySelector('#todo-title')
const todoDescField = document.querySelector('#todo-desc')
const todoDateField = document.querySelector('#todo-date')
const todoPriorityField = document.querySelector('#todo-priority')
const cancelProjForm = document.querySelector('#cancel-proj-btn')
const cancelTodoForm = document.querySelector('#cancel-todo-btn')
const sidebar = document.querySelector('#sidebar')
const sidebarBtn = document.querySelector('#sidebar-btn')
const projectContainer = document.querySelector('#project-container')
const showCompletedBtn = document.querySelector('#show-completed')
const currProjName = document.querySelector('#current-project-name')
const searchField = document.querySelector('#search-bar')
const dropdownMenu = document.querySelector('#dropdown-menu')
const sortMenu = document.querySelector('#sort-menu')
const sortBtn = document.querySelector('#sort-todo')

const sortFunctions = new Map([
  ['Due Date - New to Old', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByDateAsc()],
  ['Due Date - Old to New', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByDateDesc()],
  ['Priority - Low to High', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByPriorityAsc()],
  ['Priority - High to Low', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByPriorityDesc()],
  ['Title - A to Z', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByTitleAsc()],
  ['Title - Z to A', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByTitleDesc()],
  ['Date Created - Old to New', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByAddDateAsc()],
  ['Date Created - New to Old', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByAddDateDesc()],
])

const EDIT = 0,
  ADD = 1

// projectMode and todoMode are state variables
// I would create a state object to hold all the state variables

let state = {
  projectMode: ADD,
  todoMode: ADD,
  selectedTodo: null,
  projToEdit: null,
  showCompleted: false,
  sortMode: 'Date Created - Oldest First',
}

const clearProjects = () => {
  if (projUl) {
    projUl.textContent = ''
  }
}

const clearTodos = () => {
  if (todoUl) {
    todoUl.textContent = ''
  }
}

const showProjects = () => {
  if (_initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].isEmpty()) {
    currProjName.textContent = ''
    return
  }
  for (const project of _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].projects) {
    projUl.appendChild(_dom_creator__WEBPACK_IMPORTED_MODULE_0__["default"].createProject(project, _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"]))
  }
  if (_initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].currProject) currProjName.textContent = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].currProject.name
}

const showTodos = (todos) => {
  if (!todoUl) return
  for (let todo of todos) {
    todoUl.appendChild(_dom_creator__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo(todo))
  }
}

const refreshProjects = () => {
  clearProjects()
  showProjects()
}

const refreshTodos = () => {
  clearTodos()
  if (_initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].currProject) {
    if (state.showCompleted) showTodos(_initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].currProject.allTodos)
    else showTodos(_initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].currProject.uncheckedTodos)
  }
}

const activateAddProj = () => {
  addProjBtn.addEventListener('click', (e) => {
    if (sidebar.classList.contains('close')) {
      sidebarBtn.click()
    }
    state.projectMode = ADD
    // Usually you would want to use a class to style this.
    // Have a class with display: flex, and add that class to the element
    // That way styling logic is separated from the logic of the program
    projFormOverlay.classList.add('flex')
    projNameField.value = ''
  })
}

const handleProjFormSubmit = () => {
  let projName = projNameField.value
  if (state.projectMode === ADD) {
    if (projName !== '') {
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(new _models_project__WEBPACK_IMPORTED_MODULE_3__["default"](null, projName))
    } else {
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(new _models_project__WEBPACK_IMPORTED_MODULE_3__["default"]())
    }
  } else if (state.projectMode === EDIT) {
    if (state.projToEdit) {
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].editProject(state.projToEdit.id, projName)
      state.projToEdit = null
    }
  }
  projFormOverlay.classList.remove('flex')
  refreshProjects()
  refreshTodos()
}

const activateProjForm = () => {
  projForm.addEventListener('submit', (e) => {
    e.preventDefault()
    handleProjFormSubmit()
  })

  projForm.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      handleProjFormSubmit()
    }
  })
}

const activateCancelProjForm = () => {
  cancelProjForm.addEventListener('click', (e) => {
    e.preventDefault()
    projFormOverlay.classList.remove('flex')
  })
}

const activateProjEvent = () => {
  projUl.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('project') && target.id) {
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].currProject = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(target.id)
      refreshProjects()
      refreshTodos()
    }
  })
}

const activateClearAllProj = () => {
  clearProjBtn.addEventListener('click', (e) => {
    _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].clearAllProjects()
    refreshProjects()
    refreshTodos()
  })
}

const activateClearProj = () => {
  projUl.addEventListener('click', (e) => {
    const target = e.target
    if (
      target.classList.contains('clear-project') ||
      (target.parentNode !== null &&
        target.parentNode.classList.contains('clear-project'))
    ) {
      if (target.classList.contains('clear-project')) {
        _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].removeProject(target.parentNode.parentNode.id)
      } else {
        _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].removeProject(target.parentNode.parentNode.parentNode.id)
      }
      refreshProjects()
      refreshTodos()
    }
  })
}

const activateEditProj = () => {
  projUl.addEventListener('click', (e) => {
    const target = e.target
    if (
      target.classList.contains('edit-project') ||
      (target.parentNode !== null &&
        target.parentNode.classList.contains('edit-project'))
    ) {
      if (target.classList.contains('edit-project')) {
        state.projToEdit = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(target.parentNode.parentNode.id)
      } else {
        state.projToEdit = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(
          target.parentNode.parentNode.parentNode.id
        )
      }
      state.projectMode = EDIT
      projFormOverlay.classList.add('flex')
      let oldName = state.projToEdit.name
      projNameField.value = oldName
    }
  })
}

const showTodoDetail = (todoLi) => {
  todoLi.querySelector('.todo-lower').classList.toggle('flex')
}

const activateTodoEvent = () => {
  todoUl.addEventListener('click', (e) => {
    const target = e.target
    const todo = target.closest('.todo')
    const todoTitle = target.classList.contains('.todo-title')
    const isCheckbox = target.type === 'checkbox'
    const isButton = target.tagName === 'BUTTON'
    const isSVG = target.classList.contains('material-symbols-outlined')

    if ((todo || todoTitle) && !isCheckbox && !isButton && !isSVG) {
      let todoLi = todo || todoTitle.parentNode.parentNode.parentNode
      showTodoDetail(todoLi)
    }
  })
}

const activateCheckTodo = () => {
  todoUl.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('check-todo')) {
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].toggleCheckTodo(target.parentNode.parentNode.parentNode.id)
      refreshTodos()
    }
  })
}

const activateClearTodo = () => {
  todoUl.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('clear-todo')) {
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].removeTodo(target.parentNode.parentNode.parentNode.id)
      refreshTodos()
    } else if (target.parentNode.classList.contains('clear-todo')) {
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].removeTodo(target.parentNode.parentNode.parentNode.parentNode.id)
      refreshTodos()
    }
  })
}

const activateAddTodo = () => {
  addTodoBtn.addEventListener('click', (e) => {
    state.todoMode = ADD
    todoFormOverlay.classList.add('flex')
    todoTitleField.value = ''
    todoDescField.value = ''
    todoDateField.value = (0,_services_utility_js__WEBPACK_IMPORTED_MODULE_4__.setTimeZone)().slice(0, 10)
    todoPriorityField.value = 'None'
  })
}

const activateEditTodo = () => {
  todoUl.addEventListener('click', (e) => {
    const target = e.target
    if (
      target.classList.contains('edit-todo') ||
      target.parentNode.classList.contains('edit-todo')
    ) {
      state.todoMode = EDIT
      todoFormOverlay.classList.add('flex')
      if (target.classList.contains('edit-todo'))
        state.selectedTodo = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getTodo(
          target.parentNode.parentNode.parentNode.id
        )
      else {
        state.selectedTodo = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getTodo(
          target.parentNode.parentNode.parentNode.parentNode.id
        )
      }
      const oldTitle = state.selectedTodo.title
      const oldDesc = state.selectedTodo.desc
      const oldDate = state.selectedTodo.date
      const oldPriority = state.selectedTodo.priority
      todoTitleField.value = oldTitle
      if (oldDesc !== 'None') {
        todoDescField.value = oldDesc
      } else {
        todoDescField.value = ''
      }
      todoDateField.value = oldDate
      todoPriorityField.value = oldPriority
    }
  })
}

const handleTodoFormSubmit = () => {
  let title = todoTitleField.value
  let desc = todoDescField.value
  let date = todoDateField.value
  let priority = todoPriorityField.value
  if (state.todoMode === ADD) {
    let newTodo = new _models_todo__WEBPACK_IMPORTED_MODULE_1__["default"](null, title, desc, date, priority)
    _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].addTodo(newTodo)
  } else if (state.todoMode === EDIT) {
    if (state.selectedTodo) {
      desc = desc === '' ? 'None' : desc
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].editTodo(state.selectedTodo.id, title, desc, date, priority)
      state.selectedTodo = null
    }
  }
  refreshTodos()
  todoFormOverlay.classList.remove('flex')
}

const activateTodoForm = () => {
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    handleTodoFormSubmit()
  })
  todoForm.addEventListener('keydown', (e) => {
    if (!e.shiftKey && e.keyCode === 13) {
      e.preventDefault()
      handleTodoFormSubmit()
    }
  })
}

const activateCancelTodoForm = () => {
  cancelTodoForm.addEventListener('click', (e) => {
    e.preventDefault()
    todoFormOverlay.classList.remove('flex')
  })
}

const activateTodoFormTextbox = () => {
  todoDescField.addEventListener('keydown', function (e) {
    if (e.shiftKey && e.keyCode === 13) {
      const currentVal = this.value
      const cursorPos = this.selectionStart
      const newVal =
        currentVal.substring(0, cursorPos) +
        '\n' +
        currentVal.substring(cursorPos)
      this.value = newVal
      this.selectionStart = this.selectionEnd = cursorPos + 1

      e.preventDefault()
    }
  })
}

const activateClearAllTodos = () => {
  clearTodosBtn.addEventListener('click', (e) => {
    _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].clearCurrentProject()
    refreshTodos()
  })
}

const activateSidebarBtn = () => {
  sidebarBtn.addEventListener('click', (e) => {
    projectContainer.classList.toggle('flex')
    sidebar.classList.toggle('open')
    sidebar.classList.toggle('close')
  })
}

const toggleShowCompletedbtn = () => {
  if (state.showCompleted) {
    showCompletedBtn.textContent = 'Hide Completed'
  } else {
    showCompletedBtn.textContent = 'Show Completed'
  }
}

const activateShowCompleted = () => {
  showCompletedBtn.addEventListener('click', (e) => {
    state.showCompleted = !state.showCompleted
    toggleShowCompletedbtn()
    refreshTodos()
  })
}

const activateSearchBar = () => {
  searchField.addEventListener('input', () => {
    dropdownMenu.textContent = ''
    const searchStr = searchField.value
    if (searchStr) {
      let matches = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].searchTodoByTitle(searchStr)
      if (matches.length !== 0) {
        for (let match of matches) {
          dropdownMenu.appendChild(_dom_creator__WEBPACK_IMPORTED_MODULE_0__["default"].createResultDiv(match))
        }
        dropdownMenu.classList.add('flex')
      } else {
        dropdownMenu.classList.remove('flex')
      }
    } else {
      dropdownMenu.classList.remove('flex')
    }
  })
}

const activateDropdownMenu = () => {
  dropdownMenu.addEventListener('click', (e) => {
    const target = e.target
    if (target.classList.contains('search-result')) {
      let projId = target.value.split(':')[0]
      let todoId = target.value.split(':')[1]
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].currProject = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(projId)
      if (_initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getTodo(todoId).check) {
        state.showCompleted = true
      }
      toggleShowCompletedbtn()
      refreshProjects()
      refreshTodos()
      const todoLi = document.querySelector(`#${todoId}`)
      showTodoDetail(todoLi)
    }
    dropdownMenu.classList.remove('flex')
    searchField.value = ''
  })
}

const hideDropDownMenu = () => {
  document.addEventListener('click', (e) => {
    const target = e.target
    if (
      !target.classList.contains('search-result') &&
      target.id !== 'search-bar' &&
      target.id !== 'dropdown-menu'
    )
      dropdownMenu.classList.remove('flex')
    searchField.value = ''
  })
}

const activateSortMenu = () => {
  sortMenu.addEventListener('change', (e) => {
    state.sortMode = e.target.value
  })
}

const activateSortBtn = () => {
  sortBtn.addEventListener('click', (e) => {
    sortFunctions.get(state.sortMode)()
    refreshTodos()
  })
}

const activateUI = () => {
  activateAddProj()
  activateCancelProjForm()
  activateProjForm()
  activateProjEvent()
  activateClearAllProj()
  activateClearProj()
  activateEditProj()
  activateTodoEvent()
  activateCheckTodo()
  activateClearTodo()
  activateAddTodo()
  activateEditTodo()
  activateTodoForm()
  activateCancelTodoForm()
  activateClearAllTodos()
  activateSidebarBtn()
  activateShowCompleted()
  activateSearchBar()
  activateDropdownMenu()
  hideDropDownMenu()
  activateTodoFormTextbox()
  activateSortMenu()
  activateSortBtn()
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  refreshProjects,
  refreshTodos,
  activateUI,
});


/***/ }),

/***/ "./src/js/services/dom-creator.js":
/*!****************************************!*\
  !*** ./src/js/services/dom-creator.js ***!
  \****************************************/
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

/***/ "./src/js/services/initialPM.js":
/*!**************************************!*\
  !*** ./src/js/services/initialPM.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-manager */ "./src/js/services/project-manager.js");

let pm = new _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"]();
// This could be handled in ProjectManager class
// createProject() will handle create a new project and add it to the project manager
// pm.createProject('To do list');
if (pm.isEmpty()) {
  pm.createProject('New Project');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pm);


/***/ }),

/***/ "./src/js/services/local-storage.js":
/*!******************************************!*\
  !*** ./src/js/services/local-storage.js ***!
  \******************************************/
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

/***/ "./src/js/services/project-manager.js":
/*!********************************************!*\
  !*** ./src/js/services/project-manager.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage */ "./src/js/services/local-storage.js");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/project */ "./src/js/models/project.js");



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
        this.#projects = storedData.projects.map((p) => _models_project__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(p));
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
        projects.length > 0 ? projects.map((p) => new _models_project__WEBPACK_IMPORTED_MODULE_1__["default"](p)) : [];
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
      const project = _models_project__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(projectJSON);
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

  createProject(name) {
    let project = new _models_project__WEBPACK_IMPORTED_MODULE_1__["default"](name);
    this.addProject(project);
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

/***/ "./src/js/services/utility.js":
/*!************************************!*\
  !*** ./src/js/services/utility.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setTimeZone": () => (/* binding */ setTimeZone)
/* harmony export */ });
// CR: This method does not belong to Todo class. It is a utility function. Move it to a separate file
const setTimeZone = () => {
  const now = new Date();
  const timezoneOffset = now.getTimezoneOffset() * 60000;
  const localTime = new Date(now.getTime() - timezoneOffset);
  return localTime.toISOString();
};


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFN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QUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdFQUFnQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsSUFBSSxnRUFBZ0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsSUFBSTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHVEQUFPO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLElBQUk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlOOUI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL3N0eWxlL3N0eWxlLmNzcz9jOWYwIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9tZDUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbmlsLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9wYXJzZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvc2hhMS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92MS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3YzNS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3Y1LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2pzL21vZGVscy9wcm9qZWN0LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9qcy9tb2RlbHMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvanMvc2VydmljZXMvZGlzcGxheS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9qcy9zZXJ2aWNlcy9kb20tY3JlYXRvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvanMvc2VydmljZXMvaW5pdGlhbFBNLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9qcy9zZXJ2aWNlcy9sb2NhbC1zdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9qcy9zZXJ2aWNlcy9wcm9qZWN0LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2pzL3NlcnZpY2VzL3V0aWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXdoaXRlLWdyZXk6ICNlYmViZWI7XFxuICAtLXBhbGUtZ3JleTogI2UzZTllYjtcXG4gIC0tbGlnaHQtZ3JleTogI2Q2ZDlkYTtcXG4gIC0tZ3JleTogI2IyYmVjMztcXG4gIC0tbmV1dHJhbC1ncmV5OiAjYTdhN2E3O1xcbiAgLS1tZWRpdW0tbGlnaHQtZ3JleTogIzY0NmE2YztcXG4gIC0tbWVkaXVtLWdyZXk6ICM0NDRiNGQ7XFxuICAtLWRhcms6ICMyZDM0MzY7XFxuICAtLXNreS1ibHVlOiAjNTVhMmYwO1xcbiAgLS1saWdodC1ibHVlOiAjM2U5MmU2O1xcbiAgLS1ibHVlOiAjMDk4NGUzO1xcbiAgLS1kYXJrLWJsdWU6ICMwMDZmYzQ7XFxuICAtLXBpbms6ICNmZjQ2NDY7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgJ3N5c3RlbS11aSc7XFxufVxcblxcbmZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3NpZGViYXIub3BlbiAjcHJvamVjdC1idG5zLWNvbnRhaW5lcixcXG4jY29udGVudCA+IGhlYWRlciB7XFxuICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbiNzaWRlYmFyLm9wZW4ge1xcbiAgd2lkdGg6IDI1JTtcXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBtYXgtd2lkdGg6IDQwcmVtO1xcbn1cXG5cXG4jc2lkZWJhci5jbG9zZSB7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuI3Byb2plY3QtYnRucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4jc2lkZWJhci5vcGVuICNwcm9qZWN0LWJ0bnMtY29udGFpbmVyIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBwYWRkaW5nOiAwIDAuMnJlbTtcXG4gIG1hcmdpbjogMCAwLjdyZW0gMCAwLjdyZW07XFxuICBib3JkZXItYm90dG9tOiAwLjFyZW0gc29saWQgd2hpdGU7XFxufVxcblxcbiNzaWRlYmFyLm9wZW4gaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuI3NpZGViYXIuY2xvc2UgI3Byb2plY3QtYnRucy1jb250YWluZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xcbn1cXG5cXG4jc2lkZWJhci5jbG9zZSAjY2xlYXItYWxsLXByb2plY3RzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNwcm9qZWN0LWJ0bnMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3Byb2plY3QtYnRucy1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS1ibHVlKTtcXG59XFxuXFxuI3NpZGViYXIuY2xvc2UgI3Byb2plY3QtYnRucy1jb250YWluZXIgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdC5zZWxlY3RlZCxcXG4ucHJvamVjdC5zZWxlY3RlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktYmx1ZSk7XFxufVxcblxcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XFxufVxcblxcbi5wcm9qZWN0LWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC4ycmVtO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBoZWlnaHQ6IDZ2aDtcXG4gIG1pbi1oZWlnaHQ6IDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW07XFxufVxcblxcbi5wcm9qZWN0IGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG59XFxuXFxuLnByb2plY3QgYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1vdmVybGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tb3ZlcmxheSBpbnB1dCB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1ncmV5KTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1vdmVybGF5IGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1ncmV5KTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1idG5zLFxcbiN0b2RvLWZvcm0tYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tYnRucyBidXR0b24sXFxuI3RvZG8tZm9ybS1idG5zIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjdyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtZ3JleSk7XFxufVxcblxcbiNjYW5jZWwtcHJvai1idG46aG92ZXIsXFxuI2NhbmNlbC10b2RvLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG59XFxuXFxuI3N1Ym1pdC1wcm9qLWJ0bjpob3ZlcixcXG4jc3VibWl0LXRvZG8tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdG9kby1mb3JtLWJ0bnMge1xcbiAgbWFyZ2luLXRvcDogMC44cmVtO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyNXJlbTtcXG59XFxuXFxuI3RvZG8tZm9ybS1vdmVybGF5IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHotaW5kZXg6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0b2RvLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jdG9kby1mb3JtIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3RvZG8tZm9ybSBpbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tZ3JleSk7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgJ3N5c3RlbS11aSc7XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbn1cXG5cXG4jdG9kby1mb3JtID4gZGl2Om5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zcmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1saWdodC1ncmV5KTtcXG59XFxuXFxuI3RvZG8tZm9ybSA+IGRpdiBsYWJlbCB7XFxuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xcbn1cXG5cXG4jdG9kby1mb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtZ3JleSk7XFxufVxcblxcbiN0b2RvLWZvcm0gI3RvZG8tZGVzYyB7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBtYXgtaGVpZ2h0OiAyMHJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbiNzZWFyY2gtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMDtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuXFxuI3NlYXJjaC1iYXIge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogNjYlO1xcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbiNkcm9wZG93bi1tZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogNTAlO1xcbiAgYm9yZGVyOiAwLjA3cmVtIHNvbGlkIHZhcigtLXBhbGUtZ3JleSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDNyZW07XFxufVxcblxcbiNkcm9wZG93bi1tZW51IC5zZWFyY2gtcmVzdWx0IHtcXG4gIG1hcmdpbjogMCAwLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWxpZ2h0LWdyZXkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbiNkcm9wZG93bi1tZW51IC5zZWFyY2gtcmVzdWx0IC5tYXRjaGVkLXByb2plY3Qge1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1saWdodC1ncmV5KTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSAuc2VhcmNoLXJlc3VsdCAubWF0Y2hlZC10b2RvLmNoZWNrZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbiNkcm9wZG93bi1tZW51IC5zZWFyY2gtcmVzdWx0OmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBmb250LXdlaWdodDogNDUwO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSA+IC5zZWFyY2gtcmVzdWx0Om5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBib3JkZXItYm90dG9tOiAwLjA3cmVtIHNvbGlkIHZhcigtLXBhbGUtZ3JleSk7XFxufVxcblxcbiN0b2RvLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwLjJyZW0gMS4ycmVtIDJyZW0gMS4ycmVtO1xcbn1cXG5cXG4jY29udGVudCA+IGhlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMCAxLjVyZW07XFxufVxcblxcbiN0b2RvLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMS41cmVtIDAgMXJlbTtcXG59XFxuXFxuI3RvZG8tY29udGFpbmVyIGhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuI3RvZG8tbWFpbi1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxufVxcblxcbiN0b2RvLW1haW4tYnRucyBidXR0b24ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiN0b2RvLW1haW4tYnRucyBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiN0b2RvLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAwLjhyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtZ3JleSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxufVxcblxcbi50b2RvOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjJyZW0gdmFyKC0tbGlnaHQtZ3JleSk7XFxufVxcblxcbi50b2RvLXVwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8taW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvLXByaW9yaXR5IHtcXG4gIGNvbG9yOiB2YXIoLS1waW5rKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udG9kbyBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tbmV1dHJhbC1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvIGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktYmx1ZSk7XFxufVxcblxcbi50b2RvLWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udG9kbyBidXR0b24ge1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ncmV5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxufVxcblxcbi50b2RvLWljb25zIHtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxufVxcblxcbi50b2RvIGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi50b2RvLWRldGFpbHMge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWxpZ2h0LWdyZXkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuM3JlbTtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG59XFxuXFxuLnRvZG8tbG93ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8uY2hlY2tlZCBzcGFuIHtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxufVxcblxcbi50b2RvLmNoZWNrZWQgLnRvZG8tdGl0bGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50b2RvIC50b2RvLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA0NTA7XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBvcGFjaXR5OiAwLjg7XFxuICB6LWluZGV4OiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ncmV5KTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICdGSUxMJyAwLCAnd2dodCcgMjAwLCAnR1JBRCcgMCwgJ29wc3onIDUwO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCAucHJvai1pY29ucyB7XFxuICB3aWR0aDogMS41cmVtO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCAudG9kby1pY29ucyB7XFxuICB3aWR0aDogMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1vdmVybGF5LmZsZXgsXFxuI3RvZG8tZm9ybS1vdmVybGF5LmZsZXgsXFxuI3Byb2plY3QtY29udGFpbmVyLmZsZXgsXFxuI2Ryb3Bkb3duLW1lbnUuZmxleCxcXG4udG9kby1sb3dlci5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BC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LGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtFQUNWLGtDQUFrQztFQUNsQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrRUFBa0U7QUFDcEU7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7Ozs7O0VBS0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0td2hpdGUtZ3JleTogI2ViZWJlYjtcXG4gIC0tcGFsZS1ncmV5OiAjZTNlOWViO1xcbiAgLS1saWdodC1ncmV5OiAjZDZkOWRhO1xcbiAgLS1ncmV5OiAjYjJiZWMzO1xcbiAgLS1uZXV0cmFsLWdyZXk6ICNhN2E3YTc7XFxuICAtLW1lZGl1bS1saWdodC1ncmV5OiAjNjQ2YTZjO1xcbiAgLS1tZWRpdW0tZ3JleTogIzQ0NGI0ZDtcXG4gIC0tZGFyazogIzJkMzQzNjtcXG4gIC0tc2t5LWJsdWU6ICM1NWEyZjA7XFxuICAtLWxpZ2h0LWJsdWU6ICMzZTkyZTY7XFxuICAtLWJsdWU6ICMwOTg0ZTM7XFxuICAtLWRhcmstYmx1ZTogIzAwNmZjNDtcXG4gIC0tcGluazogI2ZmNDY0NjtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCAnc3lzdGVtLXVpJztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhci5vcGVuICNwcm9qZWN0LWJ0bnMtY29udGFpbmVyLFxcbiNjb250ZW50ID4gaGVhZGVyIHtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI3NpZGViYXIub3BlbiB7XFxuICB3aWR0aDogMjUlO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIG1heC13aWR0aDogNDByZW07XFxufVxcblxcbiNzaWRlYmFyLmNsb3NlIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdC1idG5zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbiNzaWRlYmFyLm9wZW4gI3Byb2plY3QtYnRucy1jb250YWluZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHBhZGRpbmc6IDAgMC4ycmVtO1xcbiAgbWFyZ2luOiAwIDAuN3JlbSAwIDAuN3JlbTtcXG4gIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI3NpZGViYXIub3BlbiBoZWFkZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4jc2lkZWJhci5jbG9zZSAjcHJvamVjdC1idG5zLWNvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxufVxcblxcbiNzaWRlYmFyLmNsb3NlICNjbGVhci1hbGwtcHJvamVjdHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Byb2plY3QtYnRucy1jb250YWluZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jcHJvamVjdC1idG5zLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LWJsdWUpO1xcbn1cXG5cXG4jc2lkZWJhci5jbG9zZSAjcHJvamVjdC1idG5zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LnNlbGVjdGVkLFxcbi5wcm9qZWN0LnNlbGVjdGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS1ibHVlKTtcXG59XFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGhlaWdodDogNnZoO1xcbiAgbWluLWhlaWdodDogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtIDAuN3JlbTtcXG59XFxuXFxuLnByb2plY3QgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbn1cXG5cXG4ucHJvamVjdCBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLW92ZXJsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1vdmVybGF5IGlucHV0IHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLWdyZXkpO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLW92ZXJsYXkgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWdyZXkpO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWJ0bnMsXFxuI3RvZG8tZm9ybS1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1idG5zIGJ1dHRvbixcXG4jdG9kby1mb3JtLWJ0bnMgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1ncmV5KTtcXG59XFxuXFxuI2NhbmNlbC1wcm9qLWJ0bjpob3ZlcixcXG4jY2FuY2VsLXRvZG8tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4jc3VibWl0LXByb2otYnRuOmhvdmVyLFxcbiNzdWJtaXQtdG9kby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiN0b2RvLWZvcm0tYnRucyB7XFxuICBtYXJnaW4tdG9wOiAwLjhyZW07XFxufVxcblxcbiNwcm9qZWN0LWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDI1cmVtO1xcbn1cXG5cXG4jdG9kby1mb3JtLW92ZXJsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgei1pbmRleDogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3RvZG8tZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjVyZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiN0b2RvLWZvcm0gaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdG9kby1mb3JtIGlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCAnc3lzdGVtLXVpJztcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxufVxcblxcbiN0b2RvLWZvcm0gPiBkaXY6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjNyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4jdG9kby1mb3JtID4gZGl2IGxhYmVsIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjJyZW07XFxufVxcblxcbiN0b2RvLWZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1ncmV5KTtcXG59XFxuXFxuI3RvZG8tZm9ybSAjdG9kby1kZXNjIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIG1heC1oZWlnaHQ6IDIwcmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI3NlYXJjaC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4jc2VhcmNoLWJhciB7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiA2NiU7XFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiA1MCU7XFxuICBib3JkZXI6IDAuMDdyZW0gc29saWQgdmFyKC0tcGFsZS1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogM3JlbTtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgLnNlYXJjaC1yZXN1bHQge1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgLnNlYXJjaC1yZXN1bHQgLm1hdGNoZWQtcHJvamVjdCB7XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWxpZ2h0LWdyZXkpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbiNkcm9wZG93bi1tZW51IC5zZWFyY2gtcmVzdWx0IC5tYXRjaGVkLXRvZG8uY2hlY2tlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgLnNlYXJjaC1yZXN1bHQ6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIGZvbnQtd2VpZ2h0OiA0NTA7XFxufVxcblxcbiNkcm9wZG93bi1tZW51ID4gLnNlYXJjaC1yZXN1bHQ6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1ib3R0b206IDAuMDdyZW0gc29saWQgdmFyKC0tcGFsZS1ncmV5KTtcXG59XFxuXFxuI3RvZG8tY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAuMnJlbSAxLjJyZW0gMnJlbSAxLjJyZW07XFxufVxcblxcbiNjb250ZW50ID4gaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG59XFxuXFxuI3RvZG8taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxLjVyZW0gMCAxcmVtO1xcbn1cXG5cXG4jdG9kby1jb250YWluZXIgaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4jdG9kby1tYWluLWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuI3RvZG8tbWFpbi1idG5zIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3RvZG8tbWFpbi1idG5zIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3RvZG8tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDAuMnJlbSB2YXIoLS1saWdodC1ncmV5KTtcXG59XFxuXFxuLnRvZG8tdXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHkge1xcbiAgY29sb3I6IHZhcigtLXBpbmspO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50b2RvIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1uZXV0cmFsLWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS1ibHVlKTtcXG59XFxuXFxuLnRvZG8tYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWdyZXkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuLnRvZG8taWNvbnMge1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG59XFxuXFxuLnRvZG8gYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnRvZG8tZGV0YWlscyB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbn1cXG5cXG4udG9kby1sb3dlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby5jaGVja2VkIHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1saWdodC1ncmV5KTtcXG59XFxuXFxuLnRvZG8uY2hlY2tlZCAudG9kby10aXRsZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8gLnRvZG8tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWdyZXkpO1xcbiAgY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ0ZJTEwnIDAsICd3Z2h0JyAyMDAsICdHUkFEJyAwLCAnb3BzeicgNTA7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIC5wcm9qLWljb25zIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIC50b2RvLWljb25zIHtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLW92ZXJsYXkuZmxleCxcXG4jdG9kby1mb3JtLW92ZXJsYXkuZmxleCxcXG4jcHJvamVjdC1jb250YWluZXIuZmxleCxcXG4jZHJvcGRvd24tbWVudS5mbGV4LFxcbi50b2RvLWxvd2VyLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOSUxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX25pbC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInBhcnNlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9wYXJzZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0cmluZ2lmeVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidjFcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3YuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2M1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjIuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2NVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdjQuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2YWxpZGF0ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdmFsaWRhdGUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2ZXJzaW9uXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92ZXJzaW9uLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YxLmpzXCIpKTtcblxudmFyIF92MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjMuanNcIikpO1xuXG52YXIgX3YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92NC5qc1wiKSk7XG5cbnZhciBfdjQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y1LmpzXCIpKTtcblxudmFyIF9uaWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL25pbC5qc1wiKSk7XG5cbnZhciBfdmVyc2lvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmVyc2lvbi5qc1wiKSk7XG5cbnZhciBfdmFsaWRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3ZhbGlkYXRlLmpzXCIpKTtcblxudmFyIF9zdHJpbmdpZnkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKSk7XG5cbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuLypcbiAqIEJyb3dzZXItY29tcGF0aWJsZSBKYXZhU2NyaXB0IE1ENVxuICpcbiAqIE1vZGlmaWNhdGlvbiBvZiBKYXZhU2NyaXB0IE1ENVxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvSmF2YVNjcmlwdC1NRDVcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSwgU2ViYXN0aWFuIFRzY2hhblxuICogaHR0cHM6Ly9ibHVlaW1wLm5ldFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZTpcbiAqIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQmFzZWQgb25cbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMiBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDlcbiAqIE90aGVyIGNvbnRyaWJ1dG9yczogR3JlZyBIb2x0LCBBbmRyZXcgS2VwZXJ0LCBZZG5hciwgTG9zdGluZXRcbiAqIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSBCU0QgTGljZW5zZVxuICogU2VlIGh0dHA6Ly9wYWpob21lLm9yZy51ay9jcnlwdC9tZDUgZm9yIG1vcmUgaW5mby5cbiAqL1xuZnVuY3Rpb24gbWQ1KGJ5dGVzKSB7XG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KG1zZy5sZW5ndGgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzW2ldID0gbXNnLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1kNVRvSGV4RW5jb2RlZEFycmF5KHdvcmRzVG9NZDUoYnl0ZXNUb1dvcmRzKGJ5dGVzKSwgYnl0ZXMubGVuZ3RoICogOCkpO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcyB0byBhbiBhcnJheSBvZiBieXRlc1xuICovXG5cblxuZnVuY3Rpb24gbWQ1VG9IZXhFbmNvZGVkQXJyYXkoaW5wdXQpIHtcbiAgY29uc3Qgb3V0cHV0ID0gW107XG4gIGNvbnN0IGxlbmd0aDMyID0gaW5wdXQubGVuZ3RoICogMzI7XG4gIGNvbnN0IGhleFRhYiA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDMyOyBpICs9IDgpIHtcbiAgICBjb25zdCB4ID0gaW5wdXRbaSA+PiA1XSA+Pj4gaSAlIDMyICYgMHhmZjtcbiAgICBjb25zdCBoZXggPSBwYXJzZUludChoZXhUYWIuY2hhckF0KHggPj4+IDQgJiAweDBmKSArIGhleFRhYi5jaGFyQXQoeCAmIDB4MGYpLCAxNik7XG4gICAgb3V0cHV0LnB1c2goaGV4KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSBvdXRwdXQgbGVuZ3RoIHdpdGggcGFkZGluZyBhbmQgYml0IGxlbmd0aFxuICovXG5cblxuZnVuY3Rpb24gZ2V0T3V0cHV0TGVuZ3RoKGlucHV0TGVuZ3RoOCkge1xuICByZXR1cm4gKGlucHV0TGVuZ3RoOCArIDY0ID4+PiA5IDw8IDQpICsgMTQgKyAxO1xufVxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGguXG4gKi9cblxuXG5mdW5jdGlvbiB3b3Jkc1RvTWQ1KHgsIGxlbikge1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8IGxlbiAlIDMyO1xuICB4W2dldE91dHB1dExlbmd0aChsZW4pIC0gMV0gPSBsZW47XG4gIGxldCBhID0gMTczMjU4NDE5MztcbiAgbGV0IGIgPSAtMjcxNzMzODc5O1xuICBsZXQgYyA9IC0xNzMyNTg0MTk0O1xuICBsZXQgZCA9IDI3MTczMzg3ODtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgY29uc3Qgb2xkYSA9IGE7XG4gICAgY29uc3Qgb2xkYiA9IGI7XG4gICAgY29uc3Qgb2xkYyA9IGM7XG4gICAgY29uc3Qgb2xkZCA9IGQ7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaV0sIDcsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTcsIDYwNjEwNTgxOSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDNdLCAyMiwgLTEwNDQ1MjUzMzApO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNywgLTE3NjQxODg5Nyk7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDVdLCAxMiwgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA3LCAxNzcwMDM1NDE2KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgOV0sIDEyLCAtMTk1ODQxNDQxNyk7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTcsIC00MjA2Myk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA3LCAxODA0NjAzNjgyKTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTRdLCAxNywgLTE1MDIwMDIyOTApO1xuICAgIGIgPSBtZDVmZihiLCBjLCBkLCBhLCB4W2kgKyAxNV0sIDIyLCAxMjM2NTM1MzI5KTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMV0sIDUsIC0xNjU3OTY1MTApO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyA2XSwgOSwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE0LCA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2ldLCAyMCwgLTM3Mzg5NzMwMik7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA1LCAtNzAxNTU4NjkxKTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTBdLCA5LCAzODAxNjA4Myk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTQsIC02NjA0NzgzMzUpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyA0XSwgMjAsIC00MDU1Mzc4NDgpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyA5XSwgNSwgNTY4NDQ2NDM4KTtcbiAgICBkID0gbWQ1Z2coZCwgYSwgYiwgYywgeFtpICsgMTRdLCA5LCAtMTAxOTgwMzY5MCk7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDNdLCAxNCwgLTE4NzM2Mzk2MSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDhdLCAyMCwgMTE2MzUzMTUwMSk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNSwgLTE0NDQ2ODE0NjcpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAyXSwgOSwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgN10sIDE0LCAxNzM1MzI4NDczKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyA1XSwgNCwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaSArIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAxMV0sIDE2LCAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTRdLCAyMywgLTM1MzA5NTU2KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgMV0sIDQsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgNF0sIDExLCAxMjcyODkzMzUzKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgN10sIDE2LCAtMTU1NDk3NjMyKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxM10sIDQsIDY4MTI3OTE3NCk7XG4gICAgZCA9IG1kNWhoKGQsIGEsIGIsIGMsIHhbaV0sIDExLCAtMzU4NTM3MjIyKTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgM10sIDE2LCAtNzIyNTIxOTc5KTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgNl0sIDIzLCA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDldLCA0LCAtNjQwMzY0NDg3KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDE1XSwgMTYsIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNWhoKGIsIGMsIGQsIGEsIHhbaSArIDJdLCAyMywgLTk5NTMzODY1MSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaV0sIDYsIC0xOTg2MzA4NDQpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyA3XSwgMTAsIDExMjY4OTE0MTUpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE1LCAtMTQxNjM1NDkwNSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDVdLCAyMSwgLTU3NDM0MDU1KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgMTJdLCA2LCAxNzAwNDg1NTcxKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgM10sIDEwLCAtMTg5NDk4NjYwNik7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDEwXSwgMTUsIC0xMDUxNTIzKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMV0sIDIxLCAtMjA1NDkyMjc5OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDhdLCA2LCAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTVdLCAxMCwgLTMwNjExNzQ0KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE1LCAtMTU2MDE5ODM4MCk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDEzXSwgMjEsIDEzMDkxNTE2NDkpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyA0XSwgNiwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDExXSwgMTAsIC0xMTIwMjEwMzc5KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMl0sIDE1LCA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuICAgIGEgPSBzYWZlQWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlQWRkKGIsIG9sZGIpO1xuICAgIGMgPSBzYWZlQWRkKGMsIG9sZGMpO1xuICAgIGQgPSBzYWZlQWRkKGQsIG9sZGQpO1xuICB9XG5cbiAgcmV0dXJuIFthLCBiLCBjLCBkXTtcbn1cbi8qXG4gKiBDb252ZXJ0IGFuIGFycmF5IGJ5dGVzIHRvIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHNcbiAqIENoYXJhY3RlcnMgPjI1NSBoYXZlIHRoZWlyIGhpZ2gtYnl0ZSBzaWxlbnRseSBpZ25vcmVkLlxuICovXG5cblxuZnVuY3Rpb24gYnl0ZXNUb1dvcmRzKGlucHV0KSB7XG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBsZW5ndGg4ID0gaW5wdXQubGVuZ3RoICogODtcbiAgY29uc3Qgb3V0cHV0ID0gbmV3IFVpbnQzMkFycmF5KGdldE91dHB1dExlbmd0aChsZW5ndGg4KSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg4OyBpICs9IDgpIHtcbiAgICBvdXRwdXRbaSA+PiA1XSB8PSAoaW5wdXRbaSAvIDhdICYgMHhmZikgPDwgaSAlIDMyO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qXG4gKiBBZGQgaW50ZWdlcnMsIHdyYXBwaW5nIGF0IDJeMzIuIFRoaXMgdXNlcyAxNi1iaXQgb3BlcmF0aW9ucyBpbnRlcm5hbGx5XG4gKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gc2FmZUFkZCh4LCB5KSB7XG4gIGNvbnN0IGxzdyA9ICh4ICYgMHhmZmZmKSArICh5ICYgMHhmZmZmKTtcbiAgY29uc3QgbXN3ID0gKHggPj4gMTYpICsgKHkgPj4gMTYpICsgKGxzdyA+PiAxNik7XG4gIHJldHVybiBtc3cgPDwgMTYgfCBsc3cgJiAweGZmZmY7XG59XG4vKlxuICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICovXG5cblxuZnVuY3Rpb24gYml0Um90YXRlTGVmdChudW0sIGNudCkge1xuICByZXR1cm4gbnVtIDw8IGNudCB8IG51bSA+Pj4gMzIgLSBjbnQ7XG59XG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1kNWNtbihxLCBhLCBiLCB4LCBzLCB0KSB7XG4gIHJldHVybiBzYWZlQWRkKGJpdFJvdGF0ZUxlZnQoc2FmZUFkZChzYWZlQWRkKGEsIHEpLCBzYWZlQWRkKHgsIHQpKSwgcyksIGIpO1xufVxuXG5mdW5jdGlvbiBtZDVmZihhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGMgfCB+YiAmIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVnZyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiAmIGQgfCBjICYgfmQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVoaChhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYiBeIGMgXiBkLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxuZnVuY3Rpb24gbWQ1aWkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuICByZXR1cm4gbWQ1Y21uKGMgXiAoYiB8IH5kKSwgYSwgYiwgeCwgcywgdCk7XG59XG5cbnZhciBfZGVmYXVsdCA9IG1kNTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbnZhciBfZGVmYXVsdCA9IHtcbiAgcmFuZG9tVVVJRFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0gJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCc7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBwYXJzZSh1dWlkKSB7XG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBVVUlEJyk7XG4gIH1cblxuICBsZXQgdjtcbiAgY29uc3QgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBQYXJzZSAjIyMjIyMjIy0uLi4uLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMCwgOCksIDE2KSkgPj4+IDI0O1xuICBhcnJbMV0gPSB2ID4+PiAxNiAmIDB4ZmY7XG4gIGFyclsyXSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbM10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tIyMjIy0uLi4uLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzRdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDksIDEzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzVdID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tIyMjIy0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFycls2XSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgxNCwgMTgpLCAxNikpID4+PiA4O1xuICBhcnJbN10gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0uLi4uLSMjIyMtLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzhdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE5LCAyMyksIDE2KSkgPj4+IDg7XG4gIGFycls5XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tLi4uLi0jIyMjIyMjIyMjIyNcbiAgLy8gKFVzZSBcIi9cIiB0byBhdm9pZCAzMi1iaXQgdHJ1bmNhdGlvbiB3aGVuIGJpdC1zaGlmdGluZyBoaWdoLW9yZGVyIGJ5dGVzKVxuXG4gIGFyclsxMF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMjQsIDM2KSwgMTYpKSAvIDB4MTAwMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTFdID0gdiAvIDB4MTAwMDAwMDAwICYgMHhmZjtcbiAgYXJyWzEyXSA9IHYgPj4+IDI0ICYgMHhmZjtcbiAgYXJyWzEzXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzE0XSA9IHYgPj4+IDggJiAweGZmO1xuICBhcnJbMTVdID0gdiAmIDB4ZmY7XG4gIHJldHVybiBhcnI7XG59XG5cbnZhciBfZGVmYXVsdCA9IHBhcnNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJuZztcbi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuXG5mdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuLy8gQWRhcHRlZCBmcm9tIENocmlzIFZlbmVzcycgU0hBMSBjb2RlIGF0XG4vLyBodHRwOi8vd3d3Lm1vdmFibGUtdHlwZS5jby51ay9zY3JpcHRzL3NoYTEuaHRtbFxuZnVuY3Rpb24gZihzLCB4LCB5LCB6KSB7XG4gIHN3aXRjaCAocykge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiB4ICYgeSBeIH54ICYgejtcblxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiB4IF4geSBeIHo7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4geCAmIHkgXiB4ICYgeiBeIHkgJiB6O1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcbiAgfVxufVxuXG5mdW5jdGlvbiBST1RMKHgsIG4pIHtcbiAgcmV0dXJuIHggPDwgbiB8IHggPj4+IDMyIC0gbjtcbn1cblxuZnVuY3Rpb24gc2hhMShieXRlcykge1xuICBjb25zdCBLID0gWzB4NWE4Mjc5OTksIDB4NmVkOWViYTEsIDB4OGYxYmJjZGMsIDB4Y2E2MmMxZDZdO1xuICBjb25zdCBIID0gWzB4Njc0NTIzMDEsIDB4ZWZjZGFiODksIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsIDB4YzNkMmUxZjBdO1xuXG4gIGlmICh0eXBlb2YgYnl0ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgbXNnID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGJ5dGVzKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgICBieXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtc2cubGVuZ3RoOyArK2kpIHtcbiAgICAgIGJ5dGVzLnB1c2gobXNnLmNoYXJDb2RlQXQoaSkpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheShieXRlcykpIHtcbiAgICAvLyBDb252ZXJ0IEFycmF5LWxpa2UgdG8gQXJyYXlcbiAgICBieXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGJ5dGVzKTtcbiAgfVxuXG4gIGJ5dGVzLnB1c2goMHg4MCk7XG4gIGNvbnN0IGwgPSBieXRlcy5sZW5ndGggLyA0ICsgMjtcbiAgY29uc3QgTiA9IE1hdGguY2VpbChsIC8gMTYpO1xuICBjb25zdCBNID0gbmV3IEFycmF5KE4pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgKytpKSB7XG4gICAgY29uc3QgYXJyID0gbmV3IFVpbnQzMkFycmF5KDE2KTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgYXJyW2pdID0gYnl0ZXNbaSAqIDY0ICsgaiAqIDRdIDw8IDI0IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAxXSA8PCAxNiB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgMl0gPDwgOCB8IGJ5dGVzW2kgKiA2NCArIGogKiA0ICsgM107XG4gICAgfVxuXG4gICAgTVtpXSA9IGFycjtcbiAgfVxuXG4gIE1bTiAtIDFdWzE0XSA9IChieXRlcy5sZW5ndGggLSAxKSAqIDggLyBNYXRoLnBvdygyLCAzMik7XG4gIE1bTiAtIDFdWzE0XSA9IE1hdGguZmxvb3IoTVtOIC0gMV1bMTRdKTtcbiAgTVtOIC0gMV1bMTVdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAmIDB4ZmZmZmZmZmY7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICBjb25zdCBXID0gbmV3IFVpbnQzMkFycmF5KDgwKTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgMTY7ICsrdCkge1xuICAgICAgV1t0XSA9IE1baV1bdF07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgdCA9IDE2OyB0IDwgODA7ICsrdCkge1xuICAgICAgV1t0XSA9IFJPVEwoV1t0IC0gM10gXiBXW3QgLSA4XSBeIFdbdCAtIDE0XSBeIFdbdCAtIDE2XSwgMSk7XG4gICAgfVxuXG4gICAgbGV0IGEgPSBIWzBdO1xuICAgIGxldCBiID0gSFsxXTtcbiAgICBsZXQgYyA9IEhbMl07XG4gICAgbGV0IGQgPSBIWzNdO1xuICAgIGxldCBlID0gSFs0XTtcblxuICAgIGZvciAobGV0IHQgPSAwOyB0IDwgODA7ICsrdCkge1xuICAgICAgY29uc3QgcyA9IE1hdGguZmxvb3IodCAvIDIwKTtcbiAgICAgIGNvbnN0IFQgPSBST1RMKGEsIDUpICsgZihzLCBiLCBjLCBkKSArIGUgKyBLW3NdICsgV1t0XSA+Pj4gMDtcbiAgICAgIGUgPSBkO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gUk9UTChiLCAzMCkgPj4+IDA7XG4gICAgICBiID0gYTtcbiAgICAgIGEgPSBUO1xuICAgIH1cblxuICAgIEhbMF0gPSBIWzBdICsgYSA+Pj4gMDtcbiAgICBIWzFdID0gSFsxXSArIGIgPj4+IDA7XG4gICAgSFsyXSA9IEhbMl0gKyBjID4+PiAwO1xuICAgIEhbM10gPSBIWzNdICsgZCA+Pj4gMDtcbiAgICBIWzRdID0gSFs0XSArIGUgPj4+IDA7XG4gIH1cblxuICByZXR1cm4gW0hbMF0gPj4gMjQgJiAweGZmLCBIWzBdID4+IDE2ICYgMHhmZiwgSFswXSA+PiA4ICYgMHhmZiwgSFswXSAmIDB4ZmYsIEhbMV0gPj4gMjQgJiAweGZmLCBIWzFdID4+IDE2ICYgMHhmZiwgSFsxXSA+PiA4ICYgMHhmZiwgSFsxXSAmIDB4ZmYsIEhbMl0gPj4gMjQgJiAweGZmLCBIWzJdID4+IDE2ICYgMHhmZiwgSFsyXSA+PiA4ICYgMHhmZiwgSFsyXSAmIDB4ZmYsIEhbM10gPj4gMjQgJiAweGZmLCBIWzNdID4+IDE2ICYgMHhmZiwgSFszXSA+PiA4ICYgMHhmZiwgSFszXSAmIDB4ZmYsIEhbNF0gPj4gMjQgJiAweGZmLCBIWzRdID4+IDE2ICYgMHhmZiwgSFs0XSA+PiA4ICYgMHhmZiwgSFs0XSAmIDB4ZmZdO1xufVxuXG52YXIgX2RlZmF1bHQgPSBzaGExO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5leHBvcnRzLnVuc2FmZVN0cmluZ2lmeSA9IHVuc2FmZVN0cmluZ2lmeTtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbnZhciBfZGVmYXVsdCA9IHN0cmluZ2lmeTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JuZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm5nLmpzXCIpKTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbi8vXG4vLyBJbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vTGlvc0svVVVJRC5qc1xuLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcbmxldCBfbm9kZUlkO1xuXG5sZXQgX2Nsb2Nrc2VxOyAvLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcblxuXG5sZXQgX2xhc3RNU2VjcyA9IDA7XG5sZXQgX2xhc3ROU2VjcyA9IDA7IC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQgZm9yIEFQSSBkZXRhaWxzXG5cbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGxldCBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICBjb25zdCBiID0gYnVmIHx8IG5ldyBBcnJheSgxNik7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsZXQgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICBsZXQgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxOyAvLyBub2RlIGFuZCBjbG9ja3NlcSBuZWVkIHRvIGJlIGluaXRpYWxpemVkIHRvIHJhbmRvbSB2YWx1ZXMgaWYgdGhleSdyZSBub3RcbiAgLy8gc3BlY2lmaWVkLiAgV2UgZG8gdGhpcyBsYXppbHkgdG8gbWluaW1pemUgaXNzdWVzIHJlbGF0ZWQgdG8gaW5zdWZmaWNpZW50XG4gIC8vIHN5c3RlbSBlbnRyb3B5LiAgU2VlICMxODlcblxuICBpZiAobm9kZSA9PSBudWxsIHx8IGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICBjb25zdCBzZWVkQnl0ZXMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgX3JuZy5kZWZhdWx0KSgpO1xuXG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG4gICAgICBub2RlID0gX25vZGVJZCA9IFtzZWVkQnl0ZXNbMF0gfCAweDAxLCBzZWVkQnl0ZXNbMV0sIHNlZWRCeXRlc1syXSwgc2VlZEJ5dGVzWzNdLCBzZWVkQnl0ZXNbNF0sIHNlZWRCeXRlc1s1XV07XG4gICAgfVxuXG4gICAgaWYgKGNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gICAgICBjbG9ja3NlcSA9IF9jbG9ja3NlcSA9IChzZWVkQnl0ZXNbNl0gPDwgOCB8IHNlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG4gICAgfVxuICB9IC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuXG5cbiAgbGV0IG1zZWNzID0gb3B0aW9ucy5tc2VjcyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5tc2VjcyA6IERhdGUubm93KCk7IC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgLy8gY3ljbGUgdG8gc2ltdWxhdGUgaGlnaGVyIHJlc29sdXRpb24gY2xvY2tcblxuICBsZXQgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7IC8vIFRpbWUgc2luY2UgbGFzdCB1dWlkIGNyZWF0aW9uIChpbiBtc2VjcylcblxuICBjb25zdCBkdCA9IG1zZWNzIC0gX2xhc3RNU2VjcyArIChuc2VjcyAtIF9sYXN0TlNlY3MpIC8gMTAwMDA7IC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cblxuICBpZiAoZHQgPCAwICYmIG9wdGlvbnMuY2xvY2tzZXEgPT09IHVuZGVmaW5lZCkge1xuICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICB9IC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcblxuXG4gIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbnNlY3MgPSAwO1xuICB9IC8vIFBlciA0LjIuMS4yIFRocm93IGVycm9yIGlmIHRvbyBtYW55IHV1aWRzIGFyZSByZXF1ZXN0ZWRcblxuXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInV1aWQudjEoKTogQ2FuJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjXCIpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxOyAvLyBQZXIgNC4xLjQgLSBDb252ZXJ0IGZyb20gdW5peCBlcG9jaCB0byBHcmVnb3JpYW4gZXBvY2hcblxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDsgLy8gYHRpbWVfbG93YFxuXG4gIGNvbnN0IHRsID0gKChtc2VjcyAmIDB4ZmZmZmZmZikgKiAxMDAwMCArIG5zZWNzKSAlIDB4MTAwMDAwMDAwO1xuICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gMTYgJiAweGZmO1xuICBiW2krK10gPSB0bCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsICYgMHhmZjsgLy8gYHRpbWVfbWlkYFxuXG4gIGNvbnN0IHRtaCA9IG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCAmIDB4ZmZmZmZmZjtcbiAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdG1oICYgMHhmZjsgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcblxuICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG5cbiAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7IC8vIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYCAoUGVyIDQuMi4yIC0gaW5jbHVkZSB2YXJpYW50KVxuXG4gIGJbaSsrXSA9IGNsb2Nrc2VxID4+PiA4IHwgMHg4MDsgLy8gYGNsb2NrX3NlcV9sb3dgXG5cbiAgYltpKytdID0gY2xvY2tzZXEgJiAweGZmOyAvLyBgbm9kZWBcblxuICBmb3IgKGxldCBuID0gMDsgbiA8IDY7ICsrbikge1xuICAgIGJbaSArIG5dID0gbm9kZVtuXTtcbiAgfVxuXG4gIHJldHVybiBidWYgfHwgKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShiKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdjE7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MzUuanNcIikpO1xuXG52YXIgX21kID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tZDUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCB2MyA9ICgwLCBfdi5kZWZhdWx0KSgndjMnLCAweDMwLCBfbWQuZGVmYXVsdCk7XG52YXIgX2RlZmF1bHQgPSB2MztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5VUkwgPSBleHBvcnRzLkROUyA9IHZvaWQgMDtcbmV4cG9ydHMuZGVmYXVsdCA9IHYzNTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5cbnZhciBfcGFyc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BhcnNlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc3RyaW5nVG9CeXRlcyhzdHIpIHtcbiAgc3RyID0gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHN0cikpOyAvLyBVVEY4IGVzY2FwZVxuXG4gIGNvbnN0IGJ5dGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBieXRlcy5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpKTtcbiAgfVxuXG4gIHJldHVybiBieXRlcztcbn1cblxuY29uc3QgRE5TID0gJzZiYTdiODEwLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnRzLkROUyA9IEROUztcbmNvbnN0IFVSTCA9ICc2YmE3YjgxMS05ZGFkLTExZDEtODBiNC0wMGMwNGZkNDMwYzgnO1xuZXhwb3J0cy5VUkwgPSBVUkw7XG5cbmZ1bmN0aW9uIHYzNShuYW1lLCB2ZXJzaW9uLCBoYXNoZnVuYykge1xuICBmdW5jdGlvbiBnZW5lcmF0ZVVVSUQodmFsdWUsIG5hbWVzcGFjZSwgYnVmLCBvZmZzZXQpIHtcbiAgICB2YXIgX25hbWVzcGFjZTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IHN0cmluZ1RvQnl0ZXModmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJykge1xuICAgICAgbmFtZXNwYWNlID0gKDAsIF9wYXJzZS5kZWZhdWx0KShuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGlmICgoKF9uYW1lc3BhY2UgPSBuYW1lc3BhY2UpID09PSBudWxsIHx8IF9uYW1lc3BhY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9uYW1lc3BhY2UubGVuZ3RoKSAhPT0gMTYpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignTmFtZXNwYWNlIG11c3QgYmUgYXJyYXktbGlrZSAoMTYgaXRlcmFibGUgaW50ZWdlciB2YWx1ZXMsIDAtMjU1KScpO1xuICAgIH0gLy8gQ29tcHV0ZSBoYXNoIG9mIG5hbWVzcGFjZSBhbmQgdmFsdWUsIFBlciA0LjNcbiAgICAvLyBGdXR1cmU6IFVzZSBzcHJlYWQgc3ludGF4IHdoZW4gc3VwcG9ydGVkIG9uIGFsbCBwbGF0Zm9ybXMsIGUuZy4gYGJ5dGVzID1cbiAgICAvLyBoYXNoZnVuYyhbLi4ubmFtZXNwYWNlLCAuLi4gdmFsdWVdKWBcblxuXG4gICAgbGV0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTYgKyB2YWx1ZS5sZW5ndGgpO1xuICAgIGJ5dGVzLnNldChuYW1lc3BhY2UpO1xuICAgIGJ5dGVzLnNldCh2YWx1ZSwgbmFtZXNwYWNlLmxlbmd0aCk7XG4gICAgYnl0ZXMgPSBoYXNoZnVuYyhieXRlcyk7XG4gICAgYnl0ZXNbNl0gPSBieXRlc1s2XSAmIDB4MGYgfCB2ZXJzaW9uO1xuICAgIGJ5dGVzWzhdID0gYnl0ZXNbOF0gJiAweDNmIHwgMHg4MDtcblxuICAgIGlmIChidWYpIHtcbiAgICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgYnVmW29mZnNldCArIGldID0gYnl0ZXNbaV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidWY7XG4gICAgfVxuXG4gICAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkoYnl0ZXMpO1xuICB9IC8vIEZ1bmN0aW9uI25hbWUgaXMgbm90IHNldHRhYmxlIG9uIHNvbWUgcGxhdGZvcm1zICgjMjcwKVxuXG5cbiAgdHJ5IHtcbiAgICBnZW5lcmF0ZVVVSUQubmFtZSA9IG5hbWU7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICB9IGNhdGNoIChlcnIpIHt9IC8vIEZvciBDb21tb25KUyBkZWZhdWx0IGV4cG9ydCBzdXBwb3J0XG5cblxuICBnZW5lcmF0ZVVVSUQuRE5TID0gRE5TO1xuICBnZW5lcmF0ZVVVSUQuVVJMID0gVVJMO1xuICByZXR1cm4gZ2VuZXJhdGVVVUlEO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX25hdGl2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbmF0aXZlLmpzXCIpKTtcblxudmFyIF9ybmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JuZy5qc1wiKSk7XG5cbnZhciBfc3RyaW5naWZ5ID0gcmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAoX25hdGl2ZS5kZWZhdWx0LnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBfbmF0aXZlLmRlZmF1bHQucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nLmRlZmF1bHQpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfc3RyaW5naWZ5LnVuc2FmZVN0cmluZ2lmeSkocm5kcyk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHY0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjM1LmpzXCIpKTtcblxudmFyIF9zaGEgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NoYTEuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5jb25zdCB2NSA9ICgwLCBfdi5kZWZhdWx0KSgndjUnLCAweDUwLCBfc2hhLmRlZmF1bHQpO1xudmFyIF9kZWZhdWx0ID0gdjU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWdleCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVnZXguanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgX3JlZ2V4LmRlZmF1bHQudGVzdCh1dWlkKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdmFsaWRhdGU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2ZXJzaW9uKHV1aWQpIHtcbiAgaWYgKCEoMCwgX3ZhbGlkYXRlLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxNSksIDE2KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdmVyc2lvbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsImltcG9ydCBwbSBmcm9tICcuL3NlcnZpY2VzL2luaXRpYWxQTS5qcyc7XG5pbXBvcnQgZGlzcGxheUNvbnRyb2xsZXIgZnJvbSAnLi9zZXJ2aWNlcy9kaXNwbGF5LWNvbnRyb2xsZXInO1xuaW1wb3J0ICcuLi9zdHlsZS9zdHlsZS5jc3MnO1xuXG5kaXNwbGF5Q29udHJvbGxlci5yZWZyZXNoVG9kb3MocG0pO1xuZGlzcGxheUNvbnRyb2xsZXIucmVmcmVzaFByb2plY3RzKHBtKTtcbmRpc3BsYXlDb250cm9sbGVyLmFjdGl2YXRlVUkocG0pO1xuIiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcblxuY29uc3QgdXVpZCA9IHJlcXVpcmUoJ3V1aWQnKTtcbmNsYXNzIFByb2plY3Qge1xuICBzdGF0aWMgUFJJT1JJVFlfT1JERVIgPSBbJ25vbmUnLCAnIScsICchIScsICchISEnXTtcblxuICAjaWQ7XG4gICNuYW1lO1xuICAjYWxsVG9kb3M7XG5cbiAgY29uc3RydWN0b3IoaWQgPSBudWxsLCBuYW1lID0gJ05ldyBQcm9qZWN0JywgYWxsVG9kb3MgPSBbXSkge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHRoaXMuI2lkID0gYHByb2plY3QtJHt1dWlkLnY0KCl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jaWQgPSBpZDtcbiAgICB9XG4gICAgdGhpcy4jbmFtZSA9IG5hbWU7XG4gICAgdGhpcy4jYWxsVG9kb3MgPSBbLi4uYWxsVG9kb3NdO1xuICB9XG5cbiAgc2V0IGlkKGlkKSB7XG4gICAgdGhpcy4jaWQgPSBpZDtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaWQ7XG4gIH1cblxuICBzZXQgbmFtZShuYW1lKSB7XG4gICAgdGhpcy4jbmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbmFtZTtcbiAgfVxuXG4gIGdldCB1bmNoZWNrZWRUb2RvcygpIHtcbiAgICByZXR1cm4gdGhpcy4jYWxsVG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmNoZWNrID09PSBmYWxzZSk7XG4gIH1cblxuICBnZXQgY2hlY2tlZFRvZG9zKCkge1xuICAgIHJldHVybiB0aGlzLiNhbGxUb2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uY2hlY2sgPT09IHRydWUpO1xuICB9XG5cbiAgc2V0IGFsbFRvZG9zKHRvZG9zKSB7XG4gICAgdGhpcy4jYWxsVG9kb3MgPSBbLi4udG9kb3NdO1xuICB9XG5cbiAgZ2V0IGFsbFRvZG9zKCkge1xuICAgIHJldHVybiB0aGlzLiNhbGxUb2RvcztcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FsbFRvZG9zID09PSAwID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0TnVtVG9kbygpIHtcbiAgICByZXR1cm4gdGhpcy4jYWxsVG9kb3MubGVuZ3RoO1xuICB9XG5cbiAgZ2V0TnVtQ2hlY2tlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja2VkVG9kb3MubGVuZ3RoO1xuICB9XG5cbiAgZ2V0TnVtVW5jaGVja2VkKCkge1xuICAgIHJldHVybiB0aGlzLnVuY2hlY2tlZFRvZG9zLmxlbmd0aDtcbiAgfVxuXG4gIGdldFRvZG9CeVRpdGxlKHRpdGxlKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBtYXRjaGVzID0gW107XG4gICAgZm9yIChsZXQgdG9kbyBvZiB0aGlzLiNhbGxUb2Rvcykge1xuICAgICAgaWYgKHRvZG8udGl0bGUgPT09IHRpdGxlKSB7XG4gICAgICAgIG1hdGNoZXMucHVzaCh0b2RvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIG1hdGNoZXM7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0VG9kbyhpZCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgY29uc29sZS5lcnJvcihgVG9kbyB3aXRoIElEICR7aWR9IGNhbm5vdCBiZSBmb3VuZGApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGZvciAobGV0IHRkIG9mIHRoaXMuI2FsbFRvZG9zKSB7XG4gICAgICBpZiAodGQuaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiB0ZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBhZGRUb2RvKHRvZG8pIHtcbiAgICB0aGlzLiNhbGxUb2Rvcy5wdXNoKHRvZG8pO1xuICB9XG5cbiAgcmVtb3ZlVG9kbyhpZCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgY29uc29sZS5lcnJvcihgVG9kbyB3aXRoIElEICR7aWR9IGNhbm5vdCBiZSBmb3VuZGApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLiNhbGxUb2RvcyA9IHRoaXMuI2FsbFRvZG9zLmZpbHRlcigodGQpID0+IHRkLmlkICE9PSBpZCk7XG4gIH1cblxuICBlZGl0VG9kbyhpZCwgbmV3VGl0bGUsIG5ld0Rlc2MsIG5ld0RhdGUsIG5ld1ByaW9yaXR5KSB7XG4gICAgdGhpcy5nZXRUb2RvKGlkKS5lZGl0KG5ld1RpdGxlLCBuZXdEZXNjLCBuZXdEYXRlLCBuZXdQcmlvcml0eSk7XG4gIH1cblxuICBjaGVja1RvZG8oaWQpIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHJldHVybjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudW5jaGVja2VkVG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRkID0gdGhpcy51bmNoZWNrZWRUb2Rvc1tpXTtcbiAgICAgIGlmICh0ZC5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGQudG9nZ2xlQ2hlY2soKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdW5jaGVja1RvZG8oaWQpIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHJldHVybjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hlY2tlZFRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0ZCA9IHRoaXMuY2hlY2tlZFRvZG9zW2ldO1xuICAgICAgaWYgKHRkLmlkID09PSBpZCkge1xuICAgICAgICB0ZC50b2dnbGVDaGVjaygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUNoZWNrVG9kbyhpZCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuO1xuICAgIGNvbnN0IHRkID0gdGhpcy5nZXRUb2RvKGlkKTtcbiAgICBpZiAodGQuY2hlY2spIHRoaXMudW5jaGVja1RvZG8oaWQpO1xuICAgIGVsc2UgdGhpcy5jaGVja1RvZG8oaWQpO1xuICB9XG5cbiAgZXF1YWxzKHByb2plY3QpIHtcbiAgICByZXR1cm4gdGhpcy5pZCA9PT0gcHJvamVjdC5pZDtcbiAgfVxuXG4gIGNsZWFyQWxsVG9kb3MoKSB7XG4gICAgdGhpcy4jYWxsVG9kb3MgPSBbXTtcbiAgfVxuXG4gIGNsZWFySGlzdG9yeSgpIHtcbiAgICB0aGlzLiNhbGxUb2RvcyA9IFsuLi50aGlzLnVuY2hlY2tlZFRvZG9zXTtcbiAgfVxuXG4gIHNvcnRCeUFkZERhdGVBc2MoKSB7XG4gICAgdGhpcy4jYWxsVG9kb3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIERhdGUucGFyc2UoYS5hZGREYXRlKSAtIERhdGUucGFyc2UoYi5hZGREYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNvcnRCeUFkZERhdGVEZXNjKCkge1xuICAgIHRoaXMuI2FsbFRvZG9zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBEYXRlLnBhcnNlKGIuYWRkRGF0ZSkgLSBEYXRlLnBhcnNlKGEuYWRkRGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICBzb3J0QnlQcmlvcml0eUFzYygpIHtcbiAgICB0aGlzLiNhbGxUb2Rvcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBwcmlvcml0eUEgPSBQcm9qZWN0LlBSSU9SSVRZX09SREVSLmluZGV4T2YoXG4gICAgICAgIGEucHJpb3JpdHkudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5QiA9IFByb2plY3QuUFJJT1JJVFlfT1JERVIuaW5kZXhPZihcbiAgICAgICAgYi5wcmlvcml0eS50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHByaW9yaXR5QSAtIHByaW9yaXR5QjtcbiAgICB9KTtcbiAgfVxuXG4gIHNvcnRCeVByaW9yaXR5RGVzYygpIHtcbiAgICB0aGlzLiNhbGxUb2Rvcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBwcmlvcml0eUEgPSBQcm9qZWN0LlBSSU9SSVRZX09SREVSLmluZGV4T2YoXG4gICAgICAgIGEucHJpb3JpdHkudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5QiA9IFByb2plY3QuUFJJT1JJVFlfT1JERVIuaW5kZXhPZihcbiAgICAgICAgYi5wcmlvcml0eS50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuICAgICAgcmV0dXJuIHByaW9yaXR5QiAtIHByaW9yaXR5QTtcbiAgICB9KTtcbiAgfVxuXG4gIHNvcnRCeURhdGVBc2MoKSB7XG4gICAgdGhpcy4jYWxsVG9kb3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIERhdGUucGFyc2UoYS5kYXRlKSAtIERhdGUucGFyc2UoYi5kYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNvcnRCeURhdGVEZXNjKCkge1xuICAgIHRoaXMuI2FsbFRvZG9zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBEYXRlLnBhcnNlKGIuZGF0ZSkgLSBEYXRlLnBhcnNlKGEuZGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICBzb3J0QnlUaXRsZUFzYygpIHtcbiAgICB0aGlzLiNhbGxUb2Rvcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS50aXRsZS5sb2NhbGVDb21wYXJlKGIudGl0bGUpO1xuICAgIH0pO1xuICB9XG5cbiAgc29ydEJ5VGl0bGVEZXNjID0gKCkgPT4ge1xuICAgIHRoaXMuI2FsbFRvZG9zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBiLnRpdGxlLmxvY2FsZUNvbXBhcmUoYS50aXRsZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0QXNTdHJpbmcoKSB7XG4gICAgbGV0IG1zZyA9IGBQcm9qZWN0IE5hbWU6ICR7dGhpcy5uYW1lfVxcblByb2plY3QgSUQ6ICR7dGhpcy5pZH1cXG5gO1xuICAgIGlmICh0aGlzLiNhbGxUb2Rvcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI2FsbFRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1zZyArPSBgVG8tZG8gJHtpICsgMX06XFxuYDtcbiAgICAgICAgbXNnICs9IHRoaXMuI2FsbFRvZG9zW2ldLnRvU3RyaW5nKCkgKyAnXFxuJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1zZztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuI2lkLFxuICAgICAgYWxsVG9kb3M6IHRoaXMuI2FsbFRvZG9zLmxlbmd0aFxuICAgICAgICA/IHRoaXMuI2FsbFRvZG9zLm1hcCgodG9kbykgPT4gdG9kby50b0pTT04oKSlcbiAgICAgICAgOiBbXSxcbiAgICAgIG5hbWU6IHRoaXMuI25hbWUsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGpzb24uaWQsIGpzb24ubmFtZSk7XG4gICAgcHJvamVjdC4jYWxsVG9kb3MgPSBqc29uLmFsbFRvZG9zLm1hcCgodG9kb0pTT04pID0+XG4gICAgICBUb2RvLmZyb21KU09OKHRvZG9KU09OKVxuICAgICk7XG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImltcG9ydCB7IHNldFRpbWVab25lIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbGl0eS5qcyc7XG5jb25zdCB1dWlkID0gcmVxdWlyZSgndXVpZCcpO1xuXG5jbGFzcyBUb2RvIHtcbiAgI2lkO1xuICAjdGl0bGU7XG4gICNkZXNjO1xuICAjZGF0ZTtcbiAgI3ByaW9yaXR5O1xuICAjY2hlY2s7XG4gICNhZGREYXRlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGlkID0gbnVsbCxcbiAgICB0aXRsZSA9ICdOZXcgVG9kbycsXG4gICAgZGVzYyA9ICdOb25lJyxcbiAgICBkYXRlID0gc2V0VGltZVpvbmUoKS5zbGljZSgwLCAxMCksXG4gICAgcHJpb3JpdHkgPSAnTm9uZScsXG4gICAgY2hlY2sgPSBmYWxzZSxcbiAgICBhZGREYXRlID0gc2V0VGltZVpvbmUoKVxuICApIHtcbiAgICAvLyBBbHdheXMgdXNlIHt9IGJyYWNrZXQgYXJvdW5kIGlmIGVsc2Ugc3RhdGVtZW50cy4gSXQgbWFrZXMgcmVhZGluZyBjb2RlIGVhc3kgYW5kIGxlc3MgZXJyb3IgcHJvbmUuXG4gICAgaWYgKGlkICE9PSBudWxsKSB7XG4gICAgICB0aGlzLiNpZCA9IGlkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNpZCA9IGB0b2RvLSR7dXVpZC52NCgpfWA7XG4gICAgfVxuXG4gICAgaWYgKHRpdGxlICE9PSAnJykge1xuICAgICAgdGhpcy4jdGl0bGUgPSB0aXRsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jdGl0bGUgPSAnTmV3IFRvZG8nO1xuICAgIH1cblxuICAgIGlmIChkZXNjICE9PSAnJykge1xuICAgICAgdGhpcy4jZGVzYyA9IGRlc2M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2Rlc2MgPSAnTm9uZSc7XG4gICAgfVxuXG4gICAgdGhpcy4jZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLiNjaGVjayA9IGNoZWNrO1xuICAgIHRoaXMuI2FkZERhdGUgPSBhZGREYXRlO1xuICB9XG5cbiAgc2V0IGlkKGlkKSB7XG4gICAgdGhpcy4jaWQgPSBpZDtcbiAgfVxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lkO1xuICB9XG5cbiAgc2V0IHRpdGxlKHRpdGxlKSB7XG4gICAgdGhpcy4jdGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIGdldCB0aXRsZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jdGl0bGU7XG4gIH1cblxuICBzZXQgZGVzYyhkZXNjKSB7XG4gICAgdGhpcy4jZGVzYyA9IGRlc2M7XG4gIH1cblxuICBnZXQgZGVzYygpIHtcbiAgICByZXR1cm4gdGhpcy4jZGVzYztcbiAgfVxuXG4gIHNldCBkYXRlKGRhdGUpIHtcbiAgICB0aGlzLiNkYXRlID0gZGF0ZTtcbiAgfVxuXG4gIGdldCBkYXRlKCkge1xuICAgIHJldHVybiB0aGlzLiNkYXRlO1xuICB9XG5cbiAgc2V0IHByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy4jcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgfVxuXG4gIGdldCBwcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy4jcHJpb3JpdHk7XG4gIH1cblxuICBzZXQgY2hlY2soY2hlY2spIHtcbiAgICB0aGlzLiNjaGVjayA9IGNoZWNrO1xuICB9XG5cbiAgZ2V0IGNoZWNrKCkge1xuICAgIHJldHVybiB0aGlzLiNjaGVjaztcbiAgfVxuXG4gIHNldCBhZGREYXRlKGRhdGUpIHtcbiAgICB0aGlzLiNhZGREYXRlID0gZGF0ZTtcbiAgfVxuXG4gIGdldCBhZGREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLiNhZGREYXRlO1xuICB9XG5cbiAgdG9nZ2xlQ2hlY2soKSB7XG4gICAgdGhpcy4jY2hlY2sgPSAhdGhpcy4jY2hlY2s7XG4gIH1cblxuICBlZGl0KG5ld1RpdGxlLCBuZXdEZXNjLCBuZXdEYXRlLCBuZXdQcmlvcml0eSkge1xuICAgIHRoaXMuI3RpdGxlID0gbmV3VGl0bGU7XG4gICAgdGhpcy4jZGVzYyA9IG5ld0Rlc2M7XG4gICAgdGhpcy4jZGF0ZSA9IG5ld0RhdGU7XG4gICAgdGhpcy4jcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgfVxuXG4gIC8vIENSOiBOb3QgcmV0dXJuaW5nIGFueXRoaW5nXG4gIGVxdWFscyh0b2RvKSB7XG4gICAgcmV0dXJuIHRoaXMuI2lkID09PSB0b2RvLmlkO1xuICB9XG5cbiAgLy8gQ1I6IHRvU3RyaW5nIGlzIEphdmFzY3JpcHQgcHJvdmlkZWQsIEkgd2lsbCB0cnkgdG8gbm90IG92ZXJyaWRlIGl0LiBVc2Ugc29tZXRoaW5nIGxpa2UgZ2V0QXNTdHJpbmdcbiAgZ2V0QXNTdHJpbmcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGBJRDogJHt0aGlzLiNpZH1cXG5gICtcbiAgICAgIGBUaXRsZTogJHt0aGlzLiN0aXRsZX1cXG5gICtcbiAgICAgIGBEZXNjcmlwdGlvbjogJHt0aGlzLiNkZXNjfVxcbmAgK1xuICAgICAgYER1ZSBEYXRlOiAke3RoaXMuI2RhdGV9XFxuYCArXG4gICAgICBgUHJpb3JpdHk6ICR7dGhpcy4jcHJpb3JpdHl9XFxuYCArXG4gICAgICBgQ2hlY2s6ICR7dGhpcy4jY2hlY2t9XFxuYFxuICAgICk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLiNpZCxcbiAgICAgIHRpdGxlOiB0aGlzLiN0aXRsZSxcbiAgICAgIGRlc2M6IHRoaXMuI2Rlc2MsXG4gICAgICBkYXRlOiB0aGlzLiNkYXRlLFxuICAgICAgcHJpb3JpdHk6IHRoaXMuI3ByaW9yaXR5LFxuICAgICAgY2hlY2s6IHRoaXMuI2NoZWNrLFxuICAgICAgYWRkRGF0ZTogdGhpcy4jYWRkRGF0ZSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICByZXR1cm4gbmV3IFRvZG8oXG4gICAgICBqc29uLmlkLFxuICAgICAganNvbi50aXRsZSxcbiAgICAgIGpzb24uZGVzYyxcbiAgICAgIGpzb24uZGF0ZSxcbiAgICAgIGpzb24ucHJpb3JpdHksXG4gICAgICBqc29uLmNoZWNrLFxuICAgICAganNvbi5hZGREYXRlXG4gICAgKTtcbiAgfVxufVxuXG4vLyBDUjogRWl0aGVyIGV4cG9ydCBldmVyeXRoaW5nIGhlcmUgb3IgZXhwb3J0IGF0IHRoZSBzdGFydCBvZiBjb21wb25lbnQuIERvbid0IG1peCBib3RoXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIiwiaW1wb3J0IGRvbUNyZWF0b3IgZnJvbSAnLi9kb20tY3JlYXRvcidcbmltcG9ydCBUb2RvIGZyb20gJy4uL21vZGVscy90b2RvJ1xuaW1wb3J0IHBtIGZyb20gJy4vaW5pdGlhbFBNJ1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vbW9kZWxzL3Byb2plY3QnXG5pbXBvcnQgeyBzZXRUaW1lWm9uZSB9IGZyb20gJy4uL3NlcnZpY2VzL3V0aWxpdHkuanMnXG5cbmNvbnN0IHByb2pVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKVxuY29uc3QgdG9kb1VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbGlzdCcpXG5jb25zdCBhZGRQcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0JylcbmNvbnN0IHByb2pGb3JtT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0tb3ZlcmxheScpXG5jb25zdCBwcm9qRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0nKVxuY29uc3QgcHJvak5hbWVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKVxuY29uc3QgY2xlYXJQcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NsZWFyLWFsbC1wcm9qZWN0cycpXG5jb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10b2RvJylcbmNvbnN0IGNsZWFyVG9kb3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xlYXItYWxsLXRvZG9zJylcbmNvbnN0IHRvZG9Gb3JtT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWZvcm0tb3ZlcmxheScpXG5jb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWZvcm0nKVxuY29uc3QgdG9kb1RpdGxlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby10aXRsZScpXG5jb25zdCB0b2RvRGVzY0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGVzYycpXG5jb25zdCB0b2RvRGF0ZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGF0ZScpXG5jb25zdCB0b2RvUHJpb3JpdHlGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXByaW9yaXR5JylcbmNvbnN0IGNhbmNlbFByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1wcm9qLWJ0bicpXG5jb25zdCBjYW5jZWxUb2RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtdG9kby1idG4nKVxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJylcbmNvbnN0IHNpZGViYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhci1idG4nKVxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWNvbnRhaW5lcicpXG5jb25zdCBzaG93Q29tcGxldGVkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctY29tcGxldGVkJylcbmNvbnN0IGN1cnJQcm9qTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXByb2plY3QtbmFtZScpXG5jb25zdCBzZWFyY2hGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtYmFyJylcbmNvbnN0IGRyb3Bkb3duTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wZG93bi1tZW51JylcbmNvbnN0IHNvcnRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtbWVudScpXG5jb25zdCBzb3J0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvcnQtdG9kbycpXG5cbmNvbnN0IHNvcnRGdW5jdGlvbnMgPSBuZXcgTWFwKFtcbiAgWydEdWUgRGF0ZSAtIE5ldyB0byBPbGQnLCAoKSA9PiBwbS5zb3J0QnlEYXRlQXNjKCldLFxuICBbJ0R1ZSBEYXRlIC0gT2xkIHRvIE5ldycsICgpID0+IHBtLnNvcnRCeURhdGVEZXNjKCldLFxuICBbJ1ByaW9yaXR5IC0gTG93IHRvIEhpZ2gnLCAoKSA9PiBwbS5zb3J0QnlQcmlvcml0eUFzYygpXSxcbiAgWydQcmlvcml0eSAtIEhpZ2ggdG8gTG93JywgKCkgPT4gcG0uc29ydEJ5UHJpb3JpdHlEZXNjKCldLFxuICBbJ1RpdGxlIC0gQSB0byBaJywgKCkgPT4gcG0uc29ydEJ5VGl0bGVBc2MoKV0sXG4gIFsnVGl0bGUgLSBaIHRvIEEnLCAoKSA9PiBwbS5zb3J0QnlUaXRsZURlc2MoKV0sXG4gIFsnRGF0ZSBDcmVhdGVkIC0gT2xkIHRvIE5ldycsICgpID0+IHBtLnNvcnRCeUFkZERhdGVBc2MoKV0sXG4gIFsnRGF0ZSBDcmVhdGVkIC0gTmV3IHRvIE9sZCcsICgpID0+IHBtLnNvcnRCeUFkZERhdGVEZXNjKCldLFxuXSlcblxuY29uc3QgRURJVCA9IDAsXG4gIEFERCA9IDFcblxuLy8gcHJvamVjdE1vZGUgYW5kIHRvZG9Nb2RlIGFyZSBzdGF0ZSB2YXJpYWJsZXNcbi8vIEkgd291bGQgY3JlYXRlIGEgc3RhdGUgb2JqZWN0IHRvIGhvbGQgYWxsIHRoZSBzdGF0ZSB2YXJpYWJsZXNcblxubGV0IHN0YXRlID0ge1xuICBwcm9qZWN0TW9kZTogQURELFxuICB0b2RvTW9kZTogQURELFxuICBzZWxlY3RlZFRvZG86IG51bGwsXG4gIHByb2pUb0VkaXQ6IG51bGwsXG4gIHNob3dDb21wbGV0ZWQ6IGZhbHNlLFxuICBzb3J0TW9kZTogJ0RhdGUgQ3JlYXRlZCAtIE9sZGVzdCBGaXJzdCcsXG59XG5cbmNvbnN0IGNsZWFyUHJvamVjdHMgPSAoKSA9PiB7XG4gIGlmIChwcm9qVWwpIHtcbiAgICBwcm9qVWwudGV4dENvbnRlbnQgPSAnJ1xuICB9XG59XG5cbmNvbnN0IGNsZWFyVG9kb3MgPSAoKSA9PiB7XG4gIGlmICh0b2RvVWwpIHtcbiAgICB0b2RvVWwudGV4dENvbnRlbnQgPSAnJ1xuICB9XG59XG5cbmNvbnN0IHNob3dQcm9qZWN0cyA9ICgpID0+IHtcbiAgaWYgKHBtLmlzRW1wdHkoKSkge1xuICAgIGN1cnJQcm9qTmFtZS50ZXh0Q29udGVudCA9ICcnXG4gICAgcmV0dXJuXG4gIH1cbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHBtLnByb2plY3RzKSB7XG4gICAgcHJvalVsLmFwcGVuZENoaWxkKGRvbUNyZWF0b3IuY3JlYXRlUHJvamVjdChwcm9qZWN0LCBwbSkpXG4gIH1cbiAgaWYgKHBtLmN1cnJQcm9qZWN0KSBjdXJyUHJvak5hbWUudGV4dENvbnRlbnQgPSBwbS5jdXJyUHJvamVjdC5uYW1lXG59XG5cbmNvbnN0IHNob3dUb2RvcyA9ICh0b2RvcykgPT4ge1xuICBpZiAoIXRvZG9VbCkgcmV0dXJuXG4gIGZvciAobGV0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICB0b2RvVWwuYXBwZW5kQ2hpbGQoZG9tQ3JlYXRvci5jcmVhdGVUb2RvKHRvZG8pKVxuICB9XG59XG5cbmNvbnN0IHJlZnJlc2hQcm9qZWN0cyA9ICgpID0+IHtcbiAgY2xlYXJQcm9qZWN0cygpXG4gIHNob3dQcm9qZWN0cygpXG59XG5cbmNvbnN0IHJlZnJlc2hUb2RvcyA9ICgpID0+IHtcbiAgY2xlYXJUb2RvcygpXG4gIGlmIChwbS5jdXJyUHJvamVjdCkge1xuICAgIGlmIChzdGF0ZS5zaG93Q29tcGxldGVkKSBzaG93VG9kb3MocG0uY3VyclByb2plY3QuYWxsVG9kb3MpXG4gICAgZWxzZSBzaG93VG9kb3MocG0uY3VyclByb2plY3QudW5jaGVja2VkVG9kb3MpXG4gIH1cbn1cblxuY29uc3QgYWN0aXZhdGVBZGRQcm9qID0gKCkgPT4ge1xuICBhZGRQcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlJykpIHtcbiAgICAgIHNpZGViYXJCdG4uY2xpY2soKVxuICAgIH1cbiAgICBzdGF0ZS5wcm9qZWN0TW9kZSA9IEFERFxuICAgIC8vIFVzdWFsbHkgeW91IHdvdWxkIHdhbnQgdG8gdXNlIGEgY2xhc3MgdG8gc3R5bGUgdGhpcy5cbiAgICAvLyBIYXZlIGEgY2xhc3Mgd2l0aCBkaXNwbGF5OiBmbGV4LCBhbmQgYWRkIHRoYXQgY2xhc3MgdG8gdGhlIGVsZW1lbnRcbiAgICAvLyBUaGF0IHdheSBzdHlsaW5nIGxvZ2ljIGlzIHNlcGFyYXRlZCBmcm9tIHRoZSBsb2dpYyBvZiB0aGUgcHJvZ3JhbVxuICAgIHByb2pGb3JtT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdmbGV4JylcbiAgICBwcm9qTmFtZUZpZWxkLnZhbHVlID0gJydcbiAgfSlcbn1cblxuY29uc3QgaGFuZGxlUHJvakZvcm1TdWJtaXQgPSAoKSA9PiB7XG4gIGxldCBwcm9qTmFtZSA9IHByb2pOYW1lRmllbGQudmFsdWVcbiAgaWYgKHN0YXRlLnByb2plY3RNb2RlID09PSBBREQpIHtcbiAgICBpZiAocHJvak5hbWUgIT09ICcnKSB7XG4gICAgICBwbS5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KG51bGwsIHByb2pOYW1lKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcG0uYWRkUHJvamVjdChuZXcgUHJvamVjdCgpKVxuICAgIH1cbiAgfSBlbHNlIGlmIChzdGF0ZS5wcm9qZWN0TW9kZSA9PT0gRURJVCkge1xuICAgIGlmIChzdGF0ZS5wcm9qVG9FZGl0KSB7XG4gICAgICBwbS5lZGl0UHJvamVjdChzdGF0ZS5wcm9qVG9FZGl0LmlkLCBwcm9qTmFtZSlcbiAgICAgIHN0YXRlLnByb2pUb0VkaXQgPSBudWxsXG4gICAgfVxuICB9XG4gIHByb2pGb3JtT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4JylcbiAgcmVmcmVzaFByb2plY3RzKClcbiAgcmVmcmVzaFRvZG9zKClcbn1cblxuY29uc3QgYWN0aXZhdGVQcm9qRm9ybSA9ICgpID0+IHtcbiAgcHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBoYW5kbGVQcm9qRm9ybVN1Ym1pdCgpXG4gIH0pXG5cbiAgcHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgaGFuZGxlUHJvakZvcm1TdWJtaXQoKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgYWN0aXZhdGVDYW5jZWxQcm9qRm9ybSA9ICgpID0+IHtcbiAgY2FuY2VsUHJvakZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHByb2pGb3JtT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4JylcbiAgfSlcbn1cblxuY29uc3QgYWN0aXZhdGVQcm9qRXZlbnQgPSAoKSA9PiB7XG4gIHByb2pVbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpICYmIHRhcmdldC5pZCkge1xuICAgICAgcG0uY3VyclByb2plY3QgPSBwbS5nZXRQcm9qZWN0KHRhcmdldC5pZClcbiAgICAgIHJlZnJlc2hQcm9qZWN0cygpXG4gICAgICByZWZyZXNoVG9kb3MoKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgYWN0aXZhdGVDbGVhckFsbFByb2ogPSAoKSA9PiB7XG4gIGNsZWFyUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcG0uY2xlYXJBbGxQcm9qZWN0cygpXG4gICAgcmVmcmVzaFByb2plY3RzKClcbiAgICByZWZyZXNoVG9kb3MoKVxuICB9KVxufVxuXG5jb25zdCBhY3RpdmF0ZUNsZWFyUHJvaiA9ICgpID0+IHtcbiAgcHJvalVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxuICAgIGlmIChcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NsZWFyLXByb2plY3QnKSB8fFxuICAgICAgKHRhcmdldC5wYXJlbnROb2RlICE9PSBudWxsICYmXG4gICAgICAgIHRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnY2xlYXItcHJvamVjdCcpKVxuICAgICkge1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NsZWFyLXByb2plY3QnKSkge1xuICAgICAgICBwbS5yZW1vdmVQcm9qZWN0KHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbS5yZW1vdmVQcm9qZWN0KHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZClcbiAgICAgIH1cbiAgICAgIHJlZnJlc2hQcm9qZWN0cygpXG4gICAgICByZWZyZXNoVG9kb3MoKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgYWN0aXZhdGVFZGl0UHJvaiA9ICgpID0+IHtcbiAgcHJvalVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxuICAgIGlmIChcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtcHJvamVjdCcpIHx8XG4gICAgICAodGFyZ2V0LnBhcmVudE5vZGUgIT09IG51bGwgJiZcbiAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXByb2plY3QnKSlcbiAgICApIHtcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXByb2plY3QnKSkge1xuICAgICAgICBzdGF0ZS5wcm9qVG9FZGl0ID0gcG0uZ2V0UHJvamVjdCh0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUucHJvalRvRWRpdCA9IHBtLmdldFByb2plY3QoXG4gICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIHN0YXRlLnByb2plY3RNb2RlID0gRURJVFxuICAgICAgcHJvakZvcm1PdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnKVxuICAgICAgbGV0IG9sZE5hbWUgPSBzdGF0ZS5wcm9qVG9FZGl0Lm5hbWVcbiAgICAgIHByb2pOYW1lRmllbGQudmFsdWUgPSBvbGROYW1lXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBzaG93VG9kb0RldGFpbCA9ICh0b2RvTGkpID0+IHtcbiAgdG9kb0xpLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxvd2VyJykuY2xhc3NMaXN0LnRvZ2dsZSgnZmxleCcpXG59XG5cbmNvbnN0IGFjdGl2YXRlVG9kb0V2ZW50ID0gKCkgPT4ge1xuICB0b2RvVWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XG4gICAgY29uc3QgdG9kbyA9IHRhcmdldC5jbG9zZXN0KCcudG9kbycpXG4gICAgY29uc3QgdG9kb1RpdGxlID0gdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnLnRvZG8tdGl0bGUnKVxuICAgIGNvbnN0IGlzQ2hlY2tib3ggPSB0YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94J1xuICAgIGNvbnN0IGlzQnV0dG9uID0gdGFyZ2V0LnRhZ05hbWUgPT09ICdCVVRUT04nXG4gICAgY29uc3QgaXNTVkcgPSB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJylcblxuICAgIGlmICgodG9kbyB8fCB0b2RvVGl0bGUpICYmICFpc0NoZWNrYm94ICYmICFpc0J1dHRvbiAmJiAhaXNTVkcpIHtcbiAgICAgIGxldCB0b2RvTGkgPSB0b2RvIHx8IHRvZG9UaXRsZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZVxuICAgICAgc2hvd1RvZG9EZXRhaWwodG9kb0xpKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgYWN0aXZhdGVDaGVja1RvZG8gPSAoKSA9PiB7XG4gIHRvZG9VbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2stdG9kbycpKSB7XG4gICAgICBwbS50b2dnbGVDaGVja1RvZG8odGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKVxuICAgICAgcmVmcmVzaFRvZG9zKClcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGFjdGl2YXRlQ2xlYXJUb2RvID0gKCkgPT4ge1xuICB0b2RvVWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0XG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NsZWFyLXRvZG8nKSkge1xuICAgICAgcG0ucmVtb3ZlVG9kbyh0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpXG4gICAgICByZWZyZXNoVG9kb3MoKVxuICAgIH0gZWxzZSBpZiAodGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGVhci10b2RvJykpIHtcbiAgICAgIHBtLnJlbW92ZVRvZG8odGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpXG4gICAgICByZWZyZXNoVG9kb3MoKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgYWN0aXZhdGVBZGRUb2RvID0gKCkgPT4ge1xuICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzdGF0ZS50b2RvTW9kZSA9IEFERFxuICAgIHRvZG9Gb3JtT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdmbGV4JylcbiAgICB0b2RvVGl0bGVGaWVsZC52YWx1ZSA9ICcnXG4gICAgdG9kb0Rlc2NGaWVsZC52YWx1ZSA9ICcnXG4gICAgdG9kb0RhdGVGaWVsZC52YWx1ZSA9IHNldFRpbWVab25lKCkuc2xpY2UoMCwgMTApXG4gICAgdG9kb1ByaW9yaXR5RmllbGQudmFsdWUgPSAnTm9uZSdcbiAgfSlcbn1cblxuY29uc3QgYWN0aXZhdGVFZGl0VG9kbyA9ICgpID0+IHtcbiAgdG9kb1VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxuICAgIGlmIChcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtdG9kbycpIHx8XG4gICAgICB0YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtdG9kbycpXG4gICAgKSB7XG4gICAgICBzdGF0ZS50b2RvTW9kZSA9IEVESVRcbiAgICAgIHRvZG9Gb3JtT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdmbGV4JylcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXRvZG8nKSlcbiAgICAgICAgc3RhdGUuc2VsZWN0ZWRUb2RvID0gcG0uZ2V0VG9kbyhcbiAgICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWRcbiAgICAgICAgKVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdGVkVG9kbyA9IHBtLmdldFRvZG8oXG4gICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWRcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgY29uc3Qgb2xkVGl0bGUgPSBzdGF0ZS5zZWxlY3RlZFRvZG8udGl0bGVcbiAgICAgIGNvbnN0IG9sZERlc2MgPSBzdGF0ZS5zZWxlY3RlZFRvZG8uZGVzY1xuICAgICAgY29uc3Qgb2xkRGF0ZSA9IHN0YXRlLnNlbGVjdGVkVG9kby5kYXRlXG4gICAgICBjb25zdCBvbGRQcmlvcml0eSA9IHN0YXRlLnNlbGVjdGVkVG9kby5wcmlvcml0eVxuICAgICAgdG9kb1RpdGxlRmllbGQudmFsdWUgPSBvbGRUaXRsZVxuICAgICAgaWYgKG9sZERlc2MgIT09ICdOb25lJykge1xuICAgICAgICB0b2RvRGVzY0ZpZWxkLnZhbHVlID0gb2xkRGVzY1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9kb0Rlc2NGaWVsZC52YWx1ZSA9ICcnXG4gICAgICB9XG4gICAgICB0b2RvRGF0ZUZpZWxkLnZhbHVlID0gb2xkRGF0ZVxuICAgICAgdG9kb1ByaW9yaXR5RmllbGQudmFsdWUgPSBvbGRQcmlvcml0eVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgaGFuZGxlVG9kb0Zvcm1TdWJtaXQgPSAoKSA9PiB7XG4gIGxldCB0aXRsZSA9IHRvZG9UaXRsZUZpZWxkLnZhbHVlXG4gIGxldCBkZXNjID0gdG9kb0Rlc2NGaWVsZC52YWx1ZVxuICBsZXQgZGF0ZSA9IHRvZG9EYXRlRmllbGQudmFsdWVcbiAgbGV0IHByaW9yaXR5ID0gdG9kb1ByaW9yaXR5RmllbGQudmFsdWVcbiAgaWYgKHN0YXRlLnRvZG9Nb2RlID09PSBBREQpIHtcbiAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKG51bGwsIHRpdGxlLCBkZXNjLCBkYXRlLCBwcmlvcml0eSlcbiAgICBwbS5hZGRUb2RvKG5ld1RvZG8pXG4gIH0gZWxzZSBpZiAoc3RhdGUudG9kb01vZGUgPT09IEVESVQpIHtcbiAgICBpZiAoc3RhdGUuc2VsZWN0ZWRUb2RvKSB7XG4gICAgICBkZXNjID0gZGVzYyA9PT0gJycgPyAnTm9uZScgOiBkZXNjXG4gICAgICBwbS5lZGl0VG9kbyhzdGF0ZS5zZWxlY3RlZFRvZG8uaWQsIHRpdGxlLCBkZXNjLCBkYXRlLCBwcmlvcml0eSlcbiAgICAgIHN0YXRlLnNlbGVjdGVkVG9kbyA9IG51bGxcbiAgICB9XG4gIH1cbiAgcmVmcmVzaFRvZG9zKClcbiAgdG9kb0Zvcm1PdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgnKVxufVxuXG5jb25zdCBhY3RpdmF0ZVRvZG9Gb3JtID0gKCkgPT4ge1xuICB0b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGhhbmRsZVRvZG9Gb3JtU3VibWl0KClcbiAgfSlcbiAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKCFlLnNoaWZ0S2V5ICYmIGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgaGFuZGxlVG9kb0Zvcm1TdWJtaXQoKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgYWN0aXZhdGVDYW5jZWxUb2RvRm9ybSA9ICgpID0+IHtcbiAgY2FuY2VsVG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHRvZG9Gb3JtT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4JylcbiAgfSlcbn1cblxuY29uc3QgYWN0aXZhdGVUb2RvRm9ybVRleHRib3ggPSAoKSA9PiB7XG4gIHRvZG9EZXNjRmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUuc2hpZnRLZXkgJiYgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgY29uc3QgY3VycmVudFZhbCA9IHRoaXMudmFsdWVcbiAgICAgIGNvbnN0IGN1cnNvclBvcyA9IHRoaXMuc2VsZWN0aW9uU3RhcnRcbiAgICAgIGNvbnN0IG5ld1ZhbCA9XG4gICAgICAgIGN1cnJlbnRWYWwuc3Vic3RyaW5nKDAsIGN1cnNvclBvcykgK1xuICAgICAgICAnXFxuJyArXG4gICAgICAgIGN1cnJlbnRWYWwuc3Vic3RyaW5nKGN1cnNvclBvcylcbiAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWxcbiAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLnNlbGVjdGlvbkVuZCA9IGN1cnNvclBvcyArIDFcblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBhY3RpdmF0ZUNsZWFyQWxsVG9kb3MgPSAoKSA9PiB7XG4gIGNsZWFyVG9kb3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHBtLmNsZWFyQ3VycmVudFByb2plY3QoKVxuICAgIHJlZnJlc2hUb2RvcygpXG4gIH0pXG59XG5cbmNvbnN0IGFjdGl2YXRlU2lkZWJhckJ0biA9ICgpID0+IHtcbiAgc2lkZWJhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdmbGV4JylcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKVxuICAgIHNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZSgnY2xvc2UnKVxuICB9KVxufVxuXG5jb25zdCB0b2dnbGVTaG93Q29tcGxldGVkYnRuID0gKCkgPT4ge1xuICBpZiAoc3RhdGUuc2hvd0NvbXBsZXRlZCkge1xuICAgIHNob3dDb21wbGV0ZWRCdG4udGV4dENvbnRlbnQgPSAnSGlkZSBDb21wbGV0ZWQnXG4gIH0gZWxzZSB7XG4gICAgc2hvd0NvbXBsZXRlZEJ0bi50ZXh0Q29udGVudCA9ICdTaG93IENvbXBsZXRlZCdcbiAgfVxufVxuXG5jb25zdCBhY3RpdmF0ZVNob3dDb21wbGV0ZWQgPSAoKSA9PiB7XG4gIHNob3dDb21wbGV0ZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHN0YXRlLnNob3dDb21wbGV0ZWQgPSAhc3RhdGUuc2hvd0NvbXBsZXRlZFxuICAgIHRvZ2dsZVNob3dDb21wbGV0ZWRidG4oKVxuICAgIHJlZnJlc2hUb2RvcygpXG4gIH0pXG59XG5cbmNvbnN0IGFjdGl2YXRlU2VhcmNoQmFyID0gKCkgPT4ge1xuICBzZWFyY2hGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBkcm9wZG93bk1lbnUudGV4dENvbnRlbnQgPSAnJ1xuICAgIGNvbnN0IHNlYXJjaFN0ciA9IHNlYXJjaEZpZWxkLnZhbHVlXG4gICAgaWYgKHNlYXJjaFN0cikge1xuICAgICAgbGV0IG1hdGNoZXMgPSBwbS5zZWFyY2hUb2RvQnlUaXRsZShzZWFyY2hTdHIpXG4gICAgICBpZiAobWF0Y2hlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgZm9yIChsZXQgbWF0Y2ggb2YgbWF0Y2hlcykge1xuICAgICAgICAgIGRyb3Bkb3duTWVudS5hcHBlbmRDaGlsZChkb21DcmVhdG9yLmNyZWF0ZVJlc3VsdERpdihtYXRjaCkpXG4gICAgICAgIH1cbiAgICAgICAgZHJvcGRvd25NZW51LmNsYXNzTGlzdC5hZGQoJ2ZsZXgnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJvcGRvd25NZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgnKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkcm9wZG93bk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnZmxleCcpXG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBhY3RpdmF0ZURyb3Bkb3duTWVudSA9ICgpID0+IHtcbiAgZHJvcGRvd25NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldFxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWFyY2gtcmVzdWx0JykpIHtcbiAgICAgIGxldCBwcm9qSWQgPSB0YXJnZXQudmFsdWUuc3BsaXQoJzonKVswXVxuICAgICAgbGV0IHRvZG9JZCA9IHRhcmdldC52YWx1ZS5zcGxpdCgnOicpWzFdXG4gICAgICBwbS5jdXJyUHJvamVjdCA9IHBtLmdldFByb2plY3QocHJvaklkKVxuICAgICAgaWYgKHBtLmdldFRvZG8odG9kb0lkKS5jaGVjaykge1xuICAgICAgICBzdGF0ZS5zaG93Q29tcGxldGVkID0gdHJ1ZVxuICAgICAgfVxuICAgICAgdG9nZ2xlU2hvd0NvbXBsZXRlZGJ0bigpXG4gICAgICByZWZyZXNoUHJvamVjdHMoKVxuICAgICAgcmVmcmVzaFRvZG9zKClcbiAgICAgIGNvbnN0IHRvZG9MaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RvZG9JZH1gKVxuICAgICAgc2hvd1RvZG9EZXRhaWwodG9kb0xpKVxuICAgIH1cbiAgICBkcm9wZG93bk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnZmxleCcpXG4gICAgc2VhcmNoRmllbGQudmFsdWUgPSAnJ1xuICB9KVxufVxuXG5jb25zdCBoaWRlRHJvcERvd25NZW51ID0gKCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcbiAgICBpZiAoXG4gICAgICAhdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VhcmNoLXJlc3VsdCcpICYmXG4gICAgICB0YXJnZXQuaWQgIT09ICdzZWFyY2gtYmFyJyAmJlxuICAgICAgdGFyZ2V0LmlkICE9PSAnZHJvcGRvd24tbWVudSdcbiAgICApXG4gICAgICBkcm9wZG93bk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnZmxleCcpXG4gICAgc2VhcmNoRmllbGQudmFsdWUgPSAnJ1xuICB9KVxufVxuXG5jb25zdCBhY3RpdmF0ZVNvcnRNZW51ID0gKCkgPT4ge1xuICBzb3J0TWVudS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgIHN0YXRlLnNvcnRNb2RlID0gZS50YXJnZXQudmFsdWVcbiAgfSlcbn1cblxuY29uc3QgYWN0aXZhdGVTb3J0QnRuID0gKCkgPT4ge1xuICBzb3J0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzb3J0RnVuY3Rpb25zLmdldChzdGF0ZS5zb3J0TW9kZSkoKVxuICAgIHJlZnJlc2hUb2RvcygpXG4gIH0pXG59XG5cbmNvbnN0IGFjdGl2YXRlVUkgPSAoKSA9PiB7XG4gIGFjdGl2YXRlQWRkUHJvaigpXG4gIGFjdGl2YXRlQ2FuY2VsUHJvakZvcm0oKVxuICBhY3RpdmF0ZVByb2pGb3JtKClcbiAgYWN0aXZhdGVQcm9qRXZlbnQoKVxuICBhY3RpdmF0ZUNsZWFyQWxsUHJvaigpXG4gIGFjdGl2YXRlQ2xlYXJQcm9qKClcbiAgYWN0aXZhdGVFZGl0UHJvaigpXG4gIGFjdGl2YXRlVG9kb0V2ZW50KClcbiAgYWN0aXZhdGVDaGVja1RvZG8oKVxuICBhY3RpdmF0ZUNsZWFyVG9kbygpXG4gIGFjdGl2YXRlQWRkVG9kbygpXG4gIGFjdGl2YXRlRWRpdFRvZG8oKVxuICBhY3RpdmF0ZVRvZG9Gb3JtKClcbiAgYWN0aXZhdGVDYW5jZWxUb2RvRm9ybSgpXG4gIGFjdGl2YXRlQ2xlYXJBbGxUb2RvcygpXG4gIGFjdGl2YXRlU2lkZWJhckJ0bigpXG4gIGFjdGl2YXRlU2hvd0NvbXBsZXRlZCgpXG4gIGFjdGl2YXRlU2VhcmNoQmFyKClcbiAgYWN0aXZhdGVEcm9wZG93bk1lbnUoKVxuICBoaWRlRHJvcERvd25NZW51KClcbiAgYWN0aXZhdGVUb2RvRm9ybVRleHRib3goKVxuICBhY3RpdmF0ZVNvcnRNZW51KClcbiAgYWN0aXZhdGVTb3J0QnRuKClcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICByZWZyZXNoUHJvamVjdHMsXG4gIHJlZnJlc2hUb2RvcyxcbiAgYWN0aXZhdGVVSSxcbn1cbiIsImNvbnN0IFNWR19ERUZBVUxUX0NMQVNTID0gJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3QsIHBtKSA9PiB7XG4gIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICBsaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gIGxpLmlkID0gYCR7cHJvamVjdC5pZH1gO1xuICBsaS5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0QnRuc0RpdigpKTtcbiAgaWYgKHBtLmN1cnJQcm9qZWN0ICYmIGxpLmlkID09PSBwbS5jdXJyUHJvamVjdC5pZCkge1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gIH1cbiAgcmV0dXJuIGxpO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEJ0bnNEaXYgPSAoKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdlRhZygncHJvamVjdC1idG5zJyk7XG4gIGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVCdG5UYWcoJ2VkaXQtcHJvamVjdCcsICdlZGl0X25vdGUnLCAncHJvai1pY29ucycpO1xuICBjb25zdCBjbGVhckJ0biA9IGNyZWF0ZUJ0blRhZygnY2xlYXItcHJvamVjdCcsICdjbG9zZScsICdwcm9qLWljb25zJyk7XG4gIGRpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNsZWFyQnRuKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvZG8gPSAodG9kbykgPT4ge1xuICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gIGxpLmlkID0gYCR7dG9kby5pZH1gO1xuICBjb25zdCB1cHBlckRpdiA9IGNyZWF0ZURpdlRhZygndG9kby11cHBlcicpO1xuICB1cHBlckRpdi5hcHBlbmRDaGlsZChjcmVhdGVJbmZvRGl2KHRvZG8pKTtcbiAgdXBwZXJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0J0bnNEaXYoKSk7XG4gIGxpLmFwcGVuZENoaWxkKHVwcGVyRGl2KTtcbiAgY29uc3QgbG93ZXJEaXYgPSBjcmVhdGVEaXZUYWcoJ3RvZG8tbG93ZXInKTtcbiAgbG93ZXJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0RldGFpbHNEaXYodG9kbykpO1xuICBsaS5hcHBlbmRDaGlsZChsb3dlckRpdik7XG4gIGlmICh0b2RvLmNoZWNrKSBsaS5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gIHJldHVybiBsaTtcbn07XG5cbmNvbnN0IGNyZWF0ZUluZm9EaXYgPSAodG9kbykgPT4ge1xuICBjb25zdCBkaXYgPSBjcmVhdGVEaXZUYWcoJ3RvZG8taW5mbycpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0NoZWNrKHRvZG8pKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9Qcmlvcml0eSh0b2RvKSk7XG4gIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVTcGFuVGFnKHRvZG8udGl0bGUsICd0b2RvLXRpdGxlJykpO1xuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgY3JlYXRlVG9kb0J0bnNEaXYgPSAoKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdlRhZygndG9kby1idG5zJyk7XG4gIGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVCdG5UYWcoJ2VkaXQtdG9kbycsICdlZGl0X25vdGUnLCAndG9kby1pY29ucycpO1xuICBjb25zdCBjbG9zZUJ0biA9IGNyZWF0ZUJ0blRhZygnY2xlYXItdG9kbycsICdjbG9zZScsICd0b2RvLWljb25zJyk7XG4gIGRpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvZG9EZXRhaWxzRGl2ID0gKHRvZG8pID0+IHtcbiAgY29uc3QgZGl2ID0gY3JlYXRlRGl2VGFnKCd0b2RvLWRldGFpbHMnKTtcbiAgY29uc3QgZGVzYyA9IGNyZWF0ZVBUYWcoYERlc2NyaXB0aW9uOlxcdCR7dG9kby5kZXNjfWAsICd0b2RvLWRlc2MnKTtcbiAgY29uc3QgZGF0ZSA9IGNyZWF0ZVBUYWcoYER1ZSBkYXRlOlxcdCR7dG9kby5kYXRlfWAsICd0b2RvLWRhdGUnKTtcbiAgZGl2LmFwcGVuZENoaWxkKGRlc2MpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBjcmVhdGVUb2RvQ2hlY2sgPSAodG9kbykgPT4ge1xuICBsZXQgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2stdG9kbycpO1xuICBjaGVjay5jaGVja2VkID0gdG9kby5jaGVjaztcbiAgcmV0dXJuIGNoZWNrO1xufTtcblxuY29uc3QgY3JlYXRlVG9kb1ByaW9yaXR5ID0gKHRvZG8pID0+IHtcbiAgbGV0IHByaW9yaXR5O1xuICBpZiAodG9kby5wcmlvcml0eSA9PT0gJ05vbmUnKSBwcmlvcml0eSA9IGNyZWF0ZVNwYW5UYWcoJycsICd0b2RvLXByaW9yaXR5Jyk7XG4gIGVsc2UgcHJpb3JpdHkgPSBjcmVhdGVTcGFuVGFnKHRvZG8ucHJpb3JpdHksICd0b2RvLXByaW9yaXR5Jyk7XG4gIHJldHVybiBwcmlvcml0eTtcbn07XG5cbmNvbnN0IGNyZWF0ZVJlc3VsdERpdiA9IChtYXRjaCkgPT4ge1xuICBjb25zdCBvcHRpb24gPSBjcmVhdGVEaXZUYWcoXG4gICAgJ3NlYXJjaC1yZXN1bHQnLFxuICAgIGAke21hdGNoLm1hdGNoZWRQcm9qLmlkfToke21hdGNoLm1hdGNoZWRUb2RvLmlkfWBcbiAgKTtcblxuICBjb25zdCB0b2RvVGl0bGUgPSBjcmVhdGVQVGFnKG1hdGNoLm1hdGNoZWRUb2RvLnRpdGxlLCAnbWF0Y2hlZC10b2RvJyk7XG4gIGlmIChtYXRjaC5tYXRjaGVkVG9kby5jaGVjaykge1xuICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gIH1cbiAgY29uc3QgcHJvamVjdE5hbWUgPSBjcmVhdGVQVGFnKG1hdGNoLm1hdGNoZWRQcm9qLm5hbWUsICdtYXRjaGVkLXByb2plY3QnKTtcblxuICBvcHRpb24uYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgb3B0aW9uLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICByZXR1cm4gb3B0aW9uO1xufTtcblxuY29uc3QgY3JlYXRlU1ZHU3BhblRhZyA9ICh0ZXh0LCBkZWZhdWx0Q2xhc3MsIGN1c3RvbUNsYXNzKSA9PiB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZChkZWZhdWx0Q2xhc3MsIGN1c3RvbUNsYXNzKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBzcGFuO1xufTtcblxuY29uc3QgY3JlYXRlUFRhZyA9ICh0ZXh0LCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gcDtcbn07XG5cbmNvbnN0IGNyZWF0ZVNwYW5UYWcgPSAodGV4dCwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIHNwYW47XG59O1xuXG5jb25zdCBjcmVhdGVCdG5UYWcgPSAoY2xhc3NOYW1lLCBpY29uTmFtZSwgc3ZnQ2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBjb25zdCBpY29uID0gY3JlYXRlU1ZHU3BhblRhZyhpY29uTmFtZSwgU1ZHX0RFRkFVTFRfQ0xBU1MsIHN2Z0NsYXNzTmFtZSk7XG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZURpdlRhZyA9IChjbGFzc05hbWUsIHZhbCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIGRpdi52YWx1ZSA9IHZhbCA/IHZhbCA6ICcnO1xuICByZXR1cm4gZGl2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVQcm9qZWN0LFxuICBjcmVhdGVUb2RvLFxuICBjcmVhdGVSZXN1bHREaXYsXG59O1xuIiwiaW1wb3J0IFByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmxldCBwbSA9IG5ldyBQcm9qZWN0TWFuYWdlcigpO1xuLy8gVGhpcyBjb3VsZCBiZSBoYW5kbGVkIGluIFByb2plY3RNYW5hZ2VyIGNsYXNzXG4vLyBjcmVhdGVQcm9qZWN0KCkgd2lsbCBoYW5kbGUgY3JlYXRlIGEgbmV3IHByb2plY3QgYW5kIGFkZCBpdCB0byB0aGUgcHJvamVjdCBtYW5hZ2VyXG4vLyBwbS5jcmVhdGVQcm9qZWN0KCdUbyBkbyBsaXN0Jyk7XG5pZiAocG0uaXNFbXB0eSgpKSB7XG4gIHBtLmNyZWF0ZVByb2plY3QoJ05ldyBQcm9qZWN0Jyk7XG59XG5leHBvcnQgZGVmYXVsdCBwbTtcbiIsImNvbnN0IHN0b3JhZ2VBdmFpbGFibGUgPSAodHlwZSkgPT4ge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGBFcnJvciB0ZXN0aW5nIGZvciBzdG9yYWdlIGF2YWlsYWJpbGl0eTogJHtlfWApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuY29uc3QgbG9hZExvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNlcmlhbGl6ZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIGlmIChzZXJpYWxpemVkRGF0YSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY29uc3QgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2Uoc2VyaWFsaXplZERhdGEpO1xuICAgICAgcmV0dXJuIHBhcnNlZERhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3IgbG9hZGluZyBmcm9tIGxvY2FsIHN0b3JhZ2U6ICR7ZXJyfWApO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ0xvY2FsIHN0b3JhZ2Ugbm90IGF2YWlsYWJsZScpO1xuICB9XG59O1xuXG5jb25zdCBzYXZlTG9jYWxTdG9yYWdlID0gKGtleSwgZGF0YSkgPT4ge1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2VyaWFsaXplZERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgc2VyaWFsaXplZERhdGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coYEVycm9yIHNhdmluZyB0byBsb2NhbCBzdG9yYWdlOiAke2Vycn1gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ0xvY2FsIHN0b3JhZ2Ugbm90IGF2YWlsYWJsZScpO1xuICB9XG59O1xuXG5jb25zdCBjbGVhckxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgZXJyb3IgY2xlYXJpbmcgbG9jYWwgc3RvcmFnZTogJHtlLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdMb2NhbCBzdG9yYWdlIG5vdCBhdmFpbGFibGUnKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgbG9hZExvY2FsU3RvcmFnZSwgc2F2ZUxvY2FsU3RvcmFnZSwgY2xlYXJMb2NhbFN0b3JhZ2UgfTtcbiIsImltcG9ydCB7IGxvYWRMb2NhbFN0b3JhZ2UsIHNhdmVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vbW9kZWxzL3Byb2plY3QnO1xuXG5jbGFzcyBQcm9qZWN0TWFuYWdlciB7XG4gICNwcm9qZWN0cztcbiAgI2N1cnJQcm9qZWN0O1xuICAjc3RvcmFnZUtleTtcblxuICBjb25zdHJ1Y3RvcihzdG9yYWdlS2V5ID0gJ3Byb2plY3RNYW5hZ2VyJywgLi4ucHJvamVjdHMpIHtcbiAgICB0aGlzLiNzdG9yYWdlS2V5ID0gc3RvcmFnZUtleTtcbiAgICBsZXQgc3RvcmVkRGF0YTtcbiAgICB0cnkge1xuICAgICAgc3RvcmVkRGF0YSA9IGxvYWRMb2NhbFN0b3JhZ2UodGhpcy4jc3RvcmFnZUtleSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgRXJyb3IgbG9hZGluZyBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZSBmb3Iga2V5IFwiJHtcbiAgICAgICAgICB0aGlzLiNzdG9yYWdlS2V5XG4gICAgICAgIH1cIjogJHtlcnJ9YFxuICAgICAgKTtcbiAgICAgIHN0b3JlZERhdGEgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoc3RvcmVkRGF0YSkge1xuICAgICAgaWYgKHN0b3JlZERhdGEucHJvamVjdHMpXG4gICAgICAgIHRoaXMuI3Byb2plY3RzID0gc3RvcmVkRGF0YS5wcm9qZWN0cy5tYXAoKHApID0+IFByb2plY3QuZnJvbUpTT04ocCkpO1xuICAgICAgZWxzZSB0aGlzLiNwcm9qZWN0cyA9IFtdO1xuICAgICAgaWYgKHRoaXMuI3Byb2plY3RzICYmIHN0b3JlZERhdGEuY3VyclByb2plY3RJZCkge1xuICAgICAgICBjb25zdCB0ZW1wUHJvaiA9IHRoaXMuI3Byb2plY3RzLmZpbmQoXG4gICAgICAgICAgKHApID0+IHAuaWQgPT09IHN0b3JlZERhdGEuY3VyclByb2plY3RJZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLiNjdXJyUHJvamVjdCA9IHRlbXBQcm9qIHx8IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiNjdXJyUHJvamVjdCA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI3Byb2plY3RzID1cbiAgICAgICAgcHJvamVjdHMubGVuZ3RoID4gMCA/IHByb2plY3RzLm1hcCgocCkgPT4gbmV3IFByb2plY3QocCkpIDogW107XG4gICAgICB0aGlzLiNjdXJyUHJvamVjdCA9IHRoaXMuI3Byb2plY3RzLmxlbmd0aCA+IDAgPyB0aGlzLiNwcm9qZWN0c1swXSA6IG51bGw7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgcHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3Byb2plY3RzO1xuICB9XG5cbiAgc2V0IGN1cnJQcm9qZWN0KGN1cnJQcm9qKSB7XG4gICAgdGhpcy4jY3VyclByb2plY3QgPVxuICAgICAgdGhpcy4jcHJvamVjdHMuZmluZCgocHJvaikgPT4gcHJvai5pZCA9PT0gY3VyclByb2ouaWQpIHx8IG51bGw7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICBnZXQgY3VyclByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2N1cnJQcm9qZWN0O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHByb2plY3RzSlNPTiA9IHRoaXMuI3Byb2plY3RzLm1hcCgocCkgPT4gcC50b0pTT04oKSk7XG4gICAgY29uc3QgY3VyclByb2plY3RJZCA9IHRoaXMuI2N1cnJQcm9qZWN0ID8gdGhpcy4jY3VyclByb2plY3QuaWQgOiBudWxsO1xuICAgIHJldHVybiB7IHByb2plY3RzOiBwcm9qZWN0c0pTT04sIGN1cnJQcm9qZWN0SWQ6IGN1cnJQcm9qZWN0SWQgfTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgcHJvamVjdE1hbmFnZXIgPSBuZXcgUHJvamVjdE1hbmFnZXIoKTtcbiAgICBpZiAoIWpzb24gfHwgIWpzb24ucHJvamVjdHMpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0TWFuYWdlcjtcbiAgICB9XG4gICAganNvbi5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0SlNPTikgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbUpTT04ocHJvamVjdEpTT04pO1xuICAgICAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIGlmIChqc29uLmN1cnJQcm9qZWN0SWQgPT09IHByb2plY3QuaWQpIHtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2plY3RNYW5hZ2VyO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBzYXZlTG9jYWxTdG9yYWdlKHRoaXMuI3N0b3JhZ2VLZXksIHRoaXMudG9KU09OKCkpO1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICB0aGlzLiNwcm9qZWN0cy5sZW5ndGggPT09IDA7XG4gIH1cblxuICBnZXRQcm9qZWN0KGlkKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBQcm9qZWN0IHdpdGggSUQgJHtpZH0gaXMgbm90IGZvdW5kYCk7XG4gICAgfVxuICAgIGZvciAobGV0IHAgb2YgdGhpcy4jcHJvamVjdHMpIHtcbiAgICAgIGlmIChwLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gcDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgIHRoaXMuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMuI3Byb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgdGhpcy4jY3VyclByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuc2F2ZSgpO1xuICB9XG5cbiAgcmVtb3ZlUHJvamVjdChpZCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgY29uc29sZS5lcnJvcihgUHJvamVjdCB3aXRoIElEICR7aWR9IGlzIG5vdCBmb3VuZGApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLiNwcm9qZWN0cyA9IHRoaXMuI3Byb2plY3RzLmZpbHRlcigocCkgPT4gcC5pZCAhPT0gaWQpO1xuICAgIGlmICh0aGlzLiNjdXJyUHJvamVjdC5pZCA9PT0gaWQpIHtcbiAgICAgIGlmICghdGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgICAgdGhpcy4jY3VyclByb2plY3QgPSB0aGlzLiNwcm9qZWN0c1swXTtcbiAgICAgIH0gZWxzZSB0aGlzLiNjdXJyUHJvamVjdCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuc2F2ZSgpO1xuICB9XG5cbiAgYWRkVG9kbyh0b2RvKSB7XG4gICAgaWYgKHRoaXMuI2N1cnJQcm9qZWN0KSB7XG4gICAgICB0aGlzLiNjdXJyUHJvamVjdC5hZGRUb2RvKHRvZG8pO1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVG9kbyhpZCkge1xuICAgIGlmICh0aGlzLiNjdXJyUHJvamVjdCkge1xuICAgICAgdGhpcy4jY3VyclByb2plY3QucmVtb3ZlVG9kbyhpZCk7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICB9XG4gIH1cblxuICBnZXRUb2RvKGlkKSB7XG4gICAgaWYgKHRoaXMuI2N1cnJQcm9qZWN0KSByZXR1cm4gdGhpcy4jY3VyclByb2plY3QuZ2V0VG9kbyhpZCk7XG4gIH1cblxuICBlZGl0VG9kbyhpZCwgdGl0bGUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy4jY3VyclByb2plY3QuZWRpdFRvZG8oaWQsIHRpdGxlLCBkZXNjLCBkYXRlLCBwcmlvcml0eSk7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICB0b2dnbGVDaGVja1RvZG8oaWQpIHtcbiAgICB0aGlzLiNjdXJyUHJvamVjdC50b2dnbGVDaGVja1RvZG8oaWQpO1xuICAgIHRoaXMuc2F2ZSgpO1xuICB9XG5cbiAgZWRpdFByb2plY3QoaWQsIG5ld05hbWUpIHtcbiAgICB0aGlzLmdldFByb2plY3QoaWQpLm5hbWUgPSBuZXdOYW1lO1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KGlkKTtcbiAgICB0aGlzLnNhdmUoKTtcbiAgfVxuXG4gIGNsZWFyQ3VycmVudFByb2plY3QoKSB7XG4gICAgaWYgKHRoaXMuI2N1cnJQcm9qZWN0KSB7XG4gICAgICB0aGlzLiNjdXJyUHJvamVjdC5jbGVhckFsbFRvZG9zKCk7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hUb2RvQnlUaXRsZShzZWFyY2hTdHIpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IFtdO1xuICAgIGZvciAobGV0IHByb2plY3Qgb2YgdGhpcy4jcHJvamVjdHMpIHtcbiAgICAgIGZvciAobGV0IHRvZG8gb2YgcHJvamVjdC5hbGxUb2Rvcykge1xuICAgICAgICBpZiAodG9kby50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0ci50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgIGxldCBtYXRjaCA9IHsgbWF0Y2hlZFByb2o6IHByb2plY3QsIG1hdGNoZWRUb2RvOiB0b2RvIH07XG4gICAgICAgICAgbWF0Y2hlcy5wdXNoKG1hdGNoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHNvcnRCeUFkZERhdGVBc2MoKSB7XG4gICAgdGhpcy4jY3VyclByb2plY3Quc29ydEJ5QWRkRGF0ZUFzYygpO1xuICB9XG5cbiAgc29ydEJ5QWRkRGF0ZURlc2MoKSB7XG4gICAgdGhpcy4jY3VyclByb2plY3Quc29ydEJ5QWRkRGF0ZURlc2MoKTtcbiAgfVxuXG4gIHNvcnRCeVByaW9yaXR5QXNjKCkge1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0LnNvcnRCeVByaW9yaXR5QXNjKCk7XG4gIH1cblxuICBzb3J0QnlQcmlvcml0eURlc2MoKSB7XG4gICAgdGhpcy4jY3VyclByb2plY3Quc29ydEJ5UHJpb3JpdHlEZXNjKCk7XG4gIH1cblxuICBzb3J0QnlEYXRlQXNjKCkge1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0LnNvcnRCeURhdGVBc2MoKTtcbiAgfVxuXG4gIHNvcnRCeURhdGVEZXNjKCkge1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0LnNvcnRCeURhdGVEZXNjKCk7XG4gIH1cblxuICBzb3J0QnlUaXRsZUFzYygpIHtcbiAgICB0aGlzLiNjdXJyUHJvamVjdC5zb3J0QnlUaXRsZUFzYygpO1xuICB9XG5cbiAgc29ydEJ5VGl0bGVEZXNjKCkge1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0LnNvcnRCeVRpdGxlRGVzYygpO1xuICB9XG5cbiAgY2xlYXJBbGxQcm9qZWN0cygpIHtcbiAgICB0aGlzLiNwcm9qZWN0cyA9IFtdO1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0ID0gbnVsbDtcbiAgICB0aGlzLnNhdmUoKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGxldCBvdXQgPSAnJztcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMuI3Byb2plY3RzKSB7XG4gICAgICBvdXQgKz0gcHJvamVjdC50b1N0cmluZygpICsgJ1xcbic7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdE1hbmFnZXI7XG4iLCIvLyBDUjogVGhpcyBtZXRob2QgZG9lcyBub3QgYmVsb25nIHRvIFRvZG8gY2xhc3MuIEl0IGlzIGEgdXRpbGl0eSBmdW5jdGlvbi4gTW92ZSBpdCB0byBhIHNlcGFyYXRlIGZpbGVcbmV4cG9ydCBjb25zdCBzZXRUaW1lWm9uZSA9ICgpID0+IHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBub3cuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xuICBjb25zdCBsb2NhbFRpbWUgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gdGltZXpvbmVPZmZzZXQpO1xuICByZXR1cm4gbG9jYWxUaW1lLnRvSVNPU3RyaW5nKCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9