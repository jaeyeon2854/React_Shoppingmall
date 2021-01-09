import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Button, Form, Container } from 'react-bootstrap';
import axios from 'axios'
import catchErrors from '../utils/catchErrors';
import { Redirect } from 'react-router-dom';

let color = {}
let colors = []
let addedcolors = []
let list = []

function ProductsRegist() {
    const INIT_PRODUCT = {
        pro_name: '',
        price: 0,
        stock: 0,
        main_category: '',
        sub_category: [],
        size: [],
        color: [],
        description: '',
        main_image: [],
        detail_image: []
    }
    const categorys = {
        "DRESS": ["LONG DRESS", "SHORT DRESS", "KNIT DRESS", "SHIRT DRESS", "PATTERN DRESS", "BUSTIER DRESS", "TWO-PIECE DRESS"],
        "OUTER": ["PADDED JACKET", "JACKET", "JUMPER", "COAT", "FLEECE", "CARDIGAN / VEST"],
        "TOP": ["KNIT", "HOODY", "BLOUSE", "SHIRT", "SWEATSHIRT", "LONG SLEEVE SHIRT", "SHORT SLEEVE / SLEEVELESS SHIRT"],
        "PANTS": ["JEANS", "SKINNY JEANS", "BANDING PANTS", "WIDE-FIT PANTS", "BOOT-CUT PANTS", "STRAIGHT-FIT PANTS", "SHORTS", "TROUSERS", "LEGGINGS", "JUMPSUIT / OVERALLS"],
        "SKIRT": ["LONG SKIRT", "MIDI SKIRT", "MINI SKIRT"],
        "TRAINING": [],
        "SHOES": ["SNEAKERS / SLIP-ON", "FLAT / LOAFER", "HEEL / PUMP", "BOOTS", "SANDAL / SLIPPER"]
    }
    const [product, setProduct] = useState(INIT_PRODUCT)
    const [categoryNum, setCategoryNum] = useState(0)
    const [tag, setTag] = useState(0)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [checked, setChecked] = useState({ "Free": false, "XL": false, "L": false, "M": false, "S": false, "XS": false })

    const mainCategorys = Object.keys(categorys)
    const subCategorys = Object.values(categorys)

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
        product["sub_category"].splice(e.target.parentNode.firstElementChild.getAttribute("i"), 1)
        console.log(product)
    }
    function handleCheckBox(e) {
        setChecked({ ...checked, [e.target.value]: !checked[`${e.target.value}`] })
    }

    function addColor() {
        addedcolors.push(
            <div>{color["color"]}</div>
        )
        if (product.color) {
            setProduct({ ...product, [color]: colors })
        } else {
            setProduct({ ...product, "color": colors })

        }

    }

    function handleChange(event) {
        const { name, value } = event.target
        if (event.target.name === "sub_category") {
            product["sub_category"].push(event.target.value)
        } else if (event.target.name === "color") {
            color[event.target.name] = event.target.value
            // console.log(color)
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
        product["size"].push(sizes)
        const formData = new FormData();
        for (let key in product) {
            formData.append(key, product[key])
        }
        console.log("formData=", formData)
        console.log(product)
        try {
            const response = axios.post('/api/product/regist', { data: formData })
            setSuccess(true)
            console.log(response)
        } catch (error) {
            catchErrors(error, setError)
        }
    }

    if (success) {
        return <Redirect to='/' />
    }
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
                                        <Form.Control as="select" name="main_category" onChange={handleChange}>
                                            <option value="" >상위분류</option>
                                            {mainCategorys.map((main) => (
                                                <option value={main}>{main}</option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Control as="select" name="sub_category" onChange={handleChange}>
                                            <option value="" >하위분류</option>
                                            {subCategorys[categoryNum].map((sub) => (
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
                                {/* {console.log(checked)} */}
                                <Form.Check type="checkbox" name="size" label="Free" value="Free" onChange={handleCheckBox} />
                                <Form.Check type="checkbox" name="size" label="XL" value="XL" onChange={handleCheckBox} />
                                <Form.Check type="checkbox" name="size" label="L" value="L" onChange={handleCheckBox} />
                                <Form.Check type="checkbox" name="size" label="M" value="M" onChange={handleCheckBox} />
                                <Form.Check type="checkbox" name="size" label="S" value="S" onChange={handleCheckBox} />
                                <Form.Check type="checkbox" name="size" label="XS" value="XS" onChange={handleCheckBox} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>색상</Form.Label>
                                <Row>
                                    <Col md={10}>
                                        <Form.Control as="textarea" rows={1} name="color" placeholder="색상" onChange={handleChange} />

                                    </Col>
                                    <Col>

                                        <Button className="float-right" style={{ background: '#91877F', borderColor: '#91877F' }} onClick={addColor}>추가</Button>
                                    </Col>
                                </Row>
                                {addedcolors.map((element) => element)}
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