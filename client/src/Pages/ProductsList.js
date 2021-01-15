import React, { useState, useEffect} from 'react';
import { Container, Row, Col, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import ListCard from '../Components/ListCard';
import axios from 'axios';
import catchError from '../utils/catchErrors'
import catchErrors from '../utils/catchErrors';

function ProductsList(props) {
    const [productlist, setProductlist] = useState([])
    const [error, setError] = useState('')
    const [category, setCategory] = useState('')
    const [subcategory, setSubcategory] = useState([])


    useEffect(() => {
        setCategory(props.match.params.product.toUpperCase())
    }, [props.match.params.product])
    
    useEffect(() => {
        getProductlist()         
    }, [category])

    useEffect(async() => {
        getsubproductlist()
    }, [subcategory])

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

    function handleClick(e){
        e.preventDefault()
        return getsubproductlist()       
    }

    async function getsubproductlist(){
        try {
            const response = await axios.get(`/api/product/getproduct/${subcategory}`)
            console.log(response.data)
            setProductlist(response.data)
        } catch (error) {
            catchErrors(error,setError)
        }
    }

    return (
        <div>
            {console.log("match.params=",category)}
            {console.log("props=",props)}
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
                        <h1 style={{ fontSize: "3rem" }} className="text-center">{category}</h1>
                        <div className="text-center">{subcategory.map((ele) => (
                            <Button className="m-1" onClick={handleClick}>{ele}</Button>
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
                                <img src="/icon/search.svg" width="20" height="20" />
                            </Button>
                        </Form>
                    </Form>
                </Row>
                <Row md={8} sm={12} className="justify-content-start m-2">
                    <ListCard productlist={productlist}/>
                </Row>
            </Container>
            {/* <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} /> */}
        </div>
    )
}

export default ProductsList