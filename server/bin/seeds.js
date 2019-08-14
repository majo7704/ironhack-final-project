const mongoose = require('mongoose');
const Plant = require('../models/Plant.js')

mongoose.connect('mongodb://localhost/finalProject',
  { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  })


const seedPlants = [
  {
    common_name: 'Monstera',
    image_url: 'imageURL',
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
    image_url: '../images/photo-1491147334573-44cbb4602074.jpeg',
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
    image_url: '../images/photo-1491147334573-44cbb4602074.jpeg',
    scientific_name: 'Codiaeum variegatum',
    light_expousure: 'direct sunlight',
    temperature: 15-30,
    watering: 1,
    fertilization: 'acid fertilization',
    mist: 2,
    soil: 'rich soil, fast draining',
    toxicity: 'midly toxic for cats and dogs',
    extra_info: 'high humidity'
  }
]

Plant.create(seedPlants, (err) => {
  err ? console.log(`there is a seed error`) : console.log(`we have seeded succesfully to our database`)
})