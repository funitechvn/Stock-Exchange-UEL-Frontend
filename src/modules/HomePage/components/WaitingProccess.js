import React from "react";
import _ from "lodash";
import { Badge } from 'reactstrap';

class WaitingProccess extends React.Component {
  render() {
    const { buy, sell } = this.props.waitingTrading;
    return (
      <div className="col-xl-6">
        <div className="card-box">
          <h4 className="header-title mt-0">Lệnh chờ mua</h4>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>Cổ phiếu</th>
                <th>Số lượng</th>
                <th>Giá mua</th>
                <th>Loại lệnh</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {buy.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{_.get(item, "stocks.stockSymbol", "")}</td>
                    <td>{_.get(item, 'number')}</td>
                    <td>{_.get(item, "purchasePrice")}</td>
                    <td>{_.get(item, 'type')}</td>
                    <td>
                      <Badge color={item.isApproved ? "primary" : "danger"}>
                        {_.get(item, "status")}
                      </Badge>
                    </td>
                    <td>
                      <button className="btn btn-icon waves-effect waves-light btn-primary m-b-5"> <i className="fa fa-edit"></i> </button>
                      &nbsp;
                      <button className="btn btn-icon waves-effect waves-light btn-danger m-b-5"> <i className="fa fa-remove"></i> </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="card-box">
          <h4 className="header-title mt-0">Lệnh chờ bán</h4>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>#</th>
                <th>Cổ phiếu</th>
                <th>Số lượng</th>
                <th>Giá mua</th>
                <th>Loại lệnh</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {sell.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{_.get(item, "stocks.stockSymbol", "")}</td>
                    <td>{_.get(item, 'number')}</td>
                    <td>{_.get(item, "purchasePrice")}</td>
                    <td>{_.get(item, 'type')}</td>
                    <td>
                      <Badge color={item.isApproved ? "primary" : "danger"}>
                        {_.get(item, "status")}
                      </Badge>
                    </td>
                    <td>
                      <button className="btn btn-icon waves-effect waves-light btn-primary m-b-5"> <i className="fa fa-edit"></i> </button>
                      &nbsp;
                      <button className="btn btn-icon waves-effect waves-light btn-danger m-b-5"> <i className="fa fa-remove"></i> </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default WaitingProccess;
