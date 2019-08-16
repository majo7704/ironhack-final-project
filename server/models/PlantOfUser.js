const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//pushing to master
const myPlantsSchema = new Schema({
  scientific_plant: {
    type: mongoose.Types.ObjectId,
    ref: "plants"
  },
  cool_name: String,
  location: String,
  buying_dtae: Date,
  size: Number,
  pot_diameter: Number,
  report_date: Date,
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