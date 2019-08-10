import { getStatesCities, getHighways } from "../utils";

const defaultState = {
  locations: [],
  states: {},
  highways: [],
  filteredLocations: [],
  madeSelection: false,
  locationFilters: {
    state: null,
    city: null,
    highway: null,
  },
  typeFilters: [],
  loading: true,
};

//show no results if search and no filteredLocations come up
//highways cities states respond to each other
//all filters should work at the same time
//city select option should reset to top default when city selection changes

const getSelectedFilters = (state) => {
  debugger;
  const result = {};
  for (const filter in state.locationFilters) {
    if (state.locationFilters[filter]) {
      result[filter] = state.locationFilters[filter];
    }
  }
  return result;
};

const reducer = (state = defaultState, action) => {
  let newFilteredLocations;
  let newFilters;
  let selectedFilters;
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
      selectedFilters = getSelectedFilters(state);
      debugger;
      if (!state.madeSelection || Object.keys(selectedFilters).length === 0) {
        newFilteredLocations = state.locations.filter(
          (location) => location.type === action.payload
        );
      } else if (
        Object.keys(selectedFilters).length > 0 ||
        state.filteredLocations.length === 0
      ) {
        newFilteredLocations = state.locations.filter((location) => {
          for (const key in selectedFilters) {
            if (location[key] !== selectedFilters[key]) return false;
          }
          return true;
        });
      }
      newFilteredLocations = newFilteredLocations.filter((location) => {
        return (
          state.typeFilters.includes(location.type) ||
          location.type === action.payload
        );
      });
      return {
        ...state,
        filteredLocations: [...newFilteredLocations],
        typeFilters: [...state.typeFilters, action.payload],
        madeSelection: true,
      };
    case "UNSELECT_TYPE":
      if (state.typeFilters.length === 1) {
        selectedFilters = getSelectedFilters(state);
        newFilteredLocations = state.locations.filter((location) => {
          for (const key in selectedFilters) {
            if (location[key] !== selectedFilters[key]) return false;
          }
          return true;
        });
      } else {
        debugger;
        newFilteredLocations = state.filteredLocations.filter(
          (location) => location.type !== action.payload
        );
      }

      newFilters = state.typeFilters.filter(
        (filter) => filter !== action.payload
      );
      debugger;
      return {
        ...state,
        filteredLocations: newFilteredLocations,
        typeFilters: newFilters,
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
      debugger;
      return {
        ...state,
        filteredLocations: newFilteredLocations,
        locationFilters: { ...state.locationFilters, state: action.payload },
        madeSelection: true,
      };
    case "SELECT_CITY":
      newFilteredLocations = state.locations.filter(
        (location) =>
          location.state === action.state &&
          location.preferredName === action.city
      );
      debugger;
      return {
        ...state,
        filteredLocations: newFilteredLocations,
        locationFilters: { ...state.locationFilters, city: action.city },
        madeSelection: true,
      };
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
      debugger;
      return {
        ...state,
        filteredLocations: newFilteredLocations,
        locationFilters: { ...state.locationFilters, highway: action.payload },
        madeSelection: true,
      };
    default:
      return state;
  }
};

export default reducer;
