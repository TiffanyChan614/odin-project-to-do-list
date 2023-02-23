import pm from './app.js';
import displayControl from './display-control.js';

const addProjBtn = document.querySelector('#add-proj-btn');
const projForm = document.querySelector('#new-project-form');
const projNameField = document.querySelector('#project-name');

projForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('submit');
  let name = projNameField.value;
  if (name) pm.addProject(name);
  else pm.addProject();
  displayControl.clearProjects();
  displayControl.showProjects(pm);
  console.log(pm.toString());
});
