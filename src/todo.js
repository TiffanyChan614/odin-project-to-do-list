const uuid = require('uuid');
class Todo {
  constructor(...args) {
    this.id = `todo-${uuid.v4()}`;
    if (!args[0]) this.title = 'New Todo';
    else this.title = args[0];
    if (!args[1]) this.desc = '';
    else this.desc = args[1];
    if (!args[2]) this.date = new Date().toISOString().split('T')[0];
    else this.date = args[2];
    if (!args[3]) this.priority = 'None';
    else this.priority = args[3];
    this.check = false;
  }

  getId = () => this.id;
  getTitle = () => this.title;
  setTitle = (title) => (this.title = title);
  getDesc = () => this.desc;
  setDesc = (desc) => (this.desc = desc);
  getDate = () => this.date;
  setDate = (date) => (this.date = date);
  getPriority = () => this.priority;
  setPriority = (priority) => (this.priority = priority);
  getCheck = () => this.check;
  setCheck = (check) => (this.check = check);

  toggleCheck = () => (this.check = !this.check);

  edit = (newTitle, newDesc, newDate, newPriority) => {
    this.title = newTitle;
    this.desc = newDesc;
    this.date = newDate;
    this.priority = newPriority;
  };

  equals = (todo) => this.id === todo.id;

  toString = () => {
    return (
      `ID: ${this.id}\n` +
      `Title: ${this.title}\n` +
      `Description: ${this.description}\n` +
      `Due Date: ${this.date}\n` +
      `Priority: ${this.priority}\n` +
      `Check: ${this.check}\n`
    );
  };
}

export default Todo;
