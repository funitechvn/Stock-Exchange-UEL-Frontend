import React, { Component } from "react";
import _ from "lodash";
import { Input, Button, Alert } from "reactstrap";
import { withRouter,Link } from "react-router-dom";

import ReCAPTCHA from "react-google-recaptcha";


const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
const DELAY = 1500;

class LoginPage extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      callback: "not fired",
      value: "[empty]",
      load: false,
      expired: "false"
    };
    this._reCaptchaRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: true });
    }, DELAY);
    console.log("didMount - reCaptcha Ref-", this._reCaptchaRef);
  }

  handleChange = value => {
    console.log("Captcha value:", value);
    this.setState({ value });
    // if value is null recaptcha expired
    if (value === null) this.setState({ expired: "true" });
  };

  asyncScriptOnLoad = () => {
    this.setState({ callback: "called!" });
    console.log("scriptLoad - reCaptcha Ref-", this._reCaptchaRef);
  };

  render() {
    const { username, password, isError } = this.props;
    const { value, callback, load, expired } = this.state || {};

    return (
      <React.Fragment>
        <div className="account-pages" />
        <div className="clearfix" />
        <div className="wrapper-page">
          <div className="text-center">
            <a href="index.html" className="logo">
              <span>
                Admin<span>to</span>
              </span>
            </a>
            <h5 className="text-muted m-t-0 font-600">
              Responsive Admin Dashboard
            </h5>
          </div>
          <div className="m-t-40 card-box">
            <div className="text-center">
              <h4 className="text-uppercase font-bold m-b-0">Sign In</h4>
            </div>
            <div className="p-20">
              <form className="form-horizontal m-t-20">
                <div className="form-group">
                  <div className="col-xs-12">
                    <Input
                      className="form-control"
                      type="text"
                      name="username"
                      required
                      value={username}
                      onChange={e => this.props.actions.handleInputChange(e)}
                      placeholder="Username"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-xs-12">
                    <Input
                      className="form-control"
                      type="password"
                      name="password"
                      required
                      value={password}
                      onChange={e => this.props.actions.handleInputChange(e)}
                      placeholder="Password"
                    />
                  </div>
                </div>
                {/* <ReCAPTCHA
                  style={{ display: "inline-block" }}
                  theme="light"
                  ref={this._reCaptchaRef}
                  sitekey={TEST_SITE_KEY}
                  onChange={this.handleChange}
                  asyncScriptOnLoad={this.asyncScriptOnLoad}
                /> */}
                <div className="form-group text-center m-t-30">
                  <div className="col-xs-12">
                    <Button
                      className="btn btn-custom btn-bordred btn-block waves-effect waves-light"
                      onClick={() =>
                        this.props.actions.login({
                          data: {
                            username,
                            password,
                          },
                        })
                      }
                    >
                      Sign In
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 text-center">
                <p className="text-muted">Don't have an account? 
                  <Link to="/register" className="text-primary m-l-5">
                    <b>Sign Up</b>
                  </Link>
                </p>
            </div>
          </div>
        </div>
       
      </React.Fragment>
    );
  }
}

export default withRouter(LoginPage);
