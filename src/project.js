class Project {
  constructor(name) {
    this.todos = [];
    if (arguments.length === 0) {
      this.name = "Project";
    } else {
      this.name = name;
    }
  }

  addTodo = (todo) => {
    this.todos.push(todo);
  };

  removeTodo = (todo) => {
    for (let td of this.todos) {
      if (td.equals(todo)) {
        this.todos = this.todos.filter((td) => td !== todo);
      }
    }
  };

  getTodo = (todo) => {
    for (let td of this.todos) {
      if (td.equals(todo)) {
        return td;
      }
    }
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
