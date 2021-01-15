import React from 'react'

function PaymentCard() {
    return (
        <Card >
            <Row className="mx-1">
                <Col className="text-center">
                    <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" style={{ width: '20rem' }} />
                </Col>
                <Col md={6} className="p-2">
                    <Card.Body>
                        <input type="image" alt="삭제버튼" src="https://img.icons8.com/fluent-systems-regular/24/000000/close-window.png" className="float-right" onClick={deleteCart} />
                        <Card.Title className="font-weight-bold mt-3">제품명</Card.Title>
                        <Card.Text>가격</Card.Text>
                        <Card.Text>옵션</Card.Text>
                        <Card.Text>수량</Card.Text>
                        <div>
                            <input type="image" alt="마이너스" src="https://img.icons8.com/ios-glyphs/20/000000/minus-math.png" className="align-middle" onClick={minusNum} />
                            <input type="text" style={{ width: '30px' }} className="text-center align-middle mx-1" placeholder="1" value={num} readOnly></input>
                            <input type="image" alt="플러스" src="https://img.icons8.com/ios-glyphs/20/000000/plus-math.png" className="align-middle" onClick={plusNum} />
                        </div>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default PaymentCard
