import { connect } from "react-redux";
import FilterByTypes from "../components/FilterByTypes";
import { selectType } from "../actions/index";

const mapDispatchToProps = (dispatch) => {
  return {
    selectType: (type) => {
      const res = selectType(type);
      dispatch(res);
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FilterByTypes);
