exports.up = function(knex) {
  return knex.schema.createTable("amenities", (table) => {
    table.increments().index();
    table.text("name").notNullable();
  });
};

exports.down = function(knex, Promise) {};
