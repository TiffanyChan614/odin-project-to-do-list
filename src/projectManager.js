class ProjectManager {
  constructor(projects) {
    if (arguments.length === 0) {
      this.projects = [];
    } else {
      this.projects = projects;
    }
  }

  isEmpty = () => {
    if (this.projects.length === 0) return true;
    return false;
  };

  addProject = (project) => {
    this.projects.push(project);
  };

  removeProject = (id) => {
    if (this.isEmpty()) return;
    for (let p of this.projects) {
      if (project.getId() === id) {
        this.projects = this.projects.filter((p) => !project.equals(p));
      }
    }
  };

  getProject = (project) => {
    if (this.isEmpty()) return null;
    for (let p of this.projects) {
      if (project.equals(p)) {
        return p;
      }
    }
    return null;
  };

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

  clearAllProject = () => (this.projects = []);

  toString = () => {
    let out = "";
    for (let project of this.projects) {
      out += project.toString() + "\n";
    }
    return out;
  };
}

export default ProjectManager;
