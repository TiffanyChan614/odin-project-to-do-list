import CreateDomElem from "./createDomElem";

const projectUl = document.querySelector("#project-list");
const todoUl = document.querySelector("#todo-list");

let refreshProject = (projectManager) => {
  projectUl.textContent = "";
  CreateDomElem.createProjectList(projectUl, projectManager.getAllProjects());
  const projectLi = document.querySelectorAll("#project-list li");
  for (let p of projectLi) {
    CreateDomElem.addProjectBtns(p);
  }
};

let refreshTodo = (project) => {
  todoUl.textContent = "";
  CreateDomElem.createTodoList(todoUl, project.getAllTodos());
  const todoLi = document.querySelectorAll("#todo-list li");
  for (let t of todoLi) {
    CreateDomElem.addTodoBtns(t);
  }
};

export default { refreshProject, refreshTodo };
