import Todo from './todo';

const uuid = require('uuid');
class Project {
  #id;
  #name;
  #uncheckedTodos;
  #checkedTodos;

  constructor(
    id = null,
    name = 'New Project',
    uncheckedTodos = [],
    checkedTodos = []
  ) {
    if (!id) this.#id = `project-${uuid.v4()}`;
    else this.#id = id;
    this.#name = name;
    this.#uncheckedTodos = uncheckedTodos;
    this.#checkedTodos = checkedTodos;
  }

  set id(id) {
    this.#id = id;
  }

  get id() {
    return this.#id;
  }

  set name(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get uncheckedTodos() {
    return this.#uncheckedTodos;
  }

  get checkedTodos() {
    return this.#checkedTodos;
  }

  get allTodos() {
    return [...this.#uncheckedTodos, ...this.#checkedTodos];
  }

  isEmpty = () =>
    this.#uncheckedTodos.length === 0 && this.#checkedTodos.length === 0
      ? true
      : false;

  getNumTodo = () => this.#uncheckedTodos.length;

  getNumChecked = () => this.#checkedTodos.length;

  getTodoByTitle = (title) => {
    if (this.isEmpty()) return;
    let matches = [];
    for (let todo of this.#uncheckedTodos) {
      if (todo.title === title) {
        matches.push(todo);
      }
    }
    if (matches.length > 0) return matches;
    else return null;
  };

  getTodo = (id) => {
    if (this.isEmpty()) {
      console.log(`Todo with ID ${id} cannot be found`);
      return null;
    }
    for (let td of this.#uncheckedTodos) {
      if (td.id === id) {
        return td;
      }
    }
    for (let td of this.#checkedTodos) {
      if (td.id === id) {
        return td;
      }
    }
    return null;
  };

  addTodo = (todo) => {
    this.#uncheckedTodos.push(todo);
  };

  removeTodo = (id) => {
    if (this.isEmpty()) {
      console.log(`Todo with ID ${id} cannot be found`);
      return;
    }
    this.#uncheckedTodos = this.#uncheckedTodos.filter((td) => td.id !== id);
    this.#checkedTodos = this.#uncheckedTodos.filter((td) => td.id !== id);
  };

  editTodo = (id, newTitle, newDesc, newDate, newPriority) => {
    this.getTodo(id).edit(newTitle, newDesc, newDate, newPriority);
  };

  checkTodo = (id) => {
    if (this.isEmpty()) return;
    for (let i = 0; i < this.#uncheckedTodos.length; i++) {
      const td = this.#uncheckedTodos[i];
      if (td.id === id) {
        td.toggleCheck();
        this.#uncheckedTodos.splice(i, 1);
        this.#checkedTodos.push(td);
        break;
      }
    }
  };

  uncheckTodo = (id) => {
    if (this.isEmpty()) return;
    for (let i = 0; i < this.#checkedTodos.length; i++) {
      const td = this.#checkedTodos[i];
      if (td.id === id) {
        td.toggleCheck();
        this.#checkedTodos.splice(i, 1);
        this.#uncheckedTodos.push(td);
      }
    }
  };

  toggleCheckTodo = (id) => {
    if (this.isEmpty()) return;
    const td = this.getTodo(id);
    if (td.check) this.uncheckTodo(id);
    else this.checkTodo(id);
  };

  equals = (project) => this.id === project.id;

  clearAllTodos = () => {
    this.#uncheckedTodos = [];
    this.#checkedTodos = [];
  };

  clearHistory = () => (this.#checkedTodos = []);

  toString = () => {
    let msg = `Project Name: ${this.name}\nProject ID: ${this.id}\n`;
    if (this.#uncheckedTodos.length > 0) {
      for (let i = 0; i < this.#uncheckedTodos.length; i++) {
        msg += `To-do ${i + 1}:\n`;
        msg += this.#uncheckedTodos[i].toString() + '\n';
      }
    }
    return msg;
  };

  toJSON = () => {
    return {
      id: this.#id,
      uncheckedTodos: this.#uncheckedTodos.length
        ? this.#uncheckedTodos.map((todo) => todo.toJSON())
        : [],
      checkedTodos: this.#checkedTodos.length
        ? this.#checkedTodos.map((todo) => todo.toJSON())
        : [],
      name: this.#name,
    };
  };

  static fromJSON(json) {
    const project = new Project(json.id, json.name);
    project.#uncheckedTodos = json.uncheckedTodos.map((todoJSON) =>
      Todo.fromJSON(todoJSON)
    );
    project.#checkedTodos = json.checkedTodos.map((todoJSON) =>
      Todo.fromJSON(todoJSON)
    );
    return project;
  }
}

export default Project;
