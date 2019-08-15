const burgers = require('../burgers');

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
      burger.ingredients.forEach(ingredient => {
        ingredientPromises.push(
          createIngredient(knex, ingredient).then(ingredients_id => {
            let joinPromises = [];
            joinPromises.push(createJoin(knex, burger_id, ingredients_id));
            return Promise.all(joinPromises);
          })
        );
      });
      return Promise.all(ingredientPromises);
    });
};

const createIngredient = (knex, ingredient) => {
  return knex('ingredients').insert(
    {
      name: ingredient
    },
    'id'
  );
};

const createJoin = (knex, burger_id, ingredients_id) => {
  return knex('burger_ingredients').insert({
    burger_id: parseInt(burger_id),
    ingredients_id: parseInt(ingredients_id)
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
