exports.up = function(knex) {
  return knex.schema.createTable("location_restaurants", (table) => {
    table.increments().index();
    table.integer("location_id").notNullable();
    table
      .foreign("location_id")
      .references("id")
      .inTable("locations");
    table.integer("restaurant_id").notNullable();
    table
      .foreign("restaurant_id")
      .references("id")
      .inTable("restaurants");
  });
};

exports.down = function(knex, Promise) {};
