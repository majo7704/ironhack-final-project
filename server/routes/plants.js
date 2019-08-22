const express = require('express');
const router = express.Router();
const PlantOfUser = require('../models/PlantOfUser')
const multer = require('multer')
const cors = require('cors')

//All plants
const Plants = require('../models/Plant.js')

router.get('/all', (req, res, next) => {
    Plants.find({})
      .then((plants) => {
        res.json(plants)
      })
      .catch(err => {
        console.log('error' + err)
      })
  }
)

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

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-'+file.originalname)
  }
})
let upload = multer({ storage: storage }).single('picture') 
router.post('/upload', function (req, res) {
 
  upload(req, res, function(err){
    if(err instanceof multer.MulterError){
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).send(req.file)
  })
})


router.get('/search', (req, res, next) => {
  Plants.find({ $text: { $search: req.query.q } })
    .then((plants) => {
      
      if (!plants) next(createError(404));
      else res.status(200).json(plants)
    })
    .catch((error) => {
    next(createError(500))
  })
})


router.get('/:plantId', (req, res, next) => {
  Plants.findById(req.params.plantId)
    .then((plant) => {
      if (!plant) next(createError(404));
      else res.status(200).json(plant)
    })
    .catch((error) => {
    next(createError(500))
  })
})
  
module.exports = router;