import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function ShoppingCart() {

    const [num, setNum] = useState(0)

    function plusNum() {
        setNum(num + 1)
    }
    function minusNum() {
        if (num === 0) {
            setNum(0)
        }
        else {
            setNum(num - 1)

        }
    }
    function deleteCart() {
        //장바구니 DB에서 해당 항목 삭제 
        console.log('카트에 담긴 항목을 삭제했습니다.')
    }

    return (
        <div>
            <Container className="justify-content-center">
                <h3 className="my-5 font-weight-bold text-center">장바구니</h3>
                <div>
                    <h4 className="font-weight-bold py-3 border-top border-bottom text-center" style={{ background: '#F7F3F3' }}>주문상품정보</h4>
                    <Card>
                        <Row className="mx-1">
                            <Col xs={2} sm={2} className="text-center my-auto">
                                <input className="" type="checkbox" id="exampleCheck1" />
                            </Col>
                            <Col className="text-center">
                                <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" style={{ width: '20rem' }} />
                            </Col>
                            <Col md={6} className="p-2">
                                <Card.Body>
                                    <input type="image" alt="삭제버튼" src="https://img.icons8.com/fluent-systems-regular/24/000000/close-window.png" className="float-right" onClick={deleteCart} />
                                    <Card.Title className="font-weight-bold mt-3">제품명</Card.Title>
                                    <Card.Text>가격</Card.Text>
                                    <Card.Text>옵션</Card.Text>
                                    <Card.Text>수량</Card.Text>
                                    <div>
                                        <input type="image" alt="마이너스" src="https://img.icons8.com/ios-glyphs/20/000000/minus-math.png" className="align-middle" onClick={minusNum} />
                                        <input type="text" style={{ width: '30px' }} className="text-center align-middle mx-1" placeholder="1" value={num} readOnly></input>
                                        <input type="image" alt="플러스" src="https://img.icons8.com/ios-glyphs/20/000000/plus-math.png" className="align-middle" onClick={plusNum} />
                                    </div>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div className="p-5 m-5" style={{ background: '#F7F3F3' }}>
                    <ul className="pl-0" style={{ listStyle: 'none' }}>
                        <li>
                            <span className="text-secondary">총 상품금액</span>
                            <span className="text-secondary float-right">12,000원</span>
                        </li>
                        <li>
                            <span className="text-secondary">배송비</span>
                            <span className="text-secondary float-right">2,500원</span>
                        </li>
                    </ul>
                    <div className="my-1 pt-2 border-top font-weight-bold">
                        결제금액<span className="float-right">14,500원</span>
                    </div>
                </div>
                <div className="text-center">
                    <Button className="px-5" style={{ background: "#91877F", borderColor: '#91877F' }} href="/payment" block>결제하기</Button>
                </div>
            </Container>

        </div>
    )
}

export default ShoppingCart