import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isAuthenticated } from '../utils/auth';
import catchErrors from '../utils/catchErrors';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';

function PaymentCompleted() {
    const user = isAuthenticated()
    const [error, setError] = useState()
    const [order, setOrder] = useState([])
    const [total, setTotal] = useState(0)
    const [receiverInfo, setReceiverInfo] = useState({})
    const [num, setNum] = useState('')

    useEffect(() => {
        getOrder()
    }, [user])

    async function getOrder() {
        try {
            setError('')
            const response = await axios.get(`/api/order/showorder/${user}`)
            setNum(response.data._id)
            setOrder(response.data.products)
            setTotal(response.data.total)
            setReceiverInfo(response.data.receiverInfo)
        } catch (error) {
            catchErrors(error, setError)
        }
    }

    return (
        <Container>
            <div className="mx-3 my-5 text-center px-3 py-4 border">
                <div className="mb-1">
                    <h5 className=" font-weight-bold" style={{ display: 'inline' }}>고객님의 </h5>
                    <h5 className=" font-weight-bold text-danger" style={{ display: 'inline' }}>주문이 완료</h5>
                    <h5 className=" font-weight-bold " style={{ display: 'inline' }}>되었습니다!</h5>
                </div>
                <div className="my-2">주문번호: {num}</div>
                <div className="mb-0">주문내역 확인은 마이페이지의 </div>
                <div> "주문/배송조회"에서 하실 수 있습니다.</div>
            </div>
            <h3 className="text-center font-weight-bold my-3">주문내역</h3>
            <h5 className="font-weight-bold py-3 border-top border-bottom text-center" style={{ background: '#F7F3F3' }}>받는사람 정보</h5>
            <div className="m-3">
                <Row>
                    <Col xs={4} className="text-right">이름</Col>
                    <Col>{receiverInfo.name}</Col>
                </Row>
                <Row>
                    <Col xs={4} className="text-right">전화번호</Col>
                    <Col>{receiverInfo.tel}</Col>
                </Row>
                <Row>
                    <Col xs={4} className="text-right">주소</Col>
                    <Col>{receiverInfo.address}{receiverInfo.address2}</Col>
                </Row>
            </div>
            <h5 className="font-weight-bold py-3 border-top border-bottom text-center" style={{ background: '#F7F3F3' }}>주문 상품 정보</h5>
            {order.map((e) => (
                <Card className="mx-2">
                    <Row className="mx-1">
                        <Col className="text-center">
                            <Card.Img className="img-fluid" variant="top" src={e.productId.main_imgUrl && `/images/${e.productId.main_imgUrl}`} style={{ width: '20rem' }} />
                        </Col>
                        <Col md={6} className="p-2">
                            <Card.Body>
                                <Card.Title className="font-weight-bold mt-3">{e.productId.pro_name}</Card.Title>
                                <Card.Text className="mb-0">가격: {e.productId.price}원</Card.Text>
                                <Card.Text className="mb-0">옵션: {e.size}/{e.color}</Card.Text>
                                <Card.Text>수량: {e.count}</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            ))
            }
            <Row className="m-3 font-weight-bold py-3" style={{ background: '#F7F3F3' }}>
                <Col xs={6} className="text-right">총 결제금액:</Col>
                <Col>{total}원</Col>
            </Row>
            <div className="text-center my-3">
                <Button href="/" className="mx-1" style={{ background: "#91877F", borderColor: '#91877F', width: "7rem" }}>홈으로</Button>
                <Button href="/account" className="mx-1" style={{ background: "#91877F", borderColor: '#91877F', width: "7rem" }}>마이페이지</Button>
            </div>
        </Container>
    )
}

export default PaymentCompleted