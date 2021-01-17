import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import catchErrors from '../utils/catchErrors';


function Product({ match, location }) {
    const [product, setProduct] = useState(location.state)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const [cart, setCart] = useState([])
    const [error, setError] = useState('')
    const [selected, setSelected] = useState({ sizes: false, colors: false })
    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        if (size && color) {
            pushOptions()
            console.log(cart)
        }
    }, [size, color])


    function handleClick(e) {
        const box = e.target.parentNode.parentNode
        box.style.display = "none"
    }

    function pushOptions() {
        setCart([...cart, { color, size, productId: product.id }])
        selected.sizes = false
        selected.colors = false
        setColor("")
        setSize("")
        setPrice(product.price + price)
    }

    function handleChange(e) {
        const { name, value } = e.target
        if (name === "sizes") {
            // setPreCart({ ...preCart, [name]: value })
            setSize(value)
            selected.sizes = true
        } else if (name === "colors") {
            // setPreCart({ ...preCart, [name]: value })
            setColor(value)
            selected.colors = true
        }
    }

    function deleteOption(e) {
        e.preventDefault()
        const asd = cart.filter((el) => el.color !== e.target.id || el.size !== e.target.name)
        setCart(asd)
    }

    function handleCount(e) {
        e.preventDefault()
        // const asd = cart.filter((el) => el.color !== e.target.id || el.size !== e.target.name)
        const asd= cart.map((el)=>{
            if(el.color !== e.target.id || el.size !== e.target.name){
                return {el}
            } else {
                return {...el, count : e.target.value}
            }
        })
        // const index = product["sub_category"].findIndex((item)=>{return item === e.target.name})
        // product["sub_category"].splice(index, 1)
        setCart(asd)
        setCount(e.value)
    }

    async function addCart() {
        console.log(cart)
        if (localStorage.getItem('id')) {
            // preCart(color, size, count), productId(productlist에서 props), userId(로컬) 를 보내줌
            try {
                setError('')
                const response = await axios.put('/api/cart/addcart', {
                    userId: localStorage.getItem('id'),
                    // productId: product.id,
                    products: cart
                })
                console.log(response)
            } catch (error) {
                catchErrors(error, setError)
            }
        } else {
            alert("로그인을 해주세요.")
            return <Redirect to='/login' />
        }
    }


    return (
        <div>
            {/* {console.log("match=", match.params, "location=", location.state, "product=", product)} */}
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
                    <img src={`/images/${product.main_img}`} style={{ objectFit: "contain", width: "100%" }} />
                </Col>
                <Col sm={11} md={4} className="align-middle mt-4">
                    <h3 className="mb-4">{product.name}</h3>
                    <h5 className="mb-4">가격 : {product.price}원</h5>
                    <Form style={{ borderBottom: "1px solid" }}>
                        <Form.Group style={{ borderBottom: "1px solid", paddingBottom: "2rem" }}>
                            <Form.Label>색상</Form.Label>
                            <Form.Control as="select" className="mb-2" name="colors" value={color} defaultValue="옵션 선택" onChange={handleChange}>
                                <option>옵션선택</option>
                                {product.colors.map((e) => (
                                    <option>{e}</option>
                                ))}
                            </Form.Control>
                            <Form.Label>사이즈</Form.Label>
                            <Form.Control as="select" className="mb-2" name="sizes" value={size} defaultValue="옵션 선택" onChange={handleChange}>
                                <option>옵션선택</option>
                                {product.sizes.map((e) => (
                                    <option>{e}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        {cart.map((e) => (
                            <div>
                                <span>{e.color}/{e.size}</span>
                                <input onClick={deleteOption} id={e.color} name={e.size} type="image" alt="삭제버튼" src="https://img.icons8.com/fluent-systems-regular/24/000000/close-window.png" className="float-right align-middle" />
                                <span>{e.price}원</span>
                                <span className="float-right mx-2">
                                    <input type='number' id={e.color} name={e.size} onChange={handleCount} value={count} style={{ width: '3rem' }} className="text-center" />
                                </span>
                            </div>

                        ))}
                        <Row className="justify-content-between mx-0 my-3" style={{ width: "100%" }}>
                            <Col>총 금액</Col>
                            <Col className="text-right">{price}원</Col>
                        </Row>
                        <Row className="justify-content-between mx-0 my-3" style={{ width: "100%" }}>
                            <Button type='button' onClick={addCart} style={{ width: "49%" }}>장바구니</Button>
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