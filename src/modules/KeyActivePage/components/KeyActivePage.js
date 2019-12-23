import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { 
  Alert, 
  Button, 
  FormGroup, 
  Label, 
  Input, 
  FormFeedback, 
  InputGroup, 
  InputGroupAddon, 
} from "reactstrap";
import { Badge } from "reactstrap";
import ReactTable from "react-table";
import _ from "lodash";
import moment from "moment";
class KeyActivepage extends Component {

  render() {
    const { numOfKey, isError } = this.props.keyActive;
    const { keyList, isSuccess } = this.props;
    const columns = [
      {
        Header: "#",
        accessor: "id",
        Cell: props => {
          return <p>{props.index + 1}</p>;
        },
      },
      {
        Header: "Mã kích hoạt",
        accessor: "key",
      },
      {
        Header: "Ngày khởi tạo",
        accessor: "createDate",
        Cell: ({ original }) => {
          return <p>{moment(original.createDate).format("LLL")}</p>;
        },
      },
      {
        Header: "Trạng thái",
        accessor: "actived",
        Cell: ({ original }) => {
          return (
            <Badge color={original.actived ? "primary" : "danger"}>
              {original.actived ? "Kích hoạt" : " Chưa kích hoạt"}
            </Badge>
          );
        },
      },
    ];
    return (
      <React.Fragment>
        <div className="card-box">
          <FormGroup className="col-md-6">
            <Label for="exampleEmail">Mã kích hoạt</Label>
            <InputGroup>
              <Input 
                type="number"
                name="numOfKey"
                id="exampleEmail"
                placeholder="Số lượng mã kích hoạt"
                value={numOfKey}
                onChange={e => this.props.actions.handleInputKeyActiveChange(e)}
              />
              <InputGroupAddon addonType="append">
                <Button 
                  style={{ cursor: "pointer"}}
                  color="primary"
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => this.props.actions.generateKey(this.props.keyActive)}
                  disabled={
                    _.isEmpty(numOfKey) 
                  }
                >
                  Tạo mã
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
        {
          isSuccess ? (
            <div className="form-group col-md-12">
              <Alert color="success">Tạo mã thành công</Alert>
            </div>
          ) : null
        }
        {
          isError ? (
            <div className="form-group col-md-12">
              <Alert color="danger">Tạo mã không thành công</Alert>
            </div>
          ) : null
        }
        </div>

        <div className="card-box">
          <h4 className="header-title mt-0 m-b-30">Lịch sử giao dịch</h4>
          <ReactTable
            data={keyList}
            className="table text-center"
            columns={columns}
            pageSizeOptions={[5, 10, 20, 25, 50, 100]}
            defaultPageSize={10}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(KeyActivepage);
