const fs = require("fs");
const db = require("../server/knex.js");

(async () => {
  try {
    const locations = JSON.parse(
      fs.readFileSync(__dirname + "/locations.json")
    );
    console.log(locations[1]);
    // for (const location of locations) {
    //   const site = location;
    //   const result = await db("data").insert({
    //     site,
    //   });
    //   console.log(result);
    // }
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
