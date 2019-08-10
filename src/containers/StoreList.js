import { connect } from "react-redux";
import StoreList from "../components/StoreList";

const mapStateToProps = (state) => {
  return {
    locations: state.filteredLocations,
  };
};

export default connect(mapStateToProps)(StoreList);
