const fs = require("fs");
const db = require("../server/knex.js");
let amenObj = {};

(async () => {
  try {
    const locations = JSON.parse(
      fs.readFileSync(__dirname + "/locations.json")
    );
    for (const location of locations) {
      if (location.CustomFields !== undefined) {
        for (const amenity of location.CustomFields) {
          amenObj[amenity.CustomField.Id] = amenity.CustomField.DisplayName;
        }
      }
    }
    for (const key in amenObj) {
      const result = await db("amenities").insert({
        id: key,
        name: amenObj[key],
      });
      console.log(result);
    }
    process.exit();
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
