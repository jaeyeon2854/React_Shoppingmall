import React, { useState, useEffect, useRef } from 'react';
import MainNav from '../Components/MainNav';
import SubNav from '../Components/SubNav';
import Pagination from '../Components/Pagination';
import search from '../search.svg';
import { Container, Row, Form, FormControl, Button, Card } from 'react-bootstrap';

function ProductsList() {
    const [sub, setSub] = useState(['PADDED JACKET', 'JACKET', 'JUMPER', 'COAT', 'FLEECE', 'CARDIGAN / VEST'])
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div>
            <style type="text/css">
                {`
                .btn {
                    background-color: #CDC5C2;
                    border-color: #CDC5C2;
                }

                .btn:hover, .btn:active, .btn:focus {
                    background-color: #91877F;
                    border-color: #91877F;
                }
                `}
            </style>
            <MainNav />
            <SubNav />
            <Container>
                <Row className="mx-0 my-4" style={{ flexDirection: "column", alignItems: "center" }}>
                    <h1 style={{fontSize: "3rem"}}>OUTER</h1>
                    <Row>
                        {sub.map((ele) => (
                            <Button>ele</Button>
                        ))}
                    </Row>
                </Row>
                <Row as={Form} onSubmit={handleSubmit} className="justify-content-end mx-0 my-5">
                    <FormControl type="text" placeholder="Search" style={{ width: "13rem" }} />
                    <Button type="submit" className="search px-2">
                        <img src={search} width="20" height="20" />
                    </Button>
                    <Button sm={2} xs={6} type="button" href="/regist" className="ml-1">상품 등록</Button>
                </Row>
                <Row className="justify-content-start m-5">
                    <Card className="mt-5" style={{ width: "18rem", margin: "auto" }}>
                        <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/67460/1607053816_0.jpg" style={{ objectFit: "contain", height: "22rem" }} />
                        <Card.Body>
                            <Card.Title>케이시앵글부츠(SH)</Card.Title>
                            <Card.Text>가격 : 12,000원</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mt-5" style={{ width: "18rem", margin: "auto" }}>
                        <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/48705/1552562469_0.jpg" style={{ objectFit: "contain", height: "22rem" }} />
                        <Card.Body>
                            <Card.Title>메리제인플랫(SH)</Card.Title>
                            <Card.Text>가격 : 12,000원</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mt-5" style={{ width: "18rem", margin: "auto" }}>
                        <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/53386/1567390097_2.jpg" style={{ objectFit: "contain", height: "22rem" }} />
                        <Card.Body>
                            <Card.Title>솔티드스니커즈(SH)</Card.Title>
                            <Card.Text>가격 : 12,000원</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mt-5" style={{ width: "18rem", margin: "auto" }}>
                        <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/61286/1587540563_0.jpg" style={{ objectFit: "contain", height: "22rem" }} />
                        <Card.Body>
                            <Card.Title>버켄슬리퍼(SH)</Card.Title>
                            <Card.Text>가격 : 12,000원</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mt-5" style={{ width: "18rem", margin: "auto" }}>
                        <Card.Img variant="top" src="https://hotping.co.kr/web/product/big/202011/b8f4c6471955b80fc3991b7d6df8926a.jpg" style={{ objectFit: "contain", height: "22rem" }} />
                        <Card.Body>
                            <Card.Title>크레센도 하이힐펌프스</Card.Title>
                            <Card.Text>가격 : 12,000원</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mt-5" style={{ width: "18rem", margin: "auto" }}>
                        <Card.Img variant="top" src="https://hotping.co.kr/web/product/big/202011/888e4e8d6a2c2e7da385b079151fcba2.jpg" style={{ objectFit: "contain", height: "22rem" }} />
                        <Card.Body>
                            <Card.Title>어텀솔져1cm 스웨이드로퍼</Card.Title>
                            <Card.Text>가격 : 12,000원</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mt-5" style={{ width: "18rem", margin: "auto" }}>
                        <Card.Img variant="top" src="https://hotping.co.kr/web/product/big/202007/3308564012eb14e6c11ed621fa7555fb.jpg" style={{ objectFit: "contain", height: "22rem" }} />
                        <Card.Body>
                            <Card.Title>포웰3.5cm 스니커즈</Card.Title>
                            <Card.Text>가격 : 12,000원</Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
            <Pagination />
        </div>
    )
}

export default ProductsList