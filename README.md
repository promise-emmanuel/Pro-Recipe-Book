# Overview
As a software engineer, I am trying to enhance my understanding of dynamic web development so I developed a simple in-memory Recipe Book web app using Node.js, Express and EJS templating.

The Pro Recipe Book is a web app that helps user store recipes for they may have experimented on themselves or. think of it like an app that everyone can record their secret recipe and share for everyone to see it. To start the server, run the command node server.js from the project directory and open http://localhost:3000 in a browser to see the landing page of the app.

I also have the project hosted on render so you can view it directly from this link without cloning the repo and starting the server.

{Describe your purpose for writing this software.}

{Provide a link to your YouTube demonstration.  It should be a 4-5 minute demo of the software running (starting the server and navigating through the web pages) and a walkthrough of the code.}

[Software Demo Video](http://youtube.link.goes.here)

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