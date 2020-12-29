import React, { useState, useEffect, useRef } from 'react';
import MainNav from '../Components/MainNav';
import SubNav from '../Components/SubNav';
import { Container, Card, Row, Col, Button, Form } from 'react-bootstrap';

function Payment() {

    const [paymentWay, setPaymentWay] = useState([])

    function handleClick() {
        if (paymentWay.length !== 0) {
            setPaymentWay([])
        }
        else {
            const a = (
                <div>
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
                </div>)
            setPaymentWay(a)
        }
    }

    function handleClick2() {
        if (paymentWay.length !== 0) {
            setPaymentWay([])
            // paymentWay=[]
        }
    }

    return (
        <div>
            <MainNav />
            <SubNav />
            <Container>
                <h3 className="my-5 font-weight-bold text-center" style={{ color: '#F2A400' }}>주문/결제</h3>
                <div>
                    <h5 className="bg-light font-weight-bold py-3 border-top border-bottom text-center">주문자 정보</h5>
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

                </div>

                <div>
                    <h5 className="bg-light font-weight-bold py-3 border-top border-bottom text-center">배송지 정보</h5>
                </div>

                <div>
                    <h5 className="bg-light font-weight-bold py-3 border-top border-bottom text-center">주문상품정보</h5>
                    <Card >
                        <Row>
                            <Col className="text-center align-self-center">
                                <input className="" type="checkbox" id="exampleCheck1"></input>

                            </Col>
                            <Col>
                                <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" style={{ width: '20rem' }} />
                            </Col>
                            <Col>
                                <Card.Body>
                                    <img src="https://img.icons8.com/fluent-systems-regular/24/000000/close-window.png" className="float-right" />
                                    <Card.Title className="font-weight-bold mt-3">제품명</Card.Title>
                                    <Card.Text>가격</Card.Text>
                                    <Card.Text>옵션</Card.Text>
                                    <div>
                                        <Button variant="outline-dark" size="sm">-</Button>
                                        <input type="text" style={{ width: '30px' }} className="align-middle mx-1" readOnly></input>
                                        <Button variant="outline-dark" size="sm">+</Button>
                                    </div>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </div>

                <div className="bg-light p-5 m-5">
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
                    <h5 className="bg-light font-weight-bold py-3 border-top border-bottom text-center">결제수단</h5>
                    <div className="text-center">
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