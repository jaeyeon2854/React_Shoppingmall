import React, { useState, useEffect, useRef } from 'react';
import Nav1 from '../Components/MainNav';
import Nav2 from '../Components/SubNav';

function Login() {

    return (
        <Container className="d-flex justify-content-center">
            <Nav1 />
            <Nav2 />
            <div className="margin-auto">
                <Form.Label className="d-flex justify-content-center">Login</Form.Label>

                <Form>
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
                </Form>

                <div className="loginLine">
                    <Link to="/Signup">SignUp?</Link>
                </div>

                <Button variant="outline-dark" type="submit" block>Login</Button>
            </div>
        </Container>

    )
}

export default Login