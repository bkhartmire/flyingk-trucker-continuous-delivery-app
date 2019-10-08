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
  let locationFilterSelected = false;
  const locationFilters = ["state", "city", "highway"];

  for (const filter of locationFilters) {
    const arrayToFilter =
      filteredLocations.length === 0 ? locations : filteredLocations;
    if (filters[filter] !== "") {
      locationFilterSelected = true;
      filteredLocations = arrayToFilter.filter(
        (location) => location[filter] === filters[filter]
      );
    }
  }

  if (locationFilterSelected) {
    //if neither selected, default will be to show all. Only filter if one is selected
    if (
      (filters.travelStop && !filters.countryStore) ||
      (filters.countryStore && !filters.travelStop)
    ) {
      const filter = filters.travelStop ? "travelStop" : "countryStore";
      return filteredLocations.filter((location) =>
        location.type
          .replace(/\s/g, "")
          .toLowerCase()
          .includes(filter.toLowerCase())
      );
    }
  }

  // for (const filter in filters) {
  //   const arrayToFilter =
  //     filteredLocations.length === 0 ? locations : filteredLocations;
  //   if (typeof filters[filter] === "boolean") {
  //     debugger;
  //     if (filter === "travelStop") {
  //       filteredLocations = filterType(
  //         { type: filter, value: filters[filter] },
  //         arrayToFilter
  //       );
  //     } else {
  //       if (locationFilterSelected) {
  //         filteredLocations = filteredLocations.concat(
  //           filterType(
  //             { type: filter, value: filters[filter] },
  //             filteredLocations
  //           )
  //         );
  //       } else {
  //         filteredLocations = filteredLocations.concat(
  //           filterType({ type: filter, value: filters[filter] }, locations)
  //         );
  //       }
  //     }
  //   }
  //   if (typeof filters[filter] === "string" && filters[filter] !== "") {
  //     locationFilterSelected = true;
  //     filteredLocations = arrayToFilter.filter(
  //       (location) => location[filter] === filters[filter]
  //     );
  //   }
  // }
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
        {
          ...state.selectedFilters,
          state: action.payload,
          highway: "",
          city: "",
        },
        state.locations
      );
      return {
        ...state,
        filteredLocations,
        selectedFilters: {
          ...state.selectedFilters,
          state: action.payload,
          highway: "",
          city: "",
        },
        resetCityOptions: true,
        madeSelection: true,
      };
    case "SELECT_CITY":
      filteredLocations = filterLocations(
        { ...state.selectedFilters, city: action.city },
        state.locations
      );
      return {
        ...state,
        filteredLocations,
        selectedFilters: { ...state.selectedFilters, city: action.city },
        madeSelection: true,
        resetCityOptions: false,
      };
    case "SELECT_HIGHWAY":
      filteredLocations = filterLocations(
        {
          ...state.selectedFilters,
          highway: action.payload,
          state: "",
          city: "",
        },
        state.locations
      );
      return {
        ...state,
        filteredLocations,
        selectedFilters: {
          ...state.selectedFilters,
          highway: action.payload,
          state: "",
          city: "",
        },
        madeSelection: true,
        resetCityOptions: true,
      };
    default:
      return state;
  }
};

export default reducer;
