// import Project from './project';
import pm from './initialPM.js';
import displayController from './display-controller';
import './style.css';

// let projects = pm.getAllProjects();
// console.log(projects[0].toString());
// console.log(pm.getCurrProject());
displayController.refreshTodos(pm);
displayController.refreshProjects(pm);
displayController.activateUI(pm);
