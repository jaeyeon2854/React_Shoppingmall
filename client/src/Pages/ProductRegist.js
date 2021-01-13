import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Button, Form, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import catchErrors from '../utils/catchErrors';
import { Redirect } from 'react-router-dom';

let color = {}
let preColors = []
let colorHtml = []
let list = []

function ProductsRegist() {
    const INIT_PRODUCT = {
        pro_name: '',
        price: 0,
        stock: 0,
        main_category: '',
        sub_category: [],
        sizes: [],
        colors: [],
        description: '',
        main_image: [],
        detail_image: []
    }
    const [categorys, setCategorys] = useState({ 0: [], 1: [[]] })
    const [product, setProduct] = useState(INIT_PRODUCT)
    const [categoryNum, setCategoryNum] = useState(0)
    const [tag, setTag] = useState(0)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [checked, setChecked] = useState({ "Free": false, "XL": false, "L": false, "M": false, "S": false, "XS": false })

    useEffect(async () => {
        try {
            const response = await axios.get('/api/categorys')
            const data = response.data[0]
            setCategorys([Object.keys(data), Object.values(data)])
        } catch (error) {
            catchErrors(error, setError)
        }
    }, [])

    function addCategory() {
        console.log(product)
        list.push(
            <div>
                <span i={tag}>{product["main_category"]} / {product["sub_category"][tag]}</span>
                <input type="image" src="https://img.icons8.com/fluent-systems-regular/24/000000/close-window.png" className="float-right align-middle" onClick={deleteCategory} />
            </div>)
        setTag(tag + 1)
    }

    function deleteCategory(e) {
        const categ = e.target.parentNode
        categ.remove()
        product["sub_category"].splice(categ.firstElementChild.getAttribute("i"), 1)
    }

    function handleCheckBox(e) {
        setChecked({ ...checked, [e.target.value]: !checked[`${e.target.value}`] })
    }

    function addColor() {
        preColors.push(color["colors"])
        colorHtml.push(
            <p>{color["colors"]}</p>
        )
        setProduct({ ...product, "colors": preColors })
    }

    function colorChange(e) {
        color[e.target.name] = e.target.value
    }

    function handleChange(event) {
        const { name, value, files } = event.target
        console.log("event.target.name=", name, "event.target.value=", value)
        if (name === "sub_category") {
            product[name].push(value)
        } else if (files) {
            setProduct({ ...product, [name]: files })

        } else {
            setProduct({ ...product, [name]: value })
        }
        if (event.target.name === "main_category") {
            setCategoryNum(event.target.selectedIndex - 1)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const sizes = []
        for (let [key, value] of Object.entries(checked)) {
            if (value === true) {
                sizes.push(key)
            }
        }
        product["sizes"] = sizes
        const formData = new FormData();
        for (let key in product) {
            if (key === "main_imgUrl" ||key === "detail_imgUrl") {
                console.log(product[key][0])
                formData.append(key, product[key][0])
            } else {
                formData.append(key, product[key])
            }
        }
        try {
            const response = axios.post('/api/product/regist', formData)
            // setSuccess(true)
            console.log(response)
        } catch (error) {
            catchErrors(error, setError)
        }
    }

    if (success) {
        return <Redirect to='/' />
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={8} className="border p-1" style={{ background: '#F7F3F3' }}>
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
                                <Col md={4}>
                                    <Form.Control as="select" name="main_category" onChange={handleChange}>
                                        <option value="" >상위분류</option>
                                        {categorys[0].map((main) => (
                                            <option value={main}>{main}</option>
                                        ))}
                                    </Form.Control>
                                </Col>
                                <Col md={6}>
                                    <Form.Control as="select" name="sub_category" onChange={handleChange}>
                                        <option value="" >하위분류</option>
                                        {categorys[1][categoryNum].map((sub) => (
                                            <option value={sub}>{sub}</option>
                                        ))}
                                    </Form.Control>
                                </Col>
                                <Col >
                                    <Button className="float-right" style={{ background: '#91877F', borderColor: '#91877F' }} onClick={addCategory}>추가</Button>
                                </Col>
                            </Row>
                            {list.map((element) => element)}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>사이즈</Form.Label>
                            <Form.Check type="checkbox" name="sizes" label="Free" value="Free" onChange={handleCheckBox} />
                            <Form.Check type="checkbox" name="sizes" label="XL" value="XL" onChange={handleCheckBox} />
                            <Form.Check type="checkbox" name="sizes" label="L" value="L" onChange={handleCheckBox} />
                            <Form.Check type="checkbox" name="sizes" label="M" value="M" onChange={handleCheckBox} />
                            <Form.Check type="checkbox" name="sizes" label="S" value="S" onChange={handleCheckBox} />
                            <Form.Check type="checkbox" name="sizes" label="XS" value="XS" onChange={handleCheckBox} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>색상</Form.Label>
                            <Row>
                                <Col md={10}>
                                    <Form.Control as="textarea" rows={1} name="colors" placeholder="색상" onChange={colorChange} />

                                </Col>
                                <Col>

                                    <Button className="float-right" style={{ background: '#91877F', borderColor: '#91877F' }} onClick={addColor}>추가</Button>
                                </Col>
                            </Row>
                            {colorHtml.map((element) => element)}
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
    )
}

export default ProductsRegist