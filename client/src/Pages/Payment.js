import React, { useState, useEffect, useRef } from 'react';
import MainNav from '../Components/MainNav';
import SubNav from '../Components/SubNav';
import DaumPostcode from "react-daum-postcode";
import { Container, Card, Row, Col, Button, Form } from 'react-bootstrap';

function Payment() {

    const [paymentWay, setPaymentWay] = useState([])
    const [isAddress, setIsAddress] = useState("");
    const [isZoneCode, setIsZoneCode] = useState();
    const [isPostOpen, setIsPostOpen] = useState();
    const [post, setPost] = useState([])

    function postClick() {
        if (post.length !== 0) {
            setPost([])
        }
        else {
            setPost(
                <div>
                    <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
                </div>
            )
        }

    }

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        setIsZoneCode(data.zonecode);
        setIsAddress(fullAddress);
        setIsPostOpen(false);
    };
    const postCodeStyle = {
        display: "block",
        position: "absolute",
        // top: "50%",
        width: "400px",
        height: "500px",
        padding: "7px",
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

    function handleClick2() {
        if (paymentWay.length !== 0) {
            setPaymentWay([])
        }
    }
    const [num, setNum] = useState(0)

    function plusNum() {
        setNum(num + 1)
    }
    function minusNum() {
        if (num === 0) {
            setNum(0)
        }
        else {
            setNum(num - 1)

        }
    }
    function deleteCart() {
        //장바구니 DB에서 해당 항목 삭제 
        console.log('카트에 담긴 항목을 삭제했습니다.')
    }
    return (
        <div>
            <MainNav />
            <SubNav />
            <Container>
                <h3 className="my-5 font-weight-bold text-center">주문/결제</h3>
                <div>
                    <h5 className="font-weight-bold py-3 border-top border-bottom text-center" style={{ background: '#F7F3F3' }}>주문자 정보</h5>
                    <Row className="justify-content-md-center">
                        <Col md={4}>
                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>이름</Form.Label>
                                    <Form.Control type="text" placeholder="윤지원" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>이메일</Form.Label>
                                    <Form.Control type="email" placeholder="jiwon5393@naver.com" />
                                </Form.Group>
                                <Form.Group controlId="formBasicTel">
                                    <Form.Label>휴대전화</Form.Label>
                                    <Form.Control type="tel" placeholder="010-0000-0000" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>


                </div>

                <div>
                    <h5 className="font-weight-bold py-3 border-top border-bottom text-center" style={{ background: '#F7F3F3' }}>배송지 정보</h5>
                    <Row>

                        <Col>
                            <Button className="my-3" style={{ background: "#91877F", borderColor: '#91877F' }} onClick={postClick}>우편번호</Button>
                        </Col>
                    </Row>
                    {post}
                </div>

                <div>
                    <h5 className="font-weight-bold py-3 border-top border-bottom text-center" style={{ background: '#F7F3F3' }}>주문상품정보</h5>
                    <Card >
                        <Row className="mx-1">
                            <Col xs={2} sm={2} className="text-center my-auto">
                                <input className="" type="checkbox" id="exampleCheck1" />
                            </Col>
                            <Col className="text-center">
                                <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" style={{ width: '20rem' }} />
                            </Col>
                            <Col md={6} className="p-2">
                                <Card.Body>
                                    <input type="image" src="https://img.icons8.com/fluent-systems-regular/24/000000/close-window.png" className="float-right" onClick={deleteCart} />
                                    <Card.Title className="font-weight-bold mt-3">제품명</Card.Title>
                                    <Card.Text>가격</Card.Text>
                                    <Card.Text>옵션</Card.Text>
                                    <Card.Text>수량</Card.Text>
                                    <div>
                                        <input type="image" src="https://img.icons8.com/ios-glyphs/20/000000/minus-math.png" className="align-middle" onClick={minusNum} />
                                        <input type="text" style={{ width: '30px' }} className="text-center align-middle mx-1" placeholder="1" value={num} readOnly></input>
                                        <input type="image" src="https://img.icons8.com/ios-glyphs/20/000000/plus-math.png" className="align-middle" onClick={plusNum} />
                                    </div>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </div>

                <div className="p-5 m-5" style={{ background: '#F7F3F3' }}>
                    <ul className="pl-0" style={{ listStyle: 'none' }}>
                        <li>
                            <span className="text-secondary">총 상품금액</span>
                            <span className="text-secondary float-right">12,000원</span>
                        </li>
                        <li>
                            <span className="text-secondary">배송비</span>
                            <span className="text-secondary float-right">2,500원</span>
                        </li>
                    </ul>
                    <div className="my-1 pt-2 border-top font-weight-bold">
                        결제금액<span className="float-right">14,500원</span>
                    </div>
                </div>

                <div>
                    <h5 className="font-weight-bold py-3 border-top border-bottom text-center" style={{ background: '#F7F3F3' }}>결제수단</h5>
                    <div className="text-center mt-5">
                        <Button variant="success" onClick={handleClick} >무통장입금</Button>
                        <Button variant="warning" style={{ color: '#ffffff' }} onClick={handleClick2}>카카오페이</Button>
                    </div>
                    {paymentWay}

                </div>
            </Container>
        </div>
    )
}

export default Payment