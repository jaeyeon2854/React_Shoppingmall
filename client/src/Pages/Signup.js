import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import Nav1 from '../Components/MainNav';
import Nav2 from '../Components/SubNav';
import { Form, Col, Container, Button, Row } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import DaumPostcode from "react-daum-postcode";


function Signup() {

    const [isAddress, setIsAddress] = useState("");
    const [isZoneCode, setIsZoneCode] = useState();
    const [isPostOpen, setIsPostOpen] = useState();
    const [post, setPost] = useState([]);

    function postClick() {
        if (post.length !== 0) {
            setPost([])
        } else {
            setPost(
                <div>
                    <DaumPostcode style={postCodeStyle} onComplete={handleComplete} />
                </div>
            )

        }
    }

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        setIsZoneCode(data.zonecode);
        setIsAddress(fullAddress);
        setIsPostOpen(false);
    };

    const postCodeStyle = {
        position: "absolute",
        width: "400px",
        height: "500px",
        padding: "7px",
    };


    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        console.log(form)
        if (form.checkValidity() === false) {
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
                    <Col md={6} xs={10} className="border" style={{ background: '#F7F3F3' }}>
                        <h2 className="text-center mt-5">Sign Up</h2>

                        <Form noValidate validated={validated} onSubmit={handleSubmit} className="p-5">



                            <Form.Group controlId="formBasicName">
                                <Form.Row>
                                    <Form.Label for="name">이 름</Form.Label>

                                    <Col>
                                        <Form.Control
                                            required
                                            type="text" id="name"
                                            size="sm" placeholder="" className="mx-sm-3">
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">이름을 입력하세요. </Form.Control.Feedback>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicNumber">
                                <Form.Row>
                                    <Form.Label for="number">주민등록번호</Form.Label>

                                    <Col as={Row}>
                                        <Form.Control required type="text" id="number1" size="sm" maxlength="6" className="mx-sm-3" style={{ width: '120px' }}></Form.Control>
                                    -
                                    <Form.Control required type="text" id="number2" size="sm" maxlength="1" className="mx-sm-3" style={{ width: '25px' }}></Form.Control>
                                    ******
                                    <Form.Control.Feedback type="invalid">주민등록번호를 입력하세요.</Form.Control.Feedback>
                                    </Col>

                                </Form.Row>
                            </Form.Group>
                            <Form.Group controlId="formBasicId">
                                <Form.Row>
                                    <Form.Label for="id">아이디</Form.Label>

                                    <Col>
                                        <Form.Control required type="text" id="id" size="sm" placeholder="ID" className="mx-sm-3"></Form.Control>
                                        <Form.Control.Feedback type="invalid"> 아이디를 입력하세요.</Form.Control.Feedback>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Row>
                                    <Form.Label for="password">비밀번호</Form.Label>

                                    <Col>
                                        <Form.Control required type="password" id="password" size="sm" placeholder="Password" aria-describedby="passwordHelpBlock" className="mx-sm-3"></Form.Control>
                                        <Form.Text id="password" muted> 8-15자로 입력해주세요.</Form.Text>
                                        <Form.Control.Feedback type="invalid"> 비밀번호를 입력하세요.
                                    </Form.Control.Feedback>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword2">
                                <Form.Row>
                                    <Form.Label for="password2">비밀번호 확인</Form.Label>

                                    <Col>
                                        <Form.Control required type="password" id="password2" size="sm" placeholder="" className="mx-sm-3"></Form.Control>
                                        <Form.Control.Feedback type="invalid"> 비밀번호를 한번 더 입력하세요.
                                    </Form.Control.Feedback>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicTel">
                                <Form.Row>
                                    <Form.Label for="tel">휴대전화</Form.Label>

                                    <Col>
                                        <Form.Control required type="text" id="tel" size="sm" placeholder="" className="mx-sm-3"></Form.Control>
                                        <Form.Control.Feedback type="invalid"> 휴대전화를 입력하세요. </Form.Control.Feedback>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Form.Group controlId="formBasicAdd">
                                <Form.Row>
                                    <Form.Label>주 소</Form.Label>

                                    <Col>
                                        <button type="button" onClick={postClick}>우편번호 찾기</button>
                                        {post}
                                        <Form.Control required type="text" id="add2" size="sm" placeholder="상세주소" className="mx-sm-3"></Form.Control>
                                        <Form.Control.Feedback type="invalid" > 상세 주소를 입력하세요. </Form.Control.Feedback>
                                    </Col>
                                </Form.Row>
                            </Form.Group>

                            <Button style={{ background: '#91877F', borderColor: '#91877F' }} type="submit" block>Sign Up</Button>
                        </Form>

                    </Col>
                </Row>

            </Container>
        </div>

    )
}

export default Signup