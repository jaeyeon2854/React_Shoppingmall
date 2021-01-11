import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Col, Container, Button, Row, Alert } from 'react-bootstrap';
import axios from 'axios'
import catchErrors from '../utils/catchErrors'
import { handleLogin } from '../utils/auth'


const INIT_USER = {
    id: '',
    password: ''
}

function Login() {

    const [validated, setValidated] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })

    }

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        try {
            setError('')
            await axios.post('/api/auth/login', user)
            handleLogin()
            setSuccess(true)
        } catch (error) {
            catchErrors(error, setError)
        }
    }

    if (success) {
        alert('로그인 되었습니다.')
        window.location.href='/'
    }



    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={5} xs={10} className="border" style={{ background: '#F7F3F3' }}>
                    <h3 className="text-center mt-5">Login</h3>
                    {error && <Alert variant='danger'>
                        {error}
                    </Alert>}
                    <Form noValidate validated={validated}
                        onSubmit={handleSubmit}
                        className="p-5">
                        <Form.Group controlId="formBasicId">
                            <Form.Row>
                                <Col sm={4} xs={6} as={Form.Label} for="id"> 아이디</Col>
                                <Col sm={8} xs={12} as={Form.Control}
                                    required
                                    type="text"
                                    name="id"
                                    placeholder="ID"
                                    value={user.id}
                                    onChange={handleChange}
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
                                    name="password"
                                    value={user.password}
                                    placeholder="Password"
                                    onChange={handleChange}
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
    )

}

export default Login