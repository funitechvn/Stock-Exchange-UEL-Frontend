import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Badge } from "reactstrap";
import _ from "lodash";
import moment from "moment";
import ReactTable from "react-table";

class HistoryPage extends Component {
  render() {
    const { historyStock } = this.props;
    const columns = [
      {
        Header: "#",
        accessor: "id",
        Cell: props => {
          return <p>{props.index + 1}</p>;
        },
      },
      {
        Header: "Cổ phiếu",
        accessor: "stocks.stockSymbol",
      },
      {
        Header: "Kiểu lệnh",
        accessor: "isBuying",
        Cell: ({ original }) => {
          return (
            <Badge color={original.isBuying ? "primary" : "warning"}>
              {original.isBuying ? "Mua" : "Bán"}
            </Badge>
          );
        },
      },
      {
        Header: "Loại lệnh",
        accessor: "type",
      },
      {
        Header: "Giá đặt",
        accessor: "purchasePrice",
      },
      {
        Header: "Giá khớp",
        accessor: "matchedPrice",
      },
      {
        Header: "Khối lượng đặt",
        accessor: "number",
      },
      {
        Header: "Trạng thái khớp lệnh",
        accessor: "isApproved",
        Cell: ({ original }) => {
          return (
            <Badge color={original.isApproved ? "primary" : "danger"}>
              {_.get(original, "status")}
            </Badge>
          );
        },
      },
      {
        Header: "Thời gian đặt",
        accessor: "createDate",
        Cell: ({ original }) => {
          return <p>{moment(original.createDate).format("LLL")}</p>;
        },
      },
    ];
    return (
      <React.Fragment>
        <div className="col-xl-12 col-md-12">
          <div className="card-box">
            <h4 className="header-title mt-0 m-b-30">Lịch sử giao dịch</h4>
            <ReactTable
              data={historyStock}
              className="table"
              columns={columns}
              pageSizeOptions={[5, 10, 20, 25, 50, 100]}
              defaultPageSize={10}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(HistoryPage);
