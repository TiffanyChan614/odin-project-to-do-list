const uuid = require('uuid');
class Todo {
  #id;
  #title;
  #desc;
  #date;
  #priority;
  #check;

  constructor(...args) {
    this.#id = `todo-${uuid.v4()}`;
    if (!args[0]) this.#title = 'New Todo';
    else this.#title = args[0];
    if (!args[1]) this.#desc = '';
    else this.#desc = args[1];
    if (!args[2]) this.#date = new Date().toISOString().split('T')[0];
    else this.#date = args[2];
    if (!args[3]) this.#priority = 'None';
    else this.#priority = args[3];
    this.#check = false;
  }

  set id(id) {
    this.#id = id;
  }
  get id() {
    return this.#id;
  }

  set title(title) {
    this.#title = title;
  }

  get title() {
    return this.#title;
  }

  set desc(desc) {
    this.#desc = desc;
  }

  get desc() {
    return this.#desc;
  }

  set date(date) {
    this.#date = date;
  }

  get date() {
    return this.#date;
  }

  set priority(priority) {
    this.#priority = priority;
  }

  get priority() {
    return this.#priority;
  }

  set check(check) {
    this.#check = check;
  }

  get check() {
    return this.#check;
  }

  toggleCheck = () => (this.#check = !this.#check);

  edit = (newTitle, newDesc, newDate, newPriority) => {
    this.#title = newTitle;
    this.#desc = newDesc;
    this.#date = newDate;
    this.#priority = newPriority;
  };

  equals = (todo) => this.#id === todo.id;

  toString = () => {
    return (
      `ID: ${this.#id}\n` +
      `Title: ${this.#title}\n` +
      `Description: ${this.#desc}\n` +
      `Due Date: ${this.#date}\n` +
      `Priority: ${this.#priority}\n` +
      `Check: ${this.#check}\n`
    );
  };
}

export default Todo;
