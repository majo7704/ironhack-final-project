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
  image: String
})

const PlantOfUser = mongoose.model('myPlants', myPlantsSchema)

module.exports = PlantOfUser;