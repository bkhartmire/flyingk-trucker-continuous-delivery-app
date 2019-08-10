exports.up = function(knex) {
  return knex.schema.createTable("locations", (table) => {
    table.increments().index();

    table.float("latitude");

    table.float("longitude");

    table.text("name").notNullable();

    table.text("state");
    table.text("city");
    table.text("highway");
    table.text("exit_number");
  });
};

exports.down = function(knex, Promise) {};
