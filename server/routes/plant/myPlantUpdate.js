const express = require('./node_modules/express')
const router = express.Router()
const Mongoose = require("mongoose")
const PlantOfUser = require('../../models/PlantOfUser')
const ScientificPlant = require('../../models/Plant')

router.post('/add/:scientificPlantId', (req, res, next) => {
  
  const newPlant = {
    cool_name: req.body.cool_name,
    scientific_plant: req.params.scientificPlantId,
    location: req.body.location,
    buying_date: req.body.buying_date,
    size: req.body.size,
    pot_diameter: req.body.pot_diameter,
    report_date: req.body.report_date,
    notes: req.body.notes,
    image: req.body.image
  }

  PlantOfUser.update(newPlant)
      .then(() => {
        res.send(plant)
      })
      .catch((error) => {
        console.log(error);
        next()
      })
    })


module.exports = router