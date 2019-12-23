import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

class WrappedMenu extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="wrapper">
          <div className="topbar">
            <div className="topbar-left">
              <a href="index.html" className="logo">
                <span>
                  Admin<span>to</span>
                </span>
                <i className="mdi mdi-layers" />
              </a>
            </div>

            <div className="navbar navbar-default" role="navigation">
              <div className="container-fluid">
                <ul className="nav navbar-nav list-inline navbar-left">
                  <li className="list-inline-item">
                    <button className="button-menu-mobile open-left">
                      <i className="mdi mdi-menu" />
                    </button>
                  </li>
                  <li className="list-inline-item">
                    <h4 className="page-title">Dashboard</h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="left side-menu">
            <div className="sidebar-inner slimscrollleft">
              <div className="user-box">
                <div className="user-img">
                  <img
                    src="assets/images/users/avatar-1.jpg"
                    alt="user-img"
                    title="Mat Helme"
                    className="rounded-circle img-thumbnail img-responsive"
                  />
                  >
                  <div className="user-status offline">
                    <i className="mdi mdi-adjust" />
                  </div>
                </div>
                <h5>
                  <a href="#">Mat Helme</a>{" "}
                </h5>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="mdi mdi-settings" />
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a className="text-custom" style={{cursor: "pointer"}}>
                      <i className="mdi mdi-power" onClick={() => this.props.actions.logout()} />
                    </a>
                  </li>
                </ul>
              </div>

              <div id="sidebar-menu">
                <ul>
                  <li className="text-muted menu-title">Navigation</li>

                  <li>
                    <Link to="/" className={this.props.location.pathname === "/" ? "waves-effect active" : "waves-effect"}>
                      <i className="mdi mdi-view-dashboard" />{" "}
                      <span> Trang chủ </span>{" "}
                    </Link>
                  </li>

                  <li>
                    <Link to="/history" className={this.props.location.pathname === "/history" ? "waves-effect active" : "waves-effect"}>
                      <i className="mdi mdi-format-font" />{" "}
                      <span> Lịch sử giao dịch </span>{" "}
                    </Link>
                  </li>

                  <li>
                    <Link to="/keyactive" className={this.props.location.pathname === "/keyactive" ? "waves-effect active" : "waves-effect"}>
                      <i className="mdi mdi-key " />
                      <span> Mã kích hoạt </span>
                    </Link>
                  </li>

                </ul>
                <div className="clearfix" />
              </div>

              <div className="clearfix" />
            </div>
          </div>

          <div className="content-page">
            <div className="content">
              <div className="container-fluid">
                {this.props.children}
              </div>
            </div>

            <footer className="footer text-right">
              Phần mềm được xây dựng bởi WebDev Studios
            </footer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WrappedMenu;
