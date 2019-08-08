const knex = require("knex");
require("dotenv").config();

const l = {
  user: process.env.DB_USER,
  port: process.env.DB_PORT || 5432,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
const db = knex({
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${l.user}:${l.password}@${process.env.DB_HOST}:${l.port}/${
      l.database
    }`,
  searchPath: "public",
  migration: {
    tablename: "knex_migrations",
    directory: "../migrations",
  },
});

module.exports = db;
