import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import catchErrors from '../utils/catchErrors';

function Product() {
    const [select, setSelect] = useState({ color: "", size: "" })
    const [cart, setCart] = useState()
    const [error, setError] = useState('')

    function handleClick(e) {
        const box = e.target.parentNode.parentNode
        box.style.display = "none"
    }

    function handleChange(e) {
        const { name, value } = e.target
        setSelect({ ...select, [name]: value })
    }

    function listDelete(e) {
        e.preventDefault()
        const parent = e.target.parentNode
        parent.remove()
    }

    function handleCreate() {
        console.log("실행", "cart=", cart)
        if (cart !== undefined) {
            if (cart.color !== "") {
                const list = document.getElementById('list')
                list.style.borderBottom = "1px solid"
                const shopping = document.createElement('div')
                shopping.className = "d-flex justify-content-between my-2"
                shopping.innerHTML = `${cart.color} / ${cart.size}
                <input type="number" min="0" max="10" value="1" style="width: 40px" />
                <p style="margin-bottom: 0px">14,000원</p>`
                const deleteA = document.createElement('a')
                deleteA.innerText = 'X'
                deleteA.addEventListener('click', listDelete)
                shopping.appendChild(deleteA)
                list.appendChild(shopping)
            }
        }
    }

    async function addCart() {
        // color, size, count, productObjectId(productlist에서 props), userId(로컬) 를 보내줌
        try {
            // setError('')
            const response = await axios.post('/api/addcart', {
                userId: "jiwon5393",
                productObjectId: "5ff7fd63d41cae4ecce51dd1",
                color: "red",
                size: "free",
                count: "1"
            })
            console.log(response)
        }catch(error){
            // catchErrors(error, setError)
        }

        
        alert("상품등록이 완료되었습니다.")
    }

    useEffect(() => {
        if (Object.keys(select).length == 2) {
            setCart({ ...select })
            setSelect({})
        }
    }, [select])

    useEffect(() => {
        handleCreate()
    }, [cart])

    return (
        <div>
            <style type="text/css">
                {`
                .btn {
                    background-color: #CDC5C2;
                    border-color: #CDC5C2;
                }

                .btn:hover, .btn:active, .btn:focus {
                    background-color: #91877F;
                    border-color: #91877F;
                }
                `}
            </style>
            <Row className="justify-content-center mt-5 mx-0">
                <Col sm={11} md={4}>
                    <img src="https://img.sonyunara.com/files/goods/65976/1601953605_0.jpg" style={{ objectFit: "contain", width: "100%" }} />
                </Col>
                <Col sm={11} md={4} className="align-middle mt-4">
                    <h3 className="mb-4">sop682 리본끈셋원피스</h3>
                    <h5 className="mb-4">가격 : 14,000원</h5>
                    <Form style={{ borderBottom: "1px solid" }}>
                        <Form.Group style={{ borderBottom: "1px solid", paddingBottom: "2rem" }}>
                            <Form.Label>색상</Form.Label>
                            <Form.Control as="select" className="mb-2" name="color" defaultValue="옵션 선택" onChange={handleChange}>
                                <option>옵션선택</option>
                                <option>브릭레드(스트랩포함)</option>
                                <option>베이지(스트랩포함)</option>
                                <option>블랙(스트랩포함)</option>
                            </Form.Control>
                            <Form.Label>사이즈</Form.Label>
                            <Form.Control as="select" className="mb-2" name="size" defaultValue="옵션 선택" onChange={handleChange}>
                                <option>옵션선택</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                                <option>FREE</option>
                            </Form.Control>
                        </Form.Group>
                        <div id="list"></div>
                        <Row className="justify-content-between mx-0 my-3" style={{ width: "100%" }}>
                            <Col>총 금액</Col>
                            <Col className="text-right">14,000원</Col>
                        </Row>
                        <Row className="justify-content-between mx-0 my-3" style={{ width: "100%" }}>
                            <Button onClick={addCart} style={{ width: "49%" }}>장바구니</Button>
                            <Button style={{ width: "49%" }}>구매하기</Button>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5 mx-0">
                <Col sm={11} md={8}>
                    <h3 style={{ borderBottom: "1px solid #91877F", paddingBottom: "5px", marginBottom: "1em" }}>설명</h3>
                    <div></div>
                </Col>
            </Row>
            <Row className="justify-content-center mx-0 pt-3 px-2" style={{ position: "fixed", bottom: "0", width: "100%", backgroundColor: "#fff" }}>
                <Col sm={12} md={9}>
                    <h6 style={{ borderBottom: "1px solid", paddingBottom: "5px", marginBottom: "1em" }}>회원님이 선호할만한 상품 추천
                        <a className="close float-right" onClick={(e) => handleClick(e)} style={{ fontSize: "1rem" }}>X</a>
                    </h6>
                    <Row className="justify-content-space mx-0" style={{ flexWrap: "nowrap", width: "100%", overflowX: "auto" }}>
                        <Col as={Card} style={{ minWidth: "10rem", marginRight: "1rem" }}>
                            <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/67504/1607328307_0.jpg" style={{ objectFit: "contain" }} />
                            <Card.Body className="px-0">
                                <Card.Title>클로타탄원피스</Card.Title>
                                <Card.Text>구매자 수: 30</Card.Text>
                            </Card.Body>
                        </Col>
                        <Col as={Card} style={{ minWidth: "10rem", marginRight: "1rem" }}>
                            <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/67504/1607328307_0.jpg" style={{ objectFit: "contain" }} />
                            <Card.Body className="px-0">
                                <Card.Title>클로타탄원피스</Card.Title>
                                <Card.Text>구매자 수: 30</Card.Text>
                            </Card.Body>
                        </Col>
                        <Col as={Card} style={{ minWidth: "10rem", marginRight: "1rem" }}>
                            <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/67504/1607328307_0.jpg" style={{ objectFit: "contain" }} />
                            <Card.Body className="px-0">
                                <Card.Title>클로타탄원피스</Card.Title>
                                <Card.Text>구매자 수: 30</Card.Text>
                            </Card.Body>
                        </Col>
                        <Col as={Card} style={{ minWidth: "10rem", marginRight: "1rem" }}>
                            <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/67504/1607328307_0.jpg" style={{ objectFit: "contain" }} />
                            <Card.Body className="px-0">
                                <Card.Title>클로타탄원피스</Card.Title>
                                <Card.Text>구매자 수: 30</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Product