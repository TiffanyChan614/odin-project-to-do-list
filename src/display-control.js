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
const projList = document.querySelector('#project-list');
const addTodoBtn = document.querySelector('#add-todo');
const todoForm = document.querySelector('#todo-form');
const todoTitleField = document.querySelector('#todo-title');
const todoDescField = document.querySelector('#todo-desc');
const todoDateField = document.querySelector('#todo-date');
const todoPriorityField = document.querySelector('#todo-priority');

const domIdToStorageId = (domId) => domId.substring(8);
const storageIdToDomId = (storageId) => 'project-' + storageId;
// console.log(pm.getCurrProjectId());
// console.log(currProjectId);

const updateCurrProject = () => pm.getProject(domIdToStorageId(currProjectId));

const EDIT = 0,
  ADD = 1;

let currProject = pm.getCurrProject();
console.log(currProject instanceof Project);
console.log(typeof currProject);
let currProjectId;
if (currProject) currProjectId = storageIdToDomId(currProject.getId());
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
        // console.log('Current project: ' + p.id);
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
    if (projectMode === ADD) {
      let projName = projNameField.value;
      let proj = new Project(projName);
      if (projName) pm.addProject(proj);
      else pm.addProject();
      currProject = pm.getCurrProject();
      currProjectId = storageIdToDomId(currProject.getId());
    } else if (projectMode === EDIT) {
      if (projToEdit) {
        let newName = projNameField.value;
        pm.editProject(projToEditId, newName);
      }
    }
    projForm.style.display = 'none';
    refreshProjects();
    refreshTodos();
    //   console.log(pm.toString());
  });
};

const activateProjEvent = () => {
  projList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('project') && target.id) {
      // console.log(`click ${target.id}`);
      currProjectId = target.id;
      currProject = updateCurrProject();
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
  projList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('clear-project')) {
      pm.removeProject(domIdToStorageId(target.parentNode.id));
      if (pm.isEmpty()) {
        currProjectId = null;
        currProject = null;
      } else {
        currProject = pm.getCurrProject();
        currProjectId = storageIdToDomId(currProject.getId());
      }
      refreshProjects();
      refreshTodos();
    }
  });
};

const activateEditProj = () => {
  projList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('edit-project')) {
      projectMode = EDIT;
      projForm.style.display = 'block';
      projToEditId = domIdToStorageId(target.parentNode.id);
      projToEdit = pm.getProject(projToEditId);
      let oldName = projToEdit.getName(projToEditId);
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
  });
};

const activateTodoForm = () => {
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(todoPriorityField);
    let title = todoTitleField.value;
    let desc = todoDescField.value;
    let date = todoDateField.value;
    let priority = todoPriorityField.value;
    let newTodo = new Todo(title, desc, date, priority);
    console.log(newTodo.toString());
    pm.addTodo(newTodo);
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
  activateTodoForm();
};

export default {
  refreshProjects,
  refreshTodos,
  activateUI,
};
