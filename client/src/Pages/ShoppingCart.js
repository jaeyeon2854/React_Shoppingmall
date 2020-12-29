import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import MainNav from '../Components/MainNav';
import SubNav from '../Components/SubNav';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function ShoppingCart() {

    return (
        <div>
            <MainNav />
            <SubNav />
            <Container className="justify-content-center">
                <h3 className="my-5 font-weight-bold text-center" style={{ color: '#F2A400' }}>장바구니</h3>
                <div>
                    <h4 className="bg-light font-weight-bold py-3 border-top border-bottom text-center">주문상품정보</h4>
                    <Card >
                        <Row>
                            <Col>
                                <input className="mx-5" type="checkbox" id="exampleCheck1"></input>
                                <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" style={{ width: '20rem' }} />
                            </Col>
                            <Col md={6}>
                                <Card.Body>
                                    <img src="https://img.icons8.com/fluent-systems-regular/24/000000/close-window.png" className="float-right" />
                                    <Card.Title className="font-weight-bold mt-3">제품명</Card.Title>
                                    <Card.Text>가격</Card.Text>
                                    <Card.Text>옵션</Card.Text>
                                    <Card.Text>수량</Card.Text>
                                    <div>
                                        <Button variant="outline-dark" size="sm">-</Button>
                                        <input type="text" style={{ width: '30px' }} className="align-middle mx-1" readOnly></input>
                                        <Button variant="outline-dark" size="sm">+</Button>
                                    </div>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                    <Card>
                        <Row>
                            <Col>
                                <input className="mx-5" type="checkbox" id="exampleCheck1"></input>
                                <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" style={{ width: '20rem' }} />
                            </Col>
                            <Col>
                                <Card.Body>
                                    <img src="https://img.icons8.com/fluent-systems-regular/24/000000/close-window.png" className="float-right" />
                                    <Card.Title className="font-weight-bold mt-3">제품명</Card.Title>
                                    <Card.Text>가격</Card.Text>
                                    <Card.Text>옵션</Card.Text>
                                    <Card.Text>수량</Card.Text>
                                    <div>
                                        <Button variant="outline-dark" size="sm">-</Button>
                                        <input type="text" style={{ width: '30px' }} className="align-middle mx-1" readOnly></input>
                                        <Button variant="outline-dark" size="sm">+</Button>
                                    </div>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div className="bg-light p-5 m-5">
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
                    <Button className="px-5">결제하기</Button>
                </div>
            </Container>

        </div>
    )
}

export default ShoppingCart