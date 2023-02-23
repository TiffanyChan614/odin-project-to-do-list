import Project from './project';

class ProjectManager {
  constructor(projects) {
    if (arguments.length === 0) {
      this.projects = [];
      this.currProject = null;
    } else {
      this.projects = projects;
      this.currProject = this.projects[0];
    }
  }

  isEmpty = () => this.projects.length === 0;

  addProject = (...args) => {
    let project = new Project(...args);
    this.projects.push(project);
    this.currProject = project;
  };

  removeProject = (id) => {
    if (this.isEmpty()) return;
    this.projects = this.projects.filter((p) => p.getId() !== id);
    if (this.getCurrProjectId() === id) {
      console.log('Selected is removed');
      this.currProject = this.projects[0];
      console.log(this.currProject.getName());
    }
  };

  setCurrProject = (id) => {
    if (this.isEmpty()) return;
    for (let p of this.projects) {
      if (p.getId() === id) {
        currProject = p;
      }
    }
  };

  getCurrProjectId = () => (this.currProject ? this.currProject.getId() : null);

  getProject = (id) => {
    if (this.isEmpty()) return null;
    for (let p of this.projects) {
      if (p.getId() === id) {
        return p;
      }
    }
    return null;
  };

  getAllProjects = () => this.projects;

  searchTodoByTitle = (searchStr) => {
    let matches = [];
    for (let project of this.projects) {
      for (let todo of project.todos) {
        if (todo.title.toLowerCase().search(searchStr.toLowerCase()) !== -1) {
          matches.push(todo);
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
