import PropTypes from "prop-types";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DocumentTitle from "react-document-title";
import { name } from "../reducers";
import * as action from "../actions";

import LogoSponsor from "./LogoSponsor";

class LogoSponsorContainer extends Component {

  render() {
    return null;
    return (
      <LogoSponsor {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state[name]
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
  )(LogoSponsorContainer)
);
