const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCategories,
  getItemsById
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
