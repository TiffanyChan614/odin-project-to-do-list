const createProjectList = (projectList, projects) => {
  for (let project of projects) {
    let li = document.createElement('li');
    li.textContent = project.name;
    li.classList.add('project');
    li.id = `${project.id}`;
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
    li.classList.add('todo');
    li.id = `${todo.id}`;
    todoList.appendChild(li);
  }
};

const addTodoCheck = (todoLi, todo) => {
  let check = document.createElement('input');
  check.type = 'checkbox';
  check.classList.add('check-todo');
  check.checked = todo.check;
  todoLi.appendChild(check);
};

const addTodoPriority = (todoLi, todo) => {
  let priority = document.createElement('span');
  if (todo.priority === 'None') priority.textContent = '';
  else priority.textContent = todo.priority;
  priority.classList.add('todo-priority');
  todoLi.appendChild(priority);
};

const addTodoTitle = (todoLi, todo) => {
  let title = document.createElement('span');
  title.textContent = todo.title;
  title.classList.add('todo-title');
  todoLi.appendChild(title);
};

const addTodoBtns = (todoLi) => {
  let editBtn = document.createElement('button');
  editBtn.classList.add('edit-todo');
  editBtn.textContent = 'Edit';
  let clearBtn = document.createElement('button');
  clearBtn.classList.add('clear-todo');
  clearBtn.textContent = 'Clear';
  todoLi.appendChild(editBtn);
  todoLi.appendChild(clearBtn);
};

const addTodoDetails = (todoLi, todo) => {
  let desc = document.createElement('p');
  desc.textContent = `Description: ${todo.desc}`;
  desc.classList.add('todo-desc');
  let date = document.createElement('p');
  date.textContent = `Date: ${todo.date}`;
  date.classList.add('todo-date');
  todoLi.appendChild(desc);
  todoLi.appendChild(date);
  // console.log('details added');
};

const createOption = (dropdownMenu, match) => {
  let option = document.createElement('option');
  option.classList.add('search-result');
  option.value = `${match.matchedProj.id}:${match.matchedTodo.id}`;
  option.textContent = `${match.matchedTodo.title}\t\t${match.matchedProj.name}`;
  dropdownMenu.appendChild(option);
};

export default {
  createProjectList,
  addProjectBtns,
  createTodoList,
  addTodoCheck,
  addTodoPriority,
  addTodoTitle,
  addTodoBtns,
  addTodoDetails,
  createOption,
};
