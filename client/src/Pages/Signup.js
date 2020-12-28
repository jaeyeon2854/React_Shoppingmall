import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import Nav1 from '../Components/MainNav';
import Nav2 from '../Components/SubNav';

function Signup() {


    return (
        <Container className="d-flex justify-content-center">
            <Nav1 />
            <Nav2 />
            <div className="form-control">
                <Form.Label className="d-flex justify-content-center">Sign Up</Form.Label>
                <Form>

                    <Form.Group controlId="formBasicId">
                        <Form.Row>
                            <Form.Label for="id">User Name</Form.Label>
                        </Form.Row>
                        <Col>
                            <Form.Control type="text" id="id" size="sm" placeholder="UserName" className="mx-sm-3"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Row>
                            <Form.Label for="name">Real Name</Form.Label>
                        </Form.Row>
                        <Col>
                            <Form.Control type="text" id="name" size="sm" placeholder="Enter your Real Name" className="mx-sm-3"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formBasicNumber">
                        <Form.Row>
                            <Form.Label for="number">Resident registration number</Form.Label>
                        </Form.Row>
                        <Col>
                            <Form.Control type="text" id="number1" size="sm" maxlength="6" className="mx-sm-3"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Row>
                            <Form.Label for="password">Password</Form.Label>
                        </Form.Row>
                        <Col>
                            <Form.Control type="password" id="password" size="sm" aria-describedby="passwordHelpBlock" className="mx-sm-3"></Form.Control>
                            <Form.Text id="password" muted>Must be 8-20 characters long.</Form.Text>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword2">
                        <Form.Row>
                            <Form.Label for="password2">Confirm Password</Form.Label>
                        </Form.Row>
                        <Col>
                            <Form.Control type="password" id="password2" size="sm" placeholder="Confirm Password" className="mx-sm-3"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formBasicTel">
                        <Form.Row>
                            <Form.Label for="tel">Phone Number</Form.Label>
                        </Form.Row>
                        <Col>
                            <Form.Control type="text" id="tel" size="sm" placeholder="Enter your Phone Number" className="mx-sm-3"></Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group controlId="formBasicAdd">
                        <Form.Row>
                            <Form.Label>address</Form.Label>
                        </Form.Row>
                        <Col>
                            <Form.Control type="text" id="add" size="sm" placeholder="Enter your Address" className="mx-sm-3"></Form.Control>
                        </Col>
                    </Form.Group>
                </Form>

                <Button variant="outline-dark" type="submit" block>Sign Up</Button>
            </div>
        </Container>

    )
}

export default Signup