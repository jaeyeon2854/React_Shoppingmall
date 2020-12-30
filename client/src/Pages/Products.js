import React, { useState, useEffect, useRef } from 'react';
import MainNav from '../Components/MainNav';
import SubNav from '../Components/SubNav';
import { Row, Col, Form, Card } from 'react-bootstrap';

function Products() {

    return (
        <div>
            <MainNav />
            <SubNav />
            <Row className="justify-content-center mt-5">
                <Col md={4}>
                    <img src="https://img.sonyunara.com/files/goods/65976/1601953605_0.jpg" style={{ objectFit: "contain", width: "100%" }} />
                </Col>
                <Col md={4} className="align-middle">
                    <Form>
                        <Form.Group>
                            <Form.Label>옵션</Form.Label>
                            <Form.Control as="select" defaultValue="옵션 선택">
                                <option>옵션 선택</option>
                                <option>브릭레드(스트랩포함)</option>
                                <option>베이지(스트랩포함)</option>
                                <option>블랙(스트랩포함)</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5">
                <Col md={8}>
                    <h3 style={{ borderBottom: "1px solid #91877F", paddingBottom: "5px", marginBottom: "1em" }}>설명</h3>
                    <div></div>
                </Col>
            </Row>
            <div className="m-5">
                <h6 style={{ borderBottom: "1px solid", paddingBottom: "5px", marginBottom: "1em" }}>회원님이 선호할만한 상품 추천</h6>
                <Row className="justify-content-space" style={{ objectFit: "contain", width: "100%" }}>
                    <Col as={Card} style={{ width: "16rem" }}>
                        <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/67504/1607328307_0.jpg" />
                        <Card.Body>
                            <Card.Title>클로타탄원피스</Card.Title>
                            <Card.Text>구매자 수: 30</Card.Text>
                        </Card.Body>
                    </Col>
                    <Col as={Card} style={{ width: "16rem" }}>
                        <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/67504/1607328307_0.jpg" />
                        <Card.Body>
                            <Card.Title>클로타탄원피스</Card.Title>
                            <Card.Text>구매자 수: 30</Card.Text>
                        </Card.Body>
                    </Col>
                    <Col as={Card} style={{ width: "16rem" }}>
                        <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/67504/1607328307_0.jpg" />
                        <Card.Body>
                            <Card.Title>클로타탄원피스</Card.Title>
                            <Card.Text>구매자 수: 30</Card.Text>
                        </Card.Body>
                    </Col>
                    <Col as={Card} style={{ width: "16rem" }}>
                        <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/67504/1607328307_0.jpg" />
                        <Card.Body>
                            <Card.Title>클로타탄원피스</Card.Title>
                            <Card.Text>구매자 수: 30</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Products