const express = require('express');
const router = express.Router();
const PlantOfUser = require('../../models/PlantOfUser')

//All plants
const Plants = require('../../models/Plant.js')
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