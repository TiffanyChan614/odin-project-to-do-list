import createDomElem from './create-dom-elem';
import pm from './app';

const projectUl = document.querySelector('#project-list');
const todoUl = document.querySelector('#todo-list');
const projForm = document.querySelector('#new-project-form');
const projNameField = document.querySelector('#project-name');
const clearProjectsBtn = document.querySelector('#clear-all-projects');
const projectList = document.querySelector('#project-list');
const editProjForm = document.querySelector('#edit-projects');
const projNewNameField = document.querySelector('#new-project-name');

const domIdToStorageId = (domId) => domId.substring(8);
const storageIdToDomId = (storageId) => 'project-' + storageId;

let currProjectId = storageIdToDomId(pm.getCurrProjectId());
// console.log(selectedProjectId);

const clearProjects = () => {
  if (projectUl) {
    projectUl.textContent = '';
  }
};

const clearTodos = () => {
  if (todoUl) {
    todoUl.textContent = '';
  }
};

const showProjects = () => {
  if (!pm.isEmpty()) {
    createDomElem.createProjectList(projectUl, pm.getAllProjects());
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

const refreshTodos = (project) => {
  if (project) {
    clearTodos();
    showTodos(project);
  }
};

const activateProjForm = () => {
  projForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //   console.log('submit');
    let projName = projNameField.value;
    if (projName) pm.addProject(projName);
    else pm.addProject();
    currProjectId = storageIdToDomId(pm.getCurrProjectId());
    refreshProjects();
    //   console.log(pm.toString());
  });
};

const activateProjEvent = () => {
  projectList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('project') && target.id) {
      // console.log(`click ${target.id}`);
      currProjectId = target.id;
      pm.setCurrProject(domIdToStorageId(currProjectId));
      refreshProjects();
    }
  });
};

const activateClearAllProj = () => {
  clearProjectsBtn.addEventListener('click', (e) => {
    pm.clearAllProjects();
    refreshProjects();
  });
};

const activateClearProj = () => {
  projectList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('clear-project')) {
      pm.removeProject(domIdToStorageId(target.parentNode.id));
      if (pm.isEmpty()) {
        currProjectId = null;
      } else {
        currProjectId = storageIdToDomId(pm.getCurrProjectId());
      }
      refreshProjects();
    }
  });
};

let selectedProj = null;

const activateEditProj = () => {
  projectList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('edit-project')) {
      editProjForm.style.display = 'block';
      selectedProj = pm.getProject(domIdToStorageId(target.parentNode.id));
      let oldName = selectedProj.getName();
      projNewNameField.value = oldName;
    }
  });
};

const activateEditProjForm = () => {
  editProjForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let newName = projNewNameField.value;
    if (newName) pm.editProject(selectedProj.getId(), newName);
    editProjForm.style.display = 'none';
    refreshProjects();
  });
};

export default {
  clearProjects,
  clearTodos,
  showProjects,
  showTodos,
  refreshProjects,
  refreshTodos,
  activateProjForm,
  activateProjEvent,
  activateClearAllProj,
  activateClearProj,
  activateEditProj,
  activateEditProjForm,
};
