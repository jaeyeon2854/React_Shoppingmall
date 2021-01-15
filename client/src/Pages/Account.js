import React, { useEffect, useState } from 'react'
import { Card, Image, Container, Row, Col, Table, Accordion, Button, Form, Modal, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios'
import catchErrors from '../utils/catchErrors';
import { isAuthenticated } from '../utils/auth';

const INIT_ACCOUNT = {
    name: "",
    avatarUrl: ''
}


function Account() {
    const [account, setAccount] = useState(INIT_ACCOUNT)
    const [error, setError] = useState("")
    const userId = isAuthenticated()


    async function getUsername(user) {
        // console.log("tlg")
        try {
            const response = await axios.get(`/api/users/account/${user}`)
            setAccount(response.data)
            // console.log('555555555', response.data);
        } catch (error) {
            catchErrors(error, setError)
            // console.log('error2222', error)
        }
    }

    useEffect(() => {
        getUsername(userId)
    }, [userId])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false)

    const handleShow = () => setShow(true)


    const handleChange = (event) => {
        const { name, value, files } = event.target
        if (files) {
            for (const file of files) {
                // console.log("name=", name, "value=", value, 'file=', file);
            }
            setAccount({ ...account, [name]: files })
        } else {
            console.log("name=", name, "value=", value);
            setAccount({ ...account, [name]: value })
        }
    }

    const handleBasic = async (event) => {
        const formData = new FormData()
        formData.append('avatar', '')
        try {
            if (userId) {
                const response = await axios.put(`/api/users/account/${userId}`, formData)
                console.log(response.data)
                window.location.reload()
            }
        } catch (error) {
            catchErrors(error, setError)
        }
        setShow(false)
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        if (account.avatar) {
            const formData = new FormData()
            formData.append('avatar', account.avatar[0])
            try {
                if (userId) {
                    const response = await axios.put(`/api/users/account/${userId}`, formData)
                    console.log(response.data)
                    window.location.reload()
                }
            } catch (error) {
                catchErrors(error, setError)
            }
        } else {
            alert("파일을 선택해주세요.")
        } 
    }

    return (

        <Container className="px-3">
            <h3 className="my-4 mx-3 font-weight-bold">My Page</h3>
            <Card md={3} className="p-1 mb-4" style={{ background: '#F7F3F3' }}>
                <Row className="p-2">
                    <Col md={5} className="d-flex align-content-center justify-content-center">
                        <Button variant="outline-light" onClick={handleShow}>
                            {account.avatarUrl ? (
                                <Image src={account.avatarUrl && `/image/${account.avatarUrl}`} className="img-thumbnail"
                                    roundedCircle style={{ objectFit: "cover", width: "10rem", height: "10rem" }} />
                            ) : (
                                    <Image src="/icon/person.svg" className="img-thumbnail"
                                        roundedCircle style={{ objectFit: "cover", width: "10rem", height: "10rem" }} />
                                )}
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>이미지를 변경하시겠습니까?</Modal.Title>
                            </Modal.Header>
                            <Form onSubmit={handleSubmit}>
                                <Modal.Body>
                                    <Form.Control type="file" name="avatar" onChange={handleChange} />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Col className="px-0">
                                        <Button variant="outline-secondary" onClick={handleBasic}
                                            className="d-flex justify-content-start"><small>기본이미지로</small></Button>
                                        {/* 기본이미지로 보내기 */}
                                    </Col>
                                    <Button variant="secondary" onClick={handleClose}>취소</Button>
                                    <Button variant="primary" type="submit" onClick={handleClose}>저장</Button>
                                </Modal.Footer>
                            </Form>
                        </Modal>
                    </Col>
                    <Col >
                        <Row className="mt-4 text-center">
                            <Col>
                                <h2>
                                    <strong>{account.name}</strong> <small>({account.id}){" "}님</small>
                                </h2>
                            </Col>
                        </Row>
                        <Row className="px-3">
                            <Card.Body className="p-2 text-center">
                                <h4><Link to="/" class="link-warning">
                                    <strong title="홈으로">
                                        <Image src="/icon/mypagetiger.svg" width={"30rem"} roundedCircle className="img-thumbnail" >
                                        </Image>KU#
                  </strong>
                                </Link>
                                    {/* 홈페이지로 돌아가기 */}
                를 방문해주신 <em>{account.name}</em> 님,<br></br>
                진심으로 환영합니다! 즐거운 쇼핑 되세요.</h4>
                            </Card.Body>
                        </Row>
                        <Row className="mr-1 text-muted d-flex justify-content-end">
                            <a href="mailto:shoppingmall_KU@korea.ac.kr">
                                <small title="메일보내기"> * 문의 : shoppingmall_KU@korea.ac.kr </small>
                            </a>
                            {/* 쇼핑몰 문의 메일보내기 */}
                        </Row>
                    </Col>
                </Row>
            </Card>
            <Accordion>
                <Row className="my-3 px-3">
                    <Table>
                        <thead className="text-center" style={{ background: '#F7F3F3' }}>
                            <tr>
                                <th scope="col">주문현황</th>
                                <th scope="col">배송중</th>
                                <th scope="col">배송완료</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">케이시앵글부츠(SH)</th>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Accordion>
        </Container >
    )
}

export default Account