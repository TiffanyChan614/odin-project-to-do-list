# Todo List

This is a simple todo list app inspired by [The Odin Project - Todo list](https://www.theodinproject.com/lessons/node-path-javascript-todo-list). I did this project to practice my skills in JavaScript that I learned from Web Scripting - Intro course in Fanshawe College. This project also allows me to explore more about DOM manipulation and how to use webpack to bundle my code.

## Live Demo

You can view my page here: [Todo List](https://tiffanychan614.github.io/odin-to-do-list/)

## Screenshots

![](./screenshots/todo1.png)
![](./screenshots/todo2.png)
![](./screenshots/todo3.png)

## Run Locally
Clone the project

    ```bash
    git clone https://github.com/TiffanyChan614/odin-to-do-list
    ```

Go to the project directory

    ```bash
    cd odin-to-do-list
    ```
Install dependencies

    ```bash
    npm install
    ```
Start the server

    ```bash
    npm run start
    ```

### Dev Dependencies:

- [css-loader](https://www.npmjs.com/package/css-loader) (^6.7.3): A webpack loader for handling CSS files.
- [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) (^5.5.0): Simplifies the creation of an HTML file to include your webpack bundles.
- [style-loader](https://www.npmjs.com/package/style-loader) (^3.3.1): A webpack loader for injecting CSS styles into the DOM.
- [webpack](https://webpack.js.org/) (^5.75.0): A static module bundler for JavaScript applications.
- [webpack-cli](https://www.npmjs.com/package/webpack-cli) (^5.0.1): Command-line interface for Webpack.
- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) (^4.11.1): Development server for Webpack.

### Dependencies:

- [colorette](https://www.npmjs.com/package/colorette) (^2.0.20): A library for adding color to console output.
- [npm-watch](https://www.npmjs.com/package/npm-watch) (^0.11.0): A utility for running npm scripts in response to file changes.
- [uuid](https://www.npmjs.com/package/uuid) (^9.0.0): A library for generating unique identifiers (UUIDs).
- [watch](https://www.npmjs.com/package/watch) (^0.13.0): A utility for watching files and executing commands in response to changes.

## Built With

- HTML
- CSS
- JavaScript
- Webpack

## Skills Learned

- DOM manipulation
- Webpack
- ES6 Modules
- OOP design in JavaScript
- Local Storage
- CSS Flexbox
- UI design

## Features

- You can add, edit, and delete a project and a todo item.
- You can write a description, due date, and priority for a todo item.
- You can view a todo item's details by clicking on it.
- You can sort todo items by due date, priority, date created, or title.
- You can mark a todo item as completed.
- You can toggle between showing completed todo items or hiding them.
- You can view all todo items or todo items by project.
- You can minimize the sidebar.
- You can search for todo items by title.
- Todo items are saved in local storage.

## License

[MIT](https://choosealicense.com/licenses/mit/)
