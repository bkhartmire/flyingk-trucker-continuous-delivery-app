import { getStatesCities, getHighways } from "../utils";

const defaultState = {
  locations: [],
  states: {},
  highways: {},
  filteredLocations: [],
  madeSelection: false,
  resetCityOptions: false,
  locationFilters: {
    state: null,
    city: null,
    highway: null,
  },
  typeFilters: [],
  loading: true,
};

//show no results if search and no filteredLocations come up

const getSelectedLocationFilters = (state) => {
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
  let selectedLocationFilters;
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
      selectedLocationFilters = getSelectedLocationFilters(state);
      if (
        state.typeFilters.length === 1 &&
        Object.keys(selectedLocationFilters).length === 0
      ) {
        newFilteredLocations = [...state.locations];
      } else if (Object.keys(selectedLocationFilters).length === 0) {
        newFilteredLocations = state.locations.filter(
          (location) => location.type === action.payload
        );
      } else if (
        Object.keys(selectedLocationFilters).length > 0 ||
        state.filteredLocations.length === 0
      ) {
        newFilteredLocations = state.locations.filter((location) => {
          for (const key in selectedLocationFilters) {
            if (location[key] !== selectedLocationFilters[key]) return false;
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
        selectedLocationFilters = getSelectedLocationFilters(state);
        newFilteredLocations = state.locations.filter((location) => {
          for (const key in selectedLocationFilters) {
            if (location[key] !== selectedLocationFilters[key]) return false;
          }
          return true;
        });
      } else {
        newFilteredLocations = state.filteredLocations.filter(
          (location) => location.type !== action.payload
        );
      }

      newFilters = state.typeFilters.filter(
        (filter) => filter !== action.payload
      );
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
      if (state.typeFilters.length > 0) {
        newFilteredLocations = newFilteredLocations.filter((location) => {
          return state.typeFilters.includes(location.type);
        });
      }
      return {
        ...state,
        filteredLocations: newFilteredLocations,
        locationFilters: {
          ...state.locationFilters,
          state: action.payload,
          highway: null,
        },
        resetCityOptions: true,
        madeSelection: true,
      };
    case "SELECT_CITY":
      if (action.city === "default") {
        newFilteredLocations = state.locations.filter(
          (location) => location.state === action.state
        );
      } else {
        if (state.locationFilters.state) {
          newFilteredLocations = state.locations.filter(
            (location) =>
              location.state === state.locationFilters.state &&
              location.preferredName === action.city
          );
        } else {
          newFilteredLocations = state.locations.filter(
            (location) =>
              location.highway === state.locationFilters.highway &&
              location.preferredName === action.city
          );
        }
      }
      if (state.typeFilters.length > 0) {
        newFilteredLocations = newFilteredLocations.filter((location) => {
          return state.typeFilters.includes(location.type);
        });
      }

      return {
        ...state,
        filteredLocations: newFilteredLocations,
        locationFilters: { ...state.locationFilters, city: action.city },
        madeSelection: true,
        resetCityOptions: false,
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
      if (state.typeFilters.length > 0) {
        newFilteredLocations = newFilteredLocations.filter((location) => {
          return state.typeFilters.includes(location.type);
        });
      }
      return {
        ...state,
        filteredLocations: newFilteredLocations,
        locationFilters: {
          ...state.locationFilters,
          highway: action.payload,
          state: null,
        },
        madeSelection: true,
        resetCityOptions: true,
      };
    default:
      return state;
  }
};

export default reducer;
