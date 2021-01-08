import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Button, Form, Container } from 'react-bootstrap';
import axios from 'axios'

let list = []

function ProductsRegist() {
    const [product, setProduct] = useState()

    function handleChange(event) {
        const { name, value } = event.target
        console.log("file=",event.target.files)
        console.log("name=",name,"value=",value)
        setProduct({ ...product, [name]: value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        for (let key of Object.keys(product)) {
            formData.append(key, product[key])
        }
        console.log("formData=",formData)
        axios.post('/api/product/regist',{data: formData}).then(function(res) {
            console.log("client의 res=", res)
        })
    }
    // if (success) {
    //     return <Redirect to='/' />
    // }
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={8} className="border p-1" style={{ background: '#F7F3F3' }}>
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
                                    <Col md={4}>
                                        <Form.Control as="select" name="main_category" placeholder="상위분류" onChange={handleChange}>
                                            {/* {mainCategorys.map((main) => (
                                                <option value={main}>{main}</option>
                                            ))} */}
                                        </Form.Control>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Control as="select" name="sub_category" placeholder="하위분류" onChange={handleChange}>
                                            {/* {subCategorys[categoryNum].map((sub) => (
                                                <option value={sub}>{sub}</option>
                                            ))} */}
                                        </Form.Control>
                                    </Col>
                                    {/* <Col md={2}>
                                        <Button style={{ background: '#91877F', borderColor: '#91877F' }} onClick={addCategory}>추가</Button>
                                    </Col> */}
                                </Row>
                                {list.map((element) => element)}
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
                            <Button className="float-right" type="submit" style={{ background: '#91877F', borderColor: '#91877F' }}>등록</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductsRegist