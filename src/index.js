import pm from './initialPM.js';
import displayController from './display-controller';
import './style.css';

displayController.refreshTodos(pm);
displayController.refreshProjects(pm);
displayController.activateUI(pm);
