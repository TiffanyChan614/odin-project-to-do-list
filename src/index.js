// import Project from './project';
import pm from './initialPM.js';
import displayController from './display-controller';
import './style.css';
import { clearLocalStorage } from './local-storage.js';

// let projects = pm.getAllProjects();
// console.log(projects[0].toString());
// console.log(pm.getCurrProject());
clearLocalStorage('ProjectManager');
displayController.refreshTodos(pm);
displayController.refreshProjects(pm);
displayController.activateUI(pm);
