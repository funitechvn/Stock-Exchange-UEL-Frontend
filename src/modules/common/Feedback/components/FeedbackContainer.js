import PropTypes from "prop-types";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DocumentTitle from "react-document-title";
import { name } from "../reducers";
import * as action from "../actions";

import Feedback from "./Feedback";

class FeedbackContainer extends Component {

  render() {

    return (
      <Feedback {...this.props} />
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
  )(FeedbackContainer)
);
