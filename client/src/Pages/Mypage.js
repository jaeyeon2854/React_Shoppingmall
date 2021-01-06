import React from 'react'
import { ListGroup, ListGroupItem, Nav, Navbar, Card, Image, Button, Container, Row, Col } from 'react-bootstrap'
import mypagetiger from '../mypagetiger.svg';
import MainNav from '../Components/MainNav'
import SubNav from '../Components/SubNav'
import person from '../person.svg';



function Mypage() {
    return (
        <div>
            <MainNav />
            <SubNav />
            <Container>
                <div className="my-5 justify-content-center">
                <Card style={{ background: '#F7F3F3' }}>
                    <button className="my-5 justify-content-center" style={{width: '12rem'}} variant="outline-light">
                    <Image src={person} rounded  />
                    </button>
                    <Card.Body>
                        <Card.Title>
                            <Navbar.Brand href="/admin">
                            <img src={mypagetiger} width="30" height="30" />
                            {' '}NAME
                            </Navbar.Brand>님 환영합니다!
                            </Card.Title>
                         
                        <Card.Subtitle>주문현황</Card.Subtitle>
                        <Card.Text>

                        </Card.Text>
                        <Button variant="secondary" className="mb-2">결제완료</Button><br />
                        <Button variant="secondary" className="mb-2">배송중</Button><br />
                        <Button variant="secondary">배송완료</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className="my-5 p-5" style={{ background: '#F7F3F3' }}>

                    <ListGroup variant="flush">
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active  bg="#91877F" style={{ background: "#91877F", borderColor: '#91877F'}}>
                                공지사항
                                </ListGroup.Item>
                            <ListGroup>
                                <ListGroup.Item> 2021년 1월 적립금 소멸안내</ListGroup.Item>
                                <ListGroup.Item>2021년 새로워진 KU# 멤버십</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                ABOUT KU# SHOPPINGMALL
                                <Card.Text>
                                    상호 : KU패션그룹(주)사업장소재지 | 세종, 연기군 특별자치시, 조치원읍 고려대학교 세종캠퍼스 | 안내전화 : 1599-8861 | 제휴/광고문의 : help@korea.ac.kr | 
                                    사업자등록번호 : 2021-01-06 | 
                                </Card.Text>
                                <Card.Text>
                                    COPYRIGHT (C) 2021 KU#SHOPPINGMALL ALL RIGHTS RESERVED.
                                    </Card.Text>
                            </Card.Body>
                        </ListGroup>
                    </ListGroup>
                </div>
            </Container>
        </div>
    )

}



export default Mypage