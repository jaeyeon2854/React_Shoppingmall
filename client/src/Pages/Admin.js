import React, { useState, useEffect, useRef } from 'react';
import MainNav from '../Components/MainNav';
import SubNav from '../Components/SubNav';
import Pagination from '../Components/Pagination';
import search from '../search.svg';
import { Row, Col, Form, FormControl, Button, Card } from 'react-bootstrap';

function Admin() {
    function handleClick(e) {
        const card = e.target.parentNode.parentNode
        console.log(card)
        alert('해당 상품을 성공적으로 삭제하였습니다.')
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
            <Row className="justify-content-end mt-5 mr-3 mb-5">
                <Col as={Form} inline className="justify-content-end">
                    <FormControl type="text" placeholder="Search" className="mr-1" />
                    <Button type="submit" className="px-2">
                        <img src={search} width="20" height="20" />
                    </Button>
                </Col>
                <Col sm={2} xs={3} as={Button} type="button" href="/regist">상품 등록</Col>
            </Row>
            <Row className="justify-content-start m-5">
                <Card className="my-5" style={{ width: "18rem", margin: "auto"}}>
                    <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/67460/1607053816_0.jpg" style={{ objectFit: "contain", height: "22rem" }} />
                    <Card.Body>
                        <Card.Title>케이시앵글부츠(SH)</Card.Title>
                        <Card.Text>
                            재고: 8<br />
                            구매자 수: 10
                        </Card.Text>
                        <Button className="float-right" onClick={(e) => handleClick(e)}>삭제</Button>
                    </Card.Body>
                </Card>
                <Card className="my-5" style={{ width: "18rem", margin: "auto"}}>
                    <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/48705/1552562469_0.jpg" style={{ objectFit: "contain", height: "22rem" }} />
                    <Card.Body>
                        <Card.Title>메리제인플랫(SH)</Card.Title>
                        <Card.Text>
                            재고: 20<br />
                            구매자 수: 60
                        </Card.Text>
                        <Button className="float-right" onClick={(e) => handleClick(e)}>삭제</Button>
                    </Card.Body>
                </Card>
                <Card className="my-5" style={{ width: "18rem", margin: "auto"}}>
                    <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/53386/1567390097_2.jpg" style={{ objectFit: "contain", height: "22rem" }} />
                    <Card.Body>
                        <Card.Title>솔티드스니커즈(SH)</Card.Title>
                        <Card.Text>
                            재고: 34<br />
                            구매자 수: 5
                        </Card.Text>
                        <Button className="float-right" onClick={(e) => handleClick(e)}>삭제</Button>
                    </Card.Body>
                </Card>
                <Card className="my-5" style={{ width: "18rem", margin: "auto"}}>
                    <Card.Img variant="top" src="https://img.sonyunara.com/files/goods/61286/1587540563_0.jpg" style={{ objectFit: "contain", height: "22rem" }} />
                    <Card.Body>
                        <Card.Title>버켄슬리퍼(SH)</Card.Title>
                        <Card.Text>
                            재고: 50<br />
                            구매자 수: 18
                        </Card.Text>
                        <Button className="float-right" onClick={(e) => handleClick(e)}>삭제</Button>
                    </Card.Body>
                </Card>
                <Card className="my-5" style={{ width: "18rem", margin: "auto"}}>
                    <Card.Img variant="top" src="https://hotping.co.kr/web/product/big/202011/b8f4c6471955b80fc3991b7d6df8926a.jpg" style={{ objectFit: "contain", height: "22rem" }} />
                    <Card.Body>
                        <Card.Title>크레센도 하이힐펌프스</Card.Title>
                        <Card.Text>
                            재고: 35<br />
                            구매자 수: 70
                        </Card.Text>
                        <Button className="float-right" onClick={(e) => handleClick(e)}>삭제</Button>
                    </Card.Body>
                </Card>
                <Card className="my-5" style={{ width: "18rem", margin: "auto"}}>
                    <Card.Img variant="top" src="https://hotping.co.kr/web/product/big/202011/888e4e8d6a2c2e7da385b079151fcba2.jpg" style={{ objectFit: "contain", height: "22rem" }} />
                    <Card.Body>
                        <Card.Title>어텀솔져1cm 스웨이드로퍼</Card.Title>
                        <Card.Text>
                            재고: 40<br />
                            구매자 수: 30
                        </Card.Text>
                        <Button className="float-right" onClick={(e) => handleClick(e)}>삭제</Button>
                    </Card.Body>
                </Card>
                <Card className="my-5" style={{ width: "18rem", margin: "auto"}}>
                    <Card.Img variant="top" src="https://hotping.co.kr/web/product/big/202007/3308564012eb14e6c11ed621fa7555fb.jpg" style={{ objectFit: "contain", height: "22rem" }} />
                    <Card.Body>
                        <Card.Title>포웰3.5cm 스니커즈</Card.Title>
                        <Card.Text>
                            재고: 15<br />
                            구매자 수: 50
                        </Card.Text>
                        <Button className="float-right" onClick={(e) => handleClick(e)}>삭제</Button>
                    </Card.Body>
                </Card>
            </Row>
            <Pagination />
        </div>

    )
}

export default Admin