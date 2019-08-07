const fs = require("fs");
const db = require("../server/knex.js");
const path = require("path");

(async () => {
  try {
    const file = fs.readFileSync(__dirname + "/locations.json");
    const locations = JSON.parse(file);
    for (const location of locations) {
      const id = location.Site.SiteId;
      const latitude = location.Site.Latitude;
      const longitude = location.Site.Longitude;
      const name = location.Site.SiteName;

      const result = await db("locations").insert({
        id,
        latitude,
        longitude,
        name,
      });
      console.log(result);
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
