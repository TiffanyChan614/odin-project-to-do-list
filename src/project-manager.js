import Project from './project';

class ProjectManager {
  constructor(projects) {
    if (arguments.length === 0) {
      this.projects = [];
    } else {
      this.projects = projects;
      this.currProject = this.projects[0];
    }
  }

  isEmpty = () => {
    if (this.projects.length === 0) return true;
    return false;
  };

  addProject = (...args) => {
    let project = new Project(...args);
    this.projects.push(project);
    if (this.projects.length === 1) {
      this.currProject = this.projects[0];
    }
  };

  removeProject = (id) => {
    if (this.isEmpty()) return;
    for (let p of this.projects) {
      if (p.getId() === id) {
        this.projects = this.projects.filter((p) => !project.equals(p));
      }
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

  getCurrProjectId = () => this.currProject.getId();

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
