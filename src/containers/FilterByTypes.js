import { connect } from "react-redux";
import FilterByTypes from "../components/FilterByTypes";

const mapDispatchToProps = (dispatch) => {
  return {
    selectTravelStop: () => {
      dispatch({ type: "SELECT_TRAVEL_STOP" });
    },
    selectCountryStore: () => {
      dispatch({ type: "SELECT_COUNTRY_STORE" });
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FilterByTypes);
