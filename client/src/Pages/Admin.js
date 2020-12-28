import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import MainNav from '../Components/MainNav';
import SubNav from '../Components/SubNav';
import Pagination from '../Components/Pagination';
import search from '../search.svg';
import { Row, Col, Form, FormControl, Button, CardColumns, Card } from 'react-bootstrap';

function Admin() {

    return (
        <div>
            <MainNav />
            <SubNav />
            <Row className="justify-content-end mt-5 mr-3">
                <Col md={4} sm={5} xs={8} as={Form} inline className="justify-content-end">
                    <FormControl type="text" placeholder="Search" className="mr-1" />
                    <Button bg="dark" variant="dark" type="submit">Search
                        {/* <img src={search} className="text-light"/> */}
                    </Button>
                </Col>
                <Col sm={2} xs={3} as={Button} variant="dark" type="button" href="/:id/productsregist">상품 등록</Col>
            </Row>
            <Row className="mt-5 m-auto justify-content-start">
                <Card className="m-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="/img/Jimin_(2).jpg" />
                    <Card.Body>
                        <Card.Title>케이시앵글부트</Card.Title>
                        <Card.Text>
                            재고:
                            구매자 수:
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>메리제인플랫(S)</Card.Title>
                        <Card.Text>
                            재고:
                            구매자 수:
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>케이시앵글부트</Card.Title>
                        <Card.Text>
                            재고:
                            구매자 수:
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>케이시앵글부트</Card.Title>
                        <Card.Text>
                            재고:
                            구매자 수:
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>케이시앵글부트</Card.Title>
                        <Card.Text>
                            재고:
                            구매자 수:
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>케이시앵글부트</Card.Title>
                        <Card.Text>
                            재고:
                            구매자 수:
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>케이시앵글부트</Card.Title>
                        <Card.Text>
                            재고:
                            구매자 수:
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>케이시앵글부트</Card.Title>
                        <Card.Text>
                            재고:
                            구매자 수:
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>케이시앵글부트</Card.Title>
                        <Card.Text>
                            재고:
                            구매자 수:
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>케이시앵글부트</Card.Title>
                        <Card.Text>
                            재고:
                            구매자 수:
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>케이시앵글부트</Card.Title>
                        <Card.Text>
                            재고:
                            구매자 수:
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <Pagination />
        </div>

    )
}

export default Admin