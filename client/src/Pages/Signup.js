import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import Nav1 from '../Components/MainNav';
import Nav2 from '../Components/SubNav';
import { Form, Col, Container, Button, Row } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';

function Signup() {


    return (
        <div>

            <Nav1 />
            <Nav2 />
            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col md={6} xs={10} className="border" style={{background:'#F7F3F3'}}>
                        <h2 className="text-center mt-5">Sign Up</h2>

                        <Form className="p-5">



                            <Form.Group controlId="formBasicName">
                                <Form.Row>
                                    <Form.Label for="name">이 름</Form.Label>

                                    <Col>
                                        <Form.Control type="text" id="name" size="sm" placeholder="" className="mx-sm-3"></Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicNumber">
                                <Form.Row>
                                    <Form.Label for="number">주민등록번호</Form.Label>

                                    <Col as={Row}>
                                        <Form.Control type="text" id="number1" size="sm" maxlength="6" className="mx-sm-3" style={{ width: '120px' }}></Form.Control>
                                    -
                                    <Form.Control type="text" id="number2" size="sm" maxlength="1" className="mx-sm-3" style={{ width: '25px' }}></Form.Control>
                                    ******
                                    </Col>

                                </Form.Row>
                            </Form.Group>
                            <Form.Group controlId="formBasicId">
                                <Form.Row>
                                    <Form.Label for="id">아이디</Form.Label>

                                    <Col>
                                        <Form.Control type="text" id="id" size="sm" placeholder="ID" className="mx-sm-3"></Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Row>
                                    <Form.Label for="password">비밀번호</Form.Label>

                                    <Col>
                                        <Form.Control type="password" id="password" size="sm" placeholder="Password"aria-describedby="passwordHelpBlock" className="mx-sm-3"></Form.Control>
                                        <Form.Text id="password" muted> 8-15자로 입력해주세요.</Form.Text>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword2">
                                <Form.Row>
                                    <Form.Label for="password2">비밀번호 확인</Form.Label>

                                    <Col>
                                        <Form.Control type="password" id="password2" size="sm" placeholder="" className="mx-sm-3"></Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicTel">
                                <Form.Row>
                                    <Form.Label for="tel">휴대전화</Form.Label>

                                    <Col>
                                        <Form.Control type="text" id="tel" size="sm" placeholder="" className="mx-sm-3"></Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicAdd">
                                <Form.Row>
                                    <Form.Label>주 소</Form.Label>

                                    <Col>
                                        <Form.Control type="text" id="add" size="sm" placeholder="상세주소" className="mx-sm-3"></Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Button style={{background:'#91877F', borderColor:'#91877F'}} type="submit" block>Sign Up</Button>
                        </Form>

                    </Col>
                </Row>

            </Container>
        </div>

    )
}

export default Signup