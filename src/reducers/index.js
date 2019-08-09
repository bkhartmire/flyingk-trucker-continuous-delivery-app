import { getStatesCities } from "../utils";

const defaultState = {
  locations: [],
  gas_types: [],
  states: {},
  highway: [],
  filteredLocations: [],
  loading: true,
};

const reducer = (state = defaultState, action) => {
  let newFilteredLocations;
  switch (action.type) {
    case "SET_LOCATIONS":
      const states = getStatesCities(action.locations);
      return {
        ...state,
        locations: action.locations,
        loading: false,
        states,
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
    default:
      return state;
  }
};

export default reducer;
