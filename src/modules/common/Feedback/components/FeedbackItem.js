import React, { Component } from "react";

class FeedbackItem extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div class="col-lg-6">
        <div class="reviews">
          <img src="https://placehold.it/101x101" alt="" />
          <h3>Augusta Silva <span>Web designer</span></h3>
          <p>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything!  Can’t quite believe the service</p>
        </div>
      </div>  
    );
  }
}

export default FeedbackItem;
