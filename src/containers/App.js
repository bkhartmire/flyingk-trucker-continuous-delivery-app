import App from "../App";
import { connect } from "react-redux";

const mapDispatchToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapDispatchToProps)(App);
