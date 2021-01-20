import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import DaumPostcode from "react-daum-postcode";
import { Container, Card, Row, Col, Button, Form, FormGroup } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import PaymentCard from '../Components/PaymentCard';
import { isAuthenticated } from '../utils/auth';
import catchErrors from '../utils/catchErrors';

function Payment({ match, location }) {
    const [cart, setCart] = useState(location.state)
    const [order, setOrder] = useState({products: location.state})
    const [userData, setUserData] = useState({})
    const [error, setError] = useState()
    const [paymentWay, setPaymentWay] = useState([])
    // const [isAddress, setIsAddress] = useState("");
    // const [isZoneCode, setIsZoneCode] = useState();
    // const [isPostOpen, setIsPostOpen] = useState();
    const [post, setPost] = useState([])
    const [redirect, setRedirect] = useState(null)
    const [address, setAddress] = useState("")
    const [finalPrice, setFinalPrice] = useState(0)
    const [num, setNum] = useState(0)
    const user = isAuthenticated()

    useEffect(() => {
        getUser()
        let price = 0
        cart.map((el) => {
            price = Number(el.count) * Number(el.productId.price) + price
        })
        setFinalPrice(price)
    }, [user])

    async function getUser() {
        try {
            const response = await axios.get(`/api/users/getuser/${user}`)
            console.log(response.data)
            setUserData(response.data)
        } catch (error) {
            catchErrors(error, setError)
        }
    }

    function handleReceiverInfo(e) {
        const { name, value } = e.target
        console.log(name,value)
        setOrder({ ...order, receiverInfo: {...order.receiverInfo, [name]: value } })
    }

    function postClick() {
        if (post.length !== 0) {
            setPost([])
        }
        else {
            setPost(
                <div>
                    <DaumPostcode style={postCodeStyle} onComplete={handleComplete} autoClose={true} />
                </div>
            )
        }

    }
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";
        console.log(data)
        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
                console.log(extraAddress)
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        setAddress({ full: fullAddress, code: data.zonecode });
        setOrder({ ...order, receiverInfo: {...order.receiverInfo, address: fullAddress, postalCode: data.zonecode  } })
        console.log(fullAddress);
    }

    const postCodeStyle = {
        // display: "block",
        position: "absolute",
        width: "400px",
        height: "500px",
        padding: "7px",
        zIndex: "1000"
    };

    function handleClick() {
        if (paymentWay.length !== 0) {
            setPaymentWay([])
        }
        else {
            const a = (
                <Row className="justify-content-md-center">
                    <Col md={6} className="border m-5 p-5">
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>입금은행</Form.Label>
                                <Form.Control as="select" placeholder="입금은행을 선택하세요.">
                                    <option>농협 / 352-0559-2528-83 / 김수빈</option>
                                    <option>우리은행 / 0000-000-000000 / 이재연</option>
                                    <option>국민은행 / 111111-11-111111 / 윤대기</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formName">
                                <Form.Label>입금자</Form.Label>
                                <Form.Control type="email" placeholder="윤지원" />
                            </Form.Group>
                            <Form.Group controlId="formDay">
                                <Form.Label>입금예정일</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </Form>
                    </Col>

                </Row>)
            setPaymentWay(a)
        }
    }

    async function kakaopay() {
        const response = await fetch('/api/kakaopay/test/single', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                cid: 'TC0ONETIME',
                partner_order_id: 'partner_order_id',
                partner_user_id: 'partner_user_id',
                item_name: '앙고라 반목 폴라 베이직 모헤어 니트 (T)',
                quantity: 1,
                total_amount: 22000,
                vat_amount: 200,
                tax_free_amount: 0,
                approval_url: 'http://localhost:3000/account',
                fail_url: 'http://localhost:3000/shoppingcart',
                cancel_url: 'http://localhost:3000/kakaopay/payment',
            })
        })
        const data = await response.json()
        console.log(data)
        window.location.href = data.redirect_url
        // setRedirect(data.redirect_url)
    }

    async function paymentCompleted(){
        console.log(user)
        console.log(order)
        console.log(finalPrice)
        try {
            const response = await axios.post(`/api/order/addorder`, {
                userId : user,
                ...order,
                total : finalPrice+2500
            })
            console.log(response.data)
        } catch (error) {
            catchErrors(error, setError)
        }
    }

    if (redirect) {
        console.log(redirect)
        return <Redirect to={'/kakao'} />
    }

    

    return (
        <div>
            {/* {console.log(order)} */}
            <Container>
                <h3 className="my-5 font-weight-bold text-center">주문/결제</h3>
                <div>
                    <h5 className="font-weight-bold py-3 border-top border-bottom text-center" style={{ background: '#F7F3F3' }}>주문자 정보</h5>
                    <Row className="justify-content-md-center">
                        <Col md={4}>
                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>이름</Form.Label>
                                    <Form.Control type="text" value={userData.name} readOnly />
                                </Form.Group>
                                <Form.Group controlId="formBasicTel">
                                    <Form.Label>휴대전화</Form.Label>
                                    <Form.Control type="tel" value={userData.tel} readOnly />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>이메일</Form.Label>
                                    <Form.Control type="email" placeholder="이메일 주소를 입력해주세요" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </div>

                <div>
                    <h5 className="font-weight-bold py-3 border-top border-bottom text-center" style={{ background: '#F7F3F3' }}>받는사람 정보</h5>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Form>
                                <Form.Group>
                                    <Form.Label>이름</Form.Label>
                                    <Form.Control type="text" name="name" onChange={handleReceiverInfo}></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>휴대전화</Form.Label>
                                    <Form.Control type="text" name="tel" onChange={handleReceiverInfo}></Form.Control>
                                </Form.Group>
                                <Form.Group controlId="formBasicAdd">
                                    <Form.Label>주소</Form.Label>
                                    <Form.Row>
                                        <Col xs={4} sm={4}>
                                            <Form.Control type="text" name="postalCode" id="add" onChange={handleReceiverInfo} value={address.code} disabled={(address.code == null) ? false : true} placeholder="우편번호" required ></Form.Control>
                                        </Col>
                                        <Col >
                                            <Button style={{ background: '#91877F', borderColor: '#91877F' }} className="mx-1" onClick={postClick}>우편번호</Button>
                                            {post}
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col>
                                            <Form.Control type="text" name="address" id="add1" onChange={handleReceiverInfo} value={address.full} disabled={(address.code == null) ? false : true} placeholder="주소" required></Form.Control>
                                            <Form.Control type="text" name="address2" id="add2" onChange={handleReceiverInfo} placeholder="상세주소" required></Form.Control>
                                            <Form.Control.Feedback type="invalid" > 상세 주소를 입력하세요. </Form.Control.Feedback>
                                        </Col>
                                    </Form.Row>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </div>

                <div>
                    <h5 className="font-weight-bold py-3 border-top border-bottom text-center" style={{ background: '#F7F3F3' }}>주문상품정보</h5>
                    <PaymentCard cart={cart} />
                </div>

                <div className="p-5 m-3" style={{ background: '#F7F3F3' }}>
                    <ul className="pl-0" style={{ listStyle: 'none' }}>
                        <li>
                            <span className="text-secondary">총 상품금액</span>
                            <span className="text-secondary float-right">{finalPrice}원</span>
                        </li>
                        <li>
                            <span className="text-secondary">배송비</span>
                            <span className="text-secondary float-right">2500원</span>
                        </li>
                    </ul>
                    <div className="my-1 pt-2 border-top font-weight-bold">
                        결제금액<span className="float-right">{finalPrice + 2500}원</span>
                    </div>
                </div>

                <div>
                    <h5 className="font-weight-bold py-3 border-top border-bottom text-center" style={{ background: '#F7F3F3' }}>결제수단</h5>
                    <div className="text-center mt-5">
                        <Button variant="success" className="align-top" onClick={handleClick} >무통장입금</Button>
                        <input type="image" alt="카카오페이결제" src="icon/payment_icon_yellow_small.png" onClick={kakaopay} />
                    </div>
                    {paymentWay}
                </div>
                <div className="text-center">
                    <Button className="px-5" style={{ background: "#91877F", borderColor: '#91877F' }} onClick={paymentCompleted} block>결제완료</Button>
                </div>
            </Container>
        </div>
    )
}

export default Payment