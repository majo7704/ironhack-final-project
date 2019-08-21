const express = require('express')
const router = express.Router()

const uploader = require('../configs/cloudinary-setup')
router.post('/upload', uploader.single("image_url"), (req, res, next) => {
  debugger
  if (!req.file) {
    next(newError('No file uploaded!'))
    return
  }
  res.json({ secure_url: req.file.secure_url })
})

module.exports = router;