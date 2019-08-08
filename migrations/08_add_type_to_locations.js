exports.up = function(knex) {
  return knex.schema.table("locations", (table) => {
    table.enu("type", [3, 4]);
  });
};

exports.down = function(knex, Promise) {};
