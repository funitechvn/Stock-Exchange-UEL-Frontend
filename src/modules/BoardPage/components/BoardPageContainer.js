import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { name } from "../reducers";
import { name as nameOfWpappedMenu } from "modules/WrappedMenu/reducers";
import * as action from "../../WrappedMenu/actions"
import BoardPage from "./BoardPage";
import _ from "lodash";
class BoardpageContainer extends Component {

  render() {  
    return (
      <React.Fragment>
        <BoardPage {...this.props} />
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
  )(BoardpageContainer)
);
