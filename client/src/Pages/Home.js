import React, { useState, useEffect, useRef } from 'react';
import MainNav from '../Components/MainNav';
import SubNav from '../Components/SubNav';
import { Card, Container, Row } from 'react-bootstrap';


function Home() {

    return (
        <div>
            <MainNav />
            <SubNav />
            <Container>
                <div className="my-3">
                    <h3 ><u>Best</u></h3>
                    <Row className="justify-content-center">
                        <Card className="mx-1" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </div>
                <div className="my-3">
                    <h3><u>New Arrival</u></h3>
                    <Row className="justify-content-center">
                        <Card className="mx-1" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1" style={{ width: '18rem' }}>
                            <Card.Img className="img-fluid" variant="top" src="img/asd.jpg" />
                            <Card.Body>
                                <Card.Title className="font-weight-bold">제품명</Card.Title>
                                <Card.Text>가격</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mx-1" style={{ width: '18rem' }}>
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