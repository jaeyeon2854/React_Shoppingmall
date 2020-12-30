import React, { useState, useEffect, useRef } from 'react';
import Nav1 from '../Components/MainNav';
import Nav2 from '../Components/SubNav';
import { Row, Col, Button, Form, Container } from 'react-bootstrap';


function ProductsRegist() {

    return (
        <div>
            <Nav1 />
            <Nav2 />
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6} className="border m-5 p-3">
                        <Form>
                            <Form.Group controlId="productNameform">
                                <Form.Label>상품명</Form.Label>
                                <Form.Control type="text" placeholder="상품명" />
                            </Form.Group>
                            <Form.Group controlId="productAmountform">
                                <Form.Label>수량</Form.Label>
                                <Form.Control type="text" placeholder="숫자만 입력해주세요" />
                            </Form.Group>
                            <Form.Group controlId="productPriceform">
                                <Form.Label>가격</Form.Label>
                                <Form.Control type="text" placeholder="숫자만 입력해주세요" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>분류</Form.Label>
                                <Row>
                                    <Col md={6}>
                                        <Form.Control as="select" placeholder="상위분류">
                                            <option>Pants</option>
                                            <option>Skirt</option>
                                            <option>Outer</option>
                                        </Form.Control>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Control as="select" placeholder="하위분류">
                                            <option>긴바지</option>
                                            <option>반바지</option>
                                            <option>청바지</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="productDescriptionform">
                                <Form.Label>상품설명</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="상품을 설명해주세요" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>대표이미지</Form.Label>
                                <Form.File id="productImageform" />
                            </Form.Group>
                            <Button className="float-right" variant="primary" type="submit">등록</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductsRegist