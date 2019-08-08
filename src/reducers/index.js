const defaultState = {
  locations: [{ id: null, long: null, lat: null, name: null }],
  restaurants: [{ id: null, name: null, icon: null }],
  gasTypes: [{ id: null, name: null }],
  amenities: [{ id: null, name: null }],
  locationRestaurants: [{ id: null, locationID: null, restaurantID: null }],
  locationGasTypes: [{ id: null, locationID: null, gasTypeID: null }],
  locationAmenities: [{ id: null, locationID: null, restaurantID: null }],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_LOCATIONS":
      return { ...state, locations: action.locations };
    default:
      return state;
  }
};

export default reducer;
