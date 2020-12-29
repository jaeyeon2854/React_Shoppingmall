import React, { useState, useEffect, useRef } from 'react';
import { Pagination } from 'react-bootstrap';

function pagination() {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <Pagination className="justify-content-center mt-5">{items}</Pagination>
    )
}

export default pagination