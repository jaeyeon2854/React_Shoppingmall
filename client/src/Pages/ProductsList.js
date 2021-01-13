import React, { useState, useEffect, useRef } from 'react';
import Pagination from '../Components/Pagination';
import { Container, Row, Col, Form, FormControl, Button, Card, Dropdown } from 'react-bootstrap';
import ListCard from '../Components/ListCard';
import axios from 'axios';
import catchError from '../utils/catchErrors'
import {isAuthenticated} from '../utils/auth'

function ProductsList() {
    const [sub, setSub] = useState(['PADDED JACKET', 'JACKET', 'JUMPER', 'COAT', 'FLEECE', 'CARDIGAN / VEST'])
    const [productlist, setProductlist] = useState([])
    const [error, setError] = useState('')
    const [category, setCategory] = useState('OUTER')

    const user=isAuthenticated()

    useEffect(() => {
        getProductlist(user)
    }, [user])

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

    async function getProductlist() {
        try {
            const response = await axios.get(`/api/product/getproduct/${category}`)
            console.log(response.data)
            setProductlist(response.data)
        } catch (error) {
            catchError(error, setError)
        }
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
                <Row className="justify-content-end mx-0 my-5">
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
                    <ListCard productlist={productlist} />
                </Row>
            </Container>
            {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} /> */}
        </div>
    )
}

export default ProductsList