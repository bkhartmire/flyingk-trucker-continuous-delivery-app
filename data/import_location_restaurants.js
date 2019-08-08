const fs = require("fs");
const db = require("../server/knex.js");
const path = require("path");
let gasTypes = new Set();

(async () => {
  try {
    const locations = JSON.parse(
      fs.readFileSync(__dirname + "/locations.json")
    );
    for (const location of locations) {
      if (location.Site.Concepts !== undefined) {
        for (const concept of location.Site.Concepts) {
          const location_id = location.Site.SiteId;
          const restaurant_id = concept.Concept.Id;
          //console.log(location_id, restaurant_id);
          const result = await db("location_restaurants").insert({
            location_id,
            restaurant_id,
          });
          console.log(result);
        }
      }
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
