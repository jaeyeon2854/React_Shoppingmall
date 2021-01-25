import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import AllCard from '../Components/AllCard';
import Pagination from '../Components/Pagination';
import axios from 'axios';
import catchError from '../utils/catchErrors';
import { Row, Form, FormControl, Button, Container } from 'react-bootstrap';

function Admin() {
    const [search, setSearch] = useState({ word: '' })
    const [productlist, setProductlist] = useState([])
    const [error, setError] = useState('')

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

    function handleChange(event) {
        setSearch({ word: event.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            const response = await axios.get(`/api/product/getproduct/all?product=${search.word}`)
            console.log("response.data=", response.data)
            setProductlist(response.data)
            e.target.childNodes[0].value = ''
        } catch (error) {
            catchError(error, setError)
        }
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
                <FormControl type="text" onChange={handleChange} placeholder="Search" style={{ width: "13rem" }} />
                <Button type="submit" className="px-2">
                    <img src="icon/search.svg" width="20" height="20" />
                </Button>
                <Button sm={2} xs={6} type="button" href="/regist" className="ml-1">상품 등록</Button>
            </Row>
            <Row className="justify-content-center m-5">
                {productlist.map(pro => (
                    <AllCard id={pro._id} name={pro.pro_name} price={pro.price} main_img={pro.main_imgUrl} />
                ))}
            </Row>
            <Pagination />
        </Container>
    )
}

export default Admin