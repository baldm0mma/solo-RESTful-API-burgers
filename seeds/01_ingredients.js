const burgers = require('../burgers');

const allIngredients = () => {
  return burgers.reduce((allIngr, burger) => {
    burger.ingredients.forEach(ingredient => {
      allIngr.push(ingredient);
    });
    return allIngr;
  }, []);
};

const removeIngredientsDupes = () => {
  return [...new Set(allIngredients())];
};

const newIngredient = (knex, ingred) => {
  return knex('ingredients').insert({
    name: ingred
  });
};

exports.seed = knex => {
  return knex('ingredients')
    .del()
    .then(() => {
      return Promise.all(
        removeIngredientsDupes().reduce((ingredPromises, ingred) => {
          ingredPromises.push(newIngredient(knex, ingred));
          return ingredPromises;
        }, [])
      );
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
