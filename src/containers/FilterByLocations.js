import FilterByLocations from "../components/FilterByLocations";
import { connect } from "react-redux";
import { filterState, filterCity, filterHighway } from "../actions/index";

const mapStateToProps = (state) => {
  return {
    states: state.states,
    highways: state.highways,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterState: (state) => {
      dispatch(filterState(state));
    },
    filterCity: (city, state) => {
      dispatch(filterCity(city, state));
    },
    filterHighway: (highway) => {
      dispatch(filterHighway(highway));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterByLocations);
