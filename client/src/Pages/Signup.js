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
                    <Col md={6} xs={10} className="border">
                        <h2 className="text-center mt-5">Sign Up</h2>

                        <Form className="p-5">

                            <Form.Group controlId="formBasicId">
                                <Form.Row>
                                    <Form.Label for="id">User Name</Form.Label>

                                    <Col>
                                        <Form.Control type="text" id="id" size="sm" placeholder="UserName" className="mx-sm-3"></Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicName">
                                <Form.Row>
                                    <Form.Label for="name">Real Name</Form.Label>

                                    <Col>
                                        <Form.Control type="text" id="name" size="sm" placeholder="Enter your Real Name" className="mx-sm-3"></Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicNumber">
                                <Form.Row>
                                    <Form.Label for="number">Resident registration number</Form.Label>

                                    <Col as={Row}>
                                    <Form.Control type="text" id="number1" size="sm" maxlength="6" className="mx-sm-3" style={{width:'120px'}}></Form.Control>
                                    -
                                    <Form.Control type="text" id="number2" size="sm" maxlength="1" className="mx-sm-3" style={{width:'25px'}}></Form.Control>
                                    ******
                                    </Col>

                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Row>
                                    <Form.Label for="password">Password</Form.Label>

                                    <Col>
                                        <Form.Control type="password" id="password" size="sm" aria-describedby="passwordHelpBlock" className="mx-sm-3"></Form.Control>
                                        <Form.Text id="password" muted>Must be 8-20 characters long.</Form.Text>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword2">
                                <Form.Row>
                                    <Form.Label for="password2">Confirm Password</Form.Label>

                                    <Col>
                                        <Form.Control type="password" id="password2" size="sm" placeholder="Confirm Password" className="mx-sm-3"></Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicTel">
                                <Form.Row>
                                    <Form.Label for="tel">Phone Number</Form.Label>

                                    <Col>
                                        <Form.Control type="text" id="tel" size="sm" placeholder="Enter your Phone Number" className="mx-sm-3"></Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicAdd">
                                <Form.Row>
                                    <Form.Label>Address</Form.Label>

                                    <Col>
                                        <Form.Control type="text" id="add" size="sm" placeholder="Enter your Address" className="mx-sm-3"></Form.Control>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Button variant="outline-dark" type="submit" block>Sign Up</Button>
                        </Form>

                    </Col>
                </Row>

            </Container>
        </div>

    )
}

export default Signup