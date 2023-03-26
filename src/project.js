import Todo from './todo';

const uuid = require('uuid');
class Project {
  static PRIORITY_ORDER = ['none', '!', '!!', '!!!'];

  #id;
  #name;
  #allTodos;

  constructor(id = null, name = 'New Project', allTodos = []) {
    if (!id) this.#id = `project-${uuid.v4()}`;
    else this.#id = id;
    this.#name = name;
    this.#allTodos = [...allTodos];
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
    return this.#allTodos.filter((todo) => todo.check === false);
  }

  get checkedTodos() {
    return this.#allTodos.filter((todo) => todo.check === true);
  }

  set allTodos(todos) {
    this.#allTodos = [...todos];
  }

  get allTodos() {
    return this.#allTodos;
  }

  isEmpty = () => (this.#allTodos === 0 ? true : false);

  getNumTodo = () => this.#allTodos.length;

  getNumChecked = () => this.checkedTodos.length;

  getNumUnchecked = () => this.uncheckedTodos.length;

  getTodoByTitle = (title) => {
    if (this.isEmpty()) return;
    let matches = [];
    for (let todo of this.#allTodos) {
      if (todo.title === title) {
        matches.push(todo);
      }
    }
    if (matches.length > 0) return matches;
    else return null;
  };

  getTodo = (id) => {
    if (this.isEmpty()) {
      console.error(`Todo with ID ${id} cannot be found`);
      return null;
    }
    for (let td of this.#allTodos) {
      if (td.id === id) {
        return td;
      }
    }
    return null;
  };

  addTodo = (todo) => {
    this.#allTodos.push(todo);
  };

  removeTodo = (id) => {
    if (this.isEmpty()) {
      console.error(`Todo with ID ${id} cannot be found`);
      return;
    }
    this.#allTodos = this.#allTodos.filter((td) => td.id !== id);
  };

  editTodo = (id, newTitle, newDesc, newDate, newPriority) => {
    this.getTodo(id).edit(newTitle, newDesc, newDate, newPriority);
  };

  checkTodo = (id) => {
    if (this.isEmpty()) return;
    for (let i = 0; i < this.uncheckedTodos.length; i++) {
      const td = this.uncheckedTodos[i];
      if (td.id === id) {
        td.toggleCheck();
        break;
      }
    }
  };

  uncheckTodo = (id) => {
    if (this.isEmpty()) return;
    for (let i = 0; i < this.checkedTodos.length; i++) {
      const td = this.checkedTodos[i];
      if (td.id === id) {
        td.toggleCheck();
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
    this.#allTodos = [];
  };

  clearHistory = () => {
    this.#allTodos = [...this.uncheckedTodos];
  };

  sortByAddDateAsc = () => {
    this.#allTodos = this.#allTodos.sort((a, b) => {
      return Date.parse(a.addDate) - Date.parse(b.addDate);
    });
  };

  sortByAddDateDesc = () => {
    this.#allTodos = this.#allTodos.sort((a, b) => {
      return Date.parse(b.addDate) - Date.parse(a.addDate);
    });
  };

  sortByPriorityAsc = () => {
    this.#allTodos = this.#allTodos.sort((a, b) => {
      const priorityA = Project.PRIORITY_ORDER.indexOf(
        a.priority.toLowerCase()
      );
      const priorityB = Project.PRIORITY_ORDER.indexOf(
        b.priority.toLowerCase()
      );
      return priorityA - priorityB;
    });
  };

  sortByPriorityDesc = () => {
    this.#allTodos = this.#allTodos.sort((a, b) => {
      const priorityA = Project.PRIORITY_ORDER.indexOf(
        a.priority.toLowerCase()
      );
      const priorityB = Project.PRIORITY_ORDER.indexOf(
        b.priority.toLowerCase()
      );
      return priorityB - priorityA;
    });
  };

  sortByDateAsc = () => {
    this.#allTodos = this.#allTodos.sort((a, b) => {
      return Date.parse(a.date) - Date.parse(b.date);
    });
  };

  sortByDateDesc = () => {
    this.#allTodos = this.#allTodos.sort((a, b) => {
      return Date.parse(b.date) - Date.parse(a.date);
    });
  };

  sortByTitleAsc = () => {
    this.#allTodos = this.#allTodos.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  };

  sortByTitleDesc = () => {
    this.#allTodos = this.#allTodos.sort((a, b) => {
      return b.title.localeCompare(a.title);
    });
  };

  toString = () => {
    let msg = `Project Name: ${this.name}\nProject ID: ${this.id}\n`;
    if (this.#allTodos.length > 0) {
      for (let i = 0; i < this.#allTodos.length; i++) {
        msg += `To-do ${i + 1}:\n`;
        msg += this.#allTodos[i].toString() + '\n';
      }
    }
    return msg;
  };

  toJSON = () => {
    return {
      id: this.#id,
      allTodos: this.#allTodos.length
        ? this.#allTodos.map((todo) => todo.toJSON())
        : [],
      name: this.#name,
    };
  };

  static fromJSON(json) {
    const project = new Project(json.id, json.name);
    project.#allTodos = json.allTodos.map((todoJSON) =>
      Todo.fromJSON(todoJSON)
    );
    return project;
  }
}

export default Project;
