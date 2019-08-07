exports.up = function(knex) {
  return knex.schema.createTable("gas_types", (table) => {
    table.increments().index();
    table.text("name").notNullable();
  });
};

exports.down = function(knex, Promise) {};
