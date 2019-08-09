import { connect } from "react-redux";
import FilterByLocations from "../components/FilterByLocations";

const mapStateToProps = (state) => {
  return {
    states: state.states,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(FilterByLocations);
