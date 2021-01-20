import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import ListCard from '../Components/ListCard';
import Pagination from '../Components/Pagination';
import axios from 'axios';
import { isAdmin } from "../utils/auth";
import catchError from '../utils/catchErrors';
import { Row, Form, FormControl, Button, Card, Container } from 'react-bootstrap';

function Admin() {
    const [productlist, setProductlist] = useState([])
    const [error, setError] = useState('')
    const role = isAdmin()

    useEffect(() => {
        getProductlist()
    }, [])

    async function getProductlist() {
        try {
            const response = await axios.get(`/api/product/getproduct/all`)
            console.log("response.data=", response.data)
            setProductlist(response.data)
        } catch (error) {
            catchError(error, setError)
        }
    }

    function handleSearch() {

    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    if(!role) {
        alert('죄송합니다.접근 권한이 없습니다.')
        return <Redirect to="/" />
    }

    return (
        <Container>
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
            <Row as={Form} onSubmit={handleSubmit} className="justify-content-end mx-0 my-5">
                <FormControl type="text" placeholder="Search" style={{ width: "13rem" }} />
                <Button type="submit" className="px-2">
                    <img src="icon/search.svg" width="20" height="20" />
                </Button>
                <Button sm={2} xs={6} type="button" href="/regist" className="ml-1">상품 등록</Button>
            </Row>
            <Row className="justify-content-center m-5">
                {productlist.map(pro => (
                    <ListCard id={pro._id} name={pro.pro_name} price={pro.price} main_img={pro.main_imgUrl} />
                ))}
            </Row>
            <Pagination />
        </Container>
    )
}

export default Admin