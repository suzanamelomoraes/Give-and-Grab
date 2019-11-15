
exports.up = (knex, Promise) => {
  return knex.schema.createTable('items', function (table) {
    table.increments('id').primary()
    table.integer('cat_id').references('categories.id')
    table.string('title')
    table.text('description')
    table.string('email')
    table.string('image_path')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('items')
}