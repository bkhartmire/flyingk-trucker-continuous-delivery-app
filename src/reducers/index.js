import { getStatesCities, getHighways } from "../utils";

const defaultState = {
  locations: [],
  states: {},
  highways: {},
  filteredLocations: [],
  madeSelection: false,
  resetCityOptions: false,
  selectedFilters: {
    state: "",
    city: "",
    highway: "",
    travelStop: false,
    countryStore: false,
  },
  loading: true,
};

const filterLocations = (filters, locations) => {
  let filteredLocations = locations;
  for (const filter in filters) {
    if (typeof filters[filter] === "boolean" && filters[filter]) {
      filteredLocations = filteredLocations.filter((location) =>
        location.type
          .replace(/\s/g, "")
          .toLowerCase()
          .includes(filter.toLowerCase())
      );
      debugger;
    }
    if (typeof filters[filter] === "string" && filters[filter] !== "") {
      debugger;
    }
  }
  return filteredLocations;
};

const reducer = (state = defaultState, action) => {
  let filteredLocations;
  switch (action.type) {
    case "SET_LOCATIONS":
      return {
        ...state,
        locations: action.locations,
        loading: false,
        states: getStatesCities(action.locations),
        highways: getHighways(action.locations),
      };
    case "SELECT_TRAVEL_STOP":
      filteredLocations = filterLocations(
        {
          ...state.selectedFilters,
          travelStop: !state.selectedFilters.travelStop,
        },
        state.locations
      );
      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          travelStop: !state.selectedFilters.travelStop,
        },
        madeSelection: true,
        filteredLocations,
      };
    case "SELECT_COUNTRY_STORE":
      filteredLocations = filterLocations(
        {
          ...state.selectedFilters,
          countryStore: !state.selectedFilters.countryStore,
        },
        state.locations
      );
      filterLocations("country store", state);
      return {
        ...state,
        selectedFilters: {
          ...state.selectedFilters,
          countryStore: !state.selectedFilters.countryStore,
        },
        madeSelection: true,
        filteredLocations,
      };
    case "SELECT_STATE":
      if (
        state.filteredLocations.some(
          (location) => location.state === action.payload
        )
      ) {
        filteredLocations = state.filteredLocations.filter(
          (location) => location.state === action.payload
        );
      } else {
        filteredLocations = state.locations.filter(
          (location) => location.state === action.payload
        );
      }
      if (state.typeFilters.length > 0) {
        filteredLocations = filteredLocations.filter((location) => {
          return state.typeFilters.includes(location.type);
        });
      }
      return {
        ...state,
        filteredLocations,
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
        filteredLocations = state.locations.filter(
          (location) => location.state === action.state
        );
      } else {
        if (state.locationFilters.state) {
          filteredLocations = state.locations.filter(
            (location) =>
              location.state === state.locationFilters.state &&
              location.preferredName === action.city
          );
        } else {
          filteredLocations = state.locations.filter(
            (location) =>
              location.highway === state.locationFilters.highway &&
              location.preferredName === action.city
          );
        }
      }
      if (state.typeFilters.length > 0) {
        filteredLocations = filteredLocations.filter((location) => {
          return state.typeFilters.includes(location.type);
        });
      }

      return {
        ...state,
        filteredLocations,
        locationFilters: { ...state.locationFilters, city: action.city },
        madeSelection: true,
        resetCityOptions: false,
      };
    case "SELECT_HIGHWAY":
      filteredLocations = state.locations.filter(
        (location) => location.highway === action.payload
      );
      if (state.typeFilters.length > 0) {
        filteredLocations = filteredLocations.filter((location) => {
          return state.typeFilters.includes(location.type);
        });
      }

      return {
        ...state,
        filteredLocations,
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
