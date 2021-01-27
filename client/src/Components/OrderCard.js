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
                        <Card.Text>
                            <Col>
                                <Row className=''>
                                    <Col sm={4} xs={4} className='p-1'>주문번호 :</Col>
                                    <Col sm={8} xs={8} className='p-1'><strong>{e._id}</strong></Col>

                                    <Col sm={4} xs={4} className='p-1'>결제금액 :</Col>
                                    <Col sm={8} xs={8} className='p-1'><strong>{e.total}원</strong></Col>

                                    <Col sm={4} xs={4} className='p-1'>배송지 :</Col>
                                    <Col sm={8} xs={8} className='p-1'><strong> {e.receiverInfo.address} / </strong><strong><small> {e.receiverInfo.address2}</small></strong></Col>

                                    <Col sm={4} xs={4} className='p-1'>주문날짜 :</Col>
                                    <Col sm={8} xs={8} className='p-1'><strong>{e.createdAt.substring(0, 10)}</strong></Col>
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
