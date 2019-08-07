exports.up = function(knex) {
  return knex.schema.createTable("location_gas_types", (table) => {
    table.increments().index();
    table.integer("location_id").notNullable();
    table
      .foreign("location_id")
      .references("id")
      .inTable("locations");
    table.integer("gas_type_id").notNullable();
    table
      .foreign("gas_type_id")
      .references("id")
      .inTable("gas_types");
    table.float("cash_price");
    table.float("credit_price");
  });
};

exports.down = function(knex, Promise) {};
