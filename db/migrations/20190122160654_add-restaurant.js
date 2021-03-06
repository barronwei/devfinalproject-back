exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', table => {
    table
      .uuid('id')
      .notNull()
      .primary()
    table.text('name').notNull()
    table.text('hometown').notNull()
    table.float('lat')
    table.float('long')
    table
      .timestamp('createdAt')
      .defaultTo(knex.fn.now())
      .notNull()
    table
      .timestamp('updatedAt')
      .defaultTo(knex.fn.now())
      .notNull()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants')
}
