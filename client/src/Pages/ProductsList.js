import React, { useState, useEffect, useRef } from 'react';
import Pagination from '../Components/Pagination';
import { Container, Row, Col, Form, FormControl, Button, Card, Dropdown } from 'react-bootstrap';

function ProductsList() {
    const [sub, setSub] = useState(['PADDED JACKET', 'JACKET', 'JUMPER', 'COAT', 'FLEECE', 'CARDIGAN / VEST'])

    // useEffect(() => {
    //     getProfile(user)
    // }, [user])

    // async function getProfile(user){
    //     console.log(user)
    //     try {
    //         const response = await axios.get(`/api/users/profile/${user}`)
    //         setProfile(response.data)
    //     } catch (error) {
    //         catchErrors(error, setError)
    //     }
    // }

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

                .btn:hover, .btn:active, .btn:focus, .show>.btn-primary.dropdown-toggle {
                    background-color: #91877F;
                    border-color: #91877F;
                }
                `}
            </style>
            <Container>
                <Row className="justify-content-center" >
                    <Col sm={10} xs={12} >
                        <h1 style={{ fontSize: "3rem" }} className="text-center">OUTER</h1>
                        <div className="text-center">{sub.map((ele) => (
                            <Button className="m-1">{ele}</Button>
                        ))}</div>
                    </Col>
                </Row>
                <Row className="justify-content-between mx-0 my-5">
                    <Form as={Row} onSubmit={handleSubmit} className="justify-content-end mx-0">
                        <Dropdown>
                            <Dropdown.Toggle className="mx-2">정렬</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>인기상품</Dropdown.Item>
                                <Dropdown.Item>신상품</Dropdown.Item>
                                <Dropdown.Item>낮은가격</Dropdown.Item>
                                <Dropdown.Item>높은가격</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form as={Row} onSubmit={handleSubmit} className="justify-content-end mx-0">
                            <FormControl type="text" placeholder="Search" style={{ width: "13rem" }} />
                            <Button type="submit" className="search px-2">
                                <img src="icon/search.svg" width="20" height="20" />
                            </Button>
                        </Form>
                    </Form>
                </Row>
                <Row md={8} sm={12} className="justify-content-start m-2">
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
            {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} /> */}
        </div>
    )
}

export default ProductsList