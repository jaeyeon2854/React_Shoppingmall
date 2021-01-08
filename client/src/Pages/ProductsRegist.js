import React, { useState, useEffect, useRef } from 'react';
import Nav1 from '../Components/MainNav';
import Nav2 from '../Components/SubNav';
import { Row, Col, Button, Form, Container } from 'react-bootstrap';
import axios from 'axios'

let list = []

function ProductsRegist() {

    const INIT_PRODUCT = {
        pro_name: '',
        price: 0,
        stock: 0,
        main_category: '',
        sub_category: [],
        description: '',
        main_image: [],
        detail_image: []
    }
    const [product, setProduct] = useState(INIT_PRODUCT)
    const [categoryNum, setCategoryNum] = useState(0)
    const [tag, setTag] = useState(0)

    const categorys = {
        "DRESS": ["LONG DRESS", "SHORT DRESS", "KNIT DRESS", "SHIRT DRESS", "PATTERN DRESS", "BUSTIER DRESS", "TWO-PIECE DRESS"],
        "OUTER": ["PADDED JACKET", "JACKET", "JUMPER", "COAT", "FLEECE", "CARDIGAN / VEST"],
        "TOP": ["KNIT", "HOODY", "BLOUSE", "SHIRT", "SWEATSHIRT", "LONG SLEEVE SHIRT", "SHORT SLEEVE / SLEEVELESS SHIRT"],
        "PANTS": ["JEANS", "SKINNY JEANS", "BANDING PANTS", "WIDE-FIT PANTS", "BOOT-CUT PANTS", "STRAIGHT-FIT PANTS", "SHORTS", "TROUSERS", "LEGGINGS", "JUMPSUIT / OVERALLS"],
        "SKIRT": ["LONG SKIRT", "MIDI SKIRT", "MINI SKIRT"],
        "TRAINING": [],
        "SHOES": ["SNEAKERS / SLIP-ON", "FLAT / LOAFER", "HEEL / PUMP", "BOOTS", "SANDAL / SLIPPER"]
    }
    const mainCategorys = Object.keys(categorys)
    const subCategorys = Object.values(categorys)
    const 

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
        product["sub_category"].splice(e.target.parentNode.firstElementChild.getAttribute("i"),1)
        console.log(product)
    }

    function handleChange(event) {
        const { name, value } = event.target
        if (event.target.name === "sub_category") {
            product["sub_category"].push(event.target.value)
        } else {
            setProduct({ ...product, [name]: value })
        }

        if (event.target.name === "main_category") {
            setCategoryNum(event.target.selectedIndex)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try{
            setError('')
            await axios.post('/api/products/regist', {
                product
            }).then(function (res) {
                console.log("client의 res=", res)
            })
            alert("상품등록이 완료되었습니다.")
            setSuccess(true)

        }catch(error) {
            catchErrors(error, setError)

        }
        
    }
    if (success) {
        return <Redirect to='/' />
    }
    return (
        <div>
            <Nav1 />
            <Nav2 />
            <Container className="vh-100">
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
                                            {mainCategorys.map((main) => (
                                                <option value={main}>{main}</option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Control as="select" name="sub_category" placeholder="하위분류" onChange={handleChange}>
                                            {subCategorys[categoryNum].map((sub) => (
                                                <option value={sub}>{sub}</option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button style={{ background: '#91877F', borderColor: '#91877F' }} onClick={addCategory}>추가</Button>
                                    </Col>
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