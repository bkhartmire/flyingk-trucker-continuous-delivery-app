import { connect } from "react-redux";
import FilterByTypes from "../components/FilterByTypes";
import { filterType } from "../actions/index";

const mapDispatchToProps = (dispatch) => {
  return {
    filterType: (e, type) => {
      const res = filterType(e, type);
      dispatch(res);
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FilterByTypes);
