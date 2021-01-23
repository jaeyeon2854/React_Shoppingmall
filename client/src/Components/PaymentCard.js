import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';


function PaymentCard(props) {
    return (
        <>
            {props.cart.map((e) => (
                <Card>
                    <Row className="mx-1">
                        <Col className="text-center">
                            <Card.Img className="img-fluid" variant="top" src={e.productId.main_imgUrl && `/images/${e.productId.main_imgUrl}`} style={{ width: '20rem' }} />
                        </Col>
                        <Col md={6} className="p-2">
                            <Card.Body>
                                <input type="image" name={String(e._id)} alt="삭제버튼" src="https://img.icons8.com/fluent-systems-regular/24/000000/close-window.png" className="float-right" onClick={props.deleteOrder} />
                                <Card.Title className="font-weight-bold mt-3">{e.productId.pro_name}</Card.Title>
                                <Card.Text>가격: {e.productId.price}원</Card.Text>
                                <Card.Text>옵션: {e.size}/{e.color}</Card.Text>
                                <Card.Text>수량: {e.count}</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            ))
            }
        </>
    )
}

export default PaymentCard
