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
                        <Col>
                            <Row>
                                <Card.Text> 주문번호 : <strong>{e._id}</strong>  </Card.Text>
                            </Row>
                            <Row>
                                <Card.Text> 결제금액 : <strong>{e.total}원</strong> </Card.Text>
                            </Row>
                            <Row>
                                <Card.Text> 배송지 : <strong> {e.receiverInfo.address} - {e.receiverInfo.address2}</strong> </Card.Text>
                            </Row>
                            <Row>
                                <Card.Text> 주문날짜 : <strong> {e.createdAt.substring(0, 10)}</strong> </Card.Text>
                            </Row>
                        </Col>
                    </Card.Body>
                )
                )
            }
        </Card>
    )
}

export default OrderCard
