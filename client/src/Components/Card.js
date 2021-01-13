import React, { useState, useEffect, useRef } from 'react';

function card(props) {
    const [card, setCard] = useState([...props])

    return (
        <Card className="mt-5">
            <Card.Img varient="top" src={} style={{ objectFit: "contain", height: "22rem" }}></Card.Img>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
                <Card.Text></Card.Text>
            </Card.Body>
        </Card>
    )
}

export default card