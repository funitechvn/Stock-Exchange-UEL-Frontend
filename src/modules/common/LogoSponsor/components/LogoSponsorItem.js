import React, { Component } from "react";

class LogoSponsorItem extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="company-img">
        <a href="#" title=""><img src="https://placehold.it/180x80" alt="" /></a>
      </div>      
    );
  }
}

export default LogoSponsorItem;
