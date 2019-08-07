const knex = require("knex");
const dotenv = require("dotenv");
const result = dotenv.config();
console.log(result);
console.log(process.env.DB_USER);
console.log(process.env.DB_HOST);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_NAME);
const l = {
  user: process.env.DB_USER,
  port: process.env.DB_PORT || 5432,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
const db = knex({
  client: "pg",
  connection: `postgres://${l.user}:${l.password}@${process.env.DB_HOST}:${
    l.port
  }/${l.database}`,
  searchPath: "public",
});

module.exports = db;
