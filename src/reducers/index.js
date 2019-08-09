const defaultState = {
  locations: [],
  gas_types: [],
  filteredLocations: [],
};

const reducer = (state = defaultState, action) => {
  let filteredLocations;
  switch (action.type) {
    case "SET_LOCATIONS":
      return {
        ...state,
        locations: action.locations,
        filteredLocations: action.locations,
      };
    case "FILTER_TYPE":
      filteredLocations = state.filteredLocations.filter(
        (location) => location.type === action.payload
      );
      debugger;
      return {
        ...state,
        filteredLocations,
      };
    default:
      return state;
  }
};

export default reducer;
