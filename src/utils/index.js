import axios from "axios";

export async function fetchLocations() {
  const { data: locations } = await axios.get("/api/locations"); // ES6 destructuring & aliasing
  const markers = locations.map(async (l) => {
    let storeType;
    const gasTypes = await axios.get(`/api/locations/${l.id}/gastypes`);
    const amenities = await axios.get(`/api/locations/${l.id}/amenities`);
    const restaurants = await axios.get(`/api/locations/${l.id}/restaurants`);
    l.type === 3 ? (storeType = "travel stop") : (storeType = "country store");
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
    };
  });
  return Promise.all(markers);
}
