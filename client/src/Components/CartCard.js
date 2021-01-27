import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';

function CartCard(props) {
    return (
        <>
            {props.cart.map((e) => (
                <Card>
                    <Row className="mx-1">
                        <Col xs={2} sm={2} className="text-center my-auto">
                            <input className="" type="checkbox" name={String(e._id)} onChange={props.checkedCart} />
                        </Col>
                        <Col className="text-center">
                            <Card.Img className="img-fluid" variant="top" src={e.productId.main_imgUrl && `/images/${e.productId.main_imgUrl}`} style={{ width: '20rem' }} />
                        </Col>
                        <Col md={6} className="p-2">
                            <Card.Body>
                                <input type="image" name={String(e._id)} alt="삭제버튼" src="https://img.icons8.com/fluent-systems-regular/24/000000/close-window.png" className="float-right" onClick={props.deleteCart} />
                                <Card.Title className="font-weight-bold mt-3">{e.productId.pro_name}</Card.Title>
                                <Card.Text className="mb-0">가격: {e.productId.price}원</Card.Text>
                                <Card.Text className="mb-0">옵션: {e.size}/{e.color}</Card.Text>
                                <Card.Text >수량</Card.Text>
                                <div>
                                    <input type="image" name={String(e._id)} alt="마이너스" src="https://img.icons8.com/ios-glyphs/20/000000/minus-math.png" className="align-middle" onClick={props.minusNum} />
                                    <input type="number" style={{ width: '30px' }} className="text-center align-middle mx-1" placeholder={e.count} value={e.count} readOnly></input>
                                    <input type="image" name={String(e._id)} alt="플러스" src="https://img.icons8.com/ios-glyphs/20/000000/plus-math.png" className="align-middle" onClick={props.plusNum} />
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
