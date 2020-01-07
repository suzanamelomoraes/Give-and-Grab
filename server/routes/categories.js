const express = require("express");

const router = express.Router();

const db = require("../db/db");

router.get("/categories", (req, res) => {
  db.getCategories()
    .then(displayCategories)
    .catch(err => res.status(500).send(err.message));

  function displayCategories(categories) {
    res.json(categories);
  }
});

module.exports = router;
