import createDomElem from './create-dom-elem';
import Todo from './todo';
import pm from './app';
import Project from './project';

const projUl = document.querySelector('#project-list');
const todoUl = document.querySelector('#todo-list');
const addProjBtn = document.querySelector('#add-project');
const projForm = document.querySelector('#project-form');
const projNameField = document.querySelector('#project-name');
const clearProjBtn = document.querySelector('#clear-all-projects');
const addTodoBtn = document.querySelector('#add-todo');
const clearTodoBtn = document.querySelector('#clear-all-todos');
const todoForm = document.querySelector('#todo-form');
const todoTitleField = document.querySelector('#todo-title');
const todoDescField = document.querySelector('#todo-desc');
const todoDateField = document.querySelector('#todo-date');
const todoPriorityField = document.querySelector('#todo-priority');
const cancelProjForm = document.querySelector('#cancel-proj-btn');
const cancelTodoForm = document.querySelector('#cancel-todo-btn');
const sidebarBtn = document.querySelector('#sidebar-btn');
const sidebar = document.querySelector('#project-container');
const showCompletedBtn = document.querySelector('#show-completed');
const currProjName = document.querySelector('#current-project-name');
const searchContainer = document.querySelector('#search-container');
const searchField = document.querySelector('#search-bar');
const dropdownMenu = document.querySelector('#dropdown-menu');

// console.log(pm.getCurrProjectId());
// console.log(currProjectId);

const EDIT = 0,
  ADD = 1;

let currProject = pm.getCurrProject();
// console.log(currProject instanceof Project);
// console.log(typeof currProject);
let currProjectId;
if (currProject) currProjectId = currProject.getId();
// console.log('Current project: ' + currProjectId);
let projToEdit = null;
let projToEditId = null;
let projectMode = ADD;
let selectedTodo = null;
let selectedTodoId = null;
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
  if (pm.isEmpty()) return;
  createDomElem.createProjectList(projUl, pm.getAllProjects());
  // console.log(pm.getAllProjects());
  const projectLi = document.querySelectorAll('#project-list .project');
  for (let p of projectLi) {
    createDomElem.addProjectBtns(p);
    if (currProjectId && p.id === currProjectId) {
      console.log('Current project: ' + p.id);
      p.classList.add('selected');
    }
  }
  // console.log(currProjName);
  currProjName.textContent = currProject.getName();
};

const showTodos = (todos) => {
  if (!todoUl) return;
  createDomElem.createTodoList(todoUl, todos);
  for (let todo of todos) {
    const todoLi = document.querySelector(`#${todo.getId()}`);
    if (todo.getCheck()) todoLi.classList.add('checked');
    createDomElem.addTodoCheck(todoLi, todo);
    createDomElem.addTodoPriority(todoLi, todo);
    createDomElem.addTodoTitle(todoLi, todo);
    createDomElem.addTodoBtns(todoLi);
    createDomElem.addTodoDetails(todoLi, todo);
  }
};

const refreshProjects = () => {
  clearProjects();
  showProjects();
};

const refreshTodos = () => {
  if (currProject) {
    clearTodos();
    console.log(showCompleted);
    console.log(pm.getCurrProject().getUncheckedTodos());
    if (showCompleted) showTodos(pm.getCurrProject().getAllTodos());
    else showTodos(pm.getCurrProject().getUncheckedTodos());
  }
};

const activateAddProj = () => {
  addProjBtn.addEventListener('click', (e) => {
    projectMode = ADD;
    projForm.style.display = 'block';
    projNameField.value = '';
  });
};

const handleProjFormSubmit = () => {
  let projName = projNameField.value;
  if (projectMode === ADD) {
    let proj = new Project(projName);
    if (projName) pm.addProject(proj);
    else pm.addProject();
    currProject = pm.getCurrProject();
    currProjectId = currProject.getId();
  } else if (projectMode === EDIT) {
    if (projToEdit) {
      pm.editProject(projToEditId, projName);
    }
  }
  projForm.style.display = 'none';
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
    projForm.style.display = 'none';
  });
};

const activateProjEvent = () => {
  projUl.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('project') && target.id) {
      // console.log(`click ${target.id}`);
      currProjectId = target.id;
      currProject = pm.getProject(currProjectId);
      // console.log('new currentProjectId = ' + currProjectId);
      pm.setCurrProject(currProject);
      refreshProjects();
      refreshTodos();
    }
  });
};

const activateClearAllProj = () => {
  clearProjBtn.addEventListener('click', (e) => {
    pm.clearAllProjects();
    refreshProjects();
    refreshTodos();
  });
};

const activateClearProj = () => {
  projUl.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('clear-project')) {
      pm.removeProject(target.parentNode.id);
      if (pm.isEmpty()) {
        currProjectId = null;
        currProject = null;
      } else {
        currProject = pm.getCurrProject();
        currProjectId = currProject.getId();
      }
      refreshProjects();
      refreshTodos();
    }
  });
};

const activateEditProj = () => {
  projUl.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('edit-project')) {
      projectMode = EDIT;
      projForm.style.display = 'block';
      projToEditId = target.parentNode.id;
      projToEdit = pm.getProject(projToEditId);
      let oldName = projToEdit.getName();
      projNameField.value = oldName;
    }
  });
};

const showTodoDetail = (todoLi) => {
  todoLi.style.backgroundColor = 'light pink';
  const descP = todoLi.querySelector('.todo-desc');
  const dateP = todoLi.querySelector('.todo-date');
  // console.log(descP, dateP);
  // console.log(descP.style.display);
  if (window.getComputedStyle(descP).getPropertyValue('display') === 'none') {
    // console.log('not shown');
    descP.style.display = 'block';
    dateP.style.display = 'block';
  } else {
    descP.style.display = 'none';
    dateP.style.display = 'none';
  }
};

const activateTodoEvent = () => {
  todoUl.addEventListener('click', (e) => {
    // console.log('click');
    const target = e.target;
    const todo = target.closest('.todo');
    const todoTitle = target.closest('.todo-title');
    const isCheckbox = target.type === 'checkbox';
    const isButton = target.tagName === 'BUTTON';

    if ((todo || todoTitle) && !isCheckbox && !isButton) {
      let todoLi = todo || todoTitle.parentNode;
      showTodoDetail(todoLi);
    }
  });
};

const activateCheckTodo = () => {
  todoUl.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('check-todo')) {
      selectedTodoId = target.parentNode.id;
      pm.checkTodo(selectedTodoId);
      refreshTodos();
    }
  });
};

const activateClearTodo = () => {
  todoUl.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('clear-todo')) {
      pm.removeTodo(target.parentNode.id);
      refreshTodos();
    }
  });
};

const activateAddTodo = () => {
  addTodoBtn.addEventListener('click', (e) => {
    todoMode = ADD;
    todoForm.style.display = 'block';
    todoTitleField.value = '';
    todoDescField.value = '';
    todoDateField.value = new Date().toISOString().split('T')[0];
    todoPriorityField.value = 'None';
  });
};

const activateEditTodo = () => {
  todoUl.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('edit-todo')) {
      todoMode = EDIT;
      todoForm.style.display = 'block';
      selectedTodoId = target.parentNode.id;
      // console.log(todoToEditId);
      selectedTodo = pm.getTodo(selectedTodoId);
      // console.log(pm.toString());
      // console.log('Todo to edit: ', todoToEdit);
      let oldTitle = selectedTodo.getTitle();
      let oldDesc = selectedTodo.getDesc();
      let oldDate = selectedTodo.getDate();
      let oldPriority = selectedTodo.getPriority();
      todoTitleField.value = oldTitle;
      todoDescField.value = oldDesc;
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
    // console.log(todoPriorityField);
    let newTodo = new Todo(title, desc, date, priority);
    console.log(newTodo.toString());
    pm.addTodo(newTodo);
  } else if (todoMode === EDIT) {
    if (selectedTodo) {
      pm.editTodo(selectedTodoId, title, desc, date, priority);
    }
  }
  refreshTodos();
  todoForm.style.display = 'none';
};

const activateTodoForm = () => {
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleTodoFormSubmit();
    // console.log(pm.toString());
  });
  todoForm.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleTodoFormSubmit();
    }
  });
};

const activateCancelTodoForm = () => {
  cancelTodoForm.addEventListener('click', (e) => {
    e.preventDefault();
    todoForm.style.display = 'none';
  });
};

const activateClearAllTodos = () => {
  clearTodoBtn.addEventListener('click', (e) => {
    pm.clearCurrentProject();
    refreshTodos();
  });
};

const activateSidebarBtn = () => {
  sidebarBtn.addEventListener('click', (e) => {
    if (window.getComputedStyle(sidebar).getPropertyValue('display') === 'none')
      sidebar.style.display = 'block';
    else sidebar.style.display = 'none';
  });
};

const activateShowCompleted = () => {
  showCompletedBtn.addEventListener('click', (e) => {
    showCompleted = !showCompleted;
    if (showCompleted) {
      showCompletedBtn.textContent = 'Hide Completed';
    } else {
      showCompletedBtn.textContent = 'Show Completed';
    }
    refreshTodos();
  });
};

const activateSearchBar = () => {
  searchField.addEventListener('input', () => {
    // console.log('Searching');
    dropdownMenu.textContent = '';
    const searchStr = searchField.value;
    if (searchStr) {
      let matches = pm.searchTodoByTitle(searchStr);
      for (let match of matches) {
        createDomElem.createOption(dropdownMenu, match);
      }
      dropdownMenu.style.display = 'block';
    } else dropdownMenu.style.display = 'none';
  });
};

const activateDropdownMenu = () => {
  dropdownMenu.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('search-result')) {
      console.log('click');
      let projId = target.value.split(':')[0];
      let todoId = target.value.split(':')[1];
      currProjectId = projId;
      pm.setCurrProject(currProjectId);
      currProject = pm.getCurrProject();
      refreshProjects();
      refreshTodos();
      // console.log(todoId);
      const todoLi = document.querySelector(`#${todoId}`);
      // console.log(todoLi);
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
};

export default {
  refreshProjects,
  refreshTodos,
  activateUI,
};
