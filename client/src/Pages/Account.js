import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListCard from '../Components/ListCard';
import axios from 'axios';
import catchError from '../utils/catchErrors';
import { isAuthenticated } from '../utils/auth';
import { Card, Image, Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';

const INIT_ACCOUNT = {
    name: "",
    avatarUrl: ''
}

function Account() {
    const [account, setAccount] = useState(INIT_ACCOUNT)
    const [show, setShow] = useState(false);
    const [proshow, setProshow] = useState(false)
    const [error, setError] = useState("")
    const userId = isAuthenticated()
    const [ordered, setOrdered] = useState([])

    async function getUsername(user) {
        try {
            setError('')
            const response = await axios.get(`/api/users/account/${user}`)
            setAccount(response.data)
        } catch (error) {
            catchError(error, setError)
        }
    }

    useEffect(() => {
        getUsername(userId)
        getOrdered()
    }, [userId])

    const handleChange = (event) => {
        const { name, value, files } = event.target
        if (files) {
            setAccount({ ...account, [name]: files })
        } else {
            setAccount({ ...account, [name]: value })
        }
    }

    const handleBasic = async () => {
        const formData = new FormData()
        formData.append('avatar', '')
        try {
            if (userId) {
                const response = await axios.put(`/api/users/account/${userId}`, formData)
                window.location.reload()
            }
        } catch (error) {
            catchError(error, setError)
        }
        setShow(false)
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (account.avatar) {
            const formData = new FormData()
            formData.append('avatar', account.avatar[0])
            try {
                setError('')
                if (userId) {
                    const response = await axios.put(`/api/users/account/${userId}`, formData)
                    window.location.reload()
                }
            } catch (error) {
                catchError(error, setError)
            }
        } else {
            alert("파일을 선택해주세요.")
        }
    }

    async function getOrdered() {
        try {
            setError('')
            const response = await axios.post(`/api/users/addorder`, { userId: userId })
            const res = response.data
            setOrdered(res)
        } catch (error) {
            catchError(error, setError)
        }
    }

    return (
        <Container className="px-3">
            <style type="text/css">
                {`
                @font-face {
                    font-family: 'Jal_Onuel';
                    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Jal_Onuel.woff') format('woff');
                    font-weight: normal;
                    font-style: normal;
                }
                body{font-family:'Jal_Onuel'}
                a, a:hover, a:active {
                    color: #91877F;
                    text-decoration-color: #91877F;
                }
                `}
            </style>
            <h3 className="my-4 mx-3 font-weight-bold">My Page</h3>
            <Card md={3} className="p-1 mb-4" style={{ background: '#F7F3F3' }}>
                <Row className="p-2">
                    <Col md={5} className="d-flex align-content-center justify-content-center">
                        <Button variant="outline-light" onClick={() => setShow(true)}>
                            {account.avatarUrl ? (
                                <Image src={account.avatarUrl && `/images/${account.avatarUrl}`} className="img-thumbnail"
                                    roundedCircle style={{ objectFit: "cover", width: "10rem", height: "10rem" }} />
                            ) : (
                                    <Image src="/icon/person.svg" className="img-thumbnail"
                                        roundedCircle style={{ objectFit: "cover", width: "10rem", height: "10rem" }} />
                                )}
                        </Button>
                        <Modal show={show} onHide={() => setShow(false)}>
                            <Modal.Header closeButton style={{ background: "#F7F3F3" }}>
                                <Modal.Title >이미지를 변경하시겠습니까?</Modal.Title>
                            </Modal.Header>
                            <Form onSubmit={handleSubmit}>
                                <Modal.Body>
                                    <Form.Control type="file" name="avatar" onChange={handleChange} />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Col className="px-0">
                                        <Button variant="outline-secondary" onClick={handleBasic} className="d-flex justify-content-start"><small>기본이미지로</small></Button>
                                    </Col>
                                    <Button variant="secondary" onClick={() => setShow(false)}>취소</Button>
                                    <Button variant="primary" type="submit" onClick={() => setShow(false)}>저장</Button>
                                </Modal.Footer>
                            </Form>
                        </Modal>
                    </Col>
                    <Col >
                        <Row className="mt-4 text-center">
                            <Col>
                                <h2>
                                    <strong title='회원정보' style={{ cursor: "pointer", textDecoration: 'underline' }} onClick={() => setProshow(true)}>
                                        {account.name}
                                    </strong>
                                    <Modal
                                        size="sm"
                                        show={proshow}
                                        onHide={() => setProshow(false)}>
                                        <Modal.Header closeButton style={{ background: "#F7F3F3" }}>
                                            <Modal.Title>회원정보</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Col className="p-1">
                                                <li><strong>Role :</strong> {account.role}</li>
                                                <li><strong>ID :</strong> {account.id}</li>
                                                <li><strong>Username :</strong> {account.name}</li>
                                                <li><strong>Email :</strong> {account.email}</li>
                                                <li><strong>Tel :</strong> {account.tel}</li>
                                            </Col>
                                        </Modal.Body>
                                    </Modal>
                                    <small>{' '}({account.id}){" "}님</small>
                                </h2>
                            </Col>
                        </Row>
                        <Row className="px-3">
                            <Card.Body className="p-2 text-center">
                                <h4><Link to="/" style={{ textDecoration: "none" }}>
                                    <strong title="홈으로">
                                        <Image src="/icon/mypagetiger.svg" width={"30rem"} roundedCircle className="img-thumbnail" >
                                        </Image>KU#
                                    </strong>
                                </Link>
                를 방문해주신 <em>{account.name}</em> 님,<br />
                진심으로 환영합니다! 즐거운 쇼핑 되세요.
                </h4>
                            </Card.Body>
                        </Row>
                        <Row className="mr-1 text-muted d-flex justify-content-end">
                            <a href="mailto:shoppingmall_KU@korea.ac.kr">
                                <small title="메일보내기"> * 문의 : shoppingmall_KU@korea.ac.kr </small>
                            </a>
                        </Row>
                    </Col>
                </Row>
            </Card>
            <div className='m-2 mb-5'>
                <ListCard ordered={ordered} status={'order'} />
            </div>
        </Container>
    )
}

export default Account