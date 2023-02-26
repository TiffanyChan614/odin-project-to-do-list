import Todo from './todo';

const uuid = require('uuid');
class Project {
  constructor(...args) {
    this.id = `project-${uuid.v4()}`;
    this.uncheckedTodos = [];
    this.checkedTodos = [];
    if (args.length === 0) {
      this.name = 'Project';
    } else if (args.length === 1) {
      this.name = args[0];
    } else {
      this.name = args[0];
      this.uncheckedTodos = args[1];
    }
  }

  setName = (projName) => (this.name = projName);

  getId = () => this.id;

  getName = () => this.name;

  isEmpty = () => (this.uncheckedTodos.length === 0 ? true : false);

  getNumTodo = () => this.uncheckedTodos.length;

  getNumChecked = () => this.checkedTodos.length;

  getUncheckedTodos = () => this.uncheckedTodos;

  getCheckedTodos = () => this.checkedTodos;

  getAllTodos = () => [...this.uncheckedTodos, ...this.checkedTodos];

  getTodoByTitle = (title) => {
    if (this.isEmpty()) return;
    let matches = [];
    for (let todo of this.uncheckedTodos) {
      if (todo.getTitle() === title) {
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
    if (this.isEmpty()) {
      console.log(`Todo with ID ${id} cannot be found`);
      return;
    }
    this.uncheckedTodos = this.uncheckedTodos.filter((td) => td.getId() !== id);
  };

  editTodo = (id, newTitle, newDesc, newDate, newPriority) => {
    this.getTodo(id).edit(newTitle, newDesc, newDate, newPriority);
  };

  checkTodo = (id) => {
    if (this.isEmpty()) return;
    for (let td of this.uncheckedTodos) {
      if (td.getId() === id) {
        td.toggleCheck();
        this.uncheckedTodos = this.uncheckedTodos.filter(
          (td) => td.getId() === id
        );
        this.checkedTodos.push(td);
      }
    }
  };

  equals = (project) => this.id === project.id;

  clearAllTodos = () => (this.uncheckedTodos = []);

  clearHistory = () => (this.checkedTodos = []);

  toString = () => {
    let msg = `Project Name: ${this.name}\nProject ID: ${this.id}\n`;
    if (this.uncheckedTodos.length > 0) {
      for (let i = 0; i < this.uncheckedTodos.length; i++) {
        msg += `To-do ${i + 1}:\n`;
        msg += this.uncheckedTodos[i].toString() + '\n';
      }
    }
    return msg;
  };
}

export default Project;
