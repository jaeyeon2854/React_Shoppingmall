import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function CartCard(props) {


    return (
        <>
            {props.cart.map((e) => (
                    <Card>
                        <Row className="mx-1">
                            <Col xs={2} sm={2} className="text-center my-auto">
                                <input className="" type="checkbox" id="exampleCheck1" />
                            </Col>
                            <Col className="text-center">
                                <Card.Img className="img-fluid" variant="top" src={e.main_image && `/images/${e.main_image}`} style={{ width: '20rem' }} />
                            </Col>
                            <Col md={6} className="p-2">
                                <Card.Body>
                                    <input type="image" name={String(e._id)} alt="삭제버튼" src="https://img.icons8.com/fluent-systems-regular/24/000000/close-window.png" className="float-right" onClick={props.deleteCart} />
                                    <Card.Title className="font-weight-bold mt-3">{e.pro_name}</Card.Title>
                                    <Card.Text>가격: {e.price}</Card.Text>
                                    <Card.Text>옵션: {e.sizes}/{e.colors}</Card.Text>
                                    <Card.Text>수량</Card.Text>
                                    <div>
                                        <input type="image" alt="마이너스" src="https://img.icons8.com/ios-glyphs/20/000000/minus-math.png" className="align-middle" onClick={props.minusNum} />
                                        <input type="text" style={{ width: '30px' }} className="text-center align-middle mx-1" placeholder={e.count} value={e.count} readOnly></input>
                                        <input type="image" alt="플러스" src="https://img.icons8.com/ios-glyphs/20/000000/plus-math.png" className="align-middle" onClick={props.plusNum} />
                                    </div>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                ))
            }
        </>

    )
}

export default CartCard
