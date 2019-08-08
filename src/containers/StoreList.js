import { connect } from "react-redux";
import StoreList from "../components/StoreList";

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
  };
};

export default connect(mapStateToProps)(StoreList);
