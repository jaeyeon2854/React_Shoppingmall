import { Pagination } from "react-bootstrap";
import React from 'react';

function Paginations(props) {

    return (
        <Pagination>
            <Pagination.First onClick={() => props.handlePage(1)} />
            {props.index === 1 ? <Pagination.Prev onClick={()=>props.handlePage(props.index)} /> : <Pagination.Prev onClick={()=>props.handlePage(props.index - 1)} />}
            {props.index === props.totalPosts-1 ? <Pagination.Item onClick={()=>props.handlePage(props.index - 3)}>{props.index - 3}</Pagination.Item> : ""}
            {props.index === props.totalPosts ? <Pagination.Item onClick={()=>props.handlePage(props.index - 4)}>{props.index - 4}</Pagination.Item> : ""}
            {props.index === props.totalPosts ? <Pagination.Item onClick={()=>props.handlePage(props.index - 3)}>{props.index - 3}</Pagination.Item> : ""}
            {props.index < 3 ? "" : <Pagination.Item onClick={()=>props.handlePage(props.index - 2)}>{props.index - 2}</Pagination.Item>}
            {props.index === 1 ? "" : <Pagination.Item onClick={()=>props.handlePage(props.index - 1)}>{props.index - 1}</Pagination.Item>}

            <Pagination.Item active>{props.index}</Pagination.Item>

            {props.index === props.totalPosts ? "" : <Pagination.Item onClick={()=>props.handlePage(props.index + 1)}>{props.index + 1}</Pagination.Item>}
            {props.index > props.totalPosts-2 ? "" : <Pagination.Item onClick={()=>props.handlePage(props.index + 2)}>{props.index + 2}</Pagination.Item>}
            {props.index === 1 ? <Pagination.Item onClick={()=>props.handlePage(props.index + 3)}>{props.index + 3}</Pagination.Item> : ""}
            {props.index === 1 ? <Pagination.Item onClick={()=>props.handlePage(props.index + 4)}>{props.index + 4}</Pagination.Item> : ""}
            {props.index === 2 ? <Pagination.Item onClick={()=>props.handlePage(props.index + 3)}>{props.index + 3}</Pagination.Item> : ""}
            {props.index === props.totalPosts ? "" : <Pagination.Next onClick={()=>props.handlePage(props.index + 1)} />}
            <Pagination.Last onClick={() =>props.handlePage(props.totalPosts)} />
        </Pagination>
    )
}

export default Paginations