import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'



function OrderCard(props) {

    return (
        <Card >
            <Card.Title className="font-weight-bold mt-4 text-center"> 주문 현황</Card.Title>
            {
                props.ordered.map((e) => (
                    <Card.Body className='m-1'>
                        {e.products.length > 1 ?
                            <Card.Header className="font-weight-bold mb-3 text-center" style={{ background: '#F7F3F3' }}>
                                {e.products[0].productId.pro_name} 외 {e.products.length - 1}개
                                </Card.Header>
                            : (
                                <Card.Header className="font-weight-bold mb-3 text-center" style={{ background: '#F7F3F3' }}>
                                    {e.products[0].productId.pro_name}
                                </Card.Header>)}
                        <Card.Text >
                            <Col className='justify-content-center'>
                                <Row className='justify-content-center' >
                                    <>
                                        <Col sm={3} xs={5} className='p-1'><li>주문번호 :</li></Col>
                                        <Col sm={8} xs={6} className='p-1'><strong>{e._id}</strong></Col>
                                    </>
                                    <Col sm={3} xs={5} className='p-1'><li>결제금액 :</li></Col>
                                    <Col sm={8} xs={6} className='p-1'><strong>{e.total}원</strong></Col>

                                    <Col sm={3} xs={5} className='p-1'><li>배송지 :</li></Col>
                                    <Col sm={8} xs={6} className='p-1'><strong> {e.receiverInfo.address}</strong> <br />( {e.receiverInfo.address2} )</Col>

                                    <Col sm={3} xs={5} className='p-1'><li>주문날짜 :</li></Col>
                                    <Col sm={8} xs={6} className='p-1'><strong>{e.createdAt.substring(0, 10)}</strong></Col>
                                </Row>
                            </Col>
                        </Card.Text>
                    </Card.Body>
                )
                )
            }
        </Card>

    )
}

export default OrderCard
