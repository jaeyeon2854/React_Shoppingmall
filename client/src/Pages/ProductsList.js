import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ListCard from '../Components/ListCard';
import Pagination from "../Components/Pagination";
import axios from 'axios';
import catchError from '../utils/catchErrors';
import { Container, Row, Col, Form, FormControl, Button, Dropdown, ButtonGroup, Image } from 'react-bootstrap';

function ProductsList({ match }) {
    const [search, setSearch] = useState({ word: '' })
    const [mainCategory, setMainCategory] = useState(match.params.main.toUpperCase())
    const [subCategory, setSubCategory] = useState([])
    const [productlist, setProductlist] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const [error, setError] = useState('')
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;

    const [sortingName, setSortingName] = useState('정렬')

    function currentPosts(tmp) {
        let currentPosts = 0;
        currentPosts = tmp.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    }

    useEffect(() => {
        setMainCategory(match.params.main.toUpperCase())
    }, [match.params.main])


    useEffect(() => {
        getSubsCategories()
        getProductlist()
    }, [mainCategory])

    function handleChange(event) {
        console.log('handle change', event.target.value)
        setSearch({ word: event.target.value })
    }

    async function handleSearch(event) {
        event.preventDefault()
        try {
            setError('')
            const response = await axios.post(`/api/product/getproduct/main/${mainCategory}`, search)
            console.log("response.data=", response.data)
            setProductlist(response.data)
        } catch (error) {
            catchError(error, setError)
        }
    }

    async function getSubsCategories() {
        try {
            const response = await axios.get(`/api/categories/sub/${mainCategory}`)
            setSubCategory(Object.values(response.data)[0])
            console.log("object value=", Object.values(response.data));
        } catch (error) {
            catchError(error, setError)
        }
    }

    async function getProductlist() {
        try {
            const response = await axios.get(`/api/product/getproduct/main/${mainCategory}`)
            setProductlist(response.data)
        } catch (error) {
            catchError(error, setError)
        }
    }

    async function handleSort(method) {
        console.log(method)
        if (method === "purchase") {
            console.log("thisispurchase")
            productlist.sort(function (a, b) {
                if (a.purchase > b.purchase) {
                  return -1;
                }
                if (a.purchase < b.purchase) {
                  return 1;
                }
                // a must be equal to b
                return 0;
              });
              setSortingName("인기상품")
        } else if(method === "newest"){
            console.log("thisisnewest")
            productlist.sort(function (a, b) {
                if (a.createdAt > b.createdAt) {
                  return -1;
                }
                if (a.createdAt < b.createdAt) {
                  return 1;
                }
                // a must be equal to b
                return 0;
              });
              setSortingName("신상품")

        } else if(method === "lowest"){
            console.log("thisislowest")
            productlist.sort(function (a, b) {
                if (a.price > b.price) {
                  return 1;
                }
                if (a.price < b.price) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });
              setSortingName("낮은가격")
        } else {
            console.log("thisispurchase")
            productlist.sort(function (a, b) {
                if (a.price > b.price) {
                  return -1;
                }
                if (a.price < b.price) {
                  return 1;
                }
                // a must be equal to b
                return 0;
              });
              setSortingName("높은가격")
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
        }
    }

    return (
        <Container>
            {console.log(productlist)}
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
                .btn:hover {
                    background: #91877F;
                    border-color: #91877F;
                }
                `}
            </style>
            <Row className="justify-content-center">
                <Col sm={10} xs={12} >
                    <h1 style={{ fontSize: "3rem" }} className="text-center">{mainCategory}</h1>
                    <div className="text-center">
                        <ButtonGroup className="m-3" variant="outline-light secondary" style={{ display: "inline-block" }}>
                            {subCategory.map(el => (<Button className="m-1" variant="secondary" name={el} onClick={handleSubname}>{el}</Button>))}
                        </ButtonGroup>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-end mx-0 mt-5 mb-3">
                <Form inline onSubmit={handleSearch} className="justify-content-end mx-0 my-2">
                    <FormControl type="text" onChange={handleChange} placeholder="Search" style={{ width: "13rem" }} />
                    <Button  type="submit" className="px-2 mr-2">
                        <img src="/icon/search.svg" width="20" height="20" />
                    </Button>
                </Form>
                <Dropdown className="my-2">
                    <Dropdown.Toggle className="mx-2">{sortingName}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as="button" onClick={() => handleSort('purchase')}>인기상품</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => handleSort('newest')}>신상품</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => handleSort('lowest')}>낮은가격</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => handleSort('highest')}>높은가격</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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
                        <Image src="/sryimready.jpg"
                            style={{ objectFit: "cover", width: "45 rem", height: "45 rem" }}></Image>
                    )
                }
            </Row>
        </Container>
    )
}

export default ProductsList