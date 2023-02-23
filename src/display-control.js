import createDomElem from './create-dom-elem';
import pm from './app';

const projectUl = document.querySelector('#project-list');
const todoUl = document.querySelector('#todo-list');
const projForm = document.querySelector('#new-project-form');
const projNameField = document.querySelector('#project-name');
const clearProjectsBtn = document.querySelector('#clear-all-projects');
const projectList = document.querySelector('#project-list');

const domIdToStorageId = (domId) => domId.substring(8);
const storageIdToDomId = (storageId) => 'project-' + storageId;

let selectedProjectId = storageIdToDomId(pm.getCurrProjectId());
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
      if (selectedProjectId && p.id === selectedProjectId) {
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

const activateProjectForm = () => {
  projForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //   console.log('submit');
    let projName = projNameField.value;
    if (projName) pm.addProject(projName);
    else pm.addProject();
    selectedProjectId = storageIdToDomId(pm.getCurrProjectId());
    refreshProjects();
    //   console.log(pm.toString());
  });
};

const activateProjectEvent = () => {
  projectList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('project') && target.id) {
      // console.log(`click ${target.id}`);
      selectedProjectId = target.id;
      pm.setCurrProject(domIdToStorageId(selectedProjectId));
      refreshProjects();
    }
  });
};

const activateClearAllProjects = () => {
  clearProjectsBtn.addEventListener('click', (e) => {
    pm.clearAllProjects();
    refreshProjects();
  });
};

const activateClearProject = () => {
  projectList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('clear-project')) {
      pm.removeProject(domIdToStorageId(target.parentNode.id));
      if (pm.isEmpty()) {
        selectedProjectId = null;
      } else {
        selectedProjectId = storageIdToDomId(pm.getCurrProjectId());
      }
      refreshProjects();
    }
  });
};

export default {
  clearProjects,
  clearTodos,
  showProjects,
  showTodos,
  refreshProjects,
  refreshTodos,
  activateProjectForm,
  activateProjectEvent,
  activateClearAllProjects,
  activateClearProject,
};
