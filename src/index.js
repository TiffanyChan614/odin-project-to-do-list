import Project from './project';
import pm from './app.js';
import displayControl from './display-control';
import './style.css';
import btnControl from './btn-control.js';

pm.addProject('Programming');
// let projects = pm.getAllProjects();
// projects[0].addTodo();
displayControl.showProjects(pm);
