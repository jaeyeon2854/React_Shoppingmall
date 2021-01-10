import React from 'react'
import { Card, Image, Container, Row, Col, Table, Badge } from 'react-bootstrap'
import mypagetiger from '../mypagetiger.svg';
import person from '../person.svg';


function Mypage() {
  return (
    <Container className="px-5 justify-content-center">
      <h3 className="my-4 mx-3 font-weight-bold">My Page</h3>
      <div className="p-3">
        <Card md={3} className="p-3 mb-4" style={{ background: '#F7F3F3' }}>
          <Row>
            <Col md={4} className="text-center ">
              <Image src={person} roundedCircle className="img-thumbnail" />
            </Col>
            <Col>
              <Row className="my-4 text-center">
                <Col className="text-size-adjust">
                  <h2>
                    <Image src={mypagetiger} width={"30px"} />
                    <strong> Login.user</strong> <small>님, 환영합니다. </small>
                    <Badge className="badge-secondary">New</Badge>

                  </h2>
                </Col>
              </Row>

              <Row className="my-3 px-3">
                <Card.Body>
                    <Card.Text>Email : </Card.Text>
                    <Card.Text>Address : </Card.Text>
                </Card.Body>
              </Row>
            </Col>
          </Row>
        </Card>
        <Row className="my-3 px-3">
          <Table>
            <thead style={{ background: '#F7F3F3' }}>
              <tr>
                <th scope="col">주문현황</th>
                <th scope="col">배송중</th>
                <th scope="col">배송완료</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
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
      </div>

    </Container >

  )

}



export default Mypage
