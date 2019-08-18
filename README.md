# Build a RESTful API using Node.js, Express.js, Knex.js, and PostgreSQL.

## Description

This project is a gormet burger-inspired RESTful API (who doesn't love burgers?!?) that utilizes semantic HTTP methods, intuitive url pathway naming conventions, and a many-to-many postgreSQL database of my own design. A user can GET the following: all burgers, all ingredients, a single burger, a single ingredient, and a single burger with all the ingredients in that burger's recipe; they can POST the following: a single burger, a single ingredient; and they can DELETE the following: a single burger.

## Project Successes

DATABASES - Leanring first has how to design, execute, and populate a database was awesome! Seeing how the HTTP request/response cycle functions as the bridge between the FE and the BE was a very important learning experience, and will no doubt continue to inform how a develop both the FE and BE as a full-stack software engineer.

## Project Challenges

KNEX - This was my first attempt at creating a database from scratch; so the learning curve was steep. However, fortunely, fairly quickly the concepts sunk in, and the actual schema design, migrations, and data-seeding become fairly intuitive. I used Knex.js for the SQL querying, however, on a number of endpoints, I actually found that writing directly in SQL, and  using the knex.raw() method was not only less verbose, but had much better and more reliable outcomes. While Knex.js was a good learning experience, it felt like an unnecessary abstractive layer on top of an already fairly easily readable/writable/learnable SQL experience.

## Project Extensions/Issues

* Refactor the endpoints to be pure SQL.
* Build a fun FE for it!

## Project Tech Emphasis

* JavaScript
* Node.js
* Express.js
* Knex.js
* SQL
* PostgreSQL
* Git/GitHub

## Project Management

I used GitHub issues to manage workflow.

### Schema

![Schema](assets/SQL_Schema.png)

### Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3000/api/v1/burgers` | GET | Not Needed | An array of all burgers: `[{ id: 1, name: 'The Casanova', description: 'The Casanova will have your taste buds at...', image: 'https://www.cheeseandburger.com/images/html5/burger_small/casanova.png', tastiness_level: 7, ingredients: ['Swiss Cheese', 'Beef Patty', 'Ham', ...] }, { Next Burger Object }]` |
| `http://localhost:3000/api/v1/burgers/allIngredients` | GET | Not Needed | An array of all ingredients: `[{ id: 1, name: 'Tomatoes' }, {id: 2, name: 'Beef Patty' }, { etc. }]` |
| `http://localhost:3000/api/v1/burgers/:id` | GET | Not Needed | A Specific Burger NOT Inlcuding the Ingredients: `{ id: 1, name: 'The Casanova', description: 'The Casanova will have your taste buds at...', image: 'https://www.cheeseandburger.com/images/html5/burger_small/casanova.png', tastiness_level: 7 }` |
| `http://localhost:3000/api/v1/burgers/allIngredients/:id` | GET | Not Needed | A specific ingredient: `{ id: 1, name: 'Tomatoes' }` |
| `http://localhost:3000/api/v1/burgers/:id/recipe` | GET | Not Needed | A Specific Burger INLUDING the Ingredients: `{ id: 1, name: 'The Casanova', description: 'The Casanova will have your taste buds at...', image: 'https://www.cheeseandburger.com/images/html5/burger_small/casanova.png', tastiness_level: 7, ingredients: ['Swiss Cheese', 'Beef Patty', 'Ham', ...] }` |
| `http://localhost:3000/api/v1/burgers` | POST | { name: <String>, description: <String>, image: <STRING>, tastiness_level: <NUMBER> } | A New Burger ID: `{ id: 10 }` |
| `http://localhost:3000/api/v1/burgers/:id/recipe` | POST | { ingredient: <String> } | A New Ingredient: `Congratulations, you added Broccoli to burger #10!` |
| `http://localhost:3000/api/v1/burgers/:id` | DELETE | Not Needed | A Deleted Burger: `Successfully deleted burger!` |