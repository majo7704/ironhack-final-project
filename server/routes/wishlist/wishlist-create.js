const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const UserWishList = require('../../models/UserWishList')
const ScientificPlant = require('../../models/Plant')
const User = require('../../models/User')


router.post('/:scientificPlantId', (req, res, next) => {
  ScientificPlant.findById(req.params.scientificPlantId)
    .then((scientificPlant)=> {
        const newWishlist = {
        scientific_plant: mongoose.Types.ObjectId(req.params.scientificPlantId),
        user: mongoose.Types.ObjectId(req.session.user._id),
        image_url: scientificPlant.image_url, 
        light_expousure: scientificPlant.light_expousure,  
        temperature: scientificPlant.temperature, 
        watering: scientificPlant.watering, 
        fertilization: scientificPlant.fertilization, 
        mist: scientificPlant.mist, 
        soil: scientificPlant.soil, 
        toxicity: scientificPlant.toxicity, 
        extra_info: scientificPlant.extra_info, 
      }

      return UserWishList.create(newWishlist)
    })
    .then((userPlant) => {
      return User.findByIdAndUpdate(req.session.user._id, { $push: {wishListPlants: userPlant._id} }, {new : true})
      // .populate("listOfCreatedPlants")
    })
    .then(updatedUser => {
      res.send(updatedUser)
    })
    .catch((error) => {
      console.log(error);
      next()
    })
  })



module.exports = router