import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Button, Form, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import catchErrors from '../utils/catchErrors';

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
    const [categories, setCategories] = useState({ 0: [], 1: [[]] })
    const [product, setProduct] = useState(INIT_PRODUCT)
    const [categoryNum, setCategoryNum] = useState(0)
    const [tag, setTag] = useState(0)
    const [subCate, setSubCate] = useState('')
    const [color, setColor] = useState({})
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [checked, setChecked] = useState({ "Free": false, "XL": false, "L": false, "M": false, "S": false, "XS": false })

    useEffect(async () => {
        try {
            const response = await axios.get('/api/categories/main')
            const data = response.data[0]
            setCategories([Object.keys(data), Object.values(data)])
        } catch (error) {
            catchErrors(error, setError)
        }
    }, [])

    function addCategory() {
        list.push(
            <div>
                <span name={subCate} >{product["main_category"]} / {subCate} </span>
                <input name={subCate} type="image" src="https://img.icons8.com/fluent-systems-regular/24/000000/close-window.png" className="float-right align-middle" onClick={deleteCategory} />
            </div>)
        setTag(tag + 1)
        console.log(list)
    }

    function deleteCategory(e) {
        e.target.parentNode.remove()
        const index = product["sub_category"].findIndex((item)=>{return item === e.target.name})
        product["sub_category"].splice(index, 1)
        setSubCate('')
        console.log(product["sub_category"].length)
    }

    function handleCategory(e) {
        const { name, value } = e.target
        if (e.target.name === "main_category") {
            setCategoryNum(e.target.selectedIndex - 1)
        }
        if (name === "sub_category") {
            product[name].push(value)
            setSubCate(value)
        } else {
            setProduct({ ...product, [name]: value })
        }
        console.log(value)
    }

    function handleCheckBox(e) {
        setChecked({ ...checked, [e.target.value]: !checked[`${e.target.value}`] })
    }

    function addColor() {
        preColors.push(color["colors"])
        colorHtml.push(
            <div>
                <span>{color["colors"]}</span>
                <input name={subCate} type="image" src="https://img.icons8.com/fluent-systems-regular/24/000000/close-window.png" className="float-right align-middle" onClick={deleteColor} />
            </div>
        )
        setColor({})
        setProduct({ ...product, "colors": preColors })
    }

    function deleteColor(e) {
        e.target.parentNode.remove()
        product["colors"].splice(e.name, 1)
        setColor({})
        console.log(product)
    }

    function handleColor(e) {
        color[e.target.name] = e.target.value
    }

    function handleChange(event) {
        const { name, value, files } = event.target
        console.log("event.target.name=", name, "event.target.value=", value)
        if (files) {
            setProduct({ ...product, [name]: files })
        } else {
            setProduct({ ...product, [name]: value })
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
            if (key === "main_image" ||key === "detail_image") {
                console.log(product[key][0])
                formData.append(key, product[key][0])
            } else {
                formData.append(key, product[key])
            }
        }
        try {
            const response = await axios.post('/api/product/regist', formData)
            console.log(response)
            setSuccess(true)
        } catch (error) {
            catchErrors(error, setError)
        }
    }

    if (success) {
        return <Redirect to='/admin' />
    }

    return (
        <Container>
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
                                    <Form.Control as="select" name="main_category" onChange={handleCategory} disabled={product["sub_category"].length > 0}>
                                        <option value="" >상위분류</option>
                                        {categories[0].map((main) => (
                                            <option value={main}>{main}</option>
                                        ))}
                                    </Form.Control>
                                </Col>
                                <Col md={6}>
                                    <Form.Control as="select" name="sub_category" onChange={handleCategory} disabled={product["main_category"] === "TRAINING"}>
                                        <option value="" >하위분류</option>
                                        {categories[1][categoryNum].map((sub) => (
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
                                    <Form.Control as="textarea" rows={1} name="colors" value={color["colors"]} placeholder="색상" onChange={handleColor} />
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