const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCategories,
  getItemsById
  //addNewItem
}

function getCategories (db = connection) {
  return db('categories')
    .select()
}

function getItemsById (id, db = connection) {
  return db('items')
    .where('cat_id', id)
    .select('title', 'description', 'email', 'image_path')
}

// function addNewItem (id, { name, description, email, image }, db = connection) {
//   return db('items')
//     .where('cat_id', id)
//     .insert({
//       title: name,
//       description,
//       email,
//       image,
//       cat_id: id })
// }
