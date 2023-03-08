# Kanban Guru - The Kanban task management web app 

### Links

- Live Site URL: [Kanban Guru](https://kanban-guru.fly.dev/) (https://kanban-guru.fly.dev/)

I built this app from figma designs from the [Kanban task management web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/kanban-task-management-web-app-wgQLt-HlbB). My focus was originally frontend, along with function with state. I revisited the app and built a backend so that I can use it on a daily basis to manage my projects.

## Table of contents

- [Overview](#overview)
  - [Requirements](#requirements)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Things to add](#things-to-add)
- [Author](#author)

## Overview

### Requirements

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete boards and tasks
- Receive form validations when trying to create/edit boards and tasks
- Mark subtasks as complete and move tasks between columns
- Hide/show the board sidebar
- Toggle the theme between light/dark modes
- **Bonus**: Allow users to drag and drop tasks to change their status and re-order them in a column
- Keep track of any changes, even after refreshing the browser
- Build this project as a full-stack application

### Screenshot

![Dark Mode](./public/assets/kanbanguru-screenshot.png)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed JavaScript language
- [Redux](https://redux.js.org/) - State management
- [Redux toolkit](https://redux-toolkit.js.org/) - Tools for redux
- [tailwind](https://tailwindcss.com/) - For styles
- [Node.js](https://nodejs.org/en/) - Javascript runtime environment
- [express](https://expressjs.com/) - Framework for Node.js
- [MongoDB](https://www.mongodb.com/atlas/database) - Cloud database 
- [Mongoose]() - Schemas

### What I learned

I learned a lot while building this project! I wanted to take on a challenging project and build it from scratch. I used this project as an opportunity to strengthen some skills:

- I used TypeScript, which I had only made smaller projects with before. When I first used TypeScript, it seemed a bit tedious, but the more I work with it, the more I have been able to see benefits that lead to a better developer experience.
- I learned and used Redux for the first time. During the original frontend process, I took a break and worked on a small demo app on the side to learn redux and redux toolkit.
- I was going to use React Context for state, which I had used before, but as I was thinking out how to put it together, I thought, this would be the perfect time to learn Redux. So I went ahead and built out the structure and style, then dove into Redux.
- I used tailwind for the first time while building this.
- After I had the frontend complete, I worked on some other projects that included backends. Comfortable with that, I decided to use MongoDB as it would be simple and efficient for this app. It was an interesting challenge with a more complex data model with a Board consisting of its name and identifying attributes, columns, task objects, and subtask objects inside the tasks.
- I added JWT Authentication so that users can create and save private boards.
- to be continued...

### Things to add
When I get some time, I could create a system to give other users permissions to collaborate on a board, and possibly allow the leader to assign various tasks to different users.

## Author

- Website - [Greg Schoenberg](https://gregschoenberg.com)





export FLYCTL_INSTALL="/home/gregschoenberg/.fly"
export PATH="$FLYCTL_INSTALL/bin:$PATH"
