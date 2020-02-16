import React from "react";
import {Pagination} from 'react-bootstrap';

let active = 1;
let items = [];
for (let number = 1; number <= 1; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}
const Paginate = () => (
    <Pagination>
        <Pagination.Prev/>
        {items}
        <Pagination.Next/>
    </Pagination>
);

export default Paginate;
