const express = require('express');
const dbConnection = require('./connection');
const PORT = process.env.PORT || 3000;
const app = express();

const categories = ['id', 'name', 'image', 'tastiness_level', 'description'];

app.get('/api/v1/burgers', (req, res) => {
  dbConnection('burgers')
    .select(...categories)
    .then(burgers => res.status(200).json({ burgers }))
    .catch(error => res.status(500).json('Could not retrieve all burgers'));
});

app.get('/api/v1/burgers/allIngredients', (req, res) => {
  dbConnection('ingredients')
    .select(...categories)
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

app.get('/api/v1/burgers/:id/recipe', (req, res) => {
  const { id } = req.params;
  const rawQuery = `SELECT b.id, b.name AS burger, b.description, b.tastiness_level, json_agg(i.name) AS ingredients
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

app.listen(PORT, () => console.log('App is running!'));
