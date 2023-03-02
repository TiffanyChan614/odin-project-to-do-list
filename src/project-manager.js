class ProjectManager {
  #projects;
  #currProject;

  constructor(...projects) {
    this.#projects = projects.length === 0 ? [] : projects;
    this.#currProject = this.#projects.length > 0 ? this.#projects[0] : null;
  }

  get projects() {
    return this.#projects;
  }

  set currProject(currProject) {
    this.#currProject = currProject;
  }

  get currProject() {
    return this.#currProject;
  }

  isEmpty = () => this.#projects.length === 0;

  getProject = (id) => {
    if (this.isEmpty()) {
      console.log(`Project with ID ${id} is not found`);
    }
    for (let p of this.#projects) {
      if (p.id === id) {
        return p;
      }
    }
    return null;
  };

  addProject = (project) => {
    this.#projects.push(project);
    this.#currProject = project;
  };

  removeProject = (id) => {
    if (this.isEmpty()) {
      console.log(`Project with ID ${id} is not found`);
      return;
    }
    this.#projects = this.#projects.filter((p) => p.id !== id);
    if (this.#currProject.id === id) {
      // console.log('Selected is removed');
      if (!this.isEmpty()) {
        this.#currProject = this.#projects[0];
        console.log(this.#currProject.name);
      } else this.#currProject = null;
    }
  };

  addTodo = (todo) => {
    if (this.#currProject) this.#currProject.addTodo(todo);
  };

  removeTodo = (id) => {
    if (this.#currProject) this.#currProject.removeTodo(id);
  };

  getTodo = (id) => {
    if (this.#currProject) return this.#currProject.getTodo(id);
  };

  editTodo = (id, title, desc, date, priority) =>
    this.#currProject.editTodo(id, title, desc, date, priority);

  toggleCheckTodo = (id) => this.#currProject.toggleCheckTodo(id);

  editProject = (id, newName) => (this.getProject(id).name = newName);

  clearCurrentProject = () => this.#currProject.clearAllTodos();

  searchTodoByTitle = (searchStr) => {
    let matches = [];
    for (let project of this.#projects) {
      for (let todo of project.getAllTodos()) {
        if (todo.title.toLowerCase().includes(searchStr.toLowerCase())) {
          let match = { matchedProj: project, matchedTodo: todo };
          matches.push(match);
        }
      }
    }
    return matches;
  };

  clearAllProjects = () => (this.#projects = []);

  toString = () => {
    let out = '';
    for (let project of this.#projects) {
      out += project.toString() + '\n';
    }
    return out;
  };
}

export default ProjectManager;
