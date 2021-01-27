import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ListCard from '../Components/ListCard';
import axios from 'axios';
import catchError from '../utils/catchErrors';
import { Container, Row } from 'react-bootstrap';


function Home() {
    const INIT_PRODUCT = {
        bestProduct: [],
        newProduct: [],
    }
    const [productlist, setProductlist] = useState(INIT_PRODUCT)
    const [error, setError] = useState('')

    useEffect(() => {
        getProductlist()
    }, [])

    async function getProductlist() {
        try {
            setError('')
            const response = await axios.get(`/api/product/getproduct`)
            setProductlist({ bestProduct: response.data.bestProduct, newProduct: response.data.newProduct })
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
                `}
            </style>
            <div className="my-4">
                <h2 style={{ marginRight: "5rem", marginLeft: "3rem", marginBottom: "2rem" }}><u>Best</u></h2>
                <Row className="justify-content-center mx-0">
                    {productlist.bestProduct.map(pro => (
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
            </div>
            <div className="my-4">
                <h2 style={{ marginRight: "5rem", marginLeft: "3rem", marginBottom: "2rem", marginTop: "2rem" }}><u>New Arrival</u></h2>
                <Row className="justify-content-center mx-0">
                    {productlist.newProduct.map(pro => (
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
            </div>
        </Container>
    )
}

export default Home