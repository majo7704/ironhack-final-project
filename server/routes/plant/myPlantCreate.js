const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const PlantOfUser = require('../../models/PlantOfUser')
const ScientificPlant = require('../../models/Plant')

router.post('/:scientificPlantId', (req, res, next) => {
debugger
  ScientificPlant.findById(req.params.scientificPlantId)
    .then((scientificPlant)=> {
      debugger
        const newPlant = {
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

      return PlantOfUser.create(newPlant)
    })
    .then((userPlant) => {
      debugger
      res.send(userPlant)
    })
    .catch((error) => {
      debugger
      console.log(error);
      next()
    })
  })


// const PlantOfUser = mongoose.model('plantsOfUser', plantSchema);


module.exports = router