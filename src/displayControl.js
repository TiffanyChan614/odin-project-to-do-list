import CreateDomElem from "./createDomElem";

const projectUl = document.querySelector("#project-list");
const todoUl = document.querySelector("#todo-list");

let clearProject = () => (projectUl.textContent = "");

let clearTodo = () => (todoUl.textContent = "");

let showProject = (projectManager) => {
  CreateDomElem.createProjectList(projectUl, projectManager.getAllProjects());
  const projectLi = document.querySelectorAll("#project-list li");
  for (let p of projectLi) {
    CreateDomElem.addProjectBtns(p);
  }
};

let showTodo = (project) => {
  CreateDomElem.createTodoList(todoUl, project.getAllTodos());
  const todoLi = document.querySelectorAll("#todo-list li");
  for (let t of todoLi) {
    CreateDomElem.addTodoBtns(t);
  }
};

export default { clearProject, clearTodo, showProject, showTodo };
