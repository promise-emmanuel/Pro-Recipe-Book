# Overview
As a software engineer passionate about developing innovative solutions, I continously seek to expand my expertise in all areas of software development. To further my skills, I developed the Pro Recipe Book-a simple Recipe Book app using Node.js, Express and EJS templating.

The Pro Recipe Book allows users to easily store, and share their favorite recipes-whether it is a cherished family secret or an experimental dish. To start the server locally, navigate to the project directory, run the command "node server.js" and open http://localhost:3000 in a browser to access the landing page of the app.

For added convenience, the project is hosted live on Render, so you can view the directly from this link without cloning the repo and starting the server.
[Live Software Link](https://pro-recipe-book.onrender.com)


The primary goal of this project is to deepen my understanding of server-side development, dynamic content generation, and user interaction management. This demo video provides a detailed walkthough of the code, demonstrate starting the server and guides you through each page of the app.
[Software Demo Video](https://youtu.be/wbJZK0v3eJw)


# Web Pages
- Recipe List Page (Home Page):
This is the landing page that displays all recipes stored in memory. Each recipe is shown with its title, ingredients, and instructions. The content is dynamically generated based on the current state of the recipes array.

- Add Recipe Page:
This page is accessible via the "Add New Recipe" link, this page presents a form where users can input a recipe title, ingredients, and instructions. when submitted, the new recipe is added to the in-memory array, adn the user is redirected back to the recipe list page where the new entry is dynamically displayed.


# Development Environment
1. Tools
 - Visual studio code for code editing
 - Git for version control

2. Programming languages & libraries
 - Node.js for server-side scripting
 - Express as the web framework
 - EJS (embedded JavaScript) for templating and dynamically generating HTML


# Useful Websites

{Make a list of websites that you found helpful in this project}
* [Express Documentation](https://expressjs.com/)
* [Embedded JavaScript Documentation](https://ejs.co/#docs)

# Future Work

{Make a list of things that you need to fix, improve, and add in the future.}
* Include Edit & Delete Buttons to every new recipes
* Introduce a database to store recipes permanently
* Improve the the visual design using css frameworks
* Add advanced functionality like user authentication, error handling etc.