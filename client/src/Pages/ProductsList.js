import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ListCard from '../Components/ListCard';
import Pagination from "../Components/Pagination";
import axios from 'axios';
import catchError from '../utils/catchErrors';
import { Container, Row, Col, Form, FormControl, Button, Dropdown, ButtonGroup, Image } from 'react-bootstrap';

function ProductsList({ match }) {
    const [search, setSearch] = useState({ word: '' })
    const [sortingName, setSortingName] = useState('정렬')
    const [mainCategory, setMainCategory] = useState(match.params.main.toUpperCase())
    const [subCategory, setSubCategory] = useState([])
    const [productlist, setProductlist] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);
    const [error, setError] = useState('')
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const searchref = useRef(null)

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
        setSearch({ word: event.target.value })
    }

    async function handleSearch(e) {
        e.preventDefault()
        try {
            setError('')
            const response = await axios.get(`/api/product/getproduct/main/${mainCategory}?product=${search.word}`)
            console.log("response.data=", response.data)
            setProductlist(response.data)
        } catch (error) {
            catchError(error, setError)
        } finally {
            searchref.current.value = ''
        }
    }

    async function getSubsCategories() {
        try {
            setError('')
            const response = await axios.get(`/api/categories/sub/${mainCategory}`)
            setSubCategory(Object.values(response.data)[0])
            console.log("object value=", Object.values(response.data));
        } catch (error) {
            catchError(error, setError)
        }
    }

    async function getProductlist() {
        try {
            setError('')
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
        } else if (method === "newest") {
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

        } else if (method === "lowest") {
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
        try {
            console.log("first test!!!!!!!!")
            const response = await axios.get(`/api/product/getproduct/sub?subname=${subname}`)
            console.log("subname response data=", response.data)
            setProductlist(response.data)
        } catch (error) {
            catchError(error, setError)
        }
    }

    if (error) {
        alert(`${error}`)
        setError('')
        searchref.current.value = ''
    }

    return (
        <Container>
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
                    background-color: #91877F;
                    border-color: #91877F;
                }
                .dropdown-item:hover, .dropdown-item:active {
                    background-color: #91877F;
                    color: #fff;
                }
                `}
            </style>
            <Row className="justify-content-center" >
                <Col className='px-3'>
                    <div className="text-center">
                        <h1 style={{ fontSize: "5.5vmax" }} className="text-center m-1 py-3">{mainCategory}</h1>
                        <ButtonGroup className="mb-3" style={{ display: "inline" }}>
                            {subCategory.map(el =>
                                (<Button className="m-1" style={{ fontSize: "0.8vw" }} name={el} onClick={handleSubname}>{el}</Button>))}
                        </ButtonGroup>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-end mx-0 mt-5 mb-3">
                <Dropdown>
                    <Dropdown.Toggle className="mx-2">정렬</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as="button" onClick={() => handleSort('purchase')}>인기상품</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => handleSort('newest')}>신상품</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => handleSort('lowest')}>낮은가격</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={() => handleSort('highest')}>높은가격</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Form inline onSubmit={handleSearch} className="justify-content-end mx-0 my-2">
                    <FormControl ref={searchref} type="text" onChange={handleChange} placeholder="Search" style={{ width: "13rem" }} />
                    <Button type="submit" className="px-2 mr-2">
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
    )
}

export default ProductsList