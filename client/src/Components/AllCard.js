import React, { useState, useEffect, useRef } from 'react';
import { Card, Button } from 'react-bootstrap';

function AllCard({ id, name, price, main_img }) {
    function handleDelete(e) {
        const card = e.target.parentNode.parentNode
        alert('해당 상품을 성공적으로 삭제하였습니다.')
        card.remove()
    }

    return (
        <Card id={id} className="m-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={main_img && `/images/${main_img}`} style={{ objectFit: "contain", height: "22rem" }} />
            <Card.Body>
                <Card.Title style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</Card.Title>
                <Card.Text>{price} 원</Card.Text>
                <Button className="float-right" onClick={handleDelete}>삭제</Button>
            </Card.Body>
        </Card>
    )
}

export default AllCard