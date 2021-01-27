import React from 'react';
import { Card } from 'react-bootstrap';

function ListCard({ id, name, price, main_img }) {

    return (
        <Card id={id} className="m-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={main_img && `/images/${main_img}`} style={{ objectFit: "contain", height: "22rem" }} />
            <Card.Body>
                <Card.Title style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</Card.Title>
                <Card.Text>{price} 원</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ListCard