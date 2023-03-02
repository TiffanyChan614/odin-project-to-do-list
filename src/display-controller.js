import domCreator from './dom-creator';
import Todo from './todo';
import pm from './initialPM';
import Project from './project';

const projUl = document.querySelector('#project-list');
const todoUl = document.querySelector('#todo-list');
const addProjBtn = document.querySelector('#add-project');
const projForm = document.querySelector('#project-form');
const projNameField = document.querySelector('#project-name');
const clearProjBtn = document.querySelector('#clear-all-projects');
const addTodoBtn = document.querySelector('#add-todo');
const clearTodosBtn = document.querySelector('#clear-all-todos');
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
const searchField = document.querySelector('#search-bar');
const dropdownMenu = document.querySelector('#dropdown-menu');

// console.log(pm.getCurrProjectId());
// console.log(currProjectId);

const EDIT = 0,
  ADD = 1;

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
  if (pm.isEmpty()) {
    currProjName.textContent = '';
    return;
  }
  domCreator.createProjectList(projUl, pm.projects);
  // console.log(pm.projects);
  const projectLi = document.querySelectorAll('#project-list .project');
  for (let p of projectLi) {
    domCreator.addProjectBtns(p);
    if (pm.currProject && p.id === pm.currProject.id) {
      console.log('Current project: ' + p.name);
      p.classList.add('selected');
    }
  }
  // console.log(currProjName);
  if (pm.currProject) currProjName.textContent = pm.currProject.name;
};

const showTodos = (todos) => {
  if (!todoUl) return;
  domCreator.createTodoList(todoUl, todos);
  for (let todo of todos) {
    const todoLi = document.querySelector(`#${todo.id}`);
    if (todo.check) todoLi.classList.add('checked');
    domCreator.addTodoCheck(todoLi, todo);
    domCreator.addTodoPriority(todoLi, todo);
    domCreator.addTodoTitle(todoLi, todo);
    domCreator.addTodoBtns(todoLi);
    domCreator.addTodoDetails(todoLi, todo);
  }
};

const refreshProjects = () => {
  clearProjects();
  showProjects();
};

const refreshTodos = () => {
  clearTodos();
  if (pm.currProject) {
    // console.log(showCompleted);
    // console.log(pm.currProject.uncheckedTodos);
    if (showCompleted) showTodos(pm.currProject.allTodos);
    else showTodos(pm.currProject.uncheckedTodos);
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
      pm.currProject = pm.getProject(target.id);
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
      let oldName = projToEdit.name;
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
      pm.toggleCheckTodo(selectedTodoId);
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
      let oldTitle = selectedTodo.title;
      let oldDesc = selectedTodo.desc;
      let oldDate = selectedTodo.date;
      let oldPriority = selectedTodo.priority;
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
    // console.log(newTodo.toString());
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
  clearTodosBtn.addEventListener('click', (e) => {
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
    // console.log('Searching');
    dropdownMenu.textContent = '';
    const searchStr = searchField.value;
    if (searchStr) {
      let matches = pm.searchTodoByTitle(searchStr);
      for (let match of matches) {
        domCreator.createOption(dropdownMenu, match);
      }
      dropdownMenu.style.display = 'block';
    } else dropdownMenu.style.display = 'none';
  });
};

const activateDropdownMenu = () => {
  dropdownMenu.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('search-result')) {
      // console.log('click');
      // console.log(target.value);
      let projId = target.value.split(':')[0];
      // console.log('Project id: ', projId);
      let todoId = target.value.split(':')[1];
      // console.log('Todo ID: ', todoId);
      // console.log('currProjectId: ', currProjectId);
      // console.log('currProject: ', currProject.toString());
      pm.currProject = pm.getProject(projId);
      // console.log('Search project: ', currProject.toString());
      // console.log('Search todo: ', pm.getTodo(todoId));
      if (pm.getTodo(todoId).check) showCompleted = true;
      toggleShowCompletedbtn();
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
