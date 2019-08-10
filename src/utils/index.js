import axios from "axios";

export async function fetchLocations() {
  const { data: locations } = await axios.get("/api/locations"); // ES6 destructuring & aliasing
  const markers = locations.map(async (l) => {
    let storeType;
    const gasTypes = await axios.get(`/api/locations/${l.id}/gastypes`);
    const amenities = await axios.get(`/api/locations/${l.id}/amenities`);
    const restaurants = await axios.get(`/api/locations/${l.id}/restaurants`);
    l.type === "3"
      ? (storeType = "travel stop")
      : (storeType = "country store");
    return {
      position: {
        lat: l.latitude,
        lng: l.longitude,
      },
      preferredName: l.preferred_name,
      siteName: l.site_name,
      defaultAnimation: 2,
      type: storeType,
      gasTypes: gasTypes.data,
      amenities: amenities.data,
      restaurants: restaurants.data,
      state: l.state,
      city: l.city,
      highway: l.highway,
      exit: l.exit_number,
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
  const arr = [];
  for (const location of locations) {
    if (typeof location.highway === "string" && location.highway.length > 0) {
      arr.push(location.highway);
    }
  }
  const uniqueHighways = new Set(arr);

  return uniqueHighways;
}
