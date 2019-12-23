import React, { Component } from "react";
import _ from "lodash";
import Pagination from "react-js-pagination";

export default class PaginationBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activePage: 1
    }
  }
  onPageChange = selected => {
    this.setState({
      activePage: selected
    });
    if (_.isEmpty(this.props.params)) {
      this.props.history.push(`${this.props.match.url}?page=${selected - 1}`);
    } else {
      this.props.history.push(
        `${this.props.match.url}?page=${selected - 1}&${this.props.params}`
      );
    }
  };
  componentWillMount() {
    const {meta} = this.props;
    this.setState({
      activePage: parseInt(_.get(meta, "page", 1))
    })
  }
  render() {
    const { meta } = this.props;
    return (
      <div className="pagination">
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={9}
          hideNavigation
          totalItemsCount={_.get(meta, "count", 0)}
          pageRangeDisplayed={3}
          onChange={this.onPageChange}
        />
      </div>
    );
  }
}
