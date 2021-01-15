import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import catchErrors from '../utils/catchErrors';

const INIT_PRODUCT = {
    pro_name: '스키니진',
    price: 12000,
    count: 1,
    main_category: 'PANTS',
    sub_category: ['SKINNY JEANS'],
    sizes: ['L', 'M'],
    colors: ['연청', '진청'],
    main_image: "a8f4d63ead77717f940a2b27deb707a6",
    productId:"5ffda03428faf35de8319360"
}
const preCart = []

function Product({ match, location }) {
    const [product, setProduct] = useState(INIT_PRODUCT)
    const [cart, setCart] = useState(INIT_PRODUCT)
    const [error, setError] = useState('')
    const [selected, setSelected] = useState({ sizes: false, colors: false })
    const [price, setPrice] = useState(0)

    useEffect(() => {
        if (selected.sizes === true && selected.colors === true) {
            pushOptions()
            console.log(preCart)
        }
    }, [cart])


    function handleClick(e) {
        const box = e.target.parentNode.parentNode
        box.style.display = "none"
    }

    function pushOptions() {
        preCart.push(cart)
        selected.sizes = false
        selected.colors = false
        setPrice(product.price+price)
    }
    function handleChange(e) {
        const { name, value } = e.target
        if (e.target.name === "sizes") {
            setCart({ ...cart, [name]: value })
            selected.sizes = true
        } else if (e.target.name === "colors") {
            setCart({ ...cart, [name]: value })
            selected.colors = true
        }
        // setCart({ ...cart, [name]: value })

        // handleCreate()
    }

    function listDelete(e) {
        e.preventDefault()
        const parent = e.target.parentNode
        parent.remove()
    }

    function handleCreate() {
        // if (product !== undefined) {
        //     if (product.colors !== "" && product.sizes !== "") {
        //         cart.push(
        //             <div className="d-flex justify-content-between my-2" >
        //                 <p>{product.color}  {product.size} </p>
        //                 <input name="count" type="number" min="0" max="10" style="width: 40px" onChange={handleChange} />
        //                 <p style="margin-bottom: 0px">{product.price}</p>
        //             </div>
        //         )
        // const list = document.getElementById('list')
        // list.style.borderBottom = "1px solid"
        // const shopping = document.createElement('div')
        // shopping.className = "d-flex justify-content-between my-2"
        // shopping.innerHTML = `${product.color} / ${product.size}
        // <input type="number" min="0" max="10" value="1" style="width: 40px" />
        // <p style="margin-bottom: 0px">14,000원</p>`
        // const deleteA = document.createElement('a')
        // deleteA.innerText = 'X'
        // deleteA.addEventListener('click', listDelete)
        // shopping.appendChild(deleteA)
        // list.appendChild(shopping)
        // }
        // }
    }

    async function addCart() {
        // preCart(color, size, count), productId(productlist에서 props), userId(로컬) 를 보내줌
        try {
            setError('')
            const response = await axios.put('/api/cart/addcart', {
                userId: localStorage.getItem('loginStatus'),
                productId: "a8f4d63ead77717f940a2b27deb707a6",
                products: preCart
            })
            console.log(response)
        } catch (error) {
            catchErrors(error, setError)
        }
    }

    // useEffect(() => {
    //     handleCreate()
    // }, [product])

    return (
        <div>
            {console.log("실행", "product=", product)}
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
                    <img src="/images/a8f4d63ead77717f940a2b27deb707a6" style={{ objectFit: "contain", width: "100%" }} />
                </Col>
                <Col sm={11} md={4} className="align-middle mt-4">
                    <h3 className="mb-4">스키니진</h3>
                    <h5 className="mb-4">가격 : 12000원</h5>
                    <Form style={{ borderBottom: "1px solid" }}>
                        <Form.Group style={{ borderBottom: "1px solid", paddingBottom: "2rem" }}>
                            <Form.Label>색상</Form.Label>
                            <Form.Control as="select" className="mb-2" name="colors" defaultValue="옵션 선택" onChange={handleChange}>
                                <option>옵션선택</option>
                                {product.colors.map((e) => (
                                    <option>{e}</option>
                                ))}
                            </Form.Control>
                            <Form.Label>사이즈</Form.Label>
                            <Form.Control as="select" className="mb-2" name="sizes" defaultValue="옵션 선택" onChange={handleChange}>
                                <option>옵션선택</option>
                                {product.sizes.map((e) => (
                                    <option>{e}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        {preCart.map((e) => (
                            <div>{e.colors}/{e.sizes}</div>
                        ))}
                        <Row className="justify-content-between mx-0 my-3" style={{ width: "100%" }}>
                            <Col>총 금액</Col>
                            <Col className="text-right">{price}원</Col>
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