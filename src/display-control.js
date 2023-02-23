import createDomElem from './create-dom-elem';

const projectUl = document.querySelector('#project-list');
const todoUl = document.querySelector('#todo-list');
const projForm = document.querySelector('#new-project-form');
const projNameField = document.querySelector('#project-name');

let selectedProjectId;

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

const showProjects = (projectManager) => {
  createDomElem.createProjectList(projectUl, projectManager.getAllProjects());
  const projectLi = document.querySelectorAll('#project-list .project');
  for (let p of projectLi) {
    createDomElem.addProjectBtns(p);
    if (p.id === selectedProjectId) {
      p.classList.add('selected');
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

const activateProjectForm = (projectManager) => {
  projForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //   console.log('submit');
    let name = projNameField.value;
    if (name) projectManager.addProject(name);
    else projectManager.addProject();
    refreshProjects(projectManager);
    //   console.log(pm.toString());
  });
};

const activateProjectEvent = (projectManager) => {
  const projectList = document.querySelector('#project-list');
  projectList.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('project')) {
      // console.log(`click ${target.id}`);
      selectedProjectId = target.id;
      projectManager.setCurrProject(selectedProjectId);
      refreshProjects(projectManager);
    }
  });
};

const refreshProjects = (projectManager) => {
  clearProjects();
  showProjects(projectManager);
};

const refreshTodos = (project) => {
  if (project && todoUl) {
    clearTodos();
    showTodos(project);
  }
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
};
