import ToDo from "./todo";
import Project from "./project";

let todo1 = new ToDo();

let todo2 = new ToDo("Do laundry");

let todo3 = new ToDo("Do laundry", "Location: 1/F");

let todo4 = new ToDo("Do laundry", "Location: 1/F", "03/02/2023");

let todo5 = new ToDo("Have dinner", "Hot and spicy hotpot", "28/01/2023", 3);

console.log(todo1, todo2, todo3, todo4);

todo1.setTitle("Finish ToDo class");
todo1.setDescription("Plan and code the class");
todo1.setDueDate("31/01/2023");
todo1.setPriority(3);

console.log(todo1.toString());

let project1 = new Project();
project1.addTodo(todo1);
project1.addTodo(todo4);
project1.addTodo(todo5);
console.log(project1.toString());

console.log(project1.getTodo(todo1));

project1.getTodo(todo1).edit("title", "Finish ToDo and Project class");
project1.removeTodo(todo4);
console.log("Project after modification: ");
console.log(project1.toString());
