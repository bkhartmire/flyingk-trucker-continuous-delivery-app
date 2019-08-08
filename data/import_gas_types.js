const fs = require("fs");
const db = require("../server/knex.js");
let gasTypes = new Set();

(async () => {
  try {
    const locations = JSON.parse(
      fs.readFileSync(__dirname + "/locations.json")
    );
    for (const location of locations) {
      if (location.Site.FuelPrices !== undefined) {
        for (const fuelPrice of location.Site.FuelPrices) {
          gasTypes.add(fuelPrice.FuelType);
        }
      }
    }
    for (const key of gasTypes) {
      const result = await db("gas_types").insert({
        name: key,
      });
      console.log(result);
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
