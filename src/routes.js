const express = require('express')
const router = express.Router()
const controller = require('./controller')


router.get('/photo/:id', (req, res) => {
    const id = req.params.id
    controller.photoEnrichment(id)
    .then(value => 
      res.status(200).send(value))
    .catch(err =>
      res.status(500).send(err)
    )
})

router.get('/photo', (req, res) => {
  const params = req.query
  controller.photoFiltering(params)
  .then(value => 
    res.status(200).send(value))
  .catch(err =>
    res.status(500).send(err)
  )
})



module.exports = router
