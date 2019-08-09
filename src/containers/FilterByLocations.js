import FilterByLocations from "../components/FilterByLocations";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    states: state.states,
    highways: state.highways,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterByLocations);
