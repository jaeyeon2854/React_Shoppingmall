import React, { useEffect, useState } from 'react'
import { Card, Image, Container, Row, Col, Table, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import person from '../person.svg';
import mypagetiger from '../mypagetiger.svg';
import catchErrors from '../utils/catchErrors';
import { isAuthenticated } from '../utils/auth'
import axios from 'axios';

const INIT_PROFILE = {
  name: "",
  avatar: "",
  tel: ""
}

function Mypage() {

  const [profile, setProfile] = useState(INIT_PROFILE)
  const [error, setError] = useState("")

  const user = isAuthenticated()

  async function getProfile(user) {
    try {
      const response = await axios.get(`/api/users/Mypage/${user}`)
      setProfile(response.data)
    } catch (error) {
      catchErrors(error, setError)
    }
  }

  useEffect(() => {
    getProfile(user)
  }, [user])


  return (
    <Container className="px-3">
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
                  <strong>방가방가{user.name}</strong> <small>님</small>
                </h2>
              </Col>
            </Row>
            <Row className="px-3">
              <Card.Body className="text-center">
                <h4><Link to="/">
                  <strong title="홈으로">
                    <Image src={mypagetiger} width={"30rem"} roundedCircle className="img-thumbnail" >
                    </Image>KU#
                  </strong>
                </Link>
                  {/* 홈페이지로 돌아가기 */}
                  에 오신 <em> 방가방가{user.name}</em> 님,<br></br>
                진심으로 환영합니다! 즐거운 쇼핑 되세요.</h4>
                <Row className="mr-1 text-muted d-flex justify-content-end">
                  <a href="mailto:shoppingmall_KU@korea.ac.kr">
                    <small title="메일보내기"> 문의 : shoppingmall_KU@korea.ac.kr </small>
                  </a>
                  {/* 쇼핑몰 문의 메일보내기 */}
                </Row>
              </Card.Body>
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



export default Mypage
