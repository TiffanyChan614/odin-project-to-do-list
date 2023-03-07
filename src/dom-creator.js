const createProjectList = (projectList, projects) => {
  for (let project of projects) {
    // console.log(project.toString());
    let li = document.createElement('li');
    li.textContent = project.name;
    li.classList.add('project');
    li.id = `${project.id}`;
    projectList.appendChild(li);
  }
};

const addProjectBtnsDiv = (projectLi) => {
  let div = document.createElement('div');
  div.classList.add('project-btns');
  projectLi.appendChild(div);
};

const addProjectBtns = (projectBtn) => {
  let editBtn = document.createElement('button');
  editBtn.classList.add('edit-project');
  const editIcon = createSVGSpanTag(
    'edit_note',
    'material-symbols-outlined',
    'proj-icons'
  );
  editBtn.appendChild(editIcon);

  let clearBtn = document.createElement('button');
  clearBtn.className = 'clear-project';
  const clearIcon = createSVGSpanTag(
    'close',
    'material-symbols-outlined',
    'proj-icons'
  );
  clearBtn.appendChild(clearIcon);
  projectBtn.appendChild(editBtn);
  projectBtn.appendChild(clearBtn);
};

const createTodoList = (todoList, todos) => {
  for (let todo of todos) {
    let li = document.createElement('li');
    li.classList.add('todo');
    li.id = `${todo.id}`;
    todoList.appendChild(li);
  }
};

const addTodoUpperDiv = (todoLi) => {
  let div = document.createElement('div');
  div.classList.add('todo-upper');
  todoLi.appendChild(div);
};

const addTodoLowerDiv = (todoLi) => {
  let div = document.createElement('div');
  div.classList.add('todo-lower');
  todoLi.appendChild(div);
};

const addTodoInfoDiv = (todoUpper) => {
  let div = document.createElement('div');
  div.classList.add('todo-info');
  todoUpper.appendChild(div);
};

const addTodoBtnsDiv = (todoUpper) => {
  let div = document.createElement('div');
  div.classList.add('todo-btns');
  todoUpper.appendChild(div);
};

const addTodoDetailsDiv = (todoLower) => {
  let div = document.createElement('div');
  div.classList.add('todo-details');
  todoLower.appendChild(div);
};

const addTodoCheck = (todoInfo, todo) => {
  let check = document.createElement('input');
  check.type = 'checkbox';
  check.classList.add('check-todo');
  check.checked = todo.check;
  todoInfo.appendChild(check);
};

const addTodoPriority = (infoDiv, todo) => {
  let priority = document.createElement('span');
  if (todo.priority === 'None') priority.textContent = '';
  else priority.textContent = todo.priority;
  priority.classList.add('todo-priority');
  infoDiv.appendChild(priority);
};

const addTodoTitle = (infoDiv, todo) => {
  let title = document.createElement('span');
  title.textContent = todo.title;
  title.classList.add('todo-title');
  infoDiv.appendChild(title);
};

const addTodoBtns = (btnDiv) => {
  let editBtn = document.createElement('button');
  editBtn.classList.add('edit-todo');
  const editIcon = createSVGSpanTag(
    'edit_note',
    'material-symbols-outlined',
    'todo-icons'
  );
  editBtn.appendChild(editIcon);

  let clearBtn = document.createElement('button');
  clearBtn.classList.add('clear-todo');
  const clearIcon = createSVGSpanTag(
    'close',
    'material-symbols-outlined',
    'todo-icons'
  );
  clearBtn.appendChild(clearIcon);

  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(clearBtn);
};

const addTodoDetails = (detailsDiv, todo) => {
  let desc = document.createElement('p');
  desc.textContent = `Description:\t${todo.desc}`;
  desc.classList.add('todo-desc');
  let date = document.createElement('p');
  date.textContent = `Due date:\t${todo.date}`;
  date.classList.add('todo-date');
  detailsDiv.appendChild(desc);
  detailsDiv.appendChild(date);
  // console.log('details added');
};

const createResultDiv = (dropdownMenu, match) => {
  let option = document.createElement('div');
  option.classList.add('search-result');
  option.value = `${match.matchedProj.id}:${match.matchedTodo.id}`;

  const todoTitle = createPTag(match.matchedTodo.title, 'matched-todo');
  const projectName = createPTag(match.matchedProj.name, 'matched-project');

  option.appendChild(todoTitle);
  option.appendChild(projectName);

  dropdownMenu.appendChild(option);
};

const createSVGSpanTag = (text, defaultClass, customClass) => {
  const span = document.createElement('span');
  span.classList.add(defaultClass, customClass);
  span.textContent = text;
  return span;
};

const createPTag = (text, className) => {
  const p = document.createElement('p');
  p.classList.add(className);
  p.textContent = text;
  return p;
};

export default {
  createProjectList,
  addProjectBtns,
  addProjectBtnsDiv,
  createTodoList,
  addTodoUpperDiv,
  addTodoLowerDiv,
  addTodoInfoDiv,
  addTodoDetailsDiv,
  addTodoCheck,
  addTodoPriority,
  addTodoTitle,
  addTodoBtnsDiv,
  addTodoBtns,
  addTodoDetails,
  createResultDiv,
};
