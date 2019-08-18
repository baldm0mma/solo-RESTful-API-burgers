### Build a RESTful API using Node.js, Express.js, Knex.js, and PostgreSQL.

### Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3000/api/v1/burgers` | GET | Not Needed | An array of all existing animals rescued: `[{ id: 1, name: 'The Casanova', description: 'The Casanova will have your taste buds at...', image: 'https://www.cheeseandburger.com/images/html5/burger_small/casanova.png', tastiness_level: 7, ingredients: ['Swiss Cheese', 'Beef Patty', 'Ham', ...] }, { Next Burger Object }]` |
| `http://localhost:3000/api/v1/burgers/allIngredients` | GET | Not Needed | An array of all existing ingredients: `[{ id: 1, name: 'Tomatoes' }, {id: 2, name: 'Beef Patty' }, { etc. }]` |
| `http://localhost:3000/api/v1/burgers/:id` | GET | Not Needed | A Specific Burger NOT Inlcuding the Ingredients: `{ id: 1, name: 'The Casanova', description: 'The Casanova will have your taste buds at...', image: 'https://www.cheeseandburger.com/images/html5/burger_small/casanova.png', tastiness_level: 7 }` |
| `http://localhost:3000/api/v1/burgers/:id/recipe` | GET | Not Needed | A Specific Burger INLUDING the Ingredients: `{ id: 1, name: 'The Casanova', description: 'The Casanova will have your taste buds at...', image: 'https://www.cheeseandburger.com/images/html5/burger_small/casanova.png', tastiness_level: 7, ingredients: ['Swiss Cheese', 'Beef Patty', 'Ham', ...] }` |
| `http://localhost:3000/api/v1/burgers` | POST | { name: <String>, description: <String>, image: <STRING>, tastiness_level: <NUMBER> } | A New Burger ID: `{ id: 10 }` |
| `http://localhost:3000/api/v1/burgers/:id/recipe` | POST | { ingredient: <String> } | A New Ingredient: `Congratulations, you added Broccoli to burger #10!` |
| `http://localhost:3000/api/v1/burgers/:id` | DELETE | Not Needed | A Deleted Burger: `Successfully deleted burger!` |