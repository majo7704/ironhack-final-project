const mongoose = require('mongoose');
const Plant = require('../models/Plant.js')

mongoose.connect('mongodb://localhost/finalProject',
  { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to mongodb.");
    return mongoose.connection.db.dropCollection('plants');
  })
  .then(() => {
    console.log("Dropped plants collection.");
    return Plant.insertMany(seedPlants);
  })
  .then(() => {
    console.log(`We have seeded our database successfully with new plants.`);
  })
  .catch(err => {
    console.error('Mongodb error', err);
  })

const seedPlants = [
  {
    common_name: 'Monstera',
    image_url: 'https://i.pinimg.com/564x/00/e3/2c/00e32c33111348ee624cf4d25ebd335c.jpg',
    scientific_name: 'Monstera deliciosa',
    light_expousure: 'bright spot, but no direct sunlight',
    temperature: 15-30,
    watering: 1,
    fertilization: 'once a month during spring and winter',
    mist: 1,
    soil: 'loamy, well drained soil',
    toxicity: 'leaves are midly toxic for cats and human',
    extra_info: null
  },
  {
    common_name: 'Chinese money plant',
    image_url: 'https://i.pinimg.com/564x/e8/a9/8d/e8a98dac18a3679e74a11c1598dfed48.jpg',
    scientific_name: 'MPilea peperoimodies',
    light_expousure: 'bright spot, but no direct sunlight',
    temperature: 10-30,
    watering: 1,
    fertilization: 'once a month during spring and early fall',
    mist: 0,
    soil: 'slighty acid',
    toxicity: 'non-toxic',
    extra_info: 'turn the pot regularly to have a balanced plant'
  },
  {
    common_name: 'Croton',
    image_url: 'https://i.pinimg.com/564x/bd/7b/8e/bd7b8e8cedc0f39e573996ceeeb6d94b.jpg',
    scientific_name: 'Codiaeum variegatum',
    light_expousure: 'direct sunlight',
    temperature: 15-30,
    watering: 1,
    fertilization: 'acid fertilization',
    mist: 2,
    soil: 'rich soil, fast draining',
    toxicity: 'midly toxic for cats and dogs',
    extra_info: 'high humidity'
  },

  {
    common_name: 'Prayer plant',
    image_url: 'https://i.pinimg.com/564x/e8/03/49/e8034986dce960d9540e6bd7b36ee0e0.jpg',
    scientific_name: 'Maranta',
    light_expousure: 'indirect sunlight',
    temperature: 21-30,
    watering: 1,
    fertilization: 'water-soluble fertilizer',
    mist: 2,
    soil: 'well-drained soil',
    toxicity: 'non toxic',
    extra_info: 'Should be kept moist, but not soggy. Use warm water.'
  },

  {
    common_name: 'Indian Rubberplant',
    image_url: 'https://i.pinimg.com/564x/2a/ff/4b/2aff4b3ee5ac7157372fbf0678d86900.jpg',
    scientific_name: 'Ficus elastica',
    light_expousure: 'indirect sunlight',
    temperature: 10-29,
    watering: 1,
    fertilization: 'monthly',
    mist: 1,
    soil: 'well-drained soil',
    toxicity: 'poisonous to people and pets',
    extra_info: 'Perfect indoor plants for beginners. Improve indoor air quality.'
  },

  {
    common_name: 'Spider Plant',
    image_url: 'https://i.pinimg.com/564x/c4/fe/c2/c4fec2e1718dd6cfeb8ec538706dcf7a.jpg',
    scientific_name: 'Chlorophytum',
    light_expousure: 'indirect sunlight',
    temperature: 10-27,
    watering: 1,
    fertilization: '1 to 2 times per month during the spring and summer.',
    mist: 1,
    soil: 'well-drained soil',
    toxicity: 'non toxic',
    extra_info: 'The most adaptable of houseplants and the easiest to grow;  use distilled or purified water.'
  },
  {
    common_name: 'Lavender',
    image_url: 'https://i.pinimg.com/564x/7f/ae/3f/7fae3f0f0e64c27c4d8b34d0c5fe0702.jpg',
    scientific_name: 'Lavandula',
    light_expousure: 'direct sunlight',
    temperature: 21 - 30,
    watering: 1,
    fertilization: '2 times per year.',
    mist: 1,
    soil: 'well-drained, sandy soil',
    toxicity: 'non toxic',
    extra_info: 'Once established, lavender is very low- maintenance and requires minimal watering or pruning'
  },
  {
    common_name: 'Bamboo Palm',
    image_url: 'https://i.pinimg.com/564x/da/02/1e/da021ebeb32f01775d7cefb81eb36d38.jpg',
    scientific_name: 'Dypsis lutescens',
    light_expousure: 'minimal sunlight',
    temperature: 21 - 30,
    watering: 2,
    fertilization: '1 time per month or less often during active groth.',
    mist: 1,
    soil: 'well-drained soil',
    toxicity: 'non toxic',
    extra_info: 'It made NASA’s list of top clean-air plants with its purifying score landing a whopping 8.4'
  },
  {
    common_name: 'Golden Pothos',
    image_url: 'https://i.pinimg.com/564x/e0/b3/dc/e0b3dc3d7d38acdeb0fe7eadd8df7002.jpg',
    scientific_name: 'Epipremnum aureum',
    light_expousure: 'any lighthening',
    temperature: 10 - 30,
    watering: 1,
    fertilization: '1 to 2 times per month during the spring and summer.',
    mist: 1,
    soil: 'well-drained soil',
    toxicity: 'non toxic',
    extra_info: 'the Golden Pothos has a reputation for being almost indestructible'
  }
]


