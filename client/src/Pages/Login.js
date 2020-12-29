import React, { useState, useEffect, useRef } from 'react';
import Nav1 from '../Components/MainNav';
import Nav2 from '../Components/SubNav';
import { Form, Col, Container, Button, Row } from 'react-bootstrap'
import { Link , Redirect} from 'react-router-dom'


function Login() {


    return (
        <div>
            <Nav1 />
            <Nav2 />
            <Container className="my-5">
                <Row className="justify-content-center">

                    <Col md={5} xs={10} className="border">
                        <h3 className="text-center mt-5">Login</h3>
                        <Form className="p-5">


                            <Form.Group controlId="formBasicId">
                                <Form.Row>
                                    <Form.Label for="id">User Name</Form.Label>
                                    <Col>
                                        <Form.Control type="text" id="id" className="mx-sm-3" size="sm" placeholder="User Name"></Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Row>
                                    <Form.Label for="password">Password</Form.Label>
                                    <Col>
                                        <Form.Control type="password" id="password" className="mx-sm-3" size="sm" placeholder="Password"></Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Button variant="outline-dark" type="submit" block>Login</Button>
                            <div className="loginLine">
                                <Link to="/signup">SignUp?</Link>
                            </div>
                        </Form>
                    </Col>
                </Row>




            </Container>
        </div>


    )
}

export default Login