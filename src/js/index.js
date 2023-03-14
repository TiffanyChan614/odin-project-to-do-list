import pm from './services/initialPM.js';
import displayController from './services/display-controller';
import '../style/style.css';

displayController.refreshTodos(pm);
displayController.refreshProjects(pm);
displayController.activateUI(pm);
