const fs = require("fs");
const db = require("../server/knex.js");
const path = require("path");
let restaurantObj = {};

(async () => {
  try {
    const locations = JSON.parse(
      fs.readFileSync(__dirname + "/locations.json")
    );
    for (const location of locations) {
      if (location.Site.Concepts !== undefined) {
        for (const concept of location.Site.Concepts) {
          restaurantObj[concept.Concept.Id] = {
            name: String(concept.Concept.Name),
            icon: concept.Concept.ConceptIcon,
          };
        }
      }
    }
    for (const key in restaurantObj) {
      const result = await db("restaurants").insert({
        id: key,
        name: restaurantObj[key].name,
        icon: restaurantObj[key].icon,
      });
      console.log(result);
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
