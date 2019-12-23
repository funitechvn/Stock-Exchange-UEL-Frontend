/*eslint no-unused-expressions: [2, { allowShortCircuit: true, allowTernary: true }]*/

import React, { Component } from "react";

class GoogleDocsViewer extends Component {
  handleOnLoad = () => {
    console.log("run");
  };

  render() {
    let iframeSrc =
      "https://docs.google.com/viewerng/viewer?url=" +
      this.props.fileUrl +
      "&embedded=true";

    let style = {
      width: this.props.width,
      height: this.props.height,
      border: "none",
      padding: this.props.padding
    };

    return (
      <div>
        <iframe
          src={iframeSrc}
          onLoad={() => this.handleOnLoad}
          style={style}
        />
      </div>
    );
  }
}

export default GoogleDocsViewer;
