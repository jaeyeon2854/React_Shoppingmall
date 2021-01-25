import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ListCard from '../Components/ListCard';
import Pagination from "../Components/Pagination";
import axios from 'axios';
import catchError from '../utils/catchErrors';
import { Container, Row, Col, Form, FormControl, Button, Dropdown, ButtonGroup } from 'react-bootstrap';

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

    async function handleClick(sub) {
        console.log("sub=", sub)
        try {
            const response = await axios.get(`/api/product/getproduct/${mainCategory}/${sub}`)
            console.log("response.data=", response.data)
            setProductlist(response.data)

        } catch (error) {
            catchError(error, setError)
        }
    }

    function handleChange(event) {
        console.log('handle change', event.target.value)
        setSearch({ word: event.target.value })
    }

    async function handleSearch(event) {
        console.log('search', search)
        event.preventDefault()
        console.log("tlfgod")
        try {
            setError('')
            const response = await axios.post(`/api/product/getproduct/${mainCategory}`, search)
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
            const response = await axios.get(`/api/product/getproduct/${mainCategory}`)
            setProductlist(response.data)
        } catch (error) {
            catchError(error, setError)
        }
    }

    async function handleSort(method) {
        try {
            const response = await axios.get(`/api/product/getproduct/?q=${method}`)
            setProductlist(response.data)
        } catch (error) {
            catchError(error, setError)
        }
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
                    background: #91877F;
                    border-color: #91877F;
                }
                `}
            </style>
            <Row className="justify-content-center">
                <Col sm={10} xs={12} >
                    <h1 style={{ fontSize: "3rem" }} className="text-center">{mainCategory}</h1>
                    <div className="text-center">
                        <ButtonGroup className="d-flex flex-wrap">
                            {subCategory.map(el => (<Button className="m-1" onClick={() => handleClick(el)}>{el}</Button>))}
                        </ButtonGroup>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-end mx-0 my-5">
                <Dropdown>
                    <Dropdown.Toggle className="mx-2">정렬</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleSort('purchase')}>인기상품</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSort('newest')}>신상품</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSort('lowest')}>낮은가격</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleSort('highest')}>높은가격</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Form inline onSubmit={handleSearch} className="justify-content-end mx-0">
                    <FormControl type="text" onChange={handleChange} placeholder="Search" style={{ width: "13rem" }} />
                    <Button  type="submit" className="px-2">
                        <img src="/icon/search.svg" width="20" height="20" />
                    </Button>
                </Form>
            </Row>
            <Row md={8} sm={12} className="justify-content-center m-2">
                {productlist.map(pro => (
                    <ListCard as={Link} id={pro._id} name={pro.pro_name} price={pro.price} main_img={pro.main_imgUrl} to={{
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
                    }} />
                ))}
            </Row>
            {/* <Pagination className="justify-content-center" index={} endPage={} handlePage={}/> */}
        </Container>
    )
}

export default ProductsList