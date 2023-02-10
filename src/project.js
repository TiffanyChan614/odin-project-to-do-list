const uuid = require("uuid");
class Project {
  constructor(name, todos) {
    this.id = uuid.v4();
    this.uncheckedTodos = {};
    this.checkedTodos = {};
    if (arguments.length === 0) {
      this.name = "Project";
    } else if (arguments.length === 1) {
      this.name = name;
    } else {
      this.name = name;
      this.uncheckedTodos = todos;
    }
  }

  getId = () => this.id;

  isEmpty = () => (this.uncheckedTodos.length === 0 ? true : false);

  getNumTodo = () => this.uncheckedTodos.length;

  getNumChecked = () => this.checkedTodos.length;

  getAllTodo = () => this.uncheckedTodos;

  getTodoByTitle = (title) => {
    if (this.isEmpty()) return;
    let matches = [];
    for (let todo of this.uncheckedTodos) {
      if (todo.getTitle() === title) {
        matches.push(todo);
      }
    }
    if (matches) return matches;
    else return null;
  };

  getTodo = (id) => {
    if (this.isEmpty()) return null;
    for (let td of this.uncheckedTodos) {
      if (td.getId() === id) {
        return td;
      }
    }
    return null;
  };

  addTodo = (todo) => {
    this.uncheckedTodos.push(todo);
  };

  removeTodo = (id) => {
    if (this.isEmpty()) return;
    for (let td of this.uncheckedTodos) {
      if (td.getId() === id) {
        this.uncheckedTodos = this.uncheckedTodos.filter(
          (td) => td.getId() === id
        );
        break;
      }
    }
  };

  checkTodo = (id) => {
    if (this.isEmpty()) return;
    for (let td of this.uncheckedTodos) {
      if (td.getId() === id) {
        td.check();
        this.uncheckedTodos = this.uncheckedTodos.filter(
          (td) => td.getId() === id
        );
        this.checkedTodos.push(td);
      }
    }
  };

  equals = (project) => this.id === project.id;

  clearAllTodo = () => (this.uncheckedTodos = []);

  clearHistory = () => (this.checkedTodos = []);

  toString = () => {
    let msg = `Project Name: ${this.name}\n`;
    for (let i = 0; i < this.uncheckedTodos.length; i++) {
      msg += `To-do ${i + 1}:\n`;
      msg += this.uncheckedTodos[i].toString() + "\n";
    }
    return msg;
  };
}

export default Project;
