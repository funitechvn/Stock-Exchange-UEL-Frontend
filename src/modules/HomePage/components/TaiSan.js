import React from "react";
import _ from "lodash";

class TaiSan extends React.Component {
  render() {
    const { user, totalStock } = this.props.dashboard;
    const { stock = [] } = this.props.dashboard.user
    return (
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card-box">
            <h4 className="header-title mt-0 m-b-30">Tổng tài sản</h4>

            <div className="widget-chart-1">
              <div className="widget-detail-1">
                <h2 className="p-t-10 mb-0">{_.get(user, "totalMoney", 0)}</h2>
                <p className="text-muted m-b-10">VND</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="card-box">
            <h4 className="header-title mt-0 m-b-30">Tổng số cổ phiếu</h4>

            <div className="widget-chart-1">
              <div className="widget-detail-1">
                <h2 className="p-t-10 mb-0">{totalStock}</h2>
                <p className="text-muted m-b-10">Tổng số cổ phiếu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-md-6">
          <div className="card-box">
            <h4 className="header-title mt-0 m-b-30">Tài sản chi tiết</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Cổ phiếu</th>
                  <th>Số lượng</th>
                  <th>Giá mua</th>
                  <th>+/-</th>
                </tr>
              </thead>
              <tbody>
                {stock.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.stockSymbol}</td>
                      <td>{item.number}</td>
                      <td>{item.price}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default TaiSan;
