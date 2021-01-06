import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Nav1 from '../Components/MainNav';
import Nav2 from '../Components/SubNav';
import { Form, Col, Container, Button, Row } from 'react-bootstrap';

function Login() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        console.log(form)
        if (form.checkValidity() === false) { //checkValidity 는 입력 요소에 유효한 데이터가 포함되어 있는지 확인
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
    }
    return (
        <div>
            <Nav1 />
            <Nav2 />
            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col md={5} xs={10} className="border" style={{ background: '#F7F3F3' }}>
                        <h3 className="text-center mt-5">Login</h3>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-5">
                            <Form.Group controlId="formBasicId">
                                <Form.Row>
                                    <Col sm={4} xs={6} as={Form.Label} for="id"> 아이디</Col>
                                    <Col sm={8} xs={12} as={Form.Control}
                                        required
                                        type="text"
                                        id="id"
                                        placeholder="ID"
                                        style={{ width: '160px' }}>
                                    </Col>
                                    <Form.Control.Feedback className="text-center" type="invalid"> 아이디를 입력하세요.</Form.Control.Feedback>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Row>
                                    <Col sm={4} xs={6} as={Form.Label} for="password">비밀번호</Col>
                                    <Col sm={8} xs={12} as={Form.Control}
                                        type="password"
                                        id="password"
                                        placeholder="Password"
                                        style={{ width: '160px' }}
                                        required />
                                    <Form.Control.Feedback className="text-center" type="invalid">
                                        비밀번호를 입력하세요.
                                    </Form.Control.Feedback>
                                </Form.Row>
                            </Form.Group>
                            <Button style={{ background: '#91877F', borderColor: '#91877F' }} type="submit" block>Login</Button>
                            <div className="loginLine">
                                <Link to="/signup" style={{ color: '#91877F' }}>회원이 아니십니까?</Link>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login