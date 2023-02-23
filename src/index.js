import Project from './project';
import pm from './app.js';
import displayControl from './display-control';
import './style.css';

let projects = pm.getAllProjects();
for (let p of projects) console.log(p.toString());
// projects[0].addTodo();
displayControl.activateProjectForm();
displayControl.activateProjectEvent();
displayControl.activateClearProjects();
displayControl.refreshProjects();
