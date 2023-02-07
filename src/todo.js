class Todo {
  constructor(title, desc, dueDate, priority) {
    if (arguments.length === 0) {
      this.title = "Unknown";
      this.description = "";
      this.dueDate = null;
      this.priority = null;
      this.check = false;
    } else {
      this.title = title;
      this.description = desc;
      this.dueDate = dueDate;
      this.priority = priority;
      this.check = false;
    }
  }

  getTitle = () => this.title;
  setTitle = (title) => (this.title = title);
  getDescription = () => this.description;
  setDescription = (desc) => (this.description = desc);
  getDueDate = () => this.dueDate;
  setDueDate = (dueDate) => (this.dueDate = dueDate);
  getPriority = () => this.priority;
  setPriority = (priority) => (this.priority = priority);
  getCheck = () => this.check;
  setCheck = (check) => (this.check = check);

  check = () => (this.check = !this.check ? true : false);

  edit = (field, newVal) => {
    let validField = ["title", "description", "dueDate", "priority", "check"];
    if (validField.indexOf(field) == -1) {
      console.log("ERROR: invalid field");
      return;
    }
    this["set" + field.charAt(0).toUpperCase() + field.slice(1)](newVal);
  };

  equals = (todo) => {
    return (
      this.title === todo.title &&
      this.description === todo.description &&
      this.dueDate === todo.dueDate &&
      this.priority === todo.priority &&
      this.check === todo.check
    );
  };

  toString = () => {
    return (
      `Title: ${this.title}\n` +
      `Description: ${this.description}\n` +
      `Due Date: ${this.dueDate}\n` +
      `Priority: ${this.priority}\n` +
      `Check: ${this.check}\n`
    );
  };
}

export default Todo;
