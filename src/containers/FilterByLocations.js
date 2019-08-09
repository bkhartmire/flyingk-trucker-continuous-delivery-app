import { connect } from "react-redux";
import FilterByLocations from "../components/FilterByLocations";
import { setStatesCities } from "../actions/index";

const mapStateToProps = (state) => {
  return {
    states: state.states,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStatesCities: () => {
      const res = setStatesCities();
      dispatch(res);
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterByLocations);
