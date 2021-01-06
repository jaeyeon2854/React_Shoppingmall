import React, { useState, useEffect, useRef } from 'react';
import Nav1 from '../Components/MainNav';
import Nav2 from '../Components/SubNav';
import { Row, Col, Button, Form, Container } from 'react-bootstrap';
import axios from 'axios'


function ProductsRegist() {

    const [product, setProduct] = useState()

    function handleChange(event) {
        const { name, value } = event.target
        setProduct({ ...product, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('/api/products/regist', {
            product
        }).then(function(res) {
            console.log("client의 res=", res)
        })
    }

    return (
        <div>
            {console.log(product)}
            <Nav1 />
            <Nav2 />
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6} className="border m-5 p-3" style={{ background: '#F7F3F3' }}>
                        <h2 className="text-center mt-5 font-weight-bold">상품등록</h2>
                        <Form className="p-5" onSubmit={handleSubmit}>
                            <Form.Group controlId="productNameform">
                                <Form.Label>상품명</Form.Label>
                                <Form.Control type="text" name="pro_name" placeholder="상품명" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group controlId="productAmountform">
                                <Form.Label>재고</Form.Label>
                                <Form.Control type="text" name="stock" placeholder="숫자만 입력해주세요" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group controlId="productPriceform">
                                <Form.Label>가격</Form.Label>
                                <Form.Control type="text" name="price" placeholder="숫자만 입력해주세요" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>분류</Form.Label>
                                <Row>
                                    <Col md={6}>
                                        <Form.Control as="select" name="main_category" placeholder="상위분류" onChange={handleChange}>
                                            <option>Pants</option>
                                            <option>Skirt</option>
                                            <option>Outer</option>
                                        </Form.Control>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Control as="select" name="sub_category" placeholder="하위분류" onChange={handleChange}>
                                            <option>JEANS</option>
                                            <option>SKINNY JEANS</option>
                                            <option>BANDING PANTS</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="productDescriptionform">
                                <Form.Label>상품설명</Form.Label>
                                <Form.Control as="textarea" name="description" rows={3} placeholder="상품을 설명해주세요" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>대표이미지</Form.Label>
                                <Form.File id="productImageform" name="main_image" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>상세이미지</Form.Label>
                                <Form.File id="productImageform" name="detail_image" onChange={handleChange} />
                            </Form.Group>
                            <Button className="float-right" variant="primary" type="submit" style={{ background: '#91877F', borderColor: '#91877F' }}>등록</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductsRegist