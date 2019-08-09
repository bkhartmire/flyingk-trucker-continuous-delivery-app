import { getStatesCities, getHighways } from "../utils";

const defaultState = {
  locations: [],
  states: {},
  highways: [],
  filteredLocations: [],
  loading: true,
};

const reducer = (state = defaultState, action) => {
  let newFilteredLocations;
  switch (action.type) {
    case "SET_LOCATIONS":
      return {
        ...state,
        locations: action.locations,
        loading: false,
        states: getStatesCities(action.locations),
        highways: getHighways(action.locations),
      };
    case "SELECT_TYPE":
      newFilteredLocations = state.locations.filter(
        (location) => location.type === action.payload
      );
      return {
        ...state,
        filteredLocations: [
          ...state.filteredLocations,
          ...newFilteredLocations,
        ],
      };
    case "UNSELECT_TYPE":
      newFilteredLocations = state.filteredLocations.filter(
        (location) => location.type !== action.payload
      );
      return {
        ...state,
        filteredLocations: newFilteredLocations,
      };
    case "SELECT_STATE":
      if (
        state.filteredLocations.some(
          (location) => location.state === action.payload
        )
      ) {
        newFilteredLocations = state.filteredLocations.filter(
          (location) => location.state === action.payload
        );
      } else {
        newFilteredLocations = state.locations.filter(
          (location) => location.state === action.payload
        );
      }

      return { ...state, filteredLocations: newFilteredLocations };
    case "SELECT_CITY":
      newFilteredLocations = state.locations.filter(
        (location) =>
          location.state === action.state &&
          location.preferredName === action.city
      );
      return { ...state, filteredLocations: newFilteredLocations };
    case "SELECT_HIGHWAY":
      if (state.filteredLocations.length > 0) {
        newFilteredLocations = state.filteredLocations.filter(
          (location) => location.highway === action.payload
        );
      } else {
        newFilteredLocations = state.locations.filter(
          (location) => location.highway === action.payload
        );
      }
      return { ...state, filteredLocations: newFilteredLocations };
    default:
      return state;
  }
};

export default reducer;
