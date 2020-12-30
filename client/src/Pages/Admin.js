import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import MainNav from '../Components/MainNav';
import SubNav from '../Components/SubNav';
import Pagination from '../Components/Pagination';
import search from '../search.svg';
import { Row, Col, Form, FormControl, Button, Card } from 'react-bootstrap';

function Admin() {

    return (
        <div>
            <MainNav />
            <SubNav />
            <Row className="justify-content-end mt-5 mr-3">
                <Col md={4} sm={5} xs={8} as={Form} inline className="justify-content-end">
                    <FormControl type="text" placeholder="Search" className="mr-1" />
                    <Button bg="dark" variant="dark" type="submit" className="px-2">
                        <img src={search} width="20" height="20" />
                    </Button>
                </Col>
                <Col sm={2} xs={3} as={Button} variant="dark" type="button" href="/regist">상품 등록</Col>
            </Row>
            <Row className="mt-5 m-auto justify-content-start">
                <Card className="m-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/67460/1607053816_0.jpg" />
                    <Card.Body>
                        <Card.Title>케이시앵글부츠(SH)</Card.Title>
                        <Card.Text>
                            재고: 8
                            구매자 수: 10
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/48705/1552562469_0.jpg" />
                    <Card.Body>
                        <Card.Title>메리제인플랫(SH)</Card.Title>
                        <Card.Text>
                            재고: 20
                            구매자 수: 60
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/53386/1567390097_2.jpg" />
                    <Card.Body>
                        <Card.Title>솔티드스니커즈(SH)</Card.Title>
                        <Card.Text>
                            재고: 34
                            구매자 수: 5
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/61286/1587540563_0.jpg" />
                    <Card.Body>
                        <Card.Title>버켄슬리퍼(SH)</Card.Title>
                        <Card.Text>
                            재고:
                            구매자 수:
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="https://hotping.co.kr/web/product/big/202011/b8f4c6471955b80fc3991b7d6df8926a.jpg" />
                    <Card.Body>
                        <Card.Title>크레센도 하이힐펌프스</Card.Title>
                        <Card.Text>
                            재고: 35
                            구매자 수: 70
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="https://hotping.co.kr/web/product/big/202011/888e4e8d6a2c2e7da385b079151fcba2.jpg" />
                    <Card.Body>
                        <Card.Title>어텀솔져1cm 스웨이드로퍼</Card.Title>
                        <Card.Text>
                            재고: 40
                            구매자 수: 30
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="https://hotping.co.kr/web/product/big/202007/3308564012eb14e6c11ed621fa7555fb.jpg" />
                    <Card.Body>
                        <Card.Title>포웰3.5cm 스니커즈</Card.Title>
                        <Card.Text>
                            재고: 15
                            구매자 수: 50
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <Pagination />
        </div>

    )
}

export default Admin