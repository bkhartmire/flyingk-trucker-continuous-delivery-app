const fs = require("fs");
const db = require("../server/knex.js");
const path = require("path");

(async () => {
  try {
    const locations = JSON.parse(
      fs.readFileSync(__dirname + "/locations.json")
    );
    for (const location of locations) {
      const site = location.Site;
      const result = await db("data").insert({
        site,
      });
      console.log(result);
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
