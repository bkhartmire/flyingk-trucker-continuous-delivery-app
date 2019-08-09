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
      return state;
    case "SELECT_CITY":
      return state;
    case "SELECT_HIGHWAY":
      return state;
    default:
      return state;
  }
};

export default reducer;
