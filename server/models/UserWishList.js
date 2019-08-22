const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myWishlistSchema = new Schema({
  scientific_plant: {
    type: Schema.Types.ObjectId,
    ref: "plants"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
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

const UserWishList = mongoose.model('UserWishList', myWishlistSchema)

module.exports = UserWishList;