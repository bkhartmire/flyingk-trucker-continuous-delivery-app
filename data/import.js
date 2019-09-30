const fs = require("fs");
const db = require("../server/knex.js");

(async () => {
  try {
    const locations = JSON.parse(
      fs.readFileSync(__dirname + "/locations.json")
    );
    for (const location of locations) {
      const id = location.Site.SiteId;
      const latitude = location.Site.Latitude;
      const longitude = location.Site.Longitude;
      const site_name = location.Site.SiteName;
      const type = location.FacilitySubTypeId;
      const preferred_name = location.PreferredName;
      const state = location.Addresses[0].State;
      const city = location.Addresses[0].City;
      const highway = location.Site.Highway;
      const exit_number = location.Site.ExitNumber;

      const result = await db("locations").insert({
        id,
        latitude,
        longitude,
        site_name,
        state,
        city,
        highway,
        exit_number,
        type,
        preferred_name,
      });
    }
    process.exit();
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
