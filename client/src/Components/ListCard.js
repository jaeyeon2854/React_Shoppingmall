import React from 'react';
import {Card} from 'react-bootstrap'

function ListCard(props) {

    return (
        <>
        {props.productlist.map((e)=>(
          <Card className="mt-5" style={{ width: "18rem", margin: "auto" }}>
            <Card.Img variant="top" src={e.main_imgUrl && `/images/${e.main_imgUrl}`} style={{ objectFit: "contain", height: "22rem" }} />
            <Card.Body>
                <Card.Title>{e.pro_name}</Card.Title>
                <Card.Text>{e.price}</Card.Text>
            </Card.Body>
        </Card>    
        ))}      
        </>
    )
}

export default ListCard