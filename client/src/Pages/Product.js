import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Form, Card, Button, Modal, Image } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router-dom';
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
    const [show, setShow] = useState(false);
    let history = useHistory();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const replace = product.description.replaceAll('\n', '<br />')
    
    console.log("objectasdasd", replace)

    useEffect(() => {
        if (size && color) {
            pushOptions()
            // console.log(cart)
        }
    }, [size, color])

    function handleClick(e) {
        const box = e.target.parentNode.parentNode
        box.style.display = "none"
    }

    function pushOptions() {
        // console.log(cart)
        const a = cart.map(el => {
            const rObj = {}
            rObj["color"] = el.color;
            rObj["size"] = el.size;
            return rObj
        })
        const isDuplicated = a.some(el => el.color === color && el.size === size)
        if (isDuplicated) {
            selected.sizes = false
            selected.colors = false
            setColor("")
            setSize("")
            alert("이미 선택한 옵션입니다.")
        } else {
            selected.sizes = false
            selected.colors = false
            setCart([...cart, { color, size, productId: product.id, count: 1, checked: false }])
            setColor("")
            setSize("")
            setPrice(product.price + price)
        }

    }

    function handleChange(e) {
        const { name, value } = e.target
        if (name === "sizes") {
            setSize(value)
            selected.sizes = true
        } else if (name === "colors") {
            setColor(value)
            selected.colors = true
        }
    }

    function deleteOption(e) {
        e.preventDefault()
        let preprice = 0
        const asd = cart.filter((el) => el.color !== e.target.id || el.size !== e.target.name)
        asd.map((el) => {
            preprice = preprice + el.count * product.price
        })
        setCart(asd)
        setPrice(Number(preprice))
    }

    function handleCount(e) {
        const addCount = cart.map((el) => {
            if (el.color !== e.target.id || el.size !== e.target.name) {
                return { ...el }
            } else {
                return { ...el, count: e.target.value }
            }
        })
        let preprice = 0
        addCount.map((el) => {
            preprice = preprice + el.count * product.price
        })
        setPrice(Number(preprice))
        setCart(addCount)
        setCount(e.value)
    }

    async function addCart(event) {
        console.log(cart)
        if (cart.length < 1) {
            alert("옵션을 선택해주세요")
        }
        else if (localStorage.getItem('id')) {
            if (event.target.name === "shoppingcart") {
                // preCart(color, size, count), productId(productlist에서 props), userId(로컬) 를 보내줌
                try {
                    setError('')
                    const response = await axios.put('/api/cart/addcart', {
                        userId: localStorage.getItem('id'),
                        products: cart
                    })
                    console.log(response.data)
                    setShow(true)
                } catch (error) {
                    catchErrors(error, setError)
                }
            } else {
                try {
                    setError('')
                    cart.map((el) => {
                        el.checked = true
                    })
                    const response = await axios.put('/api/cart/addcart', {
                        userId: localStorage.getItem('id'),
                        products: cart
                    })
                    console.log(response.data)
                    history.push("/payment")
                } catch (error) {
                    catchErrors(error, setError)
                }
            }

        } else {
            alert("로그인을 해주세요.")
            return <Redirect to='/login' />
        }
    }


    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>장바구니에 상품담기</Modal.Title>
                </Modal.Header>
                <Modal.Body>정상적으로 장바구니에 상품을 담았습니다.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>쇼핑계속하기</Button>
                    <Button variant="primary" href='/shoppingcart'>장바구니로 이동</Button>
                </Modal.Footer>
            </Modal>
            {/* {console.log(cart)} */}
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
                            <Row className="mx-1">
                                <Col xs={6}>{e.color}/{e.size}</Col>
                                <Col xs={4} className="text-right" >
                                    <input type='number' id={e.color} name={e.size} onChange={handleCount} value={count} style={{ width: '3rem' }} className="text-center" />
                                </Col>
                                <Col xs={2} className="text-right">
                                    <input onClick={deleteOption} id={e.color} name={e.size} type="image" alt="삭제버튼" src="https://img.icons8.com/fluent-systems-regular/24/000000/close-window.png" className="align-middle" />
                                </Col>
                            </Row>

                        ))}
                        <Row className="justify-content-between mx-0 my-3" style={{ width: "100%" }}>
                            <Col>총 금액</Col>
                            <Col className="text-right">{price}원</Col>
                        </Row>
                        <Row className="justify-content-between mx-0 my-3" style={{ width: "100%" }}>
                            <Button type='button' name="shoppingcart" onClick={addCart} style={{ width: "49%" }}>장바구니</Button>
                            <Button type='button' name="payment" onClick={addCart} style={{ width: "49%" }}>구매하기</Button>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5 mx-0">
                <Col sm={11} md={8}>
                    <h3 style={{ borderBottom: "1px solid #91877F", paddingBottom: "5px", marginBottom: "1em" }} className="p-3">
                        설명
                        </h3>
                    <Col className='justify-content-center '>
                        <h2 className='p-2 text-center border' style={{ background: '#CDC5C2' }}>{product.name} </h2>
                        <>
                            <Image src={`/images/${product.main_img}`} style={{ objectFit: "contain", maxWidth: "100%" }} />
                        </>
                        <Card className='m-3 d-flex justify-content-center'>
                            <Card.Body className='text-center'>
                                {replace}
                            </Card.Body>
                        </Card>
                        <>
                            <h4 className='my-4 text-center'>[ Detail Images ]</h4>
                            <Image src={`/images/${product.detail_imgs}`} style={{ objectFit: "contain", maxWidth: "100%" }} />
                        </>
                    </Col>
                </Col>
            </Row>
            <Row className="justify-content-center mx-0 pt-3 px-2" style={{ position: "fixed", bottom: "0", width: "100%", backgroundColor: "#fff" }}>
                <Col sm={12} md={9}>
                    <h6 style={{ borderBottom: "1px solid", paddingBottom: "5px", marginBottom: "1em" }}>회원님이 선호할만한 상품 추천
                        <a className="close float-right" onClick={(e) => handleClick(e)} style={{ fontSize: "1rem", cursor: "pointer" }}>X</a>
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