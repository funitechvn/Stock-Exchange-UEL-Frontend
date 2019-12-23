import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactTableContainer from "react-table-container";


class Boardpage extends Component {

  render() {
    return (
      <React.Fragment>
        <div class="tableContainer">
            <div class="row table-fixed">
                <ReactTableContainer width="100%" height="80vh">
                <table id="table-table-scroll" className="price table-scroll-table" style={{width: "100%", marginBottom: "0px"}}>
                  <colgroup>
                    <col width="4%"/>
                    <col width="3.5%"/>
                    <col width="3.5%"/>
                    <col width="3.5%"/>
                    <col width="3.5%"/>
                    <col width="3.9%"/>
                    <col width="3.5%"/>
                    <col width="3.9%"/>
                    <col width="3.5%"/>
                    <col width="3.9%"/>
                    <col width="4.1%"/>
                    <col width="4.1%"/>
                    <col width="4%"/>
                    <col width="3.5%"/>
                    <col width="3.9%"/>
                    <col width="3.5%"/>
                    <col width="3.9%"/>
                    <col width="3.5%"/>
                    <col width="3.9%"/>
                    <col width="3.5%"/>
                    <col width="3.5%"/>
                    <col width="3.3%"/>
                    <col width="4.5%"/>
                    <col width="4%"/>
                    <col width="4%"/>
                    <col width="6%"/>
                  </colgroup>
                  <thead>
                      <tr>
                        <th rowSpan="2">
                          <center>CK</center>
                        </th>
                        <th rowSpan="2">
                          <center>Trần</center>
                        </th>
                        <th rowSpan="2">
                          <center>Sàn</center>
                        </th>
                        <th rowSpan="2">
                          <center>TC</center>
                        </th>
                        <th rowSpan="1" colSpan="6">
                          <center>Bên mua</center>
                        </th>
                        <th rowSpan="1" colSpan="3">
                          <center>Khớp lệnh</center>
                        </th>
                        <th rowSpan="1" colSpan="6">
                          <center>Bên bán</center>
                        </th>
                        <th rowSpan="2">
                          <center>Cao</center>
                        </th>
                        <th rowSpan="2">
                          <center>Thấp</center>
                        </th>
                        <th rowSpan="2">
                          <center>TB</center>
                        </th>
                        <th rowSpan="2">
                          <center>Tổng KL</center>
                        </th>
                        <th rowSpan="1" colSpan="3">
                            <center>ĐTNN</center>
                        </th>
                      </tr>

                      <tr id="header-row" align="center">
                        <th width="3.5%">
                          <center>Giá 3</center>
                        </th>
                        <th width="3.9%">
                          <center>KL 3</center>
                        </th>
                        <th width="3.5%">
                          <center>Giá 2</center>
                        </th>
                        <th width="3.9%">
                          <center>KL 2</center>
                        </th>
                        <th width="3.5%">
                          <center>Giá 1</center>
                        </th>
                        <th width="3.9%">
                          <center>KL 1</center>
                        </th>
                        <th width="4.1%">
                          <center>Giá</center>
                        </th>
                        <th width="4.1%">
                          <center>KL</center>
                        </th>
                        <th width="4%">
                          <center>+/-</center>
                        </th>
                        <th width="3.5%">
                          <center>Giá 1</center>
                        </th>
                        <th width="3.9%">
                          <center>KL 1</center>
                        </th>
                        <th width="3.5%">
                          <center>Giá 2</center>
                        </th>
                        <th width="3.9%">
                          <center>KL 2</center>
                        </th>
                        <th width="3.5%">
                          <center>Giá 3</center>
                        </th>
                        <th width="3.9%">
                          <center>KL 3</center>
                        </th>
                        <th width="4%">
                          <center>NN mua</center>
                        </th>
                        <th width="4%">
                          <center>NN Bán</center>
                        </th>
                        <th width="6%">
                          <center>Dư</center>
                        </th>
                      </tr>
                    
                    </thead>
                  <tbody>
                    <tr id="CII" find-data="0" data-scroll-page="0">
                      <td className="stockSymbol txt-none" data-toggle="tooltip" title="Công ty Cổ phần đầu tư Hạ tầng Kỹ thuật Thành phố Hồ Chí Minh" width="3.2%">CII</td>
                      <td className="ceiling special txt-ceil text-right" width="3%">24.25</td>
                      <td className="floor special txt-floor text-right" width="3%">21.15</td>
                      <td className="refPrice special txt-ref text-right" width="3%">22.7</td>
                      <td className="best3Bid txt-down" width="3%">
                        <div className="highlightTable">
                        </div>
                      </td>
                      <td className="best3BidVol txt-down" width="3.4%">  
                        <div className="highlightTable">
                        </div>
                      </td>
                      <td className="best2Bid txt-down" width="3.4%">
                        <div className="highlightTable">
                        </div>
                      </td>
                      <td className="best2BidVol txt-down" width="3.4%">
                        <div className="highlightTable">
                        </div>
                      </td>
                      <td className="best1Bid txt-down" width="3%">
                        <div className="highlightTable">
                        </div>
                      </td>
                      <td className="best1BidVol txt-down" width="3.4%">
                        <div className="highlightTable">
                          a
                        </div>
                      </td>
                      <td className="matchedPrice special txt-down" width="3.3%">
                        <div className="highlightTable">
                        </div>
                      </td>
                      <td className="matchedVolume special txt-down" width="3.3%">
                        <div className="highlightTable">
                        </div>
                      </td>
                     
                      <td className="priceChange special txt-down" width="3.0%">
                        <div className="highlightTable">
                        </div>
                      </td>

                      <td className="best1Offer txt-down" width="3%">
                        <div className="highlightTable"></div>
                      </td>
                      <td className="best1OfferVol txt-down" width="3.4%">
                        <div className="highlightTable"></div>
                      </td>

                      <td className="best2Offer txt-down" width="3%">
                        <div className="highlightTable"></div>
                      </td>
                      <td className="best2OfferVol txt-down" width="3.4%">
                        <div className="highlightTable"></div>
                      </td>

                      <td className="best3Offer txt-down" width="3%">
                        <div className="highlightTable"></div>
                      </td>
                      <td className="best3OfferVol txt-down" width="3.4%">
                        <div className="highlightTable"></div>
                      </td>

                      <td className="highest special txt-down" width="3%">
                        <div className="highlightTable"></div>
                      </td>
                      <td className="lowest special txt-down" width="3.4%">
                        <div className="highlightTable"></div>
                      </td>
                      <td className="avgPrice special txt-down" width="3.5%">
                        <div className="highlightTable"> a</div>
                      </td>

                      <td className="nmTotalTradeQty special txt-normal" width="4.3%">
                        <div className="highlightTable"></div>
                      </td>
                      <td className="buyForeignQtty special txt-normal" width="3.5%">
                        <div className="highlightTable"></div>
                      </td>
                      <td className="sellForeignQty special txt-normal" width="3.5%">
                        <div className="highlightTable"></div>
                      </td>
                      <td className="remainForeignQty special txt-normal" width="5.1%">
                        <div className="highlightTable"></div>
                      </td>
                    </tr>
                    
                   
                  </tbody>
                </table>
              </ReactTableContainer>
            </div>

        </div>

      </React.Fragment>
    );
  }
}

export default withRouter(Boardpage);
