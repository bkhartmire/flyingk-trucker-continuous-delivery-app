import axios from "axios";

export async function fetchLocations() {
  const { data: locations } = await axios.get("/api/locations"); // ES6 destructuring & aliasing
  const markers = locations.map((l) => ({
    position: {
      lat: l.latitude,
      lng: l.longitude,
    },
    name: l.name,
    defaultAnimation: 2,
  }));
  return markers;
}
