const express = require("express");

const router = express.Router();

const db = require("../db/db");

router.get("/items/:id", (req, res) => {
  const id = Number(req.params.id);

  db.getItemsById(id)
    .then(displayItems)
    .catch(err => res.status(500).send(err.message));

  function displayItems(items) {
    res.json(items);
  }
});

router.post("/newItem/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, description, email, image } = req.body;

  db.addNewItem(id, { name, description, email, image })
    .then(displayItems)
    .catch(err => res.status(500).send(err.message));

  function displayItems(items) {
    res.json(items);
  }
});

router.delete("/delete", (req, res) => {
  const id = req.body.id;
  db.deleteItem(id)
    .then(displayItems)
    .catch(err => res.status(500).send(err.message));

  function displayItems(items) {
    res.json(items);
  }
});

router.put("/updateItem", (req, res) => {
  const { id, name, description, email, image } = req.body;
  console.log(id);

  db.updateItem({ id, name, description, email, image })
    .then(displayItems)
    .catch(err => res.status(500).send(err.message));

  function displayItems(items) {
    res.json(items);
  }
});

module.exports = router;
