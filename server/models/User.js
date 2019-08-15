const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  wishListPlants: [{ type: ObjectId, ref: 'plants' }],
  listOfCreatedPlants: [{ type: ObjectId, ref: 'plantsOfUser' }],
}, {
  timestamps: true
  })

const User = mongoose.model('users', userSchema)
  
module.exports = User;