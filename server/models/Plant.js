const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({
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
});

const Plant = mongoose.model('plants', plantSchema);

module.exports = Plant;