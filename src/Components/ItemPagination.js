import React, { Component } from "react";
import Pagination from "react-js-pagination";

class ItemPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: this.props.page
    };
  }

  handlePageChange = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
    this.props.updatePage(pageNumber);
  };

  render() {
    return (
      <div id="pages">
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={24}
          totalItemsCount={this.props.hits}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

// class ItemPagination extends Component {
//     render (){
//         let active = 1;
//         let items = [];
//         let lastPagenumber=10;
//         for (let number = 1; number <= 10; number++) {
//             items.push(
//                 <Pagination.Item active={number === active}>{number}</Pagination.Item>
//             );
//         }
//
//         const paginationBasic = (
//             <div>
//                 <Pagination bsSize="large">{items}</Pagination>
//             </div>
//         );
//
//
//         return(paginationBasic)
//     }
// }

export default ItemPagination;
