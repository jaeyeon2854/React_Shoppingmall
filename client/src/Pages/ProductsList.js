import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ListCard from '../Components/ListCard';
import axios from 'axios';
import catchError from '../utils/catchErrors';
import { Container, Row, Col, Form, FormControl, Button, Dropdown, ButtonGroup, Image } from 'react-bootstrap';

function ProductsList({ match }) {
    const [mainCategory, setMainCategory] = useState(match.params.main.toUpperCase())
    const [subcategory, setSubcategory] = useState([])
    const [productlist, setProductlist] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        setMainCategory(match.params.main.toUpperCase())
    }, [match.params.main])


    useEffect(() => {
        getSubsCategories([])
        getProductlist()
    }, [mainCategory])

    function handleSearch() {

    }

    async function getSubsCategories([]) {
        try {
            const response = await axios.get(`/api/categories/sub/${mainCategory}`)
            setSubcategory(Object.values(response.data)[0])
        } catch (error) {
            catchError(error, setError)
        }
    }

    async function getProductlist() {
        try {
            const response = await axios.get(`/api/product/getproduct/main/${mainCategory}`)
            console.log("response.data=main", response.data)
            setProductlist(response.data)

        } catch (error) {
            catchError(error, setError)
        }
    }


    async function handleSubname(e) {
        const subname = e.target.name
        console.log("subname=", subname)
        try {
            console.log("first test!!!!!!!!")
            const response = await axios.get(`/api/product/getproduct/sub?subname=${subname}`)
            console.log("subname response data=", response.data)
            setProductlist(response.data)
        } catch (error) {
            catchError(error, setError)
            console.log("오류입니다.")
        }
    }


    return (
        <div>
            <style type="text/css">
                {`
                a, a:hover, a:active {
                    color: #000;
                    text-decoration: none;
                }

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
                    <Col className='px-3'>
                        <div className="text-center">
                            <h1 style={{ fontSize: "5.5vmax" }} className="text-center m-1 py-3">{mainCategory}</h1>
                            <ButtonGroup className="mb-3 d-flex flex-nowrap" variant="outline-light secondary" style={{ display: "inline", overflowX: "auto"}}>
                                {subcategory.map(el =>
                                (<Button className="m-1" style={{ fontSize: "0.8vw", whiteSpace: 'nowrap' }} variant="secondary" name={el} onClick={handleSubname}>{el}
                                </Button>))}
                            </ButtonGroup>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-end mx-0 my-2">
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" className="mx-2">정렬</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>인기상품</Dropdown.Item>
                            <Dropdown.Item>신상품</Dropdown.Item>
                            <Dropdown.Item>낮은가격</Dropdown.Item>
                            <Dropdown.Item>높은가격</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form as={Row} onSubmit={handleSearch} className="justify-content-end mx-0">
                        <FormControl type="text" placeholder="Search" style={{ width: "13rem" }} />
                        <Button type="submit" className="search px-2" variant="secondary">
                            <img src="/icon/search.svg" width="20" height="20" />
                        </Button>
                    </Form>
                </Row>
                <Row md={8} sm={12} className="justify-content-center m-2">
                    {productlist.length > 0 ?
                        productlist.map(pro => (

                            <Link to={{
                                pathname: `/product/${pro._id}`,
                                state: {
                                    id: pro._id,
                                    name: pro.pro_name,
                                    price: pro.price,
                                    colors: pro.colors,
                                    sizes: pro.sizes,
                                    description: pro.description,
                                    main_img: pro.main_imgUrl,
                                    detail_imgs: pro.detail_imgUrls
                                }
                            }}>
                                <ListCard id={pro._id} name={pro.pro_name} price={pro.price} main_img={pro.main_imgUrl}
                                />
                            </Link>
                        ))
                        : (
                            <Image src="/sryimready.jpg" className='m-5'
                                style={{ objectFit: "contain", width: "45vw", height: "45vh" }}></Image>

                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default ProductsList