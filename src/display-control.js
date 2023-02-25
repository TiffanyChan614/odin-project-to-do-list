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
const todoForm = document.querySelector('#todo-form');
const todoTitleField = document.querySelector('#todo-title');
const todoDescField = document.querySelector('#todo-desc');
const todoDateField = document.querySelector('#todo-date');
const todoPriorityField = document.querySelector('#todo-priority');

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
let todoToEdit = null;
let todoToEditId = null;
let todoMode = ADD;

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
  if (!pm.isEmpty()) {
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
  }
};

const showTodos = (project) => {
  if (!project || !todoUl) return;
  if (project.isEmpty()) return;
  createDomElem.createTodoList(todoUl, project.getAllTodos());
  const todoLi = document.querySelectorAll('#todo-list .todo');
  for (const t of todoLi) {
    createDomElem.addTodoBtns(t);
  }
};

const refreshProjects = () => {
  clearProjects();
  showProjects();
};

const refreshTodos = () => {
  if (currProject) {
    clearTodos();
    showTodos(currProject);
  }
};

const activateAddProj = () => {
  addProjBtn.addEventListener('click', (e) => {
    projectMode = ADD;
    projForm.style.display = 'block';
    projNameField.value = '';
  });
};

const activateProjForm = () => {
  projForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //   console.log('submit');
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
    //   console.log(pm.toString());
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
      projToEditId = dtarget.parentNode.id;
      projToEdit = pm.getProject(projToEditId);
      let oldName = projToEdit.getName();
      projNameField.value = oldName;
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
      todoToEditId = target.parentNode.id;
      // console.log(todoToEditId);
      todoToEdit = pm.getTodo(todoToEditId);
      // console.log(pm.toString());
      // console.log('Todo to edit: ', todoToEdit);
      let oldTitle = todoToEdit.getTitle();
      let oldDesc = todoToEdit.getDesc();
      let oldDate = todoToEdit.getDate();
      let oldPriority = todoToEdit.getPriority();
      todoTitleField.value = oldTitle;
      todoDescField.value = oldDesc;
      todoDateField.value = oldDate;
      todoPriorityField.value = oldPriority;
    }
  });
};

const activateTodoForm = () => {
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
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
      if (todoToEdit) {
        pm.editTodo(todoToEditId, title, desc, date, priority);
      }
    }
    refreshTodos();
    todoForm.style.display = 'none';
    console.log(pm.toString());
  });
};

const activateUI = () => {
  activateAddProj();
  activateProjForm();
  activateProjEvent();
  activateClearAllProj();
  activateClearProj();
  activateEditProj();
  activateAddTodo();
  activateEditTodo();
  activateTodoForm();
};

export default {
  refreshProjects,
  refreshTodos,
  activateUI,
};
