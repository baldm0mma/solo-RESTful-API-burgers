const burgers = require('../burgers');

const newBurger = (knex, burger) => {
  return knex('burgers').insert({
    name: burger.name,
    description: burger.description,
    image: burger.image,
    tastiness_level: burger.tastiness_level
  });
};

exports.seed = knex => {
  return knex('burgers')
    .del()
    .then(() => {
      return Promise.all(
        burgers.reduce((burgerPromises, burger) => {
          burgerPromises.push(newBurger(knex, burger));
          return burgerPromises;
        }, [])
      );
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
