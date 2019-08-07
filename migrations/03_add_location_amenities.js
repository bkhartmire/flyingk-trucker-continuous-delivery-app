exports.up = function(knex) {
  return knex.schema.createTable("location_amenities", (table) => {
    table.increments().index();
    table.text("name").notNullable();
    table.integer("location_id").notNullable();
    table
      .foreign("location_id")
      .references("id")
      .inTable("locations");
    table.integer("amenity_id").notNullable();
    table
      .foreign("amenity_id")
      .references("id")
      .inTable("amenities");
  });
};

exports.down = function(knex, Promise) {};
