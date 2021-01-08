import React from 'react'
import { Tab, Tabs, Card, Image, Button, Container, Row, Col } from 'react-bootstrap'
import mypagetiger from '../mypagetiger.svg';
import person from '../person.svg';


function Mypage() {
  return (

    <Container className="justify-content-center py-5">
      <article id="top" class="wrapper style1">
        <Card className="px-3 py-3">
          <Row className="px-3">
            <Image src={person} roundedCircle className="img-thumbnail mx-3 justify-content-center" />
            <Col>
            <Row>
              
              <h1 className="my-4 justify-content-center">
                <Image src={mypagetiger} width={"30px"} />
                <strong> Login.user </strong> 환영합니다!
              </h1>
                  환영합니다.
            </Row>

              <Row className="justify-content-center">
                <Tabs defaultActiveKey="mypage" id="uncontrolled-tab-example">
                  <Tab eventKey="주문현황" title="주문현황">
                  </Tab>
                  <Tab eventKey="배송중" title="배송중">
                  </Tab>
                  <Tab eventKey="배송완료" title="배송완료">
                  </Tab>
                </Tabs>
              </Row>
            </Col>
          </Row>
        </Card>
      </article>


    </Container >

  )

}



export default Mypage