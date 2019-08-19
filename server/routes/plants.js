const express = require('express');
const router = express.Router();
const PlantOfUser = require('../models/PlantOfUser')




//All plants
const Plants = require('../models/Plant.js')
router.get('/', (req, res, next) => {
    Plants.find({})
      .then((plants) => {
        res.json(plants)
      })
      .catch(err => {
        console.log('error' + err)
      })
  }
)

// router.post('/add', (req, res) => {
//   //probably to delete
//   let newPlant = {
//     common_name: req.body.common_name,
//     image_url: req.body.image_url,
//     scientific_name: req.body.scientific_name,
//     light_expousure: req.body.light_expousure,
//     temperature: req.body.temperature,
//     watering: req.body.watering,
//     fertilization: req.body.fertilization,
//     mist: req.body.mist,
//     soil: req.body.soil,
//     toxicity: req.body.toxicity,
//     extra_info: req.body.extra_info
//   }
//   Plant.create(newPlant)
//     .then(() => {
//     res.send(newPlant)
//     })
//     .catch((err) => {
//     console.log('err')
//   })
// })

router.get('/edit', (req, res, next) => {
  PlantOfUser.findById(req.query.id)
    .populate('common_name')
    .then((plant) => {
    res.send(plant)
  })
})
router.post('/edit/:id', (req, res, next) => {
  
  //edit form (second step)
  const updatePlant = {
    cool_name: mongoose.Types.ObjectId(req.body.cool_name),
    location: req.body.location,
    buying_date: req.body.buying_date,
    size: req.body.size,
    pot_diameter: req.body.pot_diameter,
    report_date: req.body.report_date,
    notes: req.body.notes,
    image: req.body.image
  }

  Plants.updateOne({ _id: req.params.id }, updatePlant, { new: true })
    .then(() => {
      res.send(plant)
    })
    .catch((error) => {
      console.log(error);
      next()
    })
})
router.get('/search', (req, res, next) => {
  Plant.find({ $text: { $search: req.query.q } })
    .then((plants) => {
      if (!plants) next(createError(404));
      else res.status(200).json(plants)
    })
    .catch((error) => {
    next(createError(500))
  })
})
router.get('/:plantId', (req, res, next) => {
  Plant.findById(req.params.plantId)
    .then((plant) => {
      if (!plant) next(createError(404));
      else res.status(200).json(plant)
    })
    .catch((error) => {
    next(createError(500))
  })
})
  
module.exports = router;