import React, { useState, useEffect, useRef } from 'react';
import MainNav from '../Components/MainNav';
import SubNav from '../Components/SubNav';
import { Row, Col, Button, Form, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import catchErrors from "../utils/catchErrors";


function ProductsRegist() {
    const [product, setProduct] = useState()
    const [error, setError] = useState('')

    function handleChange(e) {
        const { name, value, files } = e.target
        if (files) {
            setProduct({ ...product, [name]: files })
        } else {
            setProduct({ ...product, [name]: value })
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        for (const key in product) {
            console.log("product[key]=", product[key])
            if (key == "main_image" || key == "detail_image") {
                for (const file of product[key]) {
                    formData.append(key, file)
                }
            } else {
                formData.append(key, product[key])
            }
        }
        // formData 값 확인용
        // for (const key of formData.keys()) {

        //     console.log("key=",key);

        //   }

        //   for (const value of formData.values()) {

        //     console.log(value);

        //   }
        try {
            const response = await axios.post('/api/product/regist', formData)
        } catch (error) {
            catchErrors(error, setError)
        }
    }

    return (
        <div>
            {console.log(product)}
            <MainNav />
            <SubNav />
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6} className="border m-5 p-3" style={{ background: '#F7F3F3' }}>
                        {error && <Alert variant="danger" className="text-center">{error}</Alert>}
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