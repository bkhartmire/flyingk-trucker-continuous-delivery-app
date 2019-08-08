import { fetchLocations } from "../utils";

export function getLocations() {
  return function(dispatch) {
    return (async () => {
      const locations = await fetchLocations();
      dispatch(setLocations(locations));
    })();
  };
}

function setLocations(locations) {
  return {
    type: "SET_LOCATIONS",
    locations,
  };
}
