const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCategories,
  getItemsById,
  addNewItem,
  deleteItem,
  updateItem
}

function getCategories (db = connection) {
  return db('categories').select()
}

function getItemsById (id, db = connection) {
  return db('items')
    .where('cat_id', id)
    .select('title', 'description', 'email', 'image_path')
}

function addNewItem (id, { name, description, email, image }, db = connection) {
  return db('items').insert({
    title: name,
    description,
    email,
    image_path: image,
    cat_id: id
  })
}

function deleteItem (id, db = connection) {
  return db('items')
    .where('items.id', id)
    .del()
}

function updateItem ({ id, name, description, email, image }, db = connection) {
  return db('items')
    .where('items.id', id)
    .update({
      title: name,
      description,
      email,
      image_path: image
    })
}
