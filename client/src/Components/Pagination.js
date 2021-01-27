import { Pagination } from "react-bootstrap";
import React from 'react';

function Paginations({ index, totalPages, handlePage }) {

    return (
        <Pagination className="d-flex justify-content-center">
            <style type="text/css">
                {`
                @font-face {
                    font-family: 'Jal_Onuel';
                    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Jal_Onuel.woff') format('woff');
                    font-weight: normal;
                    font-style: normal;
                }
                body{font-family:'Jal_Onuel'}

                .page-link, .page-link:hover {
                    color: #91877F;
                    margin: 0;
                    border: 0;
                }

                .page-link:focus {
                    box-shadow: 0 0 0 0;
                }

                .page-item.active .page-link {
                    background-color: #CDC5C2;
                    border-color: #CDC5C2;
                    color: #fff;
                }
                `}
            </style>
            <Pagination.First onClick={() => handlePage(1)} />
            {index === 1 ? <Pagination.Prev onClick={()=>handlePage(index)} /> : <Pagination.Prev onClick={()=>handlePage(index - 1)} />}
            {index === totalPages && index > 4 ? <Pagination.Item onClick={()=>handlePage(index - 4)}>{index - 4}</Pagination.Item> : ""}
            {index > 3 && index >= totalPages-1 ? <Pagination.Item onClick={()=>handlePage(index - 3)}>{index - 3}</Pagination.Item> : ""}
            {index < 3 ? "" : <Pagination.Item onClick={()=>handlePage(index - 2)}>{index - 2}</Pagination.Item>}
            {index === 1 ? "" : <Pagination.Item onClick={()=>handlePage(index - 1)}>{index - 1}</Pagination.Item>}

            <Pagination.Item active>{index}</Pagination.Item>

            {index === totalPages ? "" : <Pagination.Item onClick={()=>handlePage(index + 1)}>{index + 1}</Pagination.Item>}
            {index > totalPages-2 ? "" : <Pagination.Item onClick={()=>handlePage(index + 2)}>{index + 2}</Pagination.Item>}
            {index <= totalPages-3 && index < 3 ? <Pagination.Item onClick={()=>handlePage(index + 3)}>{index + 3}</Pagination.Item> : ""}
            {index < totalPages-4 && index < 2 ? <Pagination.Item onClick={()=>handlePage(index + 4)}>{index + 4}</Pagination.Item> : ""}
            {index === totalPages ? <Pagination.Next onClick={()=>handlePage(index)} /> : <Pagination.Next onClick={()=>handlePage(index + 1)} />}

            <Pagination.Last onClick={() =>handlePage(totalPages)} />
        </Pagination>
    )
}

export default Paginations