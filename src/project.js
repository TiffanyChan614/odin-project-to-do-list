const uuid = require('uuid');
class Project {
  #id;
  #uncheckedTodos;
  #checkedTodos;
  #name;

  constructor(...args) {
    this.#id = `project-${uuid.v4()}`;
    this.#uncheckedTodos = [];
    this.#checkedTodos = [];
    if (args.length === 0) {
      this.#name = 'New Project';
    } else if (args.length === 1) {
      this.#name = args[0];
    } else {
      this.#name = args[0];
      this.#uncheckedTodos = args[1];
    }
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
}

export default Project;
