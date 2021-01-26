import { Pagination } from "react-bootstrap";
import React from 'react';

function Paginations({ index, endPage, handlePage }) {

    return (
        <Pagination>
            <Pagination.First onClick={() => handlePage(1)} />
            {index === 1 ? <Pagination.Prev onClick={()=>handlePage(index)} /> : <Pagination.Prev onClick={()=>handlePage(index - 1)} />}
            {index === endPage-1 ? <Pagination.Item onClick={()=>handlePage(index - 3)}>{index - 3}</Pagination.Item> : ""}
            {index === endPage ? <Pagination.Item onClick={()=>handlePage(index - 4)}>{index - 4}</Pagination.Item> : ""}
            {index === endPage ? <Pagination.Item onClick={()=>handlePage(index - 3)}>{index - 3}</Pagination.Item> : ""}
            {index < 3 ? "" : <Pagination.Item onClick={()=>handlePage(index - 2)}>{index - 2}</Pagination.Item>}
            {index === 1 ? "" : <Pagination.Item onClick={()=>handlePage(index - 1)}>{index - 1}</Pagination.Item>}

            <Pagination.Item active>{index}</Pagination.Item>

            {index === endPage ? "" : <Pagination.Item onClick={()=>handlePage(index + 1)}>{index + 1}</Pagination.Item>}
            {index > endPage-2 ? "" : <Pagination.Item onClick={()=>handlePage(index + 2)}>{index + 2}</Pagination.Item>}
            {index === 1 ? <Pagination.Item onClick={()=>handlePage(index + 3)}>{index + 3}</Pagination.Item> : ""}
            {index === 1 ? <Pagination.Item onClick={()=>handlePage(index + 4)}>{index + 4}</Pagination.Item> : ""}
            {index === 2 ? <Pagination.Item onClick={()=>handlePage(index + 3)}>{index + 3}</Pagination.Item> : ""}
            {index === endPage ? "" : <Pagination.Next onClick={()=>handlePage(index + 1)} />}

            <Pagination.Last onClick={() =>handlePage(endPage)} />
        </Pagination>
    )
}

export default Paginations