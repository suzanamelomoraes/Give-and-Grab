const express = require('express')

const router = express.Router()

const db = require('../db/db')

router.get('/categories', (req, res) => {
  db.getCategories()
    .then(displayCategories)
    .catch(err => res.status(500).send(err.message))

  function displayCategories (categories) {
    res.json(categories)
  }
})

router.get('/items/:id', (req, res) => {
  const id = Number(req.params.id)

  db.getItemsById(id)
    .then(displayItems)
    .catch(err => res.status(500).send(err.message))

  function displayItems (items) {
    console.log(items)
    res.json(items)
  }
})

module.exports = router
