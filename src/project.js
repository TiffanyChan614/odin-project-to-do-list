class Project {
  constructor(name, todos) {
    this.todos = [];
    if (arguments.length === 0) {
      this.name = "Project";
    } else if (arguments.length === 1) {
      this.name = name;
    } else {
      this.name = name;
      this.todos = todos;
    }
  }

  isEmpty = () => {
    if (this.todos.length === 0) return true;
    return false;
  };

  getNumTodo = () => {
    return this.todos.length;
  };

  getAllTodo = () => {
    return this.todos;
  };

  getTodoByTitle = (title) => {
    if (this.isEmpty()) return;
    let matches = [];
    for (let todo of this.todos) {
      if (todo.getTitle() === title) {
        matches.push(todo);
      }
    }
    if (matches) return matches;
    else return null;
  };

  getTodo = (todo) => {
    if (this.isEmpty()) return null;
    for (let td of this.todos) {
      if (td.equals(todo)) {
        return td;
      }
    }
    return null;
  };

  addTodo = (todo) => {
    this.todos.push(todo);
  };

  removeTodo = (todo) => {
    if (this.isEmpty()) return;
    for (let td of this.todos) {
      if (td.equals(todo)) {
        this.todos = this.todos.filter((td) => td.equals(todo));
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

  toString = () => {
    let msg = `Project Name: ${this.name}\n`;
    for (let i = 0; i < this.todos.length; i++) {
      msg += `To-do ${i + 1}:\n`;
      msg += this.todos[i].toString() + "\n";
    }
    return msg;
  };
}

export default Project;
