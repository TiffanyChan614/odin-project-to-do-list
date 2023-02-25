import Project from './project';

class ProjectManager {
  constructor(...projects) {
    this.projects = projects.length === 0 ? [] : projects;
    this.currProject = this.projects.length > 0 ? this.projects[0] : null;
  }

  isEmpty = () => this.projects.length === 0;

  getProject = (id) => {
    if (this.isEmpty()) return null;
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
    if (this.isEmpty()) return;
    this.projects = this.projects.filter((p) => p.getId() !== id);
    if (this.getCurrProjectId() === id) {
      // console.log('Selected is removed');
      this.currProject = this.projects[0];
      // console.log(this.currProject.getName());
    }
  };

  addTodo = (todo) => this.currProject.addTodo(todo);

  removeTodo = (id) => this.currProject.removeTodo(id);

  editProject = (id, newName) => this.getProject(id).setName(newName);

  setCurrProject = (project) => {
    if (project instanceof Project) this.currProject = project;
  };

  getCurrProject = () => this.currProject;

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
