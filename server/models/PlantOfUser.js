const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myPlantsSchema = new Schema({
  cool_name: String,
  location: String,
  with_you_since: Date,
  size: Number,
  pot_diameter: Number,
  last_report: Date,
  notes: String,
  image: String,
  common_name: String,
  image_url: String,
  scientific_name: String,
  light_expousure: String,
  temperature: Number,
  watering: Number,
  fertilization: String,
  mist: Number,
  soil: String,
  toxicity: String,
  extra_info: String
})

const PlantOfUser = mongoose.model('plantsOfUser', myPlantsSchema)

module.exports = PlantOfUser;