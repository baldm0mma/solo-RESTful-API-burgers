// Requiring express
const express = require('express');

// This is the connection to my DB
const dbConnection = require('./connection');

// This defines the port on which I am connecting. It will be defined by whatever platform the server is running on, else it will default to my machine at port 3000
const PORT = process.env.PORT || 3000;

// This creates my app object, which I use for my endpoints
const app = express();

// This gives me the abilty to stringify and parse json data
app.use(express.json());

// This variable is used in a number of my endpoints to get back the data I'm loong for
const categories = ['id', 'name', 'image', 'tastiness_level', 'description'];

// This endpoint returns and array of all burgers without thier respective ingredients
app.get('/api/v1/burgers', (req, res) => {
  // Here I connect to my DB
  dbConnection('burgers')
    // Here I use the above variable and the select() method to select 5 rows of info
    .select(...categories)
    // Async then() method that will execute my happy path
    .then(burgers => res.status(200).json({ burgers }))
    // Async catch() method to catch any errors that occured, and will return 500 status if fails
    .catch(error => res.status(500).json('Could not retrieve all burgers'));
});

// This endpoint returns and array of all ingredients
app.get('/api/v1/burgers/allIngredients', (req, res) => {
  // Here I connect to my DB
  dbConnection('ingredients')
    // Here I only need to select 'name' and 'id'
    .select('name', 'id')
    // Async then() method that will execute my happy path
    .then(ingredients => res.status(200).json({ ingredients }))
    // Async catch() method to catch any errors that occured, and will return 500 status if fails
    .catch(error => res.status(500).json('Could not retrieve all ingredients'));
});

// This endpoint returns a single burger
app.get('/api/v1/burgers/:id', (req, res) => {
  // Here I destructure the id from the given params
  const { id } = req.params;
  // Here I connect to my DB
  dbConnection('burgers')
    // Here I use the above variable and the select() method to select 5 rows of info
    .select(...categories)
    // I select the rows WHERE the row id === the above destructured id
    .where({ id })
    // Async then() method that will execute my happy path
    .then(burger => res.status(200).json(burger[0]))
    // Async catch() method to catch any errors that occured, and will return 404 status if fails
    .catch(error => res.status(404).json('Could not retrieve burger'));
});

// This endpoint returns a single ingredient
app.get('/api/v1/burgers/allIngredients/:id', (req, res) => {
  // Here I destructure the id from the given params
  const { id } = req.params;
  // Here I connect to my DB
  dbConnection('ingredients')
    // Here I only need to select 'name' and 'id'
    .select('name', 'id')
    // I select the rows WHERE the row id === the above destructured id
    .where({ id })
    // Async then() method that will execute my happy path
    .then(ingredient => res.status(200).json(ingredient[0]))
    // Async catch() method to catch any errors that occured, and will return 404 status if fails
    .catch(error => res.status(404).json('Could not retrieve ingredient'));
});

// This endpoint returns a single burger WITH all it's ingredients
app.get('/api/v1/burgers/:id/recipe', (req, res) => {
  // Here I destructure the id from the given params
  const { id } = req.params;
  // Here I wanted to try out some pure SQL. This variable is simply a SQL query. I did this for 2 reasons: 1, I wanted to try pure SQL, and 2, I couldn't get my Knex.js to work properly. I'm selecting 6 columns, renaming some of them, and using the every-helpful json aggrigator method. I begin my select from my burgers table, join my join-join table where the burger_id foriegn key === the burger id, then join my ingredients table where my ingredients_id === my ingredient.id. Then group it all by the burger id.
  const rawQuery = `SELECT b.id, b.name AS burger, b.image, b.tastiness_level, b.description, json_agg(i.name) AS ingredients
  FROM burgers b
  JOIN burger_ingredients bi ON b.id = bi.burger_id
  JOIN ingredients i ON i.id = bi.ingredients_id
  WHERE b.id = ${id}
  GROUP BY b.id`;
  // Here I connect to my DB
  dbConnection
    // Here I insert my variable using the .raw() method
    .raw(rawQuery)
    // Async then() method that will execute my happy path
    .then(burgers => res.status(200).json(burgers.rows[0]))
    // Async catch() method to catch any errors that occured, and will return 404 status if fails
    .catch(error => res.status(404).json('Could not retrieve recipe'));
});

// This endpoint posts a single burger
app.post('/api/v1/burgers', (req, res) => {
  // Here I am capturing the sent burger object
  const burger = req.body;
  // Here I am looping through a set of 4 params to verify that the send data is complete
  for (let requiredParams of [
    'name',
    'description',
    'tastiness_level',
    'image'
  ]) {
    // Here if the required param is empty, I throw 422 error
    if (!burger[requiredParams]) {
      // Here is the error with the specific language and information
      return res.status(422).send({
        error: `Expected format: { name: <String>, description: <String>, tastiness_level: <Number>, image: <String> }. Please insert a(n) "${requiredParams}" to continue.`
      });
    }
  }
  // Here I connect to my DB
  dbConnection('burgers')
    // Here I insert the verified burger object into my burger table
    .insert(burger, 'id')
    // Async then() method that will execute my happy path
    .then(burger => {
      // Here I return back the burger id that was just made
      res.status(201).json({ id: burger[0] });
    })
    // Async catch() method to catch any errors that occured, and will return 500 status if fails
    .catch(error => {
      res.status(500).json('Cannot add burger at this time');
    });
});

// This endpoint posts an ingredient to a burger
app.post('/api/v1/burgers/:id/recipe', (req, res) => {
  // Here I destructure the id from the given params
  const { id } = req.params;
  // Here I am capturing the sent ingredient name as a string
  const newIngredient = req.body.ingredient;
  // Here is a verification condition that checks to make sure the sent string isn't empty
  if (!newIngredient) {
    // If the send string IS empty, it throws a 422 error
    return res.status(422).send({
      error: 'Please enter a valid ingredient'
    });
  }
  // Here I connect to my DB
  dbConnection('ingredients')
    // Here I insert the verified ingredient value into my ingredient table
    .insert({ name: newIngredient }, 'id')
    // Here I return back the following message with the ingredient name and burger id
    .then(ingredId =>
      res
        .status(200)
        .json(`Congratulations, you added ${newIngredient} to burger ${id}!`)
    )
    // Async catch() method to catch any errors that occured, and will return 500 status if fails
    .catch(error => {
      res.status(500).json('Cannot add ingredient at this time');
    });
});

// This endpoint deletes a specific burger
app.delete('/api/v1/burgers/:id', (req, res) => {
  // Here I destructure the id from the given params
  const { id } = req.params;
  // Here I connect to my DB
  dbConnection('burger_ingredients')
    // I select the rows WHERE the join-table burger_id === the above destructured id
    .where({ burger_id: id })
    // Then I delete that info on the join table
    .del()
    // Then nest my next deletion, which will be from the burger table
    .then(() =>
      // Connect again to my DB
      dbConnection('burgers')
        // I select the rows WHERE the burger table burger.id === the above destructured id
        .where({ id })
        // Then delete that data
        .del()
        // Here I return back the following message
        .then(() => res.status(204).json('Successfully deleted burger'))
        // Async catch() method to catch any errors that occured, and will return 500 status if fails
        .catch(error =>
          res.status(500).json('Cannot remove burger at this time')
        )
    );
});

// This is my server listening for any requests
app.listen(PORT, () => console.log('App is running!'));
