import Project from './project';
import pm from './app.js';
import displayControl from './display-control';
import './style.css';

// let projects = pm.getAllProjects();
// console.log(projects[0].toString());
displayControl.refreshTodos();
displayControl.refreshProjects();
displayControl.activateUI();
