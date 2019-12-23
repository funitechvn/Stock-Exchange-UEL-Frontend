import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { name } from "../reducers";
import * as action from "../actions";
import RegisterPage from "./RegisterPage";

class RegisterPageContainer extends Component {

  render() {
    return (
      <React.Fragment>
        <RegisterPage  {...this.props} />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state[name],
  };
}
function mapDispatchToProps(dispatch) {
  const actions = {
    ...action,
  };
  return { actions: bindActionCreators(actions, dispatch) };
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterPageContainer)
);
