import React from 'react'
import { Card, Image, Container, Row, Col, Table } from 'react-bootstrap'
import mypagetiger from '../mypagetiger.svg';
import person from '../person.svg';


function Mypage() {
  return (
    <Container className="px-3 justify-content-center">
      <h3 className="my-4 mx-3 font-weight-bold">My Page</h3>
      <Card md={3} className="pt-3 mb-4" style={{ background: '#F7F3F3' }}>
        <Row>
          <Col md={4} className="text-center">
            <Image src={person} roundedCircle className="img-thumbnail" width={"170rem"} />
          </Col>
          <Col>
            <Row className="mt-4 text-center">
              <Col>
                <h2>
                  <Image src={mypagetiger} width={"30px"} />
                  <strong>@Login.user</strong> <small>님</small>
                </h2>
              </Col>
            </Row>
            <Row className="px-3">
              <Card.Body className="text-center">
                  <strong>KU#</strong>에 오신 <em>@Login.user</em> 님,<br></br>
                진심으로 환영합니다! 즐거운 쇼핑 되세요 ♡
                <Row className="mr-1 text-muted d-flex justify-content-end">
                  
                    <small>문의 : shoppingmall_KU@korea.ac.kr </small>
                </Row>
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

    </Container >

  )

}



export default Mypage
