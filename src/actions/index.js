import { fetchLocations, getStatesCities } from "../utils";

export function getLocations() {
  return function(dispatch) {
    return (async () => {
      const locations = await fetchLocations();
      dispatch(setLocations(locations));
      getStatesCities(locations);
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

export function filterType(type) {
  return function(dispatch) {
    dispatch(selectType(type));
  };
}

function selectType(type) {
  return {
    type: "SELECT_TYPE",
    payload: type,
  };
}

export function filterState(state) {
  return function(dispatch) {
    dispatch(selectState(state));
  };
}

function selectState(state) {
  return {
    type: "SELECT_STATE",
    payload: state,
  };
}

export function filterCity(city) {
  return function(dispatch) {
    dispatch(selectCity(city));
  };
}
function selectCity(city) {
  return {
    type: "SELECT_CITY",
    city,
  };
}

export function filterHighway(highway) {
  return function(dispatch) {
    dispatch(selectHighway(highway));
  };
}

function selectHighway(highway) {
  return {
    type: "SELECT_HIGHWAY",
    payload: highway,
  };
}
