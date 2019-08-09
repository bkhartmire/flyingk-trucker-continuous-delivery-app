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

export function selectType(type) {
  return function(dispatch) {
    dispatch(filterType(type));
  };
}

function filterType(type) {
  return {
    type: "FILTER_TYPE",
    payload: type,
  };
}
