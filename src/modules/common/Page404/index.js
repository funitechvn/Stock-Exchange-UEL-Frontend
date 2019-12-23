import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class Page404 extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="account-pages" />
        <div class="clearfix" />
        <div class="wrapper-page">
          <div class="ex-page-content text-center">
            <div class="text-error">404</div>
            <h3 class="text-uppercase font-600">Page not Found</h3>
            <p class="text-muted">
              It's looking like you may have taken a wrong turn. Don't worry...
              it happens to the best of us. You might want to check your
              internet connection. Here's a little tip that might help you get
              back on track.
            </p>
            <br />
            <Link class="btn btn-success waves-effect waves-light" to="/">
              {" "}
              Return Home
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Page404);
