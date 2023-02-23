import createDomElem from './create-dom-elem';

const projectUl = document.querySelector('#project-list');
const todoUl = document.querySelector('#todo-list');

let clearProjects = () => (projectUl.textContent = '');

let clearTodos = () => (todoUl.textContent = '');

let showProjects = (projectManager) => {
  createDomElem.createProjectList(projectUl, projectManager.getAllProjects());
  const projectLi = document.querySelectorAll('#project-list li');
  for (let p of projectLi) {
    createDomElem.addProjectBtns(p);
  }
};

let showTodos = (project) => {
  createDomElem.createTodoList(todoUl, project.getAllTodos());
  const todoLi = document.querySelectorAll('#todo-list li');
  for (let t of todoLi) {
    createDomElem.addTodoBtns(t);
  }
};

export default { clearProjects, clearTodos, showProjects, showTodos };
