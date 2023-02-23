import createDomElem from './create-dom-elem';
import pm from './app';

const projectUl = document.querySelector('#project-list');
const todoUl = document.querySelector('#todo-list');
const projForm = document.querySelector('#new-project-form');
const projNameField = document.querySelector('#project-name');
const clearProjectsBtn = document.querySelector('#clear-all-projects');

let selectedProjectId = pm.getCurrProjectId();
console.log(selectedProjectId);

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
    const projectLi = document.querySelectorAll('#project-list .project');
    for (let p of projectLi) {
      createDomElem.addProjectBtns(p);
      if (p.id === selectedProjectId) {
        p.classList.add('selected');
      }
    }
  }
};

const showTodos = (project) => {
  createDomElem.createTodoList(todoUl, project.getAllTodos());
  const todoLi = document.querySelectorAll('#todo-list .todo');
  for (let t of todoLi) {
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
    let name = projNameField.value;
    if (name) pm.addProject(name);
    else pm.addProject();
    refreshProjects();
    //   console.log(pm.toString());
  });
};

const activateProjectEvent = () => {
  const projectList = document.querySelector('#project-list');
  projectList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('project')) {
      // console.log(`click ${target.id}`);
      selectedProjectId = target.id;
      pm.setCurrProject(selectedProjectId);
      refreshProjects();
    }
  });
};

const activateClearProjects = () => {
  clearProjectsBtn.addEventListener('click', (e) => {
    pm.clearAllProjects();
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
  activateProjectForm,
  activateProjectEvent,
  activateClearProjects,
};
