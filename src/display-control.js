import createDomElem from './create-dom-elem';
import pm from './app';

const projUl = document.querySelector('#project-list');
const todoUl = document.querySelector('#todo-list');
const addProjBtn = document.querySelector('#add-project');
const projForm = document.querySelector('#project-form');
const projNameField = document.querySelector('#project-name');
const clearProjBtn = document.querySelector('#clear-all-projects');
const projList = document.querySelector('#project-list');
// const editProjForm = document.querySelector('#edit-project-form');
// const projNewNameField = document.querySelector('#new-project-name');

const domIdToStorageId = (domId) => domId.substring(8);
const storageIdToDomId = (storageId) => 'project-' + storageId;
// console.log(pm.getCurrProjectId());
// console.log(currProjectId);

const updateCurrProject = () => pm.getProject(domIdToStorageId(currProjectId));

const EDIT = 0,
  ADD = 1;

let currProjectId = storageIdToDomId(pm.getCurrProjectId());
let currProject = updateCurrProject();
let projToEdit = null;
let projToEditId = null;
let projectMode = ADD;

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
      if (projName) pm.addProject(projName);
      else pm.addProject();
      currProjectId = storageIdToDomId(pm.getCurrProjectId());
      currProject = updateCurrProject();
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
        currProjectId = storageIdToDomId(pm.getCurrProjectId());
        currProject = updateCurrProject();
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

const activateUI = () => {
  activateAddProj();
  activateProjForm();
  activateProjEvent();
  activateClearAllProj();
  activateClearProj();
  activateEditProj();
};

export default {
  refreshProjects,
  refreshTodos,
  activateUI,
};
