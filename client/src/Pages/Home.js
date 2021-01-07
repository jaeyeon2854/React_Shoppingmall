import React, { useState, useEffect, useRef } from 'react';
import MainNav from '../Components/MainNav';
import SubNav from '../Components/SubNav';
import { Card, Container, Row } from 'react-bootstrap';


function Home() {
    return (
        <div>
            <MainNav />
            <SubNav />
            <Container className="my-5">
                <div className="my-4">
                    <h2 style={{ marginRight: "5rem", marginLeft: "3rem", marginBottom: "2rem" }}><u>Best</u></h2>
                    <Row className="justify-content-center mx-0">
                        <Card className="mx-1 my-2" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1 my-2" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1 my-2" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1 my-2" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1 my-2" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1 my-2" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </div>
                <div className="my-4">
                    <h2 style={{ marginRight: "5rem", marginLeft: "3rem", marginBottom: "2rem", marginTop: "2rem" }}><u>New Arrival</u></h2>
                    <Row className="justify-content-center mx-0">
                        <Card className="mx-1 my-2" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1 my-2" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1 my-2" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1 my-2" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1 my-2" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1 my-2" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Home