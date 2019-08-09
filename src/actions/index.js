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

export function filterState(e) {
  const state = e.target.value;
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

export function filterCity(e) {
  const city = e.target.value;
  return function(dispatch) {
    dispatch(selectCity(city));
  };
}
function selectCity(city) {
  return {
    type: "SELECT_CITY",
    payload: city,
  };
}

export function filterHighway(e) {
  const highway = e.target.value;
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
