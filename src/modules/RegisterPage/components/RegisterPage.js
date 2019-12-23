import React, { Component } from "react";
import _ from "lodash";
import { Input, Button, Alert, Label, Modal, ModalHeader, ModalBody, } from "reactstrap";
import { withRouter } from "react-router-dom";

class RegisterPage extends Component {

  render() {
    const { fullname, username, activeKey, isErrorUser } = this.props.userInfo;
    const { isSuccess, isError } = this.props; 
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
              <h4 className="text-uppercase font-bold m-b-0">Register</h4>
            </div>
            <div className="p-20">
              <form className="form-horizontal m-t-20">
                <div className="form-group">
                  <div className="col-xs-12">
                    <Label>Họ và tên</Label>
                    <Input
                      className="form-control"
                      type="text"
                      name="fullname"
                      required
                      value={fullname}
                      onChange={e => this.props.actions.handleInputChange(e)}
                      placeholder="Họ và tên"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-xs-12">
                    <Label>Tên tài khoản</Label>
                    <Input
                      className="form-control"
                      type="email"
                      name="username"
                      required
                      value={username}
                      onChange={e => this.props.actions.handleInputChange(e)}
                      placeholder="Email"
                      invalid={isErrorUser}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-xs-12">
                    <Label>Kích hoạt</Label>
                    <Input
                      className="form-control"
                      type="text"
                      name="activeKey"
                      required
                      value={activeKey}
                      onChange={e => this.props.actions.handleInputChange(e)}
                      placeholder="Mã kích hoạt"
                    />
                  </div>
                </div>

                <div className="form-group text-center m-t-30">
                  <div className="col-xs-12">
                    <Button
                      className="btn btn-custom btn-bordred btn-block waves-effect waves-light"
                      onClick={() =>
                        {
                          this.props.actions.register(this.props.userInfo);
                          this.props.actions.clear();
                        }
                      }
                    >
                      Đăng kí
                    </Button>
                  </div>
                </div>
                {
                  isSuccess ? (
                    <div className="form-group col-md-12">
                      <Alert color="success">Đăng kí thành công! Vui lòng kiểm tra email của bạn</Alert>
                    </div>
                  ) : null
                }
                {
                  isError ? (
                    <div className="form-group col-md-12">
                      <Alert color="danger">Đăng kí thất bại! Vui lòng kiểm tra email và mã kích hoạt của bạn</Alert>
                    </div>
                  ) : null
                }
              </form>
            </div>
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}

export default withRouter(RegisterPage);
