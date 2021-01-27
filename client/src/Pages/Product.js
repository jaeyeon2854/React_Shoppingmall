import React, { useState, useEffect } from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
import ListCard from "../Components/ListCard";
import axios from 'axios';
import catchErrors from '../utils/catchErrors';
import { Row, Col, Form, Card, Button, Modal, Image } from 'react-bootstrap';


function Product({ match, location }) {
    const [product, setProduct] = useState(location.state)
    const [productList, setProductList] = useState([])
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

    useEffect(() => {
        recommend()
    }, [])

    useEffect(() => {
        if (size && color) {
            pushOptions()
        }
        getRecommend()
    }, [size, color])

    async function getRecommend(){
        try {
            const response = await axios.get(`/api/order/recommend?products=${product.id}`)
            setProductList(response.data)
        } catch (error) {
            catchErrors(error,setError)
        }
    }

    function handleClick(e) {
        const box = e.target.parentNode.parentNode
        box.style.display = "none"
    }

    function pushOptions() {
        const cartSet = cart.map(el => {
            const newObj = {}
            newObj["color"] = el.color;
            newObj["size"] = el.size;
            return newObj
        })
        const isDuplicated = cartSet.some(el => el.color === color && el.size === size)
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
        const list = cart.filter((el) => el.color !== e.target.id || el.size !== e.target.name)
        list.map((el) => {
            preprice = preprice + el.count * product.price
        })
        setCart(list)
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
            {console.log(product)}
            <style type="text/css">
                {`
                .btn {
                    background-color: #CDC5C2;
                    border-color: #CDC5C2;
                }
                .btn:hover {
                    background-color: #91877F;
                    border-color: #91877F;
                }
                .btn-primary:focus {
                    background-color: #91877F;
                    border-color: #91877F;
                    box-shadow: 0 0 0 0;
                }
                .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
                    background-color: #91877F;
                    border-color: #91877F;
                }
                `}
            </style>
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
                            <Button type='button' name="shoppingcart" onClick={addCart} style={{ width: "49%" }} variant="primary" >장바구니</Button>
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
                    <Col className='text-center' style={{ fontSize: '1px' }}>
                        <div className='p-2 text-center border' style={{ background: '#CDC5C2', width: '50%', margin: 'auto', fontSize: '3.5vmin' }} >
                            {product.name}
                        </div>
                        <Image src={`/images/${product.main_img}`} className='d-flex justify-content-center p-4' style={{ objectFit: "contain", maxWidth: "100%", margin: 'auto' }} />
                        <Card style={{ width: '80%', margin: 'auto' }} className='my-4' >
                            <Card.Header className='text-center' style={{ background: '#CDC5C2' }}>
                                <h5 className='m-0' style={{ whiteSpace: 'nowrap' }}> [ Description ]</h5>
                            </Card.Header>
                            <Card.Body className='text-center m-2' style={{ whiteSpace: "pre-line", background: '#F7F3F3', fontSize: '1vw' }}>
                                <small>{product.description}</small>
                            </Card.Body>
                        </Card>
                        <Col className='p-5'>
                            <div className='border p-2' style={{ width: '60%', margin: 'auto', fontSize: '3.5vmin' }}>[ Detail Images ]</div>
                            <Image src={`/images/${product.detail_imgs}`} style={{ objectFit: "contain", maxWidth: "100%", margin: 'auto' }} className='p-4 d-flex justify-content-center' />

                        </Col>
                    </Col>
                </Col>
            </Row>
            <Row className="justify-content-center mx-0 pt-3 px-2" style={{ position: "fixed", bottom: "0", width: "100%", backgroundColor: "#fff" }}>
                <Col sm={12} md={9}>
                    <h6 style={{ borderBottom: "1px solid", paddingBottom: "5px", marginBottom: "1em" }}>회원님이 선호할만한 상품 추천
                        <a className="close float-right" onClick={(e) => handleClick(e)} style={{ fontSize: "1rem", cursor: "pointer" }}>X</a>
                    </h6>
                    <Row className="justify-content-evenly mx-0" style={{ flexWrap: "nowrap", width: "100%", overflowX: "auto" }}>
                        {productList.map(pro => (
                            <Link to={{
                                pathname: `/product/${pro._id}`,
                                state: {
                                    id: pro._id,
                                    name: pro.pro_name,
                                    price: pro.price,
                                    colors: pro.colors,
                                    sizes: pro.sizes,
                                    description: pro.description,
                                    main_img: pro.main_imgUrl,
                                    detail_imgs: pro.detail_imgUrls
                                }
                            }}>
                                <ListCard id={pro._id} name={pro.pro_name} price={pro.price} main_img={pro.main_imgUrl} status={'recommend'} />
                            </Link>
                        ))}
                        {/* <Col as={Card} style={{ minWidth: "8rem" }}>
                            <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/67504/1607328307_0.jpg" style={{ objectFit: "contain" }} />
                            <Card.Body className="px-0">
                                <Card.Title>클로타탄원피스</Card.Title>
                                <Card.Text>구매자 수: 30</Card.Text>
                            </Card.Body>
                        </Col> */}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Product