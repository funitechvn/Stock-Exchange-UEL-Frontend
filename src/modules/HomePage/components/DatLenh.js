import React from "react";
import { Button, FormGroup, Label, Input, Alert, FormFeedback } from "reactstrap";
import _ from "lodash";

class DatLenh extends React.Component {

  datLenh = e => {
    if (e) e.preventDefault();
    this.props.actions.tradingCreate({
      data: this.props.datlenh
    });
  };

  render() {
    const { stocks } = this.props.dashboard;
    const { matchedPriceEditable } = this.props;
    const {
      isBuying,
      stock,
      type,
      purchasePrice,
      priceStep,
      number,
      quantity,
      tempPrice,
      isError,
      errorMess
    } = this.props.datlenh;
    return (
      <div className="col-xl-6">
        <div className="card-box">
          <h4 className="header-title mt-0">Đặt lệnh</h4>
          <div className="form-row">
            <FormGroup className="col-md-6">
              <Label for="exampleSelect">Mua/Bán</Label>
              <Input
                name="isBuying"
                type="select"
                onChange={e => this.props.actions.handleInputDatlenhChange(e)}
                value={isBuying}
              >
                <option>Chọn Mua/Bán</option>
                <option value={true}>Mua</option>
                <option value={false}>Bán</option>
              </Input>
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="exampleSelect">Cổ phiếu</Label>
              <Input
                name="stock"
                type="select"
                onChange={e => this.props.actions.handleInputDatlenhChange(e)}
                value={stock}
              >
                <option>Chọn Cổ Phiếu</option>
                {stocks.map(item => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.stockSymbol}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
            <FormGroup className="col-md-12">
              <Label for="exampleSelect">Loại lệnh</Label>
              <Input
                name="type"
                type="select"
                onChange={e => this.props.actions.handleChangeLoaiDatLenh(e)}
                value={type}
              >
                <option>Chọn Loại Lệnh</option>
                <option value="LO">LO</option>
                <option value="ATO">ATO</option>
                <option value="ATC">ATC</option>
                <option value="MP">MP</option>
              </Input>
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="exampleEmail">Giá đặt lệnh</Label>
              <Input
                type="number"
                name="purchasePrice"
                id="exampleEmail"
                onChange={e => this.props.actions.handleInputDatlenhChange(e)}
                value={purchasePrice}
                disabled={!matchedPriceEditable}
                invalid={priceStep}
              />
              <FormFeedback>Bước giá không hợp lệ</FormFeedback>
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="exampleEmail">Số lượng</Label>
              <Input
                type="number"
                name="number"
                id="exampleEmail"
                onChange={e => this.props.actions.handleInputDatlenhChange(e)}
                value={number}
                invalid={quantity}
              />
              <FormFeedback>Số lượng là bộ số của 10</FormFeedback>
            </FormGroup>
            <div className="form-group col-md-6">
              <label className="col-form-label">Cổ phiếu khả dụng</label>
              <input type="text" className="form-control" disabled />
            </div>
            <div className="form-group col-md-6">
              <label className="col-form-label">Tiền tạm tính</label>
              <Input
                type="number"
                name="tempPrice"
                id="exampleEmail"
                value={tempPrice}
                disabled
              />
            </div>

            {isError ? (
              <div className="form-group col-md-12">
                <Alert color="danger">{errorMess}</Alert>
              </div>
            ) : null}
            <Button
              style={{cursor: "pointer"}}
              type="submit"
              className="btn btn-primary"
              onClick={e => this.datLenh(e)}
              disabled={
                _.isEmpty(number) ||
                _.isEmpty(isBuying) ||
                _.isEmpty(stock) ||
                _.isEmpty(type) ||
                _.isEmpty(`${purchasePrice}`) ||
                _.isEmpty(number)
              }
            >
              Đặt lệnh
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default DatLenh;
