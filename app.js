const express = require('express');
const dbConnection = require('./connection');
const PORT = process.env.PORT || 3000;
const app = express();

const categories = ['id', 'name', 'image', 'tastiness_level', 'description'];

app.get('/api/v1/burgers', (req, res) => {
  dbConnection('burgers')
    .select(...categories)
    .then(burgers => res.status(200).json({ burgers }))
    .catch(error => res.json('Could not retrieve all burgers'));
});

app.get('/api/v1/burgers/allIngredients', (req, res) => {
  dbConnection('ingredients')
    .select(...categories)
    .then(ingredients => res.status(200).json({ ingredients }))
    .catch(error => res.json('Could not retrieve all ingredients'));
});

app.get('/api/v1/burgers/:id', (req, res) => {
  const { id } = req.params;
  dbConnection('burgers')
    .select(...categories)
    .where({ id })
    .then(burger => res.status(200).json(burger[0]))
    .catch(error => res.json('Could not retrieve burger'));
});

app.get('/api/v1/burgers/:id/recipe', (req, res) => {
  const { id } = req.params;
  let recipe = {
    burger: null,
    ingredients: []
  }
  let codes = []
  dbConnection('burgers')
    .select(...categories)
    .where({ id })
    .then(burger => recipe.burger = burger[0])
    .then(dbConnection('burger_ingredients')
      .where('burger_id', id)
      .then(burgerIngredients => burgerIngredients.map(el => recipe.ingredients.push(el.ingredients_id)))
      .then(parsed => res.status(200).json(recipe)))
      .catch(error => res.json('Could not retrieve recipe'));
});

app.listen(PORT, () => console.log('App is running!'));


// app.get('/api/v1/burgers/:id/recipe', (req, res) => {
//   const { id } = req.params;
//   let recipe = {
//     burger: null,
//     ingredients: []
//   }
//   dbConnection('burgers')
//     .select('*')
//     .where({ id })
//     .then(burger => recipe.burger = burger[0])
//     .then(dbConnection('burger_ingredients')
//       .where('burger_id', id)
//       .then(jointIds => jointIds.map(id => dbConnection('ingredients')
//         .where('id', id.ingredients_id)
//         .then(burgerIngredients => burgerIngredients.map(bI => recipe.ingredients.push(bI)))
//         .then(parsed => res.status(200).json(recipe)))
//         .catch(error => res.json('Could not retrieve recipe'))));
// });