import ProjectManager from './project-manager';
import Project from '../models/project';
let pm = new ProjectManager();
// This could be handled in ProjectManager class
// createProject() will handle create a new project and add it to the project manager
// pm.createProject('To do list');
if (pm.isEmpty()) {
  let proj1 = new Project(null);
  pm.addProject(proj1);
}
export default pm;
