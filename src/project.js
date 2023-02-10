class Project {
  constructor(name, todos) {
    this.uncheckedTodos = [];
    this.checkedTodos = [];
    if (arguments.length === 0) {
      this.name = "Project";
    } else if (arguments.length === 1) {
      this.name = name;
    } else {
      this.name = name;
      this.uncheckedTodos = todos;
    }
  }

  isEmpty = () => {
    if (this.uncheckedTodos.length === 0) return true;
    return false;
  };

  getNumTodo = () => {
    return this.uncheckedTodos.length;
  };

  getAllTodo = () => {
    return this.uncheckedTodos;
  };

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

  getTodo = (todo) => {
    if (this.isEmpty()) return null;
    for (let td of this.uncheckedTodos) {
      if (td.equals(todo)) {
        return td;
      }
    }
    return null;
  };

  addTodo = (todo) => {
    this.uncheckedTodos.push(todo);
  };

  removeTodo = (todo) => {
    if (this.isEmpty()) return;
    for (let td of this.uncheckedTodos) {
      if (td.equals(todo)) {
        this.uncheckedTodos = this.uncheckedTodos.filter((td) =>
          td.equals(todo)
        );
      }
    }
  };

  checkTodo = (todo) => {
    if (this.isEmpty()) return;
    for (let td of this.uncheckedTodos) {
      if (td.equals(todo)) {
        td.setCheck(true);
        this.uncheckedTodos = this.uncheckedTodos.filter((td) =>
          td.equals(todo)
        );
        this.checkedTodos.push(td);
      }
    }
  };

  equals = (project) => {
    if (project.getNumTodo() !== this.getNumTodo()) {
      return false;
    } else {
      for (let i = 0; i < project.getNumTodo(); i++) {
        if (project.getAllTodo()[i] !== this.getAllTodo()[i]) {
          return false;
        }
      }
    }
    return true;
  };

  clearAllTodo = () => {
    this.uncheckedTodos = [];
  };

  clearHistory = () => {
    this.checkedTodos = [];
  };

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
