const express = require('express');
const dbConnection = require('./connection');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

const categories = ['id', 'name', 'image', 'tastiness_level', 'description'];

app.get('/api/v1/burgers', (req, res) => {
  dbConnection('burgers')
    .select(...categories)
    .then(burgers => res.status(200).json({ burgers }))
    .catch(error => res.status(500).json('Could not retrieve all burgers'));
});

app.get('/api/v1/burgers/allIngredients', (req, res) => {
  dbConnection('ingredients')
    .select('name', 'id')
    .then(ingredients => res.status(200).json({ ingredients }))
    .catch(error => res.status(500).json('Could not retrieve all ingredients'));
});

app.get('/api/v1/burgers/:id', (req, res) => {
  const { id } = req.params;
  dbConnection('burgers')
    .select(...categories)
    .where({ id })
    .then(burger => res.status(200).json(burger[0]))
    .catch(error => res.status(404).json('Could not retrieve burger'));
});

app.get('/api/v1/burgers/allIngredients/:id', (req, res) => {
  const { id } = req.params;
  dbConnection('ingredients')
    .select('name', 'id')
    .where({ id })
    .then(ingredient => res.status(200).json(ingredient[0]))
    .catch(error => res.status(404).json('Could not retrieve ingredient'));
});

app.get('/api/v1/burgers/:id/recipe', (req, res) => {
  const { id } = req.params;
  const rawQuery = `SELECT b.id, b.name AS burger, b.image, b.tastiness_level, b.description, json_agg(i.name) AS ingredients
  FROM burgers b
  JOIN burger_ingredients bi ON b.id = bi.burger_id
  JOIN ingredients i ON i.id = bi.ingredients_id
  WHERE b.id = ${id}
  GROUP BY b.id`;
  dbConnection
    .raw(rawQuery)
    .then(burgers => res.status(200).json(burgers.rows[0]))
    .catch(error => res.status(404).json('Could not retrieve recipe'));
});

app.post('/api/v1/burgers', (req, res) => {
  const burger = req.body;
  for (let requiredParams of [
    'name',
    'description',
    'tastiness_level',
    'image'
  ]) {
    if (!burger[requiredParams]) {
      return res.status(422).send({
        error: `Expected format: { name: <String>, description: <String>, tastiness_level: <Number>, image: <String> }. Please insert a(n) "${requiredParams}" to continue.`
      });
    }
  }
  dbConnection('burgers')
    .insert(burger, 'id')
    .then(burger => {
      res.status(201).json({ id: burger[0] });
    })
    .catch(error => {
      res.status(500).json('Cannot add burger at this time');
    });
});

app.post('/api/v1/burgers/:id/recipe', (req, res) => {
  const { id } = req.params;
  const newIngredient = req.body.ingredient;
  if (!newIngredient) {
    return res.status(422).send({
      error: 'Please enter a valid ingredient'
    });
  }
  dbConnection('ingredients')
    .insert({ name: newIngredient }, 'id')
    .then(ingredId =>
      res
        .status(200)
        .json(`Congratulations, you added ${newIngredient} to burger ${id}!`)
    )
    .catch(error => {
      res.status(500).json('Cannot add ingredient at this time');
    });
});

app.delete('/api/v1/burgers/:id', (req, res) => {
  const { id } = req.params;
  dbConnection('burger_ingredients')
    .where({ burger_id: id })
    .del()
    .then(() =>
      dbConnection('burgers')
        .where({ id })
        .del()
        .then(() => res.status(204).json('Successfully deleted burger'))
        .catch(error =>
          res.status(500).json('Cannot remove burger at this time')
        )
    );
});

app.listen(PORT, () => console.log('App is running!'));
