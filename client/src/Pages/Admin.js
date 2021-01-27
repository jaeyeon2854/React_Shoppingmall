import React, { useState, useEffect, useRef } from 'react';
import AllCard from '../Components/AllCard';
import Pagination from "../Components/Pagination";
import axios from 'axios';
import catchError from '../utils/catchErrors';
import { Row, Form, FormControl, Button, Container } from 'react-bootstrap';

function Admin() {
    const INIT_STATUS = { indexOfFirst: 0, indexOfLast: 10 }
    const [search, setSearch] = useState({ word: '' })
    const [productlist, setProductlist] = useState([])
    const [status, setStatus] = useState(INIT_STATUS)
    const [currentPage, setCurrentPage] = useState(1)
    const [error, setError] = useState('')
    const searchref = useRef(null)
    const per = 10;

    useEffect(() => {
        getProductlist()
    }, [])

    useEffect(() => {
        setStatus({ indexOfFirst: (currentPage - 1) * per, indexOfLast: currentPage * per })
    }, [currentPage])

    function currentPosts(items) {
        let currentPosts = 0;
        currentPosts = items.slice(status.indexOfFirst, status.indexOfLast);
        return currentPosts
    }

    async function getProductlist() {
        try {
            setError('')
            const response = await axios.get(`/api/product/getproduct/all`)
            setProductlist(response.data)
            setCurrentPage(1)
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
            setProductlist(response.data)
            setCurrentPage(1)
        } catch (error) {
            catchError(error, setError)
        } finally {
            searchref.current.value = ''
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
                .btn {
                    background-color: #CDC5C2;
                    border-color: #CDC5C2;
                }
                .btn:hover {
                    background-color: #91877F;
                    border-color: #91877F;
                }
                .btn-primary.focus, .btn-primary:focus {
                    background-color: #91877F;
                    border-color: #91877F;
                    box-shadow: 0 0 0 0;
                }
                .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
                    background-color: #91877F;
                    border-color: #91877F;
                }
                `}
            </style>
            <Row as={Form} onSubmit={handleSubmit} className="justify-content-end mx-0 my-5">
                <FormControl ref={searchref} type="text" onChange={handleChange} placeholder="Search" style={{ width: "13rem" }} />
                <Button type="submit" className="px-2">
                    <img src="icon/search.svg" width="20" height="20" />
                </Button>
                <Button sm={2} xs={6} type="button" href="/regist" className="ml-1">상품 등록</Button>
            </Row>
            <Row className="justify-content-center m-5">
                {currentPosts(productlist).map(pro => (
                    <AllCard id={pro._id} name={pro.pro_name} price={pro.price} main_img={pro.main_imgUrl} />
                ))}
            </Row>
            <Pagination index={currentPage} totalPages={Math.ceil(productlist.length / per)} handlePage={setCurrentPage} />
        </Container>
    )
}

export default Admin