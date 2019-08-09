const fs = require("fs");
const db = require("../server/knex.js");

(async () => {
  try {
    const locations = JSON.parse(
      fs.readFileSync(__dirname + "/locations.json")
    );
    let gasObj = {
      Unleaded: 1,
      Midgrade: 2,
      Premium: 3,
      "Bio-Diesel B15": 4,
      "Bulk DEF": 5,
      Diesel: 6,
      Propane: 7,
      CNG: 8,
      "Fast Fill CNG": 9,
      "Bio-Diesel B5": 10,
      "Bio-Diesel B7": 11,
    };
    for (const location of locations) {
      if (location.Site.FuelPrices !== undefined) {
        for (const fuelPrice of location.Site.FuelPrices) {
          const location_id = location.Site.SiteId;
          const gas_type_id = gasObj[fuelPrice.FuelType];
          const cash_price = fuelPrice.CashPrice;
          const credit_price =
            fuelPrice.CreditPrice === null ? -1 : fuelPrice.CreditPrice;

          //console.log(location_id, gas_type_id, cash_price, credit_price);
          const result = await db("location_gas_types").insert({
            location_id,
            gas_type_id,
            cash_price,
            credit_price,
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
