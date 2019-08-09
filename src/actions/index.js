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

export function setStatesCities() {
  return { type: "SET_STATES_CITIES" };
}

export function filterType(e, type) {
  return function(dispatch) {
    e.target.checked
      ? dispatch(selectType(type))
      : dispatch(unselectType(type));
  };
}

function selectType(type) {
  return {
    type: "SELECT_TYPE",
    payload: type,
  };
}

function unselectType(type) {
  return {
    type: "UNSELECT_TYPE",
    payload: type,
  };
}
