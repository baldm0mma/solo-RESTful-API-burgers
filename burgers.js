const burgers = [
  {
    name: 'The Casanova',
    description: 'The Casanova will have your taste buds at \'Hello\'. Fully stuffed with more flavor that it know what to do with, this robust cheeseburger can satisfy the hungriest of bellies and the most discerning of palates. If you\'re craving a little burger and cheese romance, it\'s time you spent some quality time with The Casanova.',
    ingredients: ['Swiss Cheese', 'Beef Patty', 'Ham', 'Sautéed Mushrooms', 'Dijon Mustard', 'Mayonnaise', 'Potato Roll'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/casanova.png',
    tastiness_level: 7
  },
  {
    name: 'The Rhinelander',
    description: 'Despite obvious culinary connections to Germany, The Rhinelander has nothing to do with lederhosen, the Schuhplattler dance, or Jean-Claude Van Damme (who might actually be from bordering Belgium). Bold, tasty, and a mouthful to remember, The Rhinelander gives new meaning to German engineering.',
    ingredients: ['Butterkäse Cheese', 'Beef Patty', 'Beer Mustard', 'Smoked Ham', 'Sautéed Onions', 'Frisée Lettuce', 'Pretzel Bun'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/rhinelander.png',
    tastiness_level: 8
  },
  {
    name: 'The Uncle Sam',
    description: 'The Uncle Sam is looking to recruit a few good eaters. This All-American cheeseburger will have your taste buds singing \'The Star-Spangled Banner\' after just one bite. Yes, it\’s finally time for hot dogs and apple pie to quietly step aside as America’s signature foods. Because The Uncle Sam is ready to serve this country from sea to shining sea.',
    ingredients: ['Cheddar Cheese', 'Beef Patty', 'Iceberg Lettuce', 'Tomatoes', 'Bacon', 'Mayonnaise', 'Ketchup', 'Onions', 'Potato Roll'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/unclesam.png',
    tastiness_level: 4
  },
  {
    name: 'The Miss Daisy',
    description: 'Wholesome and well-mannered, The Miss Daisy is a country girl at heart. She was born and bred where the air is fresh and the soil is fertile. Where a birch tree carries on a conversation with a babbling brook. Despite The Miss Daisy\’s delicate ways, she\’s a cheeseburger that can satisfy the strongest of appetites.',
    ingredients: ['Brie Cheese', 'Beef Patty', 'Apple Butter', 'Dijon Mustard', 'Spinach', 'Toasted Brioche Loaf'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/missdaisy.png',
    tastiness_level: 5
  },
  {
    name: 'The Big Ben',
    description: 'The Big Ben hails from a long line of cheeseburger aristocrats. His father, The Bigger Ben, once staved off the hunger pangs of the Queen of England while his mother, The Duchess of Beef Patty, satisfied the burger cravings of some guy who liked to be called Sir. Although a true blue blood, he\’ll never mingle with tea and crumpets.',
    ingredients: ['Blue Cheese', 'Beef Patty', 'Watercress', 'Bacon', 'Pickled Red Onions', 'Balsalmic Mayonnaise', 'Toasted Ciabatta Roll'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/bigben.png',
    tastiness_level: 6
  },
  {
    name: 'The Honky Tonk',
    description: 'A smoky bar and an ice cold beer. Some live music and a mechanical bull to boot. If this is your idea of a night on the town, then The Honky Tonk is the cheeseburger for you. This good old boy is loaded with the stuff that can turn a boy into a man and a man into a living legend that songs are written about.',
    ingredients: ['Brick Cheese', 'Beef Patty', 'BQQ Sauce', 'Peppered Pork', 'Onion Rings', 'Boston Bibb Lettuce', 'Mayonnaise', 'Toasted Sesame Bun'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/honkytonk.png',
    tastiness_level: 7
  },
  {
    name: 'The Farmer John',
    description: 'If you spend your days baling hay, milking cows, or plowing fields, you know a thing or two about working up an appetite. Good thing for The Farmer John. Standing strong with a bevy of hunger-satisfying fixings, The Farmer John is for anyone who ends the day with calloused hands and a sweaty brow.',
    ingredients: ['Brick Cheese', 'Beef Patty', 'BQQ Sauce', 'Peppered Pork', 'Onion Rings', 'Boston Bibb Lettuce', 'Mayonnaise', 'Toasted Sesame Bun'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/farmerjohn.png',
    tastiness_level: 8
  },
  {
    name: 'The Aunt Millie',
    description: 'Every so often a cheeseburger comes around that tests the resolve of the most zealous vegans and vegetarians. The Aunt Millie is one such cheeseburger. At first glance, it could easily be mistaken for a Greek salad. But a closer look reveals a juicy beef Patty patty playing nice with all the garden-fresh veggies.',
    ingredients: ['Feta Crumbles', 'Beef Patty', 'Tomatoes', 'Onions', 'Arugula', 'Kalamata Olives', 'Italian Dressing', 'Poppy Seed Challah Roll'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/auntmillie.png',
    tastiness_level: 9
  },
  {
    name: 'The Gypsy',
    description: 'Every day, The Gypsy roams the countryside in search of starving tummies and taste buds left awry. Her mission will not cease until the echo of growling stomachs is forever silenced. No one knows whence The Gypsy comes, but they always welcome her with open arms, not to mention open mouths.',
    ingredients: ['Fresh Mozzarella Cheese', 'Parmesan Cheese', 'Beef Patty', 'Bacon', 'Cucumbers', 'Onions', 'Tomatoes', 'Ranch Dressing', 'Toasted Roll'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/gypsy.png',
    tastiness_level: 4
  },
  {
    name: 'The Lumberjack',
    description: 'As the story goes, a guy once dropped The Lumberjack on his left foot and ended up breaking a few bones. No one showed any sympathy since he\’d been holding it with only one hand. Everyone knows The Lumberjack demands the servitude of both your mitts. Needless to say, nobody signed his cast.',
    ingredients: ['Cheddar Cheese', 'Swiss Cheese', 'Beef Patty', 'Pickles', 'Yello Mustard', 'Onions', 'Ketchup', 'Mayonnaise', 'Iceberg Lettuce', 'Toasted White Bread'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/lumberjack.png',
    tastiness_level: 5
  },
  {
    name: 'The Firehouse',
    description: 'If you smell smoke when taking a bite of The Firehouse, don\’t be alarmed. It\’s just your taste buds going up in flames. This hot and spicy cheeseburger should only be eaten under the immediate supervision of firefighters wearing flame-retardant clothing. The Firehouse is not recommended for anyone using a pacemaker.',
    ingredients: ['Havarti Cheese', 'Provolone Cheese', 'Beef Patty', 'Capicola', 'Pickled Jalapeños', 'Pepperoncini', 'Ketchup', 'Mayonnaise', 'Fresh Dill', 'Italian Roll'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/firehouse.png',
    tastiness_level: 6
  },
  {
    name: 'The Highwayman',
    description: 'He\’s a drifter. A nomad with ties to nobody except the road on which he travels. Chances are, you\’ve encountered The Highwayman at a roadside diner, a truck stop café, or some burger joint off the beaten path. He\’s not one for words, but what he lacks in conversational skills, he makes up for in other ways.',
    ingredients: ['Brick Cheese', 'Cheddar Cheese', 'Beef Patty', 'Ham', 'Fried Egg', 'Pepperoncini', 'Onion Rings', 'BBQ Sauce', 'Toasted Knot Bun'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/highwayman.png',
    tastiness_level: 7
  },
  {
    name: 'The Roadhouse',
    description: 'If you\’re the kind of person who orders a milkshake with a cheeseburger then has the audacity to drink it with a straw, please do us all a big favor and steer clear of The Roadhouse. Prepared to go toe to toe with the heartiest of appetites, this bad boy packs a punch that\’ll leave your chops wondering what hit \’em.',
    ingredients: ['Gruyère Cheese', 'Beef Patty', 'Caramelized Onions', 'Bacon', 'Onion Rings', 'Garlic Mayonnaise', 'Toasted Onion Roll'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/roadhouse.png',
    tastiness_level: 8
  },
  {
    name: 'The Bohemian',
    description: 'The Bohemian first rose to fame in the SoHo neighborhood of New York City. A favorite cheeseburger among the local artists, it has served as the inspiration for many world-renowned works of art. Thanks to The Bohemian\’s affordability, SoHo\’s starving artists have recently rebranded themselves as fully satisfied.',
    ingredients: ['Gouda Cheese', 'Beef Patty', 'Fried Prosciutto', 'Sliced Turkey', 'Pesto Mayonnaise', 'Spinach', 'Out Bread'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/bohemian.png',
    tastiness_level: 9
  },
  {
    name: 'The Boss',
    description: 'Your mouth won\’t mind working overtime for The Boss. In fact, don\’t be surprised if it asks to work the weekends as well. That\’s because The Boss knows how to keep your mouth happy and feeling like it has a voice at the table. When it comes to cheeseburgers, The Boss is the CEO of mouthwatering goodness.',
    ingredients: ['Asiago Cheese', 'Beef Patty', 'Arugala', 'Fried Prosciutto', 'Onions', 'Olive Tapenade', 'Tomatoes', 'Fresh Basil Leaves', 'Rosemary Ciabatta'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/boss.png',
    tastiness_level: 4
  },
  {
    name: 'The Camelot',
    description: 'Whoever said romance is dead never sank their teeth into The Camelot. This cheeseburger has all the toppings for a beef Patty and cheese rendezvous like you\’ve never imagined. But be warned. If one drip of her Dijon mayonnaise finds its way to your shirt collar, your better half might think there\’s another woman in your life.',
    ingredients: ['Camembert Cheese', 'Beef Patty', 'Sautéed Mushrooms', 'Peppered Bacon', 'Dijon Mayonnaise', 'Caramelized Onions', 'Tomatoes', 'Brioche Roll'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/camelot.png',
    tastiness_level: 5
  },
  {
    name: 'The Crabby Louie',
    description: 'What do cheeseburgers and crustaceans have in common? If your answer was The Crabby Louie you are absolutely correct – and most likely you\’re a surfer, beach bum, or overall supergenius, too. Layered with delicious crab meat, The Crabby Louie comes from the land of surf, sun, and sand.',
    ingredients: ['Monterey Jack Cheese', 'Beef Patty', 'Crab Meat', 'Avocado', 'Tomatoes', 'Romaine Lettuce', 'Caramalized Onions', 'Mayonnaise', 'Sourdough Roll'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/crabbylouie.png',
    tastiness_level: 6
  },
  {
    name: 'The Pioneer',
    description: 'In a world of artificial flavoring, preservatives, and pre-packed meals nuked on high for three minutes, it\’s reassuring to know that a cheeseburger like The Pioneer exists. A throwback to a time when families grew their own vegetables and hunted their own meat, The Pioneer is fresh, wild, and as natural as the untamed Earth.',
    ingredients: ['Swiss Cheese', 'Beef Patty', 'Sautéed Wild Mushrooms', 'Cremini Mushrooms', 'Rosemary', 'Bacon', 'Garlic Aioli', 'Lettuce', 'Sesame Seed Bun'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/pioneer.png',
    tastiness_level: 7
  },
  {
    name: 'The Soutern Belle',
    description: 'Charming and graceful, The Southern Belle won\’t spend time with anyone but a true gentleman. She prefers the company of a man who doesn\’t talk with his mouth full or use his sleeve as a napkin. If you possess the wherewithal to refrain from such gaucheries, The Southern Belle might give you the time of day.',
    ingredients: ['Gruyère Cheese', 'Beef Patty', 'BBQ Sauce', 'Pickles', 'Onions', 'Pepper Coleslaw', 'Grilled Sourdough Slices'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/southernbelle.png',
    tastiness_level: 8
  },
  {
    name: 'The Mona Lisa',
    description: 'Created by a culinary artist who works with a flame and a spatula, The Mona Lisa is a cheeseburger masterpiece that\’s bound to put a smile on anyone\’s face. If Leonardo da Vinci were still wielding his paintbrush today, it\’s very likely he\’d be a card-carrying member of the Cheese & Burger Society.',
    ingredients: ['Gorgonzola Cheese', 'Beef Patty', 'Sundried Tomatoes', 'Sicillian Olives', 'Pancetta', 'Onions', 'Arugala', 'Garlic Mayonnaise', 'Toasted Olive Ciabatta'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/monalisa.png',
    tastiness_level: 9
  },
  {
    name: 'The Couch Potato',
    description: 'The remote control in one hand. The Couch Potato in the other. What else could a person ask for? Created for anyone with a finely honed sedentary lifestyle, The Couch Potato ensures you won\’t be going anywhere anytime soon. So put the recliner in cruise control and pop open a cold one. You\’ve earned it.',
    ingredients: ['Blue Cheese', 'Beef Patty', 'Thick-cut Potato Chaps', 'Smoked Pepper Pork', 'Pancetta', 'Caramelized Onions', 'Garlic Mayonnaise', 'Potato Roll'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/couchpotato.png',
    tastiness_level: 4
  },
  {
    name: 'The Handyman',
    description: 'There\’s not a job that The Handyman can\’t handle. This mouthwatering mound of meat and cheese has the skills to satisfy whatever needs satisfying. Empty stomach? The Handyman can fill\’er up and then some. Taste buds need a little attention? The Handyman has the tools to tackle the task.',
    ingredients: ['Cheddar Cheese', 'Swiss Cheese', 'Beef Patty', 'Bacon', 'Ketchup', 'Mayonnaise', 'Pickles', 'Caramelized Onions', 'Kaiser Roll'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/handyman.png',
    tastiness_level: 5
  },
  {
    name: 'The Isabella',
    description: 'There once lived a man who fell so madly in love with The Isabella that he vowed never to eat another cheeseburger. All his friends and family thought nothing about it, until his untimely passing revealed that the gentleman\’s Last Will and Testament left everything to his beloved cheeseburger señorita.',
    ingredients: ['Monterey Jack Cheese', 'Cheddar Cheese', 'Beef Patty', 'Avocado', 'Refried Beans', 'Picked Jalapeños', 'Green Leaf Lettuce', 'Tomatoes', 'Onions', 'Mexican Roll'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/isabella.png',
    tastiness_level: 6
  },
  {
    name: 'The Brooklyn',
    description: 'Is it a Reuben sandwich cleverly disguised as a cheeseburger, or a cheeseburger cleverly disguised as a Reuben sandwich? To this very day, the debate wages on as proponents from both sides continue to argue and plead their case to anyone willing to listen. Is a Supreme Court hearing inevitable? Stay tuned.',
    ingredients: ['Swiss Cheese', 'Beef Patty', 'Corned Beef', 'Sauerkraut', 'Thousand Island Dressing', 'Grilled Dark Rye'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/brooklyn.png',
    tastiness_level: 7
  },
  {
    name: 'The Mamma Mia',
    description: 'It\’s a little known fact: every young pizza grows up wanting to be a big and juicy cheeseburger. Unfortunately, few ever make it to the big leagues. The Mamma Mia is the proud exception. This cheeseburger features all the toppings you\’d find sitting on a slice of za, with the happy addition of a beef patty.',
    ingredients: ['Mozzarella Cheese', 'Beef Patty', 'Pepperoni', 'Sautéed Mushrooms', 'Pizza Sauce', 'Caramelized Onions', 'Rustic Italian Roll'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/mammamia.png',
    tastiness_level: 8
  },
  {
    name: 'The Sheboygan',
    description: 'Named after the Wisconsin city from which it came, The Sheboygan has the distinction of being the only cheeseburger that can make you full just by staring at it. Stacked with more meat than the average carnivore would care to consume in one sitting, it makes no apologies if it spoils your dinner for the next few days.',
    ingredients: ['Cheese Curds', 'Beef Patty', 'Split Bratwurst', 'Caramelized Onions', 'Beer Mustard', 'Sauerkraut', 'Kaiser Roll'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/sheboygan.png',
    tastiness_level: 9
  },
  {
    name: 'The Waldorf',
    description: 'Once served at only the poshest restaurants in New York City, rumor has it that a well-known socialite once had The Waldorf flown in by private jet to where she was vacationing in Paris. Despite a little turbulence over the Atlantic that caused a few of its toasted walnuts to shift, The Waldorf touched down in edible condition.',
    ingredients: ['Blue Cheese', 'Beef Patty', 'Toasted Walnuts', 'Dried Tart Cherries', 'Curly Endive', 'Onions', 'Dijon Mustard', 'Rustic Italian Roll'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/waldorf.png',
    tastiness_level: 4
  },
  {
    name: 'The Havana',
    description: 'The Havana is the first cousin to the well-known Cubano sandwich. Inseparable from childhood to adulthood, the two drifted apart when The Havana gained international notoriety as one of the Cheese & Burger Society\’s top thirty cheeseburgers. To this very day, the two remain estranged.',
    ingredients: ['Swiss Cheese', 'Beef Patty', 'Ham', 'Roasted Pork Shoulder', 'Pickles', 'Yellow Mustard', 'Pressed French Bread'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/havana.png',
    tastiness_level: 5
  },
  {
    name: 'The Johnny Appleseed',
    description: 'She was an apple farmer with an orchard as far as the eye could see. He was a burger-joint owner who could flame broil with the very best. When the two serendipitously met in the express lane at the local supermarket, they could barely take their eyes off the nine items in the other\’s basket. And The Johnny Appleseed was born.',
    ingredients: ['Cheddar Cheese', 'Beef Patty', 'Maple Bacon', 'Sautéed Apples', 'While Grain Mustard', 'Caramelized Onions', 'Sourdough Loaf'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/johnnyappleseed.png',
    tastiness_level: 6
  },
  {
    name: 'The Macho Nacho',
    description: 'One stomach alone does not stand a chance against The Macho Nacho. A two-stomach tag team might fare a little better but would still be considered a decisive underdog by most bookies. Three stomachs versus The Macho Nacho could finally result in an evenly matched fight. Is your stomach ready to rumble?',
    ingredients: ['Cheddar Cheese', 'Swiss Cheese', 'Beef Patty', 'Tortilla Chips', 'Pickled Jalapeños', 'Onions', 'Iceberg Lettuce', 'Black Olives', 'Tomatoes', 'Potato Roll'],
    image: 'https://www.cheeseandburger.com/images/html5/burger_small/machonacho.png',
    tastiness_level: 7
  }
]

module.exports = burgers;