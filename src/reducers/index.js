const defaultState = {
  locations: [],
  gas_types: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LOCATIONS":
      return { ...state, locations: action.locations };
    case "FILTER_LOCATIONS":
      return { ...state, filteredLocations: action.locations };
    default:
      return state;
  }
};

export default reducer;
