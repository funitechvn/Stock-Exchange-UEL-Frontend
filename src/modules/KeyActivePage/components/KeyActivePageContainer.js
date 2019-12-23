import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { name } from "../reducers";
import * as action from "../actions";
import KeyActivepage from "./KeyActivePage";
import _ from "lodash";
class KeyActivepageContainer extends Component {
  componentWillMount() {
    this.props.actions.fetchKey();
  }
  render() {  
    return (
      <React.Fragment>
        <KeyActivepage {...this.props} />
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
  )(KeyActivepageContainer)
);
