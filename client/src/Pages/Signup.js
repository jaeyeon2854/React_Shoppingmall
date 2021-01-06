import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import Nav1 from '../Components/MainNav';
import Nav2 from '../Components/SubNav';
import { Form, Col, Container, Button, Row, Alert } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';

const INIT_USER = {
    name: '',
    number: '',
    id: '',
    password: '',
    password2: '',
    tel: ''
}

function Signup() {
    const [user, setUser] = useState(true)
    //const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState('')

    //useEffect(() => {
    //    const isUser = Object.values(user).every(el => Boolean(el))
    //    isUser ? setDisabled(false) : setDisabled(true)
    //}, user)

    function handleChange(event) {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const [validated, setValidated] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget;
        console.log(form)
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        console.log(user)
        
        try {
            setError('')
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
            setError('다시 시도하세요.')
        }
    }

    return (
        <div>
            <Nav1 />
            <Nav2 />
            <Container className="my-5">
                {error && <Alert variant='danger'>
                    {error}
                </Alert>}
                <Row className="justify-content-center">
                    <Col md={6} xs={10} className="border" style={{ background: '#F7F3F3' }}>
                        <h2 className="text-center mt-5">Sign Up</h2>
                        <Form
                            noValidate validated={validated}
                            onSubmit={handleSubmit}
                            className="p-5">
                            <Form.Group controlId="formBasicName">
                                <Form.Row>
                                    <Col sm={4} xs={6} as={Form.Label} for="id">이 름</Col>
                                    <Col sm={8} xs={12} as={Form.Control}
                                        required type="text"
                                        name="name"
                                        placeholder="Name"
                                        style={{ width: '160px' }}
                                        value={user.name}
                                        onChange={handleChange} />
                                    <Form.Control.Feedback type="invalid">이름을 입력하세요. </Form.Control.Feedback>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group controlId="formBasicNumber">
                                <Form.Row>
                                    <Col sm={4} xs={6} as={Form.Label} for="number">주민등록번호</Col>
                                    <Col as={Row} sm={8} xs={10} >
                                        <Form.Control
                                            required type="text"
                                            name="number1"
                                            maxlength="6"
                                            className="mx-2" style={{ width: '17 0px' }}
                                            value={user.number1}
                                            onChange={handleChange}>
                                        </Form.Control>
                                    -
                                    <Form.Control
                                            required type="text"
                                            name="number2"
                                            maxlength="1" className="mx-3"
                                            style={{ width: '50px' }}
                                            value={user.number2}
                                            onChange={handleChange}>
                                        </Form.Control>
                                    ******
                                    <Form.Control.Feedback type="invalid">주민등록번호를 입력하세요.</Form.Control.Feedback>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group controlId="formBasicId">
                                <Form.Row>
                                    <Col sm={4} xs={6} as={Form.Label} for="id">아이디</Col>
                                    <Col sm={8} xs={12} as={Form.Control}
                                        required
                                        type="text"
                                        name="id"
                                        placeholder="ID"
                                        style={{ width: '160px' }}
                                        value={user.id}
                                        onChange={handleChange} />
                                    <Form.Control.Feedback type="invalid"> 아이디를 입력하세요.</Form.Control.Feedback>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Row>
                                    <Col sm={4} xs={6} as={Form.Label} for="password">비밀번호</Col>
                                    <Col sm={8} xs={12} as={Form.Control}
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        style={{ width: '160px' }}
                                        value={user.password}
                                        required
                                        onChange={handleChange} />
                                    <Form.Control.Feedback className="text-center" type="invalid">
                                        비밀번호를 입력하세요.
                                    </Form.Control.Feedback>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword2">
                                <Form.Row>
                                    <Col sm={4} xs={6} as={Form.Label} for="password">비밀번호 확인</Col>
                                    <Col sm={8} xs={12} as={Form.Control}
                                        type="password"
                                        name="password2"
                                        placeholder="Password"
                                        style={{ width: '160px' }}
                                        value={user.password2}
                                        required
                                        onChange={handleChange} />
                                    <Form.Control.Feedback type="invalid"> 비밀번호를 한번 더 입력하세요.
                                    </Form.Control.Feedback>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group controlId="formBasicTel">
                                <Form.Row>
                                    <Col sm={4} xs={6} as={Form.Label} for="tel">휴대전화</Col>
                                    <Col sm={8} xs={12} as={Form.Control}
                                        required
                                        type="text"
                                        name="tel"
                                        size="sm" style={{ width: '160px' }}
                                        value={user.tel}
                                        onChange={handleChange} />
                                    <Form.Control.Feedback type="invalid"> 휴대전화를 입력하세요. </Form.Control.Feedback>
                                </Form.Row>
                            </Form.Group>
                            <Button
                                style={{ background: '#91877F', borderColor: '#91877F' }} type="submit" block>
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Signup