import React, { useState, useEffect, useRef } from 'react';
import Nav1 from '../Components/MainNav';
import Nav2 from '../Components/SubNav';
import { Form, Col, Container, Button, Row } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'

function Login(){
    return (
        <div>
            <Nav1 />
            <Nav2 />
            <Container className="my-5">
                <Row className="justify-content-center">

                    <Col md={5} xs={10} className="border" style={{ background: '#F7F3F3' }}>
                        <h3 className="text-center mt-5">Login</h3>
                        <Form className="p-5">


                            <Form.Group controlId="formBasicId">
                                <Form.Row>
                                    <Form.Label for="id">아이디</Form.Label>
                                    <Col>
                                        <Form.Control
                                            // type="text"
                                            // id="id"
                                            // value={id}
                                            // onChange={({ target: { value } }) => user.d(value)}
                                            className="mx-sm-3" size="sm" placeholder="ID">
                                        </Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Row>
                                    <Form.Label for="password">비밀번호</Form.Label>
                                    <Col>
                                        <Form.Control
                                            // type="password"
                                            // id="password"
                                            // value={password}
                                            // onChange={({ target: { value } }) => user.password(value)}
                                            className="mx-sm-3" size="sm" placeholder="Password"></Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Button style={{ background: '#91877F', borderColor: '#91877F' }} type="submit" block>Login</Button>
                            <div className="loginLine">
                                <Link to="/signup" style={{ color: '#91877F' }} >회원이 아니십니까?</Link>
                            </div>
                        </Form>
                    </Col>
                </Row>




            </Container>
        </div>


    )
}

export default Login