import FilterBox from "../components/FilterBox";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(FilterBox);
