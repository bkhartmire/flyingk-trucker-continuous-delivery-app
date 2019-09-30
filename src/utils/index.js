import axios from "axios";

// export async function fetchLocations() {
//   const { data: locations } = await axios.get("/api/locations"); // ES6 destructuring & aliasing
//   const markers = locations.map(async (l) => {
//     let storeType;
//     const gasTypes = await axios.get(`/api/locations/${l.id}/gastypes`);
//     const amenities = await axios.get(`/api/locations/${l.id}/amenities`);
//     const restaurants = await axios.get(`/api/locations/${l.id}/restaurants`);
//     l.type === "3"
//       ? (storeType = "travel stop")
//       : (storeType = "country store");
//     return {
//       position: {
//         lat: l.latitude,
//         lng: l.longitude,
//       },
//       preferredName: l.preferred_name,
//       siteName: l.site_name,
//       defaultAnimation: 2,
//       type: storeType,
//       gasTypes: gasTypes.data,
//       amenities: amenities.data,
//       restaurants: restaurants.data,
//       state: l.state,
//       city: l.city,
//       highway: l.highway,
//       exit: l.exit_number,
//     };
//   });

//   return Promise.all(markers);
// }

function filterGasTypes(types) {
  return types.map((type) => {
    const credit_price = type.CreditPrice ? type.CreditPrice : -1;
    return {
      name: type.FuelType,
      cash_price: type.CashPrice,
      credit_price,
    };
  });
}

function filterAmenities(amenities) {
  return amenities.map((amenity) => {
    return {
      name: amenity.CustomField.DisplayName,
    };
  });
}

function filterRestaurants(restaurants) {
  return restaurants.map((restaurant) => {
    return {
      name: restaurant.Concept.Name,
    };
  });
}

export async function fetchLocations() {
  const { data: locations } = await axios.get("/api/data"); // ES6 destructuring & aliasing
  const markers = locations.rows.map(async ({ site: l }) => {
    return {
      position: {
        lat: l.Site.Latitude,
        lng: l.Site.Longitude,
      },
      preferredName: l.Site.SitePreferredName,
      siteName: l.Site.SiteName,
      defaultAnimation: 2,
      type: l.FacilitySubtype.Name,
      gasTypes: filterGasTypes(l.Site.FuelPrices),
      amenities: filterAmenities(l.CustomFields),
      restaurants: filterRestaurants(l.Site.Concepts),
      state: l.Addresses[0].State,
      city: l.Addresses[0].City,
      highway: l.Site.Highway,
      exit: l.Site.DescriptiveAddress,
    };
  });

  return Promise.all(markers);
}

export function getStatesCities(locations) {
  const result = {};
  const arr = [];
  for (const location of locations) {
    arr.push(location.state);
  }
  const uniqueStates = new Set(arr);
  for (const state of uniqueStates) {
    result[state] = new Set();
  }
  for (const location of locations) {
    result[location.state].add(location.city.trim());
  }
  return result;
}

export function getHighways(locations) {
  const result = {};
  const arr = [];
  for (const location of locations) {
    if (typeof location.highway === "string" && location.highway.length > 0) {
      arr.push(location.highway);
    }
  }
  const uniqueHighways = new Set(arr);
  for (const highway of uniqueHighways) {
    result[highway] = new Set();
  }
  for (const location of locations) {
    if (result[location.highway])
      result[location.highway].add(location.city.trim());
  }
  return result;
}
