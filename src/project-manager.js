import { loadLocalStorage, saveLocalStorage } from './local-storage';
import Project from './project';

class ProjectManager {
  #projects;
  #currProject;

  constructor(...projects) {
    const storedData = loadLocalStorage('projectManager');
    if (storedData) {
      if (storedData.projects)
        this.#projects = storedData.projects.map((p) => Project.fromJSON(p));
      else this.#projects = [];
      if (this.#projects && storedData.currProjectId) {
        const tempProj = this.getProject(storedData.currProjectId);
        if (tempProj) this.#currProject = tempProj;
        else this.#currProject = null;
      } else {
        this.#currProject = null;
      }
    } else {
      this.#projects =
        projects.length > 0 ? projects.map((p) => new Project(p)) : [];
      this.#currProject = this.#projects.length > 0 ? this.#projects[0] : null;
      this.save();
    }
  }

  get projects() {
    return this.#projects;
  }

  set currProject(currProj) {
    for (const proj of this.#projects) {
      if (proj.id === currProj.id) {
        this.#currProject = currProj;
        this.save();
        return;
      }
    }
    this.#currProject = null;
    this.save();
  }

  get currProject() {
    return this.#currProject;
  }

  toJSON = () => {
    const projectsJSON = this.#projects.map((p) => p.toJSON());
    const currProjectId = this.#currProject ? this.#currProject.id : null;
    return { projects: projectsJSON, currProjectId: currProjectId };
  };

  static fromJSON(json) {
    const projectManager = new ProjectManager();
    if (!json || !json.projects) {
      return projectManager;
    }
    json.projects.forEach((projectJSON) => {
      const project = Project.fromJSON(projectJSON);
      projectManager.addProject(project);
      if (json.currProjectId === project.id) {
        projectManager.setCurrentProject(project);
      }
    });
    return projectManager;
  }

  save = () => {
    saveLocalStorage('projectManager', this.toJSON());
  };

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
    this.save();
  };

  removeProject = (id) => {
    if (this.isEmpty()) {
      console.log(`Project with ID ${id} is not found`);
      return;
    }
    this.#projects = this.#projects.filter((p) => p.id !== id);
    if (this.#currProject.id === id) {
      if (!this.isEmpty()) {
        this.#currProject = this.#projects[0];
      } else this.#currProject = null;
    }
    this.save();
  };

  addTodo = (todo) => {
    if (this.#currProject) {
      this.#currProject.addTodo(todo);
      this.save();
    }
  };

  removeTodo = (id) => {
    if (this.#currProject) {
      this.#currProject.removeTodo(id);
      this.save();
    }
  };

  getTodo = (id) => {
    if (this.#currProject) return this.#currProject.getTodo(id);
  };

  editTodo = (id, title, desc, date, priority) => {
    this.#currProject.editTodo(id, title, desc, date, priority);
    this.save();
  };

  toggleCheckTodo = (id) => {
    this.#currProject.toggleCheckTodo(id);
    this.save();
  };

  editProject = (id, newName) => {
    this.getProject(id).name = newName;
    this.#currProject = this.getProject(id);
    this.save();
  };

  clearCurrentProject = () => {
    if (this.#currProject) {
      this.#currProject.clearAllTodos();
      this.save();
    }
  };

  searchTodoByTitle = (searchStr) => {
    let matches = [];
    for (let project of this.#projects) {
      for (let todo of project.allTodos) {
        if (todo.title.toLowerCase().includes(searchStr.toLowerCase())) {
          let match = { matchedProj: project, matchedTodo: todo };
          matches.push(match);
        }
      }
    }
    return matches;
  };

  clearAllProjects = () => {
    this.#projects = [];
    this.#currProject = null;
    this.save();
  };

  toString = () => {
    let out = '';
    for (let project of this.#projects) {
      out += project.toString() + '\n';
    }
    return out;
  };
}

export default ProjectManager;
