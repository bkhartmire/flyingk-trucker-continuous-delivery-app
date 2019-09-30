exports.up = function(knex) {
  return knex.schema.createTable("data", (table) => {
    table.increments().index();
    table.jsonb("site");
  });
};

exports.down = function(knex, Promise) {};
