import domCreator from './dom-creator';
import Todo, { setTimeZone } from './todo';
import pm from './initialPM';
import Project from './project';

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

// console.log(pm.getCurrProjectId());
// console.log(currProjectId);

const EDIT = 0,
  ADD = 1;

// console.log('Current project: ' + currProjectId);
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
  if (pm.isEmpty()) {
    currProjName.textContent = '';
    return;
  }
  domCreator.createProjectList(projUl, pm.projects);
  // console.log(pm.projects);
  const projectLi = document.querySelectorAll('#project-list .project');
  for (let li of projectLi) {
    domCreator.addProjectBtnsDiv(li);
    const projectBtns = li.querySelector('.project-btns');
    domCreator.addProjectBtns(projectBtns);
    if (pm.currProject && li.id === pm.currProject.id) {
      // console.log('Current project: ' + li.name);
      li.classList.add('selected');
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

    domCreator.addTodoUpperDiv(todoLi);
    const todoUpperDiv = todoLi.querySelector('.todo-upper');

    domCreator.addTodoInfoDiv(todoUpperDiv);
    const todoInfoDiv = todoLi.querySelector('.todo-info');

    domCreator.addTodoCheck(todoInfoDiv, todo);
    domCreator.addTodoPriority(todoInfoDiv, todo);
    domCreator.addTodoTitle(todoInfoDiv, todo);

    domCreator.addTodoBtnsDiv(todoUpperDiv);
    const todoBtnsDiv = todoLi.querySelector('.todo-btns');

    domCreator.addTodoBtns(todoBtnsDiv);
    domCreator.addTodoLowerDiv(todoLi);
    const todoLowerDiv = todoLi.querySelector('.todo-lower');

    domCreator.addTodoDetailsDiv(todoLowerDiv);
    const todoDetailsDiv = todoLi.querySelector('.todo-details');
    domCreator.addTodoDetails(todoDetailsDiv, todo);
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
    if (projName !== '') pm.addProject(new Project(null, projName));
    else pm.addProject(new Project());
  } else if (projectMode === EDIT) {
    if (projToEdit) {
      pm.editProject(projToEdit.id, projName);
      projToEdit = null;
    }
  }
  projFormOverlay.style.display = 'none';
  pm.currProject = refreshProjects();
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
    // console.log(target);
    if (
      target.classList.contains('clear-project') ||
      target.parentNode.classList.contains('clear-project')
    ) {
      // console.log('click');
      if (target.classList.contains('clear-project'))
        pm.removeProject(target.parentNode.parentNode.id);
      else pm.removeProject(target.parentNode.parentNode.parentNode.id);
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
      target.parentNode.classList.contains('edit-project')
    ) {
      if (target.classList.contains('edit-project')) {
        projToEdit = pm.getProject(target.parentNode.parentNode.id);
      } else {
        projToEdit = pm.getProject(target.parentNode.parentNode.parentNode.id);
      }
      // console.log(projToEdit);
      // console.log('show todo form');
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
  // console.log(descP, dateP);
  // console.log(descP.style.display);
  if (window.getComputedStyle(descP).getPropertyValue('display') === 'none') {
    // console.log('not shown');
    descP.style.display = 'flex';
    dateP.style.display = 'flex';
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
      pm.toggleCheckTodo(target.parentNode.parentNode.parentNode.id);
      refreshTodos();
    }
  });
};

const activateClearTodo = () => {
  todoUl.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('clear-todo')) {
      pm.removeTodo(target.parentNode.parentNode.parentNode.id);
      refreshTodos();
    } else if (target.parentNode.classList.contains('clear-todo')) {
      pm.removeTodo(target.parentNode.parentNode.parentNode.parentNode.id);
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
    todoDateField.value = setTimeZone();
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
      // console.log(todoToEditId);
      if (target.classList.contains('edit-todo'))
        selectedTodo = pm.getTodo(target.parentNode.parentNode.parentNode.id);
      else {
        selectedTodo = pm.getTodo(
          target.parentNode.parentNode.parentNode.parentNode.id
        );
      }
      console.log(selectedTodo);
      // console.log(pm.toString());
      // console.log('Todo to edit: ', todoToEdit);
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
    // console.log(todoPriorityField);
    let newTodo = new Todo(null, title, desc, date, priority);
    // console.log(newTodo.toString());
    pm.addTodo(newTodo);
  } else if (todoMode === EDIT) {
    if (selectedTodo) {
      desc = desc === '' ? 'None' : desc;
      pm.editTodo(selectedTodo.id, title, desc, date, priority);
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
    // console.log(pm.toString());
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
      // If Shift + Enter are pressed, insert a new line
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
    pm.clearCurrentProject();
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
    // console.log('Searching');
    dropdownMenu.textContent = '';
    const searchStr = searchField.value;
    if (searchStr) {
      let matches = pm.searchTodoByTitle(searchStr);
      if (matches.length !== 0) {
        for (let match of matches) {
          domCreator.createResultDiv(dropdownMenu, match);
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
  activateTodoFormTextbox();
};

export default {
  refreshProjects,
  refreshTodos,
  activateUI,
};
