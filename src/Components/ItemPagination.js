
import {Pagination} from "react-bootstrap";
import React, { Component } from 'react';

class ItemPagination extends Component {
    render (){
        let active = 1;
        let items = [];
        let lastPagenumber=10;
        for (let number = 1; number <= 10; number++) {
            items.push(
                <Pagination.Item active={number === active}>{number}</Pagination.Item>
            );
        }

        const paginationBasic = (
            <div>
                <Pagination bsSize="large">{items}</Pagination>
            </div>
        );


        return(paginationBasic)
    }
}

export default ItemPagination;