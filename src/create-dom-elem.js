const createProjectList = (projectList, projects) => {
  for (let project of projects) {
    let li = document.createElement('li');
    li.textContent = project.getName();
    li.classList.add('project');
    li.id = `project-${project.getId()}`;
    projectList.appendChild(li);
  }
};

const addProjectBtns = (projectLi) => {
  let editBtn = document.createElement('button');
  editBtn.className = 'edit-project';
  editBtn.textContent = 'Edit';
  let clearBtn = document.createElement('button');
  clearBtn.className = 'clear-project';
  clearBtn.textContent = 'Clear';
  projectLi.appendChild(editBtn);
  projectLi.appendChild(clearBtn);
};

const createTodoList = (todoList, todos) => {
  for (let todo of todos) {
    let li = document.createElement('li');
    li.textContent = todo.getTitle();
    li.classList.add('todo');
    li.id = `todo-${todo.getId()}`;
    todoList.appendChild(todo);
  }
};

const addTodoBtns = (todoLi) => {
  let checkBtn = document.createElement('button');
  checkBtn.className = 'check-todo';
  checkBtn.textContent = 'Check';
  let editBtn = document.createElement('button');
  editBtn.className = 'edit-todo';
  editBtn.textContent = 'Edit';
  let clearBtn = document.createElement('button');
  clearBtn.className = 'clear-todo';
  clearBtn.textContent = 'Clear';
  todoLi.appendChild(checkBtn);
  todoLi.appendChild(editBtn);
  todoLi.appendChild(clearBtn);
};

export default {
  createProjectList,
  addProjectBtns,
  createTodoList,
  addTodoBtns,
};
