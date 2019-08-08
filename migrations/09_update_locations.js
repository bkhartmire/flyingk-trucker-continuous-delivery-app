exports.up = function(knex) {
  return knex.schema.table("locations", (table) => {
    table.text("preffered_name");
    table.renameColumn("name", "site_name");
  });
};

exports.down = function(knex, Promise) {};
