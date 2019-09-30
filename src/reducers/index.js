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
  let filteredLocations = [];
  for (const filter in filters) {
    if (typeof filters[filter] === "boolean" && filters[filter]) {
      filteredLocations = filteredLocations.concat(
        locations.filter((location) =>
          location.type
            .replace(/\s/g, "")
            .toLowerCase()
            .includes(filter.toLowerCase())
        )
      );
    }
    if (typeof filters[filter] === "string" && filters[filter] !== "") {
      filteredLocations = filteredLocations.concat(
        locations.filter((location) => location[filter] === filters[filter])
      );
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
      filteredLocations = filterLocations(
        { ...state.selectedFilters, state: action.payload, highway: "" },
        state.locations
      );
      return {
        ...state,
        filteredLocations,
        selectedFilters: {
          ...state.selectedFilters,
          state: action.payload,
          highway: "",
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
