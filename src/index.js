import Project from "./project";
import ProjectManager from "./projectManager";
import DisplayControl from "./displayControl";
import "./style.css";

let projectM = new ProjectManager();
projectM.addProject(new Project());
DisplayControl.showProject(projectM);
