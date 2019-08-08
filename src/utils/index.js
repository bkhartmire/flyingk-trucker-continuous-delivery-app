import axios from "axios";

export async function fetchLocations() {
  const { data: locations } = await axios.get("/api/locations"); // ES6 destructuring & aliasing
  const markers = locations.map((l) => {
    let storeType;
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
    };
  });
  return markers;
}
