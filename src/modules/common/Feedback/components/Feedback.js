import React, { Component } from "react";

import FeedbackItem from "./FeedbackItem";

class Feedback extends Component {
  render() {
    const { classes } = this.props;

    return (
      <section>
        <div class="block">
          <div data-velocity="-.1" style={{background: "url('https://placehold.it/1920x1000') repeat scroll 50% 422.28px transparent;"}} class="parallax scrolly-invisible layer color light"></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="heading light">
                  <h2>Các thông báo mới nhất</h2>
                  <span>What other people thought about the service provided by JobHunt</span>
                </div>
                <div class="reviews-sec" id="reviews-carousel">
                  <FeedbackItem />
                  <FeedbackItem />
                  <FeedbackItem />
                  <FeedbackItem />
                  <FeedbackItem />
                </div>
              </div>
            </div>
          </div>	
        </div>
      </section>
    );
  }
}

export default Feedback;
