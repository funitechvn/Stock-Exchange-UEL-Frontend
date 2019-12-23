import React, { Component } from "react";

export default class LoadingScreen extends Component {
  render() {
    return (
      <div className="row mt-5 pt-5 text-center">
        <div className="container">
          <div className="text-center">
            <div className="lds-ellipsis">
              <div />
              <div />
              <div />
              <div />
            </div>
            <div className="text-center">Vui lòng đợi trong giây lát!</div>
          </div>
        </div>
      </div>
    );
  }
}
