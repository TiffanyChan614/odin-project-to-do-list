import Project from './project';

class ProjectManager {
  constructor(...projects) {
    this.projects = projects.length === 0 ? [] : projects;
    this.currProject = this.projects.length > 0 ? this.projects[0] : null;
  }

  isEmpty = () => this.projects.length === 0;

  getProject = (id) => {
    if (this.isEmpty()) {
      console.log(`Project with ID ${id} is not found`);
    }
    for (let p of this.projects) {
      if (p.getId() === id) {
        return p;
      }
    }
    return null;
  };

  addProject = (project) => {
    this.projects.push(project);
    this.currProject = project;
  };

  removeProject = (id) => {
    if (this.isEmpty()) {
      console.log(`Project with ID ${id} is not found`);
      return;
    }
    this.projects = this.projects.filter((p) => p.getId() !== id);
    if (this.getCurrProjectId() === id) {
      // console.log('Selected is removed');
      this.currProject = this.projects[0];
      // console.log(this.currProject.getName());
    }
  };

  addTodo = (todo) => {
    if (this.currProject) this.currProject.addTodo(todo);
  };

  removeTodo = (id) => {
    if (this.currProject) this.currProject.removeTodo(id);
  };

  getTodo = (id) => {
    if (this.currProject) return this.currProject.getTodo(id);
  };

  editTodo = (id, title, desc, date, priority) =>
    this.currProject.editTodo(id, title, desc, date, priority);

  checkTodo = (id) => this.currProject.checkTodo(id);

  editProject = (id, newName) => this.getProject(id).setName(newName);

  setCurrProject = (project) => {
    if (project instanceof Project) this.currProject = project;
  };

  getCurrProject = () => this.currProject;

  clearCurrentProject = () => this.currProject.clearAllTodos();

  getAllProjects = () => this.projects;

  searchTodoByTitle = (searchStr) => {
    let matches = [];
    for (let project of this.projects) {
      for (let todo of project.getAllTodos()) {
        if (todo.title.toLowerCase().includes(searchStr.toLowerCase())) {
          let match = { matchedProj: project, matchedTodo: todo };
          matches.push(match);
        }
      }
    }
    return matches;
  };

  clearAllProjects = () => (this.projects = []);

  toString = () => {
    let out = '';
    for (let project of this.projects) {
      out += project.toString() + '\n';
    }
    return out;
  };
}

export default ProjectManager;
