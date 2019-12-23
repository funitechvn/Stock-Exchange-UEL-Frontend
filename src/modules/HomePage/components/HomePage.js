import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TaiSan from "./TaiSan";
import DatLenh from "./DatLenh";
import WaitingProccess from "./WaitingProccess";

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <DatLenh {...this.props} />
          <WaitingProccess {...this.props} />
        </div>
        <TaiSan {...this.props} />
      </React.Fragment>
    );
  }
}

export default withRouter(Homepage);
