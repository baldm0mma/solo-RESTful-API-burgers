const burgers = require('../burgers');

// const allIngredients = () => {
//   return burgers.reduce((allIngr, burger) => {
//     burger.ingredients.forEach(ingredient => {
//       allIngr.push(ingredient);
//     });
//     return allIngr;
//   }, []);
// };

// const removeIngredientsDupes = [...new Set(allIngredients())];

const createBurger = (knex, burger) => {
  return knex('burgers')
    .insert(
      {
        name: burger.name,
        description: burger.description,
        image: burger.image,
        tastiness_level: burger.tastiness_level
      },
      'id'
    )
    .then(burger_id => {
      let ingredientPromises = [];
      removeIngredientsDupes.forEach((ingredient, burger_id) => {
        ingredientPromises.push(
          createIngredient(knex, ingredient)
        );
      });

      return Promise.all(ingredientPromises);
    });
};

const createIngredient = (knex, ingredient) => {
  return knex('ingredients').insert({
    name: ingredient
  }, 'id');
};

const createJoin = (knex, burger_id, ingredients_id) => {
  return knex('burger_ingredients').insert({
    burger_id,
    ingredients_id
  });
};

exports.seed = knex => {
  return knex('burgers')
    .del()
    .then(() => knex('ingredients').del())
    .then(() => knex('burger_ingredients').del())
    .then(() => {
      let burgerPromises = [];
      burgers.forEach(burger => {
        burgerPromises.push(createBurger(knex, burger));
      });
      return Promise.all(burgerPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
