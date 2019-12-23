import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { name } from "../reducers";
import { name as nameOfWpappedMenu } from "modules/WrappedMenu/reducers";
import * as action from "../actions";
import HistoryPage from "./HistoryPage";
import _ from "lodash";
class HistoryPageContainer extends Component {
  componentDidMount() {
    this.props.actions.fetchData();
  }
  render() {
    return (
      <React.Fragment>
        <HistoryPage {...this.props} />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state[name],
    userInfo: _.get(state[nameOfWpappedMenu], "userInfo", null),
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
  )(HistoryPageContainer)
);
