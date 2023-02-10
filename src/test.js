import Todo from "./todo";
import Project from "./project";
import ProjectManager from "./projectManager";

// Test Todo constructor
let todo1 = new Todo();

let todo2 = new Todo("Do laundry", null, null, null);

let todo3 = new Todo("Do laundry", "Location: 1/F", null, null);

let todo4 = new Todo("Do laundry", "Location: 1/F", "03/02/2023", null);

let todo5 = new Todo("Have dinner", "Hot and spicy hotpot", "28/01/2023", 3);

console.log(todo1, todo2, todo3, todo4);

// Test Todo setter
todo1.setTitle("Finish ToDo class");
todo1.setDescription("Plan and code the class");
todo1.setDueDate("31/01/2023");
todo1.setPriority(3);

console.log(todo1.toString());

// Test Project no-arg constructor
let project1 = new Project();

// Test Project add methods
project1.addTodo(todo1);
project1.addTodo(todo4);
project1.addTodo(todo5);
console.log(project1.toString());

// Test Project getTodo()
console.log(project1.getTodo(todo1));
let project3 = new Project();
console.log(project3.getTodo(todo1));

// Test Todo edit()
project1.getTodo(todo1).edit("title", "Finish ToDo and Project class");

// Test Project removeTodo()
project1.removeTodo(todo4);
console.log("Project after modification: ");
console.log(project1.toString());

// Test Project 2-args constructor
let todo6 = new Todo("Quiz 1");
let todo7 = new Todo("Study for mid term");

let project2 = new Project("Study Task", [todo6, todo7]);

// Test ProjectManager no-arg constructor
let projectM = new ProjectManager();

// Test ProjectManager addProject and removeProject()
projectM.addProject(project1);
projectM.addProject(project2);
console.log(projectM.toString());
projectM.removeProject(project1);
console.log(projectM.toString());

// Test searchByTitle()
let todo8 = new Todo("Quiz 2");
project2.addTodo(todo8);
// console.log(project2.toString());
let results = projectM.searchTodoByTitle("quiz");
for (let todo of results) {
  console.log(todo.toString());
}
