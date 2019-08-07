exports.up = function(knex) {
  return knex.schema.createTable("restaurants", (table) => {
    table.increments().index();
    table.text("name").notNullable();
    table.text("icon");
  });
};

exports.down = function(knex, Promise) {};
