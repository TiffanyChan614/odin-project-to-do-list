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
  ['Due Date - New to Old', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByDateAsc()],
  ['Due Date - Old to New', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByDateDesc()],
  ['Priority - Low to High', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByPriorityAsc()],
  ['Priority - High to Low', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByPriorityDesc()],
  ['Title - A to Z', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByTitleAsc()],
  ['Title - Z to A', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByTitleDesc()],
  ['Date Created - Old to New', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByAddDateAsc()],
  ['Date Created - New to Old', () => _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].sortByAddDateDesc()],
]);

const EDIT = 0,
  ADD = 1;

// projectMode and todoMode are state variables
// I would create a state object to hold all the state variables

let state = {
  projectMode: ADD,
  todoMode: ADD,
  selectedTodo: null,
  projToEdit: null,
  showCompleted: false,
  sortMode: 'Date Created - Oldest First',
};

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
    if (state.showCompleted) showTodos(_initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].currProject.allTodos);
    else showTodos(_initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].currProject.uncheckedTodos);
  }
};

const activateAddProj = () => {
  addProjBtn.addEventListener('click', (e) => {
    if (sidebar.classList.contains('close')) {
      sidebarBtn.click();
    }
    state.projectMode = ADD;
    // Usually you would want to use a class to style this.
    // Have a class with display: flex, and add that class to the element
    // That way styling logic is separated from the logic of the program
    projFormOverlay.classList.add('flex');
    projNameField.value = '';
  });
};

const handleProjFormSubmit = () => {
  let projName = projNameField.value;
  if (state.projectMode === ADD) {
    if (projName !== '') _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(new _models_project__WEBPACK_IMPORTED_MODULE_3__["default"](null, projName));
    else _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(new _models_project__WEBPACK_IMPORTED_MODULE_3__["default"]());
  } else if (state.projectMode === EDIT) {
    if (state.projToEdit) {
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].editProject(state.projToEdit.id, projName);
      state.projToEdit = null;
    }
  }
  projFormOverlay.classList.add('flex');
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
    projFormOverlay.classList.remove('flex');
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
      if (target.classList.contains('clear-project')) {
        _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].removeProject(target.parentNode.parentNode.id);
      } else {
        _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].removeProject(target.parentNode.parentNode.parentNode.id);
      }
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
        state.projToEdit = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(target.parentNode.parentNode.id);
      } else {
        state.projToEdit = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(
          target.parentNode.parentNode.parentNode.id
        );
      }
      state.projectMode = EDIT;
      projFormOverlay.classList.add('flex');
      let oldName = state.projToEdit.name;
      projNameField.value = oldName;
    }
  });
};

const showTodoDetail = (todoLi) => {
  todoLi.querySelector('.todo-lower').classList.toggle('flex');
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
    state.todoMode = ADD;
    todoFormOverlay.classList.add('flex');
    todoTitleField.value = '';
    todoDescField.value = '';
    todoDateField.value = (0,_services_utility_js__WEBPACK_IMPORTED_MODULE_4__.setTimeZone)().slice(0, 10);
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
      state.todoMode = EDIT;
      todoFormOverlay.classList.add('flex');
      if (target.classList.contains('edit-todo'))
        state.selectedTodo = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getTodo(
          target.parentNode.parentNode.parentNode.id
        );
      else {
        state.selectedTodo = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getTodo(
          target.parentNode.parentNode.parentNode.parentNode.id
        );
      }
      const oldTitle = state.selectedTodo.title;
      const oldDesc = state.selectedTodo.desc;
      const oldDate = state.selectedTodo.date;
      const oldPriority = state.selectedTodo.priority;
      todoTitleField.value = oldTitle;
      if (oldDesc !== 'None') {
        todoDescField.value = oldDesc;
      } else {
        todoDescField.value = '';
      }
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
  if (state.todoMode === ADD) {
    let newTodo = new _models_todo__WEBPACK_IMPORTED_MODULE_1__["default"](null, title, desc, date, priority);
    _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].addTodo(newTodo);
  } else if (state.todoMode === EDIT) {
    if (state.selectedTodo) {
      desc = desc === '' ? 'None' : desc;
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].editTodo(state.selectedTodo.id, title, desc, date, priority);
      state.selectedTodo = null;
    }
  }
  refreshTodos();
  todoFormOverlay.classList.remove('flex');
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
    todoFormOverlay.classList.remove('flex');
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
    projectContainer.classList.toggle('flex');
    sidebar.classList.toggle('open');
    sidebar.classList.toggle('close');
  });
};

const toggleShowCompletedbtn = () => {
  if (state.showCompleted) {
    showCompletedBtn.textContent = 'Hide Completed';
  } else {
    showCompletedBtn.textContent = 'Show Completed';
  }
};

const activateShowCompleted = () => {
  showCompletedBtn.addEventListener('click', (e) => {
    state.showCompleted = !state.showCompleted;
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
        dropdownMenu.classList.add('flex');
      } else {
        dropdownMenu.classList.remove('flex');
      }
    } else {
      dropdownMenu.classList.remove('flex');
    }
  });
};

const activateDropdownMenu = () => {
  dropdownMenu.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('search-result')) {
      let projId = target.value.split(':')[0];
      let todoId = target.value.split(':')[1];
      _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].currProject = _initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getProject(projId);
      if (_initialPM__WEBPACK_IMPORTED_MODULE_2__["default"].getTodo(todoId).check) {
        state.showCompleted = true;
      }
      toggleShowCompletedbtn();
      refreshProjects();
      refreshTodos();
      const todoLi = document.querySelector(`#${todoId}`);
      showTodoDetail(todoLi);
    }
    dropdownMenu.classList.remove('flex');
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
      dropdownMenu.classList.remove('flex');
    searchField.value = '';
  });
};

const activateSortMenu = () => {
  sortMenu.addEventListener('change', (e) => {
    state.sortMode = e.target.value;
  });
};

const activateSortBtn = () => {
  sortBtn.addEventListener('click', (e) => {
    sortFunctions.get(state.sortMode)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFN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QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0ZUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxVQUFVO0FBQ3JELHdDQUF3QyxVQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHFCQUFxQixHQUFHLHFCQUFxQjtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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dXJjZXMiOlsid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL21kNS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9uaWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3BhcnNlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9zaGExLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3YxLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92My5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjM1LmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2NvbW1vbmpzLWJyb3dzZXIvdjUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9jb21tb25qcy1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvY29tbW9uanMtYnJvd3Nlci92ZXJzaW9uLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvanMvbW9kZWxzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2pzL21vZGVscy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9qcy9zZXJ2aWNlcy9kaXNwbGF5LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2pzL3NlcnZpY2VzL2RvbS1jcmVhdG9yLmpzIiwid2VicGFjazovL29kaW4tdG8tZG8tbGlzdC8uL3NyYy9qcy9zZXJ2aWNlcy9pbml0aWFsUE0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2pzL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10by1kby1saXN0Ly4vc3JjL2pzL3NlcnZpY2VzL3Byb2plY3QtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvLWRvLWxpc3QvLi9zcmMvanMvc2VydmljZXMvdXRpbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0td2hpdGUtZ3JleTogI2ViZWJlYjtcXG4gIC0tcGFsZS1ncmV5OiAjZTNlOWViO1xcbiAgLS1saWdodC1ncmV5OiAjZDZkOWRhO1xcbiAgLS1ncmV5OiAjYjJiZWMzO1xcbiAgLS1uZXV0cmFsLWdyZXk6ICNhN2E3YTc7XFxuICAtLW1lZGl1bS1saWdodC1ncmV5OiAjNjQ2YTZjO1xcbiAgLS1tZWRpdW0tZ3JleTogIzQ0NGI0ZDtcXG4gIC0tZGFyazogIzJkMzQzNjtcXG4gIC0tc2t5LWJsdWU6ICM1NWEyZjA7XFxuICAtLWxpZ2h0LWJsdWU6ICMzZTkyZTY7XFxuICAtLWJsdWU6ICMwOTg0ZTM7XFxuICAtLWRhcmstYmx1ZTogIzAwNmZjNDtcXG4gIC0tcGluazogI2ZmNDY0NjtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCAnc3lzdGVtLXVpJztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jc2lkZWJhci5vcGVuICNwcm9qZWN0LWJ0bnMtY29udGFpbmVyLFxcbiNjb250ZW50ID4gaGVhZGVyIHtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI3NpZGViYXIub3BlbiB7XFxuICB3aWR0aDogMjUlO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIG1heC13aWR0aDogNDByZW07XFxufVxcblxcbiNzaWRlYmFyLmNsb3NlIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdC1idG5zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGdhcDogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbiNzaWRlYmFyLm9wZW4gI3Byb2plY3QtYnRucy1jb250YWluZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHBhZGRpbmc6IDAgMC4ycmVtO1xcbiAgbWFyZ2luOiAwIDAuN3JlbSAwIDAuN3JlbTtcXG4gIGJvcmRlci1ib3R0b206IDAuMXJlbSBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuI3NpZGViYXIub3BlbiBoZWFkZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbn1cXG5cXG4jc2lkZWJhci5jbG9zZSAjcHJvamVjdC1idG5zLWNvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxufVxcblxcbiNzaWRlYmFyLmNsb3NlICNjbGVhci1hbGwtcHJvamVjdHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Byb2plY3QtYnRucy1jb250YWluZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jcHJvamVjdC1idG5zLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LWJsdWUpO1xcbn1cXG5cXG4jc2lkZWJhci5jbG9zZSAjcHJvamVjdC1idG5zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0LnNlbGVjdGVkLFxcbi5wcm9qZWN0LnNlbGVjdGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS1ibHVlKTtcXG59XFxuXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGhlaWdodDogNnZoO1xcbiAgbWluLWhlaWdodDogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtIDAuN3JlbTtcXG59XFxuXFxuLnByb2plY3QgYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbn1cXG5cXG4ucHJvamVjdCBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLW92ZXJsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgei1pbmRleDogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1vdmVybGF5IGlucHV0IHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLWdyZXkpO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLW92ZXJsYXkgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWdyZXkpO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWJ0bnMsXFxuI3RvZG8tZm9ybS1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1idG5zIGJ1dHRvbixcXG4jdG9kby1mb3JtLWJ0bnMgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuN3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1ncmV5KTtcXG59XFxuXFxuI2NhbmNlbC1wcm9qLWJ0bjpob3ZlcixcXG4jY2FuY2VsLXRvZG8tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4jc3VibWl0LXByb2otYnRuOmhvdmVyLFxcbiNzdWJtaXQtdG9kby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiN0b2RvLWZvcm0tYnRucyB7XFxuICBtYXJnaW4tdG9wOiAwLjhyZW07XFxufVxcblxcbiNwcm9qZWN0LWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDI1cmVtO1xcbn1cXG5cXG4jdG9kby1mb3JtLW92ZXJsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgei1pbmRleDogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3RvZG8tZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjVyZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcbiN0b2RvLWZvcm0gaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdG9kby1mb3JtIGlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1ncmV5KTtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCAnc3lzdGVtLXVpJztcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxufVxcblxcbiN0b2RvLWZvcm0gPiBkaXY6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjNyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4jdG9kby1mb3JtID4gZGl2IGxhYmVsIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjJyZW07XFxufVxcblxcbiN0b2RvLWZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1ncmV5KTtcXG59XFxuXFxuI3RvZG8tZm9ybSAjdG9kby1kZXNjIHtcXG4gIGhlaWdodDogM3JlbTtcXG4gIG1heC1oZWlnaHQ6IDIwcmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI3NlYXJjaC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4jc2VhcmNoLWJhciB7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiA2NiU7XFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tbGlnaHQtZ3JleSk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgcGFkZGluZzogMCAwLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiA1MCU7XFxuICBib3JkZXI6IDAuMDdyZW0gc29saWQgdmFyKC0tcGFsZS1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogM3JlbTtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgLnNlYXJjaC1yZXN1bHQge1xcbiAgbWFyZ2luOiAwIDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgLnNlYXJjaC1yZXN1bHQgLm1hdGNoZWQtcHJvamVjdCB7XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWxpZ2h0LWdyZXkpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbiNkcm9wZG93bi1tZW51IC5zZWFyY2gtcmVzdWx0IC5tYXRjaGVkLXRvZG8uY2hlY2tlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgLnNlYXJjaC1yZXN1bHQ6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIGZvbnQtd2VpZ2h0OiA0NTA7XFxufVxcblxcbiNkcm9wZG93bi1tZW51ID4gLnNlYXJjaC1yZXN1bHQ6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIGJvcmRlci1ib3R0b206IDAuMDdyZW0gc29saWQgdmFyKC0tcGFsZS1ncmV5KTtcXG59XFxuXFxuI3RvZG8tY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAuMnJlbSAxLjJyZW0gMnJlbSAxLjJyZW07XFxufVxcblxcbiNjb250ZW50ID4gaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXG59XFxuXFxuI3RvZG8taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxLjVyZW0gMCAxcmVtO1xcbn1cXG5cXG4jdG9kby1jb250YWluZXIgaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG5cXG4jdG9kby1tYWluLWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuXFxuI3RvZG8tbWFpbi1idG5zIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3RvZG8tbWFpbi1idG5zIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3RvZG8tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFsZS1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG59XFxuXFxuLnRvZG86aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDAuMnJlbSB2YXIoLS1saWdodC1ncmV5KTtcXG59XFxuXFxuLnRvZG8tdXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHkge1xcbiAgY29sb3I6IHZhcigtLXBpbmspO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50b2RvIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1uZXV0cmFsLWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8gaW5wdXRbdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNreS1ibHVlKTtcXG59XFxuXFxuLnRvZG8tYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWdyZXkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG59XFxuXFxuLnRvZG8taWNvbnMge1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG59XFxuXFxuLnRvZG8gYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnRvZG8tZGV0YWlscyB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbn1cXG5cXG4udG9kby1sb3dlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby5jaGVja2VkIHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1saWdodC1ncmV5KTtcXG59XFxuXFxuLnRvZG8uY2hlY2tlZCAudG9kby10aXRsZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRvZG8gLnRvZG8tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG9wYWNpdHk6IDAuODtcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWdyZXkpO1xcbiAgY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ0ZJTEwnIDAsICd3Z2h0JyAyMDAsICdHUkFEJyAwLCAnb3BzeicgNTA7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIC5wcm9qLWljb25zIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIC50b2RvLWljb25zIHtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLW92ZXJsYXkuZmxleCxcXG4jdG9kby1mb3JtLW92ZXJsYXkuZmxleCxcXG4jcHJvamVjdC1jb250YWluZXIuZmxleCxcXG4jZHJvcGRvd24tbWVudS5mbGV4LFxcbi50b2RvLWxvd2VyLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JC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LCtCQUErQjtFQUMvQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtFQUFrRTtBQUNwRTs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7Ozs7RUFLRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS13aGl0ZS1ncmV5OiAjZWJlYmViO1xcbiAgLS1wYWxlLWdyZXk6ICNlM2U5ZWI7XFxuICAtLWxpZ2h0LWdyZXk6ICNkNmQ5ZGE7XFxuICAtLWdyZXk6ICNiMmJlYzM7XFxuICAtLW5ldXRyYWwtZ3JleTogI2E3YTdhNztcXG4gIC0tbWVkaXVtLWxpZ2h0LWdyZXk6ICM2NDZhNmM7XFxuICAtLW1lZGl1bS1ncmV5OiAjNDQ0YjRkO1xcbiAgLS1kYXJrOiAjMmQzNDM2O1xcbiAgLS1za3ktYmx1ZTogIzU1YTJmMDtcXG4gIC0tbGlnaHQtYmx1ZTogIzNlOTJlNjtcXG4gIC0tYmx1ZTogIzA5ODRlMztcXG4gIC0tZGFyay1ibHVlOiAjMDA2ZmM0O1xcbiAgLS1waW5rOiAjZmY0NjQ2O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sICdzeXN0ZW0tdWknO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNzaWRlYmFyLm9wZW4gI3Byb2plY3QtYnRucy1jb250YWluZXIsXFxuI2NvbnRlbnQgPiBoZWFkZXIge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jc2lkZWJhci5vcGVuIHtcXG4gIHdpZHRoOiAyNSU7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbiAgbWF4LXdpZHRoOiA0MHJlbTtcXG59XFxuXFxuI3NpZGViYXIuY2xvc2Uge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbiNwcm9qZWN0LWJ0bnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG59XFxuXFxuI3NpZGViYXIub3BlbiAjcHJvamVjdC1idG5zLWNvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgcGFkZGluZzogMCAwLjJyZW07XFxuICBtYXJnaW46IDAgMC43cmVtIDAgMC43cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMC4xcmVtIHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4jc2lkZWJhci5vcGVuIGhlYWRlciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxufVxcblxcbiNzaWRlYmFyLmNsb3NlICNwcm9qZWN0LWJ0bnMtY29udGFpbmVyIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcXG59XFxuXFxuI3NpZGViYXIuY2xvc2UgI2NsZWFyLWFsbC1wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jcHJvamVjdC1idG5zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNwcm9qZWN0LWJ0bnMtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1za3ktYmx1ZSk7XFxufVxcblxcbiNzaWRlYmFyLmNsb3NlICNwcm9qZWN0LWJ0bnMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnByb2plY3Quc2VsZWN0ZWQsXFxuLnByb2plY3Quc2VsZWN0ZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LWJsdWUpO1xcbn1cXG5cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgaGVpZ2h0OiA2dmg7XFxuICBtaW4taGVpZ2h0OiAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjVyZW0gMC43cmVtO1xcbn1cXG5cXG4ucHJvamVjdCBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxufVxcblxcbi5wcm9qZWN0IGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tb3ZlcmxheSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLW92ZXJsYXkgaW5wdXQge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tZ3JleSk7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tb3ZlcmxheSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLW5ldXRyYWwtZ3JleSk7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tYnRucyxcXG4jdG9kby1mb3JtLWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWJ0bnMgYnV0dG9uLFxcbiN0b2RvLWZvcm0tYnRucyBidXR0b24ge1xcbiAgcGFkZGluZzogMC43cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWdyZXkpO1xcbn1cXG5cXG4jY2FuY2VsLXByb2otYnRuOmhvdmVyLFxcbiNjYW5jZWwtdG9kby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxufVxcblxcbiNzdWJtaXQtcHJvai1idG46aG92ZXIsXFxuI3N1Ym1pdC10b2RvLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3RvZG8tZm9ybS1idG5zIHtcXG4gIG1hcmdpbi10b3A6IDAuOHJlbTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjVyZW07XFxufVxcblxcbiN0b2RvLWZvcm0tb3ZlcmxheSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICB6LWluZGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdG9kby1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyNXJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI3RvZG8tZm9ybSBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0b2RvLWZvcm0gaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLWdyZXkpO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sICdzeXN0ZW0tdWknO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1ncmV5KTtcXG59XFxuXFxuI3RvZG8tZm9ybSA+IGRpdjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuM3JlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxufVxcblxcbiN0b2RvLWZvcm0gPiBkaXYgbGFiZWwge1xcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcXG59XFxuXFxuI3RvZG8tZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWdyZXkpO1xcbn1cXG5cXG4jdG9kby1mb3JtICN0b2RvLWRlc2Mge1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgbWF4LWhlaWdodDogMjByZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jc2VhcmNoLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDA7XFxuICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbiNzZWFyY2gtYmFyIHtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDY2JTtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1saWdodC1ncmV5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tZ3JleSk7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGJvcmRlcjogMC4wN3JlbSBzb2xpZCB2YXIoLS1wYWxlLWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAzcmVtO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSAuc2VhcmNoLXJlc3VsdCB7XFxuICBtYXJnaW46IDAgMC41cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1saWdodC1ncmV5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSAuc2VhcmNoLXJlc3VsdCAubWF0Y2hlZC1wcm9qZWN0IHtcXG4gIGNvbG9yOiB2YXIoLS1tZWRpdW0tbGlnaHQtZ3JleSk7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgLnNlYXJjaC1yZXN1bHQgLm1hdGNoZWQtdG9kby5jaGVja2VkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4jZHJvcGRvd24tbWVudSAuc2VhcmNoLXJlc3VsdDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcXG59XFxuXFxuI2Ryb3Bkb3duLW1lbnUgPiAuc2VhcmNoLXJlc3VsdDpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgYm9yZGVyLWJvdHRvbTogMC4wN3JlbSBzb2xpZCB2YXIoLS1wYWxlLWdyZXkpO1xcbn1cXG5cXG4jdG9kby1jb250YWluZXIge1xcbiAgcGFkZGluZzogMC4ycmVtIDEuMnJlbSAycmVtIDEuMnJlbTtcXG59XFxuXFxuI2NvbnRlbnQgPiBoZWFkZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcbn1cXG5cXG4jdG9kby1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEuNXJlbSAwIDFyZW07XFxufVxcblxcbiN0b2RvLWNvbnRhaW5lciBoZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbiN0b2RvLW1haW4tYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbn1cXG5cXG4jdG9kby1tYWluLWJ0bnMgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdG9kby1tYWluLWJ0bnMgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdG9kby1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbiAgcGFkZGluZzogMC44cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWxlLWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbn1cXG5cXG4udG9kbzpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDAgMC4ycmVtIHZhcigtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4udG9kby11cHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udG9kby1wcmlvcml0eSB7XFxuICBjb2xvcjogdmFyKC0tcGluayk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRvZG8gaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLW5ldXRyYWwtZ3JleSk7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kbyBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2t5LWJsdWUpO1xcbn1cXG5cXG4udG9kby1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8gYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtZ3JleSk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbn1cXG5cXG4udG9kby1pY29ucyB7XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWdyZXkpO1xcbn1cXG5cXG4udG9kbyBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4udG9kby1kZXRhaWxzIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IHZhcigtLW1lZGl1bS1saWdodC1ncmV5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjNyZW07XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIHdoaXRlLXNwYWNlOiBwcmU7XFxufVxcblxcbi50b2RvLWxvd2VyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvLmNoZWNrZWQgc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tbWVkaXVtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4udG9kby5jaGVja2VkIC50b2RvLXRpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udG9kbyAudG9kby10aXRsZSB7XFxuICBmb250LXdlaWdodDogNDUwO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgb3BhY2l0eTogMC44O1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGUtZ3JleSk7XFxuICBjb2xvcjogdmFyKC0tZGFyayk7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnRklMTCcgMCwgJ3dnaHQnIDIwMCwgJ0dSQUQnIDAsICdvcHN6JyA1MDtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgLnByb2otaWNvbnMge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgLnRvZG8taWNvbnMge1xcbiAgd2lkdGg6IDFyZW07XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tb3ZlcmxheS5mbGV4LFxcbiN0b2RvLWZvcm0tb3ZlcmxheS5mbGV4LFxcbiNwcm9qZWN0LWNvbnRhaW5lci5mbGV4LFxcbiNkcm9wZG93bi1tZW51LmZsZXgsXFxuLnRvZG8tbG93ZXIuZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIk5JTFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbmlsLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicGFyc2VcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3BhcnNlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic3RyaW5naWZ5XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ2MVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInYzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92Mi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92My5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInY1XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92NC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInZhbGlkYXRlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF92YWxpZGF0ZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInZlcnNpb25cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3ZlcnNpb24uZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjEuanNcIikpO1xuXG52YXIgX3YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92My5qc1wiKSk7XG5cbnZhciBfdjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Y0LmpzXCIpKTtcblxudmFyIF92NCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdjUuanNcIikpO1xuXG52YXIgX25pbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbmlsLmpzXCIpKTtcblxudmFyIF92ZXJzaW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92ZXJzaW9uLmpzXCIpKTtcblxudmFyIF92YWxpZGF0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdmFsaWRhdGUuanNcIikpO1xuXG52YXIgX3N0cmluZ2lmeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3RyaW5naWZ5LmpzXCIpKTtcblxudmFyIF9wYXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGFyc2UuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4vKlxuICogQnJvd3Nlci1jb21wYXRpYmxlIEphdmFTY3JpcHQgTUQ1XG4gKlxuICogTW9kaWZpY2F0aW9uIG9mIEphdmFTY3JpcHQgTUQ1XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYmx1ZWltcC9KYXZhU2NyaXB0LU1ENVxuICpcbiAqIENvcHlyaWdodCAyMDExLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqXG4gKiBCYXNlZCBvblxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBSU0EgRGF0YSBTZWN1cml0eSwgSW5jLiBNRDUgTWVzc2FnZVxuICogRGlnZXN0IEFsZ29yaXRobSwgYXMgZGVmaW5lZCBpbiBSRkMgMTMyMS5cbiAqIFZlcnNpb24gMi4yIENvcHlyaWdodCAoQykgUGF1bCBKb2huc3RvbiAxOTk5IC0gMjAwOVxuICogT3RoZXIgY29udHJpYnV0b3JzOiBHcmVnIEhvbHQsIEFuZHJldyBLZXBlcnQsIFlkbmFyLCBMb3N0aW5ldFxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlXG4gKiBTZWUgaHR0cDovL3BhamhvbWUub3JnLnVrL2NyeXB0L21kNSBmb3IgbW9yZSBpbmZvLlxuICovXG5mdW5jdGlvbiBtZDUoYnl0ZXMpIHtcbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobXNnLmxlbmd0aCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXNbaV0gPSBtc2cuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWQ1VG9IZXhFbmNvZGVkQXJyYXkod29yZHNUb01kNShieXRlc1RvV29yZHMoYnl0ZXMpLCBieXRlcy5sZW5ndGggKiA4KSk7XG59XG4vKlxuICogQ29udmVydCBhbiBhcnJheSBvZiBsaXR0bGUtZW5kaWFuIHdvcmRzIHRvIGFuIGFycmF5IG9mIGJ5dGVzXG4gKi9cblxuXG5mdW5jdGlvbiBtZDVUb0hleEVuY29kZWRBcnJheShpbnB1dCkge1xuICBjb25zdCBvdXRwdXQgPSBbXTtcbiAgY29uc3QgbGVuZ3RoMzIgPSBpbnB1dC5sZW5ndGggKiAzMjtcbiAgY29uc3QgaGV4VGFiID0gJzAxMjM0NTY3ODlhYmNkZWYnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoMzI7IGkgKz0gOCkge1xuICAgIGNvbnN0IHggPSBpbnB1dFtpID4+IDVdID4+PiBpICUgMzIgJiAweGZmO1xuICAgIGNvbnN0IGhleCA9IHBhcnNlSW50KGhleFRhYi5jaGFyQXQoeCA+Pj4gNCAmIDB4MGYpICsgaGV4VGFiLmNoYXJBdCh4ICYgMHgwZiksIDE2KTtcbiAgICBvdXRwdXQucHVzaChoZXgpO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cbi8qKlxuICogQ2FsY3VsYXRlIG91dHB1dCBsZW5ndGggd2l0aCBwYWRkaW5nIGFuZCBiaXQgbGVuZ3RoXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRPdXRwdXRMZW5ndGgoaW5wdXRMZW5ndGg4KSB7XG4gIHJldHVybiAoaW5wdXRMZW5ndGg4ICsgNjQgPj4+IDkgPDwgNCkgKyAxNCArIDE7XG59XG4vKlxuICogQ2FsY3VsYXRlIHRoZSBNRDUgb2YgYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3JkcywgYW5kIGEgYml0IGxlbmd0aC5cbiAqL1xuXG5cbmZ1bmN0aW9uIHdvcmRzVG9NZDUoeCwgbGVuKSB7XG4gIC8qIGFwcGVuZCBwYWRkaW5nICovXG4gIHhbbGVuID4+IDVdIHw9IDB4ODAgPDwgbGVuICUgMzI7XG4gIHhbZ2V0T3V0cHV0TGVuZ3RoKGxlbikgLSAxXSA9IGxlbjtcbiAgbGV0IGEgPSAxNzMyNTg0MTkzO1xuICBsZXQgYiA9IC0yNzE3MzM4Nzk7XG4gIGxldCBjID0gLTE3MzI1ODQxOTQ7XG4gIGxldCBkID0gMjcxNzMzODc4O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgeC5sZW5ndGg7IGkgKz0gMTYpIHtcbiAgICBjb25zdCBvbGRhID0gYTtcbiAgICBjb25zdCBvbGRiID0gYjtcbiAgICBjb25zdCBvbGRjID0gYztcbiAgICBjb25zdCBvbGRkID0gZDtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpXSwgNywgLTY4MDg3NjkzNik7XG4gICAgZCA9IG1kNWZmKGQsIGEsIGIsIGMsIHhbaSArIDFdLCAxMiwgLTM4OTU2NDU4Nik7XG4gICAgYyA9IG1kNWZmKGMsIGQsIGEsIGIsIHhbaSArIDJdLCAxNywgNjA2MTA1ODE5KTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgM10sIDIyLCAtMTA0NDUyNTMzMCk7XG4gICAgYSA9IG1kNWZmKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA3LCAtMTc2NDE4ODk3KTtcbiAgICBkID0gbWQ1ZmYoZCwgYSwgYiwgYywgeFtpICsgNV0sIDEyLCAxMjAwMDgwNDI2KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgNl0sIDE3LCAtMTQ3MzIzMTM0MSk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDddLCAyMiwgLTQ1NzA1OTgzKTtcbiAgICBhID0gbWQ1ZmYoYSwgYiwgYywgZCwgeFtpICsgOF0sIDcsIDE3NzAwMzU0MTYpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICBjID0gbWQ1ZmYoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNywgLTQyMDYzKTtcbiAgICBiID0gbWQ1ZmYoYiwgYywgZCwgYSwgeFtpICsgMTFdLCAyMiwgLTE5OTA0MDQxNjIpO1xuICAgIGEgPSBtZDVmZihhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDcsIDE4MDQ2MDM2ODIpO1xuICAgIGQgPSBtZDVmZihkLCBhLCBiLCBjLCB4W2kgKyAxM10sIDEyLCAtNDAzNDExMDEpO1xuICAgIGMgPSBtZDVmZihjLCBkLCBhLCBiLCB4W2kgKyAxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgYiA9IG1kNWZmKGIsIGMsIGQsIGEsIHhbaSArIDE1XSwgMjIsIDEyMzY1MzUzMjkpO1xuICAgIGEgPSBtZDVnZyhhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNSwgLTE2NTc5NjUxMCk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDZdLCA5LCAtMTA2OTUwMTYzMik7XG4gICAgYyA9IG1kNWdnKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTQsIDY0MzcxNzcxMyk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaV0sIDIwLCAtMzczODk3MzAyKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgNV0sIDUsIC03MDE1NTg2OTEpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxMF0sIDksIDM4MDE2MDgzKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgYiA9IG1kNWdnKGIsIGMsIGQsIGEsIHhbaSArIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgYSA9IG1kNWdnKGEsIGIsIGMsIGQsIHhbaSArIDldLCA1LCA1Njg0NDY0MzgpO1xuICAgIGQgPSBtZDVnZyhkLCBhLCBiLCBjLCB4W2kgKyAxNF0sIDksIC0xMDE5ODAzNjkwKTtcbiAgICBjID0gbWQ1Z2coYywgZCwgYSwgYiwgeFtpICsgM10sIDE0LCAtMTg3MzYzOTYxKTtcbiAgICBiID0gbWQ1Z2coYiwgYywgZCwgYSwgeFtpICsgOF0sIDIwLCAxMTYzNTMxNTAxKTtcbiAgICBhID0gbWQ1Z2coYSwgYiwgYywgZCwgeFtpICsgMTNdLCA1LCAtMTQ0NDY4MTQ2Nyk7XG4gICAgZCA9IG1kNWdnKGQsIGEsIGIsIGMsIHhbaSArIDJdLCA5LCAtNTE0MDM3ODQpO1xuICAgIGMgPSBtZDVnZyhjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTQsIDE3MzUzMjg0NzMpO1xuICAgIGIgPSBtZDVnZyhiLCBjLCBkLCBhLCB4W2kgKyAxMl0sIDIwLCAtMTkyNjYwNzczNCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDVdLCA0LCAtMzc4NTU4KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpICsgOF0sIDExLCAtMjAyMjU3NDQ2Myk7XG4gICAgYyA9IG1kNWhoKGMsIGQsIGEsIGIsIHhbaSArIDExXSwgMTYsIDE4MzkwMzA1NjIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgIGEgPSBtZDVoaChhLCBiLCBjLCBkLCB4W2kgKyAxXSwgNCwgLTE1MzA5OTIwNjApO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyA0XSwgMTEsIDEyNzI4OTMzNTMpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyA3XSwgMTYsIC0xNTU0OTc2MzIpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyAxMF0sIDIzLCAtMTA5NDczMDY0MCk7XG4gICAgYSA9IG1kNWhoKGEsIGIsIGMsIGQsIHhbaSArIDEzXSwgNCwgNjgxMjc5MTc0KTtcbiAgICBkID0gbWQ1aGgoZCwgYSwgYiwgYywgeFtpXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgIGMgPSBtZDVoaChjLCBkLCBhLCBiLCB4W2kgKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgIGIgPSBtZDVoaChiLCBjLCBkLCBhLCB4W2kgKyA2XSwgMjMsIDc2MDI5MTg5KTtcbiAgICBhID0gbWQ1aGgoYSwgYiwgYywgZCwgeFtpICsgOV0sIDQsIC02NDAzNjQ0ODcpO1xuICAgIGQgPSBtZDVoaChkLCBhLCBiLCBjLCB4W2kgKyAxMl0sIDExLCAtNDIxODE1ODM1KTtcbiAgICBjID0gbWQ1aGgoYywgZCwgYSwgYiwgeFtpICsgMTVdLCAxNiwgNTMwNzQyNTIwKTtcbiAgICBiID0gbWQ1aGgoYiwgYywgZCwgYSwgeFtpICsgMl0sIDIzLCAtOTk1MzM4NjUxKTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpXSwgNiwgLTE5ODYzMDg0NCk7XG4gICAgZCA9IG1kNWlpKGQsIGEsIGIsIGMsIHhbaSArIDddLCAxMCwgMTEyNjg5MTQxNSk7XG4gICAgYyA9IG1kNWlpKGMsIGQsIGEsIGIsIHhbaSArIDE0XSwgMTUsIC0xNDE2MzU0OTA1KTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgNV0sIDIxLCAtNTc0MzQwNTUpO1xuICAgIGEgPSBtZDVpaShhLCBiLCBjLCBkLCB4W2kgKyAxMl0sIDYsIDE3MDA0ODU1NzEpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICBjID0gbWQ1aWkoYywgZCwgYSwgYiwgeFtpICsgMTBdLCAxNSwgLTEwNTE1MjMpO1xuICAgIGIgPSBtZDVpaShiLCBjLCBkLCBhLCB4W2kgKyAxXSwgMjEsIC0yMDU0OTIyNzk5KTtcbiAgICBhID0gbWQ1aWkoYSwgYiwgYywgZCwgeFtpICsgOF0sIDYsIDE4NzMzMTMzNTkpO1xuICAgIGQgPSBtZDVpaShkLCBhLCBiLCBjLCB4W2kgKyAxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICBiID0gbWQ1aWkoYiwgYywgZCwgYSwgeFtpICsgMTNdLCAyMSwgMTMwOTE1MTY0OSk7XG4gICAgYSA9IG1kNWlpKGEsIGIsIGMsIGQsIHhbaSArIDRdLCA2LCAtMTQ1NTIzMDcwKTtcbiAgICBkID0gbWQ1aWkoZCwgYSwgYiwgYywgeFtpICsgMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgIGMgPSBtZDVpaShjLCBkLCBhLCBiLCB4W2kgKyAyXSwgMTUsIDcxODc4NzI1OSk7XG4gICAgYiA9IG1kNWlpKGIsIGMsIGQsIGEsIHhbaSArIDldLCAyMSwgLTM0MzQ4NTU1MSk7XG4gICAgYSA9IHNhZmVBZGQoYSwgb2xkYSk7XG4gICAgYiA9IHNhZmVBZGQoYiwgb2xkYik7XG4gICAgYyA9IHNhZmVBZGQoYywgb2xkYyk7XG4gICAgZCA9IHNhZmVBZGQoZCwgb2xkZCk7XG4gIH1cblxuICByZXR1cm4gW2EsIGIsIGMsIGRdO1xufVxuLypcbiAqIENvbnZlcnQgYW4gYXJyYXkgYnl0ZXMgdG8gYW4gYXJyYXkgb2YgbGl0dGxlLWVuZGlhbiB3b3Jkc1xuICogQ2hhcmFjdGVycyA+MjU1IGhhdmUgdGhlaXIgaGlnaC1ieXRlIHNpbGVudGx5IGlnbm9yZWQuXG4gKi9cblxuXG5mdW5jdGlvbiBieXRlc1RvV29yZHMoaW5wdXQpIHtcbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGxlbmd0aDggPSBpbnB1dC5sZW5ndGggKiA4O1xuICBjb25zdCBvdXRwdXQgPSBuZXcgVWludDMyQXJyYXkoZ2V0T3V0cHV0TGVuZ3RoKGxlbmd0aDgpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDg7IGkgKz0gOCkge1xuICAgIG91dHB1dFtpID4+IDVdIHw9IChpbnB1dFtpIC8gOF0gJiAweGZmKSA8PCBpICUgMzI7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuLypcbiAqIEFkZCBpbnRlZ2Vycywgd3JhcHBpbmcgYXQgMl4zMi4gVGhpcyB1c2VzIDE2LWJpdCBvcGVyYXRpb25zIGludGVybmFsbHlcbiAqIHRvIHdvcmsgYXJvdW5kIGJ1Z3MgaW4gc29tZSBKUyBpbnRlcnByZXRlcnMuXG4gKi9cblxuXG5mdW5jdGlvbiBzYWZlQWRkKHgsIHkpIHtcbiAgY29uc3QgbHN3ID0gKHggJiAweGZmZmYpICsgKHkgJiAweGZmZmYpO1xuICBjb25zdCBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgcmV0dXJuIG1zdyA8PCAxNiB8IGxzdyAmIDB4ZmZmZjtcbn1cbi8qXG4gKiBCaXR3aXNlIHJvdGF0ZSBhIDMyLWJpdCBudW1iZXIgdG8gdGhlIGxlZnQuXG4gKi9cblxuXG5mdW5jdGlvbiBiaXRSb3RhdGVMZWZ0KG51bSwgY250KSB7XG4gIHJldHVybiBudW0gPDwgY250IHwgbnVtID4+PiAzMiAtIGNudDtcbn1cbi8qXG4gKiBUaGVzZSBmdW5jdGlvbnMgaW1wbGVtZW50IHRoZSBmb3VyIGJhc2ljIG9wZXJhdGlvbnMgdGhlIGFsZ29yaXRobSB1c2VzLlxuICovXG5cblxuZnVuY3Rpb24gbWQ1Y21uKHEsIGEsIGIsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIHNhZmVBZGQoYml0Um90YXRlTGVmdChzYWZlQWRkKHNhZmVBZGQoYSwgcSksIHNhZmVBZGQoeCwgdCkpLCBzKSwgYik7XG59XG5cbmZ1bmN0aW9uIG1kNWZmKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgYyB8IH5iICYgZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWdnKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiICYgZCB8IGMgJiB+ZCwgYSwgYiwgeCwgcywgdCk7XG59XG5cbmZ1bmN0aW9uIG1kNWhoKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcbiAgcmV0dXJuIG1kNWNtbihiIF4gYyBeIGQsIGEsIGIsIHgsIHMsIHQpO1xufVxuXG5mdW5jdGlvbiBtZDVpaShhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XG4gIHJldHVybiBtZDVjbW4oYyBeIChiIHwgfmQpLCBhLCBiLCB4LCBzLCB0KTtcbn1cblxudmFyIF9kZWZhdWx0ID0gbWQ1O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5jb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xudmFyIF9kZWZhdWx0ID0ge1xuICByYW5kb21VVUlEXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHBhcnNlKHV1aWQpIHtcbiAgaWYgKCEoMCwgX3ZhbGlkYXRlLmRlZmF1bHQpKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbnZhbGlkIFVVSUQnKTtcbiAgfVxuXG4gIGxldCB2O1xuICBjb25zdCBhcnIgPSBuZXcgVWludDhBcnJheSgxNik7IC8vIFBhcnNlICMjIyMjIyMjLS4uLi4tLi4uLi0uLi4uLS4uLi4uLi4uLi4uLlxuXG4gIGFyclswXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgwLCA4KSwgMTYpKSA+Pj4gMjQ7XG4gIGFyclsxXSA9IHYgPj4+IDE2ICYgMHhmZjtcbiAgYXJyWzJdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclszXSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0jIyMjLS4uLi4tLi4uLi0uLi4uLi4uLi4uLi5cblxuICBhcnJbNF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoOSwgMTMpLCAxNikpID4+PiA4O1xuICBhcnJbNV0gPSB2ICYgMHhmZjsgLy8gUGFyc2UgLi4uLi4uLi4tLi4uLi0jIyMjLS4uLi4tLi4uLi4uLi4uLi4uXG5cbiAgYXJyWzZdID0gKHYgPSBwYXJzZUludCh1dWlkLnNsaWNlKDE0LCAxOCksIDE2KSkgPj4+IDg7XG4gIGFycls3XSA9IHYgJiAweGZmOyAvLyBQYXJzZSAuLi4uLi4uLi0uLi4uLS4uLi4tIyMjIy0uLi4uLi4uLi4uLi5cblxuICBhcnJbOF0gPSAodiA9IHBhcnNlSW50KHV1aWQuc2xpY2UoMTksIDIzKSwgMTYpKSA+Pj4gODtcbiAgYXJyWzldID0gdiAmIDB4ZmY7IC8vIFBhcnNlIC4uLi4uLi4uLS4uLi4tLi4uLi0uLi4uLSMjIyMjIyMjIyMjI1xuICAvLyAoVXNlIFwiL1wiIHRvIGF2b2lkIDMyLWJpdCB0cnVuY2F0aW9uIHdoZW4gYml0LXNoaWZ0aW5nIGhpZ2gtb3JkZXIgYnl0ZXMpXG5cbiAgYXJyWzEwXSA9ICh2ID0gcGFyc2VJbnQodXVpZC5zbGljZSgyNCwgMzYpLCAxNikpIC8gMHgxMDAwMDAwMDAwMCAmIDB4ZmY7XG4gIGFyclsxMV0gPSB2IC8gMHgxMDAwMDAwMDAgJiAweGZmO1xuICBhcnJbMTJdID0gdiA+Pj4gMjQgJiAweGZmO1xuICBhcnJbMTNdID0gdiA+Pj4gMTYgJiAweGZmO1xuICBhcnJbMTRdID0gdiA+Pj4gOCAmIDB4ZmY7XG4gIGFyclsxNV0gPSB2ICYgMHhmZjtcbiAgcmV0dXJuIGFycjtcbn1cblxudmFyIF9kZWZhdWx0ID0gcGFyc2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gcm5nO1xuLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5cbmZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG4vLyBBZGFwdGVkIGZyb20gQ2hyaXMgVmVuZXNzJyBTSEExIGNvZGUgYXRcbi8vIGh0dHA6Ly93d3cubW92YWJsZS10eXBlLmNvLnVrL3NjcmlwdHMvc2hhMS5odG1sXG5mdW5jdGlvbiBmKHMsIHgsIHksIHopIHtcbiAgc3dpdGNoIChzKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIHggJiB5IF4gfnggJiB6O1xuXG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIHggXiB5IF4gejtcblxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiB4ICYgeSBeIHggJiB6IF4geSAmIHo7XG5cbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4geCBeIHkgXiB6O1xuICB9XG59XG5cbmZ1bmN0aW9uIFJPVEwoeCwgbikge1xuICByZXR1cm4geCA8PCBuIHwgeCA+Pj4gMzIgLSBuO1xufVxuXG5mdW5jdGlvbiBzaGExKGJ5dGVzKSB7XG4gIGNvbnN0IEsgPSBbMHg1YTgyNzk5OSwgMHg2ZWQ5ZWJhMSwgMHg4ZjFiYmNkYywgMHhjYTYyYzFkNl07XG4gIGNvbnN0IEggPSBbMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSwgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NiwgMHhjM2QyZTFmMF07XG5cbiAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zdCBtc2cgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYnl0ZXMpKTsgLy8gVVRGOCBlc2NhcGVcblxuICAgIGJ5dGVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1zZy5sZW5ndGg7ICsraSkge1xuICAgICAgYnl0ZXMucHVzaChtc2cuY2hhckNvZGVBdChpKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGJ5dGVzKSkge1xuICAgIC8vIENvbnZlcnQgQXJyYXktbGlrZSB0byBBcnJheVxuICAgIGJ5dGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYnl0ZXMpO1xuICB9XG5cbiAgYnl0ZXMucHVzaCgweDgwKTtcbiAgY29uc3QgbCA9IGJ5dGVzLmxlbmd0aCAvIDQgKyAyO1xuICBjb25zdCBOID0gTWF0aC5jZWlsKGwgLyAxNik7XG4gIGNvbnN0IE0gPSBuZXcgQXJyYXkoTik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyArK2kpIHtcbiAgICBjb25zdCBhcnIgPSBuZXcgVWludDMyQXJyYXkoMTYpO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxNjsgKytqKSB7XG4gICAgICBhcnJbal0gPSBieXRlc1tpICogNjQgKyBqICogNF0gPDwgMjQgfCBieXRlc1tpICogNjQgKyBqICogNCArIDFdIDw8IDE2IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAyXSA8PCA4IHwgYnl0ZXNbaSAqIDY0ICsgaiAqIDQgKyAzXTtcbiAgICB9XG5cbiAgICBNW2ldID0gYXJyO1xuICB9XG5cbiAgTVtOIC0gMV1bMTRdID0gKGJ5dGVzLmxlbmd0aCAtIDEpICogOCAvIE1hdGgucG93KDIsIDMyKTtcbiAgTVtOIC0gMV1bMTRdID0gTWF0aC5mbG9vcihNW04gLSAxXVsxNF0pO1xuICBNW04gLSAxXVsxNV0gPSAoYnl0ZXMubGVuZ3RoIC0gMSkgKiA4ICYgMHhmZmZmZmZmZjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IE47ICsraSkge1xuICAgIGNvbnN0IFcgPSBuZXcgVWludDMyQXJyYXkoODApO1xuXG4gICAgZm9yIChsZXQgdCA9IDA7IHQgPCAxNjsgKyt0KSB7XG4gICAgICBXW3RdID0gTVtpXVt0XTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCB0ID0gMTY7IHQgPCA4MDsgKyt0KSB7XG4gICAgICBXW3RdID0gUk9UTChXW3QgLSAzXSBeIFdbdCAtIDhdIF4gV1t0IC0gMTRdIF4gV1t0IC0gMTZdLCAxKTtcbiAgICB9XG5cbiAgICBsZXQgYSA9IEhbMF07XG4gICAgbGV0IGIgPSBIWzFdO1xuICAgIGxldCBjID0gSFsyXTtcbiAgICBsZXQgZCA9IEhbM107XG4gICAgbGV0IGUgPSBIWzRdO1xuXG4gICAgZm9yIChsZXQgdCA9IDA7IHQgPCA4MDsgKyt0KSB7XG4gICAgICBjb25zdCBzID0gTWF0aC5mbG9vcih0IC8gMjApO1xuICAgICAgY29uc3QgVCA9IFJPVEwoYSwgNSkgKyBmKHMsIGIsIGMsIGQpICsgZSArIEtbc10gKyBXW3RdID4+PiAwO1xuICAgICAgZSA9IGQ7XG4gICAgICBkID0gYztcbiAgICAgIGMgPSBST1RMKGIsIDMwKSA+Pj4gMDtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IFQ7XG4gICAgfVxuXG4gICAgSFswXSA9IEhbMF0gKyBhID4+PiAwO1xuICAgIEhbMV0gPSBIWzFdICsgYiA+Pj4gMDtcbiAgICBIWzJdID0gSFsyXSArIGMgPj4+IDA7XG4gICAgSFszXSA9IEhbM10gKyBkID4+PiAwO1xuICAgIEhbNF0gPSBIWzRdICsgZSA+Pj4gMDtcbiAgfVxuXG4gIHJldHVybiBbSFswXSA+PiAyNCAmIDB4ZmYsIEhbMF0gPj4gMTYgJiAweGZmLCBIWzBdID4+IDggJiAweGZmLCBIWzBdICYgMHhmZiwgSFsxXSA+PiAyNCAmIDB4ZmYsIEhbMV0gPj4gMTYgJiAweGZmLCBIWzFdID4+IDggJiAweGZmLCBIWzFdICYgMHhmZiwgSFsyXSA+PiAyNCAmIDB4ZmYsIEhbMl0gPj4gMTYgJiAweGZmLCBIWzJdID4+IDggJiAweGZmLCBIWzJdICYgMHhmZiwgSFszXSA+PiAyNCAmIDB4ZmYsIEhbM10gPj4gMTYgJiAweGZmLCBIWzNdID4+IDggJiAweGZmLCBIWzNdICYgMHhmZiwgSFs0XSA+PiAyNCAmIDB4ZmYsIEhbNF0gPj4gMTYgJiAweGZmLCBIWzRdID4+IDggJiAweGZmLCBIWzRdICYgMHhmZl07XG59XG5cbnZhciBfZGVmYXVsdCA9IHNoYTE7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbmV4cG9ydHMudW5zYWZlU3RyaW5naWZ5ID0gdW5zYWZlU3RyaW5naWZ5O1xuXG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghKDAsIF92YWxpZGF0ZS5kZWZhdWx0KSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxudmFyIF9kZWZhdWx0ID0gc3RyaW5naWZ5O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcm5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ybmcuanNcIikpO1xuXG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gKipgdjEoKWAgLSBHZW5lcmF0ZSB0aW1lLWJhc2VkIFVVSUQqKlxuLy9cbi8vIEluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9MaW9zSy9VVUlELmpzXG4vLyBhbmQgaHR0cDovL2RvY3MucHl0aG9uLm9yZy9saWJyYXJ5L3V1aWQuaHRtbFxubGV0IF9ub2RlSWQ7XG5cbmxldCBfY2xvY2tzZXE7IC8vIFByZXZpb3VzIHV1aWQgY3JlYXRpb24gdGltZVxuXG5cbmxldCBfbGFzdE1TZWNzID0gMDtcbmxldCBfbGFzdE5TZWNzID0gMDsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCBmb3IgQVBJIGRldGFpbHNcblxuZnVuY3Rpb24gdjEob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgbGV0IGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG4gIGNvbnN0IGIgPSBidWYgfHwgbmV3IEFycmF5KDE2KTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxldCBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIGxldCBjbG9ja3NlcSA9IG9wdGlvbnMuY2xvY2tzZXEgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7IC8vIG5vZGUgYW5kIGNsb2Nrc2VxIG5lZWQgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gcmFuZG9tIHZhbHVlcyBpZiB0aGV5J3JlIG5vdFxuICAvLyBzcGVjaWZpZWQuICBXZSBkbyB0aGlzIGxhemlseSB0byBtaW5pbWl6ZSBpc3N1ZXMgcmVsYXRlZCB0byBpbnN1ZmZpY2llbnRcbiAgLy8gc3lzdGVtIGVudHJvcHkuICBTZWUgIzE4OVxuXG4gIGlmIChub2RlID09IG51bGwgfHwgY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlZWRCeXRlcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBfcm5nLmRlZmF1bHQpKCk7XG5cbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgICAgIG5vZGUgPSBfbm9kZUlkID0gW3NlZWRCeXRlc1swXSB8IDB4MDEsIHNlZWRCeXRlc1sxXSwgc2VlZEJ5dGVzWzJdLCBzZWVkQnl0ZXNbM10sIHNlZWRCeXRlc1s0XSwgc2VlZEJ5dGVzWzVdXTtcbiAgICB9XG5cbiAgICBpZiAoY2xvY2tzZXEgPT0gbnVsbCkge1xuICAgICAgLy8gUGVyIDQuMi4yLCByYW5kb21pemUgKDE0IGJpdCkgY2xvY2tzZXFcbiAgICAgIGNsb2Nrc2VxID0gX2Nsb2Nrc2VxID0gKHNlZWRCeXRlc1s2XSA8PCA4IHwgc2VlZEJ5dGVzWzddKSAmIDB4M2ZmZjtcbiAgICB9XG4gIH0gLy8gVVVJRCB0aW1lc3RhbXBzIGFyZSAxMDAgbmFuby1zZWNvbmQgdW5pdHMgc2luY2UgdGhlIEdyZWdvcmlhbiBlcG9jaCxcbiAgLy8gKDE1ODItMTAtMTUgMDA6MDApLiAgSlNOdW1iZXJzIGFyZW4ndCBwcmVjaXNlIGVub3VnaCBmb3IgdGhpcywgc29cbiAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gIC8vICgxMDAtbmFub3NlY29uZHMgb2Zmc2V0IGZyb20gbXNlY3MpIHNpbmNlIHVuaXggZXBvY2gsIDE5NzAtMDEtMDEgMDA6MDAuXG5cblxuICBsZXQgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogRGF0ZS5ub3coKTsgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuXG4gIGxldCBuc2VjcyA9IG9wdGlvbnMubnNlY3MgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubnNlY3MgOiBfbGFzdE5TZWNzICsgMTsgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuXG4gIGNvbnN0IGR0ID0gbXNlY3MgLSBfbGFzdE1TZWNzICsgKG5zZWNzIC0gX2xhc3ROU2VjcykgLyAxMDAwMDsgLy8gUGVyIDQuMi4xLjIsIEJ1bXAgY2xvY2tzZXEgb24gY2xvY2sgcmVncmVzc2lvblxuXG4gIGlmIChkdCA8IDAgJiYgb3B0aW9ucy5jbG9ja3NlcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY2xvY2tzZXEgPSBjbG9ja3NlcSArIDEgJiAweDNmZmY7XG4gIH0gLy8gUmVzZXQgbnNlY3MgaWYgY2xvY2sgcmVncmVzc2VzIChuZXcgY2xvY2tzZXEpIG9yIHdlJ3ZlIG1vdmVkIG9udG8gYSBuZXdcbiAgLy8gdGltZSBpbnRlcnZhbFxuXG5cbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH0gLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuXG5cbiAgaWYgKG5zZWNzID49IDEwMDAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXVpZC52MSgpOiBDYW4ndCBjcmVhdGUgbW9yZSB0aGFuIDEwTSB1dWlkcy9zZWNcIik7XG4gIH1cblxuICBfbGFzdE1TZWNzID0gbXNlY3M7XG4gIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgX2Nsb2Nrc2VxID0gY2xvY2tzZXE7IC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuXG4gIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwOyAvLyBgdGltZV9sb3dgXG5cbiAgY29uc3QgdGwgPSAoKG1zZWNzICYgMHhmZmZmZmZmKSAqIDEwMDAwICsgbnNlY3MpICUgMHgxMDAwMDAwMDA7XG4gIGJbaSsrXSA9IHRsID4+PiAyNCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRsID4+PiA4ICYgMHhmZjtcbiAgYltpKytdID0gdGwgJiAweGZmOyAvLyBgdGltZV9taWRgXG5cbiAgY29uc3QgdG1oID0gbXNlY3MgLyAweDEwMDAwMDAwMCAqIDEwMDAwICYgMHhmZmZmZmZmO1xuICBiW2krK10gPSB0bWggPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bWggJiAweGZmOyAvLyBgdGltZV9oaWdoX2FuZF92ZXJzaW9uYFxuXG4gIGJbaSsrXSA9IHRtaCA+Pj4gMjQgJiAweGYgfCAweDEwOyAvLyBpbmNsdWRlIHZlcnNpb25cblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjsgLy8gYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgIChQZXIgNC4yLjIgLSBpbmNsdWRlIHZhcmlhbnQpXG5cbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwOyAvLyBgY2xvY2tfc2VxX2xvd2BcblxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7IC8vIGBub2RlYFxuXG4gIGZvciAobGV0IG4gPSAwOyBuIDwgNjsgKytuKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCAoMCwgX3N0cmluZ2lmeS51bnNhZmVTdHJpbmdpZnkpKGIpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2MTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3YgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3YzNS5qc1wiKSk7XG5cbnZhciBfbWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21kNS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IHYzID0gKDAsIF92LmRlZmF1bHQpKCd2MycsIDB4MzAsIF9tZC5kZWZhdWx0KTtcbnZhciBfZGVmYXVsdCA9IHYzO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlVSTCA9IGV4cG9ydHMuRE5TID0gdm9pZCAwO1xuZXhwb3J0cy5kZWZhdWx0ID0gdjM1O1xuXG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL3N0cmluZ2lmeS5qc1wiKTtcblxudmFyIF9wYXJzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcGFyc2UuanNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzdHJpbmdUb0J5dGVzKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoc3RyKSk7IC8vIFVURjggZXNjYXBlXG5cbiAgY29uc3QgYnl0ZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGJ5dGVzLnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICB9XG5cbiAgcmV0dXJuIGJ5dGVzO1xufVxuXG5jb25zdCBETlMgPSAnNmJhN2I4MTAtOWRhZC0xMWQxLTgwYjQtMDBjMDRmZDQzMGM4JztcbmV4cG9ydHMuRE5TID0gRE5TO1xuY29uc3QgVVJMID0gJzZiYTdiODExLTlkYWQtMTFkMS04MGI0LTAwYzA0ZmQ0MzBjOCc7XG5leHBvcnRzLlVSTCA9IFVSTDtcblxuZnVuY3Rpb24gdjM1KG5hbWUsIHZlcnNpb24sIGhhc2hmdW5jKSB7XG4gIGZ1bmN0aW9uIGdlbmVyYXRlVVVJRCh2YWx1ZSwgbmFtZXNwYWNlLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBfbmFtZXNwYWNlO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gc3RyaW5nVG9CeXRlcyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lc3BhY2UgPSAoMCwgX3BhcnNlLmRlZmF1bHQpKG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaWYgKCgoX25hbWVzcGFjZSA9IG5hbWVzcGFjZSkgPT09IG51bGwgfHwgX25hbWVzcGFjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX25hbWVzcGFjZS5sZW5ndGgpICE9PSAxNikge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdOYW1lc3BhY2UgbXVzdCBiZSBhcnJheS1saWtlICgxNiBpdGVyYWJsZSBpbnRlZ2VyIHZhbHVlcywgMC0yNTUpJyk7XG4gICAgfSAvLyBDb21wdXRlIGhhc2ggb2YgbmFtZXNwYWNlIGFuZCB2YWx1ZSwgUGVyIDQuM1xuICAgIC8vIEZ1dHVyZTogVXNlIHNwcmVhZCBzeW50YXggd2hlbiBzdXBwb3J0ZWQgb24gYWxsIHBsYXRmb3JtcywgZS5nLiBgYnl0ZXMgPVxuICAgIC8vIGhhc2hmdW5jKFsuLi5uYW1lc3BhY2UsIC4uLiB2YWx1ZV0pYFxuXG5cbiAgICBsZXQgYnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNiArIHZhbHVlLmxlbmd0aCk7XG4gICAgYnl0ZXMuc2V0KG5hbWVzcGFjZSk7XG4gICAgYnl0ZXMuc2V0KHZhbHVlLCBuYW1lc3BhY2UubGVuZ3RoKTtcbiAgICBieXRlcyA9IGhhc2hmdW5jKGJ5dGVzKTtcbiAgICBieXRlc1s2XSA9IGJ5dGVzWzZdICYgMHgwZiB8IHZlcnNpb247XG4gICAgYnl0ZXNbOF0gPSBieXRlc1s4XSAmIDB4M2YgfCAweDgwO1xuXG4gICAgaWYgKGJ1Zikge1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlc1tpXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICByZXR1cm4gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShieXRlcyk7XG4gIH0gLy8gRnVuY3Rpb24jbmFtZSBpcyBub3Qgc2V0dGFibGUgb24gc29tZSBwbGF0Zm9ybXMgKCMyNzApXG5cblxuICB0cnkge1xuICAgIGdlbmVyYXRlVVVJRC5uYW1lID0gbmFtZTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gIH0gY2F0Y2ggKGVycikge30gLy8gRm9yIENvbW1vbkpTIGRlZmF1bHQgZXhwb3J0IHN1cHBvcnRcblxuXG4gIGdlbmVyYXRlVVVJRC5ETlMgPSBETlM7XG4gIGdlbmVyYXRlVVVJRC5VUkwgPSBVUkw7XG4gIHJldHVybiBnZW5lcmF0ZVVVSUQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfbmF0aXZlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9uYXRpdmUuanNcIikpO1xuXG52YXIgX3JuZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcm5nLmpzXCIpKTtcblxudmFyIF9zdHJpbmdpZnkgPSByZXF1aXJlKFwiLi9zdHJpbmdpZnkuanNcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChfbmF0aXZlLmRlZmF1bHQucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIF9uYXRpdmUuZGVmYXVsdC5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcuZGVmYXVsdCkoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gKDAsIF9zdHJpbmdpZnkudW5zYWZlU3RyaW5naWZ5KShybmRzKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gdjQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF92ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92MzUuanNcIikpO1xuXG52YXIgX3NoYSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2hhMS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmNvbnN0IHY1ID0gKDAsIF92LmRlZmF1bHQpKCd2NScsIDB4NTAsIF9zaGEuZGVmYXVsdCk7XG52YXIgX2RlZmF1bHQgPSB2NTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlZ2V4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZWdleC5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBfcmVnZXguZGVmYXVsdC50ZXN0KHV1aWQpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2YWxpZGF0ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3ZhbGlkYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi92YWxpZGF0ZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZlcnNpb24odXVpZCkge1xuICBpZiAoISgwLCBfdmFsaWRhdGUuZGVmYXVsdCkodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0ludmFsaWQgVVVJRCcpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlSW50KHV1aWQuc2xpY2UoMTQsIDE1KSwgMTYpO1xufVxuXG52YXIgX2RlZmF1bHQgPSB2ZXJzaW9uO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiaW1wb3J0IHBtIGZyb20gJy4vc2VydmljZXMvaW5pdGlhbFBNLmpzJztcbmltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tICcuL3NlcnZpY2VzL2Rpc3BsYXktY29udHJvbGxlcic7XG5pbXBvcnQgJy4uL3N0eWxlL3N0eWxlLmNzcyc7XG5cbmRpc3BsYXlDb250cm9sbGVyLnJlZnJlc2hUb2RvcyhwbSk7XG5kaXNwbGF5Q29udHJvbGxlci5yZWZyZXNoUHJvamVjdHMocG0pO1xuZGlzcGxheUNvbnRyb2xsZXIuYWN0aXZhdGVVSShwbSk7XG4iLCJpbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xuXG5jb25zdCB1dWlkID0gcmVxdWlyZSgndXVpZCcpO1xuY2xhc3MgUHJvamVjdCB7XG4gIHN0YXRpYyBQUklPUklUWV9PUkRFUiA9IFsnbm9uZScsICchJywgJyEhJywgJyEhISddO1xuXG4gICNpZDtcbiAgI25hbWU7XG4gICNhbGxUb2RvcztcblxuICBjb25zdHJ1Y3RvcihpZCA9IG51bGwsIG5hbWUgPSAnTmV3IFByb2plY3QnLCBhbGxUb2RvcyA9IFtdKSB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgdGhpcy4jaWQgPSBgcHJvamVjdC0ke3V1aWQudjQoKX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiNpZCA9IGlkO1xuICAgIH1cbiAgICB0aGlzLiNuYW1lID0gbmFtZTtcbiAgICB0aGlzLiNhbGxUb2RvcyA9IFsuLi5hbGxUb2Rvc107XG4gIH1cblxuICBzZXQgaWQoaWQpIHtcbiAgICB0aGlzLiNpZCA9IGlkO1xuICB9XG5cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLiNpZDtcbiAgfVxuXG4gIHNldCBuYW1lKG5hbWUpIHtcbiAgICB0aGlzLiNuYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiNuYW1lO1xuICB9XG5cbiAgZ2V0IHVuY2hlY2tlZFRvZG9zKCkge1xuICAgIHJldHVybiB0aGlzLiNhbGxUb2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uY2hlY2sgPT09IGZhbHNlKTtcbiAgfVxuXG4gIGdldCBjaGVja2VkVG9kb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FsbFRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5jaGVjayA9PT0gdHJ1ZSk7XG4gIH1cblxuICBzZXQgYWxsVG9kb3ModG9kb3MpIHtcbiAgICB0aGlzLiNhbGxUb2RvcyA9IFsuLi50b2Rvc107XG4gIH1cblxuICBnZXQgYWxsVG9kb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FsbFRvZG9zO1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy4jYWxsVG9kb3MgPT09IDAgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBnZXROdW1Ub2RvKCkge1xuICAgIHJldHVybiB0aGlzLiNhbGxUb2Rvcy5sZW5ndGg7XG4gIH1cblxuICBnZXROdW1DaGVja2VkKCkge1xuICAgIHJldHVybiB0aGlzLmNoZWNrZWRUb2Rvcy5sZW5ndGg7XG4gIH1cblxuICBnZXROdW1VbmNoZWNrZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5jaGVja2VkVG9kb3MubGVuZ3RoO1xuICB9XG5cbiAgZ2V0VG9kb0J5VGl0bGUodGl0bGUpIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IG1hdGNoZXMgPSBbXTtcbiAgICBmb3IgKGxldCB0b2RvIG9mIHRoaXMuI2FsbFRvZG9zKSB7XG4gICAgICBpZiAodG9kby50aXRsZSA9PT0gdGl0bGUpIHtcbiAgICAgICAgbWF0Y2hlcy5wdXNoKHRvZG8pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRUb2RvKGlkKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBUb2RvIHdpdGggSUQgJHtpZH0gY2Fubm90IGJlIGZvdW5kYCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZm9yIChsZXQgdGQgb2YgdGhpcy4jYWxsVG9kb3MpIHtcbiAgICAgIGlmICh0ZC5pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIHRkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGFkZFRvZG8odG9kbykge1xuICAgIHRoaXMuI2FsbFRvZG9zLnB1c2godG9kbyk7XG4gIH1cblxuICByZW1vdmVUb2RvKGlkKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBUb2RvIHdpdGggSUQgJHtpZH0gY2Fubm90IGJlIGZvdW5kYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuI2FsbFRvZG9zID0gdGhpcy4jYWxsVG9kb3MuZmlsdGVyKCh0ZCkgPT4gdGQuaWQgIT09IGlkKTtcbiAgfVxuXG4gIGVkaXRUb2RvKGlkLCBuZXdUaXRsZSwgbmV3RGVzYywgbmV3RGF0ZSwgbmV3UHJpb3JpdHkpIHtcbiAgICB0aGlzLmdldFRvZG8oaWQpLmVkaXQobmV3VGl0bGUsIG5ld0Rlc2MsIG5ld0RhdGUsIG5ld1ByaW9yaXR5KTtcbiAgfVxuXG4gIGNoZWNrVG9kbyhpZCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51bmNoZWNrZWRUb2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGQgPSB0aGlzLnVuY2hlY2tlZFRvZG9zW2ldO1xuICAgICAgaWYgKHRkLmlkID09PSBpZCkge1xuICAgICAgICB0ZC50b2dnbGVDaGVjaygpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1bmNoZWNrVG9kbyhpZCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkgcmV0dXJuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGVja2VkVG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRkID0gdGhpcy5jaGVja2VkVG9kb3NbaV07XG4gICAgICBpZiAodGQuaWQgPT09IGlkKSB7XG4gICAgICAgIHRkLnRvZ2dsZUNoZWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQ2hlY2tUb2RvKGlkKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSByZXR1cm47XG4gICAgY29uc3QgdGQgPSB0aGlzLmdldFRvZG8oaWQpO1xuICAgIGlmICh0ZC5jaGVjaykgdGhpcy51bmNoZWNrVG9kbyhpZCk7XG4gICAgZWxzZSB0aGlzLmNoZWNrVG9kbyhpZCk7XG4gIH1cblxuICBlcXVhbHMocHJvamVjdCkge1xuICAgIHJldHVybiB0aGlzLmlkID09PSBwcm9qZWN0LmlkO1xuICB9XG5cbiAgY2xlYXJBbGxUb2RvcygpIHtcbiAgICB0aGlzLiNhbGxUb2RvcyA9IFtdO1xuICB9XG5cbiAgY2xlYXJIaXN0b3J5KCkge1xuICAgIHRoaXMuI2FsbFRvZG9zID0gWy4uLnRoaXMudW5jaGVja2VkVG9kb3NdO1xuICB9XG5cbiAgc29ydEJ5QWRkRGF0ZUFzYygpIHtcbiAgICB0aGlzLiNhbGxUb2Rvcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gRGF0ZS5wYXJzZShhLmFkZERhdGUpIC0gRGF0ZS5wYXJzZShiLmFkZERhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgc29ydEJ5QWRkRGF0ZURlc2MoKSB7XG4gICAgdGhpcy4jYWxsVG9kb3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIERhdGUucGFyc2UoYi5hZGREYXRlKSAtIERhdGUucGFyc2UoYS5hZGREYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNvcnRCeVByaW9yaXR5QXNjKCkge1xuICAgIHRoaXMuI2FsbFRvZG9zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IHByaW9yaXR5QSA9IFByb2plY3QuUFJJT1JJVFlfT1JERVIuaW5kZXhPZihcbiAgICAgICAgYS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuICAgICAgY29uc3QgcHJpb3JpdHlCID0gUHJvamVjdC5QUklPUklUWV9PUkRFUi5pbmRleE9mKFxuICAgICAgICBiLnByaW9yaXR5LnRvTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICByZXR1cm4gcHJpb3JpdHlBIC0gcHJpb3JpdHlCO1xuICAgIH0pO1xuICB9XG5cbiAgc29ydEJ5UHJpb3JpdHlEZXNjKCkge1xuICAgIHRoaXMuI2FsbFRvZG9zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IHByaW9yaXR5QSA9IFByb2plY3QuUFJJT1JJVFlfT1JERVIuaW5kZXhPZihcbiAgICAgICAgYS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuICAgICAgY29uc3QgcHJpb3JpdHlCID0gUHJvamVjdC5QUklPUklUWV9PUkRFUi5pbmRleE9mKFxuICAgICAgICBiLnByaW9yaXR5LnRvTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICByZXR1cm4gcHJpb3JpdHlCIC0gcHJpb3JpdHlBO1xuICAgIH0pO1xuICB9XG5cbiAgc29ydEJ5RGF0ZUFzYygpIHtcbiAgICB0aGlzLiNhbGxUb2Rvcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gRGF0ZS5wYXJzZShhLmRhdGUpIC0gRGF0ZS5wYXJzZShiLmRhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgc29ydEJ5RGF0ZURlc2MoKSB7XG4gICAgdGhpcy4jYWxsVG9kb3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIERhdGUucGFyc2UoYi5kYXRlKSAtIERhdGUucGFyc2UoYS5kYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNvcnRCeVRpdGxlQXNjKCkge1xuICAgIHRoaXMuI2FsbFRvZG9zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLnRpdGxlLmxvY2FsZUNvbXBhcmUoYi50aXRsZSk7XG4gICAgfSk7XG4gIH1cblxuICBzb3J0QnlUaXRsZURlc2MgPSAoKSA9PiB7XG4gICAgdGhpcy4jYWxsVG9kb3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGIudGl0bGUubG9jYWxlQ29tcGFyZShhLnRpdGxlKTtcbiAgICB9KTtcbiAgfTtcblxuICBnZXRBc1N0cmluZygpIHtcbiAgICBsZXQgbXNnID0gYFByb2plY3QgTmFtZTogJHt0aGlzLm5hbWV9XFxuUHJvamVjdCBJRDogJHt0aGlzLmlkfVxcbmA7XG4gICAgaWYgKHRoaXMuI2FsbFRvZG9zLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jYWxsVG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbXNnICs9IGBUby1kbyAke2kgKyAxfTpcXG5gO1xuICAgICAgICBtc2cgKz0gdGhpcy4jYWxsVG9kb3NbaV0udG9TdHJpbmcoKSArICdcXG4nO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbXNnO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy4jaWQsXG4gICAgICBhbGxUb2RvczogdGhpcy4jYWxsVG9kb3MubGVuZ3RoXG4gICAgICAgID8gdGhpcy4jYWxsVG9kb3MubWFwKCh0b2RvKSA9PiB0b2RvLnRvSlNPTigpKVxuICAgICAgICA6IFtdLFxuICAgICAgbmFtZTogdGhpcy4jbmFtZSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoanNvbi5pZCwganNvbi5uYW1lKTtcbiAgICBwcm9qZWN0LiNhbGxUb2RvcyA9IGpzb24uYWxsVG9kb3MubWFwKCh0b2RvSlNPTikgPT5cbiAgICAgIFRvZG8uZnJvbUpTT04odG9kb0pTT04pXG4gICAgKTtcbiAgICByZXR1cm4gcHJvamVjdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiaW1wb3J0IHsgc2V0VGltZVpvbmUgfSBmcm9tICcuLi9zZXJ2aWNlcy91dGlsaXR5LmpzJztcbmNvbnN0IHV1aWQgPSByZXF1aXJlKCd1dWlkJyk7XG5cbmNsYXNzIFRvZG8ge1xuICAjaWQ7XG4gICN0aXRsZTtcbiAgI2Rlc2M7XG4gICNkYXRlO1xuICAjcHJpb3JpdHk7XG4gICNjaGVjaztcbiAgI2FkZERhdGU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgaWQgPSBudWxsLFxuICAgIHRpdGxlID0gJ05ldyBUb2RvJyxcbiAgICBkZXNjID0gJ05vbmUnLFxuICAgIGRhdGUgPSBzZXRUaW1lWm9uZSgpLnNsaWNlKDAsIDEwKSxcbiAgICBwcmlvcml0eSA9ICdOb25lJyxcbiAgICBjaGVjayA9IGZhbHNlLFxuICAgIGFkZERhdGUgPSBzZXRUaW1lWm9uZSgpXG4gICkge1xuICAgIC8vIEFsd2F5cyB1c2Uge30gYnJhY2tldCBhcm91bmQgaWYgZWxzZSBzdGF0ZW1lbnRzLiBJdCBtYWtlcyByZWFkaW5nIGNvZGUgZWFzeSBhbmQgbGVzcyBlcnJvciBwcm9uZS5cbiAgICBpZiAoaWQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuI2lkID0gaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2lkID0gYHRvZG8tJHt1dWlkLnY0KCl9YDtcbiAgICB9XG5cbiAgICBpZiAodGl0bGUgIT09ICcnKSB7XG4gICAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiN0aXRsZSA9ICdOZXcgVG9kbyc7XG4gICAgfVxuXG4gICAgaWYgKGRlc2MgIT09ICcnKSB7XG4gICAgICB0aGlzLiNkZXNjID0gZGVzYztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jZGVzYyA9ICdOb25lJztcbiAgICB9XG5cbiAgICB0aGlzLiNkYXRlID0gZGF0ZTtcbiAgICB0aGlzLiNwcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuI2NoZWNrID0gY2hlY2s7XG4gICAgdGhpcy4jYWRkRGF0ZSA9IGFkZERhdGU7XG4gIH1cblxuICBzZXQgaWQoaWQpIHtcbiAgICB0aGlzLiNpZCA9IGlkO1xuICB9XG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jaWQ7XG4gIH1cblxuICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICB0aGlzLiN0aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgZ2V0IHRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLiN0aXRsZTtcbiAgfVxuXG4gIHNldCBkZXNjKGRlc2MpIHtcbiAgICB0aGlzLiNkZXNjID0gZGVzYztcbiAgfVxuXG4gIGdldCBkZXNjKCkge1xuICAgIHJldHVybiB0aGlzLiNkZXNjO1xuICB9XG5cbiAgc2V0IGRhdGUoZGF0ZSkge1xuICAgIHRoaXMuI2RhdGUgPSBkYXRlO1xuICB9XG5cbiAgZ2V0IGRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2RhdGU7XG4gIH1cblxuICBzZXQgcHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICB0aGlzLiNwcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLiNwcmlvcml0eTtcbiAgfVxuXG4gIHNldCBjaGVjayhjaGVjaykge1xuICAgIHRoaXMuI2NoZWNrID0gY2hlY2s7XG4gIH1cblxuICBnZXQgY2hlY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuI2NoZWNrO1xuICB9XG5cbiAgc2V0IGFkZERhdGUoZGF0ZSkge1xuICAgIHRoaXMuI2FkZERhdGUgPSBkYXRlO1xuICB9XG5cbiAgZ2V0IGFkZERhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FkZERhdGU7XG4gIH1cblxuICB0b2dnbGVDaGVjaygpIHtcbiAgICB0aGlzLiNjaGVjayA9ICF0aGlzLiNjaGVjaztcbiAgfVxuXG4gIGVkaXQobmV3VGl0bGUsIG5ld0Rlc2MsIG5ld0RhdGUsIG5ld1ByaW9yaXR5KSB7XG4gICAgdGhpcy4jdGl0bGUgPSBuZXdUaXRsZTtcbiAgICB0aGlzLiNkZXNjID0gbmV3RGVzYztcbiAgICB0aGlzLiNkYXRlID0gbmV3RGF0ZTtcbiAgICB0aGlzLiNwcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICB9XG5cbiAgLy8gQ1I6IE5vdCByZXR1cm5pbmcgYW55dGhpbmdcbiAgZXF1YWxzKHRvZG8pIHtcbiAgICByZXR1cm4gdGhpcy4jaWQgPT09IHRvZG8uaWQ7XG4gIH1cblxuICAvLyBDUjogdG9TdHJpbmcgaXMgSmF2YXNjcmlwdCBwcm92aWRlZCwgSSB3aWxsIHRyeSB0byBub3Qgb3ZlcnJpZGUgaXQuIFVzZSBzb21ldGhpbmcgbGlrZSBnZXRBc1N0cmluZ1xuICBnZXRBc1N0cmluZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYElEOiAke3RoaXMuI2lkfVxcbmAgK1xuICAgICAgYFRpdGxlOiAke3RoaXMuI3RpdGxlfVxcbmAgK1xuICAgICAgYERlc2NyaXB0aW9uOiAke3RoaXMuI2Rlc2N9XFxuYCArXG4gICAgICBgRHVlIERhdGU6ICR7dGhpcy4jZGF0ZX1cXG5gICtcbiAgICAgIGBQcmlvcml0eTogJHt0aGlzLiNwcmlvcml0eX1cXG5gICtcbiAgICAgIGBDaGVjazogJHt0aGlzLiNjaGVja31cXG5gXG4gICAgKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuI2lkLFxuICAgICAgdGl0bGU6IHRoaXMuI3RpdGxlLFxuICAgICAgZGVzYzogdGhpcy4jZGVzYyxcbiAgICAgIGRhdGU6IHRoaXMuI2RhdGUsXG4gICAgICBwcmlvcml0eTogdGhpcy4jcHJpb3JpdHksXG4gICAgICBjaGVjazogdGhpcy4jY2hlY2ssXG4gICAgICBhZGREYXRlOiB0aGlzLiNhZGREYXRlLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIHJldHVybiBuZXcgVG9kbyhcbiAgICAgIGpzb24uaWQsXG4gICAgICBqc29uLnRpdGxlLFxuICAgICAganNvbi5kZXNjLFxuICAgICAganNvbi5kYXRlLFxuICAgICAganNvbi5wcmlvcml0eSxcbiAgICAgIGpzb24uY2hlY2ssXG4gICAgICBqc29uLmFkZERhdGVcbiAgICApO1xuICB9XG59XG5cbi8vIENSOiBFaXRoZXIgZXhwb3J0IGV2ZXJ5dGhpbmcgaGVyZSBvciBleHBvcnQgYXQgdGhlIHN0YXJ0IG9mIGNvbXBvbmVudC4gRG9uJ3QgbWl4IGJvdGhcbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCJpbXBvcnQgZG9tQ3JlYXRvciBmcm9tICcuL2RvbS1jcmVhdG9yJztcbmltcG9ydCBUb2RvIGZyb20gJy4uL21vZGVscy90b2RvJztcbmltcG9ydCBwbSBmcm9tICcuL2luaXRpYWxQTSc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi9tb2RlbHMvcHJvamVjdCc7XG5pbXBvcnQgeyBzZXRUaW1lWm9uZSB9IGZyb20gJy4uL3NlcnZpY2VzL3V0aWxpdHkuanMnO1xuXG5jb25zdCBwcm9qVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG5jb25zdCB0b2RvVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1saXN0Jyk7XG5jb25zdCBhZGRQcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0Jyk7XG5jb25zdCBwcm9qRm9ybU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtLW92ZXJsYXknKTtcbmNvbnN0IHByb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybScpO1xuY29uc3QgcHJvak5hbWVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcbmNvbnN0IGNsZWFyUHJvakJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhci1hbGwtcHJvamVjdHMnKTtcbmNvbnN0IGFkZFRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRvZG8nKTtcbmNvbnN0IGNsZWFyVG9kb3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xlYXItYWxsLXRvZG9zJyk7XG5jb25zdCB0b2RvRm9ybU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1mb3JtLW92ZXJsYXknKTtcbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybScpO1xuY29uc3QgdG9kb1RpdGxlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby10aXRsZScpO1xuY29uc3QgdG9kb0Rlc2NGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWRlc2MnKTtcbmNvbnN0IHRvZG9EYXRlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kYXRlJyk7XG5jb25zdCB0b2RvUHJpb3JpdHlGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXByaW9yaXR5Jyk7XG5jb25zdCBjYW5jZWxQcm9qRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtcHJvai1idG4nKTtcbmNvbnN0IGNhbmNlbFRvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC10b2RvLWJ0bicpO1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyJyk7XG5jb25zdCBzaWRlYmFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXItYnRuJyk7XG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtY29udGFpbmVyJyk7XG5jb25zdCBzaG93Q29tcGxldGVkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctY29tcGxldGVkJyk7XG5jb25zdCBjdXJyUHJvak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1wcm9qZWN0LW5hbWUnKTtcbmNvbnN0IHNlYXJjaEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1iYXInKTtcbmNvbnN0IGRyb3Bkb3duTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wZG93bi1tZW51Jyk7XG5jb25zdCBzb3J0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb3J0LW1lbnUnKTtcbmNvbnN0IHNvcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29ydC10b2RvJyk7XG5cbmNvbnN0IHNvcnRGdW5jdGlvbnMgPSBuZXcgTWFwKFtcbiAgWydEdWUgRGF0ZSAtIE5ldyB0byBPbGQnLCAoKSA9PiBwbS5zb3J0QnlEYXRlQXNjKCldLFxuICBbJ0R1ZSBEYXRlIC0gT2xkIHRvIE5ldycsICgpID0+IHBtLnNvcnRCeURhdGVEZXNjKCldLFxuICBbJ1ByaW9yaXR5IC0gTG93IHRvIEhpZ2gnLCAoKSA9PiBwbS5zb3J0QnlQcmlvcml0eUFzYygpXSxcbiAgWydQcmlvcml0eSAtIEhpZ2ggdG8gTG93JywgKCkgPT4gcG0uc29ydEJ5UHJpb3JpdHlEZXNjKCldLFxuICBbJ1RpdGxlIC0gQSB0byBaJywgKCkgPT4gcG0uc29ydEJ5VGl0bGVBc2MoKV0sXG4gIFsnVGl0bGUgLSBaIHRvIEEnLCAoKSA9PiBwbS5zb3J0QnlUaXRsZURlc2MoKV0sXG4gIFsnRGF0ZSBDcmVhdGVkIC0gT2xkIHRvIE5ldycsICgpID0+IHBtLnNvcnRCeUFkZERhdGVBc2MoKV0sXG4gIFsnRGF0ZSBDcmVhdGVkIC0gTmV3IHRvIE9sZCcsICgpID0+IHBtLnNvcnRCeUFkZERhdGVEZXNjKCldLFxuXSk7XG5cbmNvbnN0IEVESVQgPSAwLFxuICBBREQgPSAxO1xuXG4vLyBwcm9qZWN0TW9kZSBhbmQgdG9kb01vZGUgYXJlIHN0YXRlIHZhcmlhYmxlc1xuLy8gSSB3b3VsZCBjcmVhdGUgYSBzdGF0ZSBvYmplY3QgdG8gaG9sZCBhbGwgdGhlIHN0YXRlIHZhcmlhYmxlc1xuXG5sZXQgc3RhdGUgPSB7XG4gIHByb2plY3RNb2RlOiBBREQsXG4gIHRvZG9Nb2RlOiBBREQsXG4gIHNlbGVjdGVkVG9kbzogbnVsbCxcbiAgcHJvalRvRWRpdDogbnVsbCxcbiAgc2hvd0NvbXBsZXRlZDogZmFsc2UsXG4gIHNvcnRNb2RlOiAnRGF0ZSBDcmVhdGVkIC0gT2xkZXN0IEZpcnN0Jyxcbn07XG5cbmNvbnN0IGNsZWFyUHJvamVjdHMgPSAoKSA9PiB7XG4gIGlmIChwcm9qVWwpIHtcbiAgICBwcm9qVWwudGV4dENvbnRlbnQgPSAnJztcbiAgfVxufTtcblxuY29uc3QgY2xlYXJUb2RvcyA9ICgpID0+IHtcbiAgaWYgKHRvZG9VbCkge1xuICAgIHRvZG9VbC50ZXh0Q29udGVudCA9ICcnO1xuICB9XG59O1xuXG5jb25zdCBzaG93UHJvamVjdHMgPSAoKSA9PiB7XG4gIGlmIChwbS5pc0VtcHR5KCkpIHtcbiAgICBjdXJyUHJvak5hbWUudGV4dENvbnRlbnQgPSAnJztcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHBtLnByb2plY3RzKSB7XG4gICAgcHJvalVsLmFwcGVuZENoaWxkKGRvbUNyZWF0b3IuY3JlYXRlUHJvamVjdChwcm9qZWN0LCBwbSkpO1xuICB9XG4gIGlmIChwbS5jdXJyUHJvamVjdCkgY3VyclByb2pOYW1lLnRleHRDb250ZW50ID0gcG0uY3VyclByb2plY3QubmFtZTtcbn07XG5cbmNvbnN0IHNob3dUb2RvcyA9ICh0b2RvcykgPT4ge1xuICBpZiAoIXRvZG9VbCkgcmV0dXJuO1xuICBmb3IgKGxldCB0b2RvIG9mIHRvZG9zKSB7XG4gICAgdG9kb1VsLmFwcGVuZENoaWxkKGRvbUNyZWF0b3IuY3JlYXRlVG9kbyh0b2RvKSk7XG4gIH1cbn07XG5cbmNvbnN0IHJlZnJlc2hQcm9qZWN0cyA9ICgpID0+IHtcbiAgY2xlYXJQcm9qZWN0cygpO1xuICBzaG93UHJvamVjdHMoKTtcbn07XG5cbmNvbnN0IHJlZnJlc2hUb2RvcyA9ICgpID0+IHtcbiAgY2xlYXJUb2RvcygpO1xuICBpZiAocG0uY3VyclByb2plY3QpIHtcbiAgICBpZiAoc3RhdGUuc2hvd0NvbXBsZXRlZCkgc2hvd1RvZG9zKHBtLmN1cnJQcm9qZWN0LmFsbFRvZG9zKTtcbiAgICBlbHNlIHNob3dUb2RvcyhwbS5jdXJyUHJvamVjdC51bmNoZWNrZWRUb2Rvcyk7XG4gIH1cbn07XG5cbmNvbnN0IGFjdGl2YXRlQWRkUHJvaiA9ICgpID0+IHtcbiAgYWRkUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKHNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbG9zZScpKSB7XG4gICAgICBzaWRlYmFyQnRuLmNsaWNrKCk7XG4gICAgfVxuICAgIHN0YXRlLnByb2plY3RNb2RlID0gQUREO1xuICAgIC8vIFVzdWFsbHkgeW91IHdvdWxkIHdhbnQgdG8gdXNlIGEgY2xhc3MgdG8gc3R5bGUgdGhpcy5cbiAgICAvLyBIYXZlIGEgY2xhc3Mgd2l0aCBkaXNwbGF5OiBmbGV4LCBhbmQgYWRkIHRoYXQgY2xhc3MgdG8gdGhlIGVsZW1lbnRcbiAgICAvLyBUaGF0IHdheSBzdHlsaW5nIGxvZ2ljIGlzIHNlcGFyYXRlZCBmcm9tIHRoZSBsb2dpYyBvZiB0aGUgcHJvZ3JhbVxuICAgIHByb2pGb3JtT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdmbGV4Jyk7XG4gICAgcHJvak5hbWVGaWVsZC52YWx1ZSA9ICcnO1xuICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZVByb2pGb3JtU3VibWl0ID0gKCkgPT4ge1xuICBsZXQgcHJvak5hbWUgPSBwcm9qTmFtZUZpZWxkLnZhbHVlO1xuICBpZiAoc3RhdGUucHJvamVjdE1vZGUgPT09IEFERCkge1xuICAgIGlmIChwcm9qTmFtZSAhPT0gJycpIHBtLmFkZFByb2plY3QobmV3IFByb2plY3QobnVsbCwgcHJvak5hbWUpKTtcbiAgICBlbHNlIHBtLmFkZFByb2plY3QobmV3IFByb2plY3QoKSk7XG4gIH0gZWxzZSBpZiAoc3RhdGUucHJvamVjdE1vZGUgPT09IEVESVQpIHtcbiAgICBpZiAoc3RhdGUucHJvalRvRWRpdCkge1xuICAgICAgcG0uZWRpdFByb2plY3Qoc3RhdGUucHJvalRvRWRpdC5pZCwgcHJvak5hbWUpO1xuICAgICAgc3RhdGUucHJvalRvRWRpdCA9IG51bGw7XG4gICAgfVxuICB9XG4gIHByb2pGb3JtT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdmbGV4Jyk7XG4gIHJlZnJlc2hQcm9qZWN0cygpO1xuICByZWZyZXNoVG9kb3MoKTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlUHJvakZvcm0gPSAoKSA9PiB7XG4gIHByb2pGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhhbmRsZVByb2pGb3JtU3VibWl0KCk7XG4gIH0pO1xuXG4gIHByb2pGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBoYW5kbGVQcm9qRm9ybVN1Ym1pdCgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZUNhbmNlbFByb2pGb3JtID0gKCkgPT4ge1xuICBjYW5jZWxQcm9qRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb2pGb3JtT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4Jyk7XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVQcm9qRXZlbnQgPSAoKSA9PiB7XG4gIHByb2pVbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSAmJiB0YXJnZXQuaWQpIHtcbiAgICAgIHBtLmN1cnJQcm9qZWN0ID0gcG0uZ2V0UHJvamVjdCh0YXJnZXQuaWQpO1xuICAgICAgcmVmcmVzaFByb2plY3RzKCk7XG4gICAgICByZWZyZXNoVG9kb3MoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVDbGVhckFsbFByb2ogPSAoKSA9PiB7XG4gIGNsZWFyUHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcG0uY2xlYXJBbGxQcm9qZWN0cygpO1xuICAgIHJlZnJlc2hQcm9qZWN0cygpO1xuICAgIHJlZnJlc2hUb2RvcygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlQ2xlYXJQcm9qID0gKCkgPT4ge1xuICBwcm9qVWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmIChcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NsZWFyLXByb2plY3QnKSB8fFxuICAgICAgKHRhcmdldC5wYXJlbnROb2RlICE9PSBudWxsICYmXG4gICAgICAgIHRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnY2xlYXItcHJvamVjdCcpKVxuICAgICkge1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NsZWFyLXByb2plY3QnKSkge1xuICAgICAgICBwbS5yZW1vdmVQcm9qZWN0KHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG0ucmVtb3ZlUHJvamVjdCh0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuICAgICAgfVxuICAgICAgcmVmcmVzaFByb2plY3RzKCk7XG4gICAgICByZWZyZXNoVG9kb3MoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVFZGl0UHJvaiA9ICgpID0+IHtcbiAgcHJvalVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LXByb2plY3QnKSB8fFxuICAgICAgKHRhcmdldC5wYXJlbnROb2RlICE9PSBudWxsICYmXG4gICAgICAgIHRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZWRpdC1wcm9qZWN0JykpXG4gICAgKSB7XG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdC1wcm9qZWN0JykpIHtcbiAgICAgICAgc3RhdGUucHJvalRvRWRpdCA9IHBtLmdldFByb2plY3QodGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZS5wcm9qVG9FZGl0ID0gcG0uZ2V0UHJvamVjdChcbiAgICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHN0YXRlLnByb2plY3RNb2RlID0gRURJVDtcbiAgICAgIHByb2pGb3JtT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdmbGV4Jyk7XG4gICAgICBsZXQgb2xkTmFtZSA9IHN0YXRlLnByb2pUb0VkaXQubmFtZTtcbiAgICAgIHByb2pOYW1lRmllbGQudmFsdWUgPSBvbGROYW1lO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBzaG93VG9kb0RldGFpbCA9ICh0b2RvTGkpID0+IHtcbiAgdG9kb0xpLnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxvd2VyJykuY2xhc3NMaXN0LnRvZ2dsZSgnZmxleCcpO1xufTtcblxuY29uc3QgYWN0aXZhdGVUb2RvRXZlbnQgPSAoKSA9PiB7XG4gIHRvZG9VbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgdG9kbyA9IHRhcmdldC5jbG9zZXN0KCcudG9kbycpO1xuICAgIGNvbnN0IHRvZG9UaXRsZSA9IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJy50b2RvLXRpdGxlJyk7XG4gICAgY29uc3QgaXNDaGVja2JveCA9IHRhcmdldC50eXBlID09PSAnY2hlY2tib3gnO1xuICAgIGNvbnN0IGlzQnV0dG9uID0gdGFyZ2V0LnRhZ05hbWUgPT09ICdCVVRUT04nO1xuICAgIGNvbnN0IGlzU1ZHID0gdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xuXG4gICAgaWYgKCh0b2RvIHx8IHRvZG9UaXRsZSkgJiYgIWlzQ2hlY2tib3ggJiYgIWlzQnV0dG9uICYmICFpc1NWRykge1xuICAgICAgbGV0IHRvZG9MaSA9IHRvZG8gfHwgdG9kb1RpdGxlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgc2hvd1RvZG9EZXRhaWwodG9kb0xpKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVDaGVja1RvZG8gPSAoKSA9PiB7XG4gIHRvZG9VbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrLXRvZG8nKSkge1xuICAgICAgcG0udG9nZ2xlQ2hlY2tUb2RvKHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG4gICAgICByZWZyZXNoVG9kb3MoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVDbGVhclRvZG8gPSAoKSA9PiB7XG4gIHRvZG9VbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NsZWFyLXRvZG8nKSkge1xuICAgICAgcG0ucmVtb3ZlVG9kbyh0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xuICAgICAgcmVmcmVzaFRvZG9zKCk7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NsZWFyLXRvZG8nKSkge1xuICAgICAgcG0ucmVtb3ZlVG9kbyh0YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XG4gICAgICByZWZyZXNoVG9kb3MoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVBZGRUb2RvID0gKCkgPT4ge1xuICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzdGF0ZS50b2RvTW9kZSA9IEFERDtcbiAgICB0b2RvRm9ybU92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xuICAgIHRvZG9UaXRsZUZpZWxkLnZhbHVlID0gJyc7XG4gICAgdG9kb0Rlc2NGaWVsZC52YWx1ZSA9ICcnO1xuICAgIHRvZG9EYXRlRmllbGQudmFsdWUgPSBzZXRUaW1lWm9uZSgpLnNsaWNlKDAsIDEwKTtcbiAgICB0b2RvUHJpb3JpdHlGaWVsZC52YWx1ZSA9ICdOb25lJztcbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZUVkaXRUb2RvID0gKCkgPT4ge1xuICB0b2RvVWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGlmIChcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtdG9kbycpIHx8XG4gICAgICB0YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtdG9kbycpXG4gICAgKSB7XG4gICAgICBzdGF0ZS50b2RvTW9kZSA9IEVESVQ7XG4gICAgICB0b2RvRm9ybU92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtdG9kbycpKVxuICAgICAgICBzdGF0ZS5zZWxlY3RlZFRvZG8gPSBwbS5nZXRUb2RvKFxuICAgICAgICAgIHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZFxuICAgICAgICApO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdGVkVG9kbyA9IHBtLmdldFRvZG8oXG4gICAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9sZFRpdGxlID0gc3RhdGUuc2VsZWN0ZWRUb2RvLnRpdGxlO1xuICAgICAgY29uc3Qgb2xkRGVzYyA9IHN0YXRlLnNlbGVjdGVkVG9kby5kZXNjO1xuICAgICAgY29uc3Qgb2xkRGF0ZSA9IHN0YXRlLnNlbGVjdGVkVG9kby5kYXRlO1xuICAgICAgY29uc3Qgb2xkUHJpb3JpdHkgPSBzdGF0ZS5zZWxlY3RlZFRvZG8ucHJpb3JpdHk7XG4gICAgICB0b2RvVGl0bGVGaWVsZC52YWx1ZSA9IG9sZFRpdGxlO1xuICAgICAgaWYgKG9sZERlc2MgIT09ICdOb25lJykge1xuICAgICAgICB0b2RvRGVzY0ZpZWxkLnZhbHVlID0gb2xkRGVzYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZG9EZXNjRmllbGQudmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICAgIHRvZG9EYXRlRmllbGQudmFsdWUgPSBvbGREYXRlO1xuICAgICAgdG9kb1ByaW9yaXR5RmllbGQudmFsdWUgPSBvbGRQcmlvcml0eTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlVG9kb0Zvcm1TdWJtaXQgPSAoKSA9PiB7XG4gIGxldCB0aXRsZSA9IHRvZG9UaXRsZUZpZWxkLnZhbHVlO1xuICBsZXQgZGVzYyA9IHRvZG9EZXNjRmllbGQudmFsdWU7XG4gIGxldCBkYXRlID0gdG9kb0RhdGVGaWVsZC52YWx1ZTtcbiAgbGV0IHByaW9yaXR5ID0gdG9kb1ByaW9yaXR5RmllbGQudmFsdWU7XG4gIGlmIChzdGF0ZS50b2RvTW9kZSA9PT0gQUREKSB7XG4gICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyhudWxsLCB0aXRsZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xuICAgIHBtLmFkZFRvZG8obmV3VG9kbyk7XG4gIH0gZWxzZSBpZiAoc3RhdGUudG9kb01vZGUgPT09IEVESVQpIHtcbiAgICBpZiAoc3RhdGUuc2VsZWN0ZWRUb2RvKSB7XG4gICAgICBkZXNjID0gZGVzYyA9PT0gJycgPyAnTm9uZScgOiBkZXNjO1xuICAgICAgcG0uZWRpdFRvZG8oc3RhdGUuc2VsZWN0ZWRUb2RvLmlkLCB0aXRsZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgc3RhdGUuc2VsZWN0ZWRUb2RvID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgcmVmcmVzaFRvZG9zKCk7XG4gIHRvZG9Gb3JtT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdmbGV4Jyk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZVRvZG9Gb3JtID0gKCkgPT4ge1xuICB0b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBoYW5kbGVUb2RvRm9ybVN1Ym1pdCgpO1xuICB9KTtcbiAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKCFlLnNoaWZ0S2V5ICYmIGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGhhbmRsZVRvZG9Gb3JtU3VibWl0KCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlQ2FuY2VsVG9kb0Zvcm0gPSAoKSA9PiB7XG4gIGNhbmNlbFRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9kb0Zvcm1PdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgnKTtcbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZVRvZG9Gb3JtVGV4dGJveCA9ICgpID0+IHtcbiAgdG9kb0Rlc2NGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5zaGlmdEtleSAmJiBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBjb25zdCBjdXJyZW50VmFsID0gdGhpcy52YWx1ZTtcbiAgICAgIGNvbnN0IGN1cnNvclBvcyA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICBjb25zdCBuZXdWYWwgPVxuICAgICAgICBjdXJyZW50VmFsLnN1YnN0cmluZygwLCBjdXJzb3JQb3MpICtcbiAgICAgICAgJ1xcbicgK1xuICAgICAgICBjdXJyZW50VmFsLnN1YnN0cmluZyhjdXJzb3JQb3MpO1xuICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbDtcbiAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLnNlbGVjdGlvbkVuZCA9IGN1cnNvclBvcyArIDE7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVDbGVhckFsbFRvZG9zID0gKCkgPT4ge1xuICBjbGVhclRvZG9zQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwbS5jbGVhckN1cnJlbnRQcm9qZWN0KCk7XG4gICAgcmVmcmVzaFRvZG9zKCk7XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVTaWRlYmFyQnRuID0gKCkgPT4ge1xuICBzaWRlYmFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2ZsZXgnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ2Nsb3NlJyk7XG4gIH0pO1xufTtcblxuY29uc3QgdG9nZ2xlU2hvd0NvbXBsZXRlZGJ0biA9ICgpID0+IHtcbiAgaWYgKHN0YXRlLnNob3dDb21wbGV0ZWQpIHtcbiAgICBzaG93Q29tcGxldGVkQnRuLnRleHRDb250ZW50ID0gJ0hpZGUgQ29tcGxldGVkJztcbiAgfSBlbHNlIHtcbiAgICBzaG93Q29tcGxldGVkQnRuLnRleHRDb250ZW50ID0gJ1Nob3cgQ29tcGxldGVkJztcbiAgfVxufTtcblxuY29uc3QgYWN0aXZhdGVTaG93Q29tcGxldGVkID0gKCkgPT4ge1xuICBzaG93Q29tcGxldGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzdGF0ZS5zaG93Q29tcGxldGVkID0gIXN0YXRlLnNob3dDb21wbGV0ZWQ7XG4gICAgdG9nZ2xlU2hvd0NvbXBsZXRlZGJ0bigpO1xuICAgIHJlZnJlc2hUb2RvcygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlU2VhcmNoQmFyID0gKCkgPT4ge1xuICBzZWFyY2hGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBkcm9wZG93bk1lbnUudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb25zdCBzZWFyY2hTdHIgPSBzZWFyY2hGaWVsZC52YWx1ZTtcbiAgICBpZiAoc2VhcmNoU3RyKSB7XG4gICAgICBsZXQgbWF0Y2hlcyA9IHBtLnNlYXJjaFRvZG9CeVRpdGxlKHNlYXJjaFN0cik7XG4gICAgICBpZiAobWF0Y2hlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgZm9yIChsZXQgbWF0Y2ggb2YgbWF0Y2hlcykge1xuICAgICAgICAgIGRyb3Bkb3duTWVudS5hcHBlbmRDaGlsZChkb21DcmVhdG9yLmNyZWF0ZVJlc3VsdERpdihtYXRjaCkpO1xuICAgICAgICB9XG4gICAgICAgIGRyb3Bkb3duTWVudS5jbGFzc0xpc3QuYWRkKCdmbGV4Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcm9wZG93bk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnZmxleCcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkcm9wZG93bk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnZmxleCcpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmF0ZURyb3Bkb3duTWVudSA9ICgpID0+IHtcbiAgZHJvcGRvd25NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VhcmNoLXJlc3VsdCcpKSB7XG4gICAgICBsZXQgcHJvaklkID0gdGFyZ2V0LnZhbHVlLnNwbGl0KCc6JylbMF07XG4gICAgICBsZXQgdG9kb0lkID0gdGFyZ2V0LnZhbHVlLnNwbGl0KCc6JylbMV07XG4gICAgICBwbS5jdXJyUHJvamVjdCA9IHBtLmdldFByb2plY3QocHJvaklkKTtcbiAgICAgIGlmIChwbS5nZXRUb2RvKHRvZG9JZCkuY2hlY2spIHtcbiAgICAgICAgc3RhdGUuc2hvd0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICB0b2dnbGVTaG93Q29tcGxldGVkYnRuKCk7XG4gICAgICByZWZyZXNoUHJvamVjdHMoKTtcbiAgICAgIHJlZnJlc2hUb2RvcygpO1xuICAgICAgY29uc3QgdG9kb0xpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dG9kb0lkfWApO1xuICAgICAgc2hvd1RvZG9EZXRhaWwodG9kb0xpKTtcbiAgICB9XG4gICAgZHJvcGRvd25NZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgnKTtcbiAgICBzZWFyY2hGaWVsZC52YWx1ZSA9ICcnO1xuICB9KTtcbn07XG5cbmNvbnN0IGhpZGVEcm9wRG93bk1lbnUgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAoXG4gICAgICAhdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VhcmNoLXJlc3VsdCcpICYmXG4gICAgICB0YXJnZXQuaWQgIT09ICdzZWFyY2gtYmFyJyAmJlxuICAgICAgdGFyZ2V0LmlkICE9PSAnZHJvcGRvd24tbWVudSdcbiAgICApXG4gICAgICBkcm9wZG93bk1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnZmxleCcpO1xuICAgIHNlYXJjaEZpZWxkLnZhbHVlID0gJyc7XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVTb3J0TWVudSA9ICgpID0+IHtcbiAgc29ydE1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICBzdGF0ZS5zb3J0TW9kZSA9IGUudGFyZ2V0LnZhbHVlO1xuICB9KTtcbn07XG5cbmNvbnN0IGFjdGl2YXRlU29ydEJ0biA9ICgpID0+IHtcbiAgc29ydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgc29ydEZ1bmN0aW9ucy5nZXQoc3RhdGUuc29ydE1vZGUpKCk7XG4gICAgcmVmcmVzaFRvZG9zKCk7XG4gIH0pO1xufTtcblxuY29uc3QgYWN0aXZhdGVVSSA9ICgpID0+IHtcbiAgYWN0aXZhdGVBZGRQcm9qKCk7XG4gIGFjdGl2YXRlQ2FuY2VsUHJvakZvcm0oKTtcbiAgYWN0aXZhdGVQcm9qRm9ybSgpO1xuICBhY3RpdmF0ZVByb2pFdmVudCgpO1xuICBhY3RpdmF0ZUNsZWFyQWxsUHJvaigpO1xuICBhY3RpdmF0ZUNsZWFyUHJvaigpO1xuICBhY3RpdmF0ZUVkaXRQcm9qKCk7XG4gIGFjdGl2YXRlVG9kb0V2ZW50KCk7XG4gIGFjdGl2YXRlQ2hlY2tUb2RvKCk7XG4gIGFjdGl2YXRlQ2xlYXJUb2RvKCk7XG4gIGFjdGl2YXRlQWRkVG9kbygpO1xuICBhY3RpdmF0ZUVkaXRUb2RvKCk7XG4gIGFjdGl2YXRlVG9kb0Zvcm0oKTtcbiAgYWN0aXZhdGVDYW5jZWxUb2RvRm9ybSgpO1xuICBhY3RpdmF0ZUNsZWFyQWxsVG9kb3MoKTtcbiAgYWN0aXZhdGVTaWRlYmFyQnRuKCk7XG4gIGFjdGl2YXRlU2hvd0NvbXBsZXRlZCgpO1xuICBhY3RpdmF0ZVNlYXJjaEJhcigpO1xuICBhY3RpdmF0ZURyb3Bkb3duTWVudSgpO1xuICBoaWRlRHJvcERvd25NZW51KCk7XG4gIGFjdGl2YXRlVG9kb0Zvcm1UZXh0Ym94KCk7XG4gIGFjdGl2YXRlU29ydE1lbnUoKTtcbiAgYWN0aXZhdGVTb3J0QnRuKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlZnJlc2hQcm9qZWN0cyxcbiAgcmVmcmVzaFRvZG9zLFxuICBhY3RpdmF0ZVVJLFxufTtcbiIsImNvbnN0IFNWR19ERUZBVUxUX0NMQVNTID0gJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3QsIHBtKSA9PiB7XG4gIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICBsaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gIGxpLmlkID0gYCR7cHJvamVjdC5pZH1gO1xuICBsaS5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0QnRuc0RpdigpKTtcbiAgaWYgKHBtLmN1cnJQcm9qZWN0ICYmIGxpLmlkID09PSBwbS5jdXJyUHJvamVjdC5pZCkge1xuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gIH1cbiAgcmV0dXJuIGxpO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEJ0bnNEaXYgPSAoKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdlRhZygncHJvamVjdC1idG5zJyk7XG4gIGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVCdG5UYWcoJ2VkaXQtcHJvamVjdCcsICdlZGl0X25vdGUnLCAncHJvai1pY29ucycpO1xuICBjb25zdCBjbGVhckJ0biA9IGNyZWF0ZUJ0blRhZygnY2xlYXItcHJvamVjdCcsICdjbG9zZScsICdwcm9qLWljb25zJyk7XG4gIGRpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNsZWFyQnRuKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvZG8gPSAodG9kbykgPT4ge1xuICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gIGxpLmlkID0gYCR7dG9kby5pZH1gO1xuICBjb25zdCB1cHBlckRpdiA9IGNyZWF0ZURpdlRhZygndG9kby11cHBlcicpO1xuICB1cHBlckRpdi5hcHBlbmRDaGlsZChjcmVhdGVJbmZvRGl2KHRvZG8pKTtcbiAgdXBwZXJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0J0bnNEaXYoKSk7XG4gIGxpLmFwcGVuZENoaWxkKHVwcGVyRGl2KTtcbiAgY29uc3QgbG93ZXJEaXYgPSBjcmVhdGVEaXZUYWcoJ3RvZG8tbG93ZXInKTtcbiAgbG93ZXJEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0RldGFpbHNEaXYodG9kbykpO1xuICBsaS5hcHBlbmRDaGlsZChsb3dlckRpdik7XG4gIGlmICh0b2RvLmNoZWNrKSBsaS5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gIHJldHVybiBsaTtcbn07XG5cbmNvbnN0IGNyZWF0ZUluZm9EaXYgPSAodG9kbykgPT4ge1xuICBjb25zdCBkaXYgPSBjcmVhdGVEaXZUYWcoJ3RvZG8taW5mbycpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0NoZWNrKHRvZG8pKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRvZG9Qcmlvcml0eSh0b2RvKSk7XG4gIGRpdi5hcHBlbmRDaGlsZChjcmVhdGVTcGFuVGFnKHRvZG8udGl0bGUsICd0b2RvLXRpdGxlJykpO1xuICByZXR1cm4gZGl2O1xufTtcblxuY29uc3QgY3JlYXRlVG9kb0J0bnNEaXYgPSAoKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdlRhZygndG9kby1idG5zJyk7XG4gIGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVCdG5UYWcoJ2VkaXQtdG9kbycsICdlZGl0X25vdGUnLCAndG9kby1pY29ucycpO1xuICBjb25zdCBjbG9zZUJ0biA9IGNyZWF0ZUJ0blRhZygnY2xlYXItdG9kbycsICdjbG9zZScsICd0b2RvLWljb25zJyk7XG4gIGRpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvZG9EZXRhaWxzRGl2ID0gKHRvZG8pID0+IHtcbiAgY29uc3QgZGl2ID0gY3JlYXRlRGl2VGFnKCd0b2RvLWRldGFpbHMnKTtcbiAgY29uc3QgZGVzYyA9IGNyZWF0ZVBUYWcoYERlc2NyaXB0aW9uOlxcdCR7dG9kby5kZXNjfWAsICd0b2RvLWRlc2MnKTtcbiAgY29uc3QgZGF0ZSA9IGNyZWF0ZVBUYWcoYER1ZSBkYXRlOlxcdCR7dG9kby5kYXRlfWAsICd0b2RvLWRhdGUnKTtcbiAgZGl2LmFwcGVuZENoaWxkKGRlc2MpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gIHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBjcmVhdGVUb2RvQ2hlY2sgPSAodG9kbykgPT4ge1xuICBsZXQgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgY2hlY2suY2xhc3NMaXN0LmFkZCgnY2hlY2stdG9kbycpO1xuICBjaGVjay5jaGVja2VkID0gdG9kby5jaGVjaztcbiAgcmV0dXJuIGNoZWNrO1xufTtcblxuY29uc3QgY3JlYXRlVG9kb1ByaW9yaXR5ID0gKHRvZG8pID0+IHtcbiAgbGV0IHByaW9yaXR5O1xuICBpZiAodG9kby5wcmlvcml0eSA9PT0gJ05vbmUnKSBwcmlvcml0eSA9IGNyZWF0ZVNwYW5UYWcoJycsICd0b2RvLXByaW9yaXR5Jyk7XG4gIGVsc2UgcHJpb3JpdHkgPSBjcmVhdGVTcGFuVGFnKHRvZG8ucHJpb3JpdHksICd0b2RvLXByaW9yaXR5Jyk7XG4gIHJldHVybiBwcmlvcml0eTtcbn07XG5cbmNvbnN0IGNyZWF0ZVJlc3VsdERpdiA9IChtYXRjaCkgPT4ge1xuICBjb25zdCBvcHRpb24gPSBjcmVhdGVEaXZUYWcoXG4gICAgJ3NlYXJjaC1yZXN1bHQnLFxuICAgIGAke21hdGNoLm1hdGNoZWRQcm9qLmlkfToke21hdGNoLm1hdGNoZWRUb2RvLmlkfWBcbiAgKTtcblxuICBjb25zdCB0b2RvVGl0bGUgPSBjcmVhdGVQVGFnKG1hdGNoLm1hdGNoZWRUb2RvLnRpdGxlLCAnbWF0Y2hlZC10b2RvJyk7XG4gIGlmIChtYXRjaC5tYXRjaGVkVG9kby5jaGVjaykge1xuICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gIH1cbiAgY29uc3QgcHJvamVjdE5hbWUgPSBjcmVhdGVQVGFnKG1hdGNoLm1hdGNoZWRQcm9qLm5hbWUsICdtYXRjaGVkLXByb2plY3QnKTtcblxuICBvcHRpb24uYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgb3B0aW9uLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICByZXR1cm4gb3B0aW9uO1xufTtcblxuY29uc3QgY3JlYXRlU1ZHU3BhblRhZyA9ICh0ZXh0LCBkZWZhdWx0Q2xhc3MsIGN1c3RvbUNsYXNzKSA9PiB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZChkZWZhdWx0Q2xhc3MsIGN1c3RvbUNsYXNzKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIHJldHVybiBzcGFuO1xufTtcblxuY29uc3QgY3JlYXRlUFRhZyA9ICh0ZXh0LCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHAudGV4dENvbnRlbnQgPSB0ZXh0O1xuICByZXR1cm4gcDtcbn07XG5cbmNvbnN0IGNyZWF0ZVNwYW5UYWcgPSAodGV4dCwgY2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBzcGFuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIHNwYW47XG59O1xuXG5jb25zdCBjcmVhdGVCdG5UYWcgPSAoY2xhc3NOYW1lLCBpY29uTmFtZSwgc3ZnQ2xhc3NOYW1lKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICBjb25zdCBpY29uID0gY3JlYXRlU1ZHU3BhblRhZyhpY29uTmFtZSwgU1ZHX0RFRkFVTFRfQ0xBU1MsIHN2Z0NsYXNzTmFtZSk7XG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZURpdlRhZyA9IChjbGFzc05hbWUsIHZhbCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIGRpdi52YWx1ZSA9IHZhbCA/IHZhbCA6ICcnO1xuICByZXR1cm4gZGl2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVQcm9qZWN0LFxuICBjcmVhdGVUb2RvLFxuICBjcmVhdGVSZXN1bHREaXYsXG59O1xuIiwiaW1wb3J0IFByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmxldCBwbSA9IG5ldyBQcm9qZWN0TWFuYWdlcigpO1xuLy8gVGhpcyBjb3VsZCBiZSBoYW5kbGVkIGluIFByb2plY3RNYW5hZ2VyIGNsYXNzXG4vLyBjcmVhdGVQcm9qZWN0KCkgd2lsbCBoYW5kbGUgY3JlYXRlIGEgbmV3IHByb2plY3QgYW5kIGFkZCBpdCB0byB0aGUgcHJvamVjdCBtYW5hZ2VyXG4vLyBwbS5jcmVhdGVQcm9qZWN0KCdUbyBkbyBsaXN0Jyk7XG5pZiAocG0uaXNFbXB0eSgpKSB7XG4gIHBtLmNyZWF0ZVByb2plY3QoJ05ldyBQcm9qZWN0Jyk7XG59XG5leHBvcnQgZGVmYXVsdCBwbTtcbiIsImNvbnN0IHN0b3JhZ2VBdmFpbGFibGUgPSAodHlwZSkgPT4ge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGBFcnJvciB0ZXN0aW5nIGZvciBzdG9yYWdlIGF2YWlsYWJpbGl0eTogJHtlfWApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuY29uc3QgbG9hZExvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNlcmlhbGl6ZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIGlmIChzZXJpYWxpemVkRGF0YSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgY29uc3QgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2Uoc2VyaWFsaXplZERhdGEpO1xuICAgICAgcmV0dXJuIHBhcnNlZERhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3IgbG9hZGluZyBmcm9tIGxvY2FsIHN0b3JhZ2U6ICR7ZXJyfWApO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ0xvY2FsIHN0b3JhZ2Ugbm90IGF2YWlsYWJsZScpO1xuICB9XG59O1xuXG5jb25zdCBzYXZlTG9jYWxTdG9yYWdlID0gKGtleSwgZGF0YSkgPT4ge1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2VyaWFsaXplZERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgc2VyaWFsaXplZERhdGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coYEVycm9yIHNhdmluZyB0byBsb2NhbCBzdG9yYWdlOiAke2Vycn1gKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ0xvY2FsIHN0b3JhZ2Ugbm90IGF2YWlsYWJsZScpO1xuICB9XG59O1xuXG5jb25zdCBjbGVhckxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgZXJyb3IgY2xlYXJpbmcgbG9jYWwgc3RvcmFnZTogJHtlLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdMb2NhbCBzdG9yYWdlIG5vdCBhdmFpbGFibGUnKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgbG9hZExvY2FsU3RvcmFnZSwgc2F2ZUxvY2FsU3RvcmFnZSwgY2xlYXJMb2NhbFN0b3JhZ2UgfTtcbiIsImltcG9ydCB7IGxvYWRMb2NhbFN0b3JhZ2UsIHNhdmVMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vbW9kZWxzL3Byb2plY3QnO1xuXG5jbGFzcyBQcm9qZWN0TWFuYWdlciB7XG4gICNwcm9qZWN0cztcbiAgI2N1cnJQcm9qZWN0O1xuICAjc3RvcmFnZUtleTtcblxuICBjb25zdHJ1Y3RvcihzdG9yYWdlS2V5ID0gJ3Byb2plY3RNYW5hZ2VyJywgLi4ucHJvamVjdHMpIHtcbiAgICB0aGlzLiNzdG9yYWdlS2V5ID0gc3RvcmFnZUtleTtcbiAgICBsZXQgc3RvcmVkRGF0YTtcbiAgICB0cnkge1xuICAgICAgc3RvcmVkRGF0YSA9IGxvYWRMb2NhbFN0b3JhZ2UodGhpcy4jc3RvcmFnZUtleSk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgRXJyb3IgbG9hZGluZyBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZSBmb3Iga2V5IFwiJHtcbiAgICAgICAgICB0aGlzLiNzdG9yYWdlS2V5XG4gICAgICAgIH1cIjogJHtlcnJ9YFxuICAgICAgKTtcbiAgICAgIHN0b3JlZERhdGEgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoc3RvcmVkRGF0YSkge1xuICAgICAgaWYgKHN0b3JlZERhdGEucHJvamVjdHMpXG4gICAgICAgIHRoaXMuI3Byb2plY3RzID0gc3RvcmVkRGF0YS5wcm9qZWN0cy5tYXAoKHApID0+IFByb2plY3QuZnJvbUpTT04ocCkpO1xuICAgICAgZWxzZSB0aGlzLiNwcm9qZWN0cyA9IFtdO1xuICAgICAgaWYgKHRoaXMuI3Byb2plY3RzICYmIHN0b3JlZERhdGEuY3VyclByb2plY3RJZCkge1xuICAgICAgICBjb25zdCB0ZW1wUHJvaiA9IHRoaXMuI3Byb2plY3RzLmZpbmQoXG4gICAgICAgICAgKHApID0+IHAuaWQgPT09IHN0b3JlZERhdGEuY3VyclByb2plY3RJZFxuICAgICAgICApO1xuICAgICAgICB0aGlzLiNjdXJyUHJvamVjdCA9IHRlbXBQcm9qIHx8IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiNjdXJyUHJvamVjdCA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI3Byb2plY3RzID1cbiAgICAgICAgcHJvamVjdHMubGVuZ3RoID4gMCA/IHByb2plY3RzLm1hcCgocCkgPT4gbmV3IFByb2plY3QocCkpIDogW107XG4gICAgICB0aGlzLiNjdXJyUHJvamVjdCA9IHRoaXMuI3Byb2plY3RzLmxlbmd0aCA+IDAgPyB0aGlzLiNwcm9qZWN0c1swXSA6IG51bGw7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgcHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3Byb2plY3RzO1xuICB9XG5cbiAgc2V0IGN1cnJQcm9qZWN0KGN1cnJQcm9qKSB7XG4gICAgdGhpcy4jY3VyclByb2plY3QgPVxuICAgICAgdGhpcy4jcHJvamVjdHMuZmluZCgocHJvaikgPT4gcHJvai5pZCA9PT0gY3VyclByb2ouaWQpIHx8IG51bGw7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICBnZXQgY3VyclByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2N1cnJQcm9qZWN0O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHByb2plY3RzSlNPTiA9IHRoaXMuI3Byb2plY3RzLm1hcCgocCkgPT4gcC50b0pTT04oKSk7XG4gICAgY29uc3QgY3VyclByb2plY3RJZCA9IHRoaXMuI2N1cnJQcm9qZWN0ID8gdGhpcy4jY3VyclByb2plY3QuaWQgOiBudWxsO1xuICAgIHJldHVybiB7IHByb2plY3RzOiBwcm9qZWN0c0pTT04sIGN1cnJQcm9qZWN0SWQ6IGN1cnJQcm9qZWN0SWQgfTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgcHJvamVjdE1hbmFnZXIgPSBuZXcgUHJvamVjdE1hbmFnZXIoKTtcbiAgICBpZiAoIWpzb24gfHwgIWpzb24ucHJvamVjdHMpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0TWFuYWdlcjtcbiAgICB9XG4gICAganNvbi5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0SlNPTikgPT4ge1xuICAgICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QuZnJvbUpTT04ocHJvamVjdEpTT04pO1xuICAgICAgcHJvamVjdE1hbmFnZXIuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIGlmIChqc29uLmN1cnJQcm9qZWN0SWQgPT09IHByb2plY3QuaWQpIHtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuc2V0Q3VycmVudFByb2plY3QocHJvamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2plY3RNYW5hZ2VyO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBzYXZlTG9jYWxTdG9yYWdlKHRoaXMuI3N0b3JhZ2VLZXksIHRoaXMudG9KU09OKCkpO1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICB0aGlzLiNwcm9qZWN0cy5sZW5ndGggPT09IDA7XG4gIH1cblxuICBnZXRQcm9qZWN0KGlkKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBQcm9qZWN0IHdpdGggSUQgJHtpZH0gaXMgbm90IGZvdW5kYCk7XG4gICAgfVxuICAgIGZvciAobGV0IHAgb2YgdGhpcy4jcHJvamVjdHMpIHtcbiAgICAgIGlmIChwLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gcDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgIHRoaXMuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgfVxuXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgIHRoaXMuI3Byb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgdGhpcy4jY3VyclByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuc2F2ZSgpO1xuICB9XG5cbiAgcmVtb3ZlUHJvamVjdChpZCkge1xuICAgIGlmICh0aGlzLmlzRW1wdHkoKSkge1xuICAgICAgY29uc29sZS5lcnJvcihgUHJvamVjdCB3aXRoIElEICR7aWR9IGlzIG5vdCBmb3VuZGApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLiNwcm9qZWN0cyA9IHRoaXMuI3Byb2plY3RzLmZpbHRlcigocCkgPT4gcC5pZCAhPT0gaWQpO1xuICAgIGlmICh0aGlzLiNjdXJyUHJvamVjdC5pZCA9PT0gaWQpIHtcbiAgICAgIGlmICghdGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgICAgdGhpcy4jY3VyclByb2plY3QgPSB0aGlzLiNwcm9qZWN0c1swXTtcbiAgICAgIH0gZWxzZSB0aGlzLiNjdXJyUHJvamVjdCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuc2F2ZSgpO1xuICB9XG5cbiAgYWRkVG9kbyh0b2RvKSB7XG4gICAgaWYgKHRoaXMuI2N1cnJQcm9qZWN0KSB7XG4gICAgICB0aGlzLiNjdXJyUHJvamVjdC5hZGRUb2RvKHRvZG8pO1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVG9kbyhpZCkge1xuICAgIGlmICh0aGlzLiNjdXJyUHJvamVjdCkge1xuICAgICAgdGhpcy4jY3VyclByb2plY3QucmVtb3ZlVG9kbyhpZCk7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICB9XG4gIH1cblxuICBnZXRUb2RvKGlkKSB7XG4gICAgaWYgKHRoaXMuI2N1cnJQcm9qZWN0KSByZXR1cm4gdGhpcy4jY3VyclByb2plY3QuZ2V0VG9kbyhpZCk7XG4gIH1cblxuICBlZGl0VG9kbyhpZCwgdGl0bGUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy4jY3VyclByb2plY3QuZWRpdFRvZG8oaWQsIHRpdGxlLCBkZXNjLCBkYXRlLCBwcmlvcml0eSk7XG4gICAgdGhpcy5zYXZlKCk7XG4gIH1cblxuICB0b2dnbGVDaGVja1RvZG8oaWQpIHtcbiAgICB0aGlzLiNjdXJyUHJvamVjdC50b2dnbGVDaGVja1RvZG8oaWQpO1xuICAgIHRoaXMuc2F2ZSgpO1xuICB9XG5cbiAgZWRpdFByb2plY3QoaWQsIG5ld05hbWUpIHtcbiAgICB0aGlzLmdldFByb2plY3QoaWQpLm5hbWUgPSBuZXdOYW1lO1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KGlkKTtcbiAgICB0aGlzLnNhdmUoKTtcbiAgfVxuXG4gIGNsZWFyQ3VycmVudFByb2plY3QoKSB7XG4gICAgaWYgKHRoaXMuI2N1cnJQcm9qZWN0KSB7XG4gICAgICB0aGlzLiNjdXJyUHJvamVjdC5jbGVhckFsbFRvZG9zKCk7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2hUb2RvQnlUaXRsZShzZWFyY2hTdHIpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IFtdO1xuICAgIGZvciAobGV0IHByb2plY3Qgb2YgdGhpcy4jcHJvamVjdHMpIHtcbiAgICAgIGZvciAobGV0IHRvZG8gb2YgcHJvamVjdC5hbGxUb2Rvcykge1xuICAgICAgICBpZiAodG9kby50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFN0ci50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgIGxldCBtYXRjaCA9IHsgbWF0Y2hlZFByb2o6IHByb2plY3QsIG1hdGNoZWRUb2RvOiB0b2RvIH07XG4gICAgICAgICAgbWF0Y2hlcy5wdXNoKG1hdGNoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHNvcnRCeUFkZERhdGVBc2MoKSB7XG4gICAgdGhpcy4jY3VyclByb2plY3Quc29ydEJ5QWRkRGF0ZUFzYygpO1xuICB9XG5cbiAgc29ydEJ5QWRkRGF0ZURlc2MoKSB7XG4gICAgdGhpcy4jY3VyclByb2plY3Quc29ydEJ5QWRkRGF0ZURlc2MoKTtcbiAgfVxuXG4gIHNvcnRCeVByaW9yaXR5QXNjKCkge1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0LnNvcnRCeVByaW9yaXR5QXNjKCk7XG4gIH1cblxuICBzb3J0QnlQcmlvcml0eURlc2MoKSB7XG4gICAgdGhpcy4jY3VyclByb2plY3Quc29ydEJ5UHJpb3JpdHlEZXNjKCk7XG4gIH1cblxuICBzb3J0QnlEYXRlQXNjKCkge1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0LnNvcnRCeURhdGVBc2MoKTtcbiAgfVxuXG4gIHNvcnRCeURhdGVEZXNjKCkge1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0LnNvcnRCeURhdGVEZXNjKCk7XG4gIH1cblxuICBzb3J0QnlUaXRsZUFzYygpIHtcbiAgICB0aGlzLiNjdXJyUHJvamVjdC5zb3J0QnlUaXRsZUFzYygpO1xuICB9XG5cbiAgc29ydEJ5VGl0bGVEZXNjKCkge1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0LnNvcnRCeVRpdGxlRGVzYygpO1xuICB9XG5cbiAgY2xlYXJBbGxQcm9qZWN0cygpIHtcbiAgICB0aGlzLiNwcm9qZWN0cyA9IFtdO1xuICAgIHRoaXMuI2N1cnJQcm9qZWN0ID0gbnVsbDtcbiAgICB0aGlzLnNhdmUoKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGxldCBvdXQgPSAnJztcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHRoaXMuI3Byb2plY3RzKSB7XG4gICAgICBvdXQgKz0gcHJvamVjdC50b1N0cmluZygpICsgJ1xcbic7XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdE1hbmFnZXI7XG4iLCIvLyBDUjogVGhpcyBtZXRob2QgZG9lcyBub3QgYmVsb25nIHRvIFRvZG8gY2xhc3MuIEl0IGlzIGEgdXRpbGl0eSBmdW5jdGlvbi4gTW92ZSBpdCB0byBhIHNlcGFyYXRlIGZpbGVcbmV4cG9ydCBjb25zdCBzZXRUaW1lWm9uZSA9ICgpID0+IHtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBub3cuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwO1xuICBjb25zdCBsb2NhbFRpbWUgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gdGltZXpvbmVPZmZzZXQpO1xuICByZXR1cm4gbG9jYWxUaW1lLnRvSVNPU3RyaW5nKCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9