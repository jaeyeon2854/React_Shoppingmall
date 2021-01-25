import React from 'react';
import { Pagination } from 'react-bootstrap';

function Paginations(props) {

    return (
        <Pagination>
            <Pagination.First onClick={() => props.handlePage(1)} />
            {props.index === 1 ? <Pagination.Prev onClick={()=>props.handlePage(props.index)} /> : <Pagination.Prev onClick={()=>props.handlePage(props.index - 1)} />}
            {props.index === props.endPage-1 ? <Pagination.Item onClick={()=>props.handlePage(props.index - 3)}>{props.index - 3}</Pagination.Item> : ""}
            {props.index === props.endPage ? <Pagination.Item onClick={()=>props.handlePage(props.index - 4)}>{props.index - 4}</Pagination.Item> : ""}
            {props.index === props.endPage ? <Pagination.Item onClick={()=>props.handlePage(props.index - 3)}>{props.index - 3}</Pagination.Item> : ""}
            {props.index < 3 ? "" : <Pagination.Item onClick={()=>props.handlePage(props.index - 2)}>{props.index - 2}</Pagination.Item>}
            {props.index === 1 ? "" : <Pagination.Item onClick={()=>props.handlePage(props.index - 1)}>{props.index - 1}</Pagination.Item>}

            <Pagination.Item active>{props.index}</Pagination.Item>


            {props.index === props.endPage ? "" : <Pagination.Item onClick={()=>props.handlePage(props.index + 1)}>{props.index + 1}</Pagination.Item>}
            {props.index > props.endPage-2 ? "" : <Pagination.Item onClick={()=>props.handlePage(props.index + 2)}>{props.index + 2}</Pagination.Item>}
            {props.index === 1 ? <Pagination.Item onClick={()=>props.handlePage(props.index + 3)}>{props.index + 3}</Pagination.Item> : ""}
            {props.index === 1 ? <Pagination.Item onClick={()=>props.handlePage(props.index + 4)}>{props.index + 4}</Pagination.Item> : ""}
            {props.index === 2 ? <Pagination.Item onClick={()=>props.handlePage(props.index + 3)}>{props.index + 3}</Pagination.Item> : ""}
            {props.index === props.endPage ? "" : <Pagination.Next onClick={()=>props.handlePage(props.index + 1)} />}

            <Pagination.Last onClick={() =>props.handlePage(props.endPage)} />
        </Pagination>
    )

}

export default Paginations