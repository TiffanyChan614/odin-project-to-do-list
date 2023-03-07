const SVG_DEFAULT_CLASS = 'material-symbols-outlined';
const createProject = (project, pm) => {
  let li = document.createElement('li');
  li.textContent = project.name;
  li.classList.add('project');
  li.id = `${project.id}`;
  li.appendChild(createProjectBtnsDiv());
  if (pm.currProject && li.id === pm.currProject.id) {
    li.classList.add('selected');
  }
  return li;
};

const createProjectBtnsDiv = () => {
  const div = createDivTag('project-btns');
  const editBtn = createBtnTag('edit-project', 'edit_note', 'proj-icons');
  const clearBtn = createBtnTag('clear-project', 'close', 'proj-icons');
  div.appendChild(editBtn);
  div.appendChild(clearBtn);
  return div;
};

const createTodo = (todo) => {
  let li = document.createElement('li');
  li.classList.add('todo');
  li.id = `${todo.id}`;
  const upperDiv = createDivTag('todo-upper');
  upperDiv.appendChild(createInfoDiv(todo));
  upperDiv.appendChild(createTodoBtnsDiv());
  li.appendChild(upperDiv);
  const lowerDiv = createDivTag('todo-lower');
  lowerDiv.appendChild(createTodoDetailsDiv(todo));
  li.appendChild(lowerDiv);
  if (todo.check) li.classList.add('checked');
  return li;
};

const createInfoDiv = (todo) => {
  const div = createDivTag('todo-info');
  div.appendChild(createTodoCheck(todo));
  div.appendChild(createTodoPriority(todo));
  div.appendChild(createSpanTag(todo.title, 'todo-title'));
  return div;
};

const createTodoBtnsDiv = () => {
  const div = createDivTag('todo-btns');
  const editBtn = createBtnTag('edit-todo', 'edit_note', 'todo-icons');
  const closeBtn = createBtnTag('clear-todo', 'close', 'todo-icons');
  div.appendChild(editBtn);
  div.appendChild(closeBtn);
  return div;
};

const createTodoDetailsDiv = (todo) => {
  const div = createDivTag('todo-details');
  const desc = createPTag(`Description:\t${todo.desc}`, 'todo-desc');
  const date = createPTag(`Due date:\t${todo.date}`, 'todo-date');
  div.appendChild(desc);
  div.appendChild(date);
  return div;
};

const createTodoCheck = (todo) => {
  let check = document.createElement('input');
  check.type = 'checkbox';
  check.classList.add('check-todo');
  check.checked = todo.check;
  return check;
};

const createTodoPriority = (todo) => {
  let priority;
  if (todo.priority === 'None') priority = createSpanTag('', 'todo-priority');
  else priority = createSpanTag(todo.priority, 'todo-priority');
  return priority;
};

const createResultDiv = (match) => {
  const option = createDivTag(
    'search-result',
    `${match.matchedProj.id}:${match.matchedTodo.id}`
  );

  const todoTitle = createPTag(match.matchedTodo.title, 'matched-todo');
  const projectName = createPTag(match.matchedProj.name, 'matched-project');

  option.appendChild(todoTitle);
  option.appendChild(projectName);

  return option;
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

const createSpanTag = (text, className) => {
  const span = document.createElement('span');
  span.classList.add(className);
  span.textContent = text;
  return span;
};

const createBtnTag = (className, iconName, svgClassName) => {
  const button = document.createElement('button');
  button.classList.add(className);
  const icon = createSVGSpanTag(iconName, SVG_DEFAULT_CLASS, svgClassName);
  button.appendChild(icon);
  return button;
};

const createDivTag = (className, val) => {
  const div = document.createElement('p');
  div.classList.add(className);
  div.value = val ? val : '';
  return div;
};

export default {
  createProject,
  createTodo,
  createResultDiv,
};
