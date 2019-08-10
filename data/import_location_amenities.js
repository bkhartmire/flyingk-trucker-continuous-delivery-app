const fs = require("fs");
const db = require("../server/knex.js");

(async () => {
  try {
    const locations = JSON.parse(
      fs.readFileSync(__dirname + "/locations.json")
    );
    for (const location of locations) {
      if (location.CustomFields !== undefined) {
        for (const amenity of location.CustomFields) {
          const name = amenity.CustomField.DisplayName;
          const location_id = location.Site.SiteId;
          const amenity_id = amenity.CustomField.Id;

          const result = await db("location_amenities").insert({
            name,
            location_id,
            amenity_id,
          });
          console.log(result);
        }
      }
    }
    process.exit();
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
