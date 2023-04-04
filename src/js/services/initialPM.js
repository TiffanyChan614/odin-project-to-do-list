import ProjectManager from './project-manager';
let pm = new ProjectManager();
// This could be handled in ProjectManager class
// createProject() will handle create a new project and add it to the project manager
// pm.createProject('To do list');
if (pm.isEmpty()) {
  pm.createProject('New Project');
}
export default pm;
