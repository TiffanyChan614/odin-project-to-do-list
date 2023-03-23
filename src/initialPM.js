import ProjectManager from './project-manager';
import Project from './project';
let pm = new ProjectManager();
if (pm.isEmpty()) {
  let proj1 = new Project(null);
  pm.addProject(proj1);
}
export default pm;
