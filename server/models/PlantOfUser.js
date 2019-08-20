const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myPlantsSchema = new Schema({
  scientific_plant: {
    type: Schema.Types.ObjectId,
    ref: "plants"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  cool_name: String,
  location: String,
  buying_dtae: Date,
  size: Number,
  pot_diameter: Number,
  report_date: Date,
  notes: String,
  image_url: String, // default from scientific plant
  light_expousure: String, // default from scientific plant 
  temperature: Number, // default from scientific plant
  watering: Number, // default from scientific plant
  fertilization: String, // default from scientific plant
  mist: Number, // default from scientific plant
  soil: String, // default from scientific plant
  toxicity: String, // default from scientific plant
  extra_info: String // default from scientific plant
})

const PlantOfUser = mongoose.model('plantsOfUser', myPlantsSchema)

module.exports = PlantOfUser;