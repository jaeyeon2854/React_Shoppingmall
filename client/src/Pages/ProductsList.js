import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ListCard from '../Components/ListCard';
import Pagination from '../Components/Pagination';
import axios from 'axios';
import catchError from '../utils/catchErrors';
import { isAuthenticated } from '../utils/auth';
import { Container, Row, Col, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import catchErrors from '../utils/catchErrors';

function ProductsList({ match }) {
    const [mainCategory, setMainCategory] = useState(match.params.main.toUpperCase())
    const [subcategory, setSubcategory] = useState([])
    const [productlist, setProductlist] = useState([])
    const [sub, setSub] = useState([])
    const [error, setError] = useState('')

    // const user=isAuthenticated()

    useEffect(() => {
        getSubsCategories()
        getProductlist()
    }, [mainCategory])

    useEffect(() => {
        setMainCategory(match.params.main.toUpperCase())
    }, [match.params.main])

    function handleSearch() {

    }

    // async function handleClick(subCategory) {
    //     try {
    //         const response = await axios.get(`/api/product/getproduct/${subCategory}`)
    //         console.log("response.data=", response.data)
    //         setProductlist(response.data)
    //     } catch (error) {
    //         catchErrors(error, setError)
    //     }
    // }

    // function handleSubmit(e) {
    //     e.preventDefault()
    // }

    async function getSubsCategories() {
        try {
            const response = await axios.get(`/api/categories/sub/${mainCategory}`)
            console.log("sub", response.data)
            setSubcategory(response.data)
        } catch (error) {
            catchError(error, setError) 
        }
    }

    async function getProductlist() {
        try {
            const response = await axios.get(`/api/product/getproduct/${mainCategory}`)
            console.log("response.data=", response.data)
            setProductlist(response.data)
        } catch (error) {
            catchError(error, setError)
        }
    }

    function handleClick(e){
        e.preventDefault()
        return getsubproductlist()       
    }

    async function getsubproductlist(){
        try {
            const response = await axios.get(`/api/product/getproduct/${subcategory}`)
            console.log("response.data sub=",response.data)
            setProductlist(response.data)
        } catch (error) {
            catchErrors(error,setError)
        }
    }

    return (
        <div>
            {console.log("main=",mainCategory)}
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
                    <Col sm={10} xs={12} >
                        <h1 style={{ fontSize: "3rem" }} className="text-center">{mainCategory}</h1>
                        <div className="text-center">{subcategory.map((ele) => (
                            <Button className="m-1" onClick={(ele) => handleClick(ele)}>{ele}</Button>
                        ))}</div>
                    </Col>
                </Row>
                <Row className="justify-content-end mx-0 my-5">
                    {/* <Form as={Row} onSubmit={handleSubmit} className="justify-content-end mx-0"> */}
                        <Dropdown>
                            <Dropdown.Toggle className="mx-2">정렬</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>인기상품</Dropdown.Item>
                                <Dropdown.Item>신상품</Dropdown.Item>
                                <Dropdown.Item>낮은가격</Dropdown.Item>
                                <Dropdown.Item>높은가격</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form as={Row} onSubmit={handleSearch} className="justify-content-end mx-0">
                            <FormControl type="text" placeholder="Search" style={{ width: "13rem" }} />
                            <Button type="submit" className="search px-2">
                                <img src="/icon/search.svg" width="20" height="20" />
                            </Button>
                        </Form>
                    {/* </Form> */}
                </Row>
                <Row md={8} sm={12} className="justify-content-start m-2">
                    {productlist.map(pro => (
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
                            <ListCard id={pro._id} name={pro.pro_name} price={pro.price} main_img={pro.main_imgUrl} />
                        </Link>
                    ))}
                </Row>
            </Container>
            {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} /> */}
        </div>
    )
}

export default ProductsList