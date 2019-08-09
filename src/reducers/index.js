import { getStatesCities } from "../utils";

const defaultState = {
  locations: [],
  gas_types: [],
  states: {},
  highway: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LOCATIONS":
      return { ...state, locations: action.locations };
    case "FILTER_LOCATIONS":
      return { ...state, filteredLocations: action.locations };
    case "SET_STATES_CITIES":
      const copyLocations = [...state.locations];
      const stateObj = getStatesCities(copyLocations);
      return { ...state, states: stateObj };
    default:
      return state;
  }
};

export default reducer;
